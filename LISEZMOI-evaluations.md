# Page « Évaluations » : mode d'emploi

## Fichiers

| Fichier | Rôle |
|---|---|
| `evaluations.js`, `evaluations.css` | La page (liste, évaluation, notes, demande d'amélioration) |
| `evaluations-data.js` | Données compilées, **générées** : ne pas modifier à la main |
| `evaluations/<année>/<classe>/<id>.json` | Une évaluation (l'id est le nom du fichier) |
| `notes/<année>/<classe>/<id>.json` | Les notes de cette évaluation, par empreinte de code |
| `eleves/<année>.json` | Les empreintes des codes élèves, par classe |
| `outils/creer-codes.mjs` | Crée les codes élèves |
| `outils/compiler-evaluations.mjs` | Vérifie les sources et régénère `evaluations-data.js` |
| `codes-prives/` | Correspondance nom ↔ code, **jamais commitée** (voir `.gitignore`) |

Classes possibles : `5e` et `seconde`. Nécessite Node.js 18 ou plus récent.

## Créer les codes des élèves

```
node outils/creer-codes.mjs 2026-2027 5e "Léa" "Tom"
node outils/compiler-evaluations.mjs
```

Les codes s'affichent à l'écran et sont gardés dans `codes-prives/2026-2027-5e.csv`.

Un code n'est valable que dans sa classe : son empreinte est calculée avec la classe
(`sel + classe + ":" + code`). Un code de 5e ne donne aucune empreinte connue en Seconde, il est
donc refusé à l'envoi des réponses comme à l'affichage des notes.

## Ajouter une évaluation

Créer `evaluations/2026-2027/5e/2026-10-05-fractions.json` :

```json
{
  "titre": "Fractions : comparer et simplifier",
  "chapitre": "Fractions",
  "date": "2026-10-05",
  "dateLimite": "2026-10-11",
  "dureeMinutes": 30,
  "consignes": "<p>Texte facultatif.</p>",
  "questions": [
    { "id": "q1", "type": "qcm", "points": 2, "enonce": "<p>...</p>", "choix": ["A", "B", "C"] },
    { "id": "q2", "type": "numerique", "points": 2, "enonce": "<p>...</p>" },
    { "id": "q3", "type": "redaction", "points": 3, "enonce": "<p>...</p>" }
  ]
}
```

Le dépôt est public : **ne pas mettre le corrigé tant que l'évaluation est ouverte**. On ajoute
`"corrige": { "q1": "<p>...</p>", ... }` en même temps que les notes.

## Publier les notes

Créer `notes/2026-2027/5e/2026-10-05-fractions.json` (même nom que l'évaluation) :

```json
{
  "publieLe": "2026-10-12",
  "notes": {
    "<empreinte du code, calculée avec la classe>": { "note": 8.5, "commentaire": "..." }
  }
}
```

Dès que ce fichier existe, l'évaluation passe à l'état « Corrigée ». Puis :
`node outils/compiler-evaluations.mjs`, commit et push.

## Données de démonstration

Trois évaluations et les codes `DEMO-0001` à `DEMO-0006` (5e) et `DEMO-0101` à `DEMO-0103`
(Seconde) servent à essayer la page. Avant la rentrée réelle : supprimer les trois fichiers de
`evaluations/2026-2027/`, celui de `notes/2026-2027/5e/`, remettre `eleves/2026-2027.json` à
`{}`, puis créer les vrais codes.
