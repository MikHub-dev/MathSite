---
name: creation-evaluation
description: Crée de nouvelles évaluations de mathématiques (5e ou Seconde) pour le site MathSite, à partir de la liste « aGenerer » de travail/a-faire.json, et complète le niveau des questions des évaluations existantes (liste « aNiveler »). À utiliser pour le lot hebdomadaire du dimanche, pour une évaluation demandée par l'enseignant, ou pour ajouter les niveaux.
---

# Skill : création d'évaluations

## Entrée

`travail/a-faire.json`, liste `aGenerer`. Chaque entrée donne : `classe`, `fichier` (chemin à créer),
`date`, `dureeMinutes`, `points`, `chapitre`, `notions`, `origine` et, pour un lot, `rangDansLeLot`
et `tailleDuLot`.

## Ce que tu produis

Pour chaque entrée, le fichier `fichier`, au format suivant :

```json
{
  "titre": "Fractions : comparer et simplifier",
  "chapitre": "Fractions",
  "date": "<date>",
  "dureeMinutes": 30,
  "rappelMethode": "Pour des exercices de niveau 3, pensez à mettre le problème en contexte, justifiez les calculs surtout lorsque plusieurs notions sont combinées, rédigez correctement, citez des propriétés, montrez la cohérence de votre raisonnement.",
  "consignes": "<p>Une phrase de consigne.</p>",
  "questions": [
    { "id": "q1", "type": "qcm", "niveau": 1, "tempsMinutes": 3, "points": 2, "enonce": "<p>...</p>", "choix": ["...", "...", "..."] },
    { "id": "q2", "type": "numerique", "niveau": 2, "tempsMinutes": 5, "points": 3, "enonce": "<p>...</p>" },
    { "id": "q3", "type": "redaction", "niveau": 3, "tempsMinutes": 10, "points": 5, "enonce": "<p>...</p>" }
  ]
}
```

Règles :
- `rappelMethode` : **toujours présent**, avec exactement ce texte (il est affiché au début de la fiche) :
  « Pour des exercices de niveau 3, pensez à mettre le problème en contexte, justifiez les calculs surtout lorsque plusieurs notions sont combinées, rédigez correctement, citez des propriétés, montrez la cohérence de votre raisonnement. »
- chaque question a un `niveau` (1 = N1 - Application directe, 2 = N2 - Entraînement,
  3 = N3 - Approfondissement) et un `tempsMinutes` (temps de résolution recommandé) ; la somme des
  `tempsMinutes` est égale à `dureeMinutes` ;
- chaque évaluation contient au moins une question de chaque niveau ;
- `date` et `dureeMinutes` recopiés exactement depuis l'entrée ; **pas** de `dateLimite`, **pas** de
  `corrige`, **pas** de `cloturee` (le dépôt est public : aucune réponse dans le fichier) ;
- 4 à 6 questions, total exactement égal à `points`, en mêlant `qcm`, `numerique` et `redaction` ;
  identifiants `q1`, `q2`… ; le travail tient dans la durée conseillée ;
- niveau conforme au programme officiel (5e : cycle 4 ; Seconde : seconde générale et technologique),
  progressif du plus simple au plus exigeant ;
- énoncés sans ambiguïté, en HTML simple, avec les notations Unicode (−, ×, ÷, ², √, ≤, ℝ…) et les
  espaces typographiques français (avant « : ; ? ! ») ; tutoiement ;
- un QCM a une et une seule bonne réponse ; une question numérique a une réponse unique et courte.

## Banque d'exercices modèles

Avant de rédiger, lis `skills/creation-evaluation/modeles/INDEX.md`, puis le fichier du chapitre qui
correspond le mieux à l'entrée (`modeles/5e/…` ou `modeles/seconde/…`). Chaque modèle indique son
niveau, son temps de résolution recommandé, son type et la réponse attendue.

- Sers-t'en comme **référence de niveau, de style et de durée** pour chaque niveau.
- **Ne recopie jamais un modèle** : change les nombres, le contexte et la formulation ; varie les types
  d'exercices à l'intérieur de la notion.
- Si aucun fichier ne correspond au chapitre, applique les mêmes définitions de niveaux et les temps
  indicatifs de l'index.

## Lot hebdomadaire

Les entrées d'une même classe forment un lot de `tailleDuLot` évaluations (`rangDansLeLot` de 1 à N).
- Si un `chapitre` est donné, les N évaluations portent sur ce chapitre et ses `notions`, avec des
  notions ou types d'exercices différents d'une évaluation à l'autre.
- La difficulté croît avec le rang : les premières évaluations du lot comptent surtout des questions
  N1 et N2 ; les dernières davantage de N3 (toujours au moins une question de chaque niveau).
- Sinon, lis les évaluations déjà publiées de la classe (`evaluations/<année>/<classe>/`) et choisis
  les notions suivantes d'une progression annuelle classique, distinctes entre elles et sans reprendre
  à l'identique un sujet déjà évalué.

## Vérification

Avant d'enregistrer, résous toi-même chaque question pour t'assurer qu'elle a une réponse unique ; ne
garde pas ces solutions dans le fichier. Termine par `node outils/compiler-evaluations.mjs` et corrige
toute erreur signalée.

## Compléter les niveaux d'évaluations existantes (liste `aNiveler`)

Pour chaque entrée, ouvre `fichier` et ajoute à **chaque question** qui ne les a pas :

1. un champ `niveau` : `1` (N1 - Application directe), `2` (N2 - Entraînement) ou
   `3` (N3 - Approfondissement), selon les définitions de `modeles/INDEX.md` et en comparant la
   question aux modèles du chapitre correspondant :
   - N1 : une définition ou une règle appliquée en une étape (calcul direct, lecture, reconnaissance) ;
   - N2 : plusieurs étapes, une méthode à mobiliser et à justifier ;
   - N3 : un problème en contexte, un raisonnement, plusieurs notions combinées ;
2. un champ `tempsMinutes` : le temps de résolution recommandé, en minutes entières, en partant des
   temps indicatifs de l'index pour la classe et le niveau, puis en les ajustant pour que **la somme
   des temps de l'évaluation soit égale à sa `dureeMinutes`** (à 2 minutes près). Si l'évaluation n'a
   pas de `dureeMinutes`, utilise simplement les temps indicatifs.

**Ne modifie rien d'autre** : ni les énoncés, ni les points, ni les choix, ni le corrigé, ni l'ordre
des questions, ni `dureeMinutes`, ni les autres champs ; ne change pas un niveau ou un temps déjà
présent. Le script de déploiement refuse toute autre modification. Termine par
`node outils/compiler-evaluations.mjs`.
