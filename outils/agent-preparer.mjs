#!/usr/bin/env node
// Version : 3.3
// Préparation du travail de l'agent (1re étape du workflow .github/workflows/agent-evaluations.yml).
// Script déterministe : il décide QUOI faire ; Claude applique ensuite les skills du dossier skills/.
//
// Trois modes (entrée « mode » du workflow, ou « hebdomadaire » pour le passage planifié) :
//   hebdomadaire : le lot de la semaine (N évaluations par classe, programme-evaluations.json) ;
//                  skill creation-evaluation, puis kpi et deploiement. Aucune correction.
//                  Le passage planifié a lieu le dimanche : programmé à 3 h et 4 h UTC, il ne
//                  travaille qu'à partir de 5 h à Paris ; un second passage le même jour ne refait rien.
//   creation     : une évaluation supplémentaire (« generer_classe », « generer_sujet »).
//   niveaux      : maintenance ; ajoute le niveau (N1, N2, N3) et le temps de résolution recommandé
//                  aux questions des évaluations déjà publiées qui n'en ont pas (skill
//                  creation-evaluation, section « Compléter les niveaux »).
//   correction   : les copies en attente des évaluations choisies par l'enseignant (« evaluations »,
//                  identifiants séparés par des virgules) ; skill correction-evaluation. Une évaluation
//                  est fermée (corrigé publié) dès que tous les élèves inscrits de sa classe sont corrigés.
// Copies en attente : issues ouvertes « reponse-eval » créées par le propriétaire du dépôt (compte du
// jeton du Worker) ; pour un élève et une évaluation, seul l'envoi le plus récent compte.
//
// Écrit travail/a-faire.json (non commité) et les sorties « creation », « correction », « travail ».
// Variables : GITHUB_TOKEN, GITHUB_REPOSITORY, EVENEMENT, MODE, EVALUATIONS, GENERER_CLASSE, GENERER_SUJET.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, appendFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const CLASSES = ["5e", "seconde"];
const MARQUEUR = "<!-- mathsite:reponse-evaluation v1 -->";
const MAX_GENERATIONS = 12;
const HEURE_PASSAGE = 5;   // heure de Paris à partir de laquelle le passage planifié travaille
const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const existe = chemin => existsSync(join(racine, chemin));
const lireJson = chemin => JSON.parse(readFileSync(join(racine, chemin), "utf8"));
const ecrireJson = (chemin, donnees) => writeFileSync(join(racine, chemin), JSON.stringify(donnees, null, 2) + "\n");

export function dateParis(decalageJours = 0) {
  const d = new Date(Date.now() + decalageJours * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}
export function heureParis() {
  return Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", hour: "2-digit", hourCycle: "h23" }).format(new Date()));
}
export function anneeScolaire(iso) {
  const [y, m] = iso.split("-").map(Number);
  return m >= 8 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
}
export function slug(texte) {
  return String(texte || "evaluation").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "evaluation";
}
export const estCloturee = ev => ev.cloturee === true || !!ev.corrige;

function evaluationsDeClasse(annee, classe) {
  const dossier = `evaluations/${annee}/${classe}`;
  return existe(dossier) ? readdirSync(join(racine, dossier)).filter(f => f.endsWith(".json")).map(f => f.slice(0, -5)) : [];
}
function trouverEvaluation(id) {
  for (const annee of existe("evaluations") ? readdirSync(join(racine, "evaluations")) : []) {
    for (const classe of CLASSES) {
      if (existe(`evaluations/${annee}/${classe}/${id}.json`)) return { annee, classe };
    }
  }
  return null;
}
function idLibre(annee, classe, base, dejaPris) {
  let id = base;
  for (let n = 2; existe(`evaluations/${annee}/${classe}/${id}.json`) || dejaPris.has(`${classe}/${id}`); n++) id = `${base}-${n}`;
  dejaPris.add(`${classe}/${id}`);
  return id;
}

async function issuesOuvertes() {
  const [proprietaire] = process.env.GITHUB_REPOSITORY.split("/");
  const toutes = [];
  for (let page = 1; page <= 10; page++) {
    const r = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/issues?state=open&labels=reponse-eval&per_page=100&page=${page}`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
    });
    if (!r.ok) throw new Error(`Lecture des issues impossible : ${r.status} ${await r.text()}`);
    const lot = await r.json();
    toutes.push(...lot);
    if (lot.length < 100) break;
  }
  return toutes.filter(i => !i.pull_request
    && i.user && i.user.login.toLowerCase() === proprietaire.toLowerCase()
    && typeof i.body === "string" && i.body.startsWith(MARQUEUR));
}

// Extrait le bloc JSON d'une issue du Worker et le valide ; null si invalide.
export function lireSoumission(issue) {
  try {
    const bloc = issue.body.split("```json\n")[1].split("\n```")[0];
    const d = JSON.parse(bloc);
    const ok = d.type === "reponse-evaluation" && /^\d{4}-\d{4}$/.test(d.annee) && CLASSES.includes(d.classe)
      && /^[a-z0-9-]+$/.test(d.evaluation) && /^[0-9a-f]{64}$/.test(d.empreinte)
      && typeof d.recuLe === "string" && Array.isArray(d.reponses);
    return ok ? { ...d, issue: issue.number } : null;
  } catch (e) {
    return null;
  }
}

function lireProgramme() {
  const defaut = { lotHebdomadaire: { nombreParClasse: 4, points: 10, dureeMinutes: { "5e": 30, seconde: 45 } }, themes: [], evaluations: [] };
  if (!existe("programme-evaluations.json")) return defaut;
  const p = lireJson("programme-evaluations.json");
  return { ...defaut, ...p, lotHebdomadaire: { ...defaut.lotHebdomadaire, ...(p.lotHebdomadaire || {}) } };
}

export async function preparer() {
  const aujourdhui = dateParis();
  const annee = anneeScolaire(aujourdhui);
  const evenement = process.env.EVENEMENT || "workflow_dispatch";
  const mode = evenement === "schedule" ? "hebdomadaire" : (process.env.MODE || "hebdomadaire").trim();
  const journal = [`Mode : ${mode}`];
  const ecrireSorties = (creation, correction, travail) => {
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `creation=${creation}\ncorrection=${correction}\ntravail=${travail}\n`);
  };
  const ecrireNiveaux = niveaux => {
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `niveaux=${niveaux}\n`);
  };
  if (!["hebdomadaire", "creation", "correction", "niveaux"].includes(mode)) throw new Error(`Mode inconnu : ${mode}`);

  // Passage planifié trop tôt (3 h UTC en hiver = 4 h à Paris) : rien à faire.
  if (evenement === "schedule" && heureParis() < HEURE_PASSAGE) {
    console.log(`Passage planifié à ${heureParis()} h (Paris) : l'agent travaille à partir de ${HEURE_PASSAGE} h, rien à faire.`);
    ecrireSorties(false, false, false);
    return null;
  }

  // Recompilation : une modification faite à la main (par exemple eleves/<année>.json) est publiée.
  execFileSync("node", ["outils/compiler-evaluations.mjs"], { cwd: racine, stdio: "inherit" });
  let donneesModifiees = false;
  try {
    donneesModifiees = execFileSync("git", ["status", "--porcelain", "evaluations-data.js"], { cwd: racine, encoding: "utf8" }).trim() !== "";
  } catch (e) { /* hors d'un dépôt git */ }
  if (donneesModifiees) journal.push("evaluations-data.js recompilé (modification faite à la main)");

  // ---------- Correction : évaluations choisies par l'enseignant ----------
  const aCorriger = [];
  const aFermer = [];
  const ignorees = [];
  if (mode === "correction") {
    const choisies = new Set((process.env.EVALUATIONS || "").split(",").map(x => x.trim()).filter(x => /^[a-z0-9-]+$/.test(x)));
    if (!choisies.size) throw new Error("Mode correction : aucune évaluation choisie.");
    const groupes = new Map();
    for (const s of (await issuesOuvertes()).map(lireSoumission)) {
      if (!s || !choisies.has(s.evaluation)) continue;
      const cle = `${s.annee}/${s.classe}/${s.evaluation}`;
      if (!groupes.has(cle)) groupes.set(cle, new Map());
      const eleves = groupes.get(cle);
      if (!eleves.has(s.empreinte)) eleves.set(s.empreinte, { dernier: null, issues: [] });
      const e = eleves.get(s.empreinte);
      e.issues.push(s.issue);
      if (!e.dernier || s.recuLe > e.dernier.recuLe) e.dernier = s;
    }
    for (const id of choisies) {
      const trouvee = trouverEvaluation(id);
      if (!trouvee) { journal.push(`Évaluation introuvable : ${id}`); continue; }
      const { annee: a, classe } = trouvee;
      const eleves = groupes.get(`${a}/${classe}/${id}`) || new Map();
      const chemin = `evaluations/${a}/${classe}/${id}.json`;
      const cheminNotes = `notes/${a}/${classe}/${id}.json`;
      const ev = lireJson(chemin);
      if (estCloturee(ev)) {
        aFermer.push(...[...eleves.values()].flatMap(e => e.issues).map(n => ({ issue: n, raison: "Évaluation fermée : réponse non prise en compte." })));
        journal.push(`Déjà fermée : ${id}`);
        continue;
      }
      const notes = existe(cheminNotes) ? (lireJson(cheminNotes).notes || {}) : {};
      const inscrits = new Set(((existe(`eleves/${a}.json`) ? lireJson(`eleves/${a}.json`) : {})[classe]) || []);
      const copies = [];
      for (const [empreinte, e] of eleves) {
        if (notes[empreinte]) {
          aFermer.push(...e.issues.map(n => ({ issue: n, raison: "Copie déjà corrigée : ce nouvel envoi n'est pas pris en compte." })));
        } else if (inscrits.size && !inscrits.has(empreinte)) {
          ignorees.push(...e.issues);
        } else {
          copies.push({ empreinte, recuLe: e.dernier.recuLe, issue: e.dernier.issue, reponses: e.dernier.reponses, issues: e.issues });
        }
      }
      if (!copies.length) { journal.push(`Aucune copie en attente : ${id}`); continue; }
      // Fermeture : tous les inscrits de la classe auront une note après ce passage.
      const noteesApres = new Set([...Object.keys(notes), ...copies.map(x => x.empreinte)]);
      const fermer = inscrits.size > 0 && [...inscrits].every(h => noteesApres.has(h));
      if (fermer) journal.push(`Fermeture : ${id} (tous les élèves de ${classe} corrigés, corrigé publié)`);
      aCorriger.push({
        annee: a, classe, evaluation: id, fichierEvaluation: chemin, fichierNotes: cheminNotes,
        total: ev.questions.filter(q => q.bonus !== true).reduce((t, q) => t + q.points, 0), cloturer: fermer, copies,
      });
    }
  }

  // ---------- Création ----------
  const programme = lireProgramme();
  const lot = programme.lotHebdomadaire;
  const aGenerer = [];
  const prises = new Set();
  const nouvelle = (classe, base, extra) => {
    const id = idLibre(annee, classe, `${aujourdhui}-${slug(base)}`, prises);
    aGenerer.push({
      annee, classe, id, fichier: `evaluations/${annee}/${classe}/${id}.json`, date: aujourdhui,
      dureeMinutes: (lot.dureeMinutes || {})[classe] || 30, points: lot.points || 10, ...extra,
    });
  };
  if (mode === "hebdomadaire") {
    for (const classe of CLASSES) {
      const dejaCeJour = evaluationsDeClasse(annee, classe).filter(id => id.startsWith(`${aujourdhui}-lot-`)).length;
      const manque = Math.max(0, (lot.nombreParClasse || 4) - dejaCeJour);
      // Thème de la semaine : l'entrée la plus récente dont la semaine a commencé depuis moins de 7 jours
      const theme = (programme.themes || [])
        .filter(t => t.classe === classe && t.semaine && t.semaine <= aujourdhui && t.semaine > dateParis(-7))
        .sort((x, y) => y.semaine.localeCompare(x.semaine))[0];
      for (let k = 0; k < manque; k++) {
        nouvelle(classe, `lot-${dejaCeJour + k + 1}`, {
          origine: "lot hebdomadaire", rangDansLeLot: dejaCeJour + k + 1, tailleDuLot: lot.nombreParClasse || 4,
          chapitre: theme ? theme.chapitre : "au choix, selon la progression annuelle et les évaluations déjà publiées",
          notions: theme ? theme.notions || "" : "",
        });
      }
      if (dejaCeJour) journal.push(`Lot ${classe} : ${dejaCeJour} évaluation(s) déjà créée(s) aujourd'hui`);
    }
  }
  if (mode === "creation") {
    const classe = (process.env.GENERER_CLASSE || "").trim();
    if (!CLASSES.includes(classe)) throw new Error("Mode creation : classe manquante ou inconnue.");
    const sujet = (process.env.GENERER_SUJET || "").trim();
    nouvelle(classe, sujet || "evaluation", {
      origine: "demande de l'enseignant",
      chapitre: sujet || "au choix, selon la progression annuelle et les évaluations déjà publiées",
      notions: "",
    });
  }
  // ---------- Niveaux : évaluations dont au moins une question n'a pas de niveau ou de temps ----------
  const aNiveler = [];
  if (mode === "niveaux") {
    for (const a of existe("evaluations") ? readdirSync(join(racine, "evaluations")) : []) {
      for (const classe of CLASSES) {
        for (const id of evaluationsDeClasse(a, classe)) {
          const fichier = `evaluations/${a}/${classe}/${id}.json`;
          const ev = lireJson(fichier);
          const incomplete = (ev.questions || []).some(q => q.bonus !== true && (![1, 2, 3].includes(q.niveau) || !(q.tempsMinutes > 0)));
          if (incomplete) aNiveler.push({ annee: a, classe, evaluation: id, fichier, dureeMinutes: ev.dureeMinutes || null });
        }
      }
    }
    journal.push(`Évaluations à compléter (niveaux et temps) : ${aNiveler.length}`);
  }

  if (aGenerer.length > MAX_GENERATIONS) {
    journal.push(`Limite de ${MAX_GENERATIONS} créations par passage : ${aGenerer.length - MAX_GENERATIONS} reportée(s)`);
    aGenerer.splice(MAX_GENERATIONS);
  }

  const travail = { aujourdhui, annee, mode, aCorriger, aGenerer, aNiveler, aFermer, issuesIgnorees: ignorees, journal };
  mkdirSync(join(racine, "travail"), { recursive: true });
  ecrireJson("travail/a-faire.json", travail);

  // Le déploiement a lieu à chaque passage utile : les KPI (évaluations en attente, etc.) changent aussi
  // quand un élève répond, même sans création ni correction.
  const creation = aGenerer.length > 0;
  const correction = aCorriger.length > 0;
  ecrireSorties(creation, correction, true);
  ecrireNiveaux(aNiveler.length > 0);
  journal.forEach(l => console.log(l));
  console.log(`Aujourd'hui (Paris) : ${aujourdhui}`);
  console.log(`À créer : ${aGenerer.map(a => `${a.classe}/${a.id}`).join(", ") || "rien"}`);
  console.log(`À corriger : ${aCorriger.map(a => `${a.classe}/${a.evaluation} (${a.copies.length} copie(s)${a.cloturer ? ", fermeture" : ""})`).join(", ") || "rien"}`);
  console.log(`Issues à fermer sans correction : ${aFermer.length}, issues ignorées : ${ignorees.length}`);
  return travail;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  preparer().catch(e => { console.error(e.message); process.exit(1); });
}
