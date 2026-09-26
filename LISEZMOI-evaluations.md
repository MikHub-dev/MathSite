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
| `outils/remplacer-code.mjs` | Remplace un code perdu et transfère les notes |
| `worker/` | Worker Cloudflare qui reçoit les formulaires (voir `GUIDE-etape2.md`) |
| `programme-evaluations.json` | Calendrier des évaluations que l'agent crée automatiquement |
| `AGENT_EVALUATIONS.md` | Consignes de l'agent Claude quotidien |
| `.github/workflows/agent-evaluations.yml` | Lancement de l'agent (chaque matin ou à la demande, voir `GUIDE-etape3.md`) |
| `outils/agent-preparer.mjs`, `outils/agent-finaliser.mjs` | Préparation et contrôle du travail de l'agent |
| Espace enseignant (lien sur la page Évaluations) | Lancer l'agent depuis le site et suivre ses passages (voir `GUIDE-etape4.md`) |
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

## Remplacer un code perdu ou divulgué

```
node outils/remplacer-code.mjs 2026-2027 5e "Léa"
node outils/compiler-evaluations.mjs
```

L'ancien code cesse de fonctionner et les notes déjà publiées suivent le nouveau code.

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

## Planifier les évaluations

Chaque entrée de `programme-evaluations.json` indique la classe, le jour de publication (`date`),
le `chapitre`, les `notions` attendues, `dureeMinutes`, `points` et `dureeJours` (délai pour répondre).
Le jour venu, l'agent crée l'évaluation. On peut aussi en créer une tout de suite depuis l'onglet
Actions (voir `GUIDE-etape3.md`).

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

En temps normal, c'est l'agent qui écrit ce fichier. Dès qu'il existe, l'évaluation passe à l'état « Corrigée ». Puis :
`node outils/compiler-evaluations.mjs`, commit et push.

## Données de démonstration

Trois évaluations et les codes `DEMO-0001` à `DEMO-0006` (5e) et `DEMO-0101` à `DEMO-0103`
(Seconde) servent à essayer la page. Avant la rentrée réelle : supprimer les trois fichiers de
`evaluations/2026-2027/`, celui de `notes/2026-2027/5e/`, remettre `eleves/2026-2027.json` à
`{}`, puis créer les vrais codes.
