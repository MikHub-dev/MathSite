#!/usr/bin/env node
// Version : 1.1
// Skill « kpi » : calcule les chiffres des évaluations et les écrit dans kpi.json, que la compilation
// intègre à evaluations-data.js (window.EVAL_KPI) pour l'affichage sur le site.
//
// Usage (depuis la racine du dépôt) : node outils/kpi.mjs
// Avec GITHUB_TOKEN et GITHUB_REPOSITORY (dans GitHub Actions), il compte aussi les copies en attente
// en lisant les issues « reponse-eval » ouvertes ; sans eux, « enAttente » vaut null.
//
// Par classe et par année :
//   total      nombre d'évaluations publiées
//   fermees    évaluations fermées (corrigé publié)
//   enAttente  évaluations ouvertes ayant au moins une copie reçue et pas encore corrigée
//   ouvertes   évaluations ouvertes sans copie en attente
//   copiesCorrigees, moyenneSur20 (notes des élèves inscrits uniquement, chaque note ramenée sur 20)

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const CLASSES = ["5e", "seconde"];
const MARQUEUR = "<!-- mathsite:reponse-evaluation v1 -->";
const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const existe = chemin => existsSync(join(racine, chemin));
const lireJson = chemin => JSON.parse(readFileSync(join(racine, chemin), "utf8"));
const estFermee = ev => ev.cloturee === true || !!ev.corrige;

async function copiesEnAttente() {
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPOSITORY) return null;
  const [proprietaire] = process.env.GITHUB_REPOSITORY.split("/");
  const cles = [];
  for (let page = 1; page <= 10; page++) {
    const r = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/issues?state=open&labels=reponse-eval&per_page=100&page=${page}`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
    });
    if (!r.ok) throw new Error(`Lecture des issues impossible : ${r.status}`);
    const lot = await r.json();
    for (const i of lot) {
      if (i.pull_request || !i.user || i.user.login.toLowerCase() !== proprietaire.toLowerCase()) continue;
      if (typeof i.body !== "string" || !i.body.startsWith(MARQUEUR)) continue;
      try {
        const d = JSON.parse(i.body.split("```json\n")[1].split("\n```")[0]);
        cles.push({ cle: `${d.annee}/${d.classe}/${d.evaluation}`, empreinte: d.empreinte });
      } catch (e) { /* issue illisible : ignorée */ }
    }
    if (lot.length < 100) break;
  }
  return cles;
}

export async function calculerKpi() {
  const attente = await copiesEnAttente();
  const kpi = { genereLe: new Date().toISOString(), annees: {} };
  for (const annee of existe("evaluations") ? readdirSync(join(racine, "evaluations")).sort() : []) {
    const eleves = existe(`eleves/${annee}.json`) ? lireJson(`eleves/${annee}.json`) : {};
    kpi.annees[annee] = {};
    for (const classe of CLASSES) {
      const dossier = `evaluations/${annee}/${classe}`;
      const ids = existe(dossier) ? readdirSync(join(racine, dossier)).filter(f => f.endsWith(".json")).map(f => f.slice(0, -5)) : [];
      const inscrits = new Set(eleves[classe] || []);
      const k = { total: ids.length, ouvertes: 0, enAttente: attente ? 0 : null, fermees: 0, copiesCorrigees: 0, moyenneSur20: null };
      const valeurs = [];
      for (const id of ids) {
        const ev = lireJson(`${dossier}/${id}.json`);
        const total = ev.questions.filter(q => q.bonus !== true).reduce((t, q) => t + q.points, 0);
        const notes = existe(`notes/${annee}/${classe}/${id}.json`) ? (lireJson(`notes/${annee}/${classe}/${id}.json`).notes || {}) : {};
        for (const [h, n] of Object.entries(notes)) {
          if (inscrits.size && !inscrits.has(h)) continue;
          k.copiesCorrigees++;
          valeurs.push(n.note / total * 20 + (n.bonus && typeof n.bonus.points === "number" ? n.bonus.points : 0));   // bonus : +0,5 sur 20
        }
        if (estFermee(ev)) { k.fermees++; continue; }
        const enAttente = attente && attente.some(a => a.cle === `${annee}/${classe}/${id}` && !notes[a.empreinte]);
        if (enAttente) k.enAttente++; else k.ouvertes++;
      }
      if (valeurs.length) k.moyenneSur20 = Math.round(valeurs.reduce((a, b) => a + b, 0) / valeurs.length * 10) / 10;
      kpi.annees[annee][classe] = k;
    }
  }
  writeFileSync(join(racine, "kpi.json"), JSON.stringify(kpi, null, 2) + "\n");
  return kpi;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  calculerKpi().then(kpi => {
    for (const [annee, classes] of Object.entries(kpi.annees)) {
      for (const [classe, k] of Object.entries(classes)) {
        console.log(`${annee} ${classe} : ${k.total} évaluation(s), ${k.ouvertes} ouverte(s), ${k.enAttente ?? "?"} en attente, ${k.fermees} fermée(s), moyenne ${k.moyenneSur20 ?? "-"}/20`);
      }
    }
  }).catch(e => { console.error(e.message); process.exit(1); });
}
