#!/usr/bin/env node
// Version : 1.0
// Contrôles après le passage de Claude, puis fermeture des issues (workflow agent-evaluations.yml).
//
//   node outils/agent-finaliser.mjs verifier
//     - recompile evaluations-data.js (échec = arrêt, rien n'est publié) ;
//     - refuse toute modification hors de evaluations/, notes/ et evaluations-data.js ;
//     - chaque évaluation à corriger doit avoir un fichier de notes cohérent (empreintes des copies
//       reçues uniquement, notes entre 0 et le total) et un corrigé pour chaque question ;
//     - chaque évaluation générée doit exister, être valide et NE PAS contenir de corrigé
//       (le dépôt est public) ;
//     - écrit travail/message-commit.txt.
//   node outils/agent-finaliser.mjs fermer
//     - commente et ferme les issues des évaluations corrigées et celles devenues sans objet.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lireJson = chemin => JSON.parse(readFileSync(join(racine, chemin), "utf8"));
const AUTORISES = [/^evaluations\//, /^notes\//, /^evaluations-data\.js$/];

function fichiersModifies() {
  const sortie = execFileSync("git", ["status", "--porcelain", "--untracked-files=all"], { cwd: racine, encoding: "utf8" });
  return sortie.split("\n").filter(Boolean).map(l => l.slice(3).replace(/^"|"$/g, "").split(" -> ").pop());
}

export function verifier() {
  const travail = lireJson("travail/a-faire.json");
  const erreurs = [];

  try {
    execFileSync("node", ["outils/compiler-evaluations.mjs"], { cwd: racine, encoding: "utf8", stdio: "pipe" });
  } catch (e) {
    erreurs.push(`Compilation impossible :\n${e.stderr || e.message}`);
  }

  const modifies = fichiersModifies();
  const interdits = modifies.filter(f => !AUTORISES.some(r => r.test(f)));
  if (interdits.length) erreurs.push(`Fichiers modifiés hors du périmètre autorisé : ${interdits.join(", ")}`);

  const attendus = new Set(["evaluations-data.js"]);
  for (const c of travail.aCorriger) {
    attendus.add(c.fichierEvaluation).add(c.fichierNotes);
    if (!existsSync(join(racine, c.fichierNotes))) { erreurs.push(`Notes manquantes : ${c.fichierNotes}`); continue; }
    const notes = lireJson(c.fichierNotes).notes || {};
    const recues = new Set(c.copies.map(x => x.empreinte));
    for (const [h, v] of Object.entries(notes)) {
      if (!recues.has(h)) erreurs.push(`${c.fichierNotes} : note pour une copie non reçue (${h.slice(0, 8)})`);
      if (!v || typeof v.note !== "number" || v.note < 0 || v.note > c.total) erreurs.push(`${c.fichierNotes} : note hors de 0 à ${c.total} (${h.slice(0, 8)})`);
    }
    for (const h of recues) if (!(h in notes)) erreurs.push(`${c.fichierNotes} : copie reçue sans note (${h.slice(0, 8)})`);
    const ev = lireJson(c.fichierEvaluation);
    for (const q of ev.questions) if (!ev.corrige || !ev.corrige[q.id]) erreurs.push(`${c.fichierEvaluation} : corrigé manquant pour ${q.id}`);
  }
  for (const g of travail.aGenerer) {
    attendus.add(g.fichier);
    if (!existsSync(join(racine, g.fichier))) { erreurs.push(`Évaluation non générée : ${g.fichier}`); continue; }
    const ev = lireJson(g.fichier);
    if (ev.corrige) erreurs.push(`${g.fichier} : une évaluation ouverte ne doit pas contenir de corrigé (dépôt public)`);
    if (ev.dateLimite !== g.dateLimite) erreurs.push(`${g.fichier} : dateLimite attendue ${g.dateLimite}`);
  }
  // Seule une clôture manuelle (date limite déjà modifiée par le script de préparation) peut toucher
  // d'autres évaluations ; tout autre fichier d'évaluation ou de notes modifié est suspect.
  const clotures = (travail.journal || []).filter(l => l.startsWith("Clôturée : ")).map(l => l.split(" ")[2]);
  for (const f of modifies) {
    if (AUTORISES.some(r => r.test(f)) && !attendus.has(f) && !clotures.some(id => f.endsWith(`/${id}.json`) && f.startsWith("evaluations/"))) {
      erreurs.push(`Modification non prévue : ${f}`);
    }
  }

  if (erreurs.length) {
    erreurs.forEach(e => console.error(`Erreur : ${e}`));
    console.error("\nRien n'est publié. Les réponses restent en attente et seront reprises au prochain passage.");
    process.exit(1);
  }

  const lignes = ["Agent évaluations : mise à jour du " + travail.aujourdhui, ""];
  travail.journal.forEach(l => lignes.push(`- ${l}`));
  travail.aCorriger.forEach(c => lignes.push(`- Corrigée : ${c.classe}/${c.evaluation} (${c.copies.length} copie(s))`));
  travail.aGenerer.forEach(g => lignes.push(`- Nouvelle évaluation : ${g.classe}/${g.id}`));
  if (existsSync(join(racine, "travail/bilan.md"))) lignes.push("", readFileSync(join(racine, "travail/bilan.md"), "utf8").trim());
  writeFileSync(join(racine, "travail/message-commit.txt"), lignes.join("\n") + "\n");
  console.log("Vérifications réussies.");
  console.log(lignes.join("\n"));
}

async function fermer() {
  const travail = lireJson("travail/a-faire.json");
  const repo = process.env.GITHUB_REPOSITORY;
  const enTetes = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" };
  const aFermer = [
    ...travail.aCorriger.flatMap(c => c.issues.map(n => ({ issue: n, raison: `Copie corrigée le ${travail.aujourdhui} : la note et le corrigé sont publiés sur la page Évaluations.` }))),
    ...travail.aFermer,
  ];
  for (const { issue, raison } of aFermer) {
    await fetch(`https://api.github.com/repos/${repo}/issues/${issue}/comments`, { method: "POST", headers: enTetes, body: JSON.stringify({ body: raison }) });
    const r = await fetch(`https://api.github.com/repos/${repo}/issues/${issue}`, { method: "PATCH", headers: enTetes, body: JSON.stringify({ state: "closed", state_reason: "completed" }) });
    console.log(`Issue #${issue} : ${r.ok ? "fermée" : `échec ${r.status}`}`);
  }
  if (!aFermer.length) console.log("Aucune issue à fermer.");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const mode = process.argv[2];
  if (mode === "verifier") verifier();
  else if (mode === "fermer") fermer().catch(e => { console.error(e.message); process.exit(1); });
  else { console.error("Usage : node outils/agent-finaliser.mjs verifier|fermer"); process.exit(1); }
}
