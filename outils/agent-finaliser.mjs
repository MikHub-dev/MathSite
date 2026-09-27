#!/usr/bin/env node
// Version : 3.1
// Skill « deploiement » : contrôles après le passage de Claude, puis fermeture des issues
// (workflow agent-evaluations.yml ; le commit, le push et la mise à jour du site sont faits par le workflow).
//
//   node outils/agent-finaliser.mjs verifier
//     - aucune modification hors de evaluations/, notes/, kpi.json et evaluations-data.js ;
//     - détail par question (details) : une entrée par question, points entre 0 et le barème,
//       total égal à la note ; les réponses de l'élève et le numéro de l'issue sont ajoutés ici ;
//     - notes : les notes déjà publiées restent identiques ; une note par nouvelle copie
//       (empreintes des copies reçues uniquement, entre 0 et le total). Une copie oubliée par
//       l'agent n'est pas bloquante : son issue reste ouverte et elle sera reprise au passage suivant ;
//     - la date de réponse (reponduLe) et la date de correction (corrigeLe) sont ajoutées ici ;
//     - corrigé : seulement pour une évaluation dont la clôture est demandée (corrigé complet et
//       « cloturee » à true) ; toute autre évaluation existante doit rester inchangée ;
//     - nouvelles évaluations : valides, sans corrigé ; une création manquante n'est pas bloquante ;
//     - recompile evaluations-data.js ; écrit travail/message-commit.txt et travail/a-fermer.json.
//   node outils/agent-finaliser.mjs fermer
//     - commente et ferme les issues listées dans travail/a-fermer.json.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const existe = chemin => existsSync(join(racine, chemin));
const lireJson = chemin => JSON.parse(readFileSync(join(racine, chemin), "utf8"));
const ecrireJson = (chemin, d) => writeFileSync(join(racine, chemin), JSON.stringify(d, null, 2) + "\n");
const RAPPEL_METHODE = "Pour des exercices de niveau 3, pensez à mettre le problème en contexte, justifiez les calculs surtout lorsque plusieurs notions sont combinées, rédigez correctement, citez des propriétés, montrez la cohérence de votre raisonnement.";
const AUTORISES = [/^evaluations\//, /^notes\//, /^evaluations-data\.js$/, /^kpi\.json$/];

function git(...args) {
  return execFileSync("git", args, { cwd: racine, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}
function fichiersModifies() {
  return git("status", "--porcelain", "--untracked-files=all").split("\n").filter(Boolean)
    .map(l => l.slice(3).replace(/^"|"$/g, "").split(" -> ").pop())
    .filter(f => !f.startsWith("travail/"));   // dossier de travail de l'agent, jamais publié
}
function versionPubliee(chemin) {
  try { return JSON.parse(git("show", `HEAD:${chemin}`)); } catch (e) { return null; }
}
const memeValeur = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export function verifier() {
  const travail = lireJson("travail/a-faire.json");
  const erreurs = [];
  const avertissements = [];
  const aFermer = [...travail.aFermer];
  const bilan = [];

  const modifies = fichiersModifies();
  const interdits = modifies.filter(f => !AUTORISES.some(r => r.test(f)));
  if (interdits.length) erreurs.push(`Fichiers modifiés hors du périmètre autorisé : ${interdits.join(", ")}`);
  const attendus = new Set(["evaluations-data.js", "kpi.json"]);

  for (const c of travail.aCorriger) {
    attendus.add(c.fichierNotes);
    const avant = versionPubliee(c.fichierNotes);
    const anciennes = (avant && avant.notes) || {};
    const fichier = existe(c.fichierNotes) ? lireJson(c.fichierNotes) : { notes: {} };
    const notes = fichier.notes || {};
    const copies = new Map(c.copies.map(x => [x.empreinte, x]));
    const evCorrigee = lireJson(c.fichierEvaluation);

    for (const [h, v] of Object.entries(anciennes)) {
      if (!memeValeur(notes[h], v)) erreurs.push(`${c.fichierNotes} : une note déjà publiée a été modifiée ou supprimée (${h.slice(0, 8)})`);
    }
    for (const [h, v] of Object.entries(notes)) {
      if (h in anciennes) continue;
      if (!copies.has(h)) { erreurs.push(`${c.fichierNotes} : note pour une copie non reçue (${h.slice(0, 8)})`); continue; }
      if (!v || typeof v.note !== "number" || v.note < 0 || v.note > c.total) { erreurs.push(`${c.fichierNotes} : note hors de 0 à ${c.total} (${h.slice(0, 8)})`); continue; }
      // Détail par question : une entrée par question, points dans le barème, somme = note
      const d = v.details || {};
      let somme = 0;
      for (const q of evCorrigee.questions) {
        const x = d[q.id];
        if (!x || typeof x.points !== "number" || x.points < 0 || x.points > q.points) {
          erreurs.push(`${c.fichierNotes} : détail manquant ou invalide pour ${q.id} (${h.slice(0, 8)})`);
        } else somme += x.points;
      }
      if (Object.keys(d).some(k => !evCorrigee.questions.some(q => q.id === k))) erreurs.push(`${c.fichierNotes} : détail pour une question inconnue (${h.slice(0, 8)})`);
      if (Math.abs(somme - v.note) > 0.01) erreurs.push(`${c.fichierNotes} : la note (${v.note}) n'est pas la somme des points par question (${somme}) (${h.slice(0, 8)})`);
    }
    let corrigees = 0;
    for (const [h, copie] of copies) {
      if (notes[h] && !(h in anciennes)) {
        notes[h] = {
          note: notes[h].note, commentaire: notes[h].commentaire || "", details: notes[h].details,
          reponduLe: copie.recuLe, corrigeLe: travail.aujourdhui, issue: copie.issue,
          reponses: Object.fromEntries((copie.reponses || []).map(r => [r.question, r.reponse])),
        };
        aFermer.push(...copie.issues.map(n => ({ issue: n, raison: `Copie corrigée le ${travail.aujourdhui} : la note est publiée sur la page de l'évaluation.` })));
        corrigees++;
      } else if (!notes[h]) {
        avertissements.push(`${c.fichierNotes} : copie non corrigée (${h.slice(0, 8)}), reprise au prochain passage`);
      }
    }
    if (Object.keys(notes).length) ecrireJson(c.fichierNotes, { ...fichier, notes });
    if (corrigees) bilan.push(`- Corrigée(s) : ${corrigees} copie(s) de ${c.classe}/${c.evaluation}`);

    if (c.cloturer) {
      attendus.add(c.fichierEvaluation);
      const ev = evCorrigee;
      const manque = ev.questions.filter(q => !ev.corrige || !ev.corrige[q.id]).map(q => q.id);
      if (manque.length) erreurs.push(`${c.fichierEvaluation} : fermeture prévue mais corrigé manquant pour ${manque.join(", ")}`);
      if (ev.cloturee !== true) erreurs.push(`${c.fichierEvaluation} : fermeture prévue mais "cloturee" n'est pas à true`);
      const avantEv = versionPubliee(c.fichierEvaluation) || {};
      const sansCorrige = e => { const { corrige, cloturee, ...reste } = e; return reste; };
      if (!memeValeur(sansCorrige(ev), sansCorrige(avantEv))) erreurs.push(`${c.fichierEvaluation} : seuls "corrige" et "cloturee" peuvent changer à la fermeture`);
      bilan.push(`- Fermée : ${c.classe}/${c.evaluation} (corrigé publié)`);
    }
  }

  for (const g of travail.aGenerer) {
    if (!existe(g.fichier)) { avertissements.push(`Évaluation non créée : ${g.fichier} (reprise possible par un nouveau lancement)`); continue; }
    attendus.add(g.fichier);
    const ev = lireJson(g.fichier);
    if (ev.corrige) erreurs.push(`${g.fichier} : une évaluation ouverte ne doit pas contenir de corrigé (dépôt public)`);
    if (ev.cloturee) erreurs.push(`${g.fichier} : une nouvelle évaluation ne peut pas être clôturée`);
    if (ev.date !== g.date) erreurs.push(`${g.fichier} : "date" attendue ${g.date}`);
    if ("dateLimite" in ev) erreurs.push(`${g.fichier} : les évaluations n'ont plus de date limite`);
    if (ev.rappelMethode !== RAPPEL_METHODE) erreurs.push(`${g.fichier} : "rappelMethode" absent ou différent du texte prévu`);
    const qs = Array.isArray(ev.questions) ? ev.questions : [];
    if (qs.some(q => ![1, 2, 3].includes(q.niveau) || typeof q.tempsMinutes !== "number" || q.tempsMinutes <= 0)) {
      erreurs.push(`${g.fichier} : chaque question doit avoir "niveau" (1, 2 ou 3) et "tempsMinutes"`);
    } else {
      for (const n of [1, 2, 3]) if (!qs.some(q => q.niveau === n)) erreurs.push(`${g.fichier} : aucune question de niveau N${n}`);
      const somme = qs.reduce((t, q) => t + q.tempsMinutes, 0);
      if (Math.abs(somme - ev.dureeMinutes) > 2) erreurs.push(`${g.fichier} : somme des temps (${somme} min) différente de la durée conseillée (${ev.dureeMinutes} min)`);
    }
    bilan.push(`- Nouvelle évaluation : ${g.classe}, ${ev.titre || g.id}`);
  }

  for (const f of modifies) {
    if (AUTORISES.some(r => r.test(f)) && !attendus.has(f)) erreurs.push(`Modification non prévue : ${f}`);
  }

  if (!erreurs.length) {
    try {
      execFileSync("node", ["outils/compiler-evaluations.mjs"], { cwd: racine, encoding: "utf8", stdio: "pipe" });
    } catch (e) {
      erreurs.push(`Compilation impossible :\n${e.stderr || e.message}`);
    }
  }

  avertissements.forEach(a => console.warn(`Attention : ${a}`));
  if (erreurs.length) {
    erreurs.forEach(e => console.error(`Erreur : ${e}`));
    console.error("\nRien n'est publié. Les copies restent en attente et seront reprises au prochain passage.");
    process.exit(1);
  }

  const lignes = [`Agent évaluations : passage du ${travail.aujourdhui}`, "", ...travail.journal.map(l => `- ${l}`), ...bilan];
  if (existe("travail/bilan.md")) lignes.push("", readFileSync(join(racine, "travail/bilan.md"), "utf8").trim());
  writeFileSync(join(racine, "travail/message-commit.txt"), lignes.join("\n") + "\n");
  ecrireJson("travail/a-fermer.json", aFermer);
  console.log("Vérifications réussies.");
  console.log(lignes.join("\n"));
}

async function fermer() {
  if (!existe("travail/a-fermer.json")) { console.log("Aucune issue à fermer."); return; }
  const aFermer = lireJson("travail/a-fermer.json");
  const repo = process.env.GITHUB_REPOSITORY;
  const enTetes = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" };
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
