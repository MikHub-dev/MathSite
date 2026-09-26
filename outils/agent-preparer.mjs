#!/usr/bin/env node
// Version : 1.0
// Préparation du travail de l'agent (1re étape du workflow .github/workflows/agent-evaluations.yml).
// Script déterministe : il décide QUOI faire, Claude ne fait que la correction et la rédaction.
//
//   1. Clôture éventuelle d'une évaluation demandée à la main (entrée « cloturer ») :
//      sa date limite passe à la veille, le Worker refuse alors les nouveaux envois.
//   2. Lecture des issues ouvertes « reponse-eval » créées par le propriétaire du dépôt
//      (compte du jeton du Worker) ; les issues ouvertes par d'autres comptes sont ignorées.
//      Pour chaque élève et chaque évaluation, seule la réponse la plus récente compte.
//   3. Évaluations à corriger : date limite passée, pas encore de notes, au moins une copie.
//   4. Évaluations à générer : entrées de programme-evaluations.json dont la date de publication
//      est arrivée, plus une éventuelle demande manuelle (entrées « generer_classe » / « generer_sujet »).
//
// Écrit travail/a-faire.json (non commité) et les sorties GitHub Actions « claude » et « travail ».
// Variables d'environnement : GITHUB_TOKEN, GITHUB_REPOSITORY, CLOTURER, GENERER_CLASSE, GENERER_SUJET.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, appendFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const CLASSES = ["5e", "seconde"];
const MARQUEUR = "<!-- mathsite:reponse-evaluation v1 -->";
const MAX_GENERATIONS = 4;
const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lireJson = chemin => JSON.parse(readFileSync(join(racine, chemin), "utf8"));
const ecrireJson = (chemin, donnees) => writeFileSync(join(racine, chemin), JSON.stringify(donnees, null, 2) + "\n");

export function dateParis(decalageJours = 0) {
  const d = new Date(Date.now() + decalageJours * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}
export function anneeScolaire(iso) {
  const [y, m] = iso.split("-").map(Number);
  return m >= 8 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
}
export function slug(texte) {
  return String(texte || "evaluation").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 50) || "evaluation";
}
function trouverEvaluation(id) {
  for (const annee of existsSync(join(racine, "evaluations")) ? readdirSync(join(racine, "evaluations")) : []) {
    for (const classe of CLASSES) {
      const chemin = `evaluations/${annee}/${classe}/${id}.json`;
      if (existsSync(join(racine, chemin))) return { annee, classe, chemin };
    }
  }
  return null;
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

export async function preparer() {
  const aujourdhui = dateParis();
  const hier = dateParis(-1);
  const journal = [];
  let modifieSansClaude = false;

  // 1. Clôture manuelle
  const aCloturer = (process.env.CLOTURER || "").trim();
  if (aCloturer) {
    const trouvee = trouverEvaluation(aCloturer);
    if (!trouvee) throw new Error(`Évaluation à clôturer introuvable : ${aCloturer}`);
    const ev = lireJson(trouvee.chemin);
    if (ev.dateLimite >= aujourdhui) {
      ev.dateLimite = hier < ev.date ? ev.date : hier;
      ecrireJson(trouvee.chemin, ev);
      modifieSansClaude = true;
      journal.push(`Clôturée : ${aCloturer} (date limite ramenée au ${ev.dateLimite})`);
    }
  }

  // 2. Soumissions : la plus récente par (évaluation, élève)
  const soumissions = (await issuesOuvertes()).map(lireSoumission);
  const groupes = new Map();
  const ignorees = [];
  for (const s of soumissions) {
    if (!s) continue;
    const cle = `${s.annee}/${s.classe}/${s.evaluation}`;
    if (!groupes.has(cle)) groupes.set(cle, { annee: s.annee, classe: s.classe, evaluation: s.evaluation, copies: new Map(), issues: [] });
    const g = groupes.get(cle);
    g.issues.push(s.issue);
    const avant = g.copies.get(s.empreinte);
    if (!avant || s.recuLe > avant.recuLe) g.copies.set(s.empreinte, { empreinte: s.empreinte, recuLe: s.recuLe, reponses: s.reponses });
  }

  // 3. Évaluations à corriger
  const aCorriger = [];
  const aFermer = [];
  for (const g of groupes.values()) {
    const chemin = `evaluations/${g.annee}/${g.classe}/${g.evaluation}.json`;
    const cheminNotes = `notes/${g.annee}/${g.classe}/${g.evaluation}.json`;
    if (!existsSync(join(racine, chemin))) { ignorees.push(...g.issues); continue; }
    if (existsSync(join(racine, cheminNotes))) {
      aFermer.push(...g.issues.map(n => ({ issue: n, raison: "Évaluation déjà corrigée : réponse non prise en compte." })));
      continue;
    }
    const ev = lireJson(chemin);
    if (ev.dateLimite >= aujourdhui) continue;          // encore ouverte : on attend
    const inscrits = new Set(((existsSync(join(racine, `eleves/${g.annee}.json`)) ? lireJson(`eleves/${g.annee}.json`) : {})[g.classe]) || []);
    const copies = [...g.copies.values()].filter(c => !inscrits.size || inscrits.has(c.empreinte));
    if (!copies.length) continue;
    aCorriger.push({
      annee: g.annee, classe: g.classe, evaluation: g.evaluation,
      fichierEvaluation: chemin, fichierNotes: cheminNotes,
      total: ev.questions.reduce((a, q) => a + q.points, 0),
      issues: g.issues, copies,
    });
  }

  // 4. Évaluations à générer
  const aGenerer = [];
  const prevues = existsSync(join(racine, "programme-evaluations.json")) ? lireJson("programme-evaluations.json").evaluations || [] : [];
  for (const p of prevues) {
    if (!CLASSES.includes(p.classe) || !p.date || p.date > aujourdhui) continue;
    const annee = anneeScolaire(p.date);
    const id = p.id || `${p.date}-${slug(p.chapitre)}`;
    if (existsSync(join(racine, `evaluations/${annee}/${p.classe}/${id}.json`))) continue;
    aGenerer.push({
      origine: "programme", annee, classe: p.classe, id,
      fichier: `evaluations/${annee}/${p.classe}/${id}.json`,
      date: aujourdhui, dateLimite: p.dateLimite && p.dateLimite > aujourdhui ? p.dateLimite : dateParis(p.dureeJours || 6),
      chapitre: p.chapitre, notions: p.notions || "", dureeMinutes: p.dureeMinutes || 30, points: p.points || 10,
    });
  }
  const classeManuelle = (process.env.GENERER_CLASSE || "").trim();
  if (CLASSES.includes(classeManuelle)) {
    const annee = anneeScolaire(aujourdhui);
    const sujet = (process.env.GENERER_SUJET || "").trim();
    let id = `${aujourdhui}-${slug(sujet || "evaluation")}`;
    for (let n = 2; existsSync(join(racine, `evaluations/${annee}/${classeManuelle}/${id}.json`)) || aGenerer.some(a => a.id === id && a.classe === classeManuelle); n++) {
      id = `${aujourdhui}-${slug(sujet || "evaluation")}-${n}`;
    }
    aGenerer.push({
      origine: "manuelle", annee, classe: classeManuelle, id,
      fichier: `evaluations/${annee}/${classeManuelle}/${id}.json`,
      date: aujourdhui, dateLimite: dateParis(6),
      chapitre: sujet || "au choix de l'agent, selon la progression habituelle et les évaluations déjà publiées",
      notions: "", dureeMinutes: 30, points: 10,
    });
  }
  aGenerer.splice(MAX_GENERATIONS);

  const travail = { aujourdhui, aCorriger, aGenerer, aFermer, issuesIgnorees: ignorees, journal };
  mkdirSync(join(racine, "travail"), { recursive: true });
  ecrireJson("travail/a-faire.json", travail);

  const claude = aCorriger.length > 0 || aGenerer.length > 0;
  const aTraiter = claude || aFermer.length > 0 || modifieSansClaude;
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `claude=${claude}\ntravail=${aTraiter}\n`);
  }
  console.log(`Aujourd'hui (Paris) : ${aujourdhui}`);
  journal.forEach(l => console.log(l));
  console.log(`À corriger : ${aCorriger.map(a => `${a.classe}/${a.evaluation} (${a.copies.length} copie(s))`).join(", ") || "rien"}`);
  console.log(`À générer : ${aGenerer.map(a => `${a.classe}/${a.id}`).join(", ") || "rien"}`);
  console.log(`Issues à fermer sans correction : ${aFermer.length}, issues ignorées : ${ignorees.length}`);
  return travail;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  preparer().catch(e => { console.error(e.message); process.exit(1); });
}
