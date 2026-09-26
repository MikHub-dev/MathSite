#!/usr/bin/env node
// Version : 1.1
// Crée les codes personnels des élèves d'une classe.
//
// Usage (depuis la racine du dépôt) :
//   node outils/creer-codes.mjs 2026-2027 5e "Léa" "Tom" "Inès"
//
// Pour chaque élève :
//   - un code aléatoire de 8 caractères (ex. K7Q2-M9XA) est tiré ;
//   - son EMPREINTE SHA-256, calculée AVEC la classe (sel + classe + ":" + code), est ajoutée à eleves/<année>.json (fichier public, commité) ;
//   - le couple « nom ; code » est ajouté à codes-prives/<année>-<classe>.csv
//     (fichier PRIVÉ : le dossier codes-prives/ doit figurer dans .gitignore).
// Ensuite : node outils/compiler-evaluations.mjs, puis commit et push.

import { randomInt, createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Doit rester identique à EVAL_CONFIG.sel dans evaluations.js (et au sel du Worker, étape 2).
// La classe entre dans l'empreinte : un code de 5e ne donne aucune empreinte valable en Seconde.
const SEL = "mathsite:";
// Sans 0/O, 1/I/L : évite les confusions à la lecture.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CLASSES = ["5e", "seconde"];

const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [annee, classe, ...noms] = process.argv.slice(2);

if (!/^\d{4}-\d{4}$/.test(annee || "") || !CLASSES.includes(classe) || noms.length === 0) {
  console.error('Usage : node outils/creer-codes.mjs 2026-2027 5e "Prénom 1" "Prénom 2" ...');
  console.error(`Classes possibles : ${CLASSES.join(", ")}`);
  process.exit(1);
}

const empreinte = code => createHash("sha256").update(`${SEL}${classe}:${code}`).digest("hex");
const tirerCode = () => Array.from({ length: 8 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("");
const formater = code => code.slice(0, 4) + "-" + code.slice(4);

const cheminEleves = join(racine, "eleves", `${annee}.json`);
const eleves = existsSync(cheminEleves) ? JSON.parse(readFileSync(cheminEleves, "utf8")) : {};
eleves[classe] = eleves[classe] || [];
const dejaPris = new Set(eleves[classe]);

const dossierPrive = join(racine, "codes-prives");
mkdirSync(dossierPrive, { recursive: true });
const cheminPrive = join(dossierPrive, `${annee}-${classe}.csv`);
if (!existsSync(cheminPrive)) writeFileSync(cheminPrive, "Nom;Code\n");

const crees = [];
for (const nom of noms) {
  let code, h;
  do { code = tirerCode(); h = empreinte(code); } while (dejaPris.has(h));
  dejaPris.add(h);
  eleves[classe].push(h);
  appendFileSync(cheminPrive, `${nom.replace(/;/g, ",")};${formater(code)}\n`);
  crees.push([nom, formater(code)]);
}

mkdirSync(dirname(cheminEleves), { recursive: true });
writeFileSync(cheminEleves, JSON.stringify(eleves, null, 2) + "\n");

console.log(`\n${crees.length} code(s) créé(s) pour ${classe} (${annee}) :\n`);
for (const [nom, code] of crees) console.log(`  ${nom.padEnd(24)} ${code}`);
console.log(`\nCodes conservés dans : codes-prives/${annee}-${classe}.csv (NE PAS COMMITER)`);
console.log(`Empreintes ajoutées à : eleves/${annee}.json`);
console.log("Étape suivante : node outils/compiler-evaluations.mjs\n");
