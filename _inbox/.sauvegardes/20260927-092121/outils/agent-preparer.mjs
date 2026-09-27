#!/usr/bin/env node
// Version : 2.2
// Préparation du travail de l'agent (1re étape du workflow .github/workflows/agent-evaluations.yml).
// Script déterministe : il décide QUOI faire, Claude ne fait que la correction et la rédaction.
//
// Fonctionnement sans date limite : une évaluation reste ouverte tant qu'elle n'est pas clôturée
// par l'enseignant. Chaque copie reçue est corrigée au passage suivant ; la date de réponse de
// l'élève est conservée avec sa note. Le corrigé n'est publié qu'à la clôture.
//
//   0. Passage planifié : le workflow est programmé deux fois le dimanche (3 h et 4 h UTC) ; seul
//      celui qui tombe à 5 h ou plus tard à Paris travaille (été comme hiver). Un second passage le
//      même jour ne refait rien : les lots déjà créés et les copies déjà corrigées sont reconnus.
//   1. Copies à corriger : issues ouvertes « reponse-eval » créées par le propriétaire du dépôt
//      (compte du jeton du Worker) ; les issues ouvertes par d'autres comptes sont ignorées. Pour un
//      élève et une évaluation, seul l'envoi le plus récent non encore corrigé compte.
//   2. Clôture : une évaluation est clôturée automatiquement dès que tous les élèves inscrits dans
//      la classe (eleves/<année>.json) ont été corrigés ; elle peut aussi l'être à la main (entrée
//      « cloturer »). Son corrigé est alors publié et elle n'accepte plus de réponses.
//   3. Évaluations à créer : le lot hebdomadaire (N par classe, programme-evaluations.json) le
//      dimanche ou sur demande (« lot_hebdomadaire »), plus une éventuelle demande unitaire
//      (« generer_classe » / « generer_sujet »).
//
// Écrit travail/a-faire.json (non commité) et les sorties GitHub Actions « claude » et « travail ».
// Variables : GITHUB_TOKEN, GITHUB_REPOSITORY, EVENEMENT, CLOTURER, LOT_HEBDOMADAIRE,
//             GENERER_CLASSE, GENERER_SUJET.

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
  const journal = [];
  const ecrireSorties = (claude, travail) => {
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `claude=${claude}\ntravail=${travail}\n`);
  };

  // 0. Passage planifié trop tôt (3 h UTC en hiver = 4 h à Paris) : rien à faire.
  if (evenement === "schedule" && heureParis() < HEURE_PASSAGE) {
    console.log(`Passage planifié à ${heureParis()} h (Paris) : l'agent travaille à partir de ${HEURE_PASSAGE} h, rien à faire.`);
    ecrireSorties(false, false);
    return null;
  }

  // Recompilation : un changement fait à la main (par exemple eleves/<année>.json, qui contient les
  // empreintes des codes) est ainsi publié dans evaluations-data.js, même sans autre travail.
  execFileSync("node", ["outils/compiler-evaluations.mjs"], { cwd: racine, stdio: "inherit" });
  let donneesModifiees = false;
  try {
    donneesModifiees = execFileSync("git", ["status", "--porcelain", "evaluations-data.js"], { cwd: racine, encoding: "utf8" }).trim() !== "";
  } catch (e) { /* hors d'un dépôt git : on ignore */ }
  if (donneesModifiees) journal.push("evaluations-data.js recompilé (modification faite à la main)");

  // 1. Copies reçues, regroupées par évaluation puis par élève
  const groupes = new Map();
  const ignorees = [];
  for (const s of (await issuesOuvertes()).map(lireSoumission)) {
    if (!s) continue;
    const cle = `${s.annee}/${s.classe}/${s.evaluation}`;
    if (!groupes.has(cle)) groupes.set(cle, { annee: s.annee, classe: s.classe, evaluation: s.evaluation, eleves: new Map() });
    const g = groupes.get(cle);
    if (!g.eleves.has(s.empreinte)) g.eleves.set(s.empreinte, { dernier: null, issues: [] });
    const e = g.eleves.get(s.empreinte);
    e.issues.push(s.issue);
    if (!e.dernier || s.recuLe > e.dernier.recuLe) e.dernier = s;
  }

  // 2. Clôture manuelle
  const aCloturer = (process.env.CLOTURER || "").trim();
  let cible = null;
  if (aCloturer) {
    cible = trouverEvaluation(aCloturer);
    if (!cible) throw new Error(`Évaluation à clôturer introuvable : ${aCloturer}`);
    if (estCloturee(lireJson(`evaluations/${cible.annee}/${cible.classe}/${aCloturer}.json`))) {
      journal.push(`Déjà clôturée : ${aCloturer}`);
      cible = null;
    }
  }

  const aCorriger = [];
  const aFermer = [];
  const cles = new Set(groupes.keys());
  if (cible) cles.add(`${cible.annee}/${cible.classe}/${aCloturer}`);
  for (const cle of cles) {
    const [a, classe, id] = cle.split("/");
    const g = groupes.get(cle) || { eleves: new Map() };
    const chemin = `evaluations/${a}/${classe}/${id}.json`;
    const cheminNotes = `notes/${a}/${classe}/${id}.json`;
    const toutesIssues = [...g.eleves.values()].flatMap(e => e.issues);
    if (!existe(chemin)) { ignorees.push(...toutesIssues); continue; }
    const ev = lireJson(chemin);
    const cloturer = !!cible && id === aCloturer && classe === cible.classe && a === cible.annee;
    if (estCloturee(ev)) {
      aFermer.push(...toutesIssues.map(n => ({ issue: n, raison: "Évaluation clôturée : réponse non prise en compte." })));
      continue;
    }
    const notes = existe(cheminNotes) ? (lireJson(cheminNotes).notes || {}) : {};
    const inscrits = new Set(((existe(`eleves/${a}.json`) ? lireJson(`eleves/${a}.json`) : {})[classe]) || []);
    const copies = [];
    for (const [empreinte, e] of g.eleves) {
      if (notes[empreinte]) {
        aFermer.push(...e.issues.map(n => ({ issue: n, raison: "Copie déjà corrigée : ce nouvel envoi n'est pas pris en compte." })));
      } else if (inscrits.size && !inscrits.has(empreinte)) {
        ignorees.push(...e.issues);
      } else {
        copies.push({ empreinte, recuLe: e.dernier.recuLe, reponses: e.dernier.reponses, issues: e.issues });
      }
    }
    if (!copies.length && !cloturer) continue;
    // Clôture automatique : tous les inscrits de la classe auront une note après ce passage.
    const noteesApres = new Set([...Object.keys(notes), ...copies.map(x => x.empreinte)]);
    const tousCorriges = inscrits.size > 0 && [...inscrits].every(h => noteesApres.has(h));
    if (tousCorriges && !cloturer) journal.push(`Clôture automatique : ${id} (tous les élèves de ${classe} ont été corrigés)`);
    aCorriger.push({
      annee: a, classe, evaluation: id,
      fichierEvaluation: chemin, fichierNotes: cheminNotes,
      total: ev.questions.reduce((s, q) => s + q.points, 0),
      cloturer: cloturer || tousCorriges, copies,
    });
    if (cloturer) journal.push(`Clôture demandée : ${id} (corrigé publié)`);
  }

  // 3. Évaluations à créer
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

  const lotDemande = (evenement === "schedule" && new Date(`${aujourdhui}T12:00:00Z`).getUTCDay() === 0)
    || process.env.LOT_HEBDOMADAIRE === "true";
  if (lotDemande) {
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
          chapitre: theme ? theme.chapitre : "au choix de l'agent, selon la progression annuelle et les évaluations déjà publiées",
          notions: theme ? theme.notions || "" : "",
        });
      }
      if (dejaCeJour) journal.push(`Lot ${classe} : ${dejaCeJour} évaluation(s) déjà créée(s) aujourd'hui`);
    }
  }
  // Ancien format : évaluations datées une à une (toujours pris en charge)
  for (const p of programme.evaluations || []) {
    if (!CLASSES.includes(p.classe) || !p.date || p.date > aujourdhui) continue;
    const id = p.id || `${p.date}-${slug(p.chapitre)}`;
    if (existe(`evaluations/${anneeScolaire(p.date)}/${p.classe}/${id}.json`) || prises.has(`${p.classe}/${id}`)) continue;
    prises.add(`${p.classe}/${id}`);
    aGenerer.push({
      annee, classe: p.classe, id, fichier: `evaluations/${annee}/${p.classe}/${id}.json`, date: aujourdhui,
      origine: "calendrier", chapitre: p.chapitre, notions: p.notions || "",
      dureeMinutes: p.dureeMinutes || (lot.dureeMinutes || {})[p.classe] || 30, points: p.points || lot.points || 10,
    });
  }
  const classeManuelle = (process.env.GENERER_CLASSE || "").trim();
  if (CLASSES.includes(classeManuelle)) {
    const sujet = (process.env.GENERER_SUJET || "").trim();
    nouvelle(classeManuelle, sujet || "evaluation", {
      origine: "demande manuelle",
      chapitre: sujet || "au choix de l'agent, selon la progression annuelle et les évaluations déjà publiées",
      notions: "",
    });
  }
  if (aGenerer.length > MAX_GENERATIONS) {
    journal.push(`Limite de ${MAX_GENERATIONS} créations par passage : ${aGenerer.length - MAX_GENERATIONS} reportée(s)`);
    aGenerer.splice(MAX_GENERATIONS);
  }

  const travail = { aujourdhui, annee, aCorriger, aGenerer, aFermer, issuesIgnorees: ignorees, journal };
  mkdirSync(join(racine, "travail"), { recursive: true });
  ecrireJson("travail/a-faire.json", travail);

  const claude = aCorriger.length > 0 || aGenerer.length > 0;
  ecrireSorties(claude, claude || aFermer.length > 0 || donneesModifiees);
  console.log(`Aujourd'hui (Paris) : ${aujourdhui}`);
  journal.forEach(l => console.log(l));
  console.log(`À corriger : ${aCorriger.map(a => `${a.classe}/${a.evaluation} (${a.copies.length} copie(s)${a.cloturer ? ", clôture" : ""})`).join(", ") || "rien"}`);
  console.log(`À créer : ${aGenerer.map(a => `${a.classe}/${a.id}`).join(", ") || "rien"}`);
  console.log(`Issues à fermer sans correction : ${aFermer.length}, issues ignorées : ${ignorees.length}`);
  return travail;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  preparer().catch(e => { console.error(e.message); process.exit(1); });
}
