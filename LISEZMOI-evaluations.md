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
| `programme-evaluations.json` | Lot hebdomadaire et thèmes des semaines |
| `AGENT_EVALUATIONS.md` | Présentation de l'agent et de ses quatre skills |
| `skills/` | Les skills : `creation-evaluation`, `correction-evaluation`, `kpi`, `deploiement` |
| `kpi.json`, `outils/kpi.mjs` | Chiffres des évaluations (skill kpi), affichés dans les vignettes |
| `.github/workflows/agent-evaluations.yml` | Lancement de l'agent (dimanche 5 h ou à la demande, voir `GUIDE-etape3.md`) |
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

## Fonctionnement des évaluations

Les évaluations **n'ont pas de date limite**. Statuts :
- **Ouverte** : l'élève peut répondre ; aucune copie à corriger ;
- **En attente** : une copie a été reçue et n'est pas encore corrigée ;
- **Fermée** : les copies sont corrigées et le corrigé est publié ; plus de réponse acceptée.

Chaque dimanche à 5 h, l'agent crée le lot de la semaine (4 évaluations par classe), met à jour les
KPI et déploie. Il ne corrige **que sur demande** : dans l'espace enseignant, cochez les évaluations
« En attente » et cliquez sur « Corriger la sélection ». Une évaluation est fermée dès que tous les
élèves inscrits de sa classe sont corrigés. L'élève voit alors sa note, le détail par question (sa
réponse, les points, une remarque) et le corrigé. Un élève corrigé ne peut plus renvoyer de réponse.

## Format d'une évaluation

`evaluations/2026-2027/5e/2026-10-04-lot-1.json` (l'agent les crée ; on peut aussi en écrire à la main) :

```json
{
  "titre": "Fractions : comparer et simplifier",
  "chapitre": "Fractions",
  "date": "2026-10-04",
  "dureeMinutes": 30,
  "consignes": "<p>Texte facultatif.</p>",
  "questions": [
    { "id": "q1", "type": "qcm", "points": 2, "enonce": "<p>...</p>", "choix": ["A", "B", "C"] },
    { "id": "q2", "type": "numerique", "points": 2, "enonce": "<p>...</p>" },
    { "id": "q3", "type": "redaction", "points": 3, "enonce": "<p>...</p>" }
  ]
}
```

À la clôture, l'agent ajoute `"corrige": { "q1": "<p>...</p>", ... }` et `"cloturee": true`. Le dépôt
est public : **jamais de corrigé dans une évaluation ouverte**. Un ancien champ `dateLimite` est
toléré mais ignoré.

## Calendrier : `programme-evaluations.json`

- `lotHebdomadaire` : nombre d'évaluations créées chaque dimanche par classe (`nombreParClasse`),
  total de points (`points`) et durée conseillée par classe (`dureeMinutes`).
- `themes` (facultatif) : pour la semaine qui commence le dimanche `semaine`, les évaluations de la
  classe portent sur ce `chapitre` et ces `notions`. Sans thème, l'agent choisit les notions
  suivantes d'une progression annuelle, sans répéter ce qui a déjà été évalué.

## Format des notes

`notes/2026-2027/5e/2026-10-04-lot-1.json` (même nom que l'évaluation), complété à chaque passage :

```json
{
  "publieLe": "2026-10-11",
  "notes": {
    "<empreinte du code>": {
      "note": 8.5,
      "commentaire": "...",
      "details": { "q1": { "points": 2, "remarque": "Juste." }, "q2": { "points": 1.5, "remarque": "..." } },
      "reponses": { "q1": "22", "q2": "..." },
      "reponduLe": "2026-10-08T17:42:00Z",
      "corrigeLe": "2026-10-11",
      "issue": 57
    }
  }
}
```

`note`, `commentaire` et `details` sont écrits par le skill correction-evaluation ; `reponses`, les
dates et `issue` (lien vers les réponses envoyées) par le skill deploiement.

Une note publiée peut être modifiée à la main, puis `node outils/compiler-evaluations.mjs`, commit
et push. L'agent, lui, ne modifie jamais une note déjà publiée.

## Données de démonstration

Trois évaluations et les codes `DEMO-0001` à `DEMO-0006` (5e) et `DEMO-0101` à `DEMO-0103`
(Seconde) servent à essayer la page. Avant la rentrée réelle : supprimer les trois fichiers de
`evaluations/2026-2027/`, celui de `notes/2026-2027/5e/`, remettre `eleves/2026-2027.json` à
`{}`, puis créer les vrais codes.
