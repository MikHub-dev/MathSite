#!/usr/bin/env node
// Version : 1.0
// Remplace le code d'un élève (code perdu ou divulgué) et transfère ses notes vers le nouveau code.
//
// Usage (depuis la racine du dépôt) :
//   node outils/remplacer-code.mjs 2026-2027 5e "Léa"
//
// L'élève est retrouvé par son nom dans codes-prives/<année>-<classe>.csv. Le script :
//   - tire un nouveau code et remplace l'ancienne empreinte dans eleves/<année>.json
//     (l'ancien code cesse aussitôt de fonctionner, sur le site comme dans le Worker) ;
//   - renomme l'empreinte dans tous les fichiers notes/<année>/<classe>/*.json ;
//   - met à jour la ligne de l'élève dans le fichier CSV privé.
// Ensuite : node outils/compiler-evaluations.mjs, puis commit et push.

import { randomInt, createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SEL = "mathsite:";   // identique à outils/creer-codes.mjs
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CLASSES = ["5e", "seconde"];

const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [annee, classe, nom] = process.argv.slice(2);
if (!/^\d{4}-\d{4}$/.test(annee || "") || !CLASSES.includes(classe) || !nom) {
  console.error('Usage : node outils/remplacer-code.mjs 2026-2027 5e "Prénom"');
  process.exit(1);
}

const normaliser = s => String(s).toUpperCase().replace(/[^A-Z0-9]/g, "");
const empreinte = code => createHash("sha256").update(`${SEL}${classe}:${normaliser(code)}`).digest("hex");
const formater = code => code.slice(0, 4) + "-" + code.slice(4);

const cheminPrive = join(racine, "codes-prives", `${annee}-${classe}.csv`);
if (!existsSync(cheminPrive)) {
  console.error(`Fichier introuvable : codes-prives/${annee}-${classe}.csv`);
  process.exit(1);
}
const lignes = readFileSync(cheminPrive, "utf8").split("\n");
const indices = lignes.map((l, i) => [l, i]).filter(([l, i]) => i > 0 && l.split(";")[0].trim().toLowerCase() === nom.trim().toLowerCase());
if (indices.length !== 1) {
  console.error(indices.length ? `Plusieurs élèves s'appellent « ${nom} » : précisez le nom dans le CSV.` : `Aucun élève « ${nom} » dans codes-prives/${annee}-${classe}.csv.`);
  process.exit(1);
}
const [ligne, indice] = indices[0];
const ancienne = empreinte(ligne.split(";")[1]);

const cheminEleves = join(racine, "eleves", `${annee}.json`);
const eleves = JSON.parse(readFileSync(cheminEleves, "utf8"));
const liste = eleves[classe] || [];
const position = liste.indexOf(ancienne);
if (position === -1) console.warn("Attention : l'ancienne empreinte n'était pas dans eleves/ ; le nouveau code est ajouté.");

let code, nouvelle;
do {
  code = Array.from({ length: 8 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("");
  nouvelle = empreinte(code);
} while (liste.includes(nouvelle));

if (position === -1) liste.push(nouvelle); else liste[position] = nouvelle;
eleves[classe] = liste;
writeFileSync(cheminEleves, JSON.stringify(eleves, null, 2) + "\n");

// Transfert des notes : même ordre de clés, seule l'empreinte change.
const dossierNotes = join(racine, "notes", annee, classe);
let transferts = 0;
if (existsSync(dossierNotes)) {
  for (const f of readdirSync(dossierNotes).filter(n => n.endsWith(".json"))) {
    const chemin = join(dossierNotes, f);
    const n = JSON.parse(readFileSync(chemin, "utf8"));
    if (!n.notes || !(ancienne in n.notes)) continue;
    n.notes = Object.fromEntries(Object.entries(n.notes).map(([k, v]) => [k === ancienne ? nouvelle : k, v]));
    writeFileSync(chemin, JSON.stringify(n, null, 2) + "\n");
    transferts++;
  }
}

lignes[indice] = `${ligne.split(";")[0]};${formater(code)}`;
writeFileSync(cheminPrive, lignes.join("\n"));

console.log(`\nNouveau code pour ${ligne.split(";")[0]} (${classe}, ${annee}) : ${formater(code)}`);
console.log(`Ancien code désactivé. Notes transférées : ${transferts} évaluation(s).`);
console.log("Étape suivante : node outils/compiler-evaluations.mjs, puis commit et push.\n");
