---
name: kpi
description: Calcule les chiffres des évaluations du site MathSite (nombre total, ouvertes, en attente de correction, fermées, copies corrigées, moyenne sur 20) par année et par classe. À utiliser avant chaque déploiement, ou pour répondre à une question sur l'état des évaluations.
---

# Skill : KPI des évaluations

## Commande

```
node outils/kpi.mjs
```

Le script est déterministe : il ne demande aucun jugement. Il écrit `kpi.json` ; la compilation
(`node outils/compiler-evaluations.mjs`) l'intègre ensuite à `evaluations-data.js` sous le nom
`window.EVAL_KPI`, que le site affiche dans les vignettes des classes.

Dans GitHub Actions (variables `GITHUB_TOKEN` et `GITHUB_REPOSITORY`), il lit aussi les issues
« reponse-eval » ouvertes pour compter les évaluations en attente ; ailleurs, `enAttente` vaut `null`.

## Chiffres produits, par année et par classe

| Clé | Sens |
|---|---|
| `total` | évaluations publiées |
| `ouvertes` | ouvertes, sans copie en attente |
| `enAttente` | ouvertes, avec au moins une copie reçue et pas encore corrigée |
| `fermees` | fermées : copies corrigées et corrigé publié |
| `copiesCorrigees` | notes publiées des élèves inscrits |
| `moyenneSur20` | moyenne de ces notes, chacune ramenée sur 20 (null s'il n'y en a pas) |

Les notes d'anciens codes (démonstration, code remplacé) ne comptent pas.
