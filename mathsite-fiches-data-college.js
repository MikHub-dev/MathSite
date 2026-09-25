// Version : 1.3
// Fiches détaillées — sous-ensemble "Collège" du sommaire ΩPrépa (jsonMathsite.js).
// Fait partie d'un jeu de 7 fichiers de fiches (college, lycee, l1, l2, l3, m1, m2),
// chacun chargé via <script> pour fonctionner en local (file://). Chaque fichier fusionne
// ses fiches dans l'objet global window.MATHSITE_FICHES, partagé entre tous les fichiers ;
// l'ordre de chargement des 7 fichiers entre eux n'a pas d'importance.
//
// Clé = "<branche>:<id>", ici branche = "ecole".
// Plage d'ids couverte par ce fichier : ids 1-150 (base) + additionnels.
// Nombre de fiches dans ce fichier : 75/75 (complet).
//
// Chaque "formula" du tableau "formulas" est désormais un objet { text, images } : "text" est
// le texte original de la formule, "images" un lien <a> (recherche Google Images, tbm=isch) vers
// la représentation (courbe/graphe/schéma/image) la plus pertinente pour cette formule au niveau
// de classe de la fiche, ouvert dans un nouvel onglet (target="_blank").
//
// Note : la section "correspondances" a été retirée de toutes les fiches. Les points de
// "approfondissements" (Pour aller plus loin) sont chacun un lien <a> cliquable vers une
// recherche Google du texte complet du point, ouvert dans un nouvel onglet (target="_blank").
//
// Chaque fiche a désormais une section "videos" (placée avant "applications_list"), avec une
// phrase d'intro et deux vidéos en français (chaîne YouTube d'Yvan Monka / maths-et-tiques.fr) :
// - "cours" : la vidéo de cours du chapitre correspondant, la plus vue (point d'entrée principal
//   de la chaîne pour cette notion, par opposition aux vidéos de méthode plus spécifiques) ;
// - "methode" : une vidéo de méthode illustrant précisément l'application de la notion.
//
// MODÈLE DE RÉFÉRENCE — la fiche "ecole:1" (Priorités opératoires, 6e, Arithmétique)
// est le modèle officiel de structure ET de style pour TOUTES les fiches du site
// (toutes branches, tous niveaux). Toute fiche doit comporter les mêmes sections,
// dans le même ordre : title, definition, definition_axiomatique (optionnelle, généralisée à toutes les fiches du Collège et du Lycée :
// {cadre, axiomes: [{nom, enonce}], conclusion, remarque, sources: [{titre, url}]} — affichée sous le titre « Définition
// axiomatique », juste après la définition ; une fiche qui n'a pas ce champ n'affiche pas la
// section), formulas ([{text, images}]),
// explication_formules, details, sous_points ([{terme, definition}]), videos
// ({intro, cours, methode}), applications_list ([{icon, text}]), approfondissements
// (liens <a> cliquables), + un jeu de 5 "Exercices fondamentaux" (du plus simple au
// plus exigeant, avec correction détaillée) déclaré séparément dans exercices-data.js
// sous window.FICHE_EXERCICES, à la clé "ecole:<id>" correspondante (cf. exercices.js).
// Toute fiche à laquelle il manque l'une de ces sections doit être complétée pour
// se conformer à ce modèle. La fiche "ecole:1" reste par ailleurs la fiche de
// démonstration d'origine, éditée à la main.
window.MATHSITE_FICHES = window.MATHSITE_FICHES || {};
Object.assign(window.MATHSITE_FICHES, {
  "ecole:1": {
    title: "Priorités opératoires",
    definition: "Les priorités opératoires (aussi appelées priorités de calcul) sont les règles qui fixent l'ordre dans lequel effectuer les différentes opérations d'une expression numérique, afin que celle-ci n'ait qu'un seul résultat possible, quel que soit qui la calcule.",
    definition_axiomatique: {
      cadre: "On considère des nombres (entiers ou décimaux) et les opérations +, −, ×, ÷ ainsi que la puissance aⁿ (n entier, écrit en exposant). Les expressions se construisent par les règles suivantes : un nombre est une expression ; si A et B sont des expressions, alors (A), A + B, A − B, A × B et A ÷ B en sont aussi ; si A est un nombre ou une expression entre parenthèses et n un entier, Aⁿ en est une aussi. Écrite avec trop peu de parenthèses, une même suite de symboles, comme 2 + 3 × 4, peut se lire de plusieurs façons et désigner plusieurs calculs : les priorités opératoires sont les axiomes qui lèvent cette ambiguïté.",
      axiomes: [
        {
          nom: "A1 — Parenthèses",
          enonce: "Le contenu d'une paire de parenthèses se calcule d'abord, comme une expression à part entière ; le nombre obtenu remplace la parenthèse. Avec des parenthèses imbriquées, on commence par les plus intérieures."
        },
        {
          nom: "A2 — Rang des opérations",
          enonce: "Les opérations ont un rang : la puissance a le rang 3, la multiplication et la division le rang 2, l'addition et la soustraction le rang 1. Une opération ne peut être effectuée que si aucune opération voisine n'est de rang supérieur."
        },
        {
          nom: "A3 — Opérations de même rang",
          enonce: "Entre deux opérations voisines de même rang, on effectue d'abord celle de gauche. La multiplication et la division (de même que l'addition et la soustraction) n'ont donc pas de priorité l'une sur l'autre : seul compte l'ordre de lecture, de gauche à droite."
        }
      ],
      conclusion: "La valeur d'une expression est le nombre auquel elle se réduit quand on effectue, l'une après l'autre, des opérations permises par A1, A2 et A3, chaque résultat remplaçant l'opération effectuée, jusqu'à ce qu'il ne reste plus qu'un nombre (à condition que chaque opération soit possible : pas de division par 0, pas de soustraction impossible dans les entiers). Cette valeur est unique : quel que soit le choix de l'opération à effectuer parmi celles que permettent A1 à A3, on obtient le même nombre. Les priorités opératoires sont précisément ces trois règles.",
      remarque: "Ces axiomes sont des conventions d'écriture, non des théorèmes : d'autres choix seraient possibles, mais celui-ci s'accorde avec la distributivité, qui s'écrit sans parenthèses au second membre : 3 × (4 + 5) = 3 × 4 + 3 × 5, car A2 fait effectuer 3 × 4 et 3 × 5 avant l'addition."
    },
    formulas: [
      {
        text: "1. Parenthèses (des plus intérieures aux plus extérieures)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Parenth%C3%A8ses+%28des+plus+int%C3%A9rieures+aux+plus+ext%C3%A9rieures%29+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Puissances",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Puissances+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Multiplications et divisions (de gauche à droite)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Multiplications+et+divisions+%28de+gauche+%C3%A0+droite%29+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Additions et soustractions (de gauche à droite)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+4.+Additions+et+soustractions+%28de+gauche+%C3%A0+droite%29+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "On calcule d'abord ce qui est entre parenthèses, en commençant par les parenthèses les plus internes s'il y en a plusieurs imbriquées. Viennent ensuite les puissances. Puis les multiplications et divisions, dans l'ordre où elles apparaissent en lisant de gauche à droite : aucune des deux n'est prioritaire sur l'autre. Enfin les additions et soustractions, également de gauche à droite.",
    details: "Sans règle commune, une expression comme 2 + 3 × 4 pourrait se lire de deux façons différentes et donner deux résultats différents. Les priorités opératoires garantissent que tout le monde calcule la même expression de la même manière : ici 2 + 3 × 4 = 2 + 12 = 14, et non (2 + 3) × 4 = 20.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3 + 4 × 2 = 3 + 8 = 11 (la multiplication est faite avant l'addition)"
      },
      {
        terme: "Exemple 2",
        definition: "(3 + 4) × 2 = 7 × 2 = 14 (les parenthèses imposent de calculer 3 + 4 en premier)"
      },
      {
        terme: "Exemple 3",
        definition: "20 − 6 ÷ 2 = 20 − 3 = 17 (la division est faite avant la soustraction)"
      },
      {
        terme: "Exemple 4",
        definition: "2 × 3² = 2 × 9 = 18 (la puissance est calculée avant la multiplication)"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Règles de calcul : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/r1dzDGtPm7A",
        lang: "fr"
      },
      methode: {
        title: "Effectuer des calculs avec des priorités (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/TJH-fiwAt5s",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Calculer le montant d'une facture avec plusieurs remises et taxes, dans le bon ordre"
      },
      {
        icon: "computer",
        text: "Écrire une formule correcte dans un tableur ou un programme informatique"
      },
      {
        icon: "research",
        text: "S'assurer qu'un calcul scientifique donne toujours le même résultat, indépendamment de qui le réalise"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Priorit%C3%A9s%20op%C3%A9ratoires%20avec%20plusieurs%20parenth%C3%A8ses%20imbriqu%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Priorités opératoires avec plusieurs parenthèses imbriquées</a>",
      "<a href=\"https://www.google.com/search?q=Priorit%C3%A9s%20op%C3%A9ratoires%20dans%20les%20langages%20de%20programmation\" target=\"_blank\" rel=\"noopener noreferrer\">Priorités opératoires dans les langages de programmation</a>",
      "<a href=\"https://www.google.com/search?q=Notation%20polonaise%20invers%C3%A9e%20%28calcul%20sans%20priorit%C3%A9s%20ni%20parenth%C3%A8ses%29\" target=\"_blank\" rel=\"noopener noreferrer\">Notation polonaise inversée (calcul sans priorités ni parenthèses)</a>"
    ]
  },
  "ecole:2": {
    title: "Critères de divisibilité",
    definition: "Les critères de divisibilité permettent de savoir si un nombre entier est divisible par un autre sans effectuer la division. Ils reposent sur des propriétés de l’écriture décimale et facilitent les simplifications de fractions et les raisonnements arithmétiques.",
    definition_axiomatique: {
        cadre: "On travaille dans ℤ : a divise n (a | n) s'il existe un entier k tel que n = k·a. Un entier s'écrit n = dₖ10ᵏ + … + d₁10 + d₀, avec des chiffres 0 ≤ dᵢ ≤ 9.",
        axiomes: [
            {
                nom: "A1 — Écriture décimale",
                enonce: "Tout entier naturel s'écrit de façon unique n = dₖ10ᵏ + … + d₁10 + d₀ avec des chiffres dᵢ compris entre 0 et 9."
            },
            {
                nom: "A2 — Stabilité",
                enonce: "Si a divise m et n, alors a divise m + n et m − n ; si a divise m, alors a divise km."
            },
            {
                nom: "A3 — Puissances de 10",
                enonce: "10ⁱ est multiple de 2 et de 5 pour i ≥ 1, de 4 et de 25 pour i ≥ 2, et 10ⁱ − 1 est multiple de 9 pour tout i."
            }
        ],
        conclusion: "On en déduit les critères : n est multiple de 2 (resp. 5) si et seulement si son chiffre des unités l'est ; de 4 (resp. 25) si et seulement si le nombre formé par ses deux derniers chiffres l'est ; de 10 si et seulement si d₀ = 0 ; de 3 (resp. 9) si et seulement si la somme de ses chiffres l'est, car n − (d₀ + d₁ + … + dₖ) = Σ dᵢ(10ⁱ − 1) est multiple de 9."
    },
    formulas: [
      {
        text: "1. Par 2 : dernier chiffre pair.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Par+2+%3A+dernier+chiffre+pair.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Par 3 : somme des chiffres divisible par 3.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Par+3+%3A+somme+des+chiffres+divisible+par+3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Par 5 : dernier chiffre 0 ou 5.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Par+5+%3A+dernier+chiffre+0+ou+5.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Par 9 : somme des chiffres divisible par 9.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+4.+Par+9+%3A+somme+des+chiffres+divisible+par+9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "5. Par 10 : dernier chiffre 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+5.+Par+10+%3A+dernier+chiffre+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Ils reposent sur des propriétés de l’écriture décimale et facilitent les simplifications de fractions et les raisonnements arithmétiques. Par exemple, 246 divisible par 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "246 divisible par 2"
      },
      {
        terme: "Exemple 2",
        definition: "513 divisible par 3"
      },
      {
        terme: "Exemple 3",
        definition: "145 divisible par 5"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Divisibilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kQJ1dYqA6ZU",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les critères de divisibilité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/BJDE6uOrmYQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Critères de divisibilité aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Critères de divisibilité peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Critères de divisibilité sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Crit%C3%A8res%20de%20divisibilit%C3%A9%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Critères de divisibilité appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Crit%C3%A8res%20de%20divisibilit%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Critères de divisibilité mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Crit%C3%A8res%20de%20divisibilit%C3%A9%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Critères de divisibilité vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:3": {
    title: "Décomposition en facteurs premiers",
    definition: "Décomposer un entier en facteurs premiers consiste à l’écrire comme un produit de nombres premiers. Cette écriture est unique à l’ordre près. Elle est fondamentale pour simplifier des fractions, calculer des PGCD/PPCM et analyser la structure des nombres.",
    definition_axiomatique: {
        cadre: "On travaille dans ℕ, défini par les axiomes de Peano (dont le bon ordre : toute partie non vide de ℕ possède un plus petit élément). Un entier p ≥ 2 est premier si ses seuls diviseurs positifs sont 1 et p.",
        axiomes: [
            {
                nom: "P1 — Bon ordre",
                enonce: "Toute partie non vide de ℕ possède un plus petit élément."
            },
            {
                nom: "P2 — Lemme d'Euclide",
                enonce: "Si un nombre premier p divise un produit ab, alors p divise a ou p divise b (propriété démontrable dans ℕ à partir de la division euclidienne)."
            }
        ],
        conclusion: "Théorème fondamental de l'arithmétique : tout entier n ≥ 2 s'écrit comme un produit de nombres premiers, de manière unique à l'ordre des facteurs près. Existence : par P1, le plus petit entier sans décomposition ne serait pas premier, donc produit de deux entiers plus petits qui en ont une, ce qui est absurde. Unicité : si deux décompositions existent, P2 permet de simplifier facteur par facteur.",
        sources: [
            {
                titre: "Perrin (CAPES) — Entiers naturels : axiomes de Peano",
                url: "https://www.imo.universite-paris-saclay.fr/~perrin/CAPES/arithmetique/EntiersCAPES.pdf"
            },
            {
                titre: "Rozière — Axiomatisation de l'arithmétique",
                url: "https://www.irif.fr/~roziere/thEnsL/peano.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Tout entier >1 possède une décomposition unique.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Tout+entier+%3E1+poss%C3%A8de+une+d%C3%A9composition+unique.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les puissances apparaissent naturellement.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Les+puissances+apparaissent+naturellement.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Utile pour PGCD et PPCM.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Utile+pour+PGCD+et+PPCM.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Elle est fondamentale pour simplifier des fractions, calculer des PGCD/PPCM et analyser la structure des nombres. Par exemple, 60 = 2² × 3 × 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "60 = 2² × 3 × 5"
      },
      {
        terme: "Exemple 2",
        definition: "84 = 2² × 3 × 7"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Arithmétique (nombres premiers) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/al9oHwrlTNo",
        lang: "fr"
      },
      methode: {
        title: "Décomposer un nombre en produit de facteurs premiers",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/RBE2wPIKagI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Décomposition en facteurs premiers aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Décomposition en facteurs premiers peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Décomposition en facteurs premiers sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9composition%20en%20facteurs%20premiers%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Décomposition en facteurs premiers appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9composition%20en%20facteurs%20premiers%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Décomposition en facteurs premiers mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9composition%20en%20facteurs%20premiers%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Décomposition en facteurs premiers vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:4": {
    title: "PGCD — algorithme d'Euclide",
    definition: "Le PGCD de deux entiers est le plus grand entier qui les divise tous les deux. L’algorithme d’Euclide permet de le calculer efficacement grâce à des divisions successives. Il repose sur l’idée que le PGCD ne change pas lorsqu’on remplace le plus grand nombre par le reste de la division.",
    definition_axiomatique: {
        cadre: "On travaille dans ℕ (axiomes de Peano, dont le bon ordre) muni de la division euclidienne : pour a et b > 0, il existe un unique couple (q ; r) avec a = bq + r et 0 ≤ r < b.",
        axiomes: [
            {
                nom: "E1 — Division euclidienne",
                enonce: "Pour tous entiers a ≥ 0 et b > 0, il existe un unique couple (q ; r) tel que a = bq + r et 0 ≤ r < b."
            },
            {
                nom: "E2 — Diviseurs communs",
                enonce: "Si a = bq + r, les diviseurs communs de a et b sont exactement les diviseurs communs de b et r."
            },
            {
                nom: "E3 — Bon ordre",
                enonce: "Une suite strictement décroissante d'entiers naturels est finie."
            }
        ],
        conclusion: "Le PGCD de a et b est le plus grand de leurs diviseurs communs. Par E2, pgcd(a, b) = pgcd(b, r) ; on répète la division : les restes strictement décroissants s'arrêtent (E3), et le dernier reste non nul est le PGCD. C'est l'algorithme d'Euclide.",
        sources: [
            {
                titre: "Perrin (CAPES) — Entiers naturels : axiomes de Peano",
                url: "https://www.imo.universite-paris-saclay.fr/~perrin/CAPES/arithmetique/EntiersCAPES.pdf"
            },
            {
                titre: "Rozière — Axiomatisation de l'arithmétique",
                url: "https://www.irif.fr/~roziere/thEnsL/peano.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. PGCD(a,b) = PGCD(b, a mod b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+PGCD%28a%2Cb%29+%3D+PGCD%28b%2C+a+mod+b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L’algorithme termine toujours.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+L%E2%80%99algorithme+termine+toujours.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Permet de simplifier des fractions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Permet+de+simplifier+des+fractions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Il repose sur l’idée que le PGCD ne change pas lorsqu’on remplace le plus grand nombre par le reste de la division. Par exemple, PGCD(84,30) = 6 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "PGCD(84,30) = 6"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "PGCD : recherche par l'algorithme d'Euclide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/npG_apkI18o",
        lang: "fr"
      },
      methode: {
        title: "Recherche de PGCD par l'algorithme d'Euclide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/npG_apkI18o",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "PGCD — algorithme d'Euclide aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "PGCD — algorithme d'Euclide peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "PGCD — algorithme d'Euclide sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=PGCD%20%E2%80%94%20algorithme%20d%27Euclide%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">PGCD — algorithme d'Euclide appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=PGCD%20%E2%80%94%20algorithme%20d%27Euclide%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">PGCD — algorithme d'Euclide mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=PGCD%20%E2%80%94%20algorithme%20d%27Euclide%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">PGCD — algorithme d'Euclide vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:5": {
    title: "PPCM et relation PGCD × PPCM = a × b",
    definition: "Le PPCM de deux entiers est le plus petit entier divisible par les deux. Il est lié au PGCD par la relation fondamentale : a × b = PGCD(a,b) × PPCM(a,b). Cette relation permet de calculer rapidement le PPCM.",
    definition_axiomatique: {
        cadre: "On travaille dans ℕ* (axiomes de Peano). Le PPCM de a et b est le plus petit entier strictement positif multiple de a et de b (il existe par le bon ordre) ; d désigne leur PGCD.",
        axiomes: [
            {
                nom: "P1 — Bon ordre",
                enonce: "Toute partie non vide de ℕ possède un plus petit élément."
            },
            {
                nom: "P2 — PGCD",
                enonce: "On écrit a = dα et b = dβ avec pgcd(α, β) = 1."
            },
            {
                nom: "P3 — Lemme de Gauss",
                enonce: "Si α divise βγ et si pgcd(α, β) = 1, alors α divise γ."
            }
        ],
        conclusion: "Un multiple commun de a et b est un entier m tel que dα | m et dβ | m ; par P3, m est multiple de dαβ, et dαβ est un multiple commun : ppcm(a, b) = dαβ. Donc pgcd(a, b) × ppcm(a, b) = d × dαβ = (dα)(dβ) = a × b.",
        sources: [
            {
                titre: "Perrin (CAPES) — Entiers naturels : axiomes de Peano",
                url: "https://www.imo.universite-paris-saclay.fr/~perrin/CAPES/arithmetique/EntiersCAPES.pdf"
            },
            {
                titre: "Rozière — Axiomatisation de l'arithmétique",
                url: "https://www.irif.fr/~roziere/thEnsL/peano.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. PPCM(a,b) = a×b / PGCD(a,b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+PPCM%28a%2Cb%29+%3D+a%C3%97b+%2F+PGCD%28a%2Cb%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Utile pour synchroniser des phénomènes périodiques.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Utile+pour+synchroniser+des+ph%C3%A9nom%C3%A8nes+p%C3%A9riodiques.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Cette relation permet de calculer rapidement le PPCM. Par exemple, Pour 12 et 18 : PGCD = 6 → PPCM = 36 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour 12 et 18 : PGCD = 6 → PPCM = 36"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "PGCD et PPCM : recherche par l'algorithme d'Euclide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/npG_apkI18o",
        lang: "fr"
      },
      methode: {
        title: "Recherche de PGCD par l'algorithme d'Euclide (PPCM = a×b ÷ PGCD)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/npG_apkI18o",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "PPCM et relation PGCD × PPCM = a × b aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "PPCM et relation PGCD × PPCM = a × b peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "PPCM et relation PGCD × PPCM = a × b sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=PPCM%20et%20relation%20PGCD%20%C3%97%20PPCM%20%3D%20a%20%C3%97%20b%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">PPCM et relation PGCD × PPCM = a × b appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=PPCM%20et%20relation%20PGCD%20%C3%97%20PPCM%20%3D%20a%20%C3%97%20b%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">PPCM et relation PGCD × PPCM = a × b mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=PPCM%20et%20relation%20PGCD%20%C3%97%20PPCM%20%3D%20a%20%C3%97%20b%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">PPCM et relation PGCD × PPCM = a × b vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:6": {
    title: "Fractions : addition",
    definition: "Pour additionner des fractions, il faut les mettre au même dénominateur puis additionner les numérateurs. Cette opération introduit la notion d’équivalence de fractions.",
    definition_axiomatique: {
        cadre: "On part des entiers relatifs ℤ, avec leur addition et leur multiplication. Une fraction a/b, avec b ≠ 0, représente a parts égales à la b-ième partie d'un tout ; on cherche à définir la somme de deux fractions.",
        axiomes: [
            {
                nom: "F1 — Égalité de fractions",
                enonce: "a/b = c/d si et seulement si ad = bc ; en particulier ka/kb = a/b pour tout k ≠ 0."
            },
            {
                nom: "F2 — Même dénominateur",
                enonce: "a/d + c/d = (a + c)/d : on additionne des parts de même taille."
            },
            {
                nom: "F3 — Compatibilité",
                enonce: "Remplacer une fraction par une fraction égale ne change pas le résultat de l'addition."
            }
        ],
        conclusion: "Il existe une seule addition des fractions qui vérifie F1 à F3. Pour calculer a/b + c/d, on écrit a/b = ad/bd et c/d = cb/bd (F1), puis F2 donne a/b + c/d = (ad + bc)/bd. Cette addition est commutative, associative, et prolonge celle des entiers (a/1 + c/1 = (a + c)/1).",
        remarque: "Additionner numérateurs et dénominateurs (1/2 + 1/3 = 2/5) contredit F3 : comme 1/2 = 2/4, on obtiendrait aussi 2/4 + 1/3 = 3/7, qui est un autre nombre."
    },
    formulas: [
      {
        text: "1. a/b + c/d = (ad + bc)/bd.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+a%2Fb+%2B+c%2Fd+%3D+%28ad+%2B+bc%29%2Fbd.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. On peut simplifier avant ou après.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+On+peut+simplifier+avant+ou+apr%C3%A8s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Cette opération introduit la notion d’équivalence de fractions. Par exemple, 1/4 + 1/6 = 5/12 illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "1/4 + 1/6 = 5/12"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fractions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/m0HUFgWbgsA",
        lang: "fr"
      },
      methode: {
        title: "Effectuer des additions et soustractions de fractions (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/lGShZVQlXMQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Fractions : addition aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Fractions : addition peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Fractions : addition sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Fractions%20%3A%20addition%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Fractions : addition appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Fractions%20%3A%20addition%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Fractions : addition mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Fractions%20%3A%20addition%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Fractions : addition vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:7": {
    title: "Produit en croix",
    definition: "Le produit en croix permet de résoudre des égalités de fractions et de vérifier la proportionnalité. Il repose sur l’égalité a/b = c/d ⇔ ad = bc.",
    definition_axiomatique: {
        cadre: "On travaille avec des fractions a/b et c/d (b et d non nuls) et on cherche à comparer deux fractions ou à calculer un terme manquant dans une égalité de fractions.",
        axiomes: [
            {
                nom: "A1 — Égalité de fractions",
                enonce: "a/b = c/d si et seulement si ad = bc."
            },
            {
                nom: "A2 — Simplification",
                enonce: "Si k ≠ 0 et ka = kb, alors a = b (on peut diviser les deux membres par un même nombre non nul)."
            }
        ],
        conclusion: "Le produit en croix est la traduction de A1 : a/b = c/d ⟺ ad = bc. Il donne le quatrième terme d'un tableau de proportionnalité : si a/b = c/x avec a ≠ 0, alors ax = bc, donc x = bc/a."
    },
    formulas: [
      {
        text: "1. Vérifie la proportionnalité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+V%C3%A9rifie+la+proportionnalit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de résoudre des équations simples.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Permet+de+r%C3%A9soudre+des+%C3%A9quations+simples.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Il repose sur l’égalité a/b = c/d ⇔ ad = bc. Par exemple, 3/4 = x/12 → x = 9 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3/4 = x/12 → x = 9"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Proportionnalité (produits en croix) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qSbYsztzMpU",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les produits en croix",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NKdhdmVoY1g",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Produit en croix aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Produit en croix peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Produit en croix sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Produit%20en%20croix%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Produit en croix appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Produit%20en%20croix%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Produit en croix mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Produit%20en%20croix%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Produit en croix vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:8": {
    title: "Puissances : règles",
    definition: "Les puissances permettent d’écrire des produits répétés. Les règles de calcul simplifient les expressions comportant des puissances.",
    definition_axiomatique: {
        cadre: "Pour un nombre a et un entier n, aⁿ est défini par récurrence (à partir des axiomes de Peano pour n), puis étendu aux exposants négatifs pour a ≠ 0.",
        axiomes: [
            {
                nom: "P1 — Exposant nul",
                enonce: "a⁰ = 1."
            },
            {
                nom: "P2 — Récurrence",
                enonce: "aⁿ⁺¹ = aⁿ × a pour tout entier n ≥ 0."
            },
            {
                nom: "P3 — Multiplication",
                enonce: "La multiplication est associative et commutative."
            }
        ],
        conclusion: "Par récurrence sur n, on démontre aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ et (ab)ⁿ = aⁿbⁿ. Pour a ≠ 0, la convention a⁻ⁿ = 1/aⁿ est la seule qui conserve la règle aᵐ × aⁿ = aᵐ⁺ⁿ : avec m = −n, elle impose aⁿ × a⁻ⁿ = a⁰ = 1.",
        sources: [
            {
                titre: "Perrin (CAPES) — Entiers naturels : axiomes de Peano",
                url: "https://www.imo.universite-paris-saclay.fr/~perrin/CAPES/arithmetique/EntiersCAPES.pdf"
            },
            {
                titre: "Rozière — Axiomatisation de l'arithmétique",
                url: "https://www.irif.fr/~roziere/thEnsL/peano.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. a^m × a^n = a^(m+n).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+a%5Em+%C3%97+a%5En+%3D+a%5E%28m%2Bn%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. a^m / a^n = a^(m−n).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+a%5Em+%2F+a%5En+%3D+a%5E%28m%E2%88%92n%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. (a^m)^n = a^(mn).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+%28a%5Em%29%5En+%3D+a%5E%28mn%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Les règles de calcul simplifient les expressions comportant des puissances. Par exemple, 2³ × 2² = 2⁵ illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "2³ × 2² = 2⁵"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Puissances : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/IxCzv5FPJ3s",
        lang: "fr"
      },
      methode: {
        title: "Utiliser la notation des puissances",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/jts9wiXPHtk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Puissances : règles aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Puissances : règles peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Puissances : règles sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Puissances%20%3A%20r%C3%A8gles%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Puissances : règles appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Puissances%20%3A%20r%C3%A8gles%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Puissances : règles mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Puissances%20%3A%20r%C3%A8gles%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Puissances : règles vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:9": {
    title: "Racine carrée",
    definition: "La racine carrée d’un nombre positif est le nombre dont le carré vaut ce nombre. Elle intervient dans le théorème de Pythagore et dans de nombreux calculs géométriques.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet : axiomes de corps, ordre total compatible avec + et ×, et existence d'une borne supérieure pour toute partie non vide majorée.",
        axiomes: [
            {
                nom: "R1 — Positivité",
                enonce: "Pour a ≥ 0, √a est un réel positif ou nul."
            },
            {
                nom: "R2 — Carré",
                enonce: "(√a)² = a."
            }
        ],
        conclusion: "Pour a ≥ 0, √a est l'unique réel positif dont le carré vaut a. Unicité : si x, y ≥ 0 et x² = y², alors (x − y)(x + y) = 0 donc x = y. Existence : c'est la borne supérieure de {x ≥ 0 : x² ≤ a}, qui existe grâce à la complétude de ℝ.",
        remarque: "Dans ℚ, cette borne supérieure n'existe pas toujours : aucune fraction n'a pour carré 2.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. √a ≥ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+%E2%88%9Aa+%E2%89%A5+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. (√a)² = a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+%28%E2%88%9Aa%29%C2%B2+%3D+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. √(ab) = √a × √b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+%E2%88%9A%28ab%29+%3D+%E2%88%9Aa+%C3%97+%E2%88%9Ab.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Elle intervient dans le théorème de Pythagore et dans de nombreux calculs géométriques. Par exemple, √25 = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "√25 = 5"
      },
      {
        terme: "Exemple 2",
        definition: "√36 = 6"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Racines carrées : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/8Atxa6iMVsw",
        lang: "fr"
      },
      methode: {
        title: "Calculer une racine carrée",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/y2HlgP09Bog",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Racine carrée aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Racine carrée peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Racine carrée sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Racine%20carr%C3%A9e%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Racine carrée appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Racine%20carr%C3%A9e%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Racine carrée mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Racine%20carr%C3%A9e%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Racine carrée vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:10": {
    title: "Notation scientifique",
    definition: "La notation scientifique permet d’écrire des nombres très grands ou très petits sous la forme a × 10^n avec 1 ≤ a < 10. Elle simplifie les calculs et la lecture des ordres de grandeur.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ avec les puissances entières de 10 : 10ⁿ pour n dans ℤ.",
        axiomes: [
            {
                nom: "N1 — Existence et unicité",
                enonce: "Tout réel x > 0 s'écrit de façon unique x = a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif."
            },
            {
                nom: "N2 — Règle des puissances",
                enonce: "10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ."
            }
        ],
        conclusion: "L'écriture scientifique de x est x = a × 10ⁿ, où n est le plus grand entier tel que 10ⁿ ≤ x et a = x/10ⁿ. Elle est unique : si a × 10ⁿ = a' × 10ⁿ' avec n ≠ n', l'un des deux nombres a, a' serait supérieur ou égal à 10 ou strictement inférieur à 1."
    },
    formulas: [
      {
        text: "1. Un seul chiffre avant la virgule.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Un+seul+chiffre+avant+la+virgule.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. n > 0 pour les grands nombres, n < 0 pour les petits.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+n+%3E+0+pour+les+grands+nombres%2C+n+%3C+0+pour+les+petits.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Elle simplifie les calculs et la lecture des ordres de grandeur. Par exemple, 3000000 = 3×10⁶ illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3000000 = 3×10⁶"
      },
      {
        terme: "Exemple 2",
        definition: "0,004 = 4×10⁻³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Puissances (notation scientifique) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/IxCzv5FPJ3s",
        lang: "fr"
      },
      methode: {
        title: "Ecrire un nombre sous forme scientifique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/tzhNCpLRtCY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Notation scientifique aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Notation scientifique peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Notation scientifique sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Notation%20scientifique%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Notation scientifique appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Notation%20scientifique%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Notation scientifique mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Notation%20scientifique%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Notation scientifique vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:11": {
    title: "Pourcentage",
    definition: "Le pourcentage permet d’exprimer une proportion sur 100. Il est utilisé pour comparer des valeurs, calculer des évolutions ou exprimer des parts dans un ensemble. Comprendre le pourcentage est essentiel pour les situations de la vie courante : remises, taxes, statistiques.",
    definition_axiomatique: {
        cadre: "On compare une quantité partielle p à une quantité totale T > 0 : la proportion de p dans T est le nombre p/T.",
        axiomes: [
            {
                nom: "Q1 — Référence",
                enonce: "Le total T correspond à 100 %."
            },
            {
                nom: "Q2 — Proportionnalité",
                enonce: "La proportion est proportionnelle à la quantité : x % de T vaut (x/100)·T."
            },
            {
                nom: "Q3 — Additivité",
                enonce: "x % de T et y % de T réunis font (x + y) % de T."
            }
        ],
        conclusion: "Le pourcentage que représente p dans T est 100·p/T. Augmenter une quantité de x % revient à la multiplier par 1 + x/100 ; la diminuer de x % revient à la multiplier par 1 − x/100.",
        remarque: "Deux évolutions successives de +10 % puis −10 % ne se compensent pas : 1,1 × 0,9 = 0,99."
    },
    formulas: [
      {
        text: "1. p% = p/100.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+p%25+%3D+p%2F100.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Valeur finale = valeur initiale × (1 + taux).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Valeur+finale+%3D+valeur+initiale+%C3%97+%281+%2B+taux%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une augmentation de p% n’est pas annulée par une diminution de p%.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Une+augmentation+de+p%25+n%E2%80%99est+pas+annul%C3%A9e+par+une+diminution+de+p%25.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Comprendre le pourcentage est essentiel pour les situations de la vie courante : remises, taxes, statistiques. Par exemple, 20% de 150 = 30 illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "20% de 150 = 30"
      },
      {
        terme: "Exemple 2",
        definition: "augmenter 200 de 10% → 220"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Pourcentages : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/2dcxLVwH7W0",
        lang: "fr"
      },
      methode: {
        title: "Appliquer un pourcentage",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Ce6E56gsbY0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Pourcentage aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Pourcentage peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Pourcentage sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Pourcentage%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Pourcentage appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Pourcentage%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Pourcentage mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Pourcentage%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Pourcentage vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:12": {
    title: "Proportionnalité",
    definition: "Deux grandeurs sont proportionnelles lorsque l’une est obtenue en multipliant l’autre par un même nombre. Les tableaux de proportionnalité permettent de résoudre des problèmes de vitesses, prix, distances, etc.",
    definition_axiomatique: {
        cadre: "On étudie une grandeur y qui dépend d'une grandeur x ≥ 0, c'est-à-dire une application f de [0 ; +∞[ dans ℝ, avec y = f(x).",
        axiomes: [
            {
                nom: "P1 — Additivité",
                enonce: "f(x + x') = f(x) + f(x') : deux quantités réunies donnent des résultats qui s'ajoutent."
            },
            {
                nom: "P2 — Croissance",
                enonce: "Si x ≤ x', alors f(x) ≤ f(x') : plus on en prend, plus le résultat est grand."
            }
        ],
        conclusion: "Une grandeur est proportionnelle à x si et seulement si f vérifie P1 et P2. Alors f(nx) = n·f(x) pour tout entier n, puis f(p/q) = (p/q)·f(1) pour tout rationnel ; P2 permet d'encadrer tout réel par des rationnels et donne f(x) = k·x pour tout x, avec k = f(1) : c'est le coefficient de proportionnalité. Un tableau est de proportionnalité lorsque toutes ses colonnes vérifient y = kx.",
        remarque: "Sur les rationnels, P1 seul suffit ; sur les réels, il faut P2 (ou une hypothèse de régularité), car il existe des fonctions additives très irrégulières."
    },
    formulas: [
      {
        text: "1. Rapport constant.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Rapport+constant.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Produit en croix.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Produit+en+croix.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Représentation graphique : droite passant par l’origine.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+Repr%C3%A9sentation+graphique+%3A+droite+passant+par+l%E2%80%99origine.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Les tableaux de proportionnalité permettent de résoudre des problèmes de vitesses, prix, distances, etc. Par exemple, Si 3 kg coûtent 12 €, alors 5 kg coûtent 20 € illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si 3 kg coûtent 12 €, alors 5 kg coûtent 20 €"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Proportionnalité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/2U8Sgwnmy9g",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la proportionnalité (4 méthodes)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/O91-Dq06k0U",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Proportionnalité aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Proportionnalité peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Proportionnalité sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Proportionnalit%C3%A9%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Proportionnalité appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Proportionnalit%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Proportionnalité mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Proportionnalit%C3%A9%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Proportionnalité vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:13": {
    title: "Moyenne arithmétique",
    definition: "La moyenne arithmétique d’une série de valeurs est la somme des valeurs divisée par leur nombre. Elle permet de résumer un ensemble de données par une seule valeur représentative.",
    definition_axiomatique: {
        cadre: "On considère des listes finies de nombres réels (x₁, …, xₙ), n ≥ 1, et une règle m qui associe à chaque liste un nombre m(x₁, …, xₙ) censé la résumer.",
        axiomes: [
            {
                nom: "M1 — Valeur unique",
                enonce: "Pour une liste d'un seul nombre, m(x) = x."
            },
            {
                nom: "M2 — Ordre indifférent",
                enonce: "m ne dépend pas de l'ordre des valeurs."
            },
            {
                nom: "M3 — Regroupement",
                enonce: "Si l'on partage une liste en deux sous-listes de n₁ et n₂ valeurs, de moyennes m₁ et m₂, alors m de la liste entière vaut (n₁m₁ + n₂m₂)/(n₁ + n₂)."
            }
        ],
        conclusion: "La seule règle qui vérifie M1 à M3 est la moyenne arithmétique m(x₁, …, xₙ) = (x₁ + … + xₙ)/n : par récurrence sur n, M3 appliqué à (x₁, …, xₙ₋₁) et (xₙ) donne m = ((n − 1)·m(x₁, …, xₙ₋₁) + xₙ)/n. C'est aussi l'unique nombre a tel que la somme des écarts (x₁ − a) + … + (xₙ − a) soit nulle.",
        remarque: "La moyenne minimise la somme des carrés des écarts Σ(xᵢ − a)², ce qui la relie à la variance.",
        sources: [
            {
                titre: "Cerclé (Publimath) — Et si on s'intéressait à la moyenne des écarts ?",
                url: "https://bibnum.publimath.fr/AAA/AAA14048.pdf"
            },
            {
                titre: "Académie de Besançon — Médiane et moyenne, problème de minimisation",
                url: "https://applilocale.ac-besancon.fr/geogebra/TICE/outils/TI/St2.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Moyenne = somme / effectif.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+Moyenne+%3D+somme+%2F+effectif.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Sensible aux valeurs extrêmes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Sensible+aux+valeurs+extr%C3%AAmes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Elle permet de résumer un ensemble de données par une seule valeur représentative. Par exemple, Notes : 10, 12, 14 → moyenne = 12 illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Notes : 10, 12, 14 → moyenne = 12"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/jnxny9HUqt0",
        lang: "fr"
      },
      methode: {
        title: "Calculer une moyenne",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/h0urYAnMUNI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Moyenne arithmétique aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Moyenne arithmétique peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Moyenne arithmétique sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Moyenne%20arithm%C3%A9tique%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Moyenne arithmétique appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=Moyenne%20arithm%C3%A9tique%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Moyenne arithmétique mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Moyenne%20arithm%C3%A9tique%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Moyenne arithmétique vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:14": {
    title: "Médiane et quartiles",
    definition: "La médiane est la valeur qui partage une série ordonnée en deux parties de même effectif. Les quartiles divisent la série en quatre parties égales. Ces indicateurs décrivent la répartition des données.",
    definition_axiomatique: {
        cadre: "On considère une série de n valeurs rangées dans l'ordre croissant x₁ ≤ x₂ ≤ … ≤ xₙ.",
        axiomes: [
            {
                nom: "Q1 — Médiane",
                enonce: "La médiane Me est un nombre tel qu'au moins la moitié des valeurs sont inférieures ou égales à Me et au moins la moitié sont supérieures ou égales à Me."
            },
            {
                nom: "Q2 — Premier quartile",
                enonce: "Q₁ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs soient inférieures ou égales à Q₁."
            },
            {
                nom: "Q3 — Troisième quartile",
                enonce: "Q₃ est la plus petite valeur de la série telle qu'au moins 75 % des valeurs soient inférieures ou égales à Q₃."
            }
        ],
        conclusion: "Si n = 2p + 1, la médiane est xₚ₊₁. Si n = 2p, tout nombre de l'intervalle [xₚ ; xₚ₊₁] convient et l'on prend le milieu (xₚ + xₚ₊₁)/2. La médiane est aussi le nombre a qui minimise la somme des écarts absolus Σ|xᵢ − a|.",
        remarque: "La médiane est peu sensible aux valeurs extrêmes, contrairement à la moyenne.",
        sources: [
            {
                titre: "Cerclé (Publimath) — Et si on s'intéressait à la moyenne des écarts ?",
                url: "https://bibnum.publimath.fr/AAA/AAA14048.pdf"
            },
            {
                titre: "Académie de Besançon — Médiane et moyenne, problème de minimisation",
                url: "https://applilocale.ac-besancon.fr/geogebra/TICE/outils/TI/St2.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Médiane = milieu de la série ordonnée.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+M%C3%A9diane+%3D+milieu+de+la+s%C3%A9rie+ordonn%C3%A9e.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Q1 = quart inférieur ; Q3 = quart supérieur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Q1+%3D+quart+inf%C3%A9rieur+%3B+Q3+%3D+quart+sup%C3%A9rieur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Ces indicateurs décrivent la répartition des données. Par exemple, Série : 2, 4, 7, 9, 10 → médiane = 7 illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Série : 2, 4, 7, 9, 10 → médiane = 7"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (médiane, quartiles) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer les quartiles (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Yjh-9nMVmEw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Médiane et quartiles aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Médiane et quartiles peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Médiane et quartiles sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=M%C3%A9diane%20et%20quartiles%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Médiane et quartiles appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9diane%20et%20quartiles%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Médiane et quartiles mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9diane%20et%20quartiles%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Médiane et quartiles vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:15": {
    title: "Échelle et agrandissement",
    definition: "Une échelle indique le rapport entre une longueur réelle et sa représentation. Elle permet de réaliser des plans, cartes ou agrandissements.",
    definition_axiomatique: {
        cadre: "On reproduit une figure du plan ou un solide de l'espace à une autre taille : à chaque point M correspond un point M'.",
        axiomes: [
            {
                nom: "H1 — Rapport d'agrandissement",
                enonce: "Il existe un nombre k > 0 tel que toutes les longueurs sont multipliées par k (agrandissement si k > 1, réduction si k < 1)."
            },
            {
                nom: "H2 — Angles conservés",
                enonce: "Les angles de la figure sont conservés."
            }
        ],
        conclusion: "Une échelle 1/E correspond à k = 1/E : une longueur du plan représente E fois cette longueur dans la réalité. Comme un carré de côté c est envoyé sur un carré de côté kc, les aires sont multipliées par k² ; de même, les volumes sont multipliés par k³."
    },
    formulas: [
      {
        text: "1. Échelle = longueur dessin / longueur réelle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+1.+%C3%89chelle+%3D+longueur+dessin+%2F+longueur+r%C3%A9elle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Agrandissement : rapport > 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+2.+Agrandissement+%3A+rapport+%3E+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Réduction : rapport < 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+arithm%C3%A9tique+3.+R%C3%A9duction+%3A+rapport+%3C+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent comme une suite de règles à respecter dans l'ordre : elles garantissent qu'on retombe systématiquement sur le même résultat, quel que soit qui effectue le calcul.",
    details: "Elle permet de réaliser des plans, cartes ou agrandissements. Par exemple, Échelle 1:100 → 1 cm représente 100 cm illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Échelle 1:100 → 1 cm représente 100 cm"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Proportionnalité (échelles) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/xzh9846HI0w",
        lang: "fr"
      },
      methode: {
        title: "Calculer une échelle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/82qxwdhWYq8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Échelle et agrandissement aide à vérifier ou simplifier des calculs financiers : remises, taxes, intérêts"
      },
      {
        icon: "computer",
        text: "Échelle et agrandissement peut être programmé pour automatiser un calcul numérique"
      },
      {
        icon: "research",
        text: "Échelle et agrandissement sert de base à un raisonnement arithmétique rigoureux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89chelle%20et%20agrandissement%20appliqu%C3%A9%20%C3%A0%20des%20nombres%20plus%20grands%20ou%20%C3%A0%20des%20cas%20particuliers\" target=\"_blank\" rel=\"noopener noreferrer\">Échelle et agrandissement appliqué à des nombres plus grands ou à des cas particuliers</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89chelle%20et%20agrandissement%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Échelle et agrandissement mis en relation avec la résolution de problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89chelle%20et%20agrandissement%20vu%20sous%20l%27angle%20de%20la%20programmation%20et%20de%20l%27algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Échelle et agrandissement vu sous l'angle de la programmation et de l'algorithmique</a>"
    ]
  },
  "ecole:16": {
    title: "Développement",
    definition: "Développer une expression consiste à supprimer les parenthèses en utilisant la distributivité. Cela permet de simplifier ou de préparer une factorisation.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb, pour tous nombres k, a, b."
            },
            {
                nom: "A2 — Commutativité et associativité",
                enonce: "On peut réordonner et regrouper les sommes et les produits."
            },
            {
                nom: "A3 — Opposés",
                enonce: "Tout nombre a possède un opposé −a tel que a + (−a) = 0."
            }
        ],
        conclusion: "Développer un produit, c'est le transformer en somme en appliquant A1 : k(a + b) = ka + kb. Comme a − b = a + (−b) et que k(−b) = −kb (car kb + k(−b) = k(b − b) = 0), on obtient k(a − b) = ka − kb."
    },
    formulas: [
      {
        text: "1. a(b + c) = ab + ac.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+a%28b+%2B+c%29+%3D+ab+%2B+ac.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. (a + b)(c + d) = ac + ad + bc + bd.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+%28a+%2B+b%29%28c+%2B+d%29+%3D+ac+%2B+ad+%2B+bc+%2B+bd.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Cela permet de simplifier ou de préparer une factorisation. Par exemple, 3(x + 2) = 3x + 6 illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3(x + 2) = 3x + 6"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Développements : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/F78Sm4HCHxA",
        lang: "fr"
      },
      methode: {
        title: "Développer une expression (Niv.1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/S_ckQpWzmG8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Développement permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Développement peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Développement sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9veloppement%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Développement étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9veloppement%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Développement mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9veloppement%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Développement relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:17": {
    title: "Double distributivité",
    definition: "La double distributivité permet de développer un produit de deux sommes. Elle est utilisée pour développer des expressions plus complexes.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb, et (a + b)k = ak + bk."
            },
            {
                nom: "A2 — Commutativité et associativité",
                enonce: "On peut réordonner et regrouper les sommes et les produits."
            }
        ],
        conclusion: "En appliquant A1 deux fois : (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd. Chaque terme du premier facteur est multiplié par chaque terme du second."
    },
    formulas: [
      {
        text: "1. (a + b)(c + d) = ac + ad + bc + bd.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%28a+%2B+b%29%28c+%2B+d%29+%3D+ac+%2B+ad+%2B+bc+%2B+bd.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle est utilisée pour développer des expressions plus complexes. Par exemple, (x + 3)(x + 2) = x² + 5x + 6 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(x + 3)(x + 2) = x² + 5x + 6"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Développements (double distributivité) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/F78Sm4HCHxA",
        lang: "fr"
      },
      methode: {
        title: "Développer en utilisant la double distributivité (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YS-3JI_z2f0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Double distributivité permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Double distributivité peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Double distributivité sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Double%20distributivit%C3%A9%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Double distributivité étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Double%20distributivit%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Double distributivité mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Double%20distributivit%C3%A9%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Double distributivité relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:18": {
    title: "Identité remarquable (a+b)²",
    definition: "Cette identité permet de développer rapidement le carré d’une somme. Elle évite les erreurs de développement et simplifie les calculs.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb."
            },
            {
                nom: "A2 — Commutativité",
                enonce: "ab = ba pour tous a, b."
            }
        ],
        conclusion: "(a + b)² = (a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b² (A1, A2).",
        remarque: "Avec les axiomes de l'aire, c'est le découpage d'un carré de côté a + b en un carré de côté a, un carré de côté b et deux rectangles a × b.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. (a + b)² = a² + 2ab + b².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%28a+%2B+b%29%C2%B2+%3D+a%C2%B2+%2B+2ab+%2B+b%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle évite les erreurs de développement et simplifie les calculs. Par exemple, (x + 4)² = x² + 8x + 16 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(x + 4)² = x² + 8x + 16"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul littéral - développements (identités remarquables) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gSa851JJn6c",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les identités remarquables",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/A8U1QVW7RaU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Identité remarquable (a+b)² permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Identité remarquable (a+b)² peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Identité remarquable (a+b)² sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%2Bb%29%C2%B2%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a+b)² étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%2Bb%29%C2%B2%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a+b)² mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%2Bb%29%C2%B2%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a+b)² relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:19": {
    title: "Identité remarquable (a−b)²",
    definition: "Cette identité permet de développer le carré d’une différence. Elle est utile pour les calculs algébriques et les factorisations.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb."
            },
            {
                nom: "A2 — Signes",
                enonce: "a − b = a + (−b), et (−b)(−b) = b × b (conséquence des axiomes d'anneau)."
            }
        ],
        conclusion: "(a − b)² = (a − b)(a − b) = a² − ab − ba + b² = a² − 2ab + b²."
    },
    formulas: [
      {
        text: "1. (a − b)² = a² − 2ab + b².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%28a+%E2%88%92+b%29%C2%B2+%3D+a%C2%B2+%E2%88%92+2ab+%2B+b%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle est utile pour les calculs algébriques et les factorisations. Par exemple, (x − 5)² = x² − 10x + 25 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(x − 5)² = x² − 10x + 25"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul littéral - développements (identités remarquables) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gSa851JJn6c",
        lang: "fr"
      },
      methode: {
        title: "Développer en utilisant une identité remarquable",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/U98Tk89SJ5M",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Identité remarquable (a−b)² permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Identité remarquable (a−b)² peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Identité remarquable (a−b)² sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%E2%88%92b%29%C2%B2%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a−b)² étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%E2%88%92b%29%C2%B2%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a−b)² mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20%28a%E2%88%92b%29%C2%B2%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable (a−b)² relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:20": {
    title: "Identité remarquable a²−b²",
    definition: "Cette identité factorise la différence de deux carrés. Elle est très utilisée pour simplifier des expressions et résoudre des équations.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb."
            },
            {
                nom: "A2 — Commutativité",
                enonce: "ab = ba pour tous a, b."
            }
        ],
        conclusion: "(a − b)(a + b) = a² + ab − ba − b² = a² − b², car ab − ba = 0 (A2)."
    },
    formulas: [
      {
        text: "1. a² − b² = (a − b)(a + b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+a%C2%B2+%E2%88%92+b%C2%B2+%3D+%28a+%E2%88%92+b%29%28a+%2B+b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle est très utilisée pour simplifier des expressions et résoudre des équations. Par exemple, x² − 9 = (x − 3)(x + 3) illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 9 = (x − 3)(x + 3)"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Factorisations (identité a²-b²) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kQGWtMOHbrA",
        lang: "fr"
      },
      methode: {
        title: "Factoriser à l'aide de l'identité remarquable a²-b²=(a-b)(a+b)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VWKNW4aLeG8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Identité remarquable a²−b² permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Identité remarquable a²−b² peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Identité remarquable a²−b² sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20a%C2%B2%E2%88%92b%C2%B2%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable a²−b² étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20a%C2%B2%E2%88%92b%C2%B2%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable a²−b² mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20remarquable%20a%C2%B2%E2%88%92b%C2%B2%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Identité remarquable a²−b² relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:21": {
    title: "Factorisation",
    definition: "Factoriser une expression consiste à l’écrire sous forme d’un produit. Cette opération est l’inverse du développement. Elle permet de simplifier des expressions, de résoudre des équations ou de mettre en évidence des structures algébriques.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "ka + kb = k(a + b) : on met en facteur ce qui est commun."
            },
            {
                nom: "A2 — Identités",
                enonce: "a² − b² = (a − b)(a + b) et a² ± 2ab + b² = (a ± b)²."
            }
        ],
        conclusion: "Factoriser une expression, c'est l'écrire comme un produit : c'est lire la distributivité de droite à gauche (A1), ou reconnaître une identité remarquable (A2). Un produit est nul si et seulement si l'un de ses facteurs est nul, ce qui permet de résoudre des équations."
    },
    formulas: [
      {
        text: "1. Mise en évidence : ab + ac = a(b + c).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+Mise+en+%C3%A9vidence+%3A+ab+%2B+ac+%3D+a%28b+%2B+c%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Utilisation des identités remarquables.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+Utilisation+des+identit%C3%A9s+remarquables.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Permet de résoudre des équations en annulant un produit.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+Permet+de+r%C3%A9soudre+des+%C3%A9quations+en+annulant+un+produit.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle permet de simplifier des expressions, de résoudre des équations ou de mettre en évidence des structures algébriques. Par exemple, x² − 9 = (x − 3)(x + 3) illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 9 = (x − 3)(x + 3)"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Factorisations : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JVnzqtfXfl4",
        lang: "fr"
      },
      methode: {
        title: "Factoriser en reconnaissant un facteur commun",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/r3AzqvgLcI8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Factorisation permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Factorisation peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Factorisation sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Factorisation%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Factorisation étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Factorisation%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Factorisation mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Factorisation%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Factorisation relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:22": {
    title: "Équation du premier degré",
    definition: "Une équation du premier degré est une équation de la forme ax + b = c. Elle se résout en isolant la variable. Ces équations apparaissent dans de nombreux problèmes quotidiens.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. Une équation est une égalité qui contient une inconnue x.",
        axiomes: [
            {
                nom: "E1 — Addition",
                enonce: "Ajouter (ou retrancher) un même nombre aux deux membres d'une équation donne une équation équivalente."
            },
            {
                nom: "E2 — Multiplication",
                enonce: "Multiplier (ou diviser) les deux membres par un même nombre non nul donne une équation équivalente."
            }
        ],
        conclusion: "Si a ≠ 0, l'équation ax + b = c a une unique solution : E1 donne ax = c − b, puis E2 (a possède un inverse dans ℝ) donne x = (c − b)/a. Si a = 0, l'équation n'a aucune solution ou admet tous les réels pour solutions."
    },
    formulas: [
      {
        text: "1. Une seule solution.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+Une+seule+solution.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. On effectue les mêmes opérations des deux côtés.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+On+effectue+les+m%C3%AAmes+op%C3%A9rations+des+deux+c%C3%B4t%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. a ≠ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+a+%E2%89%A0+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Ces équations apparaissent dans de nombreux problèmes quotidiens. Par exemple, 3x + 5 = 20 → x = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3x + 5 = 20 → x = 5"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Équations : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Z0i031tIdpQ",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uV_EmbYu9_E",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Équation du premier degré permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Équation du premier degré peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Équation du premier degré sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20premier%20degr%C3%A9%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du premier degré étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20premier%20degr%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du premier degré mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20premier%20degr%C3%A9%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du premier degré relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:23": {
    title: "Inéquation du premier degré",
    definition: "Une inéquation du premier degré est une inégalité contenant une variable. Elle se résout comme une équation, sauf lorsqu’on multiplie ou divise par un nombre négatif : le sens de l’inégalité change.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication.",
        axiomes: [
            {
                nom: "I1 — Addition",
                enonce: "Si x ≤ y, alors x + c ≤ y + c pour tout réel c."
            },
            {
                nom: "I2 — Multiplication",
                enonce: "Si x ≤ y et c > 0, alors cx ≤ cy ; si c < 0, alors cx ≥ cy (l'ordre est renversé)."
            }
        ],
        conclusion: "Pour a > 0, ax + b ≤ c équivaut à x ≤ (c − b)/a ; pour a < 0, l'inégalité change de sens : x ≥ (c − b)/a (I1 puis I2)."
    },
    formulas: [
      {
        text: "1. Même opérations des deux côtés.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+M%C3%AAme+op%C3%A9rations+des+deux+c%C3%B4t%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si on multiplie par un nombre négatif, on inverse le sens.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+Si+on+multiplie+par+un+nombre+n%C3%A9gatif%2C+on+inverse+le+sens.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Solution souvent exprimée sous forme d’intervalle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+Solution+souvent+exprim%C3%A9e+sous+forme+d%E2%80%99intervalle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle se résout comme une équation, sauf lorsqu’on multiplie ou divise par un nombre négatif : le sens de l’inégalité change. Par exemple, 2x − 3 ≥ 5 → x ≥ 4 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "2x − 3 ≥ 5 → x ≥ 4"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Inéquations : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kbTWwWQ9tYo",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une inéquation (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ycYfb8aHssY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Inéquation du premier degré permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Inéquation du premier degré peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Inéquation du premier degré sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=In%C3%A9quation%20du%20premier%20degr%C3%A9%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Inéquation du premier degré étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=In%C3%A9quation%20du%20premier%20degr%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Inéquation du premier degré mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=In%C3%A9quation%20du%20premier%20degr%C3%A9%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Inéquation du premier degré relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:24": {
    title: "Système linéaire 2×2",
    definition: "Un système linéaire 2×2 est un ensemble de deux équations à deux inconnues. Il peut être résolu par substitution, combinaison ou représentation graphique.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère le système de deux équations à deux inconnues ax + by = e et cx + dy = f.",
        axiomes: [
            {
                nom: "S1 — Combinaisons",
                enonce: "Remplacer une équation par elle-même plus un multiple de l'autre équation donne un système équivalent."
            },
            {
                nom: "S2 — Multiplication",
                enonce: "Multiplier une équation par un nombre non nul donne un système équivalent."
            }
        ],
        conclusion: "Si Δ = ad − bc ≠ 0, le système a une unique solution : x = (ed − bf)/Δ et y = (af − ce)/Δ (S1 et S2 éliminent successivement y puis x). Si Δ = 0, le système n'a aucune solution ou en a une infinité (droites parallèles ou confondues)."
    },
    formulas: [
      {
        text: "1. Une solution, aucune solution ou une infinité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+Une+solution%2C+aucune+solution+ou+une+infinit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Méthodes : substitution, combinaison linéaire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+M%C3%A9thodes+%3A+substitution%2C+combinaison+lin%C3%A9aire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Interprétation : intersection de deux droites.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+Interpr%C3%A9tation+%3A+intersection+de+deux+droites.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Il peut être résolu par substitution, combinaison ou représentation graphique. Par exemple, x + y = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x + y = 5"
      },
      {
        terme: "Exemple 2",
        definition: "x − y = 1 → x = 3, y = 2"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Systèmes d'équations et droites : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/sWaHnxqUve0",
        lang: "fr"
      },
      methode: {
        title: "Résoudre un système par substitution (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/24VsDZK6bN0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Système linéaire 2×2 permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Système linéaire 2×2 peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Système linéaire 2×2 sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Syst%C3%A8me%20lin%C3%A9aire%202%C3%972%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Système linéaire 2×2 étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Syst%C3%A8me%20lin%C3%A9aire%202%C3%972%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Système linéaire 2×2 mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Syst%C3%A8me%20lin%C3%A9aire%202%C3%972%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Système linéaire 2×2 relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:25": {
    title: "Équation du second degré",
    definition: "Une équation du second degré est une équation de la forme ax² + bx + c = 0. Elle se résout à l’aide du discriminant, qui permet de déterminer le nombre de solutions.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère l'équation ax² + bx + c = 0 avec a ≠ 0.",
        axiomes: [
            {
                nom: "A1 — Produit nul",
                enonce: "Un produit de deux réels est nul si et seulement si l'un des facteurs est nul."
            },
            {
                nom: "A2 — Carrés",
                enonce: "Un carré est toujours positif ou nul, et il est nul si et seulement si le nombre est nul."
            },
            {
                nom: "A3 — Racine carrée",
                enonce: "Tout réel positif possède une racine carrée positive."
            }
        ],
        conclusion: "La forme canonique ax² + bx + c = a[(x + b/2a)² − Δ/4a²], avec Δ = b² − 4ac, ramène l'équation à (x + b/2a)² = Δ/4a². Par A2, elle n'a pas de solution si Δ < 0 ; une solution −b/2a si Δ = 0 ; deux solutions (−b ± √Δ)/2a si Δ > 0 (A1, A3)."
    },
    formulas: [
      {
        text: "1. Δ = b² − 4ac.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%CE%94+%3D+b%C2%B2+%E2%88%92+4ac.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Δ > 0 : deux solutions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+%CE%94+%3E+0+%3A+deux+solutions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Δ = 0 : une solution double.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+%CE%94+%3D+0+%3A+une+solution+double.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Δ < 0 : aucune solution réelle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+4.+%CE%94+%3C+0+%3A+aucune+solution+r%C3%A9elle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle se résout à l’aide du discriminant, qui permet de déterminer le nombre de solutions. Par exemple, x² − 5x + 6 = 0 → solutions : 2 et 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 5x + 6 = 0 → solutions : 2 et 3"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (équations) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/tc9wvbYuZts",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation du 2nd degré (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/youUIZ-wsYk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Équation du second degré permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Équation du second degré peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Équation du second degré sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20second%20degr%C3%A9%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du second degré étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20second%20degr%C3%A9%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du second degré mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20du%20second%20degr%C3%A9%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Équation du second degré relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:26": {
    title: "Discriminant",
    definition: "Le discriminant est le nombre Δ = b² − 4ac associé à un trinôme du second degré. Il permet de déterminer la nature des solutions de l’équation ax² + bx + c = 0.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère un trinôme ax² + bx + c avec a ≠ 0.",
        axiomes: [
            {
                nom: "A1 — Forme canonique",
                enonce: "ax² + bx + c = a[(x + b/2a)² − Δ/4a²] pour Δ = b² − 4ac."
            },
            {
                nom: "A2 — Carrés",
                enonce: "Un carré est ≥ 0, et nul si et seulement si le nombre est nul."
            }
        ],
        conclusion: "Le discriminant Δ = b² − 4ac décide du nombre de solutions de ax² + bx + c = 0 : aucune si Δ < 0, une si Δ = 0, deux si Δ > 0, car le membre (x + b/2a)² = Δ/4a² ne peut être égal à un nombre strictement négatif."
    },
    formulas: [
      {
        text: "1. Δ > 0 : deux solutions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%CE%94+%3E+0+%3A+deux+solutions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Δ = 0 : une solution double.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+%CE%94+%3D+0+%3A+une+solution+double.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Δ < 0 : aucune solution réelle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+%CE%94+%3C+0+%3A+aucune+solution+r%C3%A9elle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Il permet de déterminer la nature des solutions de l’équation ax² + bx + c = 0. Par exemple, Pour 2x² − 3x + 1 : Δ = 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour 2x² − 3x + 1 : Δ = 1"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (équations, discriminant) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/tc9wvbYuZts",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation du 2nd degré (2)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/RhHheS2Wpyk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Discriminant permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Discriminant peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Discriminant sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Discriminant%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Discriminant étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Discriminant%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Discriminant mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Discriminant%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Discriminant relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:27": {
    title: "Racines du trinôme",
    definition: "Les racines d’un trinôme du second degré sont les solutions de l’équation ax² + bx + c = 0. Elles se calculent à partir du discriminant.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère un trinôme ax² + bx + c avec a ≠ 0 et Δ = b² − 4ac ≥ 0.",
        axiomes: [
            {
                nom: "A1 — Forme canonique",
                enonce: "ax² + bx + c = a[(x + b/2a)² − Δ/4a²]."
            },
            {
                nom: "A2 — Différence de carrés",
                enonce: "u² − v² = (u − v)(u + v)."
            },
            {
                nom: "A3 — Produit nul",
                enonce: "Un produit est nul si et seulement si l'un de ses facteurs est nul."
            }
        ],
        conclusion: "En posant x₁ = (−b − √Δ)/2a et x₂ = (−b + √Δ)/2a, A2 donne ax² + bx + c = a(x − x₁)(x − x₂). Les racines du trinôme sont exactement x₁ et x₂ (A3) ; elles sont confondues si Δ = 0."
    },
    formulas: [
      {
        text: "1. x₁ = (−b − √Δ)/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+x%E2%82%81+%3D+%28%E2%88%92b+%E2%88%92+%E2%88%9A%CE%94%29%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. x₂ = (−b + √Δ)/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+x%E2%82%82+%3D+%28%E2%88%92b+%2B+%E2%88%9A%CE%94%29%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elles se calculent à partir du discriminant. Par exemple, x² − 5x + 6 → racines : 2 et 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 5x + 6 → racines : 2 et 3"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (fonctions, racines) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
        lang: "fr"
      },
      methode: {
        title: "Déterminer des fonctions du 2nde degré (racines)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JiokX41_2nw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Racines du trinôme permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Racines du trinôme peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Racines du trinôme sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Racines%20du%20trin%C3%B4me%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Racines du trinôme étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Racines%20du%20trin%C3%B4me%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Racines du trinôme mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Racines%20du%20trin%C3%B4me%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Racines du trinôme relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:28": {
    title: "Somme et produit des racines",
    definition: "Pour un trinôme ax² + bx + c, les racines x₁ et x₂ vérifient des relations simples : leur somme vaut −b/a et leur produit vaut c/a.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +. Un polynôme est déterminé par ses coefficients : deux polynômes égaux pour tout réel x ont les mêmes coefficients.",
        axiomes: [
            {
                nom: "A1 — Identification",
                enonce: "Si ax² + bx + c = a'x² + b'x + c' pour tout réel x, alors a = a', b = b' et c = c'."
            },
            {
                nom: "A2 — Factorisation",
                enonce: "Si x₁ et x₂ sont les racines de ax² + bx + c (Δ ≥ 0), alors ax² + bx + c = a(x − x₁)(x − x₂)."
            }
        ],
        conclusion: "En développant a(x − x₁)(x − x₂) = ax² − a(x₁ + x₂)x + a·x₁x₂ et en identifiant avec ax² + bx + c (A1), on obtient x₁ + x₂ = −b/a et x₁ × x₂ = c/a."
    },
    formulas: [
      {
        text: "1. x₁ + x₂ = −b/a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+x%E2%82%81+%2B+x%E2%82%82+%3D+%E2%88%92b%2Fa.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. x₁ × x₂ = c/a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+x%E2%82%81+%C3%97+x%E2%82%82+%3D+c%2Fa.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Pour un trinôme ax² + bx + c, les racines x₁ et x₂ vérifient des relations simples : leur somme vaut −b/a et leur produit vaut c/a. Par exemple, Pour x² − 5x + 6 : somme = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour x² − 5x + 6 : somme = 5"
      },
      {
        terme: "Exemple 2",
        definition: "produit = 6"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (somme et produit des racines) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
        lang: "fr"
      },
      methode: {
        title: "Utiliser les formules de somme et produit de racines",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/UTcryCyG29s",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Somme et produit des racines permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Somme et produit des racines peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Somme et produit des racines sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Somme%20et%20produit%20des%20racines%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Somme et produit des racines étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20et%20produit%20des%20racines%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Somme et produit des racines mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20et%20produit%20des%20racines%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Somme et produit des racines relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:29": {
    title: "Forme canonique",
    definition: "La forme canonique d’un trinôme ax² + bx + c met en évidence le sommet de la parabole. Elle s’écrit a(x − α)² + β, où α et β sont calculés à partir de a, b et c.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère un trinôme f(x) = ax² + bx + c avec a ≠ 0.",
        axiomes: [
            {
                nom: "A1 — Identité remarquable",
                enonce: "u² + 2uv + v² = (u + v)²."
            },
            {
                nom: "A2 — Unicité",
                enonce: "Deux expressions égales pour tout réel x ont les mêmes coefficients."
            }
        ],
        conclusion: "La forme canonique de f est f(x) = a(x − α)² + β avec α = −b/2a et β = f(α) = −Δ/4a. Elle est unique (A2) et se démontre en complétant le carré : x² + (b/a)x = (x + b/2a)² − b²/4a² (A1). Le point de coordonnées (α ; β) est le sommet de la parabole."
    },
    formulas: [
      {
        text: "1. α = −b/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%CE%B1+%3D+%E2%88%92b%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. β = f(α).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+%CE%B2+%3D+f%28%CE%B1%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Permet de lire le minimum ou maximum.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+Permet+de+lire+le+minimum+ou+maximum.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle s’écrit a(x − α)² + β, où α et β sont calculés à partir de a, b et c. Par exemple, x² − 4x + 5 = (x − 2)² + 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 4x + 5 = (x − 2)² + 1"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (forme canonique) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la forme canonique d'une fonction du 2nd degré (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JcT6kph74O0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Forme canonique permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Forme canonique peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Forme canonique sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Forme%20canonique%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Forme canonique étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Forme%20canonique%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Forme canonique mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Forme%20canonique%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Forme canonique relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:30": {
    title: "Signe du trinôme",
    definition: "Le signe d’un trinôme dépend du signe de a et du discriminant. L’étude du signe permet de résoudre des inéquations du second degré.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère un trinôme f(x) = ax² + bx + c avec a ≠ 0.",
        axiomes: [
            {
                nom: "A1 — Forme canonique",
                enonce: "f(x) = a(x − α)² + β avec α = −b/2a et β = −Δ/4a."
            },
            {
                nom: "A2 — Compatibilité avec l'ordre",
                enonce: "Un carré est ≥ 0 ; multiplier une inégalité par un nombre négatif la renverse."
            }
        ],
        conclusion: "Si Δ > 0, f a deux racines x₁ < x₂ : f(x) est du signe de a à l'extérieur des racines et du signe contraire de a entre elles (signe de a(x − x₁)(x − x₂)). Si Δ = 0, f est du signe de a sauf en α où elle s'annule. Si Δ < 0, f est du signe de a pour tout x."
    },
    formulas: [
      {
        text: "1. Δ < 0 : signe constant.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+%CE%94+%3C+0+%3A+signe+constant.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Δ > 0 : changement de signe aux racines.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+%CE%94+%3E+0+%3A+changement+de+signe+aux+racines.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "L’étude du signe permet de résoudre des inéquations du second degré. Par exemple, x² − 5x + 6 : négatif entre 2 et 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x² − 5x + 6 : négatif entre 2 et 3"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (signe du trinôme) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
        lang: "fr"
      },
      methode: {
        title: "Etudier le signe d'un trinôme (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/sFNW9KVsTMY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Signe du trinôme permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Signe du trinôme peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Signe du trinôme sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Signe%20du%20trin%C3%B4me%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Signe du trinôme étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Signe%20du%20trin%C3%B4me%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Signe du trinôme mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Signe%20du%20trin%C3%B4me%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Signe du trinôme relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:31": {
    title: "Fonction affine",
    definition: "Une fonction affine est une fonction de la forme f(x) = ax + b. Elle représente une droite dans un repère. Le coefficient a indique la pente de la droite, tandis que b correspond à l’ordonnée à l’origine. Les fonctions affines permettent de modéliser des situations de proportionnalité ou d’évolution linéaire.",
    definition_axiomatique: {
        cadre: "On étudie les fonctions f de ℝ dans ℝ dont l'accroissement ne dépend que de la variation de x.",
        axiomes: [
            {
                nom: "A1 — Accroissements proportionnels",
                enonce: "Il existe un réel a tel que, pour tous réels x et h, f(x + h) − f(x) = a·h."
            },
            {
                nom: "A2 — Valeur en 0",
                enonce: "On note b = f(0)."
            }
        ],
        conclusion: "Une fonction vérifie A1 et A2 si et seulement si f(x) = ax + b : avec x = 0 et h = x, A1 donne f(x) − b = ax. On l'appelle fonction affine ; elle est linéaire si b = 0. Sa courbe est une droite, croissante si a > 0, décroissante si a < 0, constante si a = 0."
    },
    formulas: [
      {
        text: "1. Graphique : droite.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+Graphique+%3A+droite.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. a > 0 : fonction croissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+a+%3E+0+%3A+fonction+croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. a < 0 : fonction décroissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+a+%3C+0+%3A+fonction+d%C3%A9croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Les fonctions affines permettent de modéliser des situations de proportionnalité ou d’évolution linéaire. Par exemple, f(x) = 2x + 1 : droite de pente 2 passant par (0,1) illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x) = 2x + 1 : droite de pente 2 passant par (0,1)"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions affines : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/n5_pRx4ozIg",
        lang: "fr"
      },
      methode: {
        title: "Reconnaître l'expression d'une fonction affine",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/r5f6kS-8ePM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Fonction affine permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Fonction affine peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Fonction affine sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Fonction%20affine%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Fonction affine étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Fonction%20affine%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Fonction affine mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Fonction%20affine%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Fonction affine relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:32": {
    title: "Coefficient directeur",
    definition: "Le coefficient directeur d’une droite est le nombre qui indique sa pente. Il correspond au coefficient a dans l’expression f(x) = ax + b. Il mesure la variation de y lorsque x augmente d’une unité.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère et on considère une droite non verticale.",
        axiomes: [
            {
                nom: "A1 — Indépendance",
                enonce: "Pour deux points distincts A et B de la droite, le quotient (y_B − y_A)/(x_B − x_A) ne dépend pas du couple de points choisi (théorème de Thalès)."
            },
            {
                nom: "A2 — Définition",
                enonce: "Ce quotient constant est noté a : c'est le coefficient directeur (ou pente) de la droite."
            }
        ],
        conclusion: "Le coefficient directeur mesure la variation de y lorsque x augmente de 1 : la droite monte si a > 0, descend si a < 0, est horizontale si a = 0. Une droite verticale n'a pas de coefficient directeur, car x_B − x_A = 0."
    },
    formulas: [
      {
        text: "1. a = (y₂ − y₁)/(x₂ − x₁).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+a+%3D+%28y%E2%82%82+%E2%88%92+y%E2%82%81%29%2F%28x%E2%82%82+%E2%88%92+x%E2%82%81%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. a > 0 : droite montante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+a+%3E+0+%3A+droite+montante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. a < 0 : droite descendante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+a+%3C+0+%3A+droite+descendante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Il mesure la variation de y lorsque x augmente d’une unité. Par exemple, Points (1,2) et (3,6) : a = (6−2)/(3−1) = 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Points (1,2) et (3,6) : a = (6−2)/(3−1) = 2"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions affines (coefficient directeur) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/n5_pRx4ozIg",
        lang: "fr"
      },
      methode: {
        title: "Déterminer une fonction affine - taux d'accroissement (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ssA9Sa3yksM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Coefficient directeur permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Coefficient directeur peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Coefficient directeur sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Coefficient%20directeur%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Coefficient directeur étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Coefficient%20directeur%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Coefficient directeur mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Coefficient%20directeur%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Coefficient directeur relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:33": {
    title: "Équation de droite",
    definition: "L’équation d’une droite dans un repère s’écrit sous la forme y = ax + b. Elle permet de décrire toutes les positions possibles d’une droite et de déterminer ses caractéristiques.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère : les points sont les couples (x ; y).",
        axiomes: [
            {
                nom: "A1 — Incidence",
                enonce: "Deux points distincts appartiennent à une unique droite."
            },
            {
                nom: "A2 — Pente constante",
                enonce: "Pour une droite non verticale, le rapport (y_B − y_A)/(x_B − x_A) est le même pour tous les couples de points (coefficient directeur a)."
            }
        ],
        conclusion: "Une droite non verticale passant par A(x_A ; y_A), de coefficient directeur a, a pour équation y − y_A = a(x − x_A), soit y = ax + b avec b = y_A − a·x_A (ordonnée à l'origine). Une droite verticale a pour équation x = c."
    },
    formulas: [
      {
        text: "1. a : pente.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+a+%3A+pente.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. b : ordonnée à l’origine.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+b+%3A+ordonn%C3%A9e+%C3%A0+l%E2%80%99origine.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une droite est déterminée par deux points.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+3.+Une+droite+est+d%C3%A9termin%C3%A9e+par+deux+points.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elle permet de décrire toutes les positions possibles d’une droite et de déterminer ses caractéristiques. Par exemple, Droite passant par (0,1) et (2,5) : y = 2x + 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Droite passant par (0,1) et (2,5) : y = 2x + 1"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Droites du plan : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d-rUnClmcCY",
        lang: "fr"
      },
      methode: {
        title: "Déterminer une équation cartésienne d'une droite (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NosYmlLLFB4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Équation de droite permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Équation de droite peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Équation de droite sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20de%20droite%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Équation de droite étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20de%20droite%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Équation de droite mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20de%20droite%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Équation de droite relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:34": {
    title: "Droites parallèles",
    definition: "Deux droites sont parallèles si elles ont le même coefficient directeur. Elles ne se rencontrent jamais, même si elles sont prolongées indéfiniment.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère : une droite est l'ensemble des solutions d'une équation ax + by = c avec (a ; b) ≠ (0 ; 0).",
        axiomes: [
            {
                nom: "P1 — Parallélisme",
                enonce: "Deux droites sont parallèles si elles sont confondues ou sans point commun."
            },
            {
                nom: "P2 — Axiome des parallèles",
                enonce: "Par un point extérieur à une droite, il passe une seule parallèle à cette droite."
            }
        ],
        conclusion: "Deux droites non verticales y = ax + b et y = a'x + b' sont parallèles si et seulement si a = a' : l'équation ax + b = a'x + b' n'a aucune solution ou une infinité de solutions exactement quand a = a'."
    },
    formulas: [
      {
        text: "1. y = ax + b et y = ax + c sont parallèles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+y+%3D+ax+%2B+b+et+y+%3D+ax+%2B+c+sont+parall%C3%A8les.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Même pente, ordonnées différentes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+M%C3%AAme+pente%2C+ordonn%C3%A9es+diff%C3%A9rentes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elles ne se rencontrent jamais, même si elles sont prolongées indéfiniment. Par exemple, y = 2x + 1 et y = 2x − 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "y = 2x + 1 et y = 2x − 3"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Parallèles et perpendiculaires : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0CIm1i4HfEQ",
        lang: "fr"
      },
      methode: {
        title: "Construire deux droites parallèles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0J-qLZArCmo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Droites parallèles permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Droites parallèles peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Droites parallèles sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Droites%20parall%C3%A8les%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Droites parallèles étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Droites%20parall%C3%A8les%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Droites parallèles mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Droites%20parall%C3%A8les%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Droites parallèles relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:35": {
    title: "Droites perpendiculaires",
    definition: "Deux droites sont perpendiculaires si leurs coefficients directeurs sont des opposés inverses. Elles forment un angle droit lorsqu’elles se croisent.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé : la distance de deux points vérifie d² = Δx² + Δy².",
        axiomes: [
            {
                nom: "Q1 — Pythagore",
                enonce: "Un triangle ABC est rectangle en A si et seulement si BC² = AB² + AC² (théorème et réciproque)."
            },
            {
                nom: "Q2 — Droites perpendiculaires",
                enonce: "Deux droites sont perpendiculaires si elles forment un angle droit."
            }
        ],
        conclusion: "Deux droites non verticales y = ax + b et y = a'x + b' sont perpendiculaires si et seulement si aa' = −1. Avec O l'origine, U(1 ; a) et V(1 ; a'), l'angle en O est droit si et seulement si UV² = OU² + OV², c'est-à-dire (a − a')² = (1 + a²) + (1 + a'²), soit aa' = −1."
    },
    formulas: [
      {
        text: "1. a × a' = −1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+1.+a+%C3%97+a%27+%3D+%E2%88%921.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. a' = −1/a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+alg%C3%A8bre+2.+a%27+%3D+%E2%88%921%2Fa.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chacune de ces propriétés décrit une transformation licite de l'écriture algébrique : elles servent de justification à chaque étape d'un calcul ou d'une démonstration.",
    details: "Elles forment un angle droit lorsqu’elles se croisent. Par exemple, y = 2x + 1 et y = −1/2 x + 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "y = 2x + 1 et y = −1/2 x + 3"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Parallèles et perpendiculaires : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0CIm1i4HfEQ",
        lang: "fr"
      },
      methode: {
        title: "Construire deux droites perpendiculaires",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0J59aZmTwJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Droites perpendiculaires permet de modéliser une situation économique : coûts, bénéfices, évolutions"
      },
      {
        icon: "computer",
        text: "Droites perpendiculaires peut être intégré à un programme ou un tableur pour résoudre des équations automatiquement"
      },
      {
        icon: "research",
        text: "Droites perpendiculaires sert à démontrer des propriétés générales en algèbre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Droites%20perpendiculaires%20%C3%A9tendu%20%C3%A0%20des%20expressions%20ou%20des%20%C3%A9quations%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Droites perpendiculaires étendu à des expressions ou des équations plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Droites%20perpendiculaires%20mis%20en%20relation%20avec%20la%20r%C3%A9solution%20de%20syst%C3%A8mes%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Droites perpendiculaires mis en relation avec la résolution de systèmes d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Droites%20perpendiculaires%20reli%C3%A9%20aux%20fonctions%20et%20%C3%A0%20leur%20repr%C3%A9sentation%20graphique\" target=\"_blank\" rel=\"noopener noreferrer\">Droites perpendiculaires relié aux fonctions et à leur représentation graphique</a>"
    ]
  },
  "ecole:36": {
    title: "Théorème de Pythagore",
    definition: "Dans un triangle rectangle, le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. Ce théorème est fondamental pour les calculs de distances.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec les axiomes de l'aire ; on considère un triangle rectangle de côtés de l'angle droit a et b et d'hypoténuse c.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Dans un carré de côté a + b, on place quatre triangles rectangles de côtés a et b : ils laissent au centre un carré de côté c. Par A2 et A3, (a + b)² = 4 × (ab/2) + c², donc a² + 2ab + b² = 2ab + c², c'est-à-dire a² + b² = c².",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. c² = a² + b².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+c%C2%B2+%3D+a%C2%B2+%2B+b%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de vérifier qu’un triangle est rectangle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Permet+de+v%C3%A9rifier+qu%E2%80%99un+triangle+est+rectangle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Pythagore : a² + b² = c²",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Th%C3%A9or%C3%A8me%20de%20Pythagore%20Pythagore%20%3A%20a%C2%B2%20%2B%20b%C2%B2%20%3D%20c%C2%B2%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "4. Pythagore",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Th%C3%A9or%C3%A8me%20de%20Pythagore%20Pythagore%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Ce théorème est fondamental pour les calculs de distances. Par exemple, Si a = 3, b = 4 → c = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si a = 3, b = 4 → c = 5"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Théorème de Pythagore : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/QYM86GzWWG8",
        lang: "fr"
      },
      methode: {
        title: "Appliquer le théorème de Pythagore pour calculer une longueur (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/M9sceJ8gzNc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Théorème de Pythagore intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Théorème de Pythagore peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Théorème de Pythagore aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20Pythagore%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de Pythagore dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20Pythagore%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de Pythagore mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20Pythagore%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de Pythagore appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:37": {
    title: "Réciproque de Pythagore",
    definition: "Si dans un triangle, le carré d’un côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle. Cette propriété permet de reconnaître un triangle rectangle à partir de ses longueurs.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec le théorème de Pythagore et les cas de superposition des triangles ; on considère un triangle ABC tel que BC² = AB² + AC².",
        axiomes: [
            {
                nom: "R1 — Pythagore direct",
                enonce: "Dans un triangle rectangle, le carré de l'hypoténuse est la somme des carrés des deux autres côtés."
            },
            {
                nom: "R2 — Superposition côté-côté-côté",
                enonce: "Deux triangles dont les côtés sont égaux deux à deux sont superposables."
            }
        ],
        conclusion: "Construisons un triangle A'B'C' rectangle en A' avec A'B' = AB et A'C' = AC. Par R1, B'C'² = AB² + AC² = BC², donc B'C' = BC. Les triangles ABC et A'B'C' ont leurs côtés égaux deux à deux : ils sont superposables (R2), donc ABC est rectangle en A."
    },
    formulas: [
      {
        text: "1. c² = a² + b² → angle droit.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+c%C2%B2+%3D+a%C2%B2+%2B+b%C2%B2+%E2%86%92+angle+droit.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette propriété permet de reconnaître un triangle rectangle à partir de ses longueurs. Par exemple, 5² = 3² + 4² → triangle rectangle illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "5² = 3² + 4² → triangle rectangle"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Théorème de Pythagore (réciproque) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/QYM86GzWWG8",
        lang: "fr"
      },
      methode: {
        title: "Appliquer l'égalité de Pythagore pour vérifier si un triangle est rectangle (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/puXyHcU5Awg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Réciproque de Pythagore intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Réciproque de Pythagore peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Réciproque de Pythagore aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Pythagore%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Pythagore dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Pythagore%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Pythagore mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Pythagore%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Pythagore appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:38": {
    title: "Thalès",
    definition: "Le théorème de Thalès établit une relation de proportionnalité entre des segments lorsque deux droites sont parallèles. Il permet de calculer des longueurs inconnues dans des figures géométriques.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec les axiomes de l'aire ; deux droites (AB) et (AC) sont coupées par deux parallèles (BC) et (MN), avec M sur (AB) et N sur (AC).",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Les triangles BMN et CMN ont la même base [MN] et la même hauteur (car (MN) ∥ (BC)) : ils ont même aire. Donc aire(ABN) = aire(AMN) + aire(BMN) = aire(AMN) + aire(CMN) = aire(AMC). Comme des triangles de même hauteur ont des aires proportionnelles à leurs bases, AM/AB = aire(AMN)/aire(ABN) = aire(AMN)/aire(AMC) = AN/AC. En traçant la parallèle à (AB) par N, on obtient de même l'égalité avec MN/BC.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. AB/AC = DE/DF.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+AB%2FAC+%3D+DE%2FDF.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les droites doivent être parallèles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Les+droites+doivent+%C3%AAtre+parall%C3%A8les.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Il permet de calculer des longueurs inconnues dans des figures géométriques. Par exemple, Si AB = 3, AC = 6, DE = 2 → DF = 4 illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si AB = 3, AC = 6, DE = 2 → DF = 4"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Théorème de Thalès : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JpU7X7AhB-A",
        lang: "fr"
      },
      methode: {
        title: "Calculer une longueur à l'aide du théorème de Thalès (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zP16D2Zrv1A",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Thalès intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Thalès peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Thalès aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Thal%C3%A8s%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Thalès dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Thal%C3%A8s%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Thalès mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Thal%C3%A8s%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Thalès appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:39": {
    title: "Réciproque de Thalès",
    definition: "Si des rapports de longueurs sont égaux, alors les droites correspondantes sont parallèles. Cette propriété permet de démontrer le parallélisme dans une figure.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec le théorème de Thalès et l'axiome des parallèles ; M est sur [AB], N sur [AC], et AM/AB = AN/AC.",
        axiomes: [
            {
                nom: "R1 — Thalès direct",
                enonce: "Si (MN) ∥ (BC), alors AM/AB = AN/AC = MN/BC."
            },
            {
                nom: "R2 — Axiome des parallèles",
                enonce: "Par un point extérieur à une droite, il passe une seule parallèle à cette droite."
            }
        ],
        conclusion: "Traçons par M la parallèle à (BC) ; elle coupe (AC) en N'. Par R1, AN'/AC = AM/AB = AN/AC, donc AN' = AN. Comme N et N' sont sur la demi-droite [AC), N = N' : la droite (MN) est la parallèle à (BC) passant par M (R2), donc (MN) ∥ (BC)."
    },
    formulas: [
      {
        text: "1. AB/AC = DE/DF → droites parallèles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+AB%2FAC+%3D+DE%2FDF+%E2%86%92+droites+parall%C3%A8les.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette propriété permet de démontrer le parallélisme dans une figure. Par exemple, 3/6 = 2/4 → droites parallèles illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3/6 = 2/4 → droites parallèles"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Théorème de Thalès (réciproque) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/_6d-3GHwKRc",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la réciproque du théorème de Thalès (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/U9XX5w8FeOI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Réciproque de Thalès intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Réciproque de Thalès peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Réciproque de Thalès aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Thal%C3%A8s%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Thalès dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Thal%C3%A8s%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Thalès mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20de%20Thal%C3%A8s%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque de Thalès appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:40": {
    title: "Somme des angles d'un triangle",
    definition: "Dans tout triangle, la somme des trois angles est égale à 180°. Cette propriété est fondamentale pour résoudre des problèmes de géométrie et déterminer des angles inconnus.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. Les droites obéissent à l'axiome des parallèles.",
        axiomes: [
            {
                nom: "A1 — Angle plat",
                enonce: "Un angle plat mesure 180°."
            },
            {
                nom: "A2 — Additivité des angles",
                enonce: "Si une demi-droite partage un angle en deux angles, la mesure du grand angle est la somme des mesures des deux autres."
            },
            {
                nom: "A3 — Axiome des parallèles",
                enonce: "Par un point extérieur à une droite, il passe une seule parallèle à cette droite."
            }
        ],
        conclusion: "Dans un triangle ABC, on trace par C la parallèle à (AB). Par A3, deux parallèles coupées par une sécante font des angles alternes-internes égaux : les angles en A et en B se reportent en C, et les trois angles du triangle forment ensemble un angle plat : Â + B̂ + Ĉ = 180° (A1, A2). Dans le cadre des autres axiomes d'Euclide, cette égalité équivaut d'ailleurs à A3.",
        remarque: "Sur une sphère, la somme des angles d'un triangle dépasse 180° ; dans le plan hyperbolique, elle est inférieure à 180° : sans l'axiome des parallèles, le résultat tombe.",
        sources: [
            {
                titre: "Futura — Qu'est-ce que le postulat d'Euclide ?",
                url: "https://www.futura-sciences.com/sciences/questions-reponses/mathematiques-mathematiques-quest-ce-postulat-euclide-8478/"
            },
            {
                titre: "normalesup.org — Géométrie : postulats d'Euclide, angles alternes-internes, somme des angles d'un triangle",
                url: "https://www.normalesup.org/~mabboud/rennes_et_maths/geometrie.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A + B + C = 180°.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%2B+B+%2B+C+%3D+180%C2%B0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de calculer un angle manquant.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Permet+de+calculer+un+angle+manquant.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Somme des angles d'un triangle : 180°",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Somme%20des%20angles%20d%27un%20triangle%20Somme%20des%20angles%20d%27un%20triangle%20%3A%20180%C2%B0%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette propriété est fondamentale pour résoudre des problèmes de géométrie et déterminer des angles inconnus. Par exemple, Si A = 50°, B = 60° → C = 70° illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si A = 50°, B = 60° → C = 70°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Angles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la règle des 180° dans le triangle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/S1vCp-O7fbw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Somme des angles d'un triangle intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Somme des angles d'un triangle peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Somme des angles d'un triangle aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20triangle%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un triangle dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20triangle%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un triangle mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20triangle%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un triangle appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:41": {
    title: "Somme des angles d'un quadrilatère",
    definition: "Dans tout quadrilatère, la somme des quatre angles est égale à 360°. Cette propriété découle du fait qu’un quadrilatère peut être décomposé en deux triangles, chacun ayant une somme d’angles égale à 180°.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On utilise que la somme des angles d'un triangle vaut 180°.",
        axiomes: [
            {
                nom: "A1 — Triangle",
                enonce: "Dans tout triangle, la somme des angles vaut 180°."
            },
            {
                nom: "A2 — Découpage",
                enonce: "Un quadrilatère convexe ABCD est partagé par la diagonale [AC] en deux triangles ABC et ACD."
            },
            {
                nom: "A3 — Additivité des angles",
                enonce: "Les angles du quadrilatère en A et en C sont chacun la somme de deux angles des triangles."
            }
        ],
        conclusion: "La somme des quatre angles du quadrilatère est la somme des angles des deux triangles : 180° + 180° = 360°.",
        remarque: "Le même découpage en n − 2 triangles donne (n − 2) × 180° pour un polygone convexe à n côtés."
    },
    formulas: [
      {
        text: "1. A + B + C + D = 360°.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%2B+B+%2B+C+%2B+D+%3D+360%C2%B0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Utile pour déterminer un angle manquant.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Utile+pour+d%C3%A9terminer+un+angle+manquant.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Valable pour tous les quadrilatères, réguliers ou non.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Valable+pour+tous+les+quadrilat%C3%A8res%2C+r%C3%A9guliers+ou+non.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette propriété découle du fait qu’un quadrilatère peut être décomposé en deux triangles, chacun ayant une somme d’angles égale à 180°. Par exemple, Si trois angles valent 80°, 90° et 100°, alors le quatrième vaut 90° illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si trois angles valent 80°, 90° et 100°, alors le quatrième vaut 90°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Angles (quadrilatères) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Calculer un angle dans un triangle (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/x0UA6kbiDcM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Somme des angles d'un quadrilatère intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Somme des angles d'un quadrilatère peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Somme des angles d'un quadrilatère aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20quadrilat%C3%A8re%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un quadrilatère dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20quadrilat%C3%A8re%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un quadrilatère mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20des%20angles%20d%27un%20quadrilat%C3%A8re%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des angles d'un quadrilatère appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:42": {
    title: "Aire d'un triangle",
    definition: "L’aire d’un triangle se calcule en multipliant la base par la hauteur correspondante puis en divisant par deux. La hauteur doit être perpendiculaire à la base.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes ; on connaît l'aire d'un rectangle (a × b).",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Un triangle rectangle est la moitié d'un rectangle : la diagonale le partage en deux triangles superposables (A2), dont les aires s'ajoutent (A3) ; son aire est donc ab/2. Un triangle quelconque, découpé par l'une de ses hauteurs en deux triangles rectangles (ou complété en deux triangles rectangles), a pour aire ½ × base × hauteur.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = (base × hauteur)/2.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+%28base+%C3%97+hauteur%29%2F2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La hauteur dépend de la base choisie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+La+hauteur+d%C3%A9pend+de+la+base+choisie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Formule valable pour tous les triangles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Formule+valable+pour+tous+les+triangles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "La hauteur doit être perpendiculaire à la base. Par exemple, Base 8 cm, hauteur 5 cm → aire = 20 cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Base 8 cm, hauteur 5 cm → aire = 20 cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ThZd29ZU6zA",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'un triangle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XciTFhpXIL0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un triangle intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un triangle peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un triangle aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20triangle%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un triangle dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20triangle%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un triangle mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20triangle%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un triangle appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:43": {
    title: "Aire d'un rectangle",
    definition: "L’aire d’un rectangle est le produit de sa longueur par sa largeur. Cette formule est l’une des premières notions d’aire étudiées au collège.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes : on cherche une application qui, à chaque figure, associe un nombre.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "A1 à A3 déterminent l'aire de tout rectangle de côtés a et b : aire = a × b. Pour a et b entiers, il est pavé par ab carrés unités ; un carré de côté 1/n est l'un des n² carrés qui pavent le carré unité, donc son aire vaut 1/n², et le cas rationnel s'en déduit ; le cas réel s'obtient par encadrement, car une figure incluse dans une autre a une aire plus petite (conséquence de A1 et A3).",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = L × l.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+L+%C3%97+l.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les côtés opposés sont parallèles et égaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Les+c%C3%B4t%C3%A9s+oppos%C3%A9s+sont+parall%C3%A8les+et+%C3%A9gaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les angles sont droits.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Les+angles+sont+droits.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Aire rectangle : L × l",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Aire%20d%27un%20rectangle%20Aire%20rectangle%20%3A%20L%20%C3%97%20l%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette formule est l’une des premières notions d’aire étudiées au collège. Par exemple, L = 7 cm, l = 3 cm → A = 21 cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "L = 7 cm, l = 3 cm → A = 21 cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires (carré, rectangle) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/LESrNzrb9NI",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'un rectangle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/FyCDJE7yIzU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un rectangle intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un rectangle peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un rectangle aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20rectangle%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un rectangle dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20rectangle%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un rectangle mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20rectangle%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un rectangle appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:44": {
    title: "Aire d'un carré",
    definition: "L’aire d’un carré est le carré de la longueur de son côté. Le carré est une figure régulière dont les quatre côtés sont égaux.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes : on cherche une application qui, à chaque figure, associe un nombre.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Le carré de côté c est un rectangle c × c : son aire vaut c × c = c².",
        remarque: "On retrouve le même résultat avec une homothétie : le carré de côté c est l'image du carré unité par l'homothétie de rapport c, qui multiplie les aires par c².",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = c².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+c%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Quatre angles droits.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Quatre+angles+droits.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Quatre côtés égaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Quatre+c%C3%B4t%C3%A9s+%C3%A9gaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Le carré est une figure régulière dont les quatre côtés sont égaux. Par exemple, c = 4 cm → A = 16 cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "c = 4 cm → A = 16 cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires (carré, rectangle) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/LESrNzrb9NI",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'un carré et d'un rectangle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/FyCDJE7yIzU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un carré intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un carré peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un carré aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20carr%C3%A9%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un carré dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20carr%C3%A9%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un carré mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20carr%C3%A9%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un carré appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:45": {
    title: "Aire d'un disque",
    definition: "L’aire d’un disque de rayon r est égale à πr². Cette formule est essentielle pour les calculs de surfaces circulaires.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes, y compris celles à bord courbe ; on connaît l'aire d'un rectangle et d'un triangle.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            },
            {
                nom: "A4 — Monotonie",
                enonce: "Si une figure est contenue dans une autre, son aire est inférieure ou égale à celle de l'autre."
            }
        ],
        conclusion: "L'aire d'un disque de rayon r est l'unique nombre compris entre les aires des polygones réguliers inscrits et celles des polygones circonscrits (méthode d'Archimède). Un polygone régulier a pour aire ½ × périmètre × apothème ; à la limite, le périmètre tend vers 2πr et l'apothème vers r, d'où aire = ½ × 2πr × r = πr².",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = πr².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+%CF%80r%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dépend uniquement du rayon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+D%C3%A9pend+uniquement+du+rayon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le disque est l’ensemble des points situés à une distance ≤ r du centre.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Le+disque+est+l%E2%80%99ensemble+des+points+situ%C3%A9s+%C3%A0+une+distance+%E2%89%A4+r+du+centre.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette formule est essentielle pour les calculs de surfaces circulaires. Par exemple, r = 3 cm → A = 9π cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 3 cm → A = 9π cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires (disque) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ThZd29ZU6zA",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'un disque (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/y-PV5LNmqsM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un disque intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un disque peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un disque aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20disque%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un disque dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20disque%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un disque mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20disque%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un disque appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:46": {
    title: "Périmètre d'un cercle",
    definition: "Le périmètre d’un cercle, appelé circonférence, est égal à 2πr où r est le rayon. Cette formule permet de calculer la longueur du contour d’un cercle.",
    definition_axiomatique: {
        cadre: "On veut mesurer la longueur d'une courbe fermée convexe du plan, en particulier d'un cercle.",
        axiomes: [
            {
                nom: "L1 — Segment",
                enonce: "La longueur d'un segment est la distance de ses extrémités, exprimée avec une unité de longueur."
            },
            {
                nom: "L2 — Invariance et additivité",
                enonce: "La longueur est invariante par isométrie et s'ajoute lorsqu'on met deux arcs bout à bout."
            },
            {
                nom: "L3 — Monotonie",
                enonce: "Si une courbe fermée convexe est contenue dans une autre, sa longueur est inférieure ou égale."
            }
        ],
        conclusion: "Le périmètre d'un cercle de rayon r est le seul nombre compris entre les périmètres des polygones inscrits et ceux des polygones circonscrits. Comme deux cercles sont images l'un de l'autre par une homothétie, leurs périmètres sont proportionnels aux rayons : P = 2πr, où π = P₁/2 est la demi-longueur du cercle de rayon 1."
    },
    formulas: [
      {
        text: "1. C = 2πr.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+C+%3D+2%CF%80r.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Proportionnel au rayon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Proportionnel+au+rayon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. π ≈ 3,14.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+%CF%80+%E2%89%88+3%2C14.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Longueur : 2πr",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20P%C3%A9rim%C3%A8tre%20d%27un%20cercle%20Longueur%20%3A%202%CF%80r%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Aire : πr²",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20P%C3%A9rim%C3%A8tre%20d%27un%20cercle%20Aire%20%3A%20%CF%80r%C2%B2%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette formule permet de calculer la longueur du contour d’un cercle. Par exemple, r = 5 cm → C = 10π cm illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 5 cm → C = 10π cm"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Périmètres : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7tU_9CAcjJI",
        lang: "fr"
      },
      methode: {
        title: "Calculer la longueur d'un cercle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/iKyAfCzKnu4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Périmètre d'un cercle intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Périmètre d'un cercle peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Périmètre d'un cercle aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=P%C3%A9rim%C3%A8tre%20d%27un%20cercle%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Périmètre d'un cercle dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=P%C3%A9rim%C3%A8tre%20d%27un%20cercle%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Périmètre d'un cercle mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=P%C3%A9rim%C3%A8tre%20d%27un%20cercle%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Périmètre d'un cercle appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:47": {
    title: "Aire d'un parallélogramme",
    definition: "L’aire d’un parallélogramme est le produit d’un côté par la hauteur correspondante. Cette formule est similaire à celle du rectangle, mais la hauteur n’est pas un côté.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes ; on connaît l'aire d'un rectangle.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Dans un parallélogramme de base b et de hauteur h, on coupe un triangle rectangle à une extrémité et on le translate à l'autre extrémité (A2, A3) : on obtient un rectangle b × h, de même aire. L'aire du parallélogramme est donc b × h.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = base × hauteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+base+%C3%97+hauteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les côtés opposés sont parallèles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Les+c%C3%B4t%C3%A9s+oppos%C3%A9s+sont+parall%C3%A8les.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les hauteurs sont perpendiculaires à la base.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Les+hauteurs+sont+perpendiculaires+%C3%A0+la+base.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cette formule est similaire à celle du rectangle, mais la hauteur n’est pas un côté. Par exemple, Base 6 cm, hauteur 4 cm → A = 24 cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Base 6 cm, hauteur 4 cm → A = 24 cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires (parallélogramme) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ThZd29ZU6zA",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'un parallélogramme",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/BTLoR9iZXnM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un parallélogramme intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un parallélogramme peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un parallélogramme aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20parall%C3%A9logramme%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un parallélogramme dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20parall%C3%A9logramme%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un parallélogramme mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20parall%C3%A9logramme%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un parallélogramme appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:48": {
    title: "Aire d'un trapèze",
    definition: "L’aire d’un trapèze est égale à la demi‑somme des bases multipliée par la hauteur. Le trapèze possède deux côtés parallèles appelés bases.",
    definition_axiomatique: {
        cadre: "On veut mesurer les aires des figures planes ; on connaît l'aire d'un parallélogramme.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "Deux trapèzes superposables, de bases B et b et de hauteur h, s'assemblent en un parallélogramme de base B + b et de hauteur h (A2, A3). Son aire (B + b)h est le double de celle du trapèze, dont l'aire est donc (B + b) × h / 2.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = (B + b)/2 × h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+A+%3D+%28B+%2B+b%29%2F2+%C3%97+h.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Deux côtés parallèles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Deux+c%C3%B4t%C3%A9s+parall%C3%A8les.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La hauteur est perpendiculaire aux bases.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+La+hauteur+est+perpendiculaire+aux+bases.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Le trapèze possède deux côtés parallèles appelés bases. Par exemple, Bases 6 cm et 10 cm, hauteur 4 cm → A = 32 cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Bases 6 cm et 10 cm, hauteur 4 cm → A = 32 cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Aires (trapèze) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ThZd29ZU6zA",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire d'une figure composée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/vof06TmPcQk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'un trapèze intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Aire d'un trapèze peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Aire d'un trapèze aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20trap%C3%A8ze%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un trapèze dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20trap%C3%A8ze%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un trapèze mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27un%20trap%C3%A8ze%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'un trapèze appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:49": {
    title: "Angles alternes-internes",
    definition: "Les angles alternes‑internes sont des angles formés par deux droites parallèles et une sécante. Ils sont situés de part et d’autre de la sécante et à l’intérieur des deux droites.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. Deux droites sont parallèles si elles sont confondues ou sans point commun.",
        axiomes: [
            {
                nom: "A1 — Angles supplémentaires",
                enonce: "Deux angles adjacents qui forment ensemble un angle plat ont des mesures dont la somme vaut 180°."
            },
            {
                nom: "A2 — Angles opposés par le sommet",
                enonce: "Deux angles opposés par le sommet sont égaux."
            },
            {
                nom: "A3 — Axiome des parallèles",
                enonce: "Par un point extérieur à une droite, il passe une seule parallèle à cette droite."
            }
        ],
        conclusion: "Deux droites (d) et (d') coupées par une sécante forment des angles alternes-internes égaux si et seulement si elles sont parallèles. Si les angles alternes-internes sont égaux, les droites ne se coupent pas (théorème de l'angle extérieur, valable sans A3) ; réciproquement, si (d) et (d') sont parallèles, A3 impose que (d') soit la droite qui reporte l'angle égal.",
        sources: [
            {
                titre: "Futura — Qu'est-ce que le postulat d'Euclide ?",
                url: "https://www.futura-sciences.com/sciences/questions-reponses/mathematiques-mathematiques-quest-ce-postulat-euclide-8478/"
            },
            {
                titre: "normalesup.org — Géométrie : postulats d'Euclide, angles alternes-internes, somme des angles d'un triangle",
                url: "https://www.normalesup.org/~mabboud/rennes_et_maths/geometrie.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Alternes‑internes = égaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Alternes%E2%80%91internes+%3D+%C3%A9gaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de prouver le parallélisme.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Permet+de+prouver+le+parall%C3%A9lisme.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Utilisés dans les démonstrations géométriques.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Utilis%C3%A9s+dans+les+d%C3%A9monstrations+g%C3%A9om%C3%A9triques.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Ils sont situés de part et d’autre de la sécante et à l’intérieur des deux droites. Par exemple, Si un angle vaut 40°, l’angle alternes‑internes correspondant vaut aussi 40° illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si un angle vaut 40°, l’angle alternes‑internes correspondant vaut aussi 40°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Angles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Reconnaître les angles alternes-internes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/c8CuPY-KaNM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Angles alternes-internes intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Angles alternes-internes peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Angles alternes-internes aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Angles%20alternes-internes%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Angles alternes-internes dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Angles%20alternes-internes%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Angles alternes-internes mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Angles%20alternes-internes%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Angles alternes-internes appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:50": {
    title: "Triangles isocèles et équilatéraux",
    definition: "Un triangle isocèle possède deux côtés de même longueur. Un triangle équilatéral possède trois côtés égaux. Ces triangles ont des propriétés particulières concernant leurs angles.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. Un triangle a trois sommets non alignés.",
        axiomes: [
            {
                nom: "D1 — Triangle isocèle",
                enonce: "Un triangle ABC est isocèle en A si AB = AC."
            },
            {
                nom: "D2 — Triangle équilatéral",
                enonce: "Un triangle ABC est équilatéral si AB = BC = CA."
            },
            {
                nom: "D3 — Superposition côté-angle-côté",
                enonce: "Deux triangles qui ont un angle égal compris entre deux côtés égaux deux à deux sont superposables."
            }
        ],
        conclusion: "Si ABC est isocèle en A, les triangles ABC et ACB ont AB = AC, AC = AB et le même angle en A : D3 les rend superposables, donc B̂ = Ĉ. Un triangle équilatéral est isocèle en chacun de ses sommets, donc ses trois angles sont égaux ; avec la somme de 180°, chacun mesure 60°."
    },
    formulas: [
      {
        text: "1. Isocèle : deux angles égaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Isoc%C3%A8le+%3A+deux+angles+%C3%A9gaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Équilatéral : trois angles de 60°.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+%C3%89quilat%C3%A9ral+%3A+trois+angles+de+60%C2%B0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Figures très utilisées en géométrie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Figures+tr%C3%A8s+utilis%C3%A9es+en+g%C3%A9om%C3%A9trie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Ces triangles ont des propriétés particulières concernant leurs angles. Par exemple, Triangle équilatéral : côtés 5 cm → angles 60° illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Triangle équilatéral : côtés 5 cm → angles 60°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Triangles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/z0olRGs7kPk",
        lang: "fr"
      },
      methode: {
        title: "Reconnaître les triangles particuliers",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WPmB1mJ3HO0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Triangles isocèles et équilatéraux intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Triangles isocèles et équilatéraux peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Triangles isocèles et équilatéraux aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Triangles%20isoc%C3%A8les%20et%20%C3%A9quilat%C3%A9raux%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Triangles isocèles et équilatéraux dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Triangles%20isoc%C3%A8les%20et%20%C3%A9quilat%C3%A9raux%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Triangles isocèles et équilatéraux mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Triangles%20isoc%C3%A8les%20et%20%C3%A9quilat%C3%A9raux%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Triangles isocèles et équilatéraux appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:51": {
    title: "Médiatrice",
    definition: "La médiatrice d’un segment est la droite perpendiculaire à ce segment et passant par son milieu. Elle possède une propriété fondamentale : tout point de la médiatrice est équidistant des deux extrémités du segment.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un segment [AB].",
        axiomes: [
            {
                nom: "M1 — Définition",
                enonce: "La médiatrice de [AB] est l'ensemble des points M tels que MA = MB."
            },
            {
                nom: "M2 — Milieu",
                enonce: "Le segment [AB] possède un unique milieu I, point de [AB] tel que IA = IB."
            },
            {
                nom: "M3 — Superposition côté-côté-côté",
                enonce: "Deux triangles dont les côtés sont égaux deux à deux sont superposables."
            }
        ],
        conclusion: "La médiatrice de [AB] est la droite perpendiculaire à (AB) passant par I. Si MA = MB, les triangles MAI et MBI ont leurs trois côtés égaux deux à deux (M3), donc les angles en I sont égaux ; comme leur somme est un angle plat, chacun vaut 90°. Réciproquement, tout point M de cette perpendiculaire vérifie MA² = MI² + IA² = MI² + IB² = MB² (Pythagore)."
    },
    formulas: [
      {
        text: "1. Perpendiculaire au segment.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Perpendiculaire+au+segment.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Passe par le milieu.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Passe+par+le+milieu.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Points équidistants des extrémités.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Points+%C3%A9quidistants+des+extr%C3%A9mit%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Elle possède une propriété fondamentale : tout point de la médiatrice est équidistant des deux extrémités du segment. Par exemple, Pour le segment [AB], tout point de la médiatrice vérifie PA = PB illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour le segment [AB], tout point de la médiatrice vérifie PA = PB"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Distances et cercles (médiatrice) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WPrr9ov_Hfw",
        lang: "fr"
      },
      methode: {
        title: "Construire une médiatrice avec le compas",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9CCbE3eMSqM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Médiatrice intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Médiatrice peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Médiatrice aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=M%C3%A9diatrice%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Médiatrice dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9diatrice%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Médiatrice mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9diatrice%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Médiatrice appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:52": {
    title: "Bissectrice",
    definition: "La bissectrice d’un angle est la demi-droite qui partage cet angle en deux angles de même mesure. Elle est utilisée pour construire des figures symétriques ou résoudre des problèmes géométriques.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un angle xÔy.",
        axiomes: [
            {
                nom: "B1 — Définition",
                enonce: "La bissectrice de xÔy est la demi-droite [Oz) située à l'intérieur de l'angle telle que xÔz = zÔy."
            },
            {
                nom: "B2 — Additivité",
                enonce: "Si [Oz) est intérieure à xÔy, alors mes(xÔy) = mes(xÔz) + mes(zÔy)."
            },
            {
                nom: "B3 — Report d'angle",
                enonce: "Dans un demi-plan bordé par [Ox), pour tout réel α compris entre 0° et 180°, il existe une unique demi-droite [Oz) telle que mes(xÔz) = α."
            }
        ],
        conclusion: "La bissectrice existe et est unique : par B3, c'est la demi-droite qui reporte l'angle α = mes(xÔy)/2, et B2 donne alors mes(zÔy) = α. Les points de la bissectrice sont équidistants des deux côtés de l'angle."
    },
    formulas: [
      {
        text: "1. Coupe l’angle en deux angles égaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Coupe+l%E2%80%99angle+en+deux+angles+%C3%A9gaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Chaque point de la bissectrice est équidistant des deux côtés de l’angle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Chaque+point+de+la+bissectrice+est+%C3%A9quidistant+des+deux+c%C3%B4t%C3%A9s+de+l%E2%80%99angle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Elle est utilisée pour construire des figures symétriques ou résoudre des problèmes géométriques. Par exemple, La bissectrice d’un angle de 60° forme deux angles de 30° illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La bissectrice d’un angle de 60° forme deux angles de 30°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Angles (bissectrice) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ZZeFXFv55fY",
        lang: "fr"
      },
      methode: {
        title: "Construire la bissectrice d'un angle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Zxmms-BBdos",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Bissectrice intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Bissectrice peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Bissectrice aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Bissectrice%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Bissectrice dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Bissectrice%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Bissectrice mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Bissectrice%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Bissectrice appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:53": {
    title: "Médianes et centre de gravité",
    definition: "Une médiane d’un triangle est un segment reliant un sommet au milieu du côté opposé. Les trois médianes se coupent en un point appelé centre de gravité, situé aux deux tiers de chaque médiane à partir du sommet.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un triangle ABC ; une médiane relie un sommet au milieu du côté opposé.",
        axiomes: [
            {
                nom: "M1 — Milieu",
                enonce: "Tout segment possède un unique milieu."
            },
            {
                nom: "M2 — Thalès",
                enonce: "Si (MN) ∥ (BC), alors AM/AB = AN/AC = MN/BC."
            },
            {
                nom: "M3 — Aires",
                enonce: "Une médiane partage un triangle en deux triangles de même aire (même hauteur, bases égales)."
            }
        ],
        conclusion: "Les trois médianes d'un triangle sont concourantes en un point G, le centre de gravité, situé aux deux tiers de chaque médiane à partir du sommet : AG = ⅔·AA' où A' est le milieu de [BC]. Avec les vecteurs, GA + GB + GC = 0. Une plaque triangulaire homogène tient en équilibre en G."
    },
    formulas: [
      {
        text: "1. Trois médianes dans un triangle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Trois+m%C3%A9dianes+dans+un+triangle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Intersection : centre de gravité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Intersection+%3A+centre+de+gravit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Rapport : 2/3 – 1/3.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Rapport+%3A+2%2F3+%E2%80%93+1%2F3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Les trois médianes se coupent en un point appelé centre de gravité, situé aux deux tiers de chaque médiane à partir du sommet. Par exemple, Dans un triangle ABC, la médiane issue de A coupe BC en son milieu illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Dans un triangle ABC, la médiane issue de A coupe BC en son milieu"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Triangles (médianes) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Construire une médiane",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/jN3544Sofx8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Médianes et centre de gravité intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Médianes et centre de gravité peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Médianes et centre de gravité aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=M%C3%A9dianes%20et%20centre%20de%20gravit%C3%A9%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Médianes et centre de gravité dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9dianes%20et%20centre%20de%20gravit%C3%A9%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Médianes et centre de gravité mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9dianes%20et%20centre%20de%20gravit%C3%A9%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Médianes et centre de gravité appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:54": {
    title: "Hauteurs et orthocentre",
    definition: "Une hauteur d’un triangle est une droite passant par un sommet et perpendiculaire au côté opposé. Les trois hauteurs se coupent en un point appelé orthocentre.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un triangle ABC ; une hauteur est la perpendiculaire à un côté passant par le sommet opposé.",
        axiomes: [
            {
                nom: "H1 — Parallèle par un point",
                enonce: "Par un point extérieur à une droite, il passe une seule parallèle à cette droite."
            },
            {
                nom: "H2 — Perpendiculaire à une parallèle",
                enonce: "Une droite perpendiculaire à l'une de deux parallèles est perpendiculaire à l'autre."
            },
            {
                nom: "H3 — Médiatrices concourantes",
                enonce: "Les médiatrices d'un triangle sont concourantes."
            }
        ],
        conclusion: "Les trois hauteurs sont concourantes en un point H, l'orthocentre. Par chaque sommet, on trace la parallèle au côté opposé : ces droites forment un triangle A'B'C' dont ABC est le triangle des milieux. Les hauteurs de ABC sont alors les médiatrices de A'B'C' (H1, H2), qui sont concourantes (H3)."
    },
    formulas: [
      {
        text: "1. Trois hauteurs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Trois+hauteurs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Intersection : orthocentre.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Intersection+%3A+orthocentre.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Peut être intérieur ou extérieur au triangle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Peut+%C3%AAtre+int%C3%A9rieur+ou+ext%C3%A9rieur+au+triangle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Les trois hauteurs se coupent en un point appelé orthocentre. Par exemple, Dans un triangle obtus, l’orthocentre se situe à l’extérieur illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Dans un triangle obtus, l’orthocentre se situe à l’extérieur"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Triangles (hauteurs) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Construire une médiatrice ou une hauteur",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NYKW2MHECnQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Hauteurs et orthocentre intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Hauteurs et orthocentre peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Hauteurs et orthocentre aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Hauteurs%20et%20orthocentre%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Hauteurs et orthocentre dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Hauteurs%20et%20orthocentre%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Hauteurs et orthocentre mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Hauteurs%20et%20orthocentre%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Hauteurs et orthocentre appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:55": {
    title: "Cercle circonscrit",
    definition: "Le cercle circonscrit à un triangle est le cercle passant par ses trois sommets. Son centre est l’intersection des médiatrices des côtés.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un triangle ABC (trois points non alignés).",
        axiomes: [
            {
                nom: "C1 — Cercle",
                enonce: "Le cercle de centre O et de rayon r est l'ensemble des points M tels que OM = r."
            },
            {
                nom: "C2 — Médiatrice",
                enonce: "La médiatrice de [AB] est l'ensemble des points équidistants de A et de B."
            },
            {
                nom: "C3 — Parallèles",
                enonce: "Deux droites non parallèles se coupent en un seul point."
            }
        ],
        conclusion: "Les médiatrices de [AB] et de [AC] ne sont pas parallèles (A, B, C ne sont pas alignés), donc se coupent en un point O (C3) tel que OA = OB et OA = OC (C2). Le cercle de centre O et de rayon OA passe par A, B et C (C1) ; il est unique, car tout centre d'un tel cercle est équidistant de A, B, C et se trouve donc sur les deux médiatrices. Le point O est aussi sur la médiatrice de [BC]."
    },
    formulas: [
      {
        text: "1. Centre = intersection des médiatrices.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Centre+%3D+intersection+des+m%C3%A9diatrices.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Unique pour chaque triangle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Unique+pour+chaque+triangle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Tous les sommets sont sur le cercle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Tous+les+sommets+sont+sur+le+cercle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Son centre est l’intersection des médiatrices des côtés. Par exemple, Le triangle équilatéral possède un cercle circonscrit dont le centre est le centre du triangle illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Le triangle équilatéral possède un cercle circonscrit dont le centre est le centre du triangle"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Triangles (cercle circonscrit) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7XAffsX2cAA",
        lang: "fr"
      },
      methode: {
        title: "Tracer un cercle circonscrit",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0h9bZZoQfJM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Cercle circonscrit intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Cercle circonscrit peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Cercle circonscrit aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Cercle%20circonscrit%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Cercle circonscrit dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Cercle%20circonscrit%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Cercle circonscrit mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Cercle%20circonscrit%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Cercle circonscrit appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:56": {
    title: "Angle inscrit et angle au centre",
    definition: "Un angle inscrit est un angle dont le sommet est sur un cercle et dont les côtés interceptent un arc. Un angle au centre a son sommet au centre du cercle. L’angle au centre mesure deux fois l’angle inscrit interceptant le même arc.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un cercle de centre O et trois points A, B, M de ce cercle.",
        axiomes: [
            {
                nom: "A1 — Triangle isocèle",
                enonce: "Dans un triangle isocèle, les angles à la base sont égaux."
            },
            {
                nom: "A2 — Somme des angles",
                enonce: "La somme des angles d'un triangle vaut 180°."
            },
            {
                nom: "A3 — Additivité des angles",
                enonce: "Si une demi-droite partage un angle en deux, la mesure de l'angle est la somme des mesures des deux angles."
            }
        ],
        conclusion: "L'angle au centre AÔB vaut le double de l'angle inscrit AM̂B qui intercepte le même arc. Avec M sur le grand arc AB, tracer le diamètre [MD] : les triangles OMA et OMB sont isocèles en O (OM = OA = OB, A1) ; l'angle extérieur AÔD vaut 2·OMA (A2 : 180° − (180° − 2·OMA)) et de même BÔD vaut 2·OMB ; en additionnant (A3), AÔB = 2·AM̂B."
    },
    formulas: [
      {
        text: "1. Angle au centre = 2 × angle inscrit.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Angle+au+centre+%3D+2+%C3%97+angle+inscrit.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dépend de l’arc intercepté.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+D%C3%A9pend+de+l%E2%80%99arc+intercept%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Angles inscrits",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Angle%20inscrit%20et%20angle%20au%20centre%20Angles%20inscrits%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "L’angle au centre mesure deux fois l’angle inscrit interceptant le même arc. Par exemple, Si l’angle inscrit vaut 30°, l’angle au centre correspondant vaut 60° illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si l’angle inscrit vaut 30°, l’angle au centre correspondant vaut 60°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Distances et cercles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WPrr9ov_Hfw",
        lang: "fr"
      },
      methode: {
        title: "Connaître le vocabulaire du cercle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aWJmz1oM_O0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Angle inscrit et angle au centre intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Angle inscrit et angle au centre peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Angle inscrit et angle au centre aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Angle%20inscrit%20et%20angle%20au%20centre%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Angle inscrit et angle au centre dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Angle%20inscrit%20et%20angle%20au%20centre%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Angle inscrit et angle au centre mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Angle%20inscrit%20et%20angle%20au%20centre%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Angle inscrit et angle au centre appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:57": {
    title: "Trigonométrie : cos, sin, tan",
    definition: "Dans un triangle rectangle, les rapports trigonométriques permettent de relier les longueurs des côtés aux angles. Le cosinus, le sinus et la tangente sont définis à partir des côtés du triangle rectangle.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On considère des triangles rectangles.",
        axiomes: [
            {
                nom: "T1 — Similitude",
                enonce: "Deux triangles rectangles qui ont un même angle aigu sont semblables (Thalès) : les rapports de leurs côtés sont égaux."
            },
            {
                nom: "T2 — Définitions",
                enonce: "Dans un triangle rectangle, pour un angle aigu α : cos α = côté adjacent / hypoténuse, sin α = côté opposé / hypoténuse, tan α = côté opposé / côté adjacent."
            }
        ],
        conclusion: "Grâce à T1, ces quotients ne dépendent que de l'angle α, non de la taille du triangle : cos, sin et tan sont bien définis. On en déduit les longueurs manquantes d'un triangle rectangle, et les valeurs remarquables : cos 60° = sin 30° = 1/2, cos 45° = sin 45° = √2/2, cos 30° = sin 60° = √3/2."
    },
    formulas: [
      {
        text: "1. cos = adjacent / hypoténuse.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+cos+%3D+adjacent+%2F+hypot%C3%A9nuse.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. sin = opposé / hypoténuse.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+sin+%3D+oppos%C3%A9+%2F+hypot%C3%A9nuse.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. tan = opposé / adjacent.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+tan+%3D+oppos%C3%A9+%2F+adjacent.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Le cosinus, le sinus et la tangente sont définis à partir des côtés du triangle rectangle. Par exemple, Dans un triangle rectangle, si l’angle vaut 30°, sin(30°) = 1/2 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Dans un triangle rectangle, si l’angle vaut 30°, sin(30°) = 1/2"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/DfgUYXB5_jg",
        lang: "fr"
      },
      methode: {
        title: "Calculer un angle à l'aide de cos, sin ou tan (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/md7hgVVKVI0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Trigonométrie : cos, sin, tan intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Trigonométrie : cos, sin, tan peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Trigonométrie : cos, sin, tan aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trigonom%C3%A9trie%20%3A%20cos%2C%20sin%2C%20tan%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Trigonométrie : cos, sin, tan dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Trigonom%C3%A9trie%20%3A%20cos%2C%20sin%2C%20tan%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Trigonométrie : cos, sin, tan mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Trigonom%C3%A9trie%20%3A%20cos%2C%20sin%2C%20tan%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Trigonométrie : cos, sin, tan appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:58": {
    title: "Définitions trigonométriques",
    definition: "Les définitions trigonométriques précisent les rapports entre les côtés d’un triangle rectangle pour un angle donné. Elles permettent de calculer des longueurs ou des angles.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On considère un triangle ABC rectangle en A et l'angle aigu α = ÂBC.",
        axiomes: [
            {
                nom: "T1 — Similitude",
                enonce: "Tous les triangles rectangles qui ont l'angle aigu α sont semblables : les rapports de côtés ne dépendent que de α."
            },
            {
                nom: "T2 — Cosinus",
                enonce: "cos α = AB/BC."
            },
            {
                nom: "T3 — Sinus et tangente",
                enonce: "sin α = AC/BC et tan α = AC/AB."
            }
        ],
        conclusion: "cos α, sin α et tan α sont des fonctions de α seul (T1) ; elles vérifient tan α = sin α / cos α, cos(90° − α) = sin α et sin(90° − α) = cos α, car les deux angles aigus d'un triangle rectangle échangent les rôles de côté adjacent et de côté opposé."
    },
    formulas: [
      {
        text: "1. sin² + cos² = 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+sin%C2%B2+%2B+cos%C2%B2+%3D+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. tan = sin / cos.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+tan+%3D+sin+%2F+cos.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Elles permettent de calculer des longueurs ou des angles. Par exemple, Si cos(θ) = 0,6 → sin(θ) = 0,8 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si cos(θ) = 0,6 → sin(θ) = 0,8"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/DfgUYXB5_jg",
        lang: "fr"
      },
      methode: {
        title: "Ecrire les formules de trigonométrie (cos, sin, tan)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XGnTdigL8fg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Définitions trigonométriques intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Définitions trigonométriques peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Définitions trigonométriques aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9finitions%20trigonom%C3%A9triques%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Définitions trigonométriques dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9finitions%20trigonom%C3%A9triques%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Définitions trigonométriques mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9finitions%20trigonom%C3%A9triques%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Définitions trigonométriques appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:59": {
    title: "Identité cos²+sin²=1",
    definition: "Cette identité fondamentale relie le sinus et le cosinus d’un angle. Elle découle du théorème de Pythagore appliqué au cercle trigonométrique.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On considère un triangle ABC rectangle en A et l'angle aigu α = ÂBC, avec cos α = AB/BC et sin α = AC/BC.",
        axiomes: [
            {
                nom: "T1 — Définitions",
                enonce: "cos α = AB/BC et sin α = AC/BC."
            },
            {
                nom: "T2 — Pythagore",
                enonce: "AB² + AC² = BC²."
            }
        ],
        conclusion: "cos²α + sin²α = (AB² + AC²)/BC² = BC²/BC² = 1 (T2 puis T1). Cette identité est le théorème de Pythagore écrit dans un triangle d'hypoténuse de longueur 1."
    },
    formulas: [
      {
        text: "1. Toujours vraie pour tout angle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Toujours+vraie+pour+tout+angle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de vérifier des calculs trigonométriques.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Permet+de+v%C3%A9rifier+des+calculs+trigonom%C3%A9triques.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Elle découle du théorème de Pythagore appliqué au cercle trigonométrique. Par exemple, Si cos(θ) = 0,6 → sin²(θ) = 1 − 0,36 = 0,64 illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si cos(θ) = 0,6 → sin²(θ) = 1 − 0,36 = 0,64"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Lire en degré sur le cercle trigonométrique des valeurs de cos et sin",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/1l3SzSamBRk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Identité cos²+sin²=1 intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Identité cos²+sin²=1 peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Identité cos²+sin²=1 aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20cos%C2%B2%2Bsin%C2%B2%3D1%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Identité cos²+sin²=1 dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20cos%C2%B2%2Bsin%C2%B2%3D1%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Identité cos²+sin²=1 mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20cos%C2%B2%2Bsin%C2%B2%3D1%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Identité cos²+sin²=1 appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:60": {
    title: "Homothétie",
    definition: "Une homothétie est une transformation géométrique qui agrandit ou réduit une figure par rapport à un point appelé centre, selon un coefficient appelé rapport. Les formes sont conservées mais les longueurs sont multipliées par le rapport.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un point O (le centre) et un réel k non nul (le rapport).",
        axiomes: [
            {
                nom: "H1 — Centre invariant",
                enonce: "h(O) = O."
            },
            {
                nom: "H2 — Alignement",
                enonce: "Pour tout point M distinct de O, l'image M' est sur la droite (OM)."
            },
            {
                nom: "H3 — Distance et sens",
                enonce: "OM' = |k|·OM ; M' est du même côté de O que M si k > 0, du côté opposé si k < 0."
            }
        ],
        conclusion: "L'homothétie de centre O et de rapport k est l'unique application vérifiant H1 à H3 ; en termes de vecteurs, OM' = k·OM. Elle multiplie les longueurs par |k|, conserve les angles, transforme toute droite en une droite parallèle et multiplie les aires par k²."
    },
    formulas: [
      {
        text: "1. Rapport k > 1 : agrandissement.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Rapport+k+%3E+1+%3A+agrandissement.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Rapport 0 < k < 1 : réduction.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Rapport+0+%3C+k+%3C+1+%3A+r%C3%A9duction.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les angles sont conservés.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Les+angles+sont+conserv%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Aire multipliée par k²",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Homoth%C3%A9tie%20Aire%20multipli%C3%A9e%20par%20k%C2%B2%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la figure impose sur les longueurs, les angles ou les aires ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Les formes sont conservées mais les longueurs sont multipliées par le rapport. Par exemple, Une homothétie de rapport 2 double toutes les longueurs illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Une homothétie de rapport 2 double toutes les longueurs"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Transformations (homothétie) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/rM73EdeggJM",
        lang: "fr"
      },
      methode: {
        title: "Construire l'image d'un point par une homothétie",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/BNgjzubShAo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Homothétie intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Homothétie peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Homothétie aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Homoth%C3%A9tie%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Homothétie dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Homoth%C3%A9tie%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Homothétie mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Homoth%C3%A9tie%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Homothétie appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:61": {
    title: "Volume d'un cube",
    definition: "Le volume d'un cube est l'espace qu'il occupe. Comme les six faces d'un cube sont des carrés identiques et que ses trois dimensions sont égales, il suffit de connaître la longueur d'une arête pour calculer son volume.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace : on cherche une application qui, à chaque solide, associe un nombre.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            }
        ],
        conclusion: "Le cube d'arête a a pour volume a³ : pour a entier, il est réuni de a³ cubes unités ; un cube d'arête 1/n est l'un des n³ cubes qui remplissent le cube unité, donc son volume vaut 1/n³ ; le cas rationnel s'en déduit, puis le cas réel par encadrement.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = a³, où a est la longueur de l'arête.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+a%C2%B3%2C+o%C3%B9+a+est+la+longueur+de+l%27ar%C3%AAte.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les trois dimensions (longueur, largeur, hauteur) sont égales.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+Les+trois+dimensions+%28longueur%2C+largeur%2C+hauteur%29+sont+%C3%A9gales.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Unité : cm³, m³, litres, selon l'unité choisie pour l'arête.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Unit%C3%A9+%3A+cm%C2%B3%2C+m%C2%B3%2C+litres%2C+selon+l%27unit%C3%A9+choisie+pour+l%27ar%C3%AAte.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "Il suffit de connaître la longueur d'une arête pour calculer son volume. Par exemple, Arête = 4 cm → V = 4³ = 64 cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Arête = 4 cm → V = 4³ = 64 cm³"
      },
      {
        terme: "Exemple 2",
        definition: "Arête = 10 cm → V = 10³ = 1000 cm³ = 1 litre"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Solides et volumes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/18rPxmBBG-8",
        lang: "fr"
      },
      methode: {
        title: "Calculer le volume d'un assemblage de cubes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/hQsUbBJfubA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'un cube permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'un cube peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'un cube aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cube%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cube appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cube%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cube mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cube%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cube mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:62": {
    title: "Volume d'un pavé droit",
    definition: "Le volume d’un pavé droit est le produit de sa longueur, de sa largeur et de sa hauteur. Il représente l’espace occupé par le solide.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace : on cherche une application qui, à chaque solide, associe un nombre.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            }
        ],
        conclusion: "Un pavé droit de dimensions a, b, c a pour volume a × b × c : on le remplit de cubes unités lorsque a, b, c sont entiers, puis on raisonne comme pour le cube (cubes d'arête 1/n, encadrement) pour des dimensions quelconques.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = L × l × h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+L+%C3%97+l+%C3%97+h.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Unité : cm³, m³.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+Unit%C3%A9+%3A+cm%C2%B3%2C+m%C2%B3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Solide à six faces rectangulaires.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Solide+%C3%A0+six+faces+rectangulaires.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "Il représente l’espace occupé par le solide. Par exemple, L = 5 cm, l = 3 cm, h = 2 cm → V = 30 cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "L = 5 cm, l = 3 cm, h = 2 cm → V = 30 cm³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Solides et volumes (pavé droit) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/TCblUwPAnRc",
        lang: "fr"
      },
      methode: {
        title: "Calculer le volume d'un pavé droit",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JqS7YBLtksw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'un pavé droit permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'un pavé droit peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'un pavé droit aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20pav%C3%A9%20droit%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un pavé droit appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20pav%C3%A9%20droit%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un pavé droit mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20pav%C3%A9%20droit%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un pavé droit mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:63": {
    title: "Volume d'un cylindre",
    definition: "Le volume d’un cylindre est égal à l’aire de sa base circulaire multipliée par sa hauteur. La base est un disque.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace ; on connaît le volume d'un pavé droit.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            },
            {
                nom: "V4 — Principe de Cavalieri",
                enonce: "Deux solides compris entre deux plans parallèles, dont les sections par tout plan parallèle à ceux-là ont la même aire, ont le même volume."
            }
        ],
        conclusion: "Un cylindre de base d'aire B et de hauteur h et un pavé droit de même hauteur et de base de même aire B ont, à toute hauteur, des sections de même aire B : par V4, ils ont le même volume, qui vaut B × h (volume du pavé). Pour un cylindre de rayon r, B = πr², d'où V = πr²h.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = πr²h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+%CF%80r%C2%B2h.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dépend du rayon et de la hauteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+D%C3%A9pend+du+rayon+et+de+la+hauteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Solide de révolution.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Solide+de+r%C3%A9volution.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Volume : V = π r² h",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27un%20cylindre%20Volume%20%3A%20V%20%3D%20%CF%80%20r%C2%B2%20h%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Aire latérale : 2π r h",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27un%20cylindre%20Aire%20lat%C3%A9rale%20%3A%202%CF%80%20r%20h%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "La base est un disque. Par exemple, r = 3 cm, h = 10 cm → V = 90π cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 3 cm, h = 10 cm → V = 90π cm³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Solides et volumes (cylindre) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/TCblUwPAnRc",
        lang: "fr"
      },
      methode: {
        title: "Calculer le volume d'un cylindre",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/eJ8BSaTIpYU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'un cylindre permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'un cylindre peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'un cylindre aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cylindre%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cylindre appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cylindre%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cylindre mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20cylindre%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cylindre mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:64": {
    title: "Volume d'une pyramide",
    definition: "Le volume d'une pyramide est égal au tiers du produit de l'aire de sa base par sa hauteur. La pyramide est un solide qui se termine par un sommet unique situé au-dessus de sa base.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace ; on connaît le volume d'un pavé droit.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            },
            {
                nom: "V4 — Principe de Cavalieri",
                enonce: "Deux solides compris entre deux plans parallèles, dont les sections par tout plan parallèle à ceux-là ont la même aire, ont le même volume."
            }
        ],
        conclusion: "Un prisme droit à base triangulaire, de base d'aire B et de hauteur h, se découpe en trois pyramides de même volume (deux à deux de bases superposables et de même hauteur, donc de même volume par V4) : chacune vaut Bh/3. Par V4 encore, toute pyramide de base d'aire B et de hauteur h a le même volume, car ses sections parallèles à la base ont même aire (Thalès). Ainsi V = ⅓ × B × h.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = (aire de la base × hauteur) / 3.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+%28aire+de+la+base+%C3%97+hauteur%29+%2F+3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La base peut être un polygone quelconque : carré, rectangle, triangle...",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+La+base+peut+%C3%AAtre+un+polygone+quelconque+%3A+carr%C3%A9%2C+rectangle%2C+triangle...+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La hauteur est la distance entre le sommet et le plan de la base.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+La+hauteur+est+la+distance+entre+le+sommet+et+le+plan+de+la+base.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "La pyramide est un solide qui se termine par un sommet unique situé au-dessus de sa base. Par exemple, Base carrée de côté 6 cm, hauteur 9 cm → V = (36 × 9)/3 = 108 cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Base carrée de côté 6 cm, hauteur 9 cm → V = (36 × 9)/3 = 108 cm³"
      },
      {
        terme: "Exemple 2",
        definition: "Base triangulaire d'aire 20 cm², hauteur 6 cm → V = (20 × 6)/3 = 40 cm³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (pyramide) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/2FH1GM2Nuk4",
        lang: "fr"
      },
      methode: {
        title: "Calculer le volume d'une pyramide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/KKon_cIVd9k",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'une pyramide permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'une pyramide peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'une pyramide aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20pyramide%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une pyramide appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20pyramide%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une pyramide mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20pyramide%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une pyramide mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:65": {
    title: "Volume d'un cône",
    definition: "Le volume d’un cône est égal à un tiers de l’aire de sa base multipliée par sa hauteur. La base est un disque.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace ; on connaît le volume d'une pyramide.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            },
            {
                nom: "V4 — Principe de Cavalieri",
                enonce: "Deux solides compris entre deux plans parallèles, dont les sections par tout plan parallèle à ceux-là ont la même aire, ont le même volume."
            }
        ],
        conclusion: "Un cône de base un disque d'aire B = πr² et de hauteur h, et une pyramide de base d'aire B et de même hauteur, ont à chaque hauteur des sections d'aire B(1 − z/h)² : par V4, ils ont le même volume ⅓Bh. Donc V = ⅓ × π r² × h.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = (πr²h)/3.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+%28%CF%80r%C2%B2h%29%2F3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Solide de révolution.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+Solide+de+r%C3%A9volution.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Dépend du rayon et de la hauteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+D%C3%A9pend+du+rayon+et+de+la+hauteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Volume : V = (1/3) π r² h",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27un%20c%C3%B4ne%20Volume%20%3A%20V%20%3D%20%281/3%29%20%CF%80%20r%C2%B2%20h%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Aire latérale : π r l",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27un%20c%C3%B4ne%20Aire%20lat%C3%A9rale%20%3A%20%CF%80%20r%20l%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "La base est un disque. Par exemple, r = 3 cm, h = 9 cm → V = 27π cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 3 cm, h = 9 cm → V = 27π cm³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (cône) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/2FH1GM2Nuk4",
        lang: "fr"
      },
      methode: {
        title: "Calculer le volume d'un cône",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kMssaNRPXz8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'un cône permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'un cône peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'un cône aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20c%C3%B4ne%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cône appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20c%C3%B4ne%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cône mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27un%20c%C3%B4ne%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'un cône mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:66": {
    title: "Volume d'une sphère",
    definition: "Le volume d’une sphère dépend uniquement de son rayon. Il est donné par la formule V = (4/3)πr³. La sphère est un solide parfaitement symétrique.",
    definition_axiomatique: {
        cadre: "On veut mesurer les volumes des solides de l'espace ; on connaît les volumes du cylindre et du cône.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            },
            {
                nom: "V4 — Principe de Cavalieri",
                enonce: "Deux solides compris entre deux plans parallèles, dont les sections par tout plan parallèle à ceux-là ont la même aire, ont le même volume."
            }
        ],
        conclusion: "Considérons une sphère de rayon R et, à la même hauteur, le solide obtenu en retirant deux cônes à un cylindre de rayon R et de hauteur 2R. À la hauteur z (mesurée depuis le centre), la section de la sphère est un disque d'aire π(R² − z²) et celle du solide est une couronne d'aire πR² − πz² : mêmes sections, donc même volume (V4). Ce volume vaut 2πR³ − 2 × ⅓πR³ = 4πR³/3.",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. V = (4/3)πr³.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+V+%3D+%284%2F3%29%CF%80r%C2%B3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dépend uniquement du rayon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+D%C3%A9pend+uniquement+du+rayon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Solide parfaitement symétrique.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Solide+parfaitement+sym%C3%A9trique.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Volume : (4/3) π r³",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27une%20sph%C3%A8re%20Volume%20%3A%20%284/3%29%20%CF%80%20r%C2%B3%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Aire : 4π r²",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Volume%20d%27une%20sph%C3%A8re%20Aire%20%3A%204%CF%80%20r%C2%B2%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "La sphère est un solide parfaitement symétrique. Par exemple, r = 2 cm → V = (32/3)π cm³ illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 2 cm → V = (32/3)π cm³"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (boule) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Wsv2pp5Ytx8",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire et le volume d'une boule",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YQF7CBY-uEk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Volume d'une sphère permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Volume d'une sphère peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Volume d'une sphère aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20sph%C3%A8re%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une sphère appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20sph%C3%A8re%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une sphère mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Volume%20d%27une%20sph%C3%A8re%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volume d'une sphère mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:67": {
    title: "Aire d'une sphère",
    definition: "L'aire d'une sphère est la mesure de sa surface extérieure, c'est-à-dire l'enveloppe qui délimite la boule. Elle ne dépend que du rayon de la sphère.",
    definition_axiomatique: {
        cadre: "On veut mesurer l'aire d'une surface fermée de l'espace, comme une sphère ; on connaît le volume d'une boule.",
        axiomes: [
            {
                nom: "V1 — Unité et positivité",
                enonce: "Le volume d'un solide est un réel ≥ 0, et le volume du cube d'arête 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "V2 — Invariance par isométrie",
                enonce: "Deux solides superposables ont le même volume."
            },
            {
                nom: "V3 — Additivité",
                enonce: "Si un solide est réunion de deux solides qui n'ont en commun que des points de leur bord, son volume est la somme des deux volumes."
            },
            {
                nom: "S1 — Aire d'une surface",
                enonce: "L'aire d'une surface fermée est la limite, quand ε tend vers 0, du volume de la couche d'épaisseur ε située autour de la surface divisé par ε."
            }
        ],
        conclusion: "La couche entre la sphère de rayon R et la sphère de rayon R + ε a pour volume 4π[(R + ε)³ − R³]/3 = 4π(R²ε + Rε² + ε³/3). En divisant par ε et en faisant tendre ε vers 0, on obtient l'aire de la sphère : 4πR².",
        sources: [
            {
                titre: "Perrin (Paris-Saclay) — Mesures des aires et des volumes",
                url: "https://imo.universite-paris-saclay.fr/~perrin/Conferences/IPRDP1.pdf"
            },
            {
                titre: "Palais de la découverte — Le principe de Cavalieri",
                url: "https://www.palais-decouverte.fr/fileadmin/fileadmin_Palais/fichiersContribs/au-programme/expos-permanentes/mathematiques/Bloc_Formes/pdf_revue/355_mar_avr_2k8.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = 4πr², où r est le rayon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+A+%3D+4%CF%80r%C2%B2%2C+o%C3%B9+r+est+le+rayon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L'aire est proportionnelle au carré du rayon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+L%27aire+est+proportionnelle+au+carr%C3%A9+du+rayon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Unité : cm², m², etc.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Unit%C3%A9+%3A+cm%C2%B2%2C+m%C2%B2%2C+etc.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "Elle ne dépend que du rayon de la sphère. Par exemple, r = 3 cm → A = 4π × 9 = 36π cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 3 cm → A = 4π × 9 = 36π cm²"
      },
      {
        terme: "Exemple 2",
        definition: "r = 5 cm → A = 4π × 25 = 100π cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (boule) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Wsv2pp5Ytx8",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire et le volume d'une boule",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YQF7CBY-uEk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire d'une sphère permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Aire d'une sphère peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Aire d'une sphère aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20d%27une%20sph%C3%A8re%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'une sphère appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27une%20sph%C3%A8re%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'une sphère mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20d%27une%20sph%C3%A8re%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Aire d'une sphère mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:68": {
    title: "Aire latérale d'un cylindre",
    definition: "L'aire latérale d'un cylindre est l'aire de sa surface courbe, sans compter les deux disques qui forment ses bases. Elle correspond à l'aire du rectangle que l'on obtient en dépliant cette surface.",
    definition_axiomatique: {
        cadre: "On veut mesurer l'aire d'une surface de l'espace, ici la surface latérale d'un cylindre de rayon r et de hauteur h.",
        axiomes: [
            {
                nom: "S1 — Additivité",
                enonce: "L'aire d'une surface réunion de deux surfaces qui n'ont en commun qu'un bord est la somme des aires."
            },
            {
                nom: "S2 — Développement",
                enonce: "Une surface qui se déroule à plat sans déchirure ni étirement (surface développable) a la même aire que son développement."
            },
            {
                nom: "S3 — Rectangle",
                enonce: "L'aire d'un rectangle de côtés a et b vaut a × b."
            }
        ],
        conclusion: "La surface latérale du cylindre se déroule en un rectangle dont un côté est la hauteur h et l'autre le périmètre du cercle de base 2πr. Son aire vaut donc 2πr × h (S2, S3)."
    },
    formulas: [
      {
        text: "1. A = 2πr × h, où r est le rayon et h la hauteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+A+%3D+2%CF%80r+%C3%97+h%2C+o%C3%B9+r+est+le+rayon+et+h+la+hauteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Le rectangle déplié a pour longueur 2πr (le périmètre du cercle de base) et pour largeur h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+Le+rectangle+d%C3%A9pli%C3%A9+a+pour+longueur+2%CF%80r+%28le+p%C3%A9rim%C3%A8tre+du+cercle+de+base%29+et+pour+largeur+h.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Unité : cm², m², etc.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Unit%C3%A9+%3A+cm%C2%B2%2C+m%C2%B2%2C+etc.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "Elle correspond à l'aire du rectangle que l'on obtient en dépliant cette surface. Par exemple, r = 3 cm, h = 10 cm → A = 2π × 3 × 10 = 60π cm² illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "r = 3 cm, h = 10 cm → A = 2π × 3 × 10 = 60π cm²"
      },
      {
        terme: "Exemple 2",
        definition: "r = 2 cm, h = 5 cm → A = 2π × 2 × 5 = 20π cm²"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Solides et volumes (aire latérale cylindre) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/TCblUwPAnRc",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire latérale d'un cylindre (non exigible)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/5OQSceKYfns",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Aire latérale d'un cylindre permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Aire latérale d'un cylindre peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Aire latérale d'un cylindre aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20lat%C3%A9rale%20d%27un%20cylindre%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Aire latérale d'un cylindre appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20lat%C3%A9rale%20d%27un%20cylindre%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Aire latérale d'un cylindre mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Aire%20lat%C3%A9rale%20d%27un%20cylindre%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Aire latérale d'un cylindre mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:69": {
    title: "Sections de solides",
    definition: "Une section de solide est la figure obtenue en coupant un solide par un plan. Les sections permettent de mieux comprendre la structure des solides et leurs propriétés.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace euclidien de dimension 3 : points, droites, plans, distance.",
        axiomes: [
            {
                nom: "I1 — Intersection de plans",
                enonce: "Deux plans distincts sont disjoints ou se coupent selon une droite."
            },
            {
                nom: "I2 — Pythagore",
                enonce: "La distance vérifie le théorème de Pythagore dans tout triangle rectangle."
            },
            {
                nom: "I3 — Parallélisme",
                enonce: "Un plan parallèle à la base d'un cône ou d'une pyramide le coupe selon une figure semblable à la base (Thalès)."
            }
        ],
        conclusion: "La section d'un solide par un plan P est l'intersection du solide et de P. Pour une sphère de rayon R et un plan à la distance d du centre, c'est un cercle de rayon √(R² − d²) si d < R (I2), un point si d = R, et rien si d > R. Un plan parallèle à une face d'un cube ou d'un pavé le coupe selon un rectangle de même dimensions ; une section d'un cône parallèle à la base est un disque de rayon proportionnel à la distance au sommet."
    },
    formulas: [
      {
        text: "1. Dépend du solide et du plan de coupe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+D%C3%A9pend+du+solide+et+du+plan+de+coupe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Peut être un cercle, un rectangle, un triangle, etc.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+Peut+%C3%AAtre+un+cercle%2C+un+rectangle%2C+un+triangle%2C+etc.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Utilisée pour analyser des volumes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+Utilis%C3%A9e+pour+analyser+des+volumes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "Les sections permettent de mieux comprendre la structure des solides et leurs propriétés. Par exemple, La section d’un cylindre par un plan parallèle à son axe est un rectangle illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La section d’un cylindre par un plan parallèle à son axe est un rectangle"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (sections de solides) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Wsv2pp5Ytx8",
        lang: "fr"
      },
      methode: {
        title: "Dessiner en vraie grandeur la section d'un solide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/hNj4ySy-NaU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Sections de solides permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Sections de solides peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Sections de solides aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Sections%20de%20solides%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Sections de solides appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Sections%20de%20solides%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Sections de solides mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Sections%20de%20solides%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Sections de solides mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:70": {
    title: "Pythagore dans l'espace",
    definition: "Le théorème de Pythagore dans l'espace étend le théorème de Pythagore du plan à des situations en trois dimensions : on l'applique successivement dans deux triangles rectangles bien choisis pour calculer, par exemple, la diagonale d'un pavé droit.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace euclidien de dimension 3 : points, droites, plans, distance.",
        axiomes: [
            {
                nom: "P1 — Pythagore dans le plan",
                enonce: "Dans un triangle rectangle, le carré de l'hypoténuse est la somme des carrés des deux autres côtés."
            },
            {
                nom: "P2 — Perpendicularité",
                enonce: "Une droite perpendiculaire à un plan est perpendiculaire à toutes les droites de ce plan."
            }
        ],
        conclusion: "Dans un pavé droit de dimensions a, b, c, la diagonale de la base a pour longueur d₁ avec d₁² = a² + b² (P1) ; l'arête verticale est perpendiculaire à la base (P2), donc la diagonale d du pavé vérifie d² = d₁² + c² = a² + b² + c². Dans un repère orthonormé, la distance de deux points est √(Δx² + Δy² + Δz²)."
    },
    formulas: [
      {
        text: "1. Diagonale d'un pavé droit : d² = L² + l² + h².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+1.+Diagonale+d%27un+pav%C3%A9+droit+%3A+d%C2%B2+%3D+L%C2%B2+%2B+l%C2%B2+%2B+h%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. On applique Pythagore une première fois dans la base, puis une seconde fois avec la hauteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+2.+On+applique+Pythagore+une+premi%C3%A8re+fois+dans+la+base%2C+puis+une+seconde+fois+avec+la+hauteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La méthode se généralise à tout solide décomposable en triangles rectangles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+3%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+espace+3.+La+m%C3%A9thode+se+g%C3%A9n%C3%A9ralise+%C3%A0+tout+solide+d%C3%A9composable+en+triangles+rectangles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la figure aux grandeurs mesurables du solide (longueurs, aires, volumes) ; elles permettent de passer d'une description géométrique à un calcul numérique.",
    details: "On l'applique successivement dans deux triangles rectangles bien choisis pour calculer, par exemple, la diagonale d'un pavé droit. Par exemple, L = 3 cm, l = 4 cm, h = 12 cm → d² = 9 + 16 + 144 = 169 → d = 13 cm illustre concrètement cette notion, telle qu'elle est abordée en classe de 3e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "L = 3 cm, l = 4 cm, h = 12 cm → d² = 9 + 16 + 144 = 169 → d = 13 cm"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Espace (Pythagore dans l'espace) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Wsv2pp5Ytx8",
        lang: "fr"
      },
      methode: {
        title: "Calculer une longueur dans un solide",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NY75MafJJ3Y",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Pythagore dans l'espace permet de calculer des volumes ou des capacités réelles (réservoirs, emballages)"
      },
      {
        icon: "computer",
        text: "Pythagore dans l'espace peut être utilisé pour modéliser un solide en trois dimensions dans un logiciel de conception"
      },
      {
        icon: "finance",
        text: "Pythagore dans l'espace aide à estimer des besoins en matériaux ou des coûts de fabrication"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Pythagore%20dans%20l%27espace%20appliqu%C3%A9%20%C3%A0%20des%20solides%20compos%C3%A9s%20ou%20irr%C3%A9guliers\" target=\"_blank\" rel=\"noopener noreferrer\">Pythagore dans l'espace appliqué à des solides composés ou irréguliers</a>",
      "<a href=\"https://www.google.com/search?q=Pythagore%20dans%20l%27espace%20mis%20en%20relation%20avec%20les%20sections%20planes%20de%20solides\" target=\"_blank\" rel=\"noopener noreferrer\">Pythagore dans l'espace mis en relation avec les sections planes de solides</a>",
      "<a href=\"https://www.google.com/search?q=Pythagore%20dans%20l%27espace%20mobilis%C3%A9%20dans%20des%20situations%20concr%C3%A8tes%20%28architecture%2C%20industrie%29\" target=\"_blank\" rel=\"noopener noreferrer\">Pythagore dans l'espace mobilisé dans des situations concrètes (architecture, industrie)</a>"
    ]
  },
  "ecole:1151": {
    title: "Symétrie axiale",
    definition: "La symétrie axiale est une transformation géométrique qui reflète une figure par rapport à une droite appelée axe de symétrie. La figure obtenue est l’image miroir de la figure initiale.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne une droite (d).",
        axiomes: [
            {
                nom: "S1 — Points de l'axe",
                enonce: "Tout point M de (d) est invariant : s(M) = M."
            },
            {
                nom: "S2 — Médiatrice",
                enonce: "Si M n'est pas sur (d), alors (d) est la médiatrice du segment [M s(M)]."
            }
        ],
        conclusion: "La symétrie axiale d'axe (d) est l'unique application s du plan dans lui-même qui vérifie S1 et S2 : pour M hors de (d), s(M) est le point symétrique de M par rapport à (d). Elle conserve les distances et les angles, échange les deux demi-plans bordés par (d), et s ∘ s = id."
    },
    formulas: [
      {
        text: "1. Les points et leurs images sont à égale distance de l’axe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Les+points+et+leurs+images+sont+%C3%A0+%C3%A9gale+distance+de+l%E2%80%99axe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L’axe est la médiatrice des segments reliant un point à son image.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+L%E2%80%99axe+est+la+m%C3%A9diatrice+des+segments+reliant+un+point+%C3%A0+son+image.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les longueurs et les angles sont conservés.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Les+longueurs+et+les+angles+sont+conserv%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Symétrie axiale",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Sym%C3%A9trie%20axiale%20Sym%C3%A9trie%20axiale%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la transformation impose sur les longueurs, les angles ou les figures ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "La figure obtenue est l’image miroir de la figure initiale. Par exemple, Un triangle symétrique par rapport à une droite garde la même forme mais est inversé illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Un triangle symétrique par rapport à une droite garde la même forme mais est inversé"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Symétrie axiale : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ydDOYEfWsoQ",
        lang: "fr"
      },
      methode: {
        title: "Construire le symétrique d'une figure",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/sRcgsiPeIq4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Symétrie axiale intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Symétrie axiale peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Symétrie axiale aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20axiale%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie axiale dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20axiale%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie axiale mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20axiale%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie axiale appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:1152": {
    title: "Symétrie centrale",
    definition: "La symétrie centrale est une transformation géométrique qui envoie chaque point sur un autre point tel que le centre de symétrie est le milieu du segment reliant ces deux points.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un point O.",
        axiomes: [
            {
                nom: "C1 — Centre",
                enonce: "s(O) = O."
            },
            {
                nom: "C2 — Milieu",
                enonce: "Pour tout point M distinct de O, O est le milieu du segment [M s(M)]."
            }
        ],
        conclusion: "La symétrie centrale de centre O est l'unique application vérifiant C1 et C2 ; en termes de vecteurs, Os(M) = −OM. Elle conserve les distances et les angles, vérifie s ∘ s = id et transforme toute droite en une droite parallèle."
    },
    formulas: [
      {
        text: "1. Le centre est le milieu du segment [AA’].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Le+centre+est+le+milieu+du+segment+%5BAA%E2%80%99%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les longueurs sont conservées.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Les+longueurs+sont+conserv%C3%A9es.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La figure est retournée de 180°.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+6%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+La+figure+est+retourn%C3%A9e+de+180%C2%B0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Symétrie centrale",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Sym%C3%A9trie%20centrale%20Sym%C3%A9trie%20centrale%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la transformation impose sur les longueurs, les angles ou les figures ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "La symétrie centrale est une transformation géométrique qui envoie chaque point sur un autre point tel que le centre de symétrie est le milieu du segment reliant ces deux points. Par exemple, L’image d’un point A par une symétrie centrale de centre O est le point A’ tel que O est le milieu de [AA’] illustre concrètement cette notion, telle qu'elle est abordée en classe de 6e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "L’image d’un point A par une symétrie centrale de centre O est le point A’ tel que O est le milieu de [AA’]"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Symétries (symétrie centrale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-ZWAUCXmXB4",
        lang: "fr"
      },
      methode: {
        title: "Construire l'image d'une figure par symétrie centrale (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gQZIWxzOfaE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Symétrie centrale intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Symétrie centrale peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Symétrie centrale aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20centrale%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie centrale dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20centrale%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie centrale mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20centrale%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie centrale appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:1153": {
    title: "Translation",
    definition: "Une translation est un déplacement qui conserve la forme, la taille et l’orientation d’une figure. Elle est définie par un vecteur indiquant la direction, le sens et la longueur du déplacement.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne deux points A et A' ; le vecteur AA' fixe une direction, un sens et une longueur.",
        axiomes: [
            {
                nom: "T1 — Donnée",
                enonce: "Le vecteur de la translation est AA', où A et A' sont deux points fixés."
            },
            {
                nom: "T2 — Image d'un point",
                enonce: "M' est l'image de M si AA'M'M est un parallélogramme (éventuellement aplati, si M, A, A', M' sont alignés)."
            }
        ],
        conclusion: "La translation de vecteur AA' est l'unique application qui vérifie T1 et T2 ; en termes de vecteurs, MM' = AA'. Elle conserve les distances, les angles, l'alignement et le parallélisme, et transforme toute droite en une droite parallèle ; la composée de deux translations est la translation de vecteur la somme des vecteurs."
    },
    formulas: [
      {
        text: "1. Conserve les longueurs et les angles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Conserve+les+longueurs+et+les+angles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Déplacement parallèle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+D%C3%A9placement+parall%C3%A8le.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Chaque point se déplace du même vecteur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+5%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Chaque+point+se+d%C3%A9place+du+m%C3%AAme+vecteur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la transformation impose sur les longueurs, les angles ou les figures ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Elle est définie par un vecteur indiquant la direction, le sens et la longueur du déplacement. Par exemple, Déplacer un carré de 3 cm vers la droite correspond à une translation de vecteur (3,0) illustre concrètement cette notion, telle qu'elle est abordée en classe de 5e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Déplacer un carré de 3 cm vers la droite correspond à une translation de vecteur (3,0)"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Translation : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VDoKt5iFbm8",
        lang: "fr"
      },
      methode: {
        title: "Construire l'image d'une figure par une translation (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/chYUBSVEoFo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Translation intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Translation peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Translation aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Translation%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Translation dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Translation%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Translation mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Translation%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Translation appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:1154": {
    title: "Rotation",
    definition: "Une rotation est une transformation géométrique qui tourne une figure autour d’un point appelé centre, selon un angle donné. Les distances au centre sont conservées.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On se donne un point O (le centre) et un angle orienté θ.",
        axiomes: [
            {
                nom: "R1 — Centre invariant",
                enonce: "r(O) = O."
            },
            {
                nom: "R2 — Distance conservée",
                enonce: "Pour tout point M, OM' = OM."
            },
            {
                nom: "R3 — Angle",
                enonce: "Pour M ≠ O, l'angle orienté (OM, OM') mesure θ."
            }
        ],
        conclusion: "La rotation de centre O et d'angle θ est l'unique application vérifiant R1 à R3. Elle conserve les distances et les angles, la composée de deux rotations de même centre est la rotation dont l'angle est la somme des angles, et la rotation d'angle 180° est la symétrie centrale de centre O."
    },
    formulas: [
      {
        text: "1. Conserve les longueurs et les angles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Conserve+les+longueurs+et+les+angles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Définie par un centre et un angle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+D%C3%A9finie+par+un+centre+et+un+angle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Sens : horaire ou antihoraire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+Sens+%3A+horaire+ou+antihoraire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la transformation impose sur les longueurs, les angles ou les figures ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Les distances au centre sont conservées. Par exemple, Une rotation de 90° autour du point O transforme un segment horizontal en segment vertical illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Une rotation de 90° autour du point O transforme un segment horizontal en segment vertical"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Transformations (rotation) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/4hACSwA1cn4",
        lang: "fr"
      },
      methode: {
        title: "Construire l'image d'une figure par une rotation",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/_lr-qTQVtCg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Rotation intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Rotation peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Rotation aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Rotation%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Rotation dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Rotation%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Rotation mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Rotation%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Rotation appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:1155": {
    title: "Construction de figures",
    definition: "Construire une figure géométrique consiste à tracer une figure respectant des contraintes précises : longueurs, angles, parallélisme, perpendiculaire, etc. Cela nécessite l’utilisation d’outils comme la règle, l’équerre et le compas.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On construit à la règle non graduée et au compas, comme dans les Éléments d'Euclide.",
        axiomes: [
            {
                nom: "E1 — Règle",
                enonce: "Par deux points distincts, on peut tracer la droite (ou le segment) qui les joint."
            },
            {
                nom: "E2 — Compas",
                enonce: "Avec un centre et un point, on peut tracer le cercle de centre ce centre passant par ce point."
            },
            {
                nom: "E3 — Intersections",
                enonce: "Les nouveaux points construits sont les intersections des droites et des cercles déjà tracés."
            }
        ],
        conclusion: "Une figure est constructible si elle s'obtient par un nombre fini d'étapes E1 à E3. On construit ainsi la médiatrice d'un segment (deux cercles de même rayon), la bissectrice d'un angle, la perpendiculaire ou la parallèle à une droite, et un triangle de côtés donnés lorsque l'inégalité triangulaire est vérifiée."
    },
    formulas: [
      {
        text: "1. Respect des contraintes données.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+1.+Respect+des+contraintes+donn%C3%A9es.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Utilisation d’outils adaptés.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+2.+Utilisation+d%E2%80%99outils+adapt%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Vérification des propriétés géométriques.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+4%C3%A8me+%28coll%C3%A8ge%29+g%C3%A9om%C3%A9trie+plane+3.+V%C3%A9rification+des+propri%C3%A9t%C3%A9s+g%C3%A9om%C3%A9triques.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés traduisent en langage géométrique ce que la transformation impose sur les longueurs, les angles ou les figures ; elles servent de base aux justifications rédigées dans les exercices.",
    details: "Cela nécessite l’utilisation d’outils comme la règle, l’équerre et le compas. Par exemple, Construire un triangle ABC avec AB = 5 cm, AC = 4 cm et angle A = 60° illustre concrètement cette notion, telle qu'elle est abordée en classe de 4e.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Construire un triangle ABC avec AB = 5 cm, AC = 4 cm et angle A = 60°"
      }
    ],
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Triangles (constructions) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/z0olRGs7kPk",
        lang: "fr"
      },
      methode: {
        title: "Rédiger un programme de construction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zT3CJ5RUhtw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Construction de figures intervient dans la conception d'un plan ou d'un schéma technique"
      },
      {
        icon: "computer",
        text: "Construction de figures peut être vérifié ou généré par ordinateur pour construire une figure"
      },
      {
        icon: "finance",
        text: "Construction de figures aide à optimiser un agencement ou une surface (architecture, urbanisme)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construction%20de%20figures%20dans%20des%20figures%20plus%20complexes%20ou%20compos%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Construction de figures dans des figures plus complexes ou composées</a>",
      "<a href=\"https://www.google.com/search?q=Construction%20de%20figures%20mis%20en%20relation%20avec%20les%20autres%20transformations%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Construction de figures mis en relation avec les autres transformations géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Construction%20de%20figures%20appliqu%C3%A9%20%C3%A0%20des%20probl%C3%A8mes%20de%20construction%20ou%20de%20mesure\" target=\"_blank\" rel=\"noopener noreferrer\">Construction de figures appliqué à des problèmes de construction ou de mesure</a>"
    ]
  },
  "ecole:1223": {
    title: "Distance et milieu dans un repère",
    definition: "Dans un repère orthonormé, on calcule la distance entre deux points et les coordonnées du milieu d'un segment à partir des coordonnées de ses extrémités.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé (O ; I, J) : les points sont les couples de coordonnées (x ; y).",
        axiomes: [
            {
                nom: "D1 — Distance",
                enonce: "La distance de A(x_A ; y_A) à B(x_B ; y_B) vérifie AB² = (x_B − x_A)² + (y_B − y_A)² (théorème de Pythagore)."
            },
            {
                nom: "D2 — Milieu",
                enonce: "I est le milieu de [AB] si I ∈ [AB] et IA = IB."
            },
            {
                nom: "D3 — Vecteurs",
                enonce: "Les coordonnées de AB sont (x_B − x_A ; y_B − y_A)."
            }
        ],
        conclusion: "La distance est AB = √((x_B − x_A)² + (y_B − y_A)²). Le milieu de [AB] est le point I de coordonnées ((x_A + x_B)/2 ; (y_A + y_B)/2), car il vérifie AI = IB avec I sur [AB] et cette solution est unique."
    },
    formulas: [
      {
        text: "1. Distance : AB = √((xB−xA)² + (yB−yA)²)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20g%C3%A9om%C3%A9trie%20rep%C3%A8re%20Distance%20%3A%20AB%20%3D%20%E2%88%9A%28%28xB%E2%88%92xA%29%C2%B2%20%2B%20%28yB%E2%88%92yA%29%C2%B2%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Milieu de [AB] : M = ((xA+xB)/2 ; (yA+yB)/2)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20g%C3%A9om%C3%A9trie%20rep%C3%A8re%20Milieu%20de%20%5BAB%5D%20%3A%20M%20%3D%20%28%28xA%2BxB%29/2%20%3B%20%28yA%2ByB%29/2%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "La formule de distance découle du théorème de Pythagore appliqué au triangle rectangle formé par les écarts en x et en y ; celle du milieu vient de la moyenne des coordonnées.",
    details: "Ces deux formules permettent de travailler sur des figures placées dans un repère sans avoir à les tracer précisément. Cette notion s'appuie sur : le théorème de Pythagore. Par exemple, pour A(1;2) et B(4;6), AB = √((4−1)²+(6−2)²) = √(9+16) = √25 = 5, et le milieu de [AB] est (2,5 ; 4).",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(0;0) et B(3;4) : AB = √(9+16) = 5, milieu = (1,5 ; 2)."
      },
      {
        terme: "Exemple 2",
        definition: "Vérifier qu'un point C est bien le milieu de [AB] en comparant ses coordonnées à la moyenne de celles de A et B."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Distance et milieu dans un repère",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Distance%20et%20milieu%20dans%20un%20rep%C3%A8re%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Distance et milieu dans un repère",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Distance%20et%20milieu%20dans%20un%20rep%C3%A8re%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "ruler",
        text: "Calculer une longueur sans tracer la figure"
      },
      {
        icon: "target",
        text: "Vérifier qu'un point est le milieu d'un segment"
      },
      {
        icon: "map",
        text: "Repérage sur un plan ou une carte quadrillée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20formule%20de%20distance%20%C3%A0%20partir%20du%20th%C3%A9or%C3%A8me%20de%20Pythagore\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la formule de distance à partir du théorème de Pythagore</a>",
      "<a href=\"https://www.google.com/search?q=Coordonn%C3%A9es%20du%20centre%20de%20gravit%C3%A9%20d%27un%20triangle\" target=\"_blank\" rel=\"noopener noreferrer\">Coordonnées du centre de gravité d'un triangle</a>"
    ]
  },
  "ecole:1224": {
    title: "Formule de Héron",
    definition: "La formule de Héron calcule l'aire d'un triangle à partir des longueurs de ses trois côtés, sans avoir besoin de connaître sa hauteur.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec les axiomes de l'aire et le théorème de Pythagore ; un triangle a des côtés a, b, c et un demi-périmètre p = (a + b + c)/2.",
        axiomes: [
            {
                nom: "A1 — Unité et positivité",
                enonce: "L'aire d'une figure est un réel ≥ 0, et l'aire du carré de côté 1 (l'unité de longueur) vaut 1."
            },
            {
                nom: "A2 — Invariance par isométrie",
                enonce: "Deux figures superposables (l'une est l'image de l'autre par une translation, une rotation ou une symétrie) ont la même aire."
            },
            {
                nom: "A3 — Additivité",
                enonce: "Si une figure est réunion de deux figures qui n'ont en commun que des points de leur bord, son aire est la somme des deux aires."
            }
        ],
        conclusion: "L'aire S d'un triangle est ½ × base × hauteur. En calculant la hauteur h issue du sommet A avec Pythagore dans les deux triangles rectangles que la hauteur détermine, on obtient 16S² = 4b²c² − (b² + c² − a²)², qui se factorise en 16 p(p − a)(p − b)(p − c). Donc S = √(p(p − a)(p − b)(p − c)) : c'est la formule de Héron.",
        sources: [
            {
                titre: "Claudon (Rennes 1) — Approche axiomatique de l'aire des parties planes",
                url: "https://perso.univ-rennes1.fr/benoit.claudon/cours/geometrie.pdf"
            },
            {
                titre: "IREM Grenoble, Petit x n° 117 — L'aire comme fonction mesure",
                url: "https://irem.univ-grenoble-alpes.fr/medias/fichier/117x4_1685441246692-pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. A = √(p(p−a)(p−b)(p−c)), avec p = (a+b+c)/2 le demi-périmètre",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20g%C3%A9om%C3%A9trie%20triangle%20A%20%3D%20%E2%88%9A%28p%28p%E2%88%92a%29%28p%E2%88%92b%29%28p%E2%88%92c%29%29%2C%20avec%20p%20%3D%20%28a%2Bb%2Bc%29/2%20le%20demi-p%C3%A9rim%C3%A8tre%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Utile quand on connaît les trois côtés d'un triangle mais pas sa hauteur, cette formule évite d'avoir à la calculer séparément.",
    details: "La formule de Héron donne l'aire d'un triangle uniquement à partir de ses trois côtés. Cette notion s'appuie sur : le demi-périmètre p et l'aire habituelle (base×hauteur)/2. Par exemple, pour un triangle de côtés 3, 4 et 5, p=6, donc A=√(6×3×2×1)=√36=6.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Triangle 3-4-5 (rectangle) : p=6, A=√(6×3×2×1)=6, qui correspond bien à (3×4)/2=6."
      },
      {
        terme: "Exemple 2",
        definition: "Triangle de côtés 5, 6, 7 : p=9, A=√(9×4×3×2)=√216≈14,7."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Formule de Héron",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Formule%20de%20H%C3%A9ron%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Formule de Héron",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Formule%20de%20H%C3%A9ron%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "ruler",
        text: "Calculer une aire sans connaître la hauteur"
      },
      {
        icon: "map",
        text: "Arpentage et calcul de surfaces de terrains triangulaires"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20formule%20de%20H%C3%A9ron\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la formule de Héron</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20la%20formule%20de%20H%C3%A9ron%20et%20la%20formule%20%28base%C3%97hauteur%29/2\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre la formule de Héron et la formule (base×hauteur)/2</a>"
    ]
  },
  "ecole:1225": {
    title: "Somme des angles d'un polygone",
    definition: "La somme des mesures des angles intérieurs d'un polygone à n côtés vaut (n−2)×180°.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On utilise que la somme des angles d'un triangle vaut 180°.",
        axiomes: [
            {
                nom: "A1 — Triangle",
                enonce: "Dans tout triangle, la somme des angles vaut 180°."
            },
            {
                nom: "A2 — Triangulation",
                enonce: "Un polygone convexe à n côtés est partagé en n − 2 triangles par les diagonales issues d'un même sommet."
            },
            {
                nom: "A3 — Additivité des angles",
                enonce: "Les angles du polygone sont les sommes des angles des triangles."
            }
        ],
        conclusion: "La somme des angles d'un polygone convexe à n côtés est (n − 2) × 180°. Un polygone régulier à n côtés a donc des angles égaux, chacun de mesure (n − 2) × 180°/n.",
        sources: [
            {
                titre: "Futura — Qu'est-ce que le postulat d'Euclide ?",
                url: "https://www.futura-sciences.com/sciences/questions-reponses/mathematiques-mathematiques-quest-ce-postulat-euclide-8478/"
            },
            {
                titre: "normalesup.org — Géométrie : postulats d'Euclide, angles alternes-internes, somme des angles d'un triangle",
                url: "https://www.normalesup.org/~mabboud/rennes_et_maths/geometrie.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Somme des angles intérieurs = (n − 2) × 180°",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%204e%20g%C3%A9om%C3%A9trie%20polygone%20Somme%20des%20angles%20int%C3%A9rieurs%20%3D%20%28n%20%E2%88%92%202%29%20%C3%97%20180%C2%B0%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Un polygone à n côtés peut être découpé en (n−2) triangles depuis un même sommet, et chaque triangle apporte 180° à la somme totale.",
    details: "Cette formule généralise la somme des angles d'un triangle (180°) et d'un quadrilatère (360°) à un polygone quelconque. Cette notion s'appuie sur : la somme des angles d'un triangle. Par exemple, pour un pentagone (n=5), la somme vaut (5−2)×180°=540°.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Quadrilatère (n=4) : (4−2)×180° = 360°."
      },
      {
        terme: "Exemple 2",
        definition: "Hexagone (n=6) : (6−2)×180° = 720°, soit 120° par angle s'il est régulier."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Somme des angles d'un polygone",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Somme%20des%20angles%20d%27un%20polygone%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Somme des angles d'un polygone",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Somme%20des%20angles%20d%27un%20polygone%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "shapes",
        text: "Vérifier la mesure d'un angle manquant dans un polygone"
      },
      {
        icon: "design",
        text: "Construction de pavages et de figures régulières"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20par%20d%C3%A9coupage%20en%20triangles%20depuis%20un%20sommet\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration par découpage en triangles depuis un sommet</a>",
      "<a href=\"https://www.google.com/search?q=Angle%20d%27un%20polygone%20r%C3%A9gulier%20%C3%A0%20n%20c%C3%B4t%C3%A9s\" target=\"_blank\" rel=\"noopener noreferrer\">Angle d'un polygone régulier à n côtés</a>"
    ]
  },
  "ecole:1226": {
    title: "Expériences aléatoires et événements",
    definition: "Une expérience aléatoire est une expérience dont le résultat (l'issue) ne peut pas être prédit à l'avance. L'ensemble de toutes les issues possibles s'appelle l'univers, noté Ω, et un événement est un ensemble d'issues.",
    definition_axiomatique: {
        cadre: "Une expérience aléatoire est une expérience dont le résultat ne peut pas être prévu avec certitude ; on note Ω l'ensemble de ses issues possibles.",
        axiomes: [
            {
                nom: "E1 — Univers",
                enonce: "Ω est un ensemble non vide dont les éléments sont les issues, deux à deux exclusives et qui épuisent tous les résultats possibles."
            },
            {
                nom: "E2 — Événements",
                enonce: "Un événement est une partie de Ω ; le complémentaire A̅, la réunion A ∪ B et l'intersection A ∩ B d'événements sont des événements."
            },
            {
                nom: "E3 — Événements particuliers",
                enonce: "Ω est l'événement certain, ∅ l'événement impossible ; deux événements sont incompatibles si A ∩ B = ∅."
            }
        ],
        conclusion: "Un événement élémentaire est une partie {ω} réduite à une issue. Ces axiomes font de l'ensemble des événements une algèbre de parties de Ω : c'est le cadre dans lequel une probabilité pourra être définie.",
        sources: [
            {
                titre: "Universalis — Calcul des probabilités : axiomatique",
                url: "https://www.universalis.fr/encyclopedie/calcul-des-probabilites/2-axiomatique/"
            },
            {
                titre: "ProofWiki — Kolmogorov axioms",
                url: "https://proofwiki.org/wiki/Axiom:Kolmogorov_Axioms"
            }
        ]
    },
    formulas: [
      {
        text: "1. Univers : Ω = ensemble de toutes les issues possibles",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20probabilit%C3%A9s%20Univers%20%3A%20%CE%A9%20%3D%20ensemble%20de%20toutes%20les%20issues%20possibles%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Événement : A est une partie de Ω (A ⊂ Ω)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20probabilit%C3%A9s%20%C3%89v%C3%A9nement%20%3A%20A%20est%20une%20partie%20de%20%CE%A9%20%28A%20%E2%8A%82%20%CE%A9%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette notion pose le cadre de toute étude de probabilités : avant de calculer une probabilité, il faut identifier précisément l'univers et l'événement concerné.",
    details: "L'univers Ω recense toutes les issues possibles d'une expérience, et un événement en est une partie. Cette notion s'appuie sur : la notion d'ensemble. Par exemple, pour un lancer de dé à 6 faces, Ω = {1,2,3,4,5,6}, et l'événement « obtenir un nombre pair » est A = {2,4,6}.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer d'une pièce : Ω = {Pile, Face}."
      },
      {
        terme: "Exemple 2",
        definition: "Tirage d'une carte dans un jeu de 32 cartes : Ω contient les 32 cartes, l'événement « tirer un roi » contient 4 issues."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Expériences aléatoires et événements",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Exp%C3%A9riences%20al%C3%A9atoires%20et%20%C3%A9v%C3%A9nements%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Expériences aléatoires et événements",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Exp%C3%A9riences%20al%C3%A9atoires%20et%20%C3%A9v%C3%A9nements%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "dice",
        text: "Modéliser un jeu de dés, de cartes ou de pièces"
      },
      {
        icon: "chart",
        text: "Préparer un calcul de probabilité"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9nombrement%20des%20issues%20d%27une%20exp%C3%A9rience%20%C3%A0%20plusieurs%20%C3%A9tapes\" target=\"_blank\" rel=\"noopener noreferrer\">Dénombrement des issues d'une expérience à plusieurs étapes</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89v%C3%A9nement%20contraire%20et%20%C3%A9v%C3%A9nements%20incompatibles\" target=\"_blank\" rel=\"noopener noreferrer\">Événement contraire et événements incompatibles</a>"
    ]
  },
  "ecole:1227": {
    title: "Probabilité d'un événement",
    definition: "Dans une situation d'équiprobabilité, la probabilité d'un événement A est le rapport entre le nombre d'issues favorables à A et le nombre total d'issues possibles.",
    definition_axiomatique: {
        cadre: "Une expérience aléatoire a pour univers Ω (fini) ; on cherche à mesurer la vraisemblance des événements par un nombre P(A).",
        axiomes: [
            {
                nom: "P1 — Positivité",
                enonce: "Pour tout événement A, P(A) ≥ 0."
            },
            {
                nom: "P2 — Normalisation",
                enonce: "P(Ω) = 1."
            },
            {
                nom: "P3 — Additivité",
                enonce: "Si A et B sont incompatibles (A ∩ B = ∅), alors P(A ∪ B) = P(A) + P(B)."
            }
        ],
        conclusion: "Une probabilité est une application P qui vérifie P1 à P3. On en déduit P(∅) = 0, P(A̅) = 1 − P(A) et 0 ≤ P(A) ≤ 1. Lorsque toutes les issues ont la même probabilité (équiprobabilité), P(A) = nombre d'issues de A / nombre d'issues de Ω.",
        sources: [
            {
                titre: "Universalis — Calcul des probabilités : axiomatique",
                url: "https://www.universalis.fr/encyclopedie/calcul-des-probabilites/2-axiomatique/"
            },
            {
                titre: "ProofWiki — Kolmogorov axioms",
                url: "https://proofwiki.org/wiki/Axiom:Kolmogorov_Axioms"
            }
        ]
    },
    formulas: [
      {
        text: "1. P(A) = (nombre d'issues de A) / (nombre d'issues de Ω), en situation d'équiprobabilité",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20probabilit%C3%A9s%20P%28A%29%20%3D%20%28nombre%20d%27issues%20de%20A%29%20/%20%28nombre%20d%27issues%20de%20%CE%A9%29%2C%20en%20situation%20d%27%C3%A9quiprobabilit%C3%A9%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. 0 ≤ P(A) ≤ 1",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20probabilit%C3%A9s%200%20%E2%89%A4%20P%28A%29%20%E2%89%A4%201%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "3. P(Ω) = 1",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20probabilit%C3%A9s%20P%28%CE%A9%29%20%3D%201%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "La probabilité mesure la chance qu'un événement se réalise : 0 signifie impossible, 1 signifie certain, et toute valeur intermédiaire indique un degré de chance.",
    details: "Cette formule ne s'applique que lorsque toutes les issues ont la même chance de se produire (équiprobabilité). Cette notion s'appuie sur : le dénombrement des issues. Par exemple, la probabilité d'obtenir un nombre pair en lançant un dé équilibré est P(A) = 3/6 = 1/2.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer un dé équilibré : P(« obtenir un 6 ») = 1/6."
      },
      {
        terme: "Exemple 2",
        definition: "Tirer une boule dans une urne de 10 boules dont 3 rouges : P(« tirer une rouge ») = 3/10."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Probabilité d'un événement",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Probabilit%C3%A9%20d%27un%20%C3%A9v%C3%A9nement%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Probabilité d'un événement",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Probabilit%C3%A9%20d%27un%20%C3%A9v%C3%A9nement%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "dice",
        text: "Jeux de hasard (dés, cartes, urnes)"
      },
      {
        icon: "chart",
        text: "Estimer une chance de réussite"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Probabilit%C3%A9%20de%20l%27%C3%A9v%C3%A9nement%20contraire%20%3A%20P%28non%20A%29%20%3D%201%20%E2%88%92%20P%28A%29\" target=\"_blank\" rel=\"noopener noreferrer\">Probabilité de l'événement contraire : P(non A) = 1 − P(A)</a>",
      "<a href=\"https://www.google.com/search?q=Passage%20%C3%A0%20des%20situations%20non%20%C3%A9quiprobables%20%28pond%C3%A9rations%29\" target=\"_blank\" rel=\"noopener noreferrer\">Passage à des situations non équiprobables (pondérations)</a>"
    ]
  },
  "ecole:1228": {
    title: "Inégalité a² + b² ≥ 2ab",
    definition: "Pour tous nombres réels a et b, la somme de leurs carrés est toujours supérieure ou égale au double de leur produit.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication.",
        axiomes: [
            {
                nom: "O1 — Carrés",
                enonce: "Pour tout réel x, x² ≥ 0."
            },
            {
                nom: "O2 — Addition",
                enonce: "Si u ≥ 0, alors u + w ≥ w."
            }
        ],
        conclusion: "Pour tous réels a et b, (a − b)² ≥ 0 (O1), c'est-à-dire a² − 2ab + b² ≥ 0, donc a² + b² ≥ 2ab (O2). L'égalité a lieu si et seulement si a = b."
    },
    formulas: [
      {
        text: "1. a² + b² ≥ 2ab, pour tous réels a et b",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20alg%C3%A8bre%20identit%C3%A9s%20a%C2%B2%20%2B%20b%C2%B2%20%E2%89%A5%202ab%2C%20pour%20tous%20r%C3%A9els%20a%20et%20b%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Égalité si et seulement si a = b",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%203e%20alg%C3%A8bre%20identit%C3%A9s%20%C3%89galit%C3%A9%20si%20et%20seulement%20si%20a%20%3D%20b%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette inégalité se démontre directement à partir de l'identité remarquable (a−b)² ≥ 0, puisqu'un carré est toujours positif ou nul.",
    details: "L'inégalité découle du développement de (a−b)² = a²−2ab+b², qui est toujours ≥ 0. Cette notion s'appuie sur : l'identité remarquable (a−b)² = a²−2ab+b². Par exemple, pour a=3 et b=5 : a²+b²=34 et 2ab=30, donc bien 34≥30.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "a=2, b=2 : a²+b²=8 et 2ab=8, l'égalité est atteinte car a=b."
      },
      {
        terme: "Exemple 2",
        definition: "a=1, b=10 : a²+b²=101 et 2ab=20, l'écart est grand car a et b sont très différents."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Inégalité a² + b² ≥ 2ab",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20a%C2%B2%20%2B%20b%C2%B2%20%E2%89%A5%202ab%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Inégalité a² + b² ≥ 2ab",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20a%C2%B2%20%2B%20b%C2%B2%20%E2%89%A5%202ab%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Point de départ des inégalités de moyennes (AM-GM) étudiées plus tard"
      },
      {
        icon: "research",
        text: "Techniques de majoration dans les exercices de recherche"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20%C3%A0%20partir%20de%20%28a%E2%88%92b%29%C2%B2%20%E2%89%A5%200\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration à partir de (a−b)² ≥ 0</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20l%27in%C3%A9galit%C3%A9%20arithm%C3%A9tico-g%C3%A9om%C3%A9trique%20%28AM-GM%29\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec l'inégalité arithmético-géométrique (AM-GM)</a>"
    ]
  }
});
