#!/usr/bin/env node
// Version : 1.0
// Compile les fichiers sources des évaluations en un seul fichier evaluations-data.js,
// chargé par index.html (même principe que jsonMathsite.js : pas de fetch(), le site
// fonctionne aussi en ouvrant index.html directement).
//
// Usage (depuis la racine du dépôt) : node outils/compiler-evaluations.mjs
//
// Sources lues :
//   evaluations/<année>/<classe>/<id>.json   une évaluation (id = nom du fichier)
//   notes/<année>/<classe>/<id>.json         les notes de cette évaluation (clés = empreintes)
//   eleves/<année>.json                      { "<classe>": ["<empreinte>", ...] }
// Le script vérifie les fichiers et s'arrête avec un code d'erreur 1 si l'un d'eux est invalide
// (l'agent Claude de l'étape 3 s'appuie sur ce contrôle avant chaque commit).

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";

const CLASSES = ["5e", "seconde"];
const TYPES = ["qcm", "numerique", "redaction"];
const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const erreurs = [];
const avertissements = [];

const lireJson = chemin => {
  try { return JSON.parse(readFileSync(chemin, "utf8")); }
  catch (e) { erreurs.push(`${rel(chemin)} : JSON invalide (${e.message})`); return null; }
};
const rel = chemin => chemin.slice(racine.length + 1);
const dossiers = chemin => existsSync(chemin) ? readdirSync(chemin).filter(n => statSync(join(chemin, n)).isDirectory()) : [];
const fichiersJson = chemin => existsSync(chemin) ? readdirSync(chemin).filter(n => n.endsWith(".json")).sort() : [];
const estDate = s => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s));

function verifierEvaluation(ev, id, f) {
  const e = msg => erreurs.push(`${f} : ${msg}`);
  if (!/^[a-z0-9-]+$/.test(id)) e("le nom du fichier ne doit contenir que a-z, 0-9 et des tirets");
  for (const champ of ["titre", "chapitre"]) if (typeof ev[champ] !== "string" || !ev[champ].trim()) e(`champ "${champ}" manquant`);
  if (!estDate(ev.date)) e('champ "date" invalide (format AAAA-MM-JJ)');
  if (!estDate(ev.dateLimite)) e('champ "dateLimite" invalide (format AAAA-MM-JJ)');
  if (estDate(ev.date) && estDate(ev.dateLimite) && ev.dateLimite < ev.date) e('"dateLimite" est antérieure à "date"');
  if (!Array.isArray(ev.questions) || ev.questions.length === 0) { e("aucune question"); return 0; }
  const ids = new Set();
  let total = 0;
  ev.questions.forEach((q, i) => {
    const qe = msg => e(`question ${i + 1} : ${msg}`);
    if (typeof q.id !== "string" || !/^[a-z0-9_-]+$/i.test(q.id)) qe('"id" manquant ou invalide');
    else if (ids.has(q.id)) qe(`"id" en double (${q.id})`);
    ids.add(q.id);
    if (!TYPES.includes(q.type)) qe(`"type" doit valoir ${TYPES.join(", ")}`);
    if (typeof q.enonce !== "string" || !q.enonce.trim()) qe('"enonce" manquant');
    if (typeof q.points !== "number" || q.points <= 0) qe('"points" doit être un nombre positif');
    else total += q.points;
    if (q.type === "qcm" && (!Array.isArray(q.choix) || q.choix.length < 2)) qe('un QCM doit avoir au moins 2 "choix"');
  });
  if (ev.corrige !== undefined) {
    if (typeof ev.corrige !== "object" || Array.isArray(ev.corrige)) e('"corrige" doit être un objet { idQuestion: "texte" }');
    else Object.keys(ev.corrige).forEach(k => { if (!ids.has(k)) e(`"corrige" contient une question inconnue (${k})`); });
  }
  return total;
}

const EVALUATIONS = {};
const EVAL_NOTES = {};
const EVAL_ELEVES = {};

for (const annee of dossiers(join(racine, "evaluations"))) {
  if (!/^\d{4}-\d{4}$/.test(annee)) { erreurs.push(`evaluations/${annee} : nom d'année invalide (ex. 2026-2027)`); continue; }
  EVALUATIONS[annee] = {};
  EVAL_NOTES[annee] = {};

  const cheminEleves = join(racine, "eleves", `${annee}.json`);
  const eleves = existsSync(cheminEleves) ? (lireJson(cheminEleves) || {}) : {};
  EVAL_ELEVES[annee] = {};

  for (const classe of CLASSES) {
    const empreintes = Array.isArray(eleves[classe]) ? eleves[classe] : [];
    empreintes.forEach(h => { if (!/^[0-9a-f]{64}$/.test(h)) erreurs.push(`eleves/${annee}.json : empreinte invalide en ${classe}`); });
    EVAL_ELEVES[annee][classe] = empreintes;
    const connues = new Set(empreintes);

    const liste = [];
    const dossierEval = join(racine, "evaluations", annee, classe);
    for (const nom of fichiersJson(dossierEval)) {
      const id = basename(nom, ".json");
      const chemin = join(dossierEval, nom);
      const ev = lireJson(chemin);
      if (!ev) continue;
      const total = verifierEvaluation(ev, id, rel(chemin));
      liste.push({ id, total, ...ev });

      const cheminNotes = join(racine, "notes", annee, classe, nom);
      if (!existsSync(cheminNotes)) continue;
      const n = lireJson(cheminNotes);
      if (!n) continue;
      if (typeof n.notes !== "object" || n.notes === null) { erreurs.push(`${rel(cheminNotes)} : objet "notes" manquant`); continue; }
      for (const [h, v] of Object.entries(n.notes)) {
        if (!/^[0-9a-f]{64}$/.test(h)) erreurs.push(`${rel(cheminNotes)} : clé qui n'est pas une empreinte (${h.slice(0, 12)}...)`);
        if (!v || typeof v.note !== "number" || v.note < 0 || v.note > total) erreurs.push(`${rel(cheminNotes)} : note invalide (doit être entre 0 et ${total})`);
        if (connues.size && !connues.has(h)) avertissements.push(`${rel(cheminNotes)} : empreinte absente de eleves/${annee}.json (${classe})`);
      }
      if (!ev.corrige) avertissements.push(`${rel(chemin)} : notes publiées sans "corrige"`);
      EVAL_NOTES[annee][classe] = EVAL_NOTES[annee][classe] || {};
      EVAL_NOTES[annee][classe][id] = n;
    }
    liste.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
    EVALUATIONS[annee][classe] = liste;
  }
}

avertissements.forEach(a => console.warn(`Attention : ${a}`));
if (erreurs.length) {
  erreurs.forEach(e => console.error(`Erreur : ${e}`));
  console.error(`\n${erreurs.length} erreur(s) : evaluations-data.js n'a PAS été modifié.`);
  process.exit(1);
}

const sortie =
  "// Fichier GÉNÉRÉ par outils/compiler-evaluations.mjs : ne pas le modifier à la main.\n" +
  "// Modifier les sources (evaluations/, notes/, eleves/) puis relancer le script.\n" +
  `window.EVALUATIONS = ${JSON.stringify(EVALUATIONS, null, 1)};\n` +
  `window.EVAL_NOTES = ${JSON.stringify(EVAL_NOTES, null, 1)};\n` +
  `window.EVAL_ELEVES = ${JSON.stringify(EVAL_ELEVES)};\n`;
writeFileSync(join(racine, "evaluations-data.js"), sortie);

const nb = Object.values(EVALUATIONS).flatMap(a => Object.values(a)).flat().length;
console.log(`evaluations-data.js écrit : ${nb} évaluation(s), ${Object.keys(EVALUATIONS).length} année(s).`);
