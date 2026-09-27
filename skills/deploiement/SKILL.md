---
name: deploiement
description: Vérifie puis publie sur le site MathSite le travail de l'agent (nouvelles évaluations, notes, corrigés, KPI) - contrôles, compilation, commit et push sur main, fermeture des issues traitées, mise à jour de GitHub Pages. À utiliser à la fin de chaque passage.
---

# Skill : déploiement

Ce skill est entièrement réalisé par des scripts et par le workflow `.github/workflows/agent-evaluations.yml`.
Claude n'utilise pas git : s'il doit vérifier son travail, il lance seulement l'étape 1.

## Étapes

1. **Vérifier** : `node outils/agent-finaliser.mjs verifier`
   - aucun fichier modifié hors de `evaluations/`, `notes/`, `kpi.json`, `evaluations-data.js` ;
   - nouvelles évaluations valides, sans corrigé ni date limite ;
   - notes déjà publiées inchangées ; une note par copie corrigée, avec un détail pour chaque question
     dont la somme des points égale la note ; corrigé complet seulement pour une évaluation fermée ;
   - ajout des réponses de l'élève, de ses dates et du numéro de l'issue à chaque nouvelle note ;
   - recompilation de `evaluations-data.js` ; en cas d'erreur, **rien n'est publié**.
   Une copie ou une évaluation oubliée n'est pas bloquante : elle est reprise au passage suivant.
2. **Publier** (workflow) : commit sur `main` du message préparé dans `travail/message-commit.txt`,
   puis push.
3. **Fermer les issues traitées** : `node outils/agent-finaliser.mjs fermer`, avec un commentaire.
4. **Mettre le site à jour** (workflow) : lancement de « Deploy static content to Pages »
   (`static.yml`). Le site affiche les changements 1 à 2 minutes après, plus jusqu'à 10 minutes
   de cache de GitHub Pages.
