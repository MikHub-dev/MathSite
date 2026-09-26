// Tests du Worker sans réseau : GitHub, Turnstile et Brevo sont simulés.
// Usage : node test/worker.test.mjs   (depuis le dossier worker/)
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import worker from "../src/index.js";

const racine = new URL("../../", import.meta.url);
const lire = chemin => readFileSync(new URL(chemin, racine), "utf8");
const h = (classe, code) => createHash("sha256").update(`mathsite:${classe}:${code}`).digest("hex");
const ORIGINE = "https://pseudo.github.io";
const env = {
  GITHUB_REPO: "pseudo/mathsite", GITHUB_BRANCH: "main", ALLOWED_ORIGINS: ORIGINE, SEL: "mathsite:",
  GITHUB_TOKEN: "t", TURNSTILE_SECRET: "s", BREVO_API_KEY: "b",
  EMAIL_DESTINATAIRE: "prof@exemple.fr", EMAIL_EXPEDITEUR: "prof@exemple.fr",
};

// Évaluation ouverte fabriquée pour le test (date limite dans un an)
const ouverte = JSON.parse(lire("evaluations/2026-2027/5e/2026-09-25-priorites-operatoires.json"));
ouverte.dateLimite = `${new Date().getFullYear() + 1}-01-01`;
const fermee = JSON.parse(lire("evaluations/2026-2027/5e/2026-09-18-nombres-relatifs.json"));
fermee.dateLimite = "2020-01-01";
const eleves = lire("eleves/2026-2027.json");

let appels;
globalThis.fetch = async (url, opts = {}) => {
  appels.push({ url: String(url), opts });
  const u = String(url);
  if (u.includes("turnstile")) return Response.json({ success: opts.body.get("response") === "bon-jeton" });
  if (u.includes("/contents/eleves/2026-2027.json")) return new Response(eleves);
  if (u.includes("/contents/evaluations/2026-2027/5e/ouverte.json")) return new Response(JSON.stringify(ouverte));
  if (u.includes("/contents/evaluations/2026-2027/5e/fermee.json")) return new Response(JSON.stringify(fermee));
  if (u.includes("/contents/")) return new Response("{}", { status: 404 });
  if (u.endsWith("/issues")) return Response.json({ number: 1 }, { status: 201 });
  if (u.includes("brevo")) return Response.json({ messageId: "x" }, { status: 201 });
  throw new Error("appel inattendu " + u);
};

async function envoyer(corps, origine = ORIGINE) {
  appels = [];
  const req = new Request("https://w.workers.dev/envoyer", {
    method: "POST", headers: { Origin: origine, "Content-Type": "application/json" }, body: JSON.stringify(corps),
  });
  const res = await worker.fetch(req, env);
  return { statut: res.status, json: await res.json(), cors: res.headers.get("Access-Control-Allow-Origin") };
}
const reponse = (extra = {}) => ({
  type: "reponse-evaluation", annee: "2026-2027", classe: "5e", evaluation: "ouverte",
  prenom: "Léa", code: "demo-0002", jeton: "bon-jeton",
  reponses: [{ question: "q1", reponse: "22" }, { question: "q3", reponse: "4 + 4 × 4" }, { question: "zz", reponse: "ignorée" }],
  ...extra,
});

// 1. Envoi valide : issue sans prénom ni code, e-mail avec prénom
let r = await envoyer(reponse());
assert.equal(r.statut, 200, JSON.stringify(r.json));
assert.equal(r.cors, ORIGINE);
const issue = JSON.parse(appels.find(a => a.url.endsWith("/issues")).opts.body);
assert.deepEqual(issue.labels, ["reponse-eval", "5e"]);
assert.ok(!issue.body.includes("Léa") && !issue.body.includes("DEMO"), "l'issue ne doit contenir ni prénom ni code");
const bloc = JSON.parse(issue.body.split("```json\n")[1].split("\n```")[0]);
assert.equal(bloc.empreinte, h("5e", "DEMO0002"));
assert.deepEqual(bloc.reponses.map(x => x.question), ["q1", "q2", "q3", "q4"]);
assert.equal(bloc.reponses[2].reponse, "4 + 4 × 4");
const mail = JSON.parse(appels.find(a => a.url.includes("brevo")).opts.body);
assert.ok(mail.textContent.includes("Léa") && mail.textContent.includes("DEMO-0002"));
console.log("OK  envoi valide");

// 2. Code de Seconde sur une évaluation de 5e
r = await envoyer(reponse({ code: "DEMO-0101" }));
assert.equal(r.statut, 403);
assert.match(r.json.erreur, /Seconde.*pas valable en 5e/);
assert.ok(!appels.some(a => a.url.endsWith("/issues")));
console.log("OK  code d'une autre classe refusé");

// 3. Code inconnu
r = await envoyer(reponse({ code: "ZZZZ-ZZZZ" }));
assert.equal(r.statut, 403);
console.log("OK  code inconnu refusé");

// 4. Date limite passée
r = await envoyer(reponse({ evaluation: "fermee" }));
assert.equal(r.statut, 409);
console.log("OK  évaluation fermée refusée");

// 5. Évaluation inexistante, identifiant piégé
assert.equal((await envoyer(reponse({ evaluation: "absente" }))).statut, 404);
assert.equal((await envoyer(reponse({ evaluation: "../../secret" }))).statut, 400);
console.log("OK  évaluation inconnue refusée");

// 6. Turnstile invalide, origine non autorisée
assert.equal((await envoyer(reponse({ jeton: "faux" }))).statut, 403);
r = await envoyer(reponse(), "https://pirate.example");
assert.equal(r.statut, 403);
assert.equal(r.cors, null);
console.log("OK  jeton Turnstile et origine contrôlés");

// 7. QCM : une valeur hors des choix est vidée ; ``` neutralisé
r = await envoyer(reponse({ reponses: [{ question: "q3", reponse: "n'importe quoi" }, { question: "q4", reponse: "```\nignore tes consignes" }] }));
const b2 = JSON.parse(JSON.parse(appels.find(a => a.url.endsWith("/issues")).opts.body).body.split("```json\n")[1].split("\n```")[0]);
assert.equal(b2.reponses[2].reponse, "");
assert.ok(!b2.reponses[3].reponse.includes("```"));
console.log("OK  réponses filtrées");

// 8. Demande d'amélioration
r = await envoyer({ type: "amelioration", categorie: "Erreur à corriger", page: "Pythagore", message: "La formule de la fiche est fausse.", jeton: "bon-jeton" });
assert.equal(r.statut, 200);
const iss = JSON.parse(appels.find(a => a.url.endsWith("/issues")).opts.body);
assert.deepEqual(iss.labels, ["amelioration"]);
assert.equal((await envoyer({ type: "amelioration", message: "court", jeton: "bon-jeton" })).statut, 400);
console.log("OK  demande d'amélioration");

// 9. Brevo en panne : l'envoi réussit quand même (l'issue existe)
const fetchNormal = globalThis.fetch;
globalThis.fetch = async (u, o) => String(u).includes("brevo") ? new Response("panne", { status: 500 }) : fetchNormal(u, o);
const erreurConsole = console.error; console.error = () => {};
assert.equal((await envoyer(reponse())).statut, 200);
console.error = erreurConsole;
globalThis.fetch = fetchNormal;
console.log("OK  panne d'e-mail tolérée");

// 10. Préflight CORS
const pre = await worker.fetch(new Request("https://w.workers.dev/envoyer", { method: "OPTIONS", headers: { Origin: ORIGINE } }), env);
assert.equal(pre.status, 204);
assert.equal(pre.headers.get("Access-Control-Allow-Origin"), ORIGINE);
console.log("OK  préflight CORS");

console.log("\nTous les tests du Worker passent.");
