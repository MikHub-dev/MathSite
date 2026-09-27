---
name: creation-evaluation
description: Crée de nouvelles évaluations de mathématiques (5e ou Seconde) pour le site MathSite, à partir de la liste « aGenerer » de travail/a-faire.json. À utiliser pour le lot hebdomadaire du dimanche ou pour une évaluation demandée par l'enseignant.
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
  "consignes": "<p>Une phrase de consigne.</p>",
  "questions": [
    { "id": "q1", "type": "qcm", "points": 2, "enonce": "<p>...</p>", "choix": ["...", "...", "..."] },
    { "id": "q2", "type": "numerique", "points": 3, "enonce": "<p>...</p>" },
    { "id": "q3", "type": "redaction", "points": 5, "enonce": "<p>...</p>" }
  ]
}
```

Règles :
- `date` et `dureeMinutes` recopiés exactement depuis l'entrée ; **pas** de `dateLimite`, **pas** de
  `corrige`, **pas** de `cloturee` (le dépôt est public : aucune réponse dans le fichier) ;
- 4 à 6 questions, total exactement égal à `points`, en mêlant `qcm`, `numerique` et `redaction` ;
  identifiants `q1`, `q2`… ; le travail tient dans la durée conseillée ;
- niveau conforme au programme officiel (5e : cycle 4 ; Seconde : seconde générale et technologique),
  progressif du plus simple au plus exigeant ;
- énoncés sans ambiguïté, en HTML simple, avec les notations Unicode (−, ×, ÷, ², √, ≤, ℝ…) et les
  espaces typographiques français (avant « : ; ? ! ») ; tutoiement ;
- un QCM a une et une seule bonne réponse ; une question numérique a une réponse unique et courte.

## Lot hebdomadaire

Les entrées d'une même classe forment un lot de `tailleDuLot` évaluations (`rangDansLeLot` de 1 à N).
- Si un `chapitre` est donné, les N évaluations portent sur ce chapitre et ses `notions`, avec des
  notions ou types d'exercices différents d'une évaluation à l'autre et une difficulté croissante.
- Sinon, lis les évaluations déjà publiées de la classe (`evaluations/<année>/<classe>/`) et choisis
  les notions suivantes d'une progression annuelle classique, distinctes entre elles et sans reprendre
  à l'identique un sujet déjà évalué.

## Vérification

Avant d'enregistrer, résous toi-même chaque question pour t'assurer qu'elle a une réponse unique ; ne
garde pas ces solutions dans le fichier. Termine par `node outils/compiler-evaluations.mjs` et corrige
toute erreur signalée.
