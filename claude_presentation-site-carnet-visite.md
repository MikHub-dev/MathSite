<!-- Version : 1.0 -->
# Carnet de visite ΩPrépa — présentation du site

Page publiée : https://claude.ai/code/artifact/07cc5abd-2b10-4a72-ad39-1569c9dfcae0

Ce document (artifact HTML) sert de support de présentation du site, de guide des 6 entrées du menu horizontal, de comparaison Encyclopédie / Σ 1000 Formules, et de script de tutoriel vidéo. Contenu construit à partir du code source (index.html, app.js, formules.js, exercices.js, custom-schema.js, graphics.js, exo-email.js) et des fichiers de données associés.

## Points clés retenus

- **Chiffres** : 221 fiches Encyclopédie (collège 20, lycée 63, prépa 80, grandes écoles 58) ; Σ 1000 Formules = 11 chapitres, 1150 formules/théorèmes ; couverture 100% en vidéos, images Wikimedia, schémas originaux et exercices fondamentaux sur les 221 fiches + 11 chapitres.
- **Menu horizontal (6 entrées)** : Accueil, Encyclopédie, Σ 1000 Formules, Tableau de correspondances, Exercices fondamentaux, Exercices du jour.
- **Différence Encyclopédie / Σ 1000 Formules** : l'Encyclopédie organise par niveau puis catégorie (lecture verticale, une notion → toutes ses facettes) ; Σ 1000 Formules organise par thème transversal (lecture horizontale, une notion → tous ses niveaux). Citation du site lui-même : « Une carte des mathématiques, du collège aux grandes écoles — onze chapitres, une seule progression. Contenu indépendant de l'Encyclopédie : mêmes vitrines, deux bibliothèques distinctes. »
- **Relation entre les deux** : mêmes conventions visuelles (cartes, blocs, lightbox vidéo/images), coexistence non invasive par wrapping de fonctions (formules.js/exercices.js/custom-schema.js/graphics.js enveloppent openNotion/loadFormulesChapter sans toucher à app.js), et un pont explicite via les Exercices fondamentaux qui s'accrochent aux deux côtés à la fois.
- **4 personas d'usage** couverts dans le document : lycéen en révision, étudiant en prépa (oral), enseignant préparant un TD, curieux découvrant le site.
- **Script vidéo** : découpage en 8 scènes chronométrées (~5 min 30), de l'ouverture à la clôture, calé sur les 6 entrées du menu.

À mettre à jour si le menu horizontal ou le contenu des piliers évolue.
