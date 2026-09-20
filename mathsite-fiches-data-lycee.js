// Version : 1.3
// Fiches détaillées — sous-ensemble "Lycée" du sommaire ΩPrépa (jsonMathsite.js).
// Fait partie d'un jeu de 7 fichiers de fiches (college, lycee, l1, l2, l3, m1, m2),
// chacun chargé via <script> pour fonctionner en local (file://). Chaque fichier fusionne
// ses fiches dans l'objet global window.MATHSITE_FICHES, partagé entre tous les fichiers ;
// l'ordre de chargement des 7 fichiers entre eux n'a pas d'importance.
//
// Clé = "<branche>:<id>", ici branche = "ecole".
// Plage d'ids couverte par ce fichier : ids 71-1222 (Seconde/Première/Terminale + additionnels).
// Nombre de fiches dans ce fichier : 147/147 (complet).
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
// Chaque fiche a désormais aussi une section "images" (placée avant "videos"), avec une
// phrase d'intro et une liste "items" de { file, alt } : "file" est le nom du fichier PNG
// (à placer à la racine du site, à côté d'index.html, comme pour window.NOTIONS.images), "alt"
// le texte alternatif. Association approximative par chapitre/matière (via window.NOTIONS dans
// notions-data.js) : plusieurs fiches d'un même chapitre partagent donc les mêmes images.
//
// Chaque fiche a désormais une section "videos" (placée avant "applications_list"), avec une
// phrase d'intro et deux vidéos en français (chaîne YouTube d'Yvan Monka / maths-et-tiques.fr) :
// - "cours" : la vidéo de cours du chapitre correspondant, la plus vue (point d'entrée principal
//   de la chaîne pour cette notion, par opposition aux vidéos de méthode plus spécifiques) ;
// - "methode" : une vidéo de méthode illustrant précisément l'application de la notion.
//
window.MATHSITE_FICHES = window.MATHSITE_FICHES || {};
Object.assign(window.MATHSITE_FICHES, {
  "ecole:71": {
    title: "Fonction carré",
    definition: "La fonction carré associe à tout réel x le nombre x². Elle est une fonction de base en analyse et sert de référence pour l’étude des variations et des courbes.",
    definition_axiomatique: {
        cadre: "On travaille dans l'ensemble ℝ des nombres réels, muni de l'addition, et on cherche les fonctions f de ℝ dans ℝ. On note 2f(x) = f(x) + f(x). La continuité est prise au sens habituel : la courbe se trace sans lever le crayon, sans saut.",
        axiomes: [
            {
                nom: "A1 — Identité du parallélogramme",
                enonce: "Pour tous réels x et y : f(x + y) + f(x − y) = 2f(x) + 2f(y)."
            },
            {
                nom: "A2 — Normalisation",
                enonce: "f(1) = 1."
            },
            {
                nom: "A3 — Continuité",
                enonce: "La fonction f est continue sur ℝ."
            }
        ],
        conclusion: "La fonction carré est l'unique fonction f : ℝ → ℝ qui vérifie A1, A2 et A3 ; on la note x ↦ x². Ces axiomes suffisent en effet à la déterminer : A1 avec x = y = 0 donne f(0) = 0 ; avec x = 0, elle donne f(−y) = f(y) (la fonction est paire) ; avec y = x, elle donne f(2x) = 4f(x) ; par récurrence, f(nx) = n² f(x) pour tout entier n ≥ 0 ; on en déduit f(p/q) = (p/q)² pour tout rationnel p/q, puis, par continuité, f(x) = x × x pour tout réel x.",
        remarque: "A1 n'utilise que l'addition : la multiplication n'est pas supposée connue, elle apparaît dans la conclusion. En pratique, on part directement de x² = x × x ; A1 devient alors l'identité (x + y)² + (x − y)² = 2x² + 2y², que l'on vérifie en développant. L'axiome A3 est indispensable : sans aucune hypothèse de régularité, A1 admet aussi des solutions pathologiques, de la forme f(x) = B(x, x) où B est une application biadditive symétrique, dont certaines ne sont pas du type c·x² ; en revanche, la continuité (ou même la simple mesurabilité) de f ramène toutes les solutions à c·x², et A2 fixe alors c = 1.",
        sources: [
            {
                titre: "Springer — Inner product spaces and quadratic functional equations (2021)",
                url: "https://advancesincontinuousanddiscretemodels.springeropen.com/articles/10.1186/s13662-021-03307-x"
            },
            {
                titre: "arXiv:1912.06299 — Functional equations and martingales, § 5",
                url: "https://arxiv.org/pdf/1912.06299"
            },
            {
                titre: "Friis & Stetkær — On the quadratic functional equation on groups (Publ. Math. Debrecen, 2006)",
                url: "https://publi.math.unideb.hu/paper/1111/download/10_5486_PMD_2006_3270.pdf"
            },
            {
                titre: "SchoolMouv — La fonction carré (définition usuelle)",
                url: "https://www.schoolmouv.fr/definitions/fonction-carre/definition"
            }
        ]
    },
    formulas: [
      {
        text: "1. f(x)=x².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+f%28x%29%3Dx%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Fonction paire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+Fonction+paire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Minimum en 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+Minimum+en+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Croissante sur [0,+∞).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+4.+Croissante+sur+%5B0%2C%2B%E2%88%9E%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre x² et 2x ; oublier que (-x)²=x².",
    details: "Elle est une fonction de base en analyse et sert de référence pour l’étude des variations et des courbes. Cette notion s'appuie sur : puissances et calculs de base. Par exemple, f(2)=4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(2)=4"
      },
      {
        terme: "Exemple 2",
        definition: "f(-3)=9"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions de référence : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7BlHXCcTEx8",
        lang: "fr"
      },
      methode: {
        title: "Comparer les images par la fonction carré",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-d3fE8d0YOc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étude de trajectoires"
      },
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Physique (énergie cinétique)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20f%285%29%20pour%20f%28x%29%3Dx%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer f(5) pour f(x)=x².</a>",
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20courbe%20de%20f%28x%29%3Dx%C2%B2%20sur%20%5B-3%2C3%5D.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la courbe de f(x)=x² sur [-3,3].</a>"
    ]
  },
  "ecole:72": {
    title: "Fonction inverse",
    definition: "La fonction inverse associe à tout réel non nul x le nombre 1/x. Elle possède deux branches et une asymptote verticale en 0.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps : axiomes de l'addition et de la multiplication, dont l'existence d'un inverse pour tout réel non nul.",
        axiomes: [
            {
                nom: "I1 — Inverse",
                enonce: "Pour tout réel x ≠ 0, il existe un réel y tel que x·y = 1."
            },
            {
                nom: "I2 — Unicité",
                enonce: "Cet inverse est unique : si xy = xy' = 1, alors y' = y'(xy) = (y'x)y = y."
            },
            {
                nom: "I3 — Zéro",
                enonce: "0·y = 0 pour tout y, donc 0 n'a pas d'inverse."
            }
        ],
        conclusion: "La fonction inverse associe à tout réel x ≠ 0 son inverse 1/x, l'unique réel y tel que xy = 1. Elle est définie sur ℝ* et vérifie (1/x)·x = 1, 1/(xy) = (1/x)(1/y) ; sa courbe est une hyperbole."
    },
    formulas: [
      {
        text: "1. f(x)=1/x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+f%28x%29%3D1%2Fx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Définie sur ℝ*.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+D%C3%A9finie+sur+%E2%84%9D%2A.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Fonction impaire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+Fonction+impaire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre 1/x et x/1.",
    details: "Elle possède deux branches et une asymptote verticale en 0. Cette notion s'appuie sur : fractions. Par exemple, f(2)=0.5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(2)=0.5"
      },
      {
        terme: "Exemple 2",
        definition: "f(-4)=-0.25"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions de référence : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7BlHXCcTEx8",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une inéquation avec la fonction inverse",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/V07NxCl7Eto",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Vitesses"
      },
      {
        icon: "finance",
        text: "Intensités"
      },
      {
        icon: "research",
        text: "Lois physiques inverses"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20f%28-5%29%20pour%20f%28x%29%3D1/x.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer f(-5) pour f(x)=1/x.</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20les%20variations%20de%20f%28x%29%3D1/x.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier les variations de f(x)=1/x.</a>"
    ]
  },
  "ecole:73": {
    title: "Fonction racine",
    definition: "La fonction racine carrée associe à tout réel positif x le nombre √x. Elle est définie sur [0,+∞) et est croissante.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet : axiomes de corps, ordre total compatible avec + et ×, existence d'une borne supérieure pour toute partie non vide majorée.",
        axiomes: [
            {
                nom: "R1 — Positivité",
                enonce: "Pour a ≥ 0, √a ≥ 0."
            },
            {
                nom: "R2 — Carré",
                enonce: "(√a)² = a."
            }
        ],
        conclusion: "La fonction racine carrée associe à tout réel a ≥ 0 l'unique réel positif dont le carré vaut a. Unicité : (x − y)(x + y) = x² − y² = 0 avec x, y ≥ 0 entraîne x = y. Existence : borne supérieure de {x ≥ 0 : x² ≤ a}. Elle est définie sur [0 ; +∞[, croissante, et √(ab) = √a·√b pour a, b ≥ 0.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. f(x)=√x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+f%28x%29%3D%E2%88%9Ax.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Définie sur [0,+∞).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+D%C3%A9finie+sur+%5B0%2C%2B%E2%88%9E%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Croissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+Croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : croire que √(a+b)=√a+√b.",
    details: "Elle est définie sur [0,+∞) et est croissante. Cette notion s'appuie sur : racines carrées. Par exemple, f(9)=3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(9)=3"
      },
      {
        terme: "Exemple 2",
        definition: "f(0)=0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions de référence : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7BlHXCcTEx8",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une inéquation avec la fonction racine carrée",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/UPI7RoS0Vhg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Distances"
      },
      {
        icon: "research",
        text: "Géométrie"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Simplifier%20%E2%88%9A50.\" target=\"_blank\" rel=\"noopener noreferrer\">Simplifier √50.</a>",
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20courbe%20de%20f%28x%29%3D%E2%88%9Ax.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la courbe de f(x)=√x.</a>"
    ]
  },
  "ecole:74": {
    title: "Fonction cube",
    definition: "La fonction cube associe à tout réel x le nombre x³. Elle est impaire et strictement croissante sur ℝ.",
    definition_axiomatique: {
        cadre: "On cherche les fonctions f de ℝ dans ℝ qui se comportent comme x ↦ x × x × x.",
        axiomes: [
            {
                nom: "A1 — Multiplicativité",
                enonce: "f(xy) = f(x)·f(y) pour tous réels x et y."
            },
            {
                nom: "A2 — Imparité",
                enonce: "f(−x) = −f(x)."
            },
            {
                nom: "A3 — Continuité",
                enonce: "f est continue sur ℝ."
            },
            {
                nom: "A4 — Normalisation",
                enonce: "f(2) = 8."
            }
        ],
        conclusion: "La fonction cube est l'unique fonction vérifiant A1 à A4. Preuve : A1 avec y = 1 donne f(1) = 1 (car f(2) ≠ 0) ; f(0) = f(0)f(2) donne f(0) = 0 ; f(x)f(1/x) = 1 montre que f ne s'annule qu'en 0. Sur ]0 ; +∞[, g(t) = ln f(eᵗ) est continue et additive donc linéaire, ce qui donne f(x) = xᵃ avec 2ᵃ = 8, soit a = 3 ; l'imparité (A2) donne le cas x < 0.",
        remarque: "Sans A2, la fonction x ↦ |x|³ vérifie aussi A1, A3 et A4 : l'imparité fixe le signe."
    },
    formulas: [
      {
        text: "1. f(x)=x³.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+f%28x%29%3Dx%C2%B3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Fonction impaire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+Fonction+impaire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Croissante sur ℝ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+Croissante+sur+%E2%84%9D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre x³ et 3x.",
    details: "Elle est impaire et strictement croissante sur ℝ. Cette notion s'appuie sur : puissances entières. Par exemple, f(2)=8 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(2)=8"
      },
      {
        terme: "Exemple 2",
        definition: "f(-2)=-8"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Variations d'une fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/i8aYSIidNlk",
        lang: "fr"
      },
      methode: {
        title: "Etudier les variations de la fonction cube",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/PRSDu_PgCZA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation de phénomènes non linéaires"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20f%28-3%29%20pour%20f%28x%29%3Dx%C2%B3.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer f(-3) pour f(x)=x³.</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20parit%C3%A9%20de%20f%28x%29%3Dx%C2%B3.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la parité de f(x)=x³.</a>"
    ]
  },
  "ecole:75": {
    title: "Sens de variation",
    definition: "Étudier le sens de variation d'une fonction, c'est déterminer sur quels intervalles elle est croissante, décroissante ou constante. Le sens de variation décrit comment les valeurs de f(x) évoluent lorsque x augmente.",
    definition_axiomatique: {
        cadre: "On considère une fonction f définie sur un intervalle I de ℝ (ℝ est totalement ordonné).",
        axiomes: [
            {
                nom: "V1 — Croissance",
                enonce: "f est croissante sur I si, pour tous x ≤ y dans I, f(x) ≤ f(y) : f conserve l'ordre."
            },
            {
                nom: "V2 — Décroissance",
                enonce: "f est décroissante sur I si, pour tous x ≤ y dans I, f(x) ≥ f(y) : f renverse l'ordre."
            },
            {
                nom: "V3 — Stricte monotonie",
                enonce: "La monotonie est stricte si les inégalités sont strictes lorsque x < y."
            }
        ],
        conclusion: "Étudier le sens de variation de f, c'est déterminer les intervalles où f est croissante ou décroissante. Une fonction à la fois croissante et décroissante est constante. On vérifie une variation en étudiant le signe de f(y) − f(x) pour x < y, c'est-à-dire du taux d'accroissement (f(y) − f(x))/(y − x)."
    },
    formulas: [
      {
        text: "1. f est croissante sur I si, pour tous a et b de I, a < b implique f(a) ≤ f(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+f+est+croissante+sur+I+si%2C+pour+tous+a+et+b+de+I%2C+a+%3C+b+implique+f%28a%29+%E2%89%A4+f%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f est décroissante sur I si, pour tous a et b de I, a < b implique f(a) ≥ f(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+f+est+d%C3%A9croissante+sur+I+si%2C+pour+tous+a+et+b+de+I%2C+a+%3C+b+implique+f%28a%29+%E2%89%A5+f%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le sens de variation se lit sur le tableau de variations.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+Le+sens+de+variation+se+lit+sur+le+tableau+de+variations.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Le sens de variation décrit comment les valeurs de f(x) évoluent lorsque x augmente. Par exemple, La fonction carré est décroissante sur ]−∞,0] et croissante sur [0,+∞[ illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La fonction carré est décroissante sur ]−∞,0] et croissante sur [0,+∞["
      },
      {
        terme: "Exemple 2",
        definition: "La fonction inverse est décroissante sur ]0,+∞["
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Valeurs propres ».",
      items: [
        { file: "107-0-vecteur-propre.png", alt: "Valeurs propres" },
        { file: "107-1-polycar.png", alt: "Valeurs propres" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Variations d'une fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/i8aYSIidNlk",
        lang: "fr"
      },
      methode: {
        title: "Dresser un tableau de variations",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/yGqqoBMq8Fw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Comparer deux valeurs d'une fonction sans les calculer, en utilisant seulement son sens de variation"
      },
      {
        icon: "computer",
        text: "Programmer un test de croissance ou décroissance à partir d'une liste de valeurs"
      },
      {
        icon: "finance",
        text: "Déterminer si une grandeur économique augmente ou diminue sur une période donnée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Sens%20de%20variation%20d%27une%20fonction%20compos%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Sens de variation d'une fonction composée</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20signe%20de%20la%20d%C3%A9riv%C3%A9e%20et%20sens%20de%20variation\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre signe de la dérivée et sens de variation</a>",
      "<a href=\"https://www.google.com/search?q=Sens%20de%20variation%20et%20extremums%20locaux\" target=\"_blank\" rel=\"noopener noreferrer\">Sens de variation et extremums locaux</a>"
    ]
  },
  "ecole:76": {
    title: "Polynôme du second degré",
    definition: "Un polynôme du second degré est une fonction de la forme f(x) = ax² + bx + c, avec a ≠ 0. Sa représentation graphique est une parabole.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +. Une fonction polynôme est une fonction x ↦ aₙxⁿ + … + a₁x + a₀.",
        axiomes: [
            {
                nom: "P1 — Degré du second degré",
                enonce: "Une fonction polynôme du second degré est une fonction f : x ↦ ax² + bx + c avec a ≠ 0."
            },
            {
                nom: "P2 — Identification",
                enonce: "Deux fonctions polynômes égales en tout réel ont les mêmes coefficients."
            },
            {
                nom: "P3 — Racines",
                enonce: "Un polynôme non nul de degré n a au plus n racines réelles."
            }
        ],
        conclusion: "Le polynôme du second degré f(x) = ax² + bx + c est déterminé par ses trois coefficients (P2). Sa forme canonique a(x − α)² + β donne son sommet (α ; β) ; ses racines, si Δ = b² − 4ac ≥ 0, sont (−b ± √Δ)/2a, et f a au plus deux racines (P3)."
    },
    formulas: [
      {
        text: "1. f(x) = ax² + bx + c, a ≠ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+f%28x%29+%3D+ax%C2%B2+%2B+bx+%2B+c%2C+a+%E2%89%A0+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Forme canonique : f(x) = a(x − α)² + β, avec α = −b/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+Forme+canonique+%3A+f%28x%29+%3D+a%28x+%E2%88%92+%CE%B1%29%C2%B2+%2B+%CE%B2%2C+avec+%CE%B1+%3D+%E2%88%92b%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La parabole est tournée vers le haut si a > 0, vers le bas si a < 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+La+parabole+est+tourn%C3%A9e+vers+le+haut+si+a+%3E+0%2C+vers+le+bas+si+a+%3C+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Racines : P(x)=0",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Polyn%C3%B4me%20du%20second%20degr%C3%A9%20Racines%20%3A%20P%28x%29%3D0%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Sa représentation graphique est une parabole. Par exemple, f(x) = 2x² − 4x + 1, forme canonique : f(x) = 2(x−1)² − 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x) = 2x² − 4x + 1, forme canonique : f(x) = 2(x−1)² − 1"
      },
      {
        terme: "Exemple 2",
        definition: "f(x) = −x² + 2 est une parabole tournée vers le bas, de sommet (0,2)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (fonctions) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
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
        icon: "research",
        text: "Modéliser la trajectoire d'un projectile en physique (mouvement parabolique)"
      },
      {
        icon: "finance",
        text: "Optimiser un coût ou un bénéfice modélisé par une fonction du second degré"
      },
      {
        icon: "computer",
        text: "Tracer et étudier automatiquement une parabole dans un logiciel de calcul"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20du%20signe%20d%27un%20polyn%C3%B4me%20du%20second%20degr%C3%A9\" target=\"_blank\" rel=\"noopener noreferrer\">Étude du signe d'un polynôme du second degré</a>",
      "<a href=\"https://www.google.com/search?q=Sommet%20et%20axe%20de%20sym%C3%A9trie%20de%20la%20parabole\" target=\"_blank\" rel=\"noopener noreferrer\">Sommet et axe de symétrie de la parabole</a>",
      "<a href=\"https://www.google.com/search?q=Polyn%C3%B4mes%20du%20second%20degr%C3%A9%20et%20discriminant\" target=\"_blank\" rel=\"noopener noreferrer\">Polynômes du second degré et discriminant</a>"
    ]
  },
  "ecole:77": {
    title: "Composée de fonctions",
    definition: "La composée de deux fonctions f et g, notée f∘g, est la fonction qui à x associe f(g(x)). On applique d'abord g, puis f au résultat obtenu.",
    definition_axiomatique: {
        cadre: "On considère deux fonctions f et g ; la composée g ∘ f est définie aux points x de D_f tels que f(x) appartient à D_g.",
        axiomes: [
            {
                nom: "C1 — Définition",
                enonce: "(g ∘ f)(x) = g(f(x))."
            },
            {
                nom: "C2 — Associativité",
                enonce: "(h ∘ g) ∘ f = h ∘ (g ∘ f)."
            },
            {
                nom: "C3 — Élément neutre",
                enonce: "f ∘ id = id ∘ f = f, où id(x) = x."
            }
        ],
        conclusion: "La composition est associative, admet id pour neutre, mais n'est pas commutative : avec f(x) = x + 1 et g(x) = x², (g ∘ f)(x) = (x + 1)² et (f ∘ g)(x) = x² + 1. Si f et g sont monotones, g ∘ f est croissante quand elles ont le même sens de variation et décroissante quand elles ont des sens contraires."
    },
    formulas: [
      {
        text: "1. (f∘g)(x) = f(g(x)).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+1.+%28f%E2%88%98g%29%28x%29+%3D+f%28g%28x%29%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Le domaine de f∘g est l'ensemble des x tels que g(x) existe et appartient au domaine de f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+2.+Le+domaine+de+f%E2%88%98g+est+l%27ensemble+des+x+tels+que+g%28x%29+existe+et+appartient+au+domaine+de+f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. En général, f∘g ≠ g∘f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+fonctions+3.+En+g%C3%A9n%C3%A9ral%2C+f%E2%88%98g+%E2%89%A0+g%E2%88%98f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Composition : (f ∘ g)(x) = f(g(x))",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Compos%C3%A9e%20de%20fonctions%20Composition%20%3A%20%28f%20%E2%88%98%20g%29%28x%29%20%3D%20f%28g%28x%29%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "On applique d'abord g, puis f au résultat obtenu. Par exemple, f(x)=x² et g(x)=x+1 → (f∘g)(x) = (x+1)² illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=x² et g(x)=x+1 → (f∘g)(x) = (x+1)²"
      },
      {
        terme: "Exemple 2",
        definition: "Avec les mêmes fonctions, (g∘f)(x) = x²+1 (différent de f∘g)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/E4SY8_L-DTA",
        lang: "fr"
      },
      methode: {
        title: "Identifier la composée de deux fonctions",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/08HgDgD6XL8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Chaîner plusieurs traitements dans un programme, chacun appliqué au résultat du précédent"
      },
      {
        icon: "research",
        text: "Modéliser un phénomène en plusieurs étapes, chaque étape dépendant du résultat de la précédente"
      },
      {
        icon: "finance",
        text: "Calculer un prix final après application successive de plusieurs taux (remise puis taxe)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27une%20fonction%20compos%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'une fonction composée</a>",
      "<a href=\"https://www.google.com/search?q=Compos%C3%A9e%20de%20trois%20fonctions%20ou%20plus\" target=\"_blank\" rel=\"noopener noreferrer\">Composée de trois fonctions ou plus</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20d%27une%20compos%C3%A9e%20de%20fonctions%20bijectives\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque d'une composée de fonctions bijectives</a>"
    ]
  },
  "ecole:78": {
    title: "Exponentielle",
    definition: "La fonction exponentielle, notée exp ou x ↦ eˣ, est l'unique fonction dérivable sur ℝ égale à sa propre dérivée et qui vaut 1 en 0. Elle est strictement positive et strictement croissante.",
    definition_axiomatique: {
        cadre: "On cherche les fonctions f dérivables sur ℝ qui sont proportionnelles à leur propre dérivée, avec une normalisation en 0.",
        axiomes: [
            {
                nom: "E1 — Dérivabilité",
                enonce: "f est dérivable sur ℝ."
            },
            {
                nom: "E2 — Équation différentielle",
                enonce: "f' = f."
            },
            {
                nom: "E3 — Condition initiale",
                enonce: "f(0) = 1."
            }
        ],
        conclusion: "La fonction exponentielle, notée exp, est l'unique fonction vérifiant E1 à E3. Unicité : si f et g conviennent, h(x) = f(x)g(−x) a pour dérivée f'(x)g(−x) − f(x)g'(−x) = 0, donc h = h(0) = 1, et g(−x) = 1/f(x) pour toute solution ; deux solutions coïncident donc. Existence : on l'admet (par exemple par la limite de (1 + x/n)ⁿ ou par la série Σ xⁿ/n!). On note e = exp(1).",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. exp'(x) = exp(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+exp%27%28x%29+%3D+exp%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. exp(0) = 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+exp%280%29+%3D+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. exp(x) > 0 pour tout réel x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+exp%28x%29+%3E+0+pour+tout+r%C3%A9el+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. exp(x+y) = exp(x) × exp(y).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+4.+exp%28x%2By%29+%3D+exp%28x%29+%C3%97+exp%28y%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Elle est strictement positive et strictement croissante. Par exemple, exp(0) = 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "exp(0) = 1"
      },
      {
        terme: "Exemple 2",
        definition: "exp(1) = e ≈ 2,718"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction exponentielle : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aD03wqgxexk",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur la fonction exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qDFjeFyA_OY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Modéliser une croissance d'intérêts composés ou une évolution démographique"
      },
      {
        icon: "research",
        text: "Décrire une décroissance radioactive ou une charge électrique dans un circuit"
      },
      {
        icon: "computer",
        text: "Implémenter des modèles de croissance exponentielle dans une simulation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20alg%C3%A9briques%20de%20l%27exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés algébriques de l'exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20de%20la%20fonction%20exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée de la fonction exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=Croissance%20exponentielle%20compar%C3%A9e%20aux%20fonctions%20polynomiales\" target=\"_blank\" rel=\"noopener noreferrer\">Croissance exponentielle comparée aux fonctions polynomiales</a>"
    ]
  },
  "ecole:79": {
    title: "Propriétés de exp",
    definition: "La fonction exponentielle possède des propriétés algébriques qui transforment les produits, quotients et puissances en sommes, différences et produits d'exposants.",
    definition_axiomatique: {
        cadre: "On travaille avec la fonction exponentielle : l'unique fonction dérivable telle que exp' = exp et exp(0) = 1.",
        axiomes: [
            {
                nom: "E1 — Équation différentielle",
                enonce: "exp' = exp et exp(0) = 1."
            },
            {
                nom: "E2 — Relation fonctionnelle",
                enonce: "exp(x + y) = exp(x) × exp(y) pour tous réels x et y."
            },
            {
                nom: "E3 — Caractérisation",
                enonce: "exp est la seule fonction dérivable non nulle qui vérifie f(x + y) = f(x)f(y) et f'(0) = 1."
            }
        ],
        conclusion: "E2 se démontre à partir de E1 : à y fixé, x ↦ exp(x + y)/exp(y) est dérivable, égale à sa dérivée et vaut 1 en 0 : c'est exp. On en déduit exp(−x) = 1/exp(x), exp(x − y) = exp(x)/exp(y), exp(nx) = (exp x)ⁿ, exp(x) > 0 pour tout x (car exp(x) = exp(x/2)² et exp ne s'annule pas), et exp est strictement croissante.",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. exp(x+y) = exp(x) × exp(y).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+exp%28x%2By%29+%3D+exp%28x%29+%C3%97+exp%28y%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. exp(−x) = 1/exp(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+exp%28%E2%88%92x%29+%3D+1%2Fexp%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. exp(x−y) = exp(x)/exp(y).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+exp%28x%E2%88%92y%29+%3D+exp%28x%29%2Fexp%28y%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. exp(nx) = (exp(x))ⁿ pour n entier.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+4.+exp%28nx%29+%3D+%28exp%28x%29%29%E2%81%BF+pour+n+entier.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "La fonction exponentielle possède des propriétés algébriques qui transforment les produits, quotients et puissances en sommes, différences et produits d'exposants. Par exemple, exp(2) × exp(3) = exp(5) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "exp(2) × exp(3) = exp(5)"
      },
      {
        terme: "Exemple 2",
        definition: "exp(−1) = 1/exp(1) = 1/e"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction exponentielle : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aD03wqgxexk",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur la fonction exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qDFjeFyA_OY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Simplifier des calculs impliquant des produits ou des puissances d'exponentielles dans un programme"
      },
      {
        icon: "finance",
        text: "Simplifier des formules d'intérêts composés successifs"
      },
      {
        icon: "research",
        text: "Manipuler des formules physiques faisant intervenir des exponentielles combinées"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20des%20propri%C3%A9t%C3%A9s%20alg%C3%A9briques%20de%20l%27exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration des propriétés algébriques de l'exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20les%20propri%C3%A9t%C3%A9s%20de%20exp%20et%20celles%20du%20logarithme\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre les propriétés de exp et celles du logarithme</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20des%20propri%C3%A9t%C3%A9s%20de%20exp%20pour%20r%C3%A9soudre%20des%20%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation des propriétés de exp pour résoudre des équations</a>"
    ]
  },
  "ecole:80": {
    title: "Dérivée de exp",
    definition: "La fonction exponentielle est égale à sa propre dérivée : c'est sa propriété fondamentale, qui la caractérise entièrement parmi les fonctions dérivables sur ℝ.",
    definition_axiomatique: {
        cadre: "La fonction exponentielle est définie par l'équation différentielle exp' = exp avec exp(0) = 1.",
        axiomes: [
            {
                nom: "E1 — Dérivée",
                enonce: "exp' = exp."
            },
            {
                nom: "E2 — Condition initiale",
                enonce: "exp(0) = 1."
            },
            {
                nom: "E3 — Règle de dérivation composée",
                enonce: "(v ∘ u)' = u' × (v' ∘ u)."
            }
        ],
        conclusion: "La dérivée de exp est exp elle-même (c'est l'axiome E1) ; par E3, la dérivée de x ↦ exp(u(x)) est u'(x)·exp(u(x)), et celle de x ↦ exp(ax) est a·exp(ax). En particulier, exp' > 0 donc exp est strictement croissante.",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. (exp(x))' = exp(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+%28exp%28x%29%29%27+%3D+exp%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Plus généralement, (exp(u(x)))' = u'(x) × exp(u(x)).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+Plus+g%C3%A9n%C3%A9ralement%2C+%28exp%28u%28x%29%29%29%27+%3D+u%27%28x%29+%C3%97+exp%28u%28x%29%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La fonction exponentielle est strictement croissante sur ℝ car sa dérivée exp(x) est toujours positive.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+La+fonction+exponentielle+est+strictement+croissante+sur+%E2%84%9D+car+sa+d%C3%A9riv%C3%A9e+exp%28x%29+est+toujours+positive.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "La fonction exponentielle est égale à sa propre dérivée : c'est sa propriété fondamentale, qui la caractérise entièrement parmi les fonctions dérivables sur ℝ. Par exemple, Si f(x) = exp(x), alors f'(x) = exp(x) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = exp(x), alors f'(x) = exp(x)"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = exp(2x), alors f'(x) = 2exp(2x)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction exponentielle : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aD03wqgxexk",
        lang: "fr"
      },
      methode: {
        title: "Dériver la fonction exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XcMePHk6Ilk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étudier la vitesse de croissance d'un phénomène exponentiel (population, épidémie)"
      },
      {
        icon: "finance",
        text: "Calculer le taux de variation instantané d'un capital en croissance exponentielle"
      },
      {
        icon: "computer",
        text: "Résoudre numériquement des équations différentielles simples du type y'=ay"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27une%20fonction%20compos%C3%A9e%20avec%20l%27exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'une fonction composée avec l'exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quations%20diff%C3%A9rentielles%20y%27%3Day%20et%20fonction%20exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Équations différentielles y'=ay et fonction exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20compl%C3%A8te%20de%20la%20fonction%20exponentielle%20%28variations%2C%20limites%29\" target=\"_blank\" rel=\"noopener noreferrer\">Étude complète de la fonction exponentielle (variations, limites)</a>"
    ]
  },
  "ecole:81": {
    title: "Logarithme",
    definition: "La fonction logarithme népérien, notée ln, est la fonction réciproque de l'exponentielle. Elle est définie sur ]0,+∞[ et transforme un produit en somme.",
    definition_axiomatique: {
        cadre: "On travaille sur ]0 ; +∞[, où x ↦ 1/x est continue ; on cherche une fonction dont la dérivée est 1/x.",
        axiomes: [
            {
                nom: "L1 — Dérivée",
                enonce: "ln est dérivable sur ]0 ; +∞[ et ln'(x) = 1/x."
            },
            {
                nom: "L2 — Normalisation",
                enonce: "ln(1) = 0."
            }
        ],
        conclusion: "La fonction logarithme népérien est l'unique fonction vérifiant L1 et L2 (deux fonctions de même dérivée sur un intervalle diffèrent d'une constante, fixée par L2). Elle est strictement croissante, puisque sa dérivée est strictement positive, et ln(e) = 1 définit le nombre e.",
        remarque: "Elle est la fonction réciproque de exp : ln(exp x) = x pour tout réel x et exp(ln x) = x pour tout x > 0."
    },
    formulas: [
      {
        text: "1. ln est définie sur ]0, +∞[.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+ln+est+d%C3%A9finie+sur+%5D0%2C+%2B%E2%88%9E%5B.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ln(1) = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+ln%281%29+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. ln est strictement croissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+ln+est+strictement+croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. ln(x) existe si et seulement si x > 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+4.+ln%28x%29+existe+si+et+seulement+si+x+%3E+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Elle est définie sur ]0,+∞[ et transforme un produit en somme. Par exemple, ln(1) = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "ln(1) = 0"
      },
      {
        terme: "Exemple 2",
        definition: "ln(e) = 1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Produit scalaire ».",
      items: [
        { file: "203-0-angle.png", alt: "Produit scalaire" },
        { file: "203-1-formule.png", alt: "Produit scalaire" },
        { file: "203-2-orthogonal.png", alt: "Produit scalaire" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur les logarithmes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/HGrK77-SCl4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Mesurer une intensité sonore en décibels, une magnitude sismique ou un pH (échelles logarithmiques)"
      },
      {
        icon: "finance",
        text: "Calculer un taux de croissance continu à partir de valeurs observées"
      },
      {
        icon: "computer",
        text: "Linéariser des données qui croissent exponentiellement pour faciliter leur analyse"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20alg%C3%A9briques%20du%20logarithme%20%28produit%2C%20quotient%2C%20puissance%29\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés algébriques du logarithme (produit, quotient, puissance)</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20de%20la%20fonction%20logarithme\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée de la fonction logarithme</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9solution%20d%27%C3%A9quations%20et%20d%27in%C3%A9quations%20avec%20le%20logarithme\" target=\"_blank\" rel=\"noopener noreferrer\">Résolution d'équations et d'inéquations avec le logarithme</a>"
    ]
  },
  "ecole:82": {
    title: "Propriétés de ln",
    definition: "La fonction logarithme népérien vérifie des propriétés qui transforment les produits, quotients et puissances en sommes, différences et produits, symétriques de celles de l'exponentielle.",
    definition_axiomatique: {
        cadre: "On travaille sur ]0 ; +∞[ avec la fonction ln, unique fonction dérivable telle que ln'(x) = 1/x et ln(1) = 0.",
        axiomes: [
            {
                nom: "L1 — Dérivée",
                enonce: "ln'(x) = 1/x pour x > 0."
            },
            {
                nom: "L2 — Normalisation",
                enonce: "ln(1) = 0."
            },
            {
                nom: "L3 — Constante",
                enonce: "Une fonction de dérivée nulle sur un intervalle est constante."
            }
        ],
        conclusion: "Pour a > 0, la fonction x ↦ ln(ax) a pour dérivée a/(ax) = 1/x (L1) ; elle diffère donc de ln par une constante (L3), fixée en x = 1 : ln(ax) = ln x + ln a. On en déduit ln(ab) = ln a + ln b, ln(1/a) = −ln a, ln(a/b) = ln a − ln b et ln(aⁿ) = n ln a."
    },
    formulas: [
      {
        text: "1. ln(ab) = ln(a) + ln(b), pour a,b > 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+ln%28ab%29+%3D+ln%28a%29+%2B+ln%28b%29%2C+pour+a%2Cb+%3E+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ln(a/b) = ln(a) − ln(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+ln%28a%2Fb%29+%3D+ln%28a%29+%E2%88%92+ln%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. ln(aⁿ) = n × ln(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+ln%28a%E2%81%BF%29+%3D+n+%C3%97+ln%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. ln(1/a) = −ln(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+4.+ln%281%2Fa%29+%3D+%E2%88%92ln%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "La fonction logarithme népérien vérifie des propriétés qui transforment les produits, quotients et puissances en sommes, différences et produits, symétriques de celles de l'exponentielle. Par exemple, ln(2×3) = ln(2) + ln(3) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "ln(2×3) = ln(2) + ln(3)"
      },
      {
        terme: "Exemple 2",
        definition: "ln(8) = ln(2³) = 3 ln(2)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur les logarithmes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/HGrK77-SCl4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Simplifier des calculs de produits en sommes dans un programme"
      },
      {
        icon: "finance",
        text: "Décomposer un taux de croissance global en une somme de taux successifs"
      },
      {
        icon: "research",
        text: "Manipuler des formules physiques ou chimiques faisant intervenir des logarithmes (pH, décibels)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20des%20propri%C3%A9t%C3%A9s%20du%20logarithme%20%C3%A0%20partir%20de%20celles%20de%20l%27exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration des propriétés du logarithme à partir de celles de l'exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9solution%20d%27%C3%A9quations%20logarithmiques\" target=\"_blank\" rel=\"noopener noreferrer\">Résolution d'équations logarithmiques</a>",
      "<a href=\"https://www.google.com/search?q=Changement%20de%20base%20du%20logarithme%20%28logarithme%20d%C3%A9cimal%29\" target=\"_blank\" rel=\"noopener noreferrer\">Changement de base du logarithme (logarithme décimal)</a>"
    ]
  },
  "ecole:83": {
    title: "ln et exp réciproques",
    definition: "Les fonctions logarithme népérien et exponentielle sont réciproques l'une de l'autre : appliquer l'une puis l'autre revient à ne rien changer.",
    definition_axiomatique: {
        cadre: "On travaille avec exp, fonction dérivable, strictement croissante, de limites 0 en −∞ et +∞ en +∞.",
        axiomes: [
            {
                nom: "R1 — Bijection",
                enonce: "exp est une bijection de ℝ sur ]0 ; +∞[ (strictement croissante, continue, avec ces limites)."
            },
            {
                nom: "R2 — Réciproque",
                enonce: "ln est la bijection réciproque de exp : ln(y) = x ⟺ y = exp(x)."
            },
            {
                nom: "R3 — Dérivée de la réciproque",
                enonce: "Si f est bijective dérivable et f'(x) ≠ 0, la réciproque a pour dérivée 1/f'(f⁻¹(y))."
            }
        ],
        conclusion: "ln(exp x) = x pour tout réel x et exp(ln x) = x pour tout x > 0. Par R3, ln'(y) = 1/exp'(ln y) = 1/exp(ln y) = 1/y, ce qui retrouve la définition de ln par sa dérivée. Les courbes de exp et ln sont symétriques par rapport à la droite y = x.",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. ln(exp(x)) = x pour tout réel x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+ln%28exp%28x%29%29+%3D+x+pour+tout+r%C3%A9el+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. exp(ln(x)) = x pour tout x > 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+exp%28ln%28x%29%29+%3D+x+pour+tout+x+%3E+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les courbes de ln et exp sont symétriques par rapport à la droite y = x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+Les+courbes+de+ln+et+exp+sont+sym%C3%A9triques+par+rapport+%C3%A0+la+droite+y+%3D+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Les fonctions logarithme népérien et exponentielle sont réciproques l'une de l'autre : appliquer l'une puis l'autre revient à ne rien changer. Par exemple, ln(exp(5)) = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "ln(exp(5)) = 5"
      },
      {
        terme: "Exemple 2",
        definition: "exp(ln(7)) = 7"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la fonction réciproque d'une fonction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/bgINubYekqo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Résoudre une équation exponentielle en passant au logarithme, ou inversement"
      },
      {
        icon: "research",
        text: "Isoler une variable placée en exposant dans une formule scientifique"
      },
      {
        icon: "finance",
        text: "Déterminer la durée nécessaire pour atteindre un capital donné avec un taux de croissance connu"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9solution%20d%27%C3%A9quations%20m%C3%AAlant%20exponentielle%20et%20logarithme\" target=\"_blank\" rel=\"noopener noreferrer\">Résolution d'équations mêlant exponentielle et logarithme</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trie%20des%20courbes%20de%20exp%20et%20ln%20par%20rapport%20%C3%A0%20y%3Dx\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrie des courbes de exp et ln par rapport à y=x</a>",
      "<a href=\"https://www.google.com/search?q=Changement%20de%20variable%20via%20ln%20ou%20exp%20dans%20une%20%C3%A9quation\" target=\"_blank\" rel=\"noopener noreferrer\">Changement de variable via ln ou exp dans une équation</a>"
    ]
  },
  "ecole:84": {
    title: "Croissances comparées",
    definition: "Les théorèmes de croissances comparées précisent comment se comparent, à l'infini, les vitesses de croissance des fonctions puissance, exponentielle et logarithme : l'exponentielle l'emporte toujours sur les puissances, qui l'emportent toujours sur le logarithme.",
    definition_axiomatique: {
        cadre: "On compare la vitesse de croissance de exp, des puissances et de ln en +∞.",
        axiomes: [
            {
                nom: "C1 — Inégalité",
                enonce: "exp(x) ≥ 1 + x pour tout réel x (la courbe est au-dessus de sa tangente en 0)."
            },
            {
                nom: "C2 — Relation fonctionnelle",
                enonce: "exp(x + y) = exp(x) exp(y)."
            },
            {
                nom: "C3 — Comparaison",
                enonce: "Si f ≥ g au voisinage de +∞ et si g tend vers +∞, alors f tend vers +∞."
            }
        ],
        conclusion: "Par C1 et C2, exp(x) = (exp(x/2))² ≥ (1 + x/2)² ≥ x²/4 pour x ≥ 0, donc exp(x)/x ≥ x/4 → +∞ (C3). Ainsi exp(x)/xⁿ → +∞ pour tout entier n : exp l'emporte sur toute puissance. Par réciprocité (x = ln t), ln t/t → 0 et t ln t → 0 en 0."
    },
    formulas: [
      {
        text: "1. lim(x→+∞) (ln x)/x = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+1.+lim%28x%E2%86%92%2B%E2%88%9E%29+%28ln+x%29%2Fx+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. lim(x→+∞) (eˣ)/x = +∞.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+2.+lim%28x%E2%86%92%2B%E2%88%9E%29+%28e%CB%A3%29%2Fx+%3D+%2B%E2%88%9E.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. lim(x→+∞) xⁿ·e⁻ˣ = 0, pour tout entier n.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+3.+lim%28x%E2%86%92%2B%E2%88%9E%29+x%E2%81%BF%C2%B7e%E2%81%BB%CB%A3+%3D+0%2C+pour+tout+entier+n.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. lim(x→0⁺) x·ln(x) = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+fonctions+4.+lim%28x%E2%86%920%E2%81%BA%29+x%C2%B7ln%28x%29+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent la fonction et se retiennent comme un ensemble de règles à appliquer directement dans les exercices.",
    details: "Les théorèmes de croissances comparées précisent comment se comparent, à l'infini, les vitesses de croissance des fonctions puissance, exponentielle et logarithme : l'exponentielle l'emporte toujours sur les puissances, qui l'emportent toujours sur le logarithme. Par exemple, lim(x→+∞) x²/eˣ = 0 (l'exponentielle l'emporte sur x²) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "lim(x→+∞) x²/eˣ = 0 (l'exponentielle l'emporte sur x²)"
      },
      {
        terme: "Exemple 2",
        definition: "lim(x→+∞) (ln x)/√x = 0 (la puissance l'emporte sur le logarithme)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Calculer une limite par croissance comparée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/lA3W_j4p-c8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Déterminer la limite d'une fonction complexe combinant exponentielle, puissance et logarithme"
      },
      {
        icon: "computer",
        text: "Comparer la complexité algorithmique de plusieurs fonctions (logarithmique, polynomiale, exponentielle)"
      },
      {
        icon: "research",
        text: "Étudier le comportement asymptotique d'un modèle de croissance en sciences"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20des%20th%C3%A9or%C3%A8mes%20de%20croissances%20compar%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration des théorèmes de croissances comparées</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20des%20croissances%20compar%C3%A9es%20pour%20lever%20une%20forme%20ind%C3%A9termin%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation des croissances comparées pour lever une forme indéterminée</a>",
      "<a href=\"https://www.google.com/search?q=Croissances%20compar%C3%A9es%20et%20complexit%C3%A9%20algorithmique\" target=\"_blank\" rel=\"noopener noreferrer\">Croissances comparées et complexité algorithmique</a>"
    ]
  },
  "ecole:85": {
    title: "Limite d’une fonction",
    definition: "La limite d'une fonction en un point ou en l'infini décrit la valeur vers laquelle se rapprochent les valeurs de la fonction lorsque x se rapproche de ce point ou tend vers l'infini.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet, muni de la valeur absolue ; f est définie au voisinage de a.",
        axiomes: [
            {
                nom: "A1 — Voisinages",
                enonce: "Pour tout réel ℓ et tout ε > 0, ]ℓ − ε ; ℓ + ε[ est un voisinage de ℓ ; tout ensemble qui contient un tel intervalle en est un."
            },
            {
                nom: "A2 — Proche de a",
                enonce: "Une propriété est vraie au voisinage de a s'il existe δ > 0 tel qu'elle soit vraie pour tout x ≠ a de ]a − δ ; a + δ[."
            },
            {
                nom: "A3 — Limite",
                enonce: "f a pour limite ℓ en a si, pour tout voisinage V de ℓ, la propriété « f(x) ∈ V » est vraie au voisinage de a."
            }
        ],
        conclusion: "Cela s'écrit : ∀ε > 0, ∃δ > 0, ∀x, 0 < |x − a| < δ ⟹ |f(x) − ℓ| < ε. La limite est unique (deux limites distinctes auraient des voisinages disjoints). Les limites en ±∞ et les limites infinies se définissent de même en remplaçant les voisinages par des intervalles ]A ; +∞[ ou ]−∞ ; −A[."
    },
    formulas: [
      {
        text: "1. lim(x→a) f(x) = L signifie que f(x) se rapproche autant qu'on veut de L quand x se rapproche de a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+1.+lim%28x%E2%86%92a%29+f%28x%29+%3D+L+signifie+que+f%28x%29+se+rapproche+autant+qu%27on+veut+de+L+quand+x+se+rapproche+de+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La limite peut être finie, +∞ ou −∞.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+2.+La+limite+peut+%C3%AAtre+finie%2C+%2B%E2%88%9E+ou+%E2%88%92%E2%88%9E.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une fonction peut ne pas avoir de limite en un point.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+3.+Une+fonction+peut+ne+pas+avoir+de+limite+en+un+point.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés décrivent un comportement asymptotique : elles se lisent comme des conditions à vérifier avant de conclure sur une limite.",
    details: "La limite d'une fonction en un point ou en l'infini décrit la valeur vers laquelle se rapprochent les valeurs de la fonction lorsque x se rapproche de ce point ou tend vers l'infini. Par exemple, lim(x→+∞) 1/x = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "lim(x→+∞) 1/x = 0"
      },
      {
        terme: "Exemple 2",
        definition: "lim(x→2) x² = 4"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Limites des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YPwJyYDsmxM",
        lang: "fr"
      },
      methode: {
        title: "Calculer une limite avec une forme indéterminée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/4NQbGdXThrk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étudier le comportement d'un phénomène physique lorsqu'un paramètre devient très grand ou très petit"
      },
      {
        icon: "finance",
        text: "Étudier la valeur limite d'un capital ou d'une population sur le très long terme"
      },
      {
        icon: "computer",
        text: "Déterminer la convergence d'un algorithme itératif"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Limites%20et%20op%C3%A9rations%20%28somme%2C%20produit%2C%20quotient%29\" target=\"_blank\" rel=\"noopener noreferrer\">Limites et opérations (somme, produit, quotient)</a>",
      "<a href=\"https://www.google.com/search?q=Formes%20ind%C3%A9termin%C3%A9es%20et%20leur%20lev%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Formes indéterminées et leur levée</a>",
      "<a href=\"https://www.google.com/search?q=Limites%20et%20asymptotes%20d%27une%20courbe\" target=\"_blank\" rel=\"noopener noreferrer\">Limites et asymptotes d'une courbe</a>"
    ]
  },
  "ecole:86": {
    title: "Asymptotes",
    definition: "Une asymptote est une droite que la courbe d’une fonction approche lorsque x tend vers une valeur ou l’infini.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère ; une asymptote est une droite dont la courbe de f se rapproche indéfiniment.",
        axiomes: [
            {
                nom: "A1 — Asymptote verticale",
                enonce: "La droite x = a est asymptote à la courbe si f(x) tend vers +∞ ou −∞ quand x tend vers a."
            },
            {
                nom: "A2 — Asymptote horizontale",
                enonce: "La droite y = ℓ est asymptote à la courbe si f(x) tend vers ℓ quand x tend vers +∞ (ou −∞)."
            },
            {
                nom: "A3 — Asymptote oblique",
                enonce: "La droite y = mx + p est asymptote à la courbe en +∞ si f(x) − (mx + p) tend vers 0 quand x → +∞."
            }
        ],
        conclusion: "Une asymptote est donc définie par une limite. Une asymptote oblique existe si et seulement si f(x)/x tend vers un réel m et f(x) − mx vers un réel p. Par exemple, la courbe de x ↦ 1/x a pour asymptotes les axes."
    },
    formulas: [
      {
        text: "1. Verticale : limite infinie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+1.+Verticale+%3A+limite+infinie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Horizontale : limite finie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+2.+Horizontale+%3A+limite+finie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Oblique : f(x)−(ax+b) → 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+3.+Oblique+%3A+f%28x%29%E2%88%92%28ax%2Bb%29+%E2%86%92+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre asymptote et tangente.",
    details: "Une asymptote est une droite que la courbe d’une fonction approche lorsque x tend vers une valeur ou l’infini. Cette notion s'appuie sur : limites. Par exemple, f(x)=1/x a une asymptote verticale en x=0 et horizontale en y=0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=1/x a une asymptote verticale en x=0 et horizontale en y=0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Limites des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YPwJyYDsmxM",
        lang: "fr"
      },
      methode: {
        title: "Démontrer qu'une droite est asymptote horizontale",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0LDGK-QkL80",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étude de fonctions"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20les%20asymptotes%20de%20f%28x%29%3D%283x%E2%88%921%29/%28x%2B2%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver les asymptotes de f(x)=(3x−1)/(x+2).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20une%20fonction%20poss%C3%A8de%20une%20asymptote%20oblique.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si une fonction possède une asymptote oblique.</a>"
    ]
  },
  "ecole:87": {
    title: "Théorème des valeurs intermédiaires",
    definition: "Le théorème des valeurs intermédiaires affirme que si une fonction est continue sur un intervalle [a,b], alors elle prend toutes les valeurs comprises entre f(a) et f(b) au moins une fois sur cet intervalle.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet ; f est continue sur un intervalle [a ; b].",
        axiomes: [
            {
                nom: "A1 — Borne supérieure",
                enonce: "Toute partie non vide et majorée de ℝ possède une borne supérieure."
            },
            {
                nom: "A2 — Continuité",
                enonce: "f est continue en tout point de [a ; b]."
            },
            {
                nom: "A3 — Signe local",
                enonce: "Si f est continue en c et f(c) < k (resp. f(c) > k), alors f(x) < k (resp. f(x) > k) au voisinage de c."
            }
        ],
        conclusion: "Si k est compris entre f(a) et f(b), il existe c dans [a ; b] tel que f(c) = k. Preuve (pour f(a) < k < f(b)) : soit c la borne supérieure de {x ∈ [a ; b] : f(x) < k} (A1) ; si f(c) < k, A3 donnerait des points plus grands dans l'ensemble ; si f(c) > k, des points plus petits que c seraient des majorants ; donc f(c) = k. Ce théorème est équivalent à la complétude de ℝ.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. Si f est continue sur [a,b] et k est compris entre f(a) et f(b), alors il existe c ∈ [a,b] tel que f(c) = k.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+1.+Si+f+est+continue+sur+%5Ba%2Cb%5D+et+k+est+compris+entre+f%28a%29+et+f%28b%29%2C+alors+il+existe+c+%E2%88%88+%5Ba%2Cb%5D+tel+que+f%28c%29+%3D+k.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Ce théorème garantit l'existence d'une solution, pas son unicité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+2.+Ce+th%C3%A9or%C3%A8me+garantit+l%27existence+d%27une+solution%2C+pas+son+unicit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La continuité de f est une hypothèse indispensable.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+3.+La+continuit%C3%A9+de+f+est+une+hypoth%C3%A8se+indispensable.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Théorème des valeurs intermédiaires",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Th%C3%A9or%C3%A8me%20des%20valeurs%20interm%C3%A9diaires%20Th%C3%A9or%C3%A8me%20des%20valeurs%20interm%C3%A9diaires%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés forment les hypothèses et la conclusion d'un théorème d'existence : elles doivent être vérifiées rigoureusement avant de conclure.",
    details: "Le théorème des valeurs intermédiaires affirme que si une fonction est continue sur un intervalle [a,b], alors elle prend toutes les valeurs comprises entre f(a) et f(b) au moins une fois sur cet intervalle. Par exemple, f continue sur [0,2] avec f(0)=−1 et f(2)=3 → il existe c ∈ [0,2] tel que f(c) = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f continue sur [0,2] avec f(0)=−1 et f(2)=3 → il existe c ∈ [0,2] tel que f(c) = 0"
      },
      {
        terme: "Exemple 2",
        definition: "Ce théorème justifie l'existence d'une racine d'un polynôme changeant de signe"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Valeurs propres ».",
      items: [
        { file: "107-0-vecteur-propre.png", alt: "Valeurs propres" },
        { file: "107-1-polycar.png", alt: "Valeurs propres" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Continuité des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9SSEUoyHh2s",
        lang: "fr"
      },
      methode: {
        title: "Appliquer le théorème des valeurs intermédiaires (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/fkd7c3IAc3Y",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Prouver l'existence d'une solution à une équation sans la calculer explicitement"
      },
      {
        icon: "computer",
        text: "Justifier la convergence d'un algorithme de dichotomie pour résoudre une équation"
      },
      {
        icon: "research",
        text: "Montrer qu'un phénomène physique continu passe forcément par une valeur intermédiaire donnée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Corollaire%20du%20th%C3%A9or%C3%A8me%20des%20valeurs%20interm%C3%A9diaires%20%28cas%20monotone%29\" target=\"_blank\" rel=\"noopener noreferrer\">Corollaire du théorème des valeurs intermédiaires (cas monotone)</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9thode%20de%20dichotomie%20bas%C3%A9e%20sur%20le%20TVI\" target=\"_blank\" rel=\"noopener noreferrer\">Méthode de dichotomie basée sur le TVI</a>",
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20la%20bijection%2C%20version%20renforc%C3%A9e%20du%20TVI\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de la bijection, version renforcée du TVI</a>"
    ]
  },
  "ecole:88": {
    title: "Corollaire du TVI",
    definition: "Le corollaire du théorème des valeurs intermédiaires précise que si, de plus, la fonction est strictement monotone sur [a,b], alors la valeur intermédiaire k est atteinte en un unique point c.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ avec le théorème des valeurs intermédiaires : si f est continue sur [a ; b] et k est compris entre f(a) et f(b), alors k a un antécédent dans [a ; b].",
        axiomes: [
            {
                nom: "A1 — TVI",
                enonce: "Si f est continue sur [a ; b] et k est compris entre f(a) et f(b), il existe c ∈ [a ; b] tel que f(c) = k."
            },
            {
                nom: "A2 — Signe",
                enonce: "f(a)·f(b) < 0 signifie que f(a) et f(b) sont de signes contraires."
            }
        ],
        conclusion: "Si f est continue sur [a ; b] et f(a)·f(b) < 0, alors 0 est compris entre f(a) et f(b), donc l'équation f(x) = 0 a au moins une solution dans ]a ; b[ (A1 avec k = 0). Si de plus f est strictement monotone, la solution est unique."
    },
    formulas: [
      {
        text: "1. Si f est continue et strictement monotone sur [a,b], alors pour tout k entre f(a) et f(b), il existe un unique c tel que f(c)=k.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+1.+Si+f+est+continue+et+strictement+monotone+sur+%5Ba%2Cb%5D%2C+alors+pour+tout+k+entre+f%28a%29+et+f%28b%29%2C+il+existe+un+unique+c+tel+que+f%28c%29%3Dk.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La stricte monotonie garantit l'unicité de la solution.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+2.+La+stricte+monotonie+garantit+l%27unicit%C3%A9+de+la+solution.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Ce corollaire est aussi appelé théorème de la bijection.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+3.+Ce+corollaire+est+aussi+appel%C3%A9+th%C3%A9or%C3%A8me+de+la+bijection.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés forment les hypothèses et la conclusion d'un théorème d'existence : elles doivent être vérifiées rigoureusement avant de conclure.",
    details: "Le corollaire du théorème des valeurs intermédiaires précise que si, de plus, la fonction est strictement monotone sur [a,b], alors la valeur intermédiaire k est atteinte en un unique point c. Par exemple, f(x) = x³ est continue et strictement croissante sur ℝ → l'équation f(x) = 5 a une unique solution illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x) = x³ est continue et strictement croissante sur ℝ → l'équation f(x) = 5 a une unique solution"
      },
      {
        terme: "Exemple 2",
        definition: "Sur [0,1], f continue et strictement croissante avec f(0)=−2, f(1)=4 → f(x)=0 a une unique solution dans [0,1]"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Valeurs propres ».",
      items: [
        { file: "107-0-vecteur-propre.png", alt: "Valeurs propres" },
        { file: "107-1-polycar.png", alt: "Valeurs propres" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Continuité des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9SSEUoyHh2s",
        lang: "fr"
      },
      methode: {
        title: "Appliquer le théorème des valeurs intermédiaires (2)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/UmGQf7gkvLg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Garantir qu'un algorithme de recherche de racine (dichotomie) converge vers une unique solution"
      },
      {
        icon: "research",
        text: "Démontrer l'existence et l'unicité d'une solution à une équation en sciences"
      },
      {
        icon: "research",
        text: "Justifier rigoureusement l'unicité d'un équilibre dans un modèle économique ou physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Application%20du%20corollaire%20%C3%A0%20la%20r%C3%A9solution%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Application du corollaire à la résolution d'équations</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20la%20m%C3%A9thode%20de%20dichotomie\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec la méthode de dichotomie</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20aux%20fonctions%20strictement%20monotones%20par%20morceaux\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation aux fonctions strictement monotones par morceaux</a>"
    ]
  },
  "ecole:89": {
    title: "Continuité",
    definition: "Une fonction est continue en un point si sa limite en ce point est égale à sa valeur. Elle ne présente alors aucune rupture.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ ; f est définie sur un intervalle I.",
        axiomes: [
            {
                nom: "C1 — Continuité en a",
                enonce: "f est continue en a ∈ I si lim_{x→a} f(x) = f(a) : ∀ε > 0, ∃δ > 0, |x − a| < δ ⟹ |f(x) − f(a)| < ε."
            },
            {
                nom: "C2 — Continuité sur I",
                enonce: "f est continue sur I si elle est continue en tout point de I."
            },
            {
                nom: "C3 — Règles",
                enonce: "Une somme, un produit, un quotient (dénominateur non nul) et une composée de fonctions continues sont continus."
            }
        ],
        conclusion: "Informellement, la courbe se trace sans lever le crayon. Les fonctions polynômes, exp, ln, √ et les fonctions trigonométriques sont continues sur leur ensemble de définition, et toute fonction dérivable est continue."
    },
    formulas: [
      {
        text: "1. lim(x→a) f(x) = f(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+1.+lim%28x%E2%86%92a%29+f%28x%29+%3D+f%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Les fonctions usuelles sont continues.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+2.+Les+fonctions+usuelles+sont+continues.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Continuité sur un intervalle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+limites+3.+Continuit%C3%A9+sur+un+intervalle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. f continue en a ⇔ lim_{x→a} f(x) = f(a)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Continuit%C3%A9%20f%20continue%20en%20a%20%E2%87%94%20lim_%7Bx%E2%86%92a%7D%20f%28x%29%20%3D%20f%28a%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Théorème des valeurs intermédiaires",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Continuit%C3%A9%20Th%C3%A9or%C3%A8me%20des%20valeurs%20interm%C3%A9diaires%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre continuité et dérivabilité.",
    details: "Elle ne présente alors aucune rupture. Cette notion s'appuie sur : limites. Par exemple, La fonction exponentielle est continue sur ℝ illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La fonction exponentielle est continue sur ℝ"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Continuité ».",
      items: [
        { file: "3-0-discontinuite.png", alt: "Continuité" },
        { file: "3-1-tvi.png", alt: "Continuité" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Continuité des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9SSEUoyHh2s",
        lang: "fr"
      },
      methode: {
        title: "Etudier la continuité d'une fonction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/03WMLyc7rLE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étude de fonctions"
      },
      {
        icon: "research",
        text: "Théorème des valeurs intermédiaires"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=V%C3%A9rifier%20la%20continuit%C3%A9%20d%E2%80%99une%20fonction%20d%C3%A9finie%20par%20morceaux.\" target=\"_blank\" rel=\"noopener noreferrer\">Vérifier la continuité d’une fonction définie par morceaux.</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20continuit%C3%A9%20de%20f%28x%29%3Dln%28x%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la continuité de f(x)=ln(x).</a>"
    ]
  },
  "ecole:90": {
    title: "Théorème de la bijection",
    definition: "Le théorème de la bijection énonce que toute fonction continue et strictement monotone sur un intervalle [a,b] réalise une bijection de [a,b] vers l'intervalle des valeurs prises, ce qui garantit l'existence et l'unicité d'une solution à f(x)=k.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ avec le théorème des valeurs intermédiaires ; f est continue sur un intervalle I.",
        axiomes: [
            {
                nom: "B1 — TVI",
                enonce: "L'image d'un intervalle par une fonction continue est un intervalle."
            },
            {
                nom: "B2 — Stricte monotonie",
                enonce: "Si f est strictement monotone, alors x ≠ y entraîne f(x) ≠ f(y) : f est injective."
            },
            {
                nom: "B3 — Réciproque",
                enonce: "Si f est bijective de I sur J, sa réciproque f⁻¹ est définie sur J."
            }
        ],
        conclusion: "Si f est continue et strictement monotone sur I, f est une bijection de I sur l'intervalle f(I) (B1 pour l'image, B2 pour l'injectivité) ; sa réciproque est continue et strictement monotone de même sens. Pour tout k de f(I), l'équation f(x) = k a donc une unique solution dans I."
    },
    formulas: [
      {
        text: "1. f continue et strictement monotone sur I → f réalise une bijection de I vers f(I).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+1.+f+continue+et+strictement+monotone+sur+I+%E2%86%92+f+r%C3%A9alise+une+bijection+de+I+vers+f%28I%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Pour tout k dans f(I), il existe un unique x ∈ I tel que f(x) = k.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+2.+Pour+tout+k+dans+f%28I%29%2C+il+existe+un+unique+x+%E2%88%88+I+tel+que+f%28x%29+%3D+k.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Ce théorème permet aussi de définir la fonction réciproque de f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+TVI+3.+Ce+th%C3%A9or%C3%A8me+permet+aussi+de+d%C3%A9finir+la+fonction+r%C3%A9ciproque+de+f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés forment les hypothèses et la conclusion d'un théorème d'existence : elles doivent être vérifiées rigoureusement avant de conclure.",
    details: "Le théorème de la bijection énonce que toute fonction continue et strictement monotone sur un intervalle [a,b] réalise une bijection de [a,b] vers l'intervalle des valeurs prises, ce qui garantit l'existence et l'unicité d'une solution à f(x)=k. Par exemple, f(x) = eˣ est continue et strictement croissante sur ℝ, bijection de ℝ vers ]0,+∞[ illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x) = eˣ est continue et strictement croissante sur ℝ, bijection de ℝ vers ]0,+∞["
      },
      {
        terme: "Exemple 2",
        definition: "f(x) = x³ est une bijection de ℝ vers ℝ"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Valeurs propres ».",
      items: [
        { file: "107-0-vecteur-propre.png", alt: "Valeurs propres" },
        { file: "107-1-polycar.png", alt: "Valeurs propres" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Continuité des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9SSEUoyHh2s",
        lang: "fr"
      },
      methode: {
        title: "Algo : Comprendre l'algorithme de dichotomie",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/V7mlMCSrq1U",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Définir rigoureusement une fonction réciproque (comme le logarithme, réciproque de l'exponentielle)"
      },
      {
        icon: "computer",
        text: "Justifier qu'un algorithme de résolution numérique trouve une unique solution"
      },
      {
        icon: "research",
        text: "Garantir l'existence et l'unicité d'un équilibre dans un système modélisé par une fonction monotone"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construction%20de%20fonctions%20r%C3%A9ciproques%20via%20le%20th%C3%A9or%C3%A8me%20de%20la%20bijection\" target=\"_blank\" rel=\"noopener noreferrer\">Construction de fonctions réciproques via le théorème de la bijection</a>",
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20la%20bijection%20et%20r%C3%A9solution%20d%27%C3%A9quations\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de la bijection et résolution d'équations</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20aux%20fonctions%20d%C3%A9finies%20sur%20des%20intervalles%20non%20born%C3%A9s\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation aux fonctions définies sur des intervalles non bornés</a>"
    ]
  },
  "ecole:91": {
    title: "Nombre dérivé",
    definition: "Le nombre dérivé d'une fonction f en un point a, noté f'(a), est la limite du taux de variation de f entre a et a+h lorsque h tend vers 0. Il représente la pente de la tangente à la courbe de f au point d'abscisse a.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "D1 — Approximation affine",
                enonce: "f est dérivable en a s'il existe un réel ℓ tel que f(a + h) = f(a) + ℓh + h·ε(h), avec ε(h) → 0 quand h → 0."
            },
            {
                nom: "D2 — Unicité",
                enonce: "Le réel ℓ, s'il existe, est unique ; on le note f'(a)."
            },
            {
                nom: "D3 — Taux d'accroissement",
                enonce: "ℓ est la limite de (f(a + h) − f(a))/h quand h → 0."
            }
        ],
        conclusion: "Le nombre dérivé f'(a) est le coefficient de la meilleure approximation affine de f près de a : f(a + h) ≈ f(a) + f'(a)h. Si deux réels ℓ et ℓ' convenaient, (ℓ − ℓ')h = h(ε'(h) − ε(h)) → 0 après division par h, donc ℓ = ℓ'. C'est le coefficient directeur de la tangente en (a ; f(a))."
    },
    formulas: [
      {
        text: "1. f'(a) = lim(h→0) [f(a+h) − f(a)]/h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+f%27%28a%29+%3D+lim%28h%E2%86%920%29+%5Bf%28a%2Bh%29+%E2%88%92+f%28a%29%5D%2Fh.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f'(a) est la pente de la tangente à la courbe en x=a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+f%27%28a%29+est+la+pente+de+la+tangente+%C3%A0+la+courbe+en+x%3Da.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. f est dérivable en a si cette limite existe et est finie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+f+est+d%C3%A9rivable+en+a+si+cette+limite+existe+et+est+finie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "Il représente la pente de la tangente à la courbe de f au point d'abscisse a. Par exemple, Pour f(x)=x², f'(2) = lim(h→0) [(2+h)²−4]/h = 4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², f'(2) = lim(h→0) [(2+h)²−4]/h = 4"
      },
      {
        terme: "Exemple 2",
        definition: "Le nombre dérivé de f(x)=3x+1 en tout point vaut 3"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Calculer le nombre dérivé (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/UmT0Gov6yyE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer une vitesse instantanée à partir d'une fonction de position en physique"
      },
      {
        icon: "finance",
        text: "Mesurer le taux de croissance instantané d'une grandeur économique"
      },
      {
        icon: "computer",
        text: "Approcher numériquement une dérivée par un taux de variation pour un petit h"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9tation%20graphique%20du%20nombre%20d%C3%A9riv%C3%A9%20%28tangente%29\" target=\"_blank\" rel=\"noopener noreferrer\">Interprétation graphique du nombre dérivé (tangente)</a>",
      "<a href=\"https://www.google.com/search?q=Passage%20du%20nombre%20d%C3%A9riv%C3%A9%20%C3%A0%20la%20fonction%20d%C3%A9riv%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Passage du nombre dérivé à la fonction dérivée</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9rivabilit%C3%A9%20et%20continuit%C3%A9%20d%27une%20fonction\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivabilité et continuité d'une fonction</a>"
    ]
  },
  "ecole:92": {
    title: "Tangente",
    definition: "La tangente à la courbe d'une fonction f en un point d'abscisse a est la droite qui approche au mieux la courbe localement en ce point. Sa pente est égale au nombre dérivé f'(a).",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "T1 — Contact",
                enonce: "La tangente à la courbe de f en A(a ; f(a)) est la droite non verticale T passant par A telle que f(x) − T(x) = (x − a)·ε(x) avec ε(x) → 0 quand x → a."
            },
            {
                nom: "T2 — Unicité",
                enonce: "Une seule droite non verticale passant par A vérifie T1 lorsque f est dérivable en a."
            }
        ],
        conclusion: "La tangente a pour équation y = f'(a)(x − a) + f(a), où f'(a) est le nombre dérivé : c'est la droite qui approche le mieux la courbe près de A. Toute autre droite passant par A s'écarte de la courbe d'un terme du même ordre que x − a."
    },
    formulas: [
      {
        text: "1. Équation de la tangente : y = f(a) + f'(a)(x − a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%C3%89quation+de+la+tangente+%3A+y+%3D+f%28a%29+%2B+f%27%28a%29%28x+%E2%88%92+a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La pente de la tangente est f'(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+La+pente+de+la+tangente+est+f%27%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La tangente passe par le point (a, f(a)).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+La+tangente+passe+par+le+point+%28a%2C+f%28a%29%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "Sa pente est égale au nombre dérivé f'(a). Par exemple, Pour f(x)=x², tangente en x=1 : y = 1 + 2(x−1) = 2x − 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², tangente en x=1 : y = 1 + 2(x−1) = 2x − 1"
      },
      {
        terme: "Exemple 2",
        definition: "Pour f(x)=√x, tangente en x=4 : y = 2 + (1/4)(x−4)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Déterminer graphiquement le nombre dérivé et l'équation de la tangente",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0jhxK55jONs",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Approcher localement une fonction complexe par une fonction affine"
      },
      {
        icon: "computer",
        text: "Utiliser la tangente pour amorcer un algorithme d'optimisation (méthode de Newton)"
      },
      {
        icon: "research",
        text: "Étudier le mouvement d'un objet en physique via la tangente à sa trajectoire"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Approximation%20affine%20d%27une%20fonction%20au%20voisinage%20d%27un%20point\" target=\"_blank\" rel=\"noopener noreferrer\">Approximation affine d'une fonction au voisinage d'un point</a>",
      "<a href=\"https://www.google.com/search?q=Tangentes%20et%20convexit%C3%A9%20%28position%20de%20la%20courbe%20par%20rapport%20%C3%A0%20la%20tangente%29\" target=\"_blank\" rel=\"noopener noreferrer\">Tangentes et convexité (position de la courbe par rapport à la tangente)</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9thode%20de%20Newton%20bas%C3%A9e%20sur%20les%20tangentes%20successives\" target=\"_blank\" rel=\"noopener noreferrer\">Méthode de Newton basée sur les tangentes successives</a>"
    ]
  },
  "ecole:93": {
    title: "Dérivée d’une constante",
    definition: "La dérivée d'une fonction constante est nulle en tout point : une fonction constante ne varie pas, donc son taux de variation est toujours nul.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Pour f(x) = c constante, le taux d'accroissement (c − c)/h = 0 pour tout h ≠ 0 : sa limite est 0 (A1). Donc (c)' = 0."
    },
    formulas: [
      {
        text: "1. Si f(x) = c (constante), alors f'(x) = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+Si+f%28x%29+%3D+c+%28constante%29%2C+alors+f%27%28x%29+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cette règle est un cas particulier de la dérivée d'une fonction puissance.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cette+r%C3%A8gle+est+un+cas+particulier+de+la+d%C3%A9riv%C3%A9e+d%27une+fonction+puissance.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Réciproquement, une fonction de dérivée nulle sur un intervalle est constante sur cet intervalle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+R%C3%A9ciproquement%2C+une+fonction+de+d%C3%A9riv%C3%A9e+nulle+sur+un+intervalle+est+constante+sur+cet+intervalle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée d'une fonction constante est nulle en tout point : une fonction constante ne varie pas, donc son taux de variation est toujours nul. Par exemple, Si f(x) = 5, alors f'(x) = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = 5, alors f'(x) = 0"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = −3, alors f'(x) = 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Identifier qu'une grandeur physique est constante à partir de sa dérivée nulle"
      },
      {
        icon: "computer",
        text: "Simplifier un calcul de dérivée en éliminant les termes constants"
      },
      {
        icon: "finance",
        text: "Reconnaître qu'un coût fixe (indépendant de la quantité produite) a une dérivée nulle"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9ciproque%20%3A%20fonction%20de%20d%C3%A9riv%C3%A9e%20nulle%20est%20constante\" target=\"_blank\" rel=\"noopener noreferrer\">Réciproque : fonction de dérivée nulle est constante</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27une%20somme%20incluant%20une%20constante\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'une somme incluant une constante</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%B4le%20de%20la%20constante%20d%27int%C3%A9gration%2C%20r%C3%A9ciproque%20de%20cette%20r%C3%A8gle\" target=\"_blank\" rel=\"noopener noreferrer\">Rôle de la constante d'intégration, réciproque de cette règle</a>"
    ]
  },
  "ecole:94": {
    title: "Dérivée de xⁿ",
    definition: "La dérivée de la fonction puissance x ↦ xⁿ (n entier) suit une règle simple : on multiplie par l'exposant puis on diminue celui-ci de 1.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            },
            {
                nom: "A4 — Formule du binôme",
                enonce: "(x + h)ⁿ = xⁿ + n·xⁿ⁻¹h + h²·(…), somme de termes en hᵏ avec k ≥ 2."
            }
        ],
        conclusion: "Pour f(x) = xⁿ (n entier ≥ 1) : (f(x + h) − f(x))/h = n·xⁿ⁻¹ + h·(…), qui tend vers n·xⁿ⁻¹ quand h → 0 (A1, A2, A4). Donc (xⁿ)' = n·xⁿ⁻¹."
    },
    formulas: [
      {
        text: "1. (xⁿ)' = n·xⁿ⁻¹, pour n entier.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28x%E2%81%BF%29%27+%3D+n%C2%B7x%E2%81%BF%E2%81%BB%C2%B9%2C+pour+n+entier.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier : (x)' = 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cas+particulier+%3A+%28x%29%27+%3D+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cas particulier : (x²)' = 2x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Cas+particulier+%3A+%28x%C2%B2%29%27+%3D+2x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée de la fonction puissance x ↦ xⁿ (n entier) suit une règle simple : on multiplie par l'exposant puis on diminue celui-ci de 1. Par exemple, (x³)' = 3x² illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(x³)' = 3x²"
      },
      {
        terme: "Exemple 2",
        definition: "(x⁵)' = 5x⁴"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Dériver un polynôme terme à terme en physique ou en économie"
      },
      {
        icon: "computer",
        text: "Implémenter la dérivation symbolique d'un polynôme dans un logiciel de calcul formel"
      },
      {
        icon: "finance",
        text: "Étudier la variation d'un coût modélisé par une fonction puissance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20de%20x%E2%81%BF%20pour%20n%20n%C3%A9gatif%20ou%20non%20entier\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée de xⁿ pour n négatif ou non entier</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27un%20polyn%C3%B4me%20complet%20%28somme%20de%20plusieurs%20x%E2%81%BF%29\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'un polynôme complet (somme de plusieurs xⁿ)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20d%C3%A9riv%C3%A9e%20de%20x%E2%81%BF%20et%20primitive%20de%20x%E2%81%BF%E2%81%BB%C2%B9\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre dérivée de xⁿ et primitive de xⁿ⁻¹</a>"
    ]
  },
  "ecole:95": {
    title: "Dérivée de 1/x",
    definition: "La fonction inverse x ↦ 1/x, définie sur ℝ*, a pour dérivée −1/x². Elle est donc décroissante sur chacun de ses deux intervalles de définition.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Pour f(x) = 1/x (x ≠ 0), le taux d'accroissement est (1/(x + h) − 1/x)/h = −1/(x(x + h)), qui tend vers −1/x² quand h → 0 (A2). Donc (1/x)' = −1/x²."
    },
    formulas: [
      {
        text: "1. (1/x)' = −1/x², pour x ≠ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%281%2Fx%29%27+%3D+%E2%88%921%2Fx%C2%B2%2C+pour+x+%E2%89%A0+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La dérivée est toujours négative : la fonction inverse est décroissante sur ]−∞,0[ et sur ]0,+∞[.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+La+d%C3%A9riv%C3%A9e+est+toujours+n%C3%A9gative+%3A+la+fonction+inverse+est+d%C3%A9croissante+sur+%5D%E2%88%92%E2%88%9E%2C0%5B+et+sur+%5D0%2C%2B%E2%88%9E%5B.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cas particulier de la dérivée de xⁿ avec n = −1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Cas+particulier+de+la+d%C3%A9riv%C3%A9e+de+x%E2%81%BF+avec+n+%3D+%E2%88%921.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "Elle est donc décroissante sur chacun de ses deux intervalles de définition. Par exemple, Pour f(x) = 1/x, f'(2) = −1/4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x) = 1/x, f'(2) = −1/4"
      },
      {
        terme: "Exemple 2",
        definition: "Pour f(x) = 1/x, f'(−1) = −1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étudier la variation d'une grandeur inversement proportionnelle (loi physique en 1/x)"
      },
      {
        icon: "computer",
        text: "Calculer la sensibilité d'un système modélisé par une fonction en 1/x"
      },
      {
        icon: "finance",
        text: "Étudier la variation du coût unitaire moyen inversement proportionnel à la quantité produite"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20%C3%A0%20la%20d%C3%A9riv%C3%A9e%20de%201/u%28x%29\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation à la dérivée de 1/u(x)</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20de%201/x%E2%81%BF%20pour%20n%20entier%20positif\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée de 1/xⁿ pour n entier positif</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20compl%C3%A8te%20de%20la%20fonction%20inverse%20%28variations%2C%20asymptotes%29\" target=\"_blank\" rel=\"noopener noreferrer\">Étude complète de la fonction inverse (variations, asymptotes)</a>"
    ]
  },
  "ecole:96": {
    title: "Dérivée de √x",
    definition: "La fonction racine carrée x ↦ √x, définie sur [0,+∞[, est dérivable sur ]0,+∞[ (mais pas en 0) et sa dérivée est 1/(2√x).",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Pour f(x) = √x (x > 0), le taux d'accroissement est (√(x + h) − √x)/h = 1/(√(x + h) + √x) (multiplication par la quantité conjuguée), qui tend vers 1/(2√x) (A2, et continuité de √). Donc (√x)' = 1/(2√x)."
    },
    formulas: [
      {
        text: "1. (√x)' = 1/(2√x), pour x > 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28%E2%88%9Ax%29%27+%3D+1%2F%282%E2%88%9Ax%29%2C+pour+x+%3E+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La fonction racine carrée n'est pas dérivable en x = 0 (tangente verticale).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+La+fonction+racine+carr%C3%A9e+n%27est+pas+d%C3%A9rivable+en+x+%3D+0+%28tangente+verticale%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La dérivée est toujours positive : la fonction racine carrée est croissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+La+d%C3%A9riv%C3%A9e+est+toujours+positive+%3A+la+fonction+racine+carr%C3%A9e+est+croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La fonction racine carrée x ↦ √x, définie sur [0,+∞[, est dérivable sur ]0,+∞[ (mais pas en 0) et sa dérivée est 1/(2√x). Par exemple, Pour f(x) = √x, f'(4) = 1/4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x) = √x, f'(4) = 1/4"
      },
      {
        terme: "Exemple 2",
        definition: "Pour f(x) = √x, f'(9) = 1/6"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étudier la variation d'une grandeur physique proportionnelle à une racine carrée (période d'un pendule)"
      },
      {
        icon: "computer",
        text: "Calculer la sensibilité d'un modèle faisant intervenir une racine carrée"
      },
      {
        icon: "research",
        text: "Analyser la vitesse de croissance d'une fonction racine, plus lente que celle d'une fonction affine"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Non-d%C3%A9rivabilit%C3%A9%20de%20la%20racine%20carr%C3%A9e%20en%200%20%28tangente%20verticale%29\" target=\"_blank\" rel=\"noopener noreferrer\">Non-dérivabilité de la racine carrée en 0 (tangente verticale)</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20%C3%A0%20la%20d%C3%A9riv%C3%A9e%20de%20%E2%88%9Au%28x%29\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation à la dérivée de √u(x)</a>",
      "<a href=\"https://www.google.com/search?q=Comparaison%20des%20vitesses%20de%20croissance%20de%20%E2%88%9Ax%20et%20x\" target=\"_blank\" rel=\"noopener noreferrer\">Comparaison des vitesses de croissance de √x et x</a>"
    ]
  },
  "ecole:97": {
    title: "Dérivée d’une somme",
    definition: "La dérivée d'une somme de deux fonctions dérivables est égale à la somme de leurs dérivées : la dérivation est une opération linéaire vis-à-vis de l'addition.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Si u et v sont dérivables en a, le taux d'accroissement de u + v est la somme des taux de u et de v : sa limite est u'(a) + v'(a) (A2). Donc (u + v)' = u' + v', et de même (λu)' = λu' : la dérivation est linéaire."
    },
    formulas: [
      {
        text: "1. (u + v)' = u' + v'.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28u+%2B+v%29%27+%3D+u%27+%2B+v%27.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cette règle se généralise à une somme de plusieurs fonctions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cette+r%C3%A8gle+se+g%C3%A9n%C3%A9ralise+%C3%A0+une+somme+de+plusieurs+fonctions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. (u − v)' = u' − v'.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+%28u+%E2%88%92+v%29%27+%3D+u%27+%E2%88%92+v%27.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée d'une somme de deux fonctions dérivables est égale à la somme de leurs dérivées : la dérivation est une opération linéaire vis-à-vis de l'addition. Par exemple, Si f(x) = x² + 3x, alors f'(x) = 2x + 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = x² + 3x, alors f'(x) = 2x + 3"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = x³ − 2x + 1, alors f'(x) = 3x² − 2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Dérivation ».",
      items: [
        { file: "4-0-derivee-def.png", alt: "Dérivation" },
        { file: "4-1-derivee-produit.png", alt: "Dérivation" },
        { file: "4-2-derivee-quotient.png", alt: "Dérivation" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver une fonction (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ehHoLK98Ht0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Dériver automatiquement un polynôme terme à terme dans un logiciel de calcul formel"
      },
      {
        icon: "research",
        text: "Décomposer une grandeur physique complexe en somme de termes plus simples à dériver séparément"
      },
      {
        icon: "finance",
        text: "Étudier séparément la variation de plusieurs composantes additives d'un coût total"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27une%20combinaison%20lin%C3%A9aire%20de%20fonctions\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'une combinaison linéaire de fonctions</a>",
      "<a href=\"https://www.google.com/search?q=Application%20de%20la%20d%C3%A9riv%C3%A9e%20de%20la%20somme%20aux%20polyn%C3%B4mes\" target=\"_blank\" rel=\"noopener noreferrer\">Application de la dérivée de la somme aux polynômes</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20lin%C3%A9arit%C3%A9%20de%20la%20d%C3%A9rivation%20et%20de%20l%27int%C3%A9gration\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre linéarité de la dérivation et de l'intégration</a>"
    ]
  },
  "ecole:98": {
    title: "Dérivée d’un produit",
    definition: "La dérivée d'un produit de deux fonctions dérivables u et v suit une règle spécifique : ce n'est pas le produit des dérivées, mais une combinaison des deux fonctions et de leurs dérivées.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Pour u et v dérivables en a : u(a + h)v(a + h) − u(a)v(a) = [u(a + h) − u(a)]v(a + h) + u(a)[v(a + h) − v(a)]. En divisant par h et en faisant tendre h vers 0, avec v(a + h) → v(a) (A3), on obtient (uv)' = u'v + uv'."
    },
    formulas: [
      {
        text: "1. (u × v)' = u'v + uv'.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28u+%C3%97+v%29%27+%3D+u%27v+%2B+uv%27.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier : (k × u)' = k × u' pour k constante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cas+particulier+%3A+%28k+%C3%97+u%29%27+%3D+k+%C3%97+u%27+pour+k+constante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette règle se généralise à un produit de plusieurs fonctions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Cette+r%C3%A8gle+se+g%C3%A9n%C3%A9ralise+%C3%A0+un+produit+de+plusieurs+fonctions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée d'un produit de deux fonctions dérivables u et v suit une règle spécifique : ce n'est pas le produit des dérivées, mais une combinaison des deux fonctions et de leurs dérivées. Par exemple, Si f(x) = x² × (x+1), alors f'(x) = 2x(x+1) + x² = 3x² + 2x illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = x² × (x+1), alors f'(x) = 2x(x+1) + x² = 3x² + 2x"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = 3x × eˣ, alors f'(x) = 3eˣ + 3xeˣ"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver une fonction (2)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/1fOGueiO_zk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Dériver un produit de deux grandeurs physiques dépendant toutes deux du temps"
      },
      {
        icon: "computer",
        text: "Implémenter la règle du produit dans un système de dérivation symbolique"
      },
      {
        icon: "finance",
        text: "Étudier la variation d'un chiffre d'affaires, produit du prix et de la quantité vendue"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20d%27un%20produit%20de%20trois%20fonctions%20ou%20plus\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée d'un produit de trois fonctions ou plus</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20r%C3%A8gle%20du%20produit%20%C3%A0%20partir%20de%20la%20d%C3%A9finition%20du%20nombre%20d%C3%A9riv%C3%A9\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la règle du produit à partir de la définition du nombre dérivé</a>",
      "<a href=\"https://www.google.com/search?q=Erreur%20fr%C3%A9quente%20%3A%20confondre%20%28uv%29%27%20avec%20u%27v%27\" target=\"_blank\" rel=\"noopener noreferrer\">Erreur fréquente : confondre (uv)' avec u'v'</a>"
    ]
  },
  "ecole:99": {
    title: "Dérivée d’un quotient",
    definition: "La dérivée d'un quotient de deux fonctions dérivables u et v (avec v non nulle) suit une règle qui combine les dérivées des deux fonctions et le carré du dénominateur.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Si v ne s'annule pas, (1/v)' = −v'/v² (comme pour 1/x, avec A2 et A3) ; en appliquant la dérivée d'un produit à u × (1/v), on obtient (u/v)' = (u'v − uv')/v²."
    },
    formulas: [
      {
        text: "1. (u/v)' = (u'v − uv')/v², pour v ≠ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28u%2Fv%29%27+%3D+%28u%27v+%E2%88%92+uv%27%29%2Fv%C2%B2%2C+pour+v+%E2%89%A0+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier : (1/v)' = −v'/v².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cas+particulier+%3A+%281%2Fv%29%27+%3D+%E2%88%92v%27%2Fv%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le dénominateur de la dérivée est toujours le carré de v.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Le+d%C3%A9nominateur+de+la+d%C3%A9riv%C3%A9e+est+toujours+le+carr%C3%A9+de+v.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée d'un quotient de deux fonctions dérivables u et v (avec v non nulle) suit une règle qui combine les dérivées des deux fonctions et le carré du dénominateur. Par exemple, Si f(x) = x/(x+1), alors f'(x) = 1/(x+1)² illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = x/(x+1), alors f'(x) = 1/(x+1)²"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = (2x+1)/x, alors f'(x) = −1/x²"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver une fonction (3)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/OMsZNNIIdrw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Dériver une fonction rapport, comme une vitesse moyenne ou une concentration"
      },
      {
        icon: "finance",
        text: "Étudier la variation d'un rendement défini comme un rapport de deux grandeurs"
      },
      {
        icon: "computer",
        text: "Implémenter la règle du quotient dans un moteur de calcul formel"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20des%20fonctions%20rationnelles%20%C3%A0%20partir%20de%20la%20d%C3%A9riv%C3%A9e%20du%20quotient\" target=\"_blank\" rel=\"noopener noreferrer\">Étude des fonctions rationnelles à partir de la dérivée du quotient</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20r%C3%A8gle%20du%20quotient%20%C3%A0%20partir%20de%20la%20r%C3%A8gle%20du%20produit\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la règle du quotient à partir de la règle du produit</a>",
      "<a href=\"https://www.google.com/search?q=Erreur%20fr%C3%A9quente%20%3A%20oublier%20le%20carr%C3%A9%20au%20d%C3%A9nominateur\" target=\"_blank\" rel=\"noopener noreferrer\">Erreur fréquente : oublier le carré au dénominateur</a>"
    ]
  },
  "ecole:100": {
    title: "Dérivée composée",
    definition: "La dérivée d'une fonction composée f∘g se calcule en multipliant la dérivée de la fonction externe (évaluée en g(x)) par la dérivée de la fonction interne.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Si u est dérivable en a et v en u(a), alors (v(u(a + h)) − v(u(a)))/h = [(v(u(a) + k) − v(u(a)))/k] × [(u(a + h) − u(a))/h] avec k = u(a + h) − u(a) → 0 (A3). Donc (v ∘ u)' = u' × (v' ∘ u)."
    },
    formulas: [
      {
        text: "1. (f∘g)'(x) = g'(x) × f'(g(x)).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28f%E2%88%98g%29%27%28x%29+%3D+g%27%28x%29+%C3%97+f%27%28g%28x%29%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Notation alternative : si y = f(u) et u = g(x), alors dy/dx = dy/du × du/dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Notation+alternative+%3A+si+y+%3D+f%28u%29+et+u+%3D+g%28x%29%2C+alors+dy%2Fdx+%3D+dy%2Fdu+%C3%97+du%2Fdx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette règle est aussi appelée règle de la chaîne.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Cette+r%C3%A8gle+est+aussi+appel%C3%A9e+r%C3%A8gle+de+la+cha%C3%AEne.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée d'une fonction composée f∘g se calcule en multipliant la dérivée de la fonction externe (évaluée en g(x)) par la dérivée de la fonction interne. Par exemple, Si f(x) = (2x+1)³, alors f'(x) = 6(2x+1)² illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = (2x+1)³, alors f'(x) = 6(2x+1)²"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = √(x²+1), f'(x) = x/√(x²+1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XAgdHblbajE",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la dérivée d'une fonction composée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/lwcFgnbs0Ew",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Dériver une grandeur physique qui dépend d'une autre grandeur elle-même variable dans le temps"
      },
      {
        icon: "computer",
        text: "Implémenter la rétropropagation du gradient en apprentissage automatique, basée sur la règle de la chaîne"
      },
      {
        icon: "finance",
        text: "Étudier la variation d'un indicateur économique défini comme fonction d'un autre indicateur variable"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9riv%C3%A9e%20compos%C3%A9e%20appliqu%C3%A9e%20%C3%A0%20exp%28u%29%20et%20ln%28u%29\" target=\"_blank\" rel=\"noopener noreferrer\">Dérivée composée appliquée à exp(u) et ln(u)</a>",
      "<a href=\"https://www.google.com/search?q=Composition%20de%20plus%20de%20deux%20fonctions\" target=\"_blank\" rel=\"noopener noreferrer\">Composition de plus de deux fonctions</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A8gle%20de%20la%20cha%C3%AEne%20et%20r%C3%A9tropropagation%20en%20apprentissage%20automatique\" target=\"_blank\" rel=\"noopener noreferrer\">Règle de la chaîne et rétropropagation en apprentissage automatique</a>"
    ]
  },
  "ecole:101": {
    title: "Dérivée de exp(u)",
    definition: "La dérivée de la composée exp(u(x)), où u est une fonction dérivable, s'obtient en appliquant la règle de dérivation composée à la fonction exponentielle, qui est sa propre dérivée.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0. On utilise que exp' = exp.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            },
            {
                nom: "A4 — Exponentielle",
                enonce: "exp est dérivable sur ℝ et exp' = exp."
            }
        ],
        conclusion: "Par la dérivée d'une composée (v = exp), (exp ∘ u)' = u' × exp(u). Donc la dérivée de eᵘ est u'eᵘ, par exemple (e^{ax})' = a·e^{ax}.",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. (exp(u))' = u' × exp(u).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28exp%28u%29%29%27+%3D+u%27+%C3%97+exp%28u%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier : (e^(ax))' = a·e^(ax).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cas+particulier+%3A+%28e%5E%28ax%29%29%27+%3D+a%C2%B7e%5E%28ax%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le signe de la dérivée dépend uniquement du signe de u', car exp(u) est toujours positif.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Le+signe+de+la+d%C3%A9riv%C3%A9e+d%C3%A9pend+uniquement+du+signe+de+u%27%2C+car+exp%28u%29+est+toujours+positif.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée de la composée exp(u(x)), où u est une fonction dérivable, s'obtient en appliquant la règle de dérivation composée à la fonction exponentielle, qui est sa propre dérivée. Par exemple, Si f(x) = e^(3x), alors f'(x) = 3e^(3x) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = e^(3x), alors f'(x) = 3e^(3x)"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = e^(x²), alors f'(x) = 2x·e^(x²)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Dérivation ».",
      items: [
        { file: "4-0-derivee-def.png", alt: "Dérivation" },
        { file: "4-1-derivee-produit.png", alt: "Dérivation" },
        { file: "4-2-derivee-quotient.png", alt: "Dérivation" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XAgdHblbajE",
        lang: "fr"
      },
      methode: {
        title: "Dériver la fonction exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XcMePHk6Ilk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modéliser et dériver une croissance ou décroissance exponentielle dépendant d'une variable composée"
      },
      {
        icon: "finance",
        text: "Calculer le taux de variation instantané d'un capital soumis à un taux d'intérêt variable dans le temps"
      },
      {
        icon: "research",
        text: "Étudier la cinétique d'une réaction chimique modélisée par une exponentielle composée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20de%20fonctions%20du%20type%20e%5E%28u%28x%29%29%20%28variations%2C%20extremums%29\" target=\"_blank\" rel=\"noopener noreferrer\">Étude de fonctions du type e^(u(x)) (variations, extremums)</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quations%20diff%C3%A9rentielles%20faisant%20intervenir%20exp%28u%29\" target=\"_blank\" rel=\"noopener noreferrer\">Équations différentielles faisant intervenir exp(u)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20les%20croissances%20compar%C3%A9es\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec les croissances comparées</a>"
    ]
  },
  "ecole:102": {
    title: "Dérivée de ln(u)",
    definition: "La dérivée de la composée ln(u(x)), où u est une fonction dérivable et strictement positive, s'obtient en divisant la dérivée de u par u elle-même.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0. On utilise que ln'(x) = 1/x pour x > 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            },
            {
                nom: "A4 — Logarithme",
                enonce: "ln est dérivable sur ]0 ; +∞[ et ln'(x) = 1/x."
            }
        ],
        conclusion: "Par la dérivée d'une composée (v = ln), pour u dérivable et strictement positive, (ln ∘ u)' = u' × (1/u) = u'/u."
    },
    formulas: [
      {
        text: "1. (ln(u))' = u'/u, pour u(x) > 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+1.+%28ln%28u%29%29%27+%3D+u%27%2Fu%2C+pour+u%28x%29+%3E+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier : (ln(x))' = 1/x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+2.+Cas+particulier+%3A+%28ln%28x%29%29%27+%3D+1%2Fx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le signe de la dérivée est celui de u'.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+d%C3%A9rivation+3.+Le+signe+de+la+d%C3%A9riv%C3%A9e+est+celui+de+u%27.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Chaque règle donne directement la dérivée d'un type d'expression : on les combine pour dériver des fonctions plus complexes.",
    details: "La dérivée de la composée ln(u(x)), où u est une fonction dérivable et strictement positive, s'obtient en divisant la dérivée de u par u elle-même. Par exemple, Si f(x) = ln(2x+1), alors f'(x) = 2/(2x+1) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x) = ln(2x+1), alors f'(x) = 2/(2x+1)"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) = ln(x²+1), alors f'(x) = 2x/(x²+1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Dériver une fonction logarithme du type ln(u)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-zrhBc9xdRs",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étudier la variation d'une grandeur définie via un logarithme composé, comme en acoustique ou en chimie"
      },
      {
        icon: "finance",
        text: "Calculer un taux de croissance instantané à partir d'une formule logarithmique composée"
      },
      {
        icon: "computer",
        text: "Dériver une fonction de coût logarithmique dans un algorithme d'apprentissage automatique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20de%20fonctions%20du%20type%20ln%28u%28x%29%29%20%28domaine%2C%20variations%29\" target=\"_blank\" rel=\"noopener noreferrer\">Étude de fonctions du type ln(u(x)) (domaine, variations)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20d%C3%A9riv%C3%A9e%20de%20ln%28u%29%20et%20d%C3%A9riv%C3%A9e%20logarithmique%20u%27/u\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre dérivée de ln(u) et dérivée logarithmique u'/u</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20en%20calcul%20de%20vraisemblance%20%28statistique%29\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation en calcul de vraisemblance (statistique)</a>"
    ]
  },
  "ecole:103": {
    title: "Signe de la dérivée",
    definition: "Le signe de la dérivée d'une fonction sur un intervalle renseigne directement sur son sens de variation : dérivée positive signifie fonction croissante, dérivée négative signifie fonction décroissante.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Accroissements finis",
                enonce: "Si f est continue sur [a ; b] et dérivable sur ]a ; b[, il existe c ∈ ]a ; b[ tel que f(b) − f(a) = f'(c)(b − a)."
            },
            {
                nom: "A2 — Définition",
                enonce: "f'(x) est la limite du taux d'accroissement de f en x."
            }
        ],
        conclusion: "Sur un intervalle I, f' ≥ 0 si et seulement si f est croissante : (⟹) pour x < y, f(y) − f(x) = f'(c)(y − x) ≥ 0 par A1 ; (⟸) les taux d'accroissement sont ≥ 0, donc leur limite aussi. De même f' ≤ 0 ⟺ f décroissante, et f' = 0 ⟺ f constante. Si f' > 0 (sauf en des points isolés), f est strictement croissante."
    },
    formulas: [
      {
        text: "1. Si f'(x) > 0 sur I, alors f est strictement croissante sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+1.+Si+f%27%28x%29+%3E+0+sur+I%2C+alors+f+est+strictement+croissante+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si f'(x) < 0 sur I, alors f est strictement décroissante sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+2.+Si+f%27%28x%29+%3C+0+sur+I%2C+alors+f+est+strictement+d%C3%A9croissante+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si f'(x) = 0 sur I, alors f est constante sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+3.+Si+f%27%28x%29+%3D+0+sur+I%2C+alors+f+est+constante+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient le signe de la dérivée (ou de la dérivée seconde) au comportement de la fonction : elles s'appliquent en dressant un tableau de signes.",
    details: "Le signe de la dérivée d'une fonction sur un intervalle renseigne directement sur son sens de variation : dérivée positive signifie fonction croissante, dérivée négative signifie fonction décroissante. Par exemple, Pour f(x)=x²−4x+3, f'(x)=2x−4, positive pour x>2 → f croissante sur [2,+∞[ illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x²−4x+3, f'(x)=2x−4, positive pour x>2 → f croissante sur [2,+∞["
      },
      {
        terme: "Exemple 2",
        definition: "Pour f(x)=−x²+1, f'(x)=−2x, négative pour x>0 → f décroissante sur [0,+∞["
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Comprendre \"signe de la dérivée ↔ variations\"",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dPIlTNyBCiw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Déterminer les phases de croissance ou de décroissance d'un phénomène physique à partir de sa dérivée"
      },
      {
        icon: "finance",
        text: "Identifier les périodes de hausse ou de baisse d'un indicateur économique modélisé par une fonction"
      },
      {
        icon: "computer",
        text: "Construire automatiquement un tableau de variations à partir du signe de la dérivée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construction%20compl%C3%A8te%20d%27un%20tableau%20de%20variations\" target=\"_blank\" rel=\"noopener noreferrer\">Construction complète d'un tableau de variations</a>",
      "<a href=\"https://www.google.com/search?q=Signe%20de%20la%20d%C3%A9riv%C3%A9e%20et%20recherche%20d%27extremums\" target=\"_blank\" rel=\"noopener noreferrer\">Signe de la dérivée et recherche d'extremums</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20du%20signe%20d%27une%20d%C3%A9riv%C3%A9e%20complexe%20%28factorisation%2C%20discriminant%29\" target=\"_blank\" rel=\"noopener noreferrer\">Étude du signe d'une dérivée complexe (factorisation, discriminant)</a>"
    ]
  },
  "ecole:104": {
    title: "Extrema locaux",
    definition: "Un extremum local (maximum ou minimum) d'une fonction est une valeur où la fonction change de sens de variation. En un extremum local intérieur à l'intervalle d'étude, la dérivée s'annule et change de signe.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "E1 — Extremum local",
                enonce: "f admet un maximum local en a s'il existe un intervalle ouvert J contenant a tel que f(x) ≤ f(a) pour tout x de J (minimum local : f(x) ≥ f(a))."
            },
            {
                nom: "E2 — Fermat",
                enonce: "Si f admet un extremum local en un point intérieur a où f est dérivable, alors f'(a) = 0."
            },
            {
                nom: "E3 — Changement de signe",
                enonce: "Si f' s'annule en a en changeant de signe, f est monotone de sens contraire de part et d'autre de a."
            }
        ],
        conclusion: "Preuve de E2 (maximum) : le taux (f(a + h) − f(a))/h est ≤ 0 pour h > 0 et ≥ 0 pour h < 0 ; sa limite est donc à la fois ≤ 0 et ≥ 0, donc nulle. La condition f'(a) = 0 n'est pas suffisante (f(x) = x³ en 0) ; f' change de signe en a si et seulement si f a un extremum local en a (E3)."
    },
    formulas: [
      {
        text: "1. Si f'(a) = 0 et f' change de signe en a, alors f admet un extremum local en a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+1.+Si+f%27%28a%29+%3D+0+et+f%27+change+de+signe+en+a%2C+alors+f+admet+un+extremum+local+en+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Maximum local : f' passe de positif à négatif.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+2.+Maximum+local+%3A+f%27+passe+de+positif+%C3%A0+n%C3%A9gatif.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Minimum local : f' passe de négatif à positif.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+3.+Minimum+local+%3A+f%27+passe+de+n%C3%A9gatif+%C3%A0+positif.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient le signe de la dérivée (ou de la dérivée seconde) au comportement de la fonction : elles s'appliquent en dressant un tableau de signes.",
    details: "En un extremum local intérieur à l'intervalle d'étude, la dérivée s'annule et change de signe. Par exemple, Pour f(x)=x³−3x, f'(x)=3x²−3=0 en x=±1 ; f admet un maximum local en x=−1 et un minimum local en x=1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x³−3x, f'(x)=3x²−3=0 en x=±1 ; f admet un maximum local en x=−1 et un minimum local en x=1"
      },
      {
        terme: "Exemple 2",
        definition: "Pour f(x)=−x²+4x, f'(x)=−2x+4=0 en x=2, maximum local en x=2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Déterminer un extremum",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zxyKLqnlMIk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Trouver la valeur optimale (maximale ou minimale) d'une grandeur physique modélisée par une fonction"
      },
      {
        icon: "finance",
        text: "Déterminer la quantité produite qui maximise le bénéfice ou minimise le coût"
      },
      {
        icon: "computer",
        text: "Implémenter un algorithme de recherche d'extremum basé sur l'annulation de la dérivée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Distinction%20entre%20extremum%20local%20et%20extremum%20global\" target=\"_blank\" rel=\"noopener noreferrer\">Distinction entre extremum local et extremum global</a>",
      "<a href=\"https://www.google.com/search?q=Extrema%20aux%20bornes%20d%27un%20intervalle%20ferm%C3%A9\" target=\"_blank\" rel=\"noopener noreferrer\">Extrema aux bornes d'un intervalle fermé</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20de%20la%20d%C3%A9riv%C3%A9e%20seconde%20pour%20caract%C3%A9riser%20un%20extremum\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation de la dérivée seconde pour caractériser un extremum</a>"
    ]
  },
  "ecole:105": {
    title: "Convexité",
    definition: "Une fonction est convexe sur un intervalle si sa courbe est toujours située au-dessus de chacune de ses tangentes ; elle est concave si sa courbe est toujours en dessous. La convexité se caractérise par le signe de la dérivée seconde.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ ; f est définie sur un intervalle I.",
        axiomes: [
            {
                nom: "C1 — Cordes",
                enonce: "f est convexe sur I si, pour tous x, y de I et tout t ∈ [0 ; 1], f(tx + (1 − t)y) ≤ t·f(x) + (1 − t)·f(y) : la courbe est sous ses cordes."
            },
            {
                nom: "C2 — Concavité",
                enonce: "f est concave si −f est convexe : la courbe est au-dessus de ses cordes."
            }
        ],
        conclusion: "Pour f dérivable sur I, f est convexe si et seulement si sa courbe est au-dessus de chacune de ses tangentes, si et seulement si f' est croissante ; si f est deux fois dérivable, si et seulement si f'' ≥ 0. Un point d'inflexion est un point où la convexité change : f'' s'annule en changeant de signe."
    },
    formulas: [
      {
        text: "1. f''(x) > 0 sur I → f convexe sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+1.+f%27%27%28x%29+%3E+0+sur+I+%E2%86%92+f+convexe+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f''(x) < 0 sur I → f concave sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+2.+f%27%27%28x%29+%3C+0+sur+I+%E2%86%92+f+concave+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Un point où f'' s'annule en changeant de signe est un point d'inflexion.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+d%C3%A9rivation+avanc%C3%A9e+3.+Un+point+o%C3%B9+f%27%27+s%27annule+en+changeant+de+signe+est+un+point+d%27inflexion.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient le signe de la dérivée (ou de la dérivée seconde) au comportement de la fonction : elles s'appliquent en dressant un tableau de signes.",
    details: "La convexité se caractérise par le signe de la dérivée seconde. Par exemple, f(x) = x², f''(x) = 2 > 0 → f convexe sur ℝ illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x) = x², f''(x) = 2 > 0 → f convexe sur ℝ"
      },
      {
        terme: "Exemple 2",
        definition: "f(x) = x³, f''(x) = 6x, s'annule et change de signe en x=0 → point d'inflexion en 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Convexité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gge4xdn6cFA",
        lang: "fr"
      },
      methode: {
        title: "Etudier la convexité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/8H2aYKN8NGE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Étudier la convexité d'une fonction de coût pour garantir l'existence d'un minimum unique"
      },
      {
        icon: "research",
        text: "Analyser la courbure d'une trajectoire ou d'un profil en physique et en ingénierie"
      },
      {
        icon: "computer",
        text: "Vérifier la convexité d'une fonction avant d'appliquer un algorithme d'optimisation convexe"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Points%20d%27inflexion%20et%20changement%20de%20convexit%C3%A9\" target=\"_blank\" rel=\"noopener noreferrer\">Points d'inflexion et changement de convexité</a>",
      "<a href=\"https://www.google.com/search?q=Convexit%C3%A9%20et%20position%20de%20la%20courbe%20par%20rapport%20%C3%A0%20ses%20tangentes\" target=\"_blank\" rel=\"noopener noreferrer\">Convexité et position de la courbe par rapport à ses tangentes</a>",
      "<a href=\"https://www.google.com/search?q=Convexit%C3%A9%20en%20optimisation%20%28fonctions%20convexes%20et%20minimum%20global%29\" target=\"_blank\" rel=\"noopener noreferrer\">Convexité en optimisation (fonctions convexes et minimum global)</a>"
    ]
  },
  "ecole:106": {
    title: "Primitive",
    definition: "Une primitive d'une fonction f sur un intervalle est une fonction F dérivable telle que F' = f. Trouver une primitive, c'est faire l'opération inverse de la dérivation.",
    definition_axiomatique: {
        cadre: "On considère une fonction f continue sur un intervalle I.",
        axiomes: [
            {
                nom: "P1 — Primitive",
                enonce: "Une primitive de f sur I est une fonction F dérivable sur I telle que F' = f."
            },
            {
                nom: "P2 — Unicité à constante près",
                enonce: "Deux primitives de f sur I diffèrent d'une constante (leur différence a une dérivée nulle sur un intervalle)."
            },
            {
                nom: "P3 — Existence",
                enonce: "Si f est continue, x ↦ ∫ₐˣ f(t)dt est une primitive de f."
            }
        ],
        conclusion: "Toute fonction continue sur un intervalle admet des primitives, toutes de la forme F + C avec C constante. Une seule primitive prend la valeur y₀ en x₀ : F(x) + y₀ − F(x₀)."
    },
    formulas: [
      {
        text: "1. F est une primitive de f sur I si F' = f sur I.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+F+est+une+primitive+de+f+sur+I+si+F%27+%3D+f+sur+I.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si F est une primitive de f, alors F + C (C constante) en est une autre.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Si+F+est+une+primitive+de+f%2C+alors+F+%2B+C+%28C+constante%29+en+est+une+autre.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Toutes les primitives de f diffèrent d'une constante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Toutes+les+primitives+de+f+diff%C3%A8rent+d%27une+constante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "Trouver une primitive, c'est faire l'opération inverse de la dérivation. Par exemple, Une primitive de f(x)=2x est F(x)=x² illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Une primitive de f(x)=2x est F(x)=x²"
      },
      {
        terme: "Exemple 2",
        definition: "Une primitive de f(x)=1 est F(x)=x"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Dérivation ».",
      items: [
        { file: "4-0-derivee-def.png", alt: "Dérivation" },
        { file: "4-1-derivee-produit.png", alt: "Dérivation" },
        { file: "4-2-derivee-quotient.png", alt: "Dérivation" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Primitives : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/bQ-eS1zZCdw",
        lang: "fr"
      },
      methode: {
        title: "Vérifier si une fonction est une primitive d'une autre",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7tQqY9Vkmss",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Retrouver une position à partir d'une vitesse, ou une vitesse à partir d'une accélération, en physique"
      },
      {
        icon: "finance",
        text: "Retrouver un coût total à partir d'un coût marginal"
      },
      {
        icon: "computer",
        text: "Calculer une intégrale numérique en s'appuyant sur une primitive connue"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Primitives%20usuelles%20%C3%A0%20conna%C3%AEtre\" target=\"_blank\" rel=\"noopener noreferrer\">Primitives usuelles à connaître</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20primitive%20et%20int%C3%A9grale%20d%C3%A9finie\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre primitive et intégrale définie</a>",
      "<a href=\"https://www.google.com/search?q=Recherche%20de%20la%20primitive%20v%C3%A9rifiant%20une%20condition%20initiale%20donn%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Recherche de la primitive vérifiant une condition initiale donnée</a>"
    ]
  },
  "ecole:107": {
    title: "Primitives usuelles",
    definition: "Les primitives usuelles sont les primitives des fonctions de référence (puissances, exponentielle, inverse...), qu'il est indispensable de connaître pour calculer des intégrales rapidement.",
    definition_axiomatique: {
        cadre: "On lit à l'envers le tableau des dérivées usuelles : F est une primitive de f si F' = f.",
        axiomes: [
            {
                nom: "P1 — Primitive",
                enonce: "F est une primitive de f sur I si F' = f."
            },
            {
                nom: "P2 — Linéarité",
                enonce: "Si F et G sont des primitives de f et g, alors αF + βG est une primitive de αf + βg."
            },
            {
                nom: "P3 — Dérivées usuelles",
                enonce: "(xⁿ⁺¹/(n + 1))' = xⁿ, (ln x)' = 1/x, (eˣ)' = eˣ, (sin x)' = cos x, (−cos x)' = sin x."
            }
        ],
        conclusion: "Les primitives usuelles sont, à une constante près : xⁿ → xⁿ⁺¹/(n + 1) (n ≠ −1), 1/x → ln x sur ]0 ; +∞[ (ln|x| sur chaque intervalle), eˣ → eˣ, cos → sin, sin → −cos ; plus généralement u'uⁿ → uⁿ⁺¹/(n + 1), u'/u → ln|u|, u'eᵘ → eᵘ. Chacune se vérifie en dérivant."
    },
    formulas: [
      {
        text: "1. Primitive de xⁿ (n≠−1) : xⁿ⁺¹/(n+1) + C.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+Primitive+de+x%E2%81%BF+%28n%E2%89%A0%E2%88%921%29+%3A+x%E2%81%BF%E2%81%BA%C2%B9%2F%28n%2B1%29+%2B+C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Primitive de eˣ : eˣ + C.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Primitive+de+e%CB%A3+%3A+e%CB%A3+%2B+C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Primitive de 1/x (x>0) : ln(x) + C.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Primitive+de+1%2Fx+%28x%3E0%29+%3A+ln%28x%29+%2B+C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Primitive de u'eᵘ : eᵘ + C ; primitive de u'/u : ln|u| + C.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+4.+Primitive+de+u%27e%E1%B5%98+%3A+e%E1%B5%98+%2B+C+%3B+primitive+de+u%27%2Fu+%3A+ln%7Cu%7C+%2B+C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "Les primitives usuelles sont les primitives des fonctions de référence (puissances, exponentielle, inverse...), qu'il est indispensable de connaître pour calculer des intégrales rapidement. Par exemple, Une primitive de x² est x³/3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Une primitive de x² est x³/3"
      },
      {
        terme: "Exemple 2",
        definition: "Une primitive de 1/x sur ]0,+∞[ est ln(x)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions spéciales (Gamma, Bêta, Zêta) ».",
      items: [
        { file: "24-0-gamma.png", alt: "Fonctions spéciales (Gamma, Bêta, Zêta)" },
        { file: "24-1-gamma-factorielle.png", alt: "Fonctions spéciales (Gamma, Bêta, Zêta)" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Primitives : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/bQ-eS1zZCdw",
        lang: "fr"
      },
      methode: {
        title: "Calculer LA primitive d'une fonction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-q9M7oJ9gkI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Constituer une bibliothèque de primitives usuelles dans un logiciel de calcul formel"
      },
      {
        icon: "research",
        text: "Calculer rapidement une intégrale physique en reconnaissant une forme usuelle"
      },
      {
        icon: "finance",
        text: "Retrouver une fonction de coût total à partir d'une fonction de coût marginal usuelle"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Primitives%20de%20fonctions%20compos%C3%A9es%20%28u%27e%E1%B5%98%2C%20u%27/u%2C%20u%27u%E2%81%BF%29\" target=\"_blank\" rel=\"noopener noreferrer\">Primitives de fonctions composées (u'eᵘ, u'/u, u'uⁿ)</a>",
      "<a href=\"https://www.google.com/search?q=Tableau%20complet%20des%20primitives%20usuelles\" target=\"_blank\" rel=\"noopener noreferrer\">Tableau complet des primitives usuelles</a>",
      "<a href=\"https://www.google.com/search?q=Recherche%20de%20primitive%20par%20changement%20de%20variable\" target=\"_blank\" rel=\"noopener noreferrer\">Recherche de primitive par changement de variable</a>"
    ]
  },
  "ecole:108": {
    title: "Intégrale",
    definition: "L'intégrale d'une fonction continue f sur un intervalle [a,b], notée ∫ₐᵇ f(x)dx, représente l'aire algébrique comprise entre la courbe de f, l'axe des abscisses et les droites x=a et x=b.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel.",
        axiomes: [
            {
                nom: "I1 — Linéarité",
                enonce: "∫ₐᵇ (αf + βg) = α∫ₐᵇ f + β∫ₐᵇ g."
            },
            {
                nom: "I2 — Positivité",
                enonce: "Si f ≥ 0 sur [a ; b], alors ∫ₐᵇ f ≥ 0."
            },
            {
                nom: "I3 — Chasles",
                enonce: "Pour a ≤ c ≤ b, l'intégrale de f sur [a ; b] est la somme de son intégrale sur [a ; c] et de son intégrale sur [c ; b]."
            },
            {
                nom: "I4 — Normalisation",
                enonce: "∫ₐᵇ 1 dx = b − a."
            }
        ],
        conclusion: "Ces quatre axiomes déterminent l'intégrale de toute fonction continue : si m ≤ f ≤ M sur [c ; d], alors l'intégrale de f sur [c ; d] est comprise entre m(d − c) et M(d − c) (I2, I4) ; en découpant [a ; b] (I3), ∫ₐᵇ f est coincée entre les sommes de Riemann inférieures et supérieures, qui ont la même limite pour f continue. On a ∫ₐᵇ f = F(b) − F(a) pour toute primitive F de f (théorème fondamental)."
    },
    formulas: [
      {
        text: "1. ∫ₐᵇ f(x)dx = F(b) − F(a), où F est une primitive de f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%3D+F%28b%29+%E2%88%92+F%28a%29%2C+o%C3%B9+F+est+une+primitive+de+f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si f ≥ 0 sur [a,b], l'intégrale est l'aire sous la courbe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Si+f+%E2%89%A5+0+sur+%5Ba%2Cb%5D%2C+l%27int%C3%A9grale+est+l%27aire+sous+la+courbe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si f ≤ 0 sur [a,b], l'intégrale est l'opposé de l'aire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Si+f+%E2%89%A4+0+sur+%5Ba%2Cb%5D%2C+l%27int%C3%A9grale+est+l%27oppos%C3%A9+de+l%27aire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "L'intégrale d'une fonction continue f sur un intervalle [a,b], notée ∫ₐᵇ f(x)dx, représente l'aire algébrique comprise entre la courbe de f, l'axe des abscisses et les droites x=a et x=b. Par exemple, ∫₀¹ x² dx = [x³/3]₀¹ = 1/3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3"
      },
      {
        terme: "Exemple 2",
        definition: "∫₀² 3 dx = [3x]₀² = 6"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale par calculs d'aire (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/jkxNKkmEXZA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer un travail, une distance parcourue ou une quantité totale à partir d'une fonction en physique"
      },
      {
        icon: "finance",
        text: "Calculer un profit total ou un coût total cumulé sur une période"
      },
      {
        icon: "computer",
        text: "Approcher numériquement une intégrale lorsque le calcul exact est trop complexe"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calcul%20d%27int%C3%A9grales%20%C3%A0%20l%27aide%20d%27une%20primitive\" target=\"_blank\" rel=\"noopener noreferrer\">Calcul d'intégrales à l'aide d'une primitive</a>",
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20de%20l%27int%C3%A9grale%20%28lin%C3%A9arit%C3%A9%2C%20relation%20de%20Chasles%29\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés de l'intégrale (linéarité, relation de Chasles)</a>",
      "<a href=\"https://www.google.com/search?q=Int%C3%A9grales%20et%20calcul%20d%27aires%20entre%20deux%20courbes\" target=\"_blank\" rel=\"noopener noreferrer\">Intégrales et calcul d'aires entre deux courbes</a>"
    ]
  },
  "ecole:109": {
    title: "Aire sous la courbe",
    definition: "L'aire sous la courbe d'une fonction positive f, entre les droites x=a et x=b et l'axe des abscisses, est donnée par l'intégrale de f entre a et b.",
    definition_axiomatique: {
        cadre: "On travaille avec les axiomes de l'aire et une fonction f continue et positive sur [a ; b] ; 𝒟 est le domaine compris entre la courbe, l'axe des abscisses et les droites x = a et x = b.",
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
                enonce: "Si une figure est contenue dans une autre, son aire est inférieure ou égale."
            }
        ],
        conclusion: "Les rectangles inscrits sous la courbe ont une aire totale inférieure à celle de 𝒟 (A3, A4) et les rectangles circonscrits une aire totale supérieure. Ces deux encadrements ont la même limite pour f continue : c'est ∫ₐᵇ f, exprimée en unités d'aire (aire du carré unité dans le repère). Donc aire(𝒟) = ∫ₐᵇ f(x)dx.",
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
        text: "1. Si f ≥ 0 sur [a,b], aire = ∫ₐᵇ f(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+Si+f+%E2%89%A5+0+sur+%5Ba%2Cb%5D%2C+aire+%3D+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L'unité d'aire correspond au rectangle formé par les unités des deux axes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+L%27unit%C3%A9+d%27aire+correspond+au+rectangle+form%C3%A9+par+les+unit%C3%A9s+des+deux+axes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Pour une fonction changeant de signe, il faut découper l'intervalle et prendre la valeur absolue sur les parties négatives.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Pour+une+fonction+changeant+de+signe%2C+il+faut+d%C3%A9couper+l%27intervalle+et+prendre+la+valeur+absolue+sur+les+parties+n%C3%A9gatives.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "L'aire sous la courbe d'une fonction positive f, entre les droites x=a et x=b et l'axe des abscisses, est donnée par l'intégrale de f entre a et b. Par exemple, Aire sous la courbe de f(x)=x entre 0 et 2 : ∫₀² x dx = 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Aire sous la courbe de f(x)=x entre 0 et 2 : ∫₀² x dx = 2"
      },
      {
        terme: "Exemple 2",
        definition: "Aire sous la courbe de f(x)=x² entre 0 et 1 : 1/3 unité d'aire"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale par calculs d'aire (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/jkxNKkmEXZA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer l'aire d'une surface irrégulière délimitée par une courbe, en physique ou en ingénierie"
      },
      {
        icon: "finance",
        text: "Représenter graphiquement et calculer un gain cumulé comme aire sous une courbe de rendement"
      },
      {
        icon: "computer",
        text: "Approcher une aire complexe par la méthode des rectangles ou des trapèzes"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Aire%20entre%20deux%20courbes\" target=\"_blank\" rel=\"noopener noreferrer\">Aire entre deux courbes</a>",
      "<a href=\"https://www.google.com/search?q=Calcul%20d%27aire%20lorsque%20la%20fonction%20change%20de%20signe\" target=\"_blank\" rel=\"noopener noreferrer\">Calcul d'aire lorsque la fonction change de signe</a>",
      "<a href=\"https://www.google.com/search?q=Approximation%20num%C3%A9rique%20d%27une%20aire%20%28m%C3%A9thode%20des%20rectangles%2C%20des%20trap%C3%A8zes%29\" target=\"_blank\" rel=\"noopener noreferrer\">Approximation numérique d'une aire (méthode des rectangles, des trapèzes)</a>"
    ]
  },
  "ecole:110": {
    title: "Linéarité",
    definition: "La linéarité de l'intégrale signifie que l'intégrale d'une somme de fonctions est la somme des intégrales, et que l'on peut sortir une constante multiplicative de l'intégrale.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel. L'intégrale vérifie les axiomes I1 à I4.",
        axiomes: [
            {
                nom: "L1 — Additivité",
                enonce: "∫ₐᵇ (f + g) = ∫ₐᵇ f + ∫ₐᵇ g."
            },
            {
                nom: "L2 — Homogénéité",
                enonce: "∫ₐᵇ (λf) = λ∫ₐᵇ f pour tout réel λ."
            }
        ],
        conclusion: "La linéarité ∫ₐᵇ (αf + βg) = α∫ₐᵇ f + β∫ₐᵇ g se vérifie sur les sommes de Riemann (linéaires) et passe à la limite ; elle résulte aussi du calcul par primitives : si F et G sont des primitives de f et g, αF + βG en est une de αf + βg. On en déduit ∫(f − g) = ∫f − ∫g."
    },
    formulas: [
      {
        text: "1. ∫ₐᵇ [f(x)+g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+%E2%88%AB%E2%82%90%E1%B5%87+%5Bf%28x%29%2Bg%28x%29%5Ddx+%3D+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%2B+%E2%88%AB%E2%82%90%E1%B5%87+g%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ∫ₐᵇ k·f(x)dx = k·∫ₐᵇ f(x)dx, pour k constante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+%E2%88%AB%E2%82%90%E1%B5%87+k%C2%B7f%28x%29dx+%3D+k%C2%B7%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx%2C+pour+k+constante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Ces deux propriétés se combinent.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Ces+deux+propri%C3%A9t%C3%A9s+se+combinent.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "La linéarité de l'intégrale signifie que l'intégrale d'une somme de fonctions est la somme des intégrales, et que l'on peut sortir une constante multiplicative de l'intégrale. Par exemple, ∫₀¹ (x²+x)dx = 1/3 + 1/2 = 5/6 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "∫₀¹ (x²+x)dx = 1/3 + 1/2 = 5/6"
      },
      {
        terme: "Exemple 2",
        definition: "∫₀¹ 3x²dx = 3×1/3 = 1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions spéciales (Gamma, Bêta, Zêta) ».",
      items: [
        { file: "24-0-gamma.png", alt: "Fonctions spéciales (Gamma, Bêta, Zêta)" },
        { file: "24-1-gamma-factorielle.png", alt: "Fonctions spéciales (Gamma, Bêta, Zêta)" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale à l'aide des formules de linéarité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/B9n_AArwjKw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Décomposer le calcul d'une intégrale complexe en somme d'intégrales plus simples"
      },
      {
        icon: "research",
        text: "Calculer séparément la contribution de plusieurs sources dans une grandeur physique intégrée"
      },
      {
        icon: "finance",
        text: "Décomposer un profit total en somme de contributions de plusieurs activités"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Application%20de%20la%20lin%C3%A9arit%C3%A9%20au%20calcul%20d%27int%C3%A9grales%20de%20polyn%C3%B4mes\" target=\"_blank\" rel=\"noopener noreferrer\">Application de la linéarité au calcul d'intégrales de polynômes</a>",
      "<a href=\"https://www.google.com/search?q=Lin%C3%A9arit%C3%A9%20combin%C3%A9e%20avec%20la%20relation%20de%20Chasles\" target=\"_blank\" rel=\"noopener noreferrer\">Linéarité combinée avec la relation de Chasles</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20lin%C3%A9arit%C3%A9%20de%20l%27int%C3%A9grale%20et%20de%20la%20d%C3%A9rivation\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre linéarité de l'intégrale et de la dérivation</a>"
    ]
  },
  "ecole:111": {
    title: "Chasles",
    definition: "La relation de Chasles pour les intégrales permet de découper le calcul d'une intégrale sur un intervalle en la somme des intégrales sur des sous-intervalles consécutifs.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel.",
        axiomes: [
            {
                nom: "C1 — Additivité des intervalles",
                enonce: "Pour a ≤ c ≤ b, l'intégrale de f sur [a ; b] est la somme de son intégrale sur [a ; c] et de son intégrale sur [c ; b]."
            },
            {
                nom: "C2 — Conventions",
                enonce: "∫ₐᵃ f = 0 et ∫ᵇₐ f = −∫ₐᵇ f."
            }
        ],
        conclusion: "La relation de Chasles reste vraie pour tous réels a, b, c d'un intervalle où f est continue (C2) : intégrer de a à b revient à intégrer de a à c, puis de c à b. Elle correspond à l'additivité de l'aire, et permet de découper un intervalle pour intégrer des fonctions continues par morceaux."
    },
    formulas: [
      {
        text: "1. ∫ₐᵇ f(x)dx + ∫ᵦᶜ f(x)dx = ∫ₐᶜ f(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%2B+%E2%88%AB%E1%B5%A6%E1%B6%9C+f%28x%29dx+%3D+%E2%88%AB%E2%82%90%E1%B6%9C+f%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ∫ₐᵃ f(x)dx = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+%E2%88%AB%E2%82%90%E1%B5%83+f%28x%29dx+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. ∫ₐᵇ f(x)dx = −∫ᵦᵃ f(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%3D+%E2%88%92%E2%88%AB%E1%B5%A6%E1%B5%83+f%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "La relation de Chasles pour les intégrales permet de découper le calcul d'une intégrale sur un intervalle en la somme des intégrales sur des sous-intervalles consécutifs. Par exemple, ∫₀¹ f(x)dx + ∫₁³ f(x)dx = ∫₀³ f(x)dx illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "∫₀¹ f(x)dx + ∫₁³ f(x)dx = ∫₀³ f(x)dx"
      },
      {
        terme: "Exemple 2",
        definition: "∫₂⁵ f(x)dx = −∫₅² f(x)dx"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Z3vKJJE57Uw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Découper le calcul d'une intégrale sur un domaine complexe en sous-intervalles plus simples"
      },
      {
        icon: "research",
        text: "Additionner des contributions physiques mesurées sur des intervalles de temps successifs"
      },
      {
        icon: "research",
        text: "Calculer une aire découpée en plusieurs morceaux par une fonction changeant de signe"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Utilisation%20de%20Chasles%20pour%20int%C3%A9grer%20une%20fonction%20d%C3%A9finie%20par%20morceaux\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation de Chasles pour intégrer une fonction définie par morceaux</a>",
      "<a href=\"https://www.google.com/search?q=Chasles%20combin%C3%A9e%20%C3%A0%20la%20lin%C3%A9arit%C3%A9%20de%20l%27int%C3%A9grale\" target=\"_blank\" rel=\"noopener noreferrer\">Chasles combinée à la linéarité de l'intégrale</a>",
      "<a href=\"https://www.google.com/search?q=Chasles%20et%20calcul%20d%27aires%20entre%20plusieurs%20bornes\" target=\"_blank\" rel=\"noopener noreferrer\">Chasles et calcul d'aires entre plusieurs bornes</a>"
    ]
  },
  "ecole:112": {
    title: "Comparaison",
    definition: "Le théorème de comparaison des intégrales stipule que si une fonction est inférieure à une autre sur un intervalle, alors son intégrale sur cet intervalle est elle aussi inférieure.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel. L'intégrale vérifie la linéarité et la positivité.",
        axiomes: [
            {
                nom: "I1 — Linéarité",
                enonce: "∫ₐᵇ (f − g) = ∫ₐᵇ f − ∫ₐᵇ g."
            },
            {
                nom: "I2 — Positivité",
                enonce: "Si h ≥ 0 sur [a ; b], alors ∫ₐᵇ h ≥ 0."
            }
        ],
        conclusion: "Si a ≤ b et f ≤ g sur [a ; b], alors g − f ≥ 0, donc ∫ₐᵇ (g − f) ≥ 0 (I2), soit ∫ₐᵇ f ≤ ∫ₐᵇ g (I1). Conséquences : |∫ₐᵇ f| ≤ ∫ₐᵇ |f| ; et si f est continue, positive et d'intégrale nulle, alors f = 0."
    },
    formulas: [
      {
        text: "1. Si f(x) ≤ g(x) sur [a,b], alors ∫ₐᵇ f(x)dx ≤ ∫ₐᵇ g(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+Si+f%28x%29+%E2%89%A4+g%28x%29+sur+%5Ba%2Cb%5D%2C+alors+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%E2%89%A4+%E2%88%AB%E2%82%90%E1%B5%87+g%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si f(x) ≥ 0 sur [a,b], alors ∫ₐᵇ f(x)dx ≥ 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Si+f%28x%29+%E2%89%A5+0+sur+%5Ba%2Cb%5D%2C+alors+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx+%E2%89%A5+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. |∫ₐᵇ f(x)dx| ≤ ∫ₐᵇ |f(x)|dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+%7C%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx%7C+%E2%89%A4+%E2%88%AB%E2%82%90%E1%B5%87+%7Cf%28x%29%7Cdx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "Le théorème de comparaison des intégrales stipule que si une fonction est inférieure à une autre sur un intervalle, alors son intégrale sur cet intervalle est elle aussi inférieure. Par exemple, Sur [0,1], x² ≤ x → ∫₀¹x²dx ≤ ∫₀¹x dx, soit 1/3 ≤ 1/2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Sur [0,1], x² ≤ x → ∫₀¹x²dx ≤ ∫₀¹x dx, soit 1/3 ≤ 1/2"
      },
      {
        terme: "Exemple 2",
        definition: "Si f(x) ≥ 0 sur [1,4], alors ∫₁⁴f(x)dx ≥ 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Encadrer une intégrale",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VK0PvzWBIso",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Encadrer la valeur d'une intégrale difficile à calculer exactement par comparaison"
      },
      {
        icon: "computer",
        text: "Majorer l'erreur d'une méthode d'approximation numérique d'intégrale"
      },
      {
        icon: "research",
        text: "Comparer deux grandeurs physiques cumulées sur un même intervalle de temps"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Encadrement%20d%27une%20int%C3%A9grale%20par%20comparaison%20de%20fonctions\" target=\"_blank\" rel=\"noopener noreferrer\">Encadrement d'une intégrale par comparaison de fonctions</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20en%20majoration%20d%27erreur%20d%27approximation\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation en majoration d'erreur d'approximation</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20l%27in%C3%A9galit%C3%A9%20triangulaire%20pour%20les%20int%C3%A9grales\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec l'inégalité triangulaire pour les intégrales</a>"
    ]
  },
  "ecole:113": {
    title: "Valeur moyenne",
    definition: "La valeur moyenne d'une fonction f sur un intervalle [a,b] est la valeur constante qui, intégrée sur [a,b], donnerait la même aire que f. Elle généralise la notion de moyenne à une infinité de valeurs.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel.",
        axiomes: [
            {
                nom: "M1 — Définition",
                enonce: "La valeur moyenne de f sur [a ; b] (a < b) est μ = (1/(b − a))∫ₐᵇ f."
            },
            {
                nom: "M2 — Encadrement",
                enonce: "Si m ≤ f ≤ M sur [a ; b], alors m(b − a) ≤ ∫ₐᵇ f ≤ M(b − a) (comparaison et I4)."
            }
        ],
        conclusion: "μ est l'unique constante dont l'intégrale sur [a ; b] est égale à celle de f. Par M2, m ≤ μ ≤ M ; par le théorème des valeurs intermédiaires, il existe c dans [a ; b] tel que f(c) = μ. Pour un signal, μ est la moyenne de ses valeurs sur la période."
    },
    formulas: [
      {
        text: "1. Valeur moyenne de f sur [a,b] : m = (1/(b−a)) × ∫ₐᵇ f(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+Valeur+moyenne+de+f+sur+%5Ba%2Cb%5D+%3A+m+%3D+%281%2F%28b%E2%88%92a%29%29+%C3%97+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. m représente la hauteur d'un rectangle de même aire que sous la courbe de f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+m+repr%C3%A9sente+la+hauteur+d%27un+rectangle+de+m%C3%AAme+aire+que+sous+la+courbe+de+f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si f est continue sur [a,b], il existe c ∈ [a,b] tel que f(c) = m.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Si+f+est+continue+sur+%5Ba%2Cb%5D%2C+il+existe+c+%E2%88%88+%5Ba%2Cb%5D+tel+que+f%28c%29+%3D+m.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "Elle généralise la notion de moyenne à une infinité de valeurs. Par exemple, Valeur moyenne de f(x)=x² sur [0,3] : (1/3)×9 = 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Valeur moyenne de f(x)=x² sur [0,3] : (1/3)×9 = 3"
      },
      {
        terme: "Exemple 2",
        definition: "Valeur moyenne d'une fonction constante f(x)=5 : 5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer la valeur moyenne d'une fonction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/oVFHojz5y50",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer une température, une vitesse ou une intensité moyenne sur une période en physique"
      },
      {
        icon: "finance",
        text: "Calculer un revenu moyen ou un taux moyen sur une période à partir d'une fonction continue"
      },
      {
        icon: "computer",
        text: "Estimer une valeur représentative d'un signal continu échantillonné"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20de%20la%20moyenne%20et%20existence%20d%27un%20point%20atteignant%20la%20valeur%20moyenne\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème de la moyenne et existence d'un point atteignant la valeur moyenne</a>",
      "<a href=\"https://www.google.com/search?q=Valeur%20moyenne%20et%20interpr%C3%A9tation%20en%20termes%20d%27aire%20%C3%A9quivalente\" target=\"_blank\" rel=\"noopener noreferrer\">Valeur moyenne et interprétation en termes d'aire équivalente</a>",
      "<a href=\"https://www.google.com/search?q=Application%20de%20la%20valeur%20moyenne%20%C3%A0%20des%20grandeurs%20physiques\" target=\"_blank\" rel=\"noopener noreferrer\">Application de la valeur moyenne à des grandeurs physiques</a>"
    ]
  },
  "ecole:114": {
    title: "Intégration par parties",
    definition: "L'intégration par parties est une méthode qui permet de calculer l'intégrale d'un produit de deux fonctions en la transformant en une autre intégrale, souvent plus simple, à l'aide de la formule de dérivation d'un produit.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel.",
        axiomes: [
            {
                nom: "A1 — Dérivée d'un produit",
                enonce: "(uv)' = u'v + uv'."
            },
            {
                nom: "A2 — Théorème fondamental",
                enonce: "∫ₐᵇ F'(x)dx = F(b) − F(a) pour F de classe C¹."
            },
            {
                nom: "A3 — Linéarité",
                enonce: "∫(f + g) = ∫f + ∫g."
            }
        ],
        conclusion: "En intégrant (uv)' = u'v + uv' sur [a ; b] (A1, A2, A3) : [uv]ₐᵇ = ∫ₐᵇ u'v + ∫ₐᵇ uv', c'est-à-dire ∫ₐᵇ u'(x)v(x)dx = [u(x)v(x)]ₐᵇ − ∫ₐᵇ u(x)v'(x)dx pour u et v de classe C¹. L'intégration par parties transfère la dérivation d'un facteur à l'autre."
    },
    formulas: [
      {
        text: "1. ∫ₐᵇ u'(x)v(x)dx = [u(x)v(x)]ₐᵇ − ∫ₐᵇ u(x)v'(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+%E2%88%AB%E2%82%90%E1%B5%87+u%27%28x%29v%28x%29dx+%3D+%5Bu%28x%29v%28x%29%5D%E2%82%90%E1%B5%87+%E2%88%92+%E2%88%AB%E2%82%90%E1%B5%87+u%28x%29v%27%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Le choix de u et v est crucial pour simplifier le calcul.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Le+choix+de+u+et+v+est+crucial+pour+simplifier+le+calcul.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette méthode découle directement de la règle de dérivation d'un produit.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+Cette+m%C3%A9thode+d%C3%A9coule+directement+de+la+r%C3%A8gle+de+d%C3%A9rivation+d%27un+produit.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "L'intégration par parties est une méthode qui permet de calculer l'intégrale d'un produit de deux fonctions en la transformant en une autre intégrale, souvent plus simple, à l'aide de la formule de dérivation d'un produit. Par exemple, ∫₀¹ x·eˣ dx = [x·eˣ]₀¹ − ∫₀¹eˣdx = e − (e−1) = 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "∫₀¹ x·eˣ dx = [x·eˣ]₀¹ − ∫₀¹eˣdx = e − (e−1) = 1"
      },
      {
        terme: "Exemple 2",
        definition: "∫ x·ln(x)dx se calcule par intégration par parties avec u=ln(x), v'=x"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale par parties (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uNIpYeaNfsg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer des intégrales complexes en physique impliquant des produits de fonctions"
      },
      {
        icon: "computer",
        text: "Implémenter un moteur de calcul formel capable de reconnaître et appliquer l'intégration par parties"
      },
      {
        icon: "research",
        text: "Résoudre des équations intégrales en statistique et en probabilités"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Choix%20strat%C3%A9gique%20de%20u%20et%20v%20pour%20simplifier%20le%20calcul\" target=\"_blank\" rel=\"noopener noreferrer\">Choix stratégique de u et v pour simplifier le calcul</a>",
      "<a href=\"https://www.google.com/search?q=Int%C3%A9gration%20par%20parties%20r%C3%A9p%C3%A9t%C3%A9e%20pour%20des%20produits%20plus%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Intégration par parties répétée pour des produits plus complexes</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20int%C3%A9gration%20par%20parties%20et%20d%C3%A9riv%C3%A9e%20d%27un%20produit\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre intégration par parties et dérivée d'un produit</a>"
    ]
  },
  "ecole:115": {
    title: "Volumes par intégration",
    definition: "Le calcul de volumes par intégration permet de déterminer le volume d'un solide de révolution obtenu en faisant tourner la courbe d'une fonction autour de l'axe des abscisses.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace avec les axiomes du volume et l'intégrale ; un solide est compris entre les plans x = a et x = b, et A(x) est l'aire de sa section par le plan d'abscisse x, supposée continue.",
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
        conclusion: "En découpant le solide en tranches d'épaisseur h, chaque tranche est encadrée par deux cylindres de sections min A et max A (V1, V3 et monotonie) ; les sommes obtenues ont pour limite ∫ₐᵇ A(x)dx : V = ∫ₐᵇ A(x)dx. Pour un solide de révolution engendré par la rotation de la courbe de f autour de l'axe des abscisses, A(x) = π f(x)², donc V = π∫ₐᵇ f(x)²dx.",
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
        text: "1. Volume d'un solide de révolution : V = π × ∫ₐᵇ [f(x)]² dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+1.+Volume+d%27un+solide+de+r%C3%A9volution+%3A+V+%3D+%CF%80+%C3%97+%E2%88%AB%E2%82%90%E1%B5%87+%5Bf%28x%29%5D%C2%B2+dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Ce volume est obtenu en faisant tourner la courbe de f autour de l'axe (Ox) entre x=a et x=b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+2.+Ce+volume+est+obtenu+en+faisant+tourner+la+courbe+de+f+autour+de+l%27axe+%28Ox%29+entre+x%3Da+et+x%3Db.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. L'unité de volume dépend des unités choisies sur les axes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+int%C3%A9gration+3.+L%27unit%C3%A9+de+volume+d%C3%A9pend+des+unit%C3%A9s+choisies+sur+les+axes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent entre elles (linéarité, Chasles) pour ramener un calcul d'intégrale à une forme plus simple.",
    details: "Le calcul de volumes par intégration permet de déterminer le volume d'un solide de révolution obtenu en faisant tourner la courbe d'une fonction autour de l'axe des abscisses. Par exemple, Volume engendré par f(x)=√x tournant autour de (Ox) entre 0 et 1 : V = π/2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Volume engendré par f(x)=√x tournant autour de (Ox) entre 0 et 1 : V = π/2"
      },
      {
        terme: "Exemple 2",
        definition: "Le volume d'une sphère de rayon r s'obtient en intégrant f(x)=√(r²−x²) entre −r et r"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégration ».",
      items: [
        { file: "5-0-integrale-def.png", alt: "Intégration" },
        { file: "5-2-changement-var.png", alt: "Intégration" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'aire entre deux courbes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/oRSAYNwUiHQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer le volume d'une pièce mécanique obtenue par tournage (solide de révolution)"
      },
      {
        icon: "computer",
        text: "Modéliser et calculer numériquement le volume d'un objet 3D en CAO"
      },
      {
        icon: "research",
        text: "Retrouver les formules de volumes usuels (cône, sphère) par intégration"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Retrouver%20les%20formules%20de%20volume%20du%20c%C3%B4ne%20et%20de%20la%20sph%C3%A8re%20par%20int%C3%A9gration\" target=\"_blank\" rel=\"noopener noreferrer\">Retrouver les formules de volume du cône et de la sphère par intégration</a>",
      "<a href=\"https://www.google.com/search?q=Volumes%20de%20solides%20obtenus%20par%20rotation%20autour%20de%20l%27axe%20%28Oy%29\" target=\"_blank\" rel=\"noopener noreferrer\">Volumes de solides obtenus par rotation autour de l'axe (Oy)</a>",
      "<a href=\"https://www.google.com/search?q=Calcul%20de%20volumes%20entre%20deux%20courbes%20tournant%20autour%20d%27un%20axe\" target=\"_blank\" rel=\"noopener noreferrer\">Calcul de volumes entre deux courbes tournant autour d'un axe</a>"
    ]
  },
  "ecole:116": {
    title: "Suite arithmétique",
    definition: "Une suite arithmétique est une suite de nombres où l'on passe d'un terme au suivant en ajoutant toujours la même quantité, appelée raison.",
    definition_axiomatique: {
        cadre: "On travaille avec des suites réelles (uₙ) indexées par ℕ (axiomes de Peano).",
        axiomes: [
            {
                nom: "A1 — Raison constante",
                enonce: "Il existe un réel r tel que uₙ₊₁ − uₙ = r pour tout entier n."
            },
            {
                nom: "A2 — Premier terme",
                enonce: "u₀ (ou u₁) est donné."
            }
        ],
        conclusion: "Une suite qui vérifie A1 et A2 est une suite arithmétique de raison r ; elle est unique, par récurrence : uₙ₊₁ = uₙ + r. Elle est croissante si r > 0, décroissante si r < 0, constante si r = 0. Une suite est arithmétique si et seulement si uₙ₊₁ − uₙ est constant.",
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
        text: "1. uₙ₊₁ = uₙ + r, où r est la raison.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+u%E2%82%99%E2%82%8A%E2%82%81+%3D+u%E2%82%99+%2B+r%2C+o%C3%B9+r+est+la+raison.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La suite est croissante si r > 0, décroissante si r < 0, constante si r = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+La+suite+est+croissante+si+r+%3E+0%2C+d%C3%A9croissante+si+r+%3C+0%2C+constante+si+r+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La différence entre deux termes consécutifs est toujours constante et égale à r.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+La+diff%C3%A9rence+entre+deux+termes+cons%C3%A9cutifs+est+toujours+constante+et+%C3%A9gale+%C3%A0+r.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Une suite arithmétique est une suite de nombres où l'on passe d'un terme au suivant en ajoutant toujours la même quantité, appelée raison. Par exemple, u₀=2, r=3 → u₁=5, u₂=8, u₃=11 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=2, r=3 → u₁=5, u₂=8, u₃=11"
      },
      {
        terme: "Exemple 2",
        definition: "Une suite de raison négative, r=−2, décroît à chaque terme"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Arithmétique avancée ».",
      items: [
        { file: "121-1-fermat.png", alt: "Arithmétique avancée" },
        { file: "121-2-crt.png", alt: "Arithmétique avancée" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Reconnaitre une suite arithmétique et une suite géométrique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pHq6oClOylU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Modéliser une épargne avec des versements réguliers constants (sans intérêts composés)"
      },
      {
        icon: "research",
        text: "Décrire une grandeur physique augmentant d'une quantité fixe à intervalles réguliers"
      },
      {
        icon: "computer",
        text: "Générer une progression arithmétique dans un programme (indices, compteurs)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Terme%20g%C3%A9n%C3%A9ral%20et%20somme%20des%20termes%20d%27une%20suite%20arithm%C3%A9tique\" target=\"_blank\" rel=\"noopener noreferrer\">Terme général et somme des termes d'une suite arithmétique</a>",
      "<a href=\"https://www.google.com/search?q=Suites%20arithm%C3%A9tiques%20et%20fonctions%20affines\" target=\"_blank\" rel=\"noopener noreferrer\">Suites arithmétiques et fonctions affines</a>",
      "<a href=\"https://www.google.com/search?q=Suites%20arithm%C3%A9tico-g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Suites arithmético-géométriques</a>"
    ]
  },
  "ecole:117": {
    title: "Terme général arithmétique",
    definition: "Le terme général d'une suite arithmétique permet de calculer directement n'importe quel terme uₙ sans devoir calculer tous les termes précédents, à partir du premier terme et de la raison.",
    definition_axiomatique: {
        cadre: "On travaille avec une suite arithmétique de raison r : uₙ₊₁ = uₙ + r pour tout n.",
        axiomes: [
            {
                nom: "A1 — Récurrence",
                enonce: "uₙ₊₁ = uₙ + r."
            },
            {
                nom: "A2 — Initialisation",
                enonce: "u₀ est donné."
            },
            {
                nom: "A3 — Principe de récurrence",
                enonce: "Une propriété vraie au rang 0 et qui passe de n à n + 1 est vraie pour tout n."
            }
        ],
        conclusion: "Par récurrence (A3) : uₙ = u₀ + n·r, car u₀ = u₀ + 0·r et, si uₙ = u₀ + nr, alors uₙ₊₁ = u₀ + nr + r = u₀ + (n + 1)r. Plus généralement, uₙ = u_p + (n − p)r pour tous entiers n et p.",
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
        text: "1. uₙ = u₀ + n×r.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+u%E2%82%99+%3D+u%E2%82%80+%2B+n%C3%97r.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Plus généralement, uₙ = uₚ + (n−p)×r.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+Plus+g%C3%A9n%C3%A9ralement%2C+u%E2%82%99+%3D+u%E2%82%9A+%2B+%28n%E2%88%92p%29%C3%97r.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette formule explicite se déduit de la relation de récurrence uₙ₊₁=uₙ+r.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Cette+formule+explicite+se+d%C3%A9duit+de+la+relation+de+r%C3%A9currence+u%E2%82%99%E2%82%8A%E2%82%81%3Du%E2%82%99%2Br.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Le terme général d'une suite arithmétique permet de calculer directement n'importe quel terme uₙ sans devoir calculer tous les termes précédents, à partir du premier terme et de la raison. Par exemple, u₀=5, r=3 → u₁₀ = 5 + 10×3 = 35 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=5, r=3 → u₁₀ = 5 + 10×3 = 35"
      },
      {
        terme: "Exemple 2",
        definition: "u₀=1, r=4 → uₙ = 1+4n"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Arithmétique avancée ».",
      items: [
        { file: "121-1-fermat.png", alt: "Arithmétique avancée" },
        { file: "121-2-crt.png", alt: "Arithmétique avancée" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Déterminer l'expression générale d'une suite arithmétique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/6O0KhPMHvBA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Calculer directement le montant après n versements réguliers sans intérêts"
      },
      {
        icon: "computer",
        text: "Calculer instantanément le n-ième terme d'une progression sans boucle de calcul"
      },
      {
        icon: "research",
        text: "Prédire la valeur d'une grandeur évoluant linéairement après un grand nombre de pas"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20terme%20g%C3%A9n%C3%A9ral%20par%20r%C3%A9currence\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du terme général par récurrence</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20du%20terme%20g%C3%A9n%C3%A9ral%20pour%20r%C3%A9soudre%20des%20probl%C3%A8mes%20concrets\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation du terme général pour résoudre des problèmes concrets</a>",
      "<a href=\"https://www.google.com/search?q=Terme%20g%C3%A9n%C3%A9ral%20d%27une%20suite%20arithm%C3%A9tico-g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Terme général d'une suite arithmético-géométrique</a>"
    ]
  },
  "ecole:118": {
    title: "Somme arithmétique",
    definition: "La somme des termes consécutifs d'une suite arithmétique se calcule par une formule simple, sans avoir à additionner terme à terme, grâce à la symétrie de la progression.",
    definition_axiomatique: {
        cadre: "On travaille avec une suite arithmétique de raison r ; on note Sₙ = u₀ + u₁ + … + uₙ₋₁ la somme de ses n premiers termes.",
        axiomes: [
            {
                nom: "A1 — Suite arithmétique",
                enonce: "uₖ₊₁ − uₖ = r pour tout k."
            },
            {
                nom: "A2 — Addition",
                enonce: "L'addition est commutative et associative : on peut réordonner et regrouper les termes."
            }
        ],
        conclusion: "En écrivant la somme à l'endroit et à l'envers, on associe uₖ et uₙ₋₁₋ₖ : leur somme vaut u₀ + uₙ₋₁ pour chaque k (A1). Donc 2Sₙ = n(u₀ + uₙ₋₁), soit Sₙ = n(u₀ + uₙ₋₁)/2 : nombre de termes × moyenne du premier et du dernier."
    },
    formulas: [
      {
        text: "1. Somme des n+1 premiers termes : S = (n+1) × (u₀+uₙ)/2.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+Somme+des+n%2B1+premiers+termes+%3A+S+%3D+%28n%2B1%29+%C3%97+%28u%E2%82%80%2Bu%E2%82%99%29%2F2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Plus généralement : somme = (nombre de termes) × (premier terme + dernier terme)/2.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+Plus+g%C3%A9n%C3%A9ralement+%3A+somme+%3D+%28nombre+de+termes%29+%C3%97+%28premier+terme+%2B+dernier+terme%29%2F2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cas particulier : 1+2+...+n = n(n+1)/2.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Cas+particulier+%3A+1%2B2%2B...%2Bn+%3D+n%28n%2B1%29%2F2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "La somme des termes consécutifs d'une suite arithmétique se calcule par une formule simple, sans avoir à additionner terme à terme, grâce à la symétrie de la progression. Par exemple, u₀=1, u₁₀=31, somme des 11 termes : S = 11×(1+31)/2 = 176 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=1, u₁₀=31, somme des 11 termes : S = 11×(1+31)/2 = 176"
      },
      {
        terme: "Exemple 2",
        definition: "1+2+3+...+10 = 10×11/2 = 55"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Arithmétique avancée ».",
      items: [
        { file: "121-1-fermat.png", alt: "Arithmétique avancée" },
        { file: "121-2-crt.png", alt: "Arithmétique avancée" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Calculer la somme des termes d'une suite arithm. (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WeDtB9ZUTHs",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Calculer le montant total accumulé après une série de versements réguliers"
      },
      {
        icon: "research",
        text: "Additionner efficacement un grand nombre de termes suivant une progression régulière"
      },
      {
        icon: "computer",
        text: "Calculer la somme d'une progression arithmétique en temps constant, sans boucle"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20formule%20de%20la%20somme%20arithm%C3%A9tique\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la formule de la somme arithmétique</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20des%20n%20premiers%20entiers%2C%20carr%C3%A9s%2C%20cubes\" target=\"_blank\" rel=\"noopener noreferrer\">Somme des n premiers entiers, carrés, cubes</a>",
      "<a href=\"https://www.google.com/search?q=Application%20au%20calcul%20d%27aires%20ou%20de%20volumes%20discrets\" target=\"_blank\" rel=\"noopener noreferrer\">Application au calcul d'aires ou de volumes discrets</a>"
    ]
  },
  "ecole:119": {
    title: "Suite géométrique",
    definition: "Une suite géométrique est une suite de nombres où l'on passe d'un terme au suivant en multipliant toujours par la même quantité non nulle, appelée raison.",
    definition_axiomatique: {
        cadre: "On travaille avec des suites réelles (uₙ) indexées par ℕ (axiomes de Peano).",
        axiomes: [
            {
                nom: "A1 — Raison constante",
                enonce: "Il existe un réel q tel que uₙ₊₁ = q·uₙ pour tout entier n."
            },
            {
                nom: "A2 — Premier terme",
                enonce: "u₀ est donné."
            }
        ],
        conclusion: "Une suite qui vérifie A1 et A2 est une suite géométrique de raison q ; elle est unique. Si u₀ ≠ 0 et q ≠ 0, elle ne s'annule jamais et uₙ₊₁/uₙ = q est constant ; réciproquement, une suite dont le quotient de deux termes consécutifs est constant est géométrique.",
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
        text: "1. uₙ₊₁ = q × uₙ, où q est la raison (q ≠ 0).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+u%E2%82%99%E2%82%8A%E2%82%81+%3D+q+%C3%97+u%E2%82%99%2C+o%C3%B9+q+est+la+raison+%28q+%E2%89%A0+0%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La suite est croissante si q>1 et u₀>0, décroissante si 0<q<1 et u₀>0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+La+suite+est+croissante+si+q%3E1+et+u%E2%82%80%3E0%2C+d%C3%A9croissante+si+0%3Cq%3C1+et+u%E2%82%80%3E0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si q<0, les termes alternent de signe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Si+q%3C0%2C+les+termes+alternent+de+signe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Une suite géométrique est une suite de nombres où l'on passe d'un terme au suivant en multipliant toujours par la même quantité non nulle, appelée raison. Par exemple, u₀=2, q=3 → u₁=6, u₂=18, u₃=54 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=2, q=3 → u₁=6, u₂=18, u₃=54"
      },
      {
        terme: "Exemple 2",
        definition: "u₀=100, q=0.5 → u₁=50, u₂=25, u₃=12.5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Théorie des nombres olympique ».",
      items: [
        { file: "608-0-congruence.png", alt: "Théorie des nombres olympique" },
        { file: "608-1-euclide.png", alt: "Théorie des nombres olympique" },
        { file: "608-2-fermat.png", alt: "Théorie des nombres olympique" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Déterminer l'expression générale d'une suite géométrique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WTmdtbQpa0c",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Modéliser un capital avec intérêts composés à taux constant"
      },
      {
        icon: "research",
        text: "Décrire une croissance ou décroissance par un facteur constant (population, désintégration)"
      },
      {
        icon: "computer",
        text: "Modéliser une complexité algorithmique doublant à chaque étape"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Terme%20g%C3%A9n%C3%A9ral%20et%20somme%20des%20termes%20d%27une%20suite%20g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Terme général et somme des termes d'une suite géométrique</a>",
      "<a href=\"https://www.google.com/search?q=Limite%20d%27une%20suite%20g%C3%A9om%C3%A9trique%20selon%20la%20valeur%20de%20q\" target=\"_blank\" rel=\"noopener noreferrer\">Limite d'une suite géométrique selon la valeur de q</a>",
      "<a href=\"https://www.google.com/search?q=Suites%20g%C3%A9om%C3%A9triques%20et%20fonction%20exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Suites géométriques et fonction exponentielle</a>"
    ]
  },
  "ecole:120": {
    title: "Terme général géométrique",
    definition: "Le terme général d'une suite géométrique permet de calculer directement n'importe quel terme uₙ à partir du premier terme et de la raison, sans calculer les termes intermédiaires.",
    definition_axiomatique: {
        cadre: "On travaille avec une suite géométrique de raison q : uₙ₊₁ = q·uₙ.",
        axiomes: [
            {
                nom: "A1 — Récurrence",
                enonce: "uₙ₊₁ = q·uₙ."
            },
            {
                nom: "A2 — Initialisation",
                enonce: "u₀ est donné."
            },
            {
                nom: "A3 — Principe de récurrence",
                enonce: "Une propriété vraie au rang 0 et qui passe de n à n + 1 est vraie pour tout n."
            }
        ],
        conclusion: "Par récurrence (A3) : uₙ = u₀·qⁿ, car u₀ = u₀·q⁰ et, si uₙ = u₀qⁿ, alors uₙ₊₁ = q·u₀qⁿ = u₀qⁿ⁺¹. Plus généralement, uₙ = u_p·qⁿ⁻ᵖ.",
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
        text: "1. uₙ = u₀ × qⁿ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+u%E2%82%99+%3D+u%E2%82%80+%C3%97+q%E2%81%BF.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Plus généralement, uₙ = uₚ × qⁿ⁻ᵖ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+Plus+g%C3%A9n%C3%A9ralement%2C+u%E2%82%99+%3D+u%E2%82%9A+%C3%97+q%E2%81%BF%E2%81%BB%E1%B5%96.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette formule se déduit de la relation de récurrence uₙ₊₁=q×uₙ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Cette+formule+se+d%C3%A9duit+de+la+relation+de+r%C3%A9currence+u%E2%82%99%E2%82%8A%E2%82%81%3Dq%C3%97u%E2%82%99.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Le terme général d'une suite géométrique permet de calculer directement n'importe quel terme uₙ à partir du premier terme et de la raison, sans calculer les termes intermédiaires. Par exemple, u₀=3, q=2 → u₅ = 3×2⁵ = 96 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=3, q=2 → u₅ = 3×2⁵ = 96"
      },
      {
        terme: "Exemple 2",
        definition: "u₀=1000, q=1.05 → u₁₀ ≈ 1628.89"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Déterminer l'expression générale d'une suite géométrique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WTmdtbQpa0c",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Calculer directement la valeur d'un capital après n années à intérêts composés"
      },
      {
        icon: "computer",
        text: "Calculer instantanément le n-ième terme d'une progression géométrique sans boucle"
      },
      {
        icon: "research",
        text: "Prédire la population ou la quantité d'une substance après n périodes de croissance ou décroissance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20terme%20g%C3%A9n%C3%A9ral%20par%20r%C3%A9currence\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du terme général par récurrence</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20en%20calcul%20d%27int%C3%A9r%C3%AAts%20compos%C3%A9s\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation en calcul d'intérêts composés</a>",
      "<a href=\"https://www.google.com/search?q=Terme%20g%C3%A9n%C3%A9ral%20et%20limite%20quand%20n%20tend%20vers%20l%27infini\" target=\"_blank\" rel=\"noopener noreferrer\">Terme général et limite quand n tend vers l'infini</a>"
    ]
  },
  "ecole:121": {
    title: "Somme géométrique",
    definition: "La somme des termes consécutifs d'une suite géométrique se calcule par une formule qui dépend du premier terme, de la raison et du nombre de termes, à condition que la raison soit différente de 1.",
    definition_axiomatique: {
        cadre: "On travaille avec une suite géométrique de raison q ≠ 1 ; on note Sₙ = 1 + q + q² + … + qⁿ.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "(1 − q)(a + b) = (1 − q)a + (1 − q)b."
            },
            {
                nom: "A2 — Puissances",
                enonce: "q·qᵏ = qᵏ⁺¹."
            }
        ],
        conclusion: "Par télescopage, (1 − q)Sₙ = (1 + q + … + qⁿ) − (q + q² + … + qⁿ⁺¹) = 1 − qⁿ⁺¹. Comme q ≠ 1, Sₙ = (1 − qⁿ⁺¹)/(1 − q). Pour une suite géométrique quelconque, la somme de p termes consécutifs est le premier terme × (1 − qᵖ)/(1 − q)."
    },
    formulas: [
      {
        text: "1. Somme des n+1 premiers termes (q≠1) : S = u₀ × (1−qⁿ⁺¹)/(1−q).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+Somme+des+n%2B1+premiers+termes+%28q%E2%89%A01%29+%3A+S+%3D+u%E2%82%80+%C3%97+%281%E2%88%92q%E2%81%BF%E2%81%BA%C2%B9%29%2F%281%E2%88%92q%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si q=1, la somme vaut (n+1)×u₀.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+Si+q%3D1%2C+la+somme+vaut+%28n%2B1%29%C3%97u%E2%82%80.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cas particulier : 1+q+q²+...+qⁿ = (1−qⁿ⁺¹)/(1−q).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Cas+particulier+%3A+1%2Bq%2Bq%C2%B2%2B...%2Bq%E2%81%BF+%3D+%281%E2%88%92q%E2%81%BF%E2%81%BA%C2%B9%29%2F%281%E2%88%92q%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "La somme des termes consécutifs d'une suite géométrique se calcule par une formule qui dépend du premier terme, de la raison et du nombre de termes, à condition que la raison soit différente de 1. Par exemple, u₀=1, q=2, somme des 5 premiers termes : S = (1−2⁵)/(1−2) = 31 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u₀=1, q=2, somme des 5 premiers termes : S = (1−2⁵)/(1−2) = 31"
      },
      {
        terme: "Exemple 2",
        definition: "u₀=100, q=0.5, somme des 4 premiers termes : S = 187.5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Calculer la somme des termes d'une suite géométriq. (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/rIaYMXPbWE8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Calculer la valeur totale d'une série de versements avec intérêts composés (annuités)"
      },
      {
        icon: "research",
        text: "Additionner efficacement une série de termes en progression géométrique"
      },
      {
        icon: "computer",
        text: "Calculer la somme d'une progression géométrique en temps constant"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20formule%20de%20la%20somme%20g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la formule de la somme géométrique</a>",
      "<a href=\"https://www.google.com/search?q=Somme%20g%C3%A9om%C3%A9trique%20infinie%20lorsque%20%7Cq%7C%3C1\" target=\"_blank\" rel=\"noopener noreferrer\">Somme géométrique infinie lorsque |q|<1</a>",
      "<a href=\"https://www.google.com/search?q=Application%20au%20calcul%20d%27annuit%C3%A9s%20et%20d%27emprunts\" target=\"_blank\" rel=\"noopener noreferrer\">Application au calcul d'annuités et d'emprunts</a>"
    ]
  },
  "ecole:122": {
    title: "Limite d’une suite géométrique",
    definition: "Le comportement à l'infini d'une suite géométrique dépend uniquement de la valeur de sa raison q : elle peut converger vers 0, diverger vers l'infini, ou ne pas avoir de limite.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ ; la limite d'une suite est définie par : uₙ → ℓ si, pour tout ε > 0, |uₙ − ℓ| < ε à partir d'un certain rang.",
        axiomes: [
            {
                nom: "A1 — Limite",
                enonce: "uₙ → ℓ si ∀ε > 0, ∃N, ∀n ≥ N, |uₙ − ℓ| < ε."
            },
            {
                nom: "A2 — Inégalité de Bernoulli",
                enonce: "Pour a > 0 et n entier, (1 + a)ⁿ ≥ 1 + na."
            },
            {
                nom: "A3 — Comparaison",
                enonce: "Si vₙ ≤ uₙ et vₙ → +∞, alors uₙ → +∞."
            }
        ],
        conclusion: "Pour q > 1, q = 1 + a avec a > 0 : qⁿ ≥ 1 + na → +∞ (A2, A3). Pour |q| < 1, |q|ⁿ = 1/(1/|q|)ⁿ → 0, donc qⁿ → 0. Pour q = 1, la suite est constante, égale à 1 ; pour q ≤ −1, elle n'a pas de limite. Les résultats se ramènent à ceux de qⁿ pour la suite u₀qⁿ."
    },
    formulas: [
      {
        text: "1. Si −1 < q < 1, alors lim(n→+∞) qⁿ = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+Si+%E2%88%921+%3C+q+%3C+1%2C+alors+lim%28n%E2%86%92%2B%E2%88%9E%29+q%E2%81%BF+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si q > 1, alors lim(n→+∞) qⁿ = +∞.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+Si+q+%3E+1%2C+alors+lim%28n%E2%86%92%2B%E2%88%9E%29+q%E2%81%BF+%3D+%2B%E2%88%9E.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si q ≤ −1, la suite qⁿ n'a pas de limite.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Si+q+%E2%89%A4+%E2%88%921%2C+la+suite+q%E2%81%BF+n%27a+pas+de+limite.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Le comportement à l'infini d'une suite géométrique dépend uniquement de la valeur de sa raison q : elle peut converger vers 0, diverger vers l'infini, ou ne pas avoir de limite. Par exemple, q = 0.5 → lim(n→+∞) 0.5ⁿ = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "q = 0.5 → lim(n→+∞) 0.5ⁿ = 0"
      },
      {
        terme: "Exemple 2",
        definition: "q = 2 → lim(n→+∞) 2ⁿ = +∞"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Calculer la limite d'une suite géométrique (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/F-PGmIK5Ypg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Déterminer si un capital ou une dette tend vers zéro ou diverge à long terme selon le taux"
      },
      {
        icon: "research",
        text: "Étudier la stabilité à long terme d'un phénomène physique modélisé par une suite géométrique"
      },
      {
        icon: "computer",
        text: "Déterminer la convergence d'un algorithme itératif dont l'erreur décroît géométriquement"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20comportement%20de%20q%E2%81%BF%20selon%20la%20valeur%20de%20q\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du comportement de qⁿ selon la valeur de q</a>",
      "<a href=\"https://www.google.com/search?q=Application%20%C3%A0%20la%20convergence%20des%20suites%20g%C3%A9om%C3%A9triques%20dans%20les%20mod%C3%A8les%20financiers\" target=\"_blank\" rel=\"noopener noreferrer\">Application à la convergence des suites géométriques dans les modèles financiers</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20les%20s%C3%A9ries%20g%C3%A9om%C3%A9triques%20convergentes\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec les séries géométriques convergentes</a>"
    ]
  },
  "ecole:123": {
    title: "Convergence monotone",
    definition: "Le théorème de convergence monotone affirme que toute suite croissante et majorée converge, et que toute suite décroissante et minorée converge également.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet, et on considère une suite (uₙ) de réels.",
        axiomes: [
            {
                nom: "A1 — Borne supérieure",
                enonce: "Toute partie non vide et majorée de ℝ possède une borne supérieure."
            },
            {
                nom: "A2 — Limite",
                enonce: "uₙ → ℓ si ∀ε > 0, ∃N, ∀n ≥ N, |uₙ − ℓ| < ε."
            },
            {
                nom: "A3 — Monotonie",
                enonce: "(uₙ) est croissante si uₙ ≤ uₙ₊₁ pour tout n."
            }
        ],
        conclusion: "Toute suite croissante et majorée converge. Preuve : soit ℓ = sup{uₙ} (A1) ; pour tout ε > 0 il existe N tel que uₙ > ℓ − ε, et la croissance donne ℓ − ε < uₙ ≤ ℓ pour n ≥ N. De même, une suite décroissante et minorée converge ; une suite croissante non majorée tend vers +∞.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. Une suite croissante et majorée converge vers sa borne supérieure.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+1.+Une+suite+croissante+et+major%C3%A9e+converge+vers+sa+borne+sup%C3%A9rieure.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Une suite décroissante et minorée converge vers sa borne inférieure.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+2.+Une+suite+d%C3%A9croissante+et+minor%C3%A9e+converge+vers+sa+borne+inf%C3%A9rieure.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une suite croissante non majorée tend vers +∞.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+3.+Une+suite+croissante+non+major%C3%A9e+tend+vers+%2B%E2%88%9E.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés portent sur le comportement à long terme de la suite et se démontrent souvent par un raisonnement sur la monotonie.",
    details: "Le théorème de convergence monotone affirme que toute suite croissante et majorée converge, et que toute suite décroissante et minorée converge également. Par exemple, uₙ = 2 − 1/n est croissante et majorée par 2 → elle converge vers 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "uₙ = 2 − 1/n est croissante et majorée par 2 → elle converge vers 2"
      },
      {
        terme: "Exemple 2",
        definition: "uₙ = 1/n est décroissante et minorée par 0 → elle converge vers 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Appliquer le théorème de convergence monotone",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gO-MQUlBAfo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Démontrer l'existence d'une limite sans la calculer explicitement, en sciences ou en économie"
      },
      {
        icon: "computer",
        text: "Justifier la convergence d'un algorithme itératif (méthode de Newton, suites récurrentes)"
      },
      {
        icon: "research",
        text: "Établir l'existence d'un équilibre dans un modèle dynamique évoluant de façon monotone"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9termination%20de%20la%20limite%20une%20fois%20la%20convergence%20%C3%A9tablie\" target=\"_blank\" rel=\"noopener noreferrer\">Détermination de la limite une fois la convergence établie</a>",
      "<a href=\"https://www.google.com/search?q=Suites%20d%C3%A9finies%20par%20r%C3%A9currence%20et%20convergence%20monotone\" target=\"_blank\" rel=\"noopener noreferrer\">Suites définies par récurrence et convergence monotone</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20le%20th%C3%A9or%C3%A8me%20des%20suites%20adjacentes\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec le théorème des suites adjacentes</a>"
    ]
  },
  "ecole:124": {
    title: "Récurrence",
    definition: "Le raisonnement par récurrence est une méthode de démonstration qui permet de prouver qu'une propriété est vraie pour tout entier naturel n, en montrant qu'elle est vraie au rang initial puis qu'elle se transmet d'un rang au suivant.",
    definition_axiomatique: {
        cadre: "On travaille dans ℕ, défini par les axiomes de Peano : 0 est un entier, chaque entier n a un successeur n + 1, 0 n'est le successeur de personne, deux entiers de même successeur sont égaux.",
        axiomes: [
            {
                nom: "P1 — Zéro",
                enonce: "0 ∈ ℕ et 0 n'est le successeur d'aucun entier."
            },
            {
                nom: "P2 — Successeur",
                enonce: "Tout entier a un successeur, et deux entiers ayant le même successeur sont égaux."
            },
            {
                nom: "P3 — Axiome de récurrence",
                enonce: "Si une partie A de ℕ contient 0 et contient n + 1 dès qu'elle contient n, alors A = ℕ."
            }
        ],
        conclusion: "Le raisonnement par récurrence en découle : pour démontrer une propriété P(n) pour tout n, on vérifie l'initialisation P(0) puis l'hérédité P(n) ⟹ P(n + 1) ; l'ensemble des n où P est vraie contient 0 et est stable par successeur, donc c'est ℕ (P3).",
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
        text: "1. Initialisation : vérifier que la propriété est vraie au premier rang.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+1.+Initialisation+%3A+v%C3%A9rifier+que+la+propri%C3%A9t%C3%A9+est+vraie+au+premier+rang.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Hérédité : supposer la propriété vraie au rang n et montrer qu'elle est alors vraie au rang n+1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+2.+H%C3%A9r%C3%A9dit%C3%A9+%3A+supposer+la+propri%C3%A9t%C3%A9+vraie+au+rang+n+et+montrer+qu%27elle+est+alors+vraie+au+rang+n%2B1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Conclusion : la propriété est vraie pour tout entier n à partir du rang initial.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+suites+3.+Conclusion+%3A+la+propri%C3%A9t%C3%A9+est+vraie+pour+tout+entier+n+%C3%A0+partir+du+rang+initial.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Récurrence forte",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20R%C3%A9currence%20R%C3%A9currence%20forte%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Descente infinie de Fermat",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20R%C3%A9currence%20Descente%20infinie%20de%20Fermat%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés caractérisent le comportement terme à terme de la suite et permettent de calculer n'importe quel terme sans récurrence.",
    details: "Le raisonnement par récurrence est une méthode de démonstration qui permet de prouver qu'une propriété est vraie pour tout entier naturel n, en montrant qu'elle est vraie au rang initial puis qu'elle se transmet d'un rang au suivant. Par exemple, Démontrer par récurrence que 1+2+...+n = n(n+1)/2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Démontrer par récurrence que 1+2+...+n = n(n+1)/2"
      },
      {
        terme: "Exemple 2",
        definition: "Démontrer par récurrence qu'une suite définie par uₙ₊₁=2uₙ+1, u₀=0, vérifie uₙ=2ⁿ−1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Apprendre à effectuer une dém. par récurrence",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/udGGlHdSAgc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Démontrer la correction d'un algorithme récursif ou d'une boucle informatique"
      },
      {
        icon: "research",
        text: "Prouver rigoureusement une propriété valable pour un nombre indéfini d'étapes en sciences"
      },
      {
        icon: "research",
        text: "Établir une formule explicite pour une suite définie par une relation de récurrence"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9currence%20forte%20%28hypoth%C3%A8se%20sur%20plusieurs%20rangs%20pr%C3%A9c%C3%A9dents%29\" target=\"_blank\" rel=\"noopener noreferrer\">Récurrence forte (hypothèse sur plusieurs rangs précédents)</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9currence%20double%20ou%20%C3%A0%20plusieurs%20pas\" target=\"_blank\" rel=\"noopener noreferrer\">Récurrence double ou à plusieurs pas</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20de%20la%20r%C3%A9currence%20pour%20%C3%A9tudier%20une%20suite%20d%C3%A9finie%20implicitement\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation de la récurrence pour étudier une suite définie implicitement</a>"
    ]
  },
  "ecole:125": {
    title: "Suites définies par récurrence",
    definition: "Une suite définie par récurrence est une suite dont chaque terme se calcule à partir du terme précédent (ou de plusieurs termes précédents) via une relation, plutôt que par une formule explicite directe.",
    definition_axiomatique: {
        cadre: "On travaille avec ℕ (axiomes de Peano) et une fonction f définie sur un intervalle I tel que f(I) ⊂ I.",
        axiomes: [
            {
                nom: "S1 — Définition par récurrence",
                enonce: "Pour tout u₀ ∈ I, il existe une unique suite (uₙ) vérifiant uₙ₊₁ = f(uₙ)."
            },
            {
                nom: "S2 — Point fixe",
                enonce: "Si f est continue et si uₙ → ℓ dans I, alors ℓ = f(ℓ)."
            },
            {
                nom: "S3 — Monotonie",
                enonce: "Si f est croissante, (uₙ) est monotone, croissante si u₁ ≥ u₀ et décroissante sinon."
            }
        ],
        conclusion: "Pour étudier une telle suite, on vérifie que I est stable, on démontre par récurrence un encadrement, on étudie la monotonie (S3), puis on conclut par le théorème de convergence monotone ; la limite est alors un point fixe de f (S2). Si f est décroissante, on étudie les suites extraites (u₂ₙ) et (u₂ₙ₊₁).",
        sources: [
            {
                titre: "Perrin (CAPES) — Entiers naturels : axiomes de Peano",
                url: "https://www.imo.universite-paris-saclay.fr/~perrin/CAPES/arithmetique/EntiersCAPES.pdf"
            },
            {
                titre: "Rozière — Axiomatisation de l'arithmétique",
                url: "https://www.irif.fr/~roziere/thEnsL/peano.pdf"
            },
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. uₙ₊₁ = f(uₙ), avec u₀ donné.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+1.+u%E2%82%99%E2%82%8A%E2%82%81+%3D+f%28u%E2%82%99%29%2C+avec+u%E2%82%80+donn%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L'étude de la convergence utilise souvent la monotonie et le signe de f(x) − x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+2.+L%27%C3%A9tude+de+la+convergence+utilise+souvent+la+monotonie+et+le+signe+de+f%28x%29+%E2%88%92+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si la suite converge vers L et f est continue, alors L vérifie f(L) = L (point fixe).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+suites+avanc%C3%A9es+3.+Si+la+suite+converge+vers+L+et+f+est+continue%2C+alors+L+v%C3%A9rifie+f%28L%29+%3D+L+%28point+fixe%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés portent sur le comportement à long terme de la suite et se démontrent souvent par un raisonnement sur la monotonie.",
    details: "Une suite définie par récurrence est une suite dont chaque terme se calcule à partir du terme précédent (ou de plusieurs termes précédents) via une relation, plutôt que par une formule explicite directe. Par exemple, uₙ₊₁ = (uₙ+2)/2, u₀=0 → u₁=1, u₂=1.5, u₃=1.75, la suite semble converger vers 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "uₙ₊₁ = (uₙ+2)/2, u₀=0 → u₁=1, u₂=1.5, u₃=1.75, la suite semble converger vers 2"
      },
      {
        terme: "Exemple 2",
        definition: "uₙ₊₁ = √(uₙ+2), u₀=0, converge vers la solution positive de L=√(L+2), soit L=2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Suites et séries numériques ».",
      items: [
        { file: "11-0-cauchy.png", alt: "Suites et séries numériques" },
        { file: "11-1-riemann.png", alt: "Suites et séries numériques" },
        { file: "11-2-dalembert.png", alt: "Suites et séries numériques" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Démontrer par récurrence l'expression générale d'une suite",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/OIUi3MG8efY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Modéliser un algorithme itératif convergeant vers une solution (point fixe, méthode de Newton)"
      },
      {
        icon: "research",
        text: "Modéliser l'évolution d'une population ou d'un système dépendant de son état précédent"
      },
      {
        icon: "finance",
        text: "Modéliser l'évolution d'un capital avec des règles de placement dépendant de l'état précédent"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tude%20de%20la%20monotonie%20d%27une%20suite%20r%C3%A9currente%20via%20le%20signe%20de%20f%28x%29%E2%88%92x\" target=\"_blank\" rel=\"noopener noreferrer\">Étude de la monotonie d'une suite récurrente via le signe de f(x)−x</a>",
      "<a href=\"https://www.google.com/search?q=Recherche%20du%20point%20fixe%20d%27une%20suite%20convergente\" target=\"_blank\" rel=\"noopener noreferrer\">Recherche du point fixe d'une suite convergente</a>",
      "<a href=\"https://www.google.com/search?q=Repr%C3%A9sentation%20graphique%20en%20escalier%20ou%20en%20spirale%20d%27une%20suite%20r%C3%A9currente\" target=\"_blank\" rel=\"noopener noreferrer\">Représentation graphique en escalier ou en spirale d'une suite récurrente</a>"
    ]
  },
  "ecole:126": {
    title: "Cercle trigonométrique",
    definition: "Le cercle trigonométrique est le cercle de centre O et de rayon 1, muni d'un sens de parcours direct (sens inverse des aiguilles d'une montre). Il permet de définir le cosinus et le sinus d'un angle comme les coordonnées du point associé à cet angle.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé (O ; I, J) ; le cercle trigonométrique est le cercle 𝒞 de centre O et de rayon 1, orienté dans le sens direct (contraire des aiguilles d'une montre). Sa longueur est 2π.",
        axiomes: [
            {
                nom: "C1 — Enroulement",
                enonce: "À tout réel t, on associe le point M(t) de 𝒞 obtenu en parcourant, à partir de I, une longueur |t| sur 𝒞 (dans le sens direct si t > 0, indirect si t < 0)."
            },
            {
                nom: "C2 — Périodicité",
                enonce: "M(t + 2π) = M(t) pour tout réel t."
            },
            {
                nom: "C3 — Coordonnées",
                enonce: "Les coordonnées de M(t) sont (cos t ; sin t)."
            }
        ],
        conclusion: "Le cercle trigonométrique « enroule » la droite réelle : deux réels ont le même point image si et seulement si leur différence est un multiple de 2π. Comme OM(t) = 1, on a cos²t + sin²t = 1."
    },
    formulas: [
      {
        text: "1. Tout point M du cercle a pour coordonnées (cos θ, sin θ), où θ est l'angle orienté.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+1.+Tout+point+M+du+cercle+a+pour+coordonn%C3%A9es+%28cos+%CE%B8%2C+sin+%CE%B8%29%2C+o%C3%B9+%CE%B8+est+l%27angle+orient%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Le rayon du cercle trigonométrique vaut 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+2.+Le+rayon+du+cercle+trigonom%C3%A9trique+vaut+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le sens direct (positif) est le sens inverse des aiguilles d'une montre.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+3.+Le+sens+direct+%28positif%29+est+le+sens+inverse+des+aiguilles+d%27une+montre.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient les valeurs trigonométriques entre elles ; elles se démontrent à partir du cercle trigonométrique ou des nombres complexes.",
    details: "Il permet de définir le cosinus et le sinus d'un angle comme les coordonnées du point associé à cet angle. Par exemple, Pour θ = 0, le point M a pour coordonnées (1, 0) illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour θ = 0, le point M a pour coordonnées (1, 0)"
      },
      {
        terme: "Exemple 2",
        definition: "Pour θ = π/2, le point M a pour coordonnées (0, 1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Cercle circonscrit ».",
      items: [
        { file: "212-0-centre.png", alt: "Cercle circonscrit" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Placer un point sur le cercle trigonométrique (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7VAFJXLB9u0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Repérer la position angulaire d'un point en physique (mouvement circulaire, oscillations)"
      },
      {
        icon: "computer",
        text: "Générer des coordonnées de points régulièrement répartis sur un cercle dans un programme graphique"
      },
      {
        icon: "research",
        text: "Servir de base à la définition des fonctions sinus et cosinus pour tout angle"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Cercle%20trigonom%C3%A9trique%20et%20angles%20remarquables%20%28%CF%80/6%2C%20%CF%80/4%2C%20%CF%80/3%29\" target=\"_blank\" rel=\"noopener noreferrer\">Cercle trigonométrique et angles remarquables (π/6, π/4, π/3)</a>",
      "<a href=\"https://www.google.com/search?q=Cercle%20trigonom%C3%A9trique%20et%20nombres%20complexes%20de%20module%201\" target=\"_blank\" rel=\"noopener noreferrer\">Cercle trigonométrique et nombres complexes de module 1</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9tries%20du%20cercle%20trigonom%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Symétries du cercle trigonométrique</a>"
    ]
  },
  "ecole:127": {
    title: "Formules d’addition",
    definition: "Les formules d'addition en trigonométrie expriment le cosinus et le sinus de la somme (ou de la différence) de deux angles en fonction des cosinus et sinus de chacun des deux angles.",
    definition_axiomatique: {
        cadre: "On travaille sur le cercle trigonométrique : M(t) est le point de coordonnées (cos t ; sin t), et la rotation d'angle b de centre O envoie M(a) sur M(a + b).",
        axiomes: [
            {
                nom: "T1 — Cercle",
                enonce: "cos²t + sin²t = 1 pour tout réel t."
            },
            {
                nom: "T2 — Rotation",
                enonce: "La rotation de centre O et d'angle b est linéaire : elle envoie le vecteur (1 ; 0) sur (cos b ; sin b) et le vecteur (0 ; 1) sur (−sin b ; cos b)."
            },
            {
                nom: "T3 — Composition",
                enonce: "La rotation d'angle b envoie M(a) sur M(a + b)."
            }
        ],
        conclusion: "Le point M(a) a pour coordonnées (cos a ; sin a) = cos a·(1 ; 0) + sin a·(0 ; 1) ; son image par la rotation d'angle b est cos a·(cos b ; sin b) + sin a·(−sin b ; cos b). Par T3, c'est M(a + b), d'où cos(a + b) = cos a cos b − sin a sin b et sin(a + b) = sin a cos b + cos a sin b. En changeant b en −b : cos(a − b) = cos a cos b + sin a sin b et sin(a − b) = sin a cos b − cos a sin b."
    },
    formulas: [
      {
        text: "1. cos(a+b) = cos(a)cos(b) − sin(a)sin(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+1.+cos%28a%2Bb%29+%3D+cos%28a%29cos%28b%29+%E2%88%92+sin%28a%29sin%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. cos(a−b) = cos(a)cos(b) + sin(a)sin(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+2.+cos%28a%E2%88%92b%29+%3D+cos%28a%29cos%28b%29+%2B+sin%28a%29sin%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. sin(a+b) = sin(a)cos(b) + cos(a)sin(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+3.+sin%28a%2Bb%29+%3D+sin%28a%29cos%28b%29+%2B+cos%28a%29sin%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. sin(a−b) = sin(a)cos(b) − cos(a)sin(b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+4.+sin%28a%E2%88%92b%29+%3D+sin%28a%29cos%28b%29+%E2%88%92+cos%28a%29sin%28b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient les valeurs trigonométriques entre elles ; elles se démontrent à partir du cercle trigonométrique ou des nombres complexes.",
    details: "Les formules d'addition en trigonométrie expriment le cosinus et le sinus de la somme (ou de la différence) de deux angles en fonction des cosinus et sinus de chacun des deux angles. Par exemple, cos(π/3+π/6) = cos(π/2) = 0, vérifiable via la formule d'addition illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "cos(π/3+π/6) = cos(π/2) = 0, vérifiable via la formule d'addition"
      },
      {
        terme: "Exemple 2",
        definition: "sin(π/4+π/4) = sin(π/2) = 1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Trigonométrie ».",
      items: [
        { file: "207-0-pythagore-trig.png", alt: "Trigonométrie" },
        { file: "207-1-tangente.png", alt: "Trigonométrie" },
        { file: "207-2-addition.png", alt: "Trigonométrie" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Calculer des valeurs de cos et sin à l'aide des formules d'addition",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WcTWAazcXds",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer la valeur exacte de cosinus ou sinus d'angles non usuels, en les décomposant en angles connus"
      },
      {
        icon: "research",
        text: "Modéliser l'interférence de deux ondes déphasées en physique"
      },
      {
        icon: "computer",
        text: "Implémenter des rotations combinées en synthèse d'image ou en robotique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Formules%20de%20duplication%2C%20cas%20particulier%20des%20formules%20d%27addition\" target=\"_blank\" rel=\"noopener noreferrer\">Formules de duplication, cas particulier des formules d'addition</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20g%C3%A9om%C3%A9trique%20des%20formules%20d%27addition\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration géométrique des formules d'addition</a>",
      "<a href=\"https://www.google.com/search?q=Lin%C3%A9arisation%20d%27expressions%20trigonom%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Linéarisation d'expressions trigonométriques</a>"
    ]
  },
  "ecole:128": {
    title: "Formules de duplication",
    definition: "Les formules de duplication expriment le cosinus et le sinus du double d'un angle en fonction du cosinus et du sinus de cet angle. Elles se déduisent des formules d'addition en prenant a=b.",
    definition_axiomatique: {
        cadre: "On travaille avec les formules d'addition : cos(a + b) = cos a cos b − sin a sin b et sin(a + b) = sin a cos b + cos a sin b, ainsi que cos²a + sin²a = 1.",
        axiomes: [
            {
                nom: "A1 — Addition du cosinus",
                enonce: "cos(a + b) = cos a cos b − sin a sin b."
            },
            {
                nom: "A2 — Addition du sinus",
                enonce: "sin(a + b) = sin a cos b + cos a sin b."
            },
            {
                nom: "A3 — Cercle",
                enonce: "cos²a + sin²a = 1."
            }
        ],
        conclusion: "Avec b = a : cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a, et sin 2a = 2 sin a cos a. En lisant ces formules à l'envers, on obtient cos²a = (1 + cos 2a)/2 et sin²a = (1 − cos 2a)/2 (linéarisation)."
    },
    formulas: [
      {
        text: "1. cos(2a) = cos²(a) − sin²(a) = 2cos²(a) − 1 = 1 − 2sin²(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+1.+cos%282a%29+%3D+cos%C2%B2%28a%29+%E2%88%92+sin%C2%B2%28a%29+%3D+2cos%C2%B2%28a%29+%E2%88%92+1+%3D+1+%E2%88%92+2sin%C2%B2%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. sin(2a) = 2sin(a)cos(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+2.+sin%282a%29+%3D+2sin%28a%29cos%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Ces formules se déduisent des formules d'addition en posant b=a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+trigonom%C3%A9trie+3.+Ces+formules+se+d%C3%A9duisent+des+formules+d%27addition+en+posant+b%3Da.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient les valeurs trigonométriques entre elles ; elles se démontrent à partir du cercle trigonométrique ou des nombres complexes.",
    details: "Elles se déduisent des formules d'addition en prenant a=b. Par exemple, cos(π/2) = 2cos²(π/4)−1 = 2×(1/2)−1 = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "cos(π/2) = 2cos²(π/4)−1 = 2×(1/2)−1 = 0"
      },
      {
        terme: "Exemple 2",
        definition: "sin(π/3) = 2sin(π/6)cos(π/6) = 2×(1/2)×(√3/2) = √3/2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Trigonométrie ».",
      items: [
        { file: "207-0-pythagore-trig.png", alt: "Trigonométrie" },
        { file: "207-1-tangente.png", alt: "Trigonométrie" },
        { file: "207-2-addition.png", alt: "Trigonométrie" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Calculer des valeurs de cos et sin à l'aide des formules de duplication",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/RPtAUl3oLco",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Simplifier une expression trigonométrique ou résoudre une équation faisant intervenir un angle double"
      },
      {
        icon: "research",
        text: "Analyser un signal périodique en physique via ses harmoniques"
      },
      {
        icon: "computer",
        text: "Implémenter des calculs trigonométriques optimisés en informatique graphique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Formules%20de%20lin%C3%A9arisation%20d%C3%A9riv%C3%A9es%20des%20formules%20de%20duplication\" target=\"_blank\" rel=\"noopener noreferrer\">Formules de linéarisation dérivées des formules de duplication</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9solution%20d%27%C3%A9quations%20trigonom%C3%A9triques%20avec%20angle%20double\" target=\"_blank\" rel=\"noopener noreferrer\">Résolution d'équations trigonométriques avec angle double</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20les%20formules%20de%20Moivre%20en%20Terminale\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec les formules de Moivre en Terminale</a>"
    ]
  },
  "ecole:129": {
    title: "Radian",
    definition: "Le radian est une unité de mesure des angles, définie à partir de la longueur d'un arc de cercle. Un angle de 1 radian intercepte, sur un cercle de rayon r, un arc de longueur r.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien ; la mesure d'un angle est proportionnelle à la longueur de l'arc de cercle qu'il intercepte (cercle centré au sommet).",
        axiomes: [
            {
                nom: "R1 — Définition",
                enonce: "Un radian est la mesure de l'angle au centre qui intercepte, sur un cercle de rayon r, un arc de longueur r."
            },
            {
                nom: "R2 — Proportionnalité",
                enonce: "La mesure d'un angle au centre est proportionnelle à la longueur de l'arc intercepté."
            },
            {
                nom: "R3 — Angle plein",
                enonce: "Le cercle de rayon r a pour longueur 2πr."
            }
        ],
        conclusion: "L'angle plein mesure donc 2π radians = 360°, et π rad = 180°. Un angle de x degrés mesure x·π/180 radians ; un angle de θ radians dans un cercle de rayon r intercepte un arc de longueur rθ."
    },
    formulas: [
      {
        text: "1. π radians = 180°.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+1.+%CF%80+radians+%3D+180%C2%B0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Pour convertir des degrés en radians : radians = degrés × π/180.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+2.+Pour+convertir+des+degr%C3%A9s+en+radians+%3A+radians+%3D+degr%C3%A9s+%C3%97+%CF%80%2F180.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La longueur d'un arc de cercle de rayon r et d'angle θ (en radians) est L = rθ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+trigonom%C3%A9trie+3.+La+longueur+d%27un+arc+de+cercle+de+rayon+r+et+d%27angle+%CE%B8+%28en+radians%29+est+L+%3D+r%CE%B8.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient les valeurs trigonométriques entre elles ; elles se démontrent à partir du cercle trigonométrique ou des nombres complexes.",
    details: "Un angle de 1 radian intercepte, sur un cercle de rayon r, un arc de longueur r. Par exemple, 180° = π rad illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "180° = π rad"
      },
      {
        terme: "Exemple 2",
        definition: "90° = π/2 rad"
      },
      {
        terme: "Exemple 3",
        definition: "60° = π/3 rad"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Cercle circonscrit ».",
      items: [
        { file: "212-0-centre.png", alt: "Cercle circonscrit" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Passer des degrés aux radians et réciproquement",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-fu9bSBKM00",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer la longueur d'un arc de cercle ou la vitesse angulaire d'un objet en rotation"
      },
      {
        icon: "computer",
        text: "Utiliser le radian comme unité d'angle dans la plupart des langages de programmation"
      },
      {
        icon: "research",
        text: "Exprimer simplement des angles remarquables en physique et en mathématiques"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Radian%20et%20vitesse%20angulaire%20en%20physique\" target=\"_blank\" rel=\"noopener noreferrer\">Radian et vitesse angulaire en physique</a>",
      "<a href=\"https://www.google.com/search?q=Conversion%20entre%20degr%C3%A9s%2C%20radians%20et%20grades\" target=\"_blank\" rel=\"noopener noreferrer\">Conversion entre degrés, radians et grades</a>",
      "<a href=\"https://www.google.com/search?q=Radian%20et%20longueur%20d%27un%20arc%20de%20cercle\" target=\"_blank\" rel=\"noopener noreferrer\">Radian et longueur d'un arc de cercle</a>"
    ]
  },
  "ecole:130": {
    title: "Forme algébrique",
    definition: "La forme algébrique d'un nombre complexe z s'écrit z = a + ib, où a et b sont des nombres réels et i est le nombre imaginaire tel que i² = −1. a est appelé partie réelle et b partie imaginaire.",
    definition_axiomatique: {
        cadre: "On construit les nombres complexes à partir de ℝ² : ℂ est un corps commutatif qui contient ℝ et un nombre i tel que i² = −1.",
        axiomes: [
            {
                nom: "C1 — Corps",
                enonce: "ℂ est un corps commutatif (addition et multiplication associatives, commutatives, distributives ; opposés et inverses)."
            },
            {
                nom: "C2 — Nombre i",
                enonce: "ℂ contient ℝ et un élément i tel que i² = −1."
            },
            {
                nom: "C3 — Base",
                enonce: "Tout nombre complexe s'écrit de façon unique z = a + ib avec a et b réels."
            }
        ],
        conclusion: "La forme algébrique de z est a + ib : a = Re(z) est la partie réelle, b = Im(z) la partie imaginaire. Les règles se déduisent de C1 et C2 : (a + ib) + (c + id) = (a + c) + i(b + d) ; (a + ib)(c + id) = (ac − bd) + i(ad + bc) ; et, pour z ≠ 0, 1/z = (a − ib)/(a² + b²)."
    },
    formulas: [
      {
        text: "1. z = a + ib, avec a = Re(z) et b = Im(z).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+1.+z+%3D+a+%2B+ib%2C+avec+a+%3D+Re%28z%29+et+b+%3D+Im%28z%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. i² = −1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+2.+i%C2%B2+%3D+%E2%88%921.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Deux complexes sont égaux si et seulement s'ils ont même partie réelle et même partie imaginaire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+3.+Deux+complexes+sont+%C3%A9gaux+si+et+seulement+s%27ils+ont+m%C3%AAme+partie+r%C3%A9elle+et+m%C3%AAme+partie+imaginaire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient les différentes représentations d'un nombre complexe (algébrique, trigonométrique) entre elles.",
    details: "a est appelé partie réelle et b partie imaginaire. Par exemple, z = 3 + 2i a pour partie réelle 3 et partie imaginaire 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 3 + 2i a pour partie réelle 3 et partie imaginaire 2"
      },
      {
        terme: "Exemple 2",
        definition: "z = −1 + 4i a pour partie réelle −1 et partie imaginaire 4"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres réels ».",
      items: [
        { file: "100-0-droite-reelle.png", alt: "Nombres réels" },
        { file: "100-1-densite.png", alt: "Nombres réels" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Ecrire un nombre complexe sous forme algébrique (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/-aaSfL2fhTY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Résoudre des équations qui n'ont pas de solution réelle, comme x²+1=0"
      },
      {
        icon: "computer",
        text: "Représenter des signaux ou des circuits électriques en électronique à l'aide de nombres complexes"
      },
      {
        icon: "research",
        text: "Décrire des transformations géométriques du plan (rotations, translations)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Op%C3%A9rations%20sur%20les%20complexes%20sous%20forme%20alg%C3%A9brique%20%28somme%2C%20produit%29\" target=\"_blank\" rel=\"noopener noreferrer\">Opérations sur les complexes sous forme algébrique (somme, produit)</a>",
      "<a href=\"https://www.google.com/search?q=Conjugu%C3%A9%20et%20module%20d%27un%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Conjugué et module d'un complexe</a>",
      "<a href=\"https://www.google.com/search?q=Passage%20de%20la%20forme%20alg%C3%A9brique%20%C3%A0%20la%20forme%20trigonom%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Passage de la forme algébrique à la forme trigonométrique</a>"
    ]
  },
  "ecole:131": {
    title: "Module",
    definition: "Le module d'un nombre complexe z = a + ib, noté |z|, mesure sa distance à l'origine dans le plan complexe. C'est un nombre réel positif ou nul.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ, identifié au plan par z = a + ib ↔ M(a ; b).",
        axiomes: [
            {
                nom: "M1 — Positivité",
                enonce: "|z| ≥ 0, et |z| = 0 si et seulement si z = 0."
            },
            {
                nom: "M2 — Multiplicativité",
                enonce: "|zz'| = |z|·|z'|."
            },
            {
                nom: "M3 — Inégalité triangulaire",
                enonce: "|z + z'| ≤ |z| + |z'|."
            }
        ],
        conclusion: "Le module de z = a + ib est |z| = √(a² + b²), distance OM de l'origine au point d'affixe z ; il prolonge la valeur absolue des réels. Il vérifie M1 à M3 et |z|² = z·z̄. La distance entre les points d'affixes z et z' est |z − z'|."
    },
    formulas: [
      {
        text: "1. |z| = √(a² + b²).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+1.+%7Cz%7C+%3D+%E2%88%9A%28a%C2%B2+%2B+b%C2%B2%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. |z| = 0 si et seulement si z = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+2.+%7Cz%7C+%3D+0+si+et+seulement+si+z+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. |z × z'| = |z| × |z'|.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+3.+%7Cz+%C3%97+z%27%7C+%3D+%7Cz%7C+%C3%97+%7Cz%27%7C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient les différentes représentations d'un nombre complexe (algébrique, trigonométrique) entre elles.",
    details: "C'est un nombre réel positif ou nul. Par exemple, z = 3 + 4i → |z| = √(9+16) = √25 = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 3 + 4i → |z| = √(9+16) = √25 = 5"
      },
      {
        terme: "Exemple 2",
        definition: "z = 1 + i → |z| = √2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Calculer le module d'un nombre complexe (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Hu0jjS5O2u4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Mesurer l'amplitude d'un signal ou d'une grandeur physique représentée par un complexe"
      },
      {
        icon: "computer",
        text: "Calculer la distance entre deux points du plan via l'affixe de leur différence"
      },
      {
        icon: "finance",
        text: "Évaluer la magnitude d'une grandeur complexe utilisée en modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Module%20et%20distance%20entre%20deux%20points%20du%20plan%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Module et distance entre deux points du plan complexe</a>",
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20du%20module%20%28in%C3%A9galit%C3%A9%20triangulaire%29\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés du module (inégalité triangulaire)</a>",
      "<a href=\"https://www.google.com/search?q=Module%20et%20forme%20trigonom%C3%A9trique%20d%27un%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Module et forme trigonométrique d'un complexe</a>"
    ]
  },
  "ecole:132": {
    title: "Conjugué",
    definition: "Le conjugué d'un nombre complexe z = a + ib, noté z̄, est le nombre complexe a − ib. Il a la même partie réelle et une partie imaginaire opposée.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ, corps contenant ℝ et i avec i² = −1.",
        axiomes: [
            {
                nom: "A1 — Additivité",
                enonce: "conj(z + z') = conj(z) + conj(z')."
            },
            {
                nom: "A2 — Multiplicativité",
                enonce: "conj(zz') = conj(z)·conj(z')."
            },
            {
                nom: "A3 — Réels fixes",
                enonce: "conj(x) = x pour tout réel x."
            },
            {
                nom: "A4 — Non trivial",
                enonce: "conj n'est pas l'identité."
            }
        ],
        conclusion: "Il existe une seule application de ℂ dans ℂ vérifiant A1 à A4 : le conjugué, z = a + ib ↦ z̄ = a − ib. En effet, conj(i)² = conj(i²) = −1 et conj(i) ≠ i imposent conj(i) = −i. On a z + z̄ = 2 Re z, z − z̄ = 2i Im z, z·z̄ = |z|², et z est réel si et seulement si z̄ = z."
    },
    formulas: [
      {
        text: "1. z̄ = a − ib si z = a + ib.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+1.+z%CC%84+%3D+a+%E2%88%92+ib+si+z+%3D+a+%2B+ib.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. z × z̄ = a² + b² = |z|².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+2.+z+%C3%97+z%CC%84+%3D+a%C2%B2+%2B+b%C2%B2+%3D+%7Cz%7C%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. z + z̄ = 2Re(z) et z − z̄ = 2i·Im(z).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+nombres+complexes+3.+z+%2B+z%CC%84+%3D+2Re%28z%29+et+z+%E2%88%92+z%CC%84+%3D+2i%C2%B7Im%28z%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient les différentes représentations d'un nombre complexe (algébrique, trigonométrique) entre elles.",
    details: "Il a la même partie réelle et une partie imaginaire opposée. Par exemple, z = 3 + 2i → z̄ = 3 − 2i illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 3 + 2i → z̄ = 3 − 2i"
      },
      {
        terme: "Exemple 2",
        definition: "z = −1 − 5i → z̄ = −1 + 5i"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Déterminer le conjugué d'un nombre complexe",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WhKHo9YwafE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Simplifier une division de nombres complexes en multipliant par le conjugué du dénominateur"
      },
      {
        icon: "research",
        text: "Calculer le module d'un complexe à partir du produit z × z̄"
      },
      {
        icon: "research",
        text: "Étudier les racines complexes d'une équation à coefficients réels, toujours conjuguées deux à deux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Conjugu%C3%A9%20et%20division%20de%20deux%20nombres%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Conjugué et division de deux nombres complexes</a>",
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20du%20conjugu%C3%A9%20%28somme%2C%20produit%29\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés du conjugué (somme, produit)</a>",
      "<a href=\"https://www.google.com/search?q=Racines%20complexes%20conjugu%C3%A9es%20d%27un%20polyn%C3%B4me%20r%C3%A9el\" target=\"_blank\" rel=\"noopener noreferrer\">Racines complexes conjuguées d'un polynôme réel</a>"
    ]
  },
  "ecole:133": {
    title: "Forme trigonométrique",
    definition: "La forme trigonométrique d'un nombre complexe non nul z l'exprime à l'aide de son module r et d'un argument θ, sous la forme z = r(cos θ + i sin θ).",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ identifié au plan : z = a + ib ↔ M(a ; b), avec O l'origine et I(1 ; 0).",
        axiomes: [
            {
                nom: "F1 — Module",
                enonce: "r = |z| = √(a² + b²) est la distance OM."
            },
            {
                nom: "F2 — Argument",
                enonce: "Pour z ≠ 0, un argument θ de z est une mesure de l'angle orienté (OI, OM) : cos θ = a/r et sin θ = b/r."
            },
            {
                nom: "F3 — Unicité",
                enonce: "Le couple (r ; θ mod 2π) est unique pour z ≠ 0."
            }
        ],
        conclusion: "La forme trigonométrique de z ≠ 0 est z = r(cos θ + i sin θ) avec r = |z| et θ = arg z (mod 2π). Elle est unique à 2π près sur l'argument, et les formules d'addition donnent |zz'| = |z||z'| et arg(zz') = arg z + arg z'."
    },
    formulas: [
      {
        text: "1. z = r(cos θ + i sin θ), avec r = |z| et θ un argument de z.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+1.+z+%3D+r%28cos+%CE%B8+%2B+i+sin+%CE%B8%29%2C+avec+r+%3D+%7Cz%7C+et+%CE%B8+un+argument+de+z.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. cos θ = a/r et sin θ = b/r, si z = a+ib.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+2.+cos+%CE%B8+%3D+a%2Fr+et+sin+%CE%B8+%3D+b%2Fr%2C+si+z+%3D+a%2Bib.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Deux formes trigonométriques représentent le même complexe si elles ont même module et des arguments égaux à 2π près.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+3.+Deux+formes+trigonom%C3%A9triques+repr%C3%A9sentent+le+m%C3%AAme+complexe+si+elles+ont+m%C3%AAme+module+et+des+arguments+%C3%A9gaux+%C3%A0+2%CF%80+pr%C3%A8s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient les différentes représentations d'un nombre complexe (algébrique, trigonométrique) entre elles.",
    details: "La forme trigonométrique d'un nombre complexe non nul z l'exprime à l'aide de son module r et d'un argument θ, sous la forme z = r(cos θ + i sin θ). Par exemple, z = 1 + i a pour module √2 et argument π/4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 1 + i a pour module √2 et argument π/4"
      },
      {
        terme: "Exemple 2",
        definition: "z = −1 a pour forme trigonométrique 1×(cos π + i sin π)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Passer de la forme algébrique à la forme trigonométrique (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zIbpXlgISc4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Simplifier la multiplication et la division de nombres complexes en utilisant module et argument"
      },
      {
        icon: "research",
        text: "Décrire une rotation dans le plan complexe"
      },
      {
        icon: "computer",
        text: "Représenter un signal périodique par son amplitude et sa phase"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Passage%20entre%20forme%20alg%C3%A9brique%20et%20forme%20trigonom%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Passage entre forme algébrique et forme trigonométrique</a>",
      "<a href=\"https://www.google.com/search?q=Produit%20et%20quotient%20de%20complexes%20sous%20forme%20trigonom%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Produit et quotient de complexes sous forme trigonométrique</a>",
      "<a href=\"https://www.google.com/search?q=Forme%20exponentielle%2C%20notation%20compacte%20de%20la%20forme%20trigonom%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Forme exponentielle, notation compacte de la forme trigonométrique</a>"
    ]
  },
  "ecole:134": {
    title: "Forme exponentielle",
    definition: "La forme exponentielle d'un nombre complexe non nul z s'écrit z = r·e^(iθ), où r est le module et θ un argument. Elle découle de la formule d'Euler et simplifie considérablement les calculs de produits et de puissances.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ ; on définit, pour tout réel θ, le nombre e^{iθ} = cos θ + i sin θ.",
        axiomes: [
            {
                nom: "E1 — Module 1",
                enonce: "|e^{iθ}| = 1."
            },
            {
                nom: "E2 — Relation fonctionnelle",
                enonce: "e^{i(θ + θ')} = e^{iθ}·e^{iθ'} (formules d'addition)."
            },
            {
                nom: "E3 — Équation différentielle",
                enonce: "θ ↦ e^{iθ} est dérivable, de dérivée i·e^{iθ}, et e^{i0} = 1."
            }
        ],
        conclusion: "Cette notation est justifiée : θ ↦ e^{iθ} est, comme l'exponentielle réelle, un morphisme du groupe (ℝ, +) dans un groupe multiplicatif, de dérivée proportionnelle à elle-même. La forme exponentielle de z ≠ 0 est z = r·e^{iθ} avec r = |z|, θ = arg z ; on a e^{iπ} = −1, et (r e^{iθ})(r' e^{iθ'}) = rr' e^{i(θ + θ')}."
    },
    formulas: [
      {
        text: "1. z = r·e^(iθ), avec r = |z| et θ = arg(z).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+1.+z+%3D+r%C2%B7e%5E%28i%CE%B8%29%2C+avec+r+%3D+%7Cz%7C+et+%CE%B8+%3D+arg%28z%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. e^(iθ) = cos θ + i sin θ (formule d'Euler).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+2.+e%5E%28i%CE%B8%29+%3D+cos+%CE%B8+%2B+i+sin+%CE%B8+%28formule+d%27Euler%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. z × z' = r·r' × e^(i(θ+θ')) : les modules se multiplient, les arguments s'additionnent.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+nombres+complexes+3.+z+%C3%97+z%27+%3D+r%C2%B7r%27+%C3%97+e%5E%28i%28%CE%B8%2B%CE%B8%27%29%29+%3A+les+modules+se+multiplient%2C+les+arguments+s%27additionnent.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Rotation : z' = e^{iθ} z",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Forme%20exponentielle%20Rotation%20%3A%20z%27%20%3D%20e%5E%7Bi%CE%B8%7D%20z%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Translation : z' = z + a",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Forme%20exponentielle%20Translation%20%3A%20z%27%20%3D%20z%20%2B%20a%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "6. Homothétie : z' = k z",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Forme%20exponentielle%20Homoth%C3%A9tie%20%3A%20z%27%20%3D%20k%20z%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient les différentes représentations d'un nombre complexe (algébrique, trigonométrique) entre elles.",
    details: "Elle découle de la formule d'Euler et simplifie considérablement les calculs de produits et de puissances. Par exemple, z = 2e^(iπ/3) a pour module 2 et argument π/3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 2e^(iπ/3) a pour module 2 et argument π/3"
      },
      {
        terme: "Exemple 2",
        definition: "e^(iπ) = −1 (identité d'Euler)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Ecrire un nombre complexe sous forme exponentielle (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WSW6DIbCS_0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Simplifier des calculs de rotations et de puissances de nombres complexes en physique et en électronique"
      },
      {
        icon: "computer",
        text: "Représenter des signaux et effectuer des transformées de Fourier en traitement du signal"
      },
      {
        icon: "research",
        text: "Résoudre des équations différentielles linéaires dont les solutions s'expriment avec des exponentielles complexes"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Formule%20de%20Moivre%2C%20cons%C3%A9quence%20directe%20de%20la%20forme%20exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Formule de Moivre, conséquence directe de la forme exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=Calcul%20de%20puissances%20de%20nombres%20complexes%20via%20la%20forme%20exponentielle\" target=\"_blank\" rel=\"noopener noreferrer\">Calcul de puissances de nombres complexes via la forme exponentielle</a>",
      "<a href=\"https://www.google.com/search?q=Applications%20en%20%C3%A9lectronique%20%28imp%C3%A9dance%20complexe%29\" target=\"_blank\" rel=\"noopener noreferrer\">Applications en électronique (impédance complexe)</a>"
    ]
  },
  "ecole:135": {
    title: "Formule de Moivre",
    definition: "La formule de Moivre permet de calculer la puissance n-ième d'un nombre complexe de module 1 en multipliant simplement son argument par n : (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ ; on utilise les formules d'addition du cosinus et du sinus.",
        axiomes: [
            {
                nom: "M1 — Produit",
                enonce: "(cos a + i sin a)(cos b + i sin b) = cos(a + b) + i sin(a + b)."
            },
            {
                nom: "M2 — Récurrence",
                enonce: "Une propriété vraie au rang 0 et héréditaire est vraie pour tout entier n."
            }
        ],
        conclusion: "Pour tout entier n et tout réel θ, (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ : par récurrence sur n (M1, M2), puis pour n négatif par inverse (cos θ + i sin θ)⁻¹ = cos θ − i sin θ. En notation exponentielle, (e^{iθ})ⁿ = e^{inθ}. On en tire les formules de linéarisation et cos 3θ = 4cos³θ − 3cos θ."
    },
    formulas: [
      {
        text: "1. (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ), pour tout entier n.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+1.+%28cos+%CE%B8+%2B+i+sin+%CE%B8%29%E2%81%BF+%3D+cos%28n%CE%B8%29+%2B+i+sin%28n%CE%B8%29%2C+pour+tout+entier+n.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Plus généralement, (r e^(iθ))ⁿ = rⁿ e^(inθ).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+2.+Plus+g%C3%A9n%C3%A9ralement%2C+%28r+e%5E%28i%CE%B8%29%29%E2%81%BF+%3D+r%E2%81%BF+e%5E%28in%CE%B8%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette formule découle directement de la forme exponentielle des complexes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+3.+Cette+formule+d%C3%A9coule+directement+de+la+forme+exponentielle+des+complexes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient nombres complexes et trigonométrie ; elles se démontrent à partir de la forme exponentielle des complexes.",
    details: "La formule de Moivre permet de calculer la puissance n-ième d'un nombre complexe de module 1 en multipliant simplement son argument par n : (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ). Par exemple, (cos(π/6)+i sin(π/6))³ = cos(π/2)+i sin(π/2) = i illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(cos(π/6)+i sin(π/6))³ = cos(π/2)+i sin(π/2) = i"
      },
      {
        terme: "Exemple 2",
        definition: "(1+i)⁴ = −4, obtenu via Moivre en forme exponentielle"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la formule de Moivre",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/RU2C4i3n5Ik",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer rapidement des puissances élevées de nombres complexes en physique ou en électronique"
      },
      {
        icon: "computer",
        text: "Implémenter des rotations répétées en synthèse d'image ou en traitement du signal"
      },
      {
        icon: "research",
        text: "Retrouver des formules trigonométriques (cos(3θ), sin(3θ)) par développement"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Utilisation%20de%20la%20formule%20de%20Moivre%20pour%20exprimer%20cos%28n%CE%B8%29%20et%20sin%28n%CE%B8%29\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation de la formule de Moivre pour exprimer cos(nθ) et sin(nθ)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20la%20formule%20d%27Euler\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec la formule d'Euler</a>",
      "<a href=\"https://www.google.com/search?q=Application%20%C3%A0%20la%20recherche%20des%20racines%20n-i%C3%A8mes%20d%27un%20nombre%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Application à la recherche des racines n-ièmes d'un nombre complexe</a>"
    ]
  },
  "ecole:136": {
    title: "Formule d’Euler",
    definition: "La formule d'Euler relie l'exponentielle complexe aux fonctions trigonométriques : e^(iθ) = cos θ + i sin θ. Elle est à la base de la forme exponentielle des nombres complexes.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ ; on cherche une fonction f de ℝ dans ℂ dérivable qui vérifie f' = if, comme l'exponentielle réelle vérifie y' = y.",
        axiomes: [
            {
                nom: "E1 — Équation",
                enonce: "f est dérivable et f'(θ) = i·f(θ)."
            },
            {
                nom: "E2 — Condition initiale",
                enonce: "f(0) = 1."
            },
            {
                nom: "E3 — Unicité",
                enonce: "Si f' = if, alors (f(θ)e^{−iθ})' = 0 : f est déterminée par f(0)."
            }
        ],
        conclusion: "La fonction f(θ) = cos θ + i sin θ vérifie E1 et E2, car f' = −sin θ + i cos θ = i(cos θ + i sin θ). C'est donc l'unique solution, notée e^{iθ} : e^{iθ} = cos θ + i sin θ (formule d'Euler). On en déduit cos θ = (e^{iθ} + e^{−iθ})/2, sin θ = (e^{iθ} − e^{−iθ})/(2i) et e^{iπ} + 1 = 0."
    },
    formulas: [
      {
        text: "1. e^(iθ) = cos θ + i sin θ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+1.+e%5E%28i%CE%B8%29+%3D+cos+%CE%B8+%2B+i+sin+%CE%B8.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. cos θ = (e^(iθ) + e^(−iθ))/2.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+2.+cos+%CE%B8+%3D+%28e%5E%28i%CE%B8%29+%2B+e%5E%28%E2%88%92i%CE%B8%29%29%2F2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. sin θ = (e^(iθ) − e^(−iθ))/(2i).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+3.+sin+%CE%B8+%3D+%28e%5E%28i%CE%B8%29+%E2%88%92+e%5E%28%E2%88%92i%CE%B8%29%29%2F%282i%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Cas particulier remarquable : e^(iπ) + 1 = 0 (identité d'Euler).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+4.+Cas+particulier+remarquable+%3A+e%5E%28i%CF%80%29+%2B+1+%3D+0+%28identit%C3%A9+d%27Euler%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient nombres complexes et trigonométrie ; elles se démontrent à partir de la forme exponentielle des complexes.",
    details: "Elle est à la base de la forme exponentielle des nombres complexes. Par exemple, e^(iπ/2) = cos(π/2)+i sin(π/2) = i illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "e^(iπ/2) = cos(π/2)+i sin(π/2) = i"
      },
      {
        terme: "Exemple 2",
        definition: "e^(iπ) = cos(π)+i sin(π) = −1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres complexes ».",
      items: [
        { file: "101-0-argand.png", alt: "Nombres complexes" },
        { file: "101-2-module.png", alt: "Nombres complexes" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules d'Euler pour linéariser",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/p6TncUjPKfQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Linéariser des expressions trigonométriques (cos²θ, sin³θ) grâce aux formules d'Euler"
      },
      {
        icon: "research",
        text: "Analyser des signaux et ondes en physique via la représentation complexe des oscillations"
      },
      {
        icon: "computer",
        text: "Implémenter des transformées de Fourier basées sur les exponentielles complexes"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Lin%C3%A9arisation%20trigonom%C3%A9trique%20%C3%A0%20l%27aide%20des%20formules%20d%27Euler\" target=\"_blank\" rel=\"noopener noreferrer\">Linéarisation trigonométrique à l'aide des formules d'Euler</a>",
      "<a href=\"https://www.google.com/search?q=Identit%C3%A9%20d%27Euler%20et%20sa%20signification\" target=\"_blank\" rel=\"noopener noreferrer\">Identité d'Euler et sa signification</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20formule%20d%27Euler%20et%20formule%20de%20Moivre\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre formule d'Euler et formule de Moivre</a>"
    ]
  },
  "ecole:137": {
    title: "Argument",
    definition: "L'argument d'un nombre complexe non nul z est une mesure, en radians, de l'angle formé par le vecteur représentant z avec l'axe des réels positifs. Il est défini modulo 2π.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ identifié au plan ; z ≠ 0 est un nombre complexe.",
        axiomes: [
            {
                nom: "A1 — Existence",
                enonce: "Le nombre z/|z| est sur le cercle unité, donc il existe un réel θ tel que z/|z| = cos θ + i sin θ."
            },
            {
                nom: "A2 — Unicité modulo 2π",
                enonce: "Deux réels θ et θ' conviennent si et seulement si θ − θ' est un multiple de 2π."
            },
            {
                nom: "A3 — Produit",
                enonce: "(cos a + i sin a)(cos b + i sin b) = cos(a + b) + i sin(a + b)."
            }
        ],
        conclusion: "Un argument de z est un tel réel θ, défini modulo 2π ; c'est la mesure de l'angle orienté (OI, OM). Par A3, arg(zz') = arg z + arg z' , arg(z/z') = arg z − arg z' et arg(zⁿ) = n·arg z (modulo 2π). z est réel si et seulement si arg z ≡ 0 [π]."
    },
    formulas: [
      {
        text: "1. Si z = a+ib, alors cos(arg z) = a/|z| et sin(arg z) = b/|z|.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+1.+Si+z+%3D+a%2Bib%2C+alors+cos%28arg+z%29+%3D+a%2F%7Cz%7C+et+sin%28arg+z%29+%3D+b%2F%7Cz%7C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. arg(z×z') = arg(z) + arg(z') [2π].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+2.+arg%28z%C3%97z%27%29+%3D+arg%28z%29+%2B+arg%28z%27%29+%5B2%CF%80%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. arg(z/z') = arg(z) − arg(z') [2π].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+3.+arg%28z%2Fz%27%29+%3D+arg%28z%29+%E2%88%92+arg%28z%27%29+%5B2%CF%80%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. arg(z̄) = −arg(z) [2π].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+4.+arg%28z%CC%84%29+%3D+%E2%88%92arg%28z%29+%5B2%CF%80%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient nombres complexes et trigonométrie ; elles se démontrent à partir de la forme exponentielle des complexes.",
    details: "Il est défini modulo 2π. Par exemple, z = 1+i → arg(z) = π/4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z = 1+i → arg(z) = π/4"
      },
      {
        terme: "Exemple 2",
        definition: "z = −1 → arg(z) = π"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres réels ».",
      items: [
        { file: "100-0-droite-reelle.png", alt: "Nombres réels" },
        { file: "100-1-densite.png", alt: "Nombres réels" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Calculer un argument",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NX3pzPL2gwc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Décrire l'angle de phase d'un signal électrique ou d'une onde en physique"
      },
      {
        icon: "computer",
        text: "Calculer l'orientation d'un vecteur ou d'une rotation dans un programme graphique"
      },
      {
        icon: "research",
        text: "Étudier des transformations géométriques représentées par des complexes"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9s%20de%20l%27argument%20%28produit%2C%20quotient%2C%20conjugu%C3%A9%29\" target=\"_blank\" rel=\"noopener noreferrer\">Propriétés de l'argument (produit, quotient, conjugué)</a>",
      "<a href=\"https://www.google.com/search?q=Argument%20et%20interpr%C3%A9tation%20g%C3%A9om%C3%A9trique%20dans%20le%20plan%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Argument et interprétation géométrique dans le plan complexe</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9termination%20pratique%20de%20l%27argument%20%C3%A0%20partir%20de%20la%20forme%20alg%C3%A9brique\" target=\"_blank\" rel=\"noopener noreferrer\">Détermination pratique de l'argument à partir de la forme algébrique</a>"
    ]
  },
  "ecole:138": {
    title: "Équations dans ℂ",
    definition: "Résoudre une équation dans ℂ consiste à chercher toutes les solutions complexes d'une équation, y compris celles qui n'ont pas de solution réelle, comme les équations du second degré à discriminant négatif.",
    definition_axiomatique: {
        cadre: "On travaille dans ℂ, corps commutatif contenant ℝ.",
        axiomes: [
            {
                nom: "C1 — Corps",
                enonce: "ℂ est un corps : un produit est nul si et seulement si un facteur est nul."
            },
            {
                nom: "C2 — d'Alembert-Gauss",
                enonce: "Tout polynôme non constant à coefficients complexes possède au moins une racine dans ℂ."
            },
            {
                nom: "C3 — Conjugaison",
                enonce: "Si P est à coefficients réels et P(z) = 0, alors P(z̄) = 0."
            }
        ],
        conclusion: "Un polynôme de degré n se factorise en n facteurs de degré 1 sur ℂ. Pour az² + bz + c = 0 avec Δ = b² − 4ac < 0 (coefficients réels), les deux solutions sont conjuguées : (−b ± i√(−Δ))/2a. L'équation zⁿ = r e^{iθ} a n solutions : r^{1/n}·e^{i(θ + 2kπ)/n}, k = 0, …, n − 1 (racines n-ièmes)."
    },
    formulas: [
      {
        text: "1. Si Δ < 0, l'équation az²+bz+c=0 a deux solutions complexes conjuguées : z = (−b ± i√(−Δ))/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+1.+Si+%CE%94+%3C+0%2C+l%27%C3%A9quation+az%C2%B2%2Bbz%2Bc%3D0+a+deux+solutions+complexes+conjugu%C3%A9es+%3A+z+%3D+%28%E2%88%92b+%C2%B1+i%E2%88%9A%28%E2%88%92%CE%94%29%29%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Toute équation polynomiale de degré n a exactement n solutions dans ℂ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+2.+Toute+%C3%A9quation+polynomiale+de+degr%C3%A9+n+a+exactement+n+solutions+dans+%E2%84%82.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les racines n-ièmes de l'unité sont solutions de zⁿ=1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+trigonom%C3%A9trie+avanc%C3%A9e+3.+Les+racines+n-i%C3%A8mes+de+l%27unit%C3%A9+sont+solutions+de+z%E2%81%BF%3D1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces formules relient nombres complexes et trigonométrie ; elles se démontrent à partir de la forme exponentielle des complexes.",
    details: "Résoudre une équation dans ℂ consiste à chercher toutes les solutions complexes d'une équation, y compris celles qui n'ont pas de solution réelle, comme les équations du second degré à discriminant négatif. Par exemple, z² + 1 = 0 → z = i ou z = −i illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "z² + 1 = 0 → z = i ou z = −i"
      },
      {
        terme: "Exemple 2",
        definition: "z² − 2z + 5 = 0, Δ=−16 → z = 1±2i"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres complexes ».",
      items: [
        { file: "101-0-argand.png", alt: "Nombres complexes" },
        { file: "101-2-module.png", alt: "Nombres complexes" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation du second degré dans ℂ",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/KCnorHy5FE4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Résoudre des équations n'ayant pas de solution réelle, indispensables en électronique"
      },
      {
        icon: "computer",
        text: "Implémenter la résolution d'équations polynomiales complexes dans un logiciel de calcul formel"
      },
      {
        icon: "research",
        text: "Étudier les racines de l'unité, utiles en théorie du signal"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9solution%20d%27%C3%A9quations%20polynomiales%20de%20degr%C3%A9%20sup%C3%A9rieur%20%C3%A0%202%20dans%20%E2%84%82\" target=\"_blank\" rel=\"noopener noreferrer\">Résolution d'équations polynomiales de degré supérieur à 2 dans ℂ</a>",
      "<a href=\"https://www.google.com/search?q=Racines%20n-i%C3%A8mes%20d%27un%20nombre%20complexe\" target=\"_blank\" rel=\"noopener noreferrer\">Racines n-ièmes d'un nombre complexe</a>",
      "<a href=\"https://www.google.com/search?q=Th%C3%A9or%C3%A8me%20fondamental%20de%20l%27alg%C3%A8bre\" target=\"_blank\" rel=\"noopener noreferrer\">Théorème fondamental de l'algèbre</a>"
    ]
  },
  "ecole:139": {
    title: "Affixe",
    definition: "L'affixe d'un point M du plan complexe est le nombre complexe z = a+ib qui lui est associé, où (a,b) sont les coordonnées de M. Réciproquement, tout nombre complexe est l'affixe d'un unique point du plan.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé direct (O ; u, v), et dans ℂ = {a + ib}.",
        axiomes: [
            {
                nom: "A1 — Identification",
                enonce: "L'application a + ib ↦ (a ; b) est une bijection de ℂ sur ℝ², compatible avec l'addition et la multiplication par un réel."
            },
            {
                nom: "A2 — Affixe d'un point",
                enonce: "L'affixe du point M(a ; b) est z_M = a + ib ; celle du vecteur w(a ; b) est z_w = a + ib."
            },
            {
                nom: "A3 — Vecteur AB",
                enonce: "L'affixe de AB est z_B − z_A."
            }
        ],
        conclusion: "L'affixe permet de traduire la géométrie du plan en calcul : le milieu de [AB] a pour affixe (z_A + z_B)/2 ; la translation de vecteur d'affixe b est z ↦ z + b ; les affixes de AB et CD sont égales si et seulement si AB = CD."
    },
    formulas: [
      {
        text: "1. Si M a pour coordonnées (a,b), son affixe est z = a+ib.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+1.+Si+M+a+pour+coordonn%C3%A9es+%28a%2Cb%29%2C+son+affixe+est+z+%3D+a%2Bib.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. L'affixe du vecteur AB est z_B − z_A.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+2.+L%27affixe+du+vecteur+AB+est+z_B+%E2%88%92+z_A.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. La distance AB est égale à |z_B − z_A|.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+3.+La+distance+AB+est+%C3%A9gale+%C3%A0+%7Cz_B+%E2%88%92+z_A%7C.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la représentation algébrique d'un complexe à son interprétation géométrique dans le plan.",
    details: "Réciproquement, tout nombre complexe est l'affixe d'un unique point du plan. Par exemple, Le point M(3,2) a pour affixe z = 3+2i illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Le point M(3,2) a pour affixe z = 3+2i"
      },
      {
        terme: "Exemple 2",
        definition: "Si A a pour affixe 1+i et B pour affixe 4+5i, alors AB = |3+4i| = 5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Analyse complexe ».",
      items: [
        { file: "8-0-point-complexe.png", alt: "Analyse complexe" },
        { file: "8-1-euler.png", alt: "Analyse complexe" },
        { file: "8-2-contour.png", alt: "Analyse complexe" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Déterminer l'affixe d'un vecteur",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/D_yFqcCy3iE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Représenter des transformations géométriques (rotations, translations) via les affixes"
      },
      {
        icon: "computer",
        text: "Modéliser des points et des déplacements dans le plan en infographie via des nombres complexes"
      },
      {
        icon: "research",
        text: "Étudier la géométrie plane (alignement, distances) à l'aide des affixes"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Affixe%20d%27un%20vecteur%20et%20interpr%C3%A9tation%20g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Affixe d'un vecteur et interprétation géométrique</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20des%20affixes%20pour%20d%C3%A9montrer%20des%20propri%C3%A9t%C3%A9s%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation des affixes pour démontrer des propriétés géométriques</a>",
      "<a href=\"https://www.google.com/search?q=Transformations%20du%20plan%20exprim%C3%A9es%20avec%20les%20affixes\" target=\"_blank\" rel=\"noopener noreferrer\">Transformations du plan exprimées avec les affixes</a>"
    ]
  },
  "ecole:140": {
    title: "Module et argument géométriques",
    definition: "Le module et l'argument d'un nombre complexe ont une interprétation géométrique directe : le module est la distance du point à l'origine, l'argument est l'angle que fait le vecteur associé avec l'axe des réels.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan complexe : A, B, C sont trois points distincts d'affixes z_A, z_B, z_C.",
        axiomes: [
            {
                nom: "G1 — Module",
                enonce: "|z_B − z_A| = AB."
            },
            {
                nom: "G2 — Argument",
                enonce: "arg((z_C − z_A)/(z_B − z_A)) ≡ (AB, AC) [2π]."
            },
            {
                nom: "G3 — Quotient",
                enonce: "(z_C − z_A)/(z_B − z_A) a pour module AC/AB."
            }
        ],
        conclusion: "A, B, C sont alignés si et seulement si (z_C − z_A)/(z_B − z_A) est réel ; (AB) ⊥ (AC) si et seulement s'il est imaginaire pur ; ABC est équilatéral si et seulement si ce quotient est e^{±iπ/3}. Une rotation de centre Ω et d'angle θ s'écrit z' − ω = e^{iθ}(z − ω)."
    },
    formulas: [
      {
        text: "1. |z| = OM, distance du point M (d'affixe z) à l'origine O.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+1.+%7Cz%7C+%3D+OM%2C+distance+du+point+M+%28d%27affixe+z%29+%C3%A0+l%27origine+O.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. arg(z) est l'angle orienté entre l'axe des réels et le vecteur OM.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+2.+arg%28z%29+est+l%27angle+orient%C3%A9+entre+l%27axe+des+r%C3%A9els+et+le+vecteur+OM.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Pour deux points A et B, |z_B − z_A| = AB et arg(z_B − z_A) donne la direction du vecteur AB.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+nombres+complexes+avances+3.+Pour+deux+points+A+et+B%2C+%7Cz_B+%E2%88%92+z_A%7C+%3D+AB+et+arg%28z_B+%E2%88%92+z_A%29+donne+la+direction+du+vecteur+AB.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés relient la représentation algébrique d'un complexe à son interprétation géométrique dans le plan.",
    details: "Le module et l'argument d'un nombre complexe ont une interprétation géométrique directe : le module est la distance du point à l'origine, l'argument est l'angle que fait le vecteur associé avec l'axe des réels. Par exemple, Le point d'affixe 3+4i est à distance 5 de l'origine illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Le point d'affixe 3+4i est à distance 5 de l'origine"
      },
      {
        terme: "Exemple 2",
        definition: "Le vecteur AB avec A(1,0) et B(1,3) a pour affixe 3i, de module 3 et d'argument π/2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres réels ».",
      items: [
        { file: "100-0-droite-reelle.png", alt: "Nombres réels" },
        { file: "100-1-densite.png", alt: "Nombres réels" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Nombres complexes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ABo2m52oEYw",
        lang: "fr"
      },
      methode: {
        title: "Utiliser une affixe en géométrie",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/m9yM6kw1ZzU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Déterminer la distance et l'orientation entre deux points dans un plan via leurs affixes"
      },
      {
        icon: "computer",
        text: "Calculer des distances et des angles dans un programme de géométrie utilisant des complexes"
      },
      {
        icon: "research",
        text: "Étudier des figures géométriques (triangles, cercles) à l'aide du module et de l'argument"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Caract%C3%A9risation%20d%27un%20cercle%20par%20%7Cz%20%E2%88%92%20z%E2%82%80%7C%20%3D%20r\" target=\"_blank\" rel=\"noopener noreferrer\">Caractérisation d'un cercle par |z − z₀| = r</a>",
      "<a href=\"https://www.google.com/search?q=Caract%C3%A9risation%20d%27une%20droite%20ou%20d%27une%20m%C3%A9diatrice%20via%20le%20module\" target=\"_blank\" rel=\"noopener noreferrer\">Caractérisation d'une droite ou d'une médiatrice via le module</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20du%20module%20et%20de%20l%27argument%20pour%20d%C3%A9montrer%20des%20propri%C3%A9t%C3%A9s%20g%C3%A9om%C3%A9triques\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation du module et de l'argument pour démontrer des propriétés géométriques</a>"
    ]
  },
  "ecole:141": {
    title: "Probabilité d’un événement",
    definition: "La probabilité d’un événement mesure la chance qu’il se produise. Dans le cas d’une expérience aléatoire à issues équiprobables, elle est égale au nombre de cas favorables divisé par le nombre de cas possibles.",
    definition_axiomatique: {
        cadre: "Une expérience aléatoire a pour univers Ω ; on cherche à mesurer la vraisemblance des événements par un nombre P(A).",
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
        conclusion: "Une probabilité est une application P vérifiant P1 à P3. On en déduit 0 ≤ P(A) ≤ 1 et P(∅) = 0. Si toutes les issues sont équiprobables, P(A) = |A|/|Ω| (cas favorables sur cas possibles).",
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
        text: "1. P(A) ∈ [0,1].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28A%29+%E2%88%88+%5B0%2C1%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. P(∅)=0, P(Ω)=1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+P%28%E2%88%85%29%3D0%2C+P%28%CE%A9%29%3D1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. P(Ā)=1−P(A).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+P%28A%CC%84%29%3D1%E2%88%92P%28A%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre cas favorables et cas possibles.",
    details: "Dans le cas d’une expérience aléatoire à issues équiprobables, elle est égale au nombre de cas favorables divisé par le nombre de cas possibles. Cette notion s'appuie sur : expérience aléatoire, événements. Par exemple, Lancer un dé : P({2})=1/6 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer un dé : P({2})=1/6"
      },
      {
        terme: "Exemple 2",
        definition: "P({nombre pair})=3/6=1/2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilité d’un événement ».",
      items: [
        { file: "301-1-intervalle.png", alt: "Probabilité d’un événement" },
        { file: "301-2-total.png", alt: "Probabilité d’un événement" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d6Co0q01QH0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Jeux"
      },
      {
        icon: "finance",
        text: "Risques"
      },
      {
        icon: "research",
        text: "Statistiques"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20probabilit%C3%A9%20d%E2%80%99obtenir%20un%20multiple%20de%203%20avec%20un%20d%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la probabilité d’obtenir un multiple de 3 avec un dé.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20probabilit%C3%A9%20d%E2%80%99obtenir%20un%20as%20avec%20un%20jeu%20de%2052%20cartes.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la probabilité d’obtenir un as avec un jeu de 52 cartes.</a>"
    ]
  },
  "ecole:142": {
    title: "Événement contraire",
    definition: "L'événement contraire d'un événement A, noté Ā, est l'événement constitué de toutes les issues de l'univers qui n'appartiennent pas à A.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; l'événement contraire de A est A̅ = Ω \\ A.",
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
        conclusion: "A et A̅ sont incompatibles et leur réunion est Ω : par P3 puis P2, P(A) + P(A̅) = P(Ω) = 1, donc P(A̅) = 1 − P(A). Cette relation permet de calculer P(A) à partir de P(A̅), souvent plus simple (événement « au moins un »).",
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
        text: "1. P(Ā) = 1 − P(A).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28%C4%80%29+%3D+1+%E2%88%92+P%28A%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. A et Ā sont incompatibles : A ∩ Ā = ∅.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+A+et+%C4%80+sont+incompatibles+%3A+A+%E2%88%A9+%C4%80+%3D+%E2%88%85.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. A ∪ Ā = Ω (l'univers tout entier).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+A+%E2%88%AA+%C4%80+%3D+%CE%A9+%28l%27univers+tout+entier%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent à l'aide d'un arbre de probabilités ou d'un tableau pour mener un calcul complet.",
    details: "L'événement contraire d'un événement A, noté Ā, est l'événement constitué de toutes les issues de l'univers qui n'appartiennent pas à A. Par exemple, Lancer un dé, A = « obtenir un nombre pair » → Ā = « obtenir un nombre impair », P(Ā) = 1/2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer un dé, A = « obtenir un nombre pair » → Ā = « obtenir un nombre impair », P(Ā) = 1/2"
      },
      {
        terme: "Exemple 2",
        definition: "P(A) = 0.3 → P(Ā) = 0.7"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilité d’un événement ».",
      items: [
        { file: "301-1-intervalle.png", alt: "Probabilité d’un événement" },
        { file: "301-2-total.png", alt: "Probabilité d’un événement" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d6Co0q01QH0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer la probabilité qu'un événement ne se produise pas, souvent plus simple que le calcul direct"
      },
      {
        icon: "finance",
        text: "Évaluer un risque en passant par la probabilité de l'absence d'incident"
      },
      {
        icon: "computer",
        text: "Simplifier un calcul de probabilité complexe en passant par l'événement contraire"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89v%C3%A9nement%20contraire%20dans%20des%20situations%20%C3%A0%20plusieurs%20%C3%A9v%C3%A9nements\" target=\"_blank\" rel=\"noopener noreferrer\">Événement contraire dans des situations à plusieurs événements</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20%C3%A9v%C3%A9nement%20contraire%20et%20union/intersection\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre événement contraire et union/intersection</a>",
      "<a href=\"https://www.google.com/search?q=Utilisation%20de%20l%27%C3%A9v%C3%A9nement%20contraire%20pour%20simplifier%20un%20calcul\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation de l'événement contraire pour simplifier un calcul</a>"
    ]
  },
  "ecole:143": {
    title: "Union d’événements",
    definition: "L'union de deux événements A et B, notée A ∪ B, est l'événement réalisé dès que A ou B (ou les deux) se produit.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; A et B sont deux événements quelconques.",
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
        conclusion: "On écrit A ∪ B = A ∪ (B \\ A), réunion de deux événements incompatibles, et B = (B \\ A) ∪ (A ∩ B). Par P3, P(A ∪ B) = P(A) + P(B \\ A) et P(B) = P(B \\ A) + P(A ∩ B), donc P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
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
        text: "1. P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28A+%E2%88%AA+B%29+%3D+P%28A%29+%2B+P%28B%29+%E2%88%92+P%28A+%E2%88%A9+B%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si A et B sont incompatibles, P(A ∪ B) = P(A) + P(B).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Si+A+et+B+sont+incompatibles%2C+P%28A+%E2%88%AA+B%29+%3D+P%28A%29+%2B+P%28B%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. A ∪ B contient toutes les issues de A et toutes celles de B.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+A+%E2%88%AA+B+contient+toutes+les+issues+de+A+et+toutes+celles+de+B.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent à l'aide d'un arbre de probabilités ou d'un tableau pour mener un calcul complet.",
    details: "L'union de deux événements A et B, notée A ∪ B, est l'événement réalisé dès que A ou B (ou les deux) se produit. Par exemple, Sur un dé, A = « nombre pair », B = « nombre > 4 » → A ∪ B = {2,4,5,6}, P(A∪B) = 4/6 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Sur un dé, A = « nombre pair », B = « nombre > 4 » → A ∪ B = {2,4,5,6}, P(A∪B) = 4/6"
      },
      {
        terme: "Exemple 2",
        definition: "P(A)=0.4, P(B)=0.3, P(A∩B)=0.1 → P(A∪B) = 0.6"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilité d’un événement ».",
      items: [
        { file: "301-1-intervalle.png", alt: "Probabilité d’un événement" },
        { file: "301-2-total.png", alt: "Probabilité d’un événement" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer la probabilité d'une réunion",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/y4P_BP-ldxk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer la probabilité qu'au moins un de plusieurs événements se réalise"
      },
      {
        icon: "finance",
        text: "Évaluer le risque global lorsque plusieurs incidents indépendants sont possibles"
      },
      {
        icon: "computer",
        text: "Combiner plusieurs conditions dans un calcul de probabilité informatisé"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Union%20de%20trois%20%C3%A9v%C3%A9nements%20ou%20plus\" target=\"_blank\" rel=\"noopener noreferrer\">Union de trois événements ou plus</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20union%20et%20%C3%A9v%C3%A9nements%20incompatibles\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre union et événements incompatibles</a>",
      "<a href=\"https://www.google.com/search?q=Union%20et%20intersection%20dans%20un%20diagramme%20de%20Venn\" target=\"_blank\" rel=\"noopener noreferrer\">Union et intersection dans un diagramme de Venn</a>"
    ]
  },
  "ecole:144": {
    title: "Probabilités conditionnelles",
    definition: "La probabilité conditionnelle mesure la probabilité d’un événement sachant qu’un autre événement est réalisé.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; B est un événement de probabilité non nulle.",
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
            },
            {
                nom: "P4 — Axiome de Bayes (probabilité conditionnelle)",
                enonce: "P(A ∩ B) = P(B) × P_B(A) : la probabilité que A et B se réalisent est la probabilité de B multipliée par celle de A si B est réalisé."
            }
        ],
        conclusion: "Pour P(B) > 0, la probabilité de A sachant B est P_B(A) = P(A ∩ B)/P(B). L'application P_B vérifie elle-même P1 à P3 (positivité, P_B(Ω) = 1, additivité) : c'est une probabilité, qui décrit l'expérience une fois l'information « B est réalisé » connue.",
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
        text: "1. P(A|B)=P(A∩B)/P(B).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28A%7CB%29%3DP%28A%E2%88%A9B%29%2FP%28B%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. P(A∩B)=P(A|B)P(B).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+P%28A%E2%88%A9B%29%3DP%28A%7CB%29P%28B%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre P(A|B) et P(B|A).",
    details: "La probabilité conditionnelle mesure la probabilité d’un événement sachant qu’un autre événement est réalisé. Cette notion s'appuie sur : probabilités de base. Par exemple, P(pluie|nuages)=0.7 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "P(pluie|nuages)=0.7"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilités conditionnelles ».",
      items: [
        { file: "303-0-conditionnelle.png", alt: "Probabilités conditionnelles" },
        { file: "303-1-produit.png", alt: "Probabilités conditionnelles" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Probabilités conditionnelles et indépendance : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/5oBnmZVrOXE",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité conditionnelle (Tableau)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/JEL4hxtnw0Q",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Diagnostic"
      },
      {
        icon: "finance",
        text: "Risques"
      },
      {
        icon: "research",
        text: "Statistiques"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28A%7CB%29%20dans%20un%20tableau%20%C3%A0%20double%20entr%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(A|B) dans un tableau à double entrée.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20P%28A%E2%88%A9B%29%20%C3%A0%20partir%20de%20P%28A%7CB%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer P(A∩B) à partir de P(A|B).</a>"
    ]
  },
  "ecole:145": {
    title: "Probabilités totales",
    definition: "La formule des probabilités totales permet de calculer la probabilité d'un événement en le décomposant selon plusieurs événements qui forment une partition de l'univers.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; (B₁, …, B_k) est une partition de Ω en événements de probabilités non nulles : les Bᵢ sont deux à deux incompatibles et leur réunion est Ω.",
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
            },
            {
                nom: "P4 — Probabilité conditionnelle",
                enonce: "P(A ∩ B) = P(B) × P_B(A)."
            }
        ],
        conclusion: "Comme A = (A ∩ B₁) ∪ … ∪ (A ∩ B_k), réunion d'événements deux à deux incompatibles, l'additivité (P3) donne P(A) = P(A ∩ B₁) + … + P(A ∩ B_k) ; avec P4, P(A) = P(B₁)P_{B₁}(A) + … + P(B_k)P_{B_k}(A) : c'est la formule des probabilités totales.",
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
        text: "1. Si B₁,...,Bₙ forment une partition de l'univers, P(A) = Σ P(Bᵢ)×P(A|Bᵢ).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Si+B%E2%82%81%2C...%2CB%E2%82%99+forment+une+partition+de+l%27univers%2C+P%28A%29+%3D+%CE%A3+P%28B%E1%B5%A2%29%C3%97P%28A%7CB%E1%B5%A2%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Cas particulier à deux événements : P(A) = P(B)P(A|B) + P(B̄)P(A|B̄).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Cas+particulier+%C3%A0+deux+%C3%A9v%C3%A9nements+%3A+P%28A%29+%3D+P%28B%29P%28A%7CB%29+%2B+P%28B%CC%84%29P%28A%7CB%CC%84%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Cette formule s'utilise souvent avec un arbre de probabilités.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Cette+formule+s%27utilise+souvent+avec+un+arbre+de+probabilit%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se combinent souvent à l'aide d'un arbre de probabilités ou d'un tableau pour mener un calcul complet.",
    details: "La formule des probabilités totales permet de calculer la probabilité d'un événement en le décomposant selon plusieurs événements qui forment une partition de l'univers. Par exemple, Deux urnes, P(urne1)=0.5, P(rouge|urne1)=0.3, P(rouge|urne2)=0.6 → P(rouge)=0.45 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Deux urnes, P(urne1)=0.5, P(rouge|urne1)=0.3, P(rouge|urne2)=0.6 → P(rouge)=0.45"
      },
      {
        terme: "Exemple 2",
        definition: "P(malade)=0.01, P(positif|malade)=0.99, P(positif|sain)=0.05 → P(positif) ≈ 0.0594"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilité d’un événement ».",
      items: [
        { file: "301-1-intervalle.png", alt: "Probabilité d’un événement" },
        { file: "301-2-total.png", alt: "Probabilité d’un événement" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Probabilités conditionnelles et indépendance : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/5oBnmZVrOXE",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la formule des probabilités totales",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qTpTBoZA7zY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculer la probabilité globale d'un événement dépendant de plusieurs scénarios possibles (diagnostic médical)"
      },
      {
        icon: "finance",
        text: "Évaluer un risque global combinant plusieurs scénarios économiques possibles"
      },
      {
        icon: "computer",
        text: "Implémenter un calcul de probabilité conditionnelle dans un système de décision automatisé"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Utilisation%20d%27un%20arbre%20pond%C3%A9r%C3%A9%20pour%20appliquer%20les%20probabilit%C3%A9s%20totales\" target=\"_blank\" rel=\"noopener noreferrer\">Utilisation d'un arbre pondéré pour appliquer les probabilités totales</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20le%20th%C3%A9or%C3%A8me%20de%20Bayes\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec le théorème de Bayes</a>",
      "<a href=\"https://www.google.com/search?q=Probabilit%C3%A9s%20totales%20%C3%A0%20plus%20de%20deux%20%C3%A9v%C3%A9nements%20formant%20une%20partition\" target=\"_blank\" rel=\"noopener noreferrer\">Probabilités totales à plus de deux événements formant une partition</a>"
    ]
  },
  "ecole:146": {
    title: "Indépendance",
    definition: "Deux événements sont indépendants si la réalisation de l’un n’influence pas la probabilité de l’autre.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; A et B sont deux événements.",
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
            },
            {
                nom: "P4 — Probabilité conditionnelle",
                enonce: "P(A ∩ B) = P(B) × P_B(A)."
            }
        ],
        conclusion: "A et B sont indépendants si P(A ∩ B) = P(A) × P(B). Si P(B) > 0, cela équivaut à P_B(A) = P(A) : savoir que B est réalisé ne change pas la probabilité de A. Alors A et B̅, A̅ et B, A̅ et B̅ sont aussi indépendants (par exemple P(A ∩ B̅) = P(A) − P(A)P(B) = P(A)P(B̅)).",
        remarque: "Indépendants n'est pas synonyme d'incompatibles : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.",
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
        text: "1. P(A∩B)=P(A)P(B).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28A%E2%88%A9B%29%3DP%28A%29P%28B%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. P(A|B)=P(A).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+P%28A%7CB%29%3DP%28A%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. A et B indépendants",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Ind%C3%A9pendance%20A%20et%20B%20ind%C3%A9pendants%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "4. X et Y indépendantes",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Ind%C3%A9pendance%20X%20et%20Y%20ind%C3%A9pendantes%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre indépendance et incompatibilité.",
    details: "Deux événements sont indépendants si la réalisation de l’un n’influence pas la probabilité de l’autre. Cette notion s'appuie sur : probabilités conditionnelles. Par exemple, Lancer deux dés : les résultats sont indépendants illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer deux dés : les résultats sont indépendants"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Indépendance ».",
      items: [
        { file: "308-1-independance-va.png", alt: "Indépendance" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Probabilités conditionnelles et indépendance : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/5oBnmZVrOXE",
        lang: "fr"
      },
      methode: {
        title: "Démontrer l'indépendance entre deux événements",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wdiMq_lTk1w",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Statistiques"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Tester%20l%E2%80%99ind%C3%A9pendance%20de%20deux%20%C3%A9v%C3%A9nements.\" target=\"_blank\" rel=\"noopener noreferrer\">Tester l’indépendance de deux événements.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28A%E2%88%A9B%29%20pour%20deux%20%C3%A9v%C3%A9nements%20ind%C3%A9pendants.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(A∩B) pour deux événements indépendants.</a>"
    ]
  },
  "ecole:147": {
    title: "Loi binomiale",
    definition: "La loi binomiale modélise le nombre de succès dans une répétition d’expériences indépendantes à deux issues.",
    definition_axiomatique: {
        cadre: "On considère une expérience à deux issues (succès de probabilité p, échec de probabilité 1 − p), répétée n fois.",
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
            },
            {
                nom: "B1 — Épreuves de Bernoulli indépendantes",
                enonce: "Les n répétitions sont indépendantes et ont chacune la même probabilité de succès p."
            }
        ],
        conclusion: "Soit X le nombre de succès. Une suite donnée de k succès et n − k échecs a pour probabilité pᵏ(1 − p)ⁿ⁻ᵏ (indépendance) et il y en a C(n, k) (choix des positions) : P(X = k) = C(n, k)pᵏ(1 − p)ⁿ⁻ᵏ. Comme Σ P(X = k) = (p + (1 − p))ⁿ = 1 (binôme de Newton), P2 est vérifiée. On a E(X) = np et V(X) = np(1 − p).",
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
        text: "1. Paramètres : n et p.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+1.+Param%C3%A8tres+%3A+n+et+p.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. P(X=k)=C(n,k)p^k(1−p)^{n−k}.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+2.+P%28X%3Dk%29%3DC%28n%2Ck%29p%5Ek%281%E2%88%92p%29%5E%7Bn%E2%88%92k%7D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Espérance : np.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+3.+Esp%C3%A9rance+%3A+np.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. E(X) = Σ x_i P(X = x_i) (discret)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Loi%20binomiale%20E%28X%29%20%3D%20%CE%A3%20x_i%20P%28X%20%3D%20x_i%29%20%28discret%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre n et p.",
    details: "La loi binomiale modélise le nombre de succès dans une répétition d’expériences indépendantes à deux issues. Cette notion s'appuie sur : probabilités conditionnelles. Par exemple, 10 lancers, probabilité de 3 succès illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "10 lancers, probabilité de 3 succès"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Expériences aléatoires ».",
      items: [
        { file: "300-0-univers.png", alt: "Expériences aléatoires" },
        { file: "300-1-evenement.png", alt: "Expériences aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Loi binomiale : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/xMmfPUoBTtM",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité avec une loi binomiale",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/1gMq2TJwSh0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Statistiques"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28X%3D4%29%20pour%20n%3D8%2C%20p%3D0.3.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(X=4) pour n=8, p=0.3.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99esp%C3%A9rance%20d%E2%80%99une%20loi%20binomiale.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’espérance d’une loi binomiale.</a>"
    ]
  },
  "ecole:148": {
    title: "Vecteurs",
    definition: "Un vecteur du plan ou de l'espace est un objet mathématique caractérisé par une direction, un sens et une longueur (norme), utilisé pour décrire des déplacements, des forces ou des vitesses.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan ou l'espace affine : des points, et des vecteurs qui décrivent les translations.",
        axiomes: [
            {
                nom: "V1 — Chasles",
                enonce: "AB + BC = AC pour tous points A, B, C."
            },
            {
                nom: "V2 — Report",
                enonce: "Pour tout point A et tout vecteur u, il existe un unique point B tel que AB = u."
            },
            {
                nom: "V3 — Espace vectoriel",
                enonce: "L'addition et la multiplication par un réel vérifient les axiomes d'espace vectoriel : associativité et commutativité de +, vecteur nul, opposés, λ(u + v) = λu + λv, (λ + μ)u = λu + μu, (λμ)u = λ(μu), 1u = u."
            }
        ],
        conclusion: "Un vecteur est caractérisé par sa direction, son sens et sa norme. Deux vecteurs sont colinéaires si l'un est multiple de l'autre ; trois vecteurs sont coplanaires si l'un est combinaison linéaire des deux autres. Dans le plan, une base compte 2 vecteurs, dans l'espace 3."
    },
    formulas: [
      {
        text: "1. Un vecteur AB⃗ est défini par ses coordonnées (xB−xA ; yB−yA).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+1.+Un+vecteur+AB%E2%83%97+est+d%C3%A9fini+par+ses+coordonn%C3%A9es+%28xB%E2%88%92xA+%3B+yB%E2%88%92yA%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. La norme d'un vecteur u⃗(x,y) est ||u⃗|| = √(x²+y²).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+2.+La+norme+d%27un+vecteur+u%E2%83%97%28x%2Cy%29+est+%7C%7Cu%E2%83%97%7C%7C+%3D+%E2%88%9A%28x%C2%B2%2By%C2%B2%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Deux vecteurs sont égaux s'ils ont mêmes coordonnées.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+3.+Deux+vecteurs+sont+%C3%A9gaux+s%27ils+ont+m%C3%AAmes+coordonn%C3%A9es.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion dans un exercice.",
    details: "Un vecteur du plan ou de l'espace est un objet mathématique caractérisé par une direction, un sens et une longueur (norme), utilisé pour décrire des déplacements, des forces ou des vitesses. Par exemple, A(1,2), B(4,6) → AB⃗=(3,4), de norme 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(1,2), B(4,6) → AB⃗=(3,4), de norme 5"
      },
      {
        terme: "Exemple 2",
        definition: "u⃗(3,4) a pour norme √(9+16)=5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Vecteurs ».",
      items: [
        { file: "201-0-vecteur-AB.png", alt: "Vecteurs" },
        { file: "201-1-norme.png", alt: "Vecteurs" },
        { file: "201-2-produit.png", alt: "Vecteurs" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les vecteurs : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aSSDBNn_rRI",
        lang: "fr"
      },
      methode: {
        title: "Construire un point à partir de vecteurs",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zcQPz4dfnn0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modéliser une force, une vitesse ou un déplacement en physique"
      },
      {
        icon: "computer",
        text: "Représenter des positions et des déplacements dans un moteur de jeu ou de simulation"
      },
      {
        icon: "research",
        text: "Décrire des grandeurs orientées en géométrie et en mécanique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Op%C3%A9rations%20sur%20les%20vecteurs%20%28somme%2C%20produit%20par%20un%20scalaire%29\" target=\"_blank\" rel=\"noopener noreferrer\">Opérations sur les vecteurs (somme, produit par un scalaire)</a>",
      "<a href=\"https://www.google.com/search?q=Produit%20scalaire%20de%20deux%20vecteurs\" target=\"_blank\" rel=\"noopener noreferrer\">Produit scalaire de deux vecteurs</a>",
      "<a href=\"https://www.google.com/search?q=Vecteurs%20dans%20l%27espace%20%C3%A0%20trois%20dimensions\" target=\"_blank\" rel=\"noopener noreferrer\">Vecteurs dans l'espace à trois dimensions</a>"
    ]
  },
  "ecole:149": {
    title: "Produit scalaire",
    definition: "Le produit scalaire de deux vecteurs mesure l’angle entre eux et permet de caractériser l’orthogonalité.",
    definition_axiomatique: {
        cadre: "On travaille dans un espace vectoriel réel (le plan ou l'espace) : un produit scalaire est une application (u, v) ↦ u·v de E × E dans ℝ.",
        axiomes: [
            {
                nom: "S1 — Bilinéarité",
                enonce: "(λu + μu')·v = λ u·v + μ u'·v, et de même dans la seconde variable."
            },
            {
                nom: "S2 — Symétrie",
                enonce: "u·v = v·u."
            },
            {
                nom: "S3 — Définie positive",
                enonce: "u·u ≥ 0, et u·u = 0 si et seulement si u = 0."
            }
        ],
        conclusion: "On pose ‖u‖ = √(u·u) : c'est la norme euclidienne. Dans une base orthonormée, u·v = xx' + yy' (+ zz' dans l'espace) ; de plus u·v = ‖u‖‖v‖cos θ où θ est l'angle des vecteurs, et u ⊥ v si et seulement si u·v = 0. On a l'inégalité de Cauchy-Schwarz |u·v| ≤ ‖u‖‖v‖.",
        sources: [
            {
                titre: "Cahier de prépa (MPSI 3) — Espaces préhilbertiens",
                url: "https://cahier-de-prepa.fr/mpsi3-llg/download?id=561"
            },
            {
                titre: "Coulbois (Aix-Marseille) — Formes bilinéaires et produit scalaire",
                url: "https://www.i2m.univ-amu.fr/perso/thierry.coulbois/2020/capes/cours-bilineaire-capes-2020.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. u·v = ||u||·||v||·cosθ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+1.+u%C2%B7v+%3D+%7C%7Cu%7C%7C%C2%B7%7C%7Cv%7C%7C%C2%B7cos%CE%B8.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. u·v = x₁x₂ + y₁y₂ + z₁z₂.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+2.+u%C2%B7v+%3D+x%E2%82%81x%E2%82%82+%2B+y%E2%82%81y%E2%82%82+%2B+z%E2%82%81z%E2%82%82.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. u·v = 0 ⇔ vecteurs orthogonaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+3.+u%C2%B7v+%3D+0+%E2%87%94+vecteurs+orthogonaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. u·v = x1x2 + y1y2",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Produit%20scalaire%20u%C2%B7v%20%3D%20x1x2%20%2B%20y1y2%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. u·v = x1x2 + y1y2 (plan)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Produit%20scalaire%20u%C2%B7v%20%3D%20x1x2%20%2B%20y1y2%20%28plan%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "6. Orthogonalité : u·v = 0",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Produit%20scalaire%20Orthogonalit%C3%A9%20%3A%20u%C2%B7v%20%3D%200%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier une coordonnée dans le calcul.",
    details: "Le produit scalaire de deux vecteurs mesure l’angle entre eux et permet de caractériser l’orthogonalité. Cette notion s'appuie sur : vecteurs. Par exemple, u=(1,2,3), v=(2,0,1) → u·v=1·2+2·0+3·1=5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u=(1,2,3), v=(2,0,1) → u·v=1·2+2·0+3·1=5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Produit scalaire ».",
      items: [
        { file: "203-0-angle.png", alt: "Produit scalaire" },
        { file: "203-1-formule.png", alt: "Produit scalaire" },
        { file: "203-2-orthogonal.png", alt: "Produit scalaire" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Produit scalaire : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dII7myZuLvo",
        lang: "fr"
      },
      methode: {
        title: "Calculer un produit scalaire à l'aide du cosinus",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dfxz40fK0UI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Projections"
      },
      {
        icon: "research",
        text: "Géométrie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20u%C2%B7v%20pour%20deux%20vecteurs%20donn%C3%A9s.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer u·v pour deux vecteurs donnés.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20deux%20vecteurs%20sont%20orthogonaux.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si deux vecteurs sont orthogonaux.</a>"
    ]
  },
  "ecole:150": {
    title: "Équation de droite/plan",
    definition: "L'équation d'une droite (dans le plan) ou d'un plan (dans l'espace) est une relation entre les coordonnées qui caractérise exactement les points appartenant à cet objet géométrique.",
    definition_axiomatique: {
        cadre: "On travaille dans un repère orthonormé, avec le produit scalaire : un vecteur normal à une droite (plan) est un vecteur non nul orthogonal à toutes ses directions.",
        axiomes: [
            {
                nom: "N1 — Incidence",
                enonce: "Dans le plan, deux points distincts déterminent une droite ; dans l'espace, trois points non alignés déterminent un plan."
            },
            {
                nom: "N2 — Vecteur normal",
                enonce: "Une droite (plan) passant par A et de vecteur normal n est l'ensemble des points M tels que AM·n = 0."
            }
        ],
        conclusion: "Dans le plan, la droite de vecteur normal n(a ; b) passant par A a pour équation ax + by + c = 0 avec c = −(ax_A + by_A). Dans l'espace, le plan de vecteur normal n(a ; b ; c) passant par A a pour équation ax + by + cz + d = 0. Réciproquement, toute équation de cette forme définit une droite ou un plan de vecteur normal (a ; b) ou (a ; b ; c).",
        sources: [
            {
                titre: "Cahier de prépa (MPSI 3) — Espaces préhilbertiens",
                url: "https://cahier-de-prepa.fr/mpsi3-llg/download?id=561"
            },
            {
                titre: "Coulbois (Aix-Marseille) — Formes bilinéaires et produit scalaire",
                url: "https://www.i2m.univ-amu.fr/perso/thierry.coulbois/2020/capes/cours-bilineaire-capes-2020.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Équation d'une droite dans le plan : ax + by + c = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+1.+%C3%89quation+d%27une+droite+dans+le+plan+%3A+ax+%2B+by+%2B+c+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Équation d'un plan dans l'espace : ax + by + cz + d = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+2.+%C3%89quation+d%27un+plan+dans+l%27espace+%3A+ax+%2B+by+%2B+cz+%2B+d+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Le vecteur (a,b) [ou (a,b,c)] est un vecteur normal à la droite [au plan].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+statistiques+3.+Le+vecteur+%28a%2Cb%29+%5Bou+%28a%2Cb%2Cc%29%5D+est+un+vecteur+normal+%C3%A0+la+droite+%5Bau+plan%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Distance point–droite",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20%C3%89quation%20de%20droite/plan%20Distance%20point%E2%80%93droite%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion dans un exercice.",
    details: "L'équation d'une droite (dans le plan) ou d'un plan (dans l'espace) est une relation entre les coordonnées qui caractérise exactement les points appartenant à cet objet géométrique. Par exemple, La droite d'équation 2x − y + 1 = 0 a pour vecteur normal (2,−1) illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La droite d'équation 2x − y + 1 = 0 a pour vecteur normal (2,−1)"
      },
      {
        terme: "Exemple 2",
        definition: "Le plan d'équation x + 2y − z − 3 = 0 a pour vecteur normal (1,2,−1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Géométrie dans l’espace ».",
      items: [
        { file: "217-0-plan3d.png", alt: "Géométrie dans l’espace" },
        { file: "217-1-droite3d.png", alt: "Géométrie dans l’espace" }
      ]
    },
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
        icon: "research",
        text: "Modéliser des surfaces planes en architecture ou en ingénierie 3D"
      },
      {
        icon: "computer",
        text: "Détecter l'appartenance d'un point à une droite ou un plan dans un moteur de rendu 3D"
      },
      {
        icon: "research",
        text: "Étudier les positions relatives de droites et de plans en géométrie de l'espace"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Passage%20entre%20%C3%A9quation%20cart%C3%A9sienne%20et%20repr%C3%A9sentation%20param%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Passage entre équation cartésienne et représentation paramétrique</a>",
      "<a href=\"https://www.google.com/search?q=Intersection%20de%20deux%20plans%2C%20d%27une%20droite%20et%20d%27un%20plan\" target=\"_blank\" rel=\"noopener noreferrer\">Intersection de deux plans, d'une droite et d'un plan</a>",
      "<a href=\"https://www.google.com/search?q=Distance%20d%27un%20point%20%C3%A0%20une%20droite%20ou%20%C3%A0%20un%20plan\" target=\"_blank\" rel=\"noopener noreferrer\">Distance d'un point à une droite ou à un plan</a>"
    ]
  },
  "ecole:1156": {
    title: "Équations du second degré",
    definition: "Une équation du second degré est une équation de la forme ax²+bx+c=0. Elle se résout à l’aide du discriminant.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère l'équation ax² + bx + c = 0 avec a ≠ 0.",
        axiomes: [
            {
                nom: "A1 — Produit nul",
                enonce: "Un produit de deux réels est nul si et seulement si l'un des facteurs est nul."
            },
            {
                nom: "A2 — Carrés",
                enonce: "Un carré est ≥ 0, et nul si et seulement si le nombre est nul."
            },
            {
                nom: "A3 — Racine carrée",
                enonce: "Tout réel positif possède une racine carrée positive."
            }
        ],
        conclusion: "Avec Δ = b² − 4ac, l'équation équivaut à (x + b/2a)² = Δ/4a² (forme canonique). Par A2, elle n'a pas de solution si Δ < 0, une solution −b/2a si Δ = 0, et deux solutions (−b ± √Δ)/2a si Δ > 0."
    },
    formulas: [
      {
        text: "1. Δ=b²−4ac.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+%CE%94%3Db%C2%B2%E2%88%924ac.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Δ>0 : deux solutions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+%CE%94%3E0+%3A+deux+solutions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Δ=0 : solution double.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+%CE%94%3D0+%3A+solution+double.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier le signe de b.",
    details: "Elle se résout à l’aide du discriminant. Cette notion s'appuie sur : identités remarquables. Par exemple, x²−5x+6=0 → solutions : 2 et 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x²−5x+6=0 → solutions : 2 et 3"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Équations différentielles ».",
      items: [
        { file: "6-0-y-ay.png", alt: "Équations différentielles" },
        { file: "6-1-y-ay-f.png", alt: "Équations différentielles" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (fonctions) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
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
        icon: "research",
        text: "Trajectoires"
      },
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20x%C2%B2%E2%88%924x%2B4%3D0.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre x²−4x+4=0.</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%202x%C2%B2%E2%88%923x%E2%88%922%3D0.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre 2x²−3x−2=0.</a>"
    ]
  },
  "ecole:1157": {
    title: "Identités remarquables",
    definition: "Les identités remarquables sont des formules algébriques permettant de développer ou factoriser rapidement.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb."
            },
            {
                nom: "A2 — Commutativité",
                enonce: "ab = ba."
            }
        ],
        conclusion: "En développant : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a − b)(a + b) = a² − b². Ces identités valent pour tous les nombres a et b (A1, A2), et servent à développer, à factoriser et à calculer mentalement."
    },
    formulas: [
      {
        text: "1. (a+b)²=a²+2ab+b².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+%28a%2Bb%29%C2%B2%3Da%C2%B2%2B2ab%2Bb%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. (a−b)²=a²−2ab+b².",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+%28a%E2%88%92b%29%C2%B2%3Da%C2%B2%E2%88%922ab%2Bb%C2%B2.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. a²−b²=(a−b)(a+b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+a%C2%B2%E2%88%92b%C2%B2%3D%28a%E2%88%92b%29%28a%2Bb%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier le terme 2ab.",
    details: "Les identités remarquables sont des formules algébriques permettant de développer ou factoriser rapidement. Cette notion s'appuie sur : puissances. Par exemple, (x+3)²=x²+6x+9 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "(x+3)²=x²+6x+9"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Structures algébriques : groupes, anneaux, corps ».",
      items: [
        { file: "122-0-groupe-Z5star.png", alt: "Structures algébriques : groupes, anneaux, corps" },
        { file: "122-1-sousgroupe.png", alt: "Structures algébriques : groupes, anneaux, corps" },
        { file: "122-2-lagrange.png", alt: "Structures algébriques : groupes, anneaux, corps" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul littéral - développements : le cours en vidéo",
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
        icon: "research",
        text: "Calculs rapides"
      },
      {
        icon: "research",
        text: "Équations"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9velopper%20%28x%E2%88%925%29%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Développer (x−5)².</a>",
      "<a href=\"https://www.google.com/search?q=Factoriser%20x%C2%B2%E2%88%9225.\" target=\"_blank\" rel=\"noopener noreferrer\">Factoriser x²−25.</a>"
    ]
  },
  "ecole:1158": {
    title: "Systèmes linéaires 2×2",
    definition: "Un système linéaire 2×2 est un ensemble de deux équations à deux inconnues. Il peut être résolu par substitution ou combinaison.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère le système ax + by = e, cx + dy = f.",
        axiomes: [
            {
                nom: "S1 — Combinaisons",
                enonce: "Remplacer une équation par elle-même plus un multiple de l'autre donne un système équivalent."
            },
            {
                nom: "S2 — Multiplication",
                enonce: "Multiplier une équation par un nombre non nul donne un système équivalent."
            }
        ],
        conclusion: "Si Δ = ad − bc ≠ 0, il y a une unique solution : x = (ed − bf)/Δ, y = (af − ce)/Δ. Si Δ = 0, il n'y a aucune solution ou une infinité (droites parallèles ou confondues)."
    },
    formulas: [
      {
        text: "1. Une solution, aucune ou infiniment.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Une+solution%2C+aucune+ou+infiniment.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Méthodes : substitution, combinaison.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+M%C3%A9thodes+%3A+substitution%2C+combinaison.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : mauvaise substitution.",
    details: "Il peut être résolu par substitution ou combinaison. Cette notion s'appuie sur : équations simples. Par exemple, x+y=5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x+y=5"
      },
      {
        terme: "Exemple 2",
        definition: "x−y=1 → x=3, y=2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Applications linéaires ».",
      items: [
        { file: "106-0-additivite.png", alt: "Applications linéaires" },
        { file: "106-1-homogeneite.png", alt: "Applications linéaires" },
        { file: "106-2-matrice-base.png", alt: "Applications linéaires" }
      ]
    },
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
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Intersections de droites"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20x%2By%3D10%20%3B%20x%E2%88%92y%3D4.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre x+y=10 ; x−y=4.</a>",
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%202x%2B3y%3D7%20%3B%20x%E2%88%92y%3D1.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre 2x+3y=7 ; x−y=1.</a>"
    ]
  },
  "ecole:1159": {
    title: "Suites numériques",
    definition: "Une suite est une liste ordonnée de nombres. Elle peut être définie explicitement ou par récurrence.",
    definition_axiomatique: {
        cadre: "On travaille avec ℕ (axiomes de Peano) et ℝ : une suite est une famille de réels indexée par les entiers.",
        axiomes: [
            {
                nom: "S1 — Suite",
                enonce: "Une suite réelle est une application u de ℕ dans ℝ, notée (uₙ)."
            },
            {
                nom: "S2 — Définition explicite",
                enonce: "uₙ = f(n) pour une fonction f donnée."
            },
            {
                nom: "S3 — Définition par récurrence",
                enonce: "Étant donnés u₀ et une fonction f, uₙ₊₁ = f(uₙ) définit une unique suite (axiome de récurrence de ℕ)."
            }
        ],
        conclusion: "Une suite est donc entièrement déterminée par une formule explicite, ou par son premier terme et une relation de récurrence. La récurrence définit bien un seul terme pour chaque entier, car ℕ est engendré par 0 et le passage au successeur.",
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
        text: "1. Suite arithmétique : uₙ=u₀+nd.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Suite+arithm%C3%A9tique+%3A+u%E2%82%99%3Du%E2%82%80%2Bnd.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Suite géométrique : uₙ=u₀×qⁿ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+Suite+g%C3%A9om%C3%A9trique+%3A+u%E2%82%99%3Du%E2%82%80%C3%97q%E2%81%BF.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre d et q.",
    details: "Elle peut être définie explicitement ou par récurrence. Cette notion s'appuie sur : calculs de base. Par exemple, Suite arithmétique : uₙ=3+2n illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Suite arithmétique : uₙ=3+2n"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Suites et séries numériques ».",
      items: [
        { file: "11-0-cauchy.png", alt: "Suites et séries numériques" },
        { file: "11-1-riemann.png", alt: "Suites et séries numériques" },
        { file: "11-2-dalembert.png", alt: "Suites et séries numériques" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Généralités sur les suites : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/8I6dotcdW3I",
        lang: "fr"
      },
      methode: {
        title: "Calculer les premiers termes d'une suite (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/HacflVQ7DIE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Croissance"
      },
      {
        icon: "research",
        text: "Intérêts"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20u%E2%82%85%20pour%20u%E2%82%99%3D1%2B3n.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner u₅ pour uₙ=1+3n.</a>",
      "<a href=\"https://www.google.com/search?q=Donner%20u%E2%82%84%20pour%20u%E2%82%99%3D2%C3%971.5%E2%81%BF.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner u₄ pour uₙ=2×1.5ⁿ.</a>"
    ]
  },
  "ecole:1160": {
    title: "Variations d'une fonction",
    definition: "Étudier les variations d’une fonction consiste à déterminer les intervalles où elle est croissante ou décroissante. Cela permet de comprendre son comportement global.",
    definition_axiomatique: {
        cadre: "On considère une fonction f définie sur un intervalle I de ℝ.",
        axiomes: [
            {
                nom: "V1 — Croissance",
                enonce: "f est croissante sur I si, pour tous x ≤ y dans I, f(x) ≤ f(y)."
            },
            {
                nom: "V2 — Décroissance",
                enonce: "f est décroissante sur I si, pour tous x ≤ y dans I, f(x) ≥ f(y)."
            },
            {
                nom: "V3 — Extremum",
                enonce: "f admet un maximum en a si f(x) ≤ f(a) pour tout x de I, un minimum en a si f(x) ≥ f(a) pour tout x de I."
            }
        ],
        conclusion: "Les variations de f sont la donnée des intervalles sur lesquels f est croissante ou décroissante. Un extremum sur un intervalle se trouve aux points où f change de sens de variation, ou aux bornes de l'intervalle."
    },
    formulas: [
      {
        text: "1. Croissante : f(x₂) ≥ f(x₁) si x₂ ≥ x₁.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+1.+Croissante+%3A+f%28x%E2%82%82%29+%E2%89%A5+f%28x%E2%82%81%29+si+x%E2%82%82+%E2%89%A5+x%E2%82%81.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Décroissante : f(x₂) ≤ f(x₁).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+2.+D%C3%A9croissante+%3A+f%28x%E2%82%82%29+%E2%89%A4+f%28x%E2%82%81%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les variations se lisent sur le tableau de variations.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+3.+Les+variations+se+lisent+sur+le+tableau+de+variations.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre croissance locale et globale.",
    details: "Cela permet de comprendre son comportement global. Cette notion s'appuie sur : lecture de graphiques. Par exemple, La fonction carré est décroissante sur (-∞,0] et croissante sur [0,+∞) illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La fonction carré est décroissante sur (-∞,0] et croissante sur [0,+∞)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Variations d'une fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/i8aYSIidNlk",
        lang: "fr"
      },
      methode: {
        title: "Déterminer les variations d'une fonction (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zHYaPOWi4Iw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20les%20variations%20de%20f%28x%29%3Dx%C2%B2%E2%88%923x.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer les variations de f(x)=x²−3x.</a>",
      "<a href=\"https://www.google.com/search?q=Lire%20les%20variations%20d%E2%80%99une%20fonction%20%C3%A0%20partir%20de%20son%20graphique.\" target=\"_blank\" rel=\"noopener noreferrer\">Lire les variations d’une fonction à partir de son graphique.</a>"
    ]
  },
  "ecole:1161": {
    title: "Tableau de variations",
    definition: "Un tableau de variations résume les comportements d’une fonction : croissance, décroissance, extremums.",
    definition_axiomatique: {
        cadre: "On considère une fonction f définie sur un intervalle I, découpé en intervalles sur lesquels f est monotone.",
        axiomes: [
            {
                nom: "T1 — Découpage",
                enonce: "I est réunion d'intervalles consécutifs sur chacun desquels f est croissante ou décroissante."
            },
            {
                nom: "T2 — Flèches",
                enonce: "Une flèche montante (↗) signifie que f est croissante sur l'intervalle correspondant, une flèche descendante (↘) qu'elle est décroissante."
            },
            {
                nom: "T3 — Valeurs",
                enonce: "On inscrit aux extrémités des flèches les valeurs de f, extremums compris."
            }
        ],
        conclusion: "Le tableau de variations résume le comportement de f : lire une flèche, c'est lire une inégalité entre les images de deux nombres de l'intervalle. Il permet de déterminer le nombre de solutions d'une équation f(x) = k et de tracer la courbe."
    },
    formulas: [
      {
        text: "1. Indique les intervalles de croissance.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+1.+Indique+les+intervalles+de+croissance.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de repérer les extremums.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+2.+Permet+de+rep%C3%A9rer+les+extremums.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Synthèse visuelle.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+3.+Synth%C3%A8se+visuelle.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier les valeurs aux bornes.",
    details: "Un tableau de variations résume les comportements d’une fonction : croissance, décroissance, extremums. Cette notion s'appuie sur : variations. Par exemple, Pour f(x)=x², le tableau montre un minimum en 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², le tableau montre un minimum en 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Calcul des variations et optimisation ».",
      items: [
        { file: "23-0-euler-lagrange-calcul.png", alt: "Calcul des variations et optimisation" },
        { file: "23-1-kkt.png", alt: "Calcul des variations et optimisation" },
        { file: "23-2-lagrange-optim.png", alt: "Calcul des variations et optimisation" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Variations d'une fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/i8aYSIidNlk",
        lang: "fr"
      },
      methode: {
        title: "Dresser un tableau de variations",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/yGqqoBMq8Fw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Étude de fonctions"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construire%20le%20tableau%20de%20variations%20de%20f%28x%29%3Dx%C2%B3%E2%88%922x.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire le tableau de variations de f(x)=x³−2x.</a>",
      "<a href=\"https://www.google.com/search?q=Compl%C3%A9ter%20un%20tableau%20de%20variations%20%C3%A0%20partir%20d%E2%80%99un%20graphique.\" target=\"_blank\" rel=\"noopener noreferrer\">Compléter un tableau de variations à partir d’un graphique.</a>"
    ]
  },
  "ecole:1162": {
    title: "Courbe représentative",
    definition: "La courbe représentative d’une fonction est l’ensemble des points (x,f(x)) dans un repère. Elle permet de visualiser le comportement de la fonction.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère (O ; I, J), et on considère une fonction f définie sur une partie D de ℝ.",
        axiomes: [
            {
                nom: "C1 — Graphe",
                enonce: "La courbe représentative de f est l'ensemble 𝒞 des points M(x ; y) tels que x ∈ D et y = f(x)."
            },
            {
                nom: "C2 — Fonction",
                enonce: "Une courbe est la courbe d'une fonction si toute droite verticale la coupe en au plus un point."
            }
        ],
        conclusion: "Un point M(x ; y) appartient à la courbe de f si et seulement si x est dans D et y = f(x). Lire l'image d'un nombre x, c'est lire l'ordonnée du point de la courbe d'abscisse x."
    },
    formulas: [
      {
        text: "1. Chaque point représente une valeur de la fonction.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+1.+Chaque+point+repr%C3%A9sente+une+valeur+de+la+fonction.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet de lire les variations.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+2.+Permet+de+lire+les+variations.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Permet d’estimer des valeurs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+3.+Permet+d%E2%80%99estimer+des+valeurs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre x et f(x).",
    details: "Elle permet de visualiser le comportement de la fonction. Cette notion s'appuie sur : repère et coordonnées. Par exemple, La courbe de f(x)=x² est une parabole illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La courbe de f(x)=x² est une parabole"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/E4SY8_L-DTA",
        lang: "fr"
      },
      methode: {
        title: "Représenter graphiquement une fonction",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/xHJNdrhzY4Q",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20courbe%20de%20f%28x%29%3Dx%C2%B2%E2%88%921.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la courbe de f(x)=x²−1.</a>",
      "<a href=\"https://www.google.com/search?q=Lire%20graphiquement%20f%282%29%20pour%20une%20fonction%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Lire graphiquement f(2) pour une fonction donnée.</a>"
    ]
  },
  "ecole:1163": {
    title: "Images et antécédents",
    definition: "L’image d’un nombre x par une fonction f est f(x). Un antécédent est un nombre qui donne une image donnée.",
    definition_axiomatique: {
        cadre: "On considère une fonction f de D dans ℝ : elle associe à chaque x de D un seul réel f(x).",
        axiomes: [
            {
                nom: "I1 — Image",
                enonce: "Le nombre y = f(x) est l'image de x par f ; elle est unique."
            },
            {
                nom: "I2 — Antécédent",
                enonce: "Un nombre x est un antécédent de y si f(x) = y."
            },
            {
                nom: "I3 — Non-unicité",
                enonce: "Un même nombre peut avoir zéro, un ou plusieurs antécédents."
            }
        ],
        conclusion: "Tout nombre de D a exactement une image, mais un réel y peut avoir plusieurs antécédents (f(x) = x² : 4 a pour antécédents −2 et 2) ou aucun (−1 n'en a pas). Chercher les antécédents de y, c'est résoudre l'équation f(x) = y."
    },
    formulas: [
      {
        text: "1. f(x)=y → y est l’image de x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+1.+f%28x%29%3Dy+%E2%86%92+y+est+l%E2%80%99image+de+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. x est un antécédent de y.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+2.+x+est+un+ant%C3%A9c%C3%A9dent+de+y.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une image peut avoir plusieurs antécédents.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+3.+Une+image+peut+avoir+plusieurs+ant%C3%A9c%C3%A9dents.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre image et antécédent.",
    details: "Un antécédent est un nombre qui donne une image donnée. Cette notion s'appuie sur : fonctions de base. Par exemple, Pour f(x)=x², 4 a deux antécédents : -2 et 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², 4 a deux antécédents : -2 et 2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/E4SY8_L-DTA",
        lang: "fr"
      },
      methode: {
        title: "Calculer l'image d'un nombre",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/8j_4DHWnRJU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Résolution d’équations"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20les%20ant%C3%A9c%C3%A9dents%20de%209%20pour%20f%28x%29%3Dx%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver les antécédents de 9 pour f(x)=x².</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20f%283%29%20pour%20une%20fonction%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer f(3) pour une fonction donnée.</a>"
    ]
  },
  "ecole:1164": {
    title: "Résolution graphique d'équations",
    definition: "Résoudre graphiquement une équation f(x)=k consiste à chercher les points où la courbe de f coupe la droite horizontale y=k.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions f et g définies sur D et leurs courbes dans un repère ; ℝ est totalement ordonné.",
        axiomes: [
            {
                nom: "G1 — Intersection",
                enonce: "Les solutions de f(x) = g(x) sont les abscisses des points d'intersection des deux courbes."
            },
            {
                nom: "G2 — Position",
                enonce: "f(x) < g(x) si et seulement si le point de la courbe de f d'abscisse x est strictement en dessous de celui de g."
            },
            {
                nom: "G3 — Droite horizontale",
                enonce: "Les solutions de f(x) = k sont les abscisses des points où la droite y = k coupe la courbe."
            }
        ],
        conclusion: "Résoudre graphiquement une équation ou une inéquation revient à lire l'intersection ou la position relative de deux courbes. Le résultat est une valeur approchée, lue avec la précision du graphique."
    },
    formulas: [
      {
        text: "1. Intersection courbe-droite.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+1.+Intersection+courbe-droite.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Permet d’estimer les solutions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+2.+Permet+d%E2%80%99estimer+les+solutions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Peut donner plusieurs solutions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+analyse+3.+Peut+donner+plusieurs+solutions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : lire mal les coordonnées.",
    details: "Résoudre graphiquement une équation f(x)=k consiste à chercher les points où la courbe de f coupe la droite horizontale y=k. Cette notion s'appuie sur : graphiques. Par exemple, Résoudre x²=4 revient à chercher les intersections avec y=4 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Résoudre x²=4 revient à chercher les intersections avec y=4"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Équations différentielles ».",
      items: [
        { file: "6-0-y-ay.png", alt: "Équations différentielles" },
        { file: "6-1-y-ay-f.png", alt: "Équations différentielles" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de fonction : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/E4SY8_L-DTA",
        lang: "fr"
      },
      methode: {
        title: "Résoudre graphiquement une équation",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/FCUd2muFEyI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20graphiquement%20f%28x%29%3D2%20pour%20une%20courbe%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre graphiquement f(x)=2 pour une courbe donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20les%20solutions%20de%20f%28x%29%3D0%20sur%20un%20graphique.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver les solutions de f(x)=0 sur un graphique.</a>"
    ]
  },
  "ecole:1165": {
    title: "Vecteurs",
    definition: "Un vecteur est un objet défini par une direction, un sens et une longueur. Il représente un déplacement.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan affine : des points, et des vecteurs qui décrivent les translations du plan.",
        axiomes: [
            {
                nom: "V1 — Chasles",
                enonce: "Pour tous points A, B, C : AB + BC = AC."
            },
            {
                nom: "V2 — Report",
                enonce: "Pour tout point A et tout vecteur u, il existe un unique point B tel que AB = u."
            },
            {
                nom: "V3 — Multiplication par un réel",
                enonce: "λ(u + v) = λu + λv, (λ + μ)u = λu + μu, (λμ)u = λ(μu), 1·u = u."
            }
        ],
        conclusion: "Un vecteur est la donnée d'une direction, d'un sens et d'une norme, c'est-à-dire l'ensemble des bipoints équipollents. AB = CD si et seulement si ABDC est un parallélogramme (éventuellement aplati). L'ensemble des vecteurs, muni de l'addition et de la multiplication par un réel, est un espace vectoriel de dimension 2."
    },
    formulas: [
      {
        text: "1. AB⃗ = (xB−xA ; yB−yA).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+AB%E2%83%97+%3D+%28xB%E2%88%92xA+%3B+yB%E2%88%92yA%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Somme de vecteurs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Somme+de+vecteurs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Vecteur nul.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Vecteur+nul.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : inverser A et B.",
    details: "Il représente un déplacement. Cette notion s'appuie sur : repère. Par exemple, Si A(1,2) et B(4,6), AB⃗=(3,4) illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si A(1,2) et B(4,6), AB⃗=(3,4)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Vecteurs ».",
      items: [
        { file: "201-0-vecteur-AB.png", alt: "Vecteurs" },
        { file: "201-1-norme.png", alt: "Vecteurs" },
        { file: "201-2-produit.png", alt: "Vecteurs" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les vecteurs : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aSSDBNn_rRI",
        lang: "fr"
      },
      methode: {
        title: "Construire un point à partir de vecteurs",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zcQPz4dfnn0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Déplacements"
      },
      {
        icon: "research",
        text: "Géométrie analytique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20AB%E2%83%97%20pour%20A%282%2C1%29%20et%20B%285%2C7%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer AB⃗ pour A(2,1) et B(5,7).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20la%20somme%20de%20deux%20vecteurs.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer la somme de deux vecteurs.</a>"
    ]
  },
  "ecole:1166": {
    title: "Coordonnées d'un point",
    definition: "Les coordonnées d’un point indiquent sa position dans un repère. Elles sont notées (x,y).",
    definition_axiomatique: {
        cadre: "On travaille dans le plan, muni d'un repère (O ; i, j) : O est un point et (i, j) une base de vecteurs non colinéaires.",
        axiomes: [
            {
                nom: "R1 — Décomposition",
                enonce: "Tout vecteur u s'écrit de façon unique u = x·i + y·j."
            },
            {
                nom: "R2 — Coordonnées d'un vecteur",
                enonce: "Le couple (x ; y) est le couple de coordonnées de u."
            },
            {
                nom: "R3 — Coordonnées d'un point",
                enonce: "Les coordonnées de M sont celles du vecteur OM."
            }
        ],
        conclusion: "Un point est repéré par son couple de coordonnées ; les coordonnées de AB sont (x_B − x_A ; y_B − y_A) (relation de Chasles AB = AO + OB), et celles de u + v (resp. λu) s'obtiennent en additionnant (resp. multipliant) les coordonnées."
    },
    formulas: [
      {
        text: "1. x : abscisse.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+x+%3A+abscisse.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. y : ordonnée.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+y+%3A+ordonn%C3%A9e.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Distance entre deux points.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Distance+entre+deux+points.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre x et y.",
    details: "Elles sont notées (x,y). Cette notion s'appuie sur : repère orthonormé. Par exemple, A(3,2), B(-1,5) illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(3,2), B(-1,5)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Vecteurs et repérage : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9OB3hct6gak",
        lang: "fr"
      },
      methode: {
        title: "Lire les coordonnées d'un point dans un repère",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dnHRpXgANgo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Géométrie analytique"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Placer%20les%20points%20A%282%2C3%29%20et%20B%28-1%2C4%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Placer les points A(2,3) et B(-1,4).</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20distance%20AB.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la distance AB.</a>"
    ]
  },
  "ecole:1167": {
    title: "Droite : équation et représentation",
    definition: "Une droite peut être représentée par une équation de la forme y=ax+b ou par deux points.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère ; les points sont les couples (x ; y) et les vecteurs se décomposent sur la base.",
        axiomes: [
            {
                nom: "D1 — Incidence",
                enonce: "Par deux points distincts passe une unique droite."
            },
            {
                nom: "D2 — Vecteur directeur",
                enonce: "Une droite (AB) est l'ensemble des points M tels que AM est colinéaire à AB ; AB est un vecteur directeur."
            },
            {
                nom: "D3 — Équation",
                enonce: "Une droite est l'ensemble des solutions d'une équation ax + by + c = 0 avec (a ; b) ≠ (0 ; 0)."
            }
        ],
        conclusion: "La droite de vecteur directeur u(α ; β) passant par A a pour équation β(x − x_A) − α(y − y_A) = 0, soit ax + by + c = 0 avec u(−b ; a). Si b ≠ 0, elle s'écrit y = mx + p ; si b = 0, c'est une droite verticale x = k."
    },
    formulas: [
      {
        text: "1. Pente = a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Pente+%3D+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Ordonnée à l’origine = b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Ordonn%C3%A9e+%C3%A0+l%E2%80%99origine+%3D+b.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Une droite est déterminée par deux points.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Une+droite+est+d%C3%A9termin%C3%A9e+par+deux+points.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre pente et ordonnée à l’origine.",
    details: "Une droite peut être représentée par une équation de la forme y=ax+b ou par deux points. Cette notion s'appuie sur : coordonnées. Par exemple, Droite passant par (0,1) et (2,5) : y=2x+1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Droite passant par (0,1) et (2,5) : y=2x+1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Droites du plan : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d-rUnClmcCY",
        lang: "fr"
      },
      methode: {
        title: "Représenter une droite dans un repère",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/cUdhxkaTqqk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation linéaire"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20l%E2%80%99%C3%A9quation%20de%20la%20droite%20passant%20par%20%281%2C2%29%20et%20%283%2C6%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer l’équation de la droite passant par (1,2) et (3,6).</a>",
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20droite%20y%3D%E2%88%92x%2B4.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la droite y=−x+4.</a>"
    ]
  },
  "ecole:1168": {
    title: "Parallélisme et perpendicularité",
    definition: "Deux droites sont parallèles si elles ont le même coefficient directeur. Elles sont perpendiculaires si leurs coefficients directeurs sont des opposés inverses.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé ; u(x ; y) et v(x' ; y') sont deux vecteurs.",
        axiomes: [
            {
                nom: "P1 — Colinéarité",
                enonce: "u et v sont colinéaires s'il existe un réel λ tel que v = λu (ou u = 0)."
            },
            {
                nom: "P2 — Orthogonalité",
                enonce: "u et v sont orthogonaux si les droites dirigées par u et v sont perpendiculaires ; par Pythagore, ‖u + v‖² = ‖u‖² + ‖v‖²."
            },
            {
                nom: "P3 — Pythagore",
                enonce: "Dans un repère orthonormé, ‖u‖² = x² + y²."
            }
        ],
        conclusion: "u et v sont colinéaires si et seulement si xy' − yx' = 0 : deux droites de vecteurs directeurs u et v sont alors parallèles. u et v sont orthogonaux si et seulement si xx' + yy' = 0 : les droites correspondantes sont perpendiculaires."
    },
    formulas: [
      {
        text: "1. Parallèles : a₁=a₂.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Parall%C3%A8les+%3A+a%E2%82%81%3Da%E2%82%82.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Perpendiculaires : a₁×a₂=−1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Perpendiculaires+%3A+a%E2%82%81%C3%97a%E2%82%82%3D%E2%88%921.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre les coefficients.",
    details: "Elles sont perpendiculaires si leurs coefficients directeurs sont des opposés inverses. Cette notion s'appuie sur : équation de droite. Par exemple, y=2x+1 et y=2x−3 sont parallèles illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "y=2x+1 et y=2x−3 sont parallèles"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Droites du plan : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d-rUnClmcCY",
        lang: "fr"
      },
      methode: {
        title: "Démontrer que deux droites sont parallèles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/NjsVdVolhvU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Géométrie analytique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=V%C3%A9rifier%20que%20deux%20droites%20sont%20parall%C3%A8les.\" target=\"_blank\" rel=\"noopener noreferrer\">Vérifier que deux droites sont parallèles.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20une%20droite%20perpendiculaire%20%C3%A0%20y%3D3x%E2%88%921.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver une droite perpendiculaire à y=3x−1.</a>"
    ]
  },
  "ecole:1169": {
    title: "Milieu d'un segment",
    definition: "Le milieu d’un segment est le point équidistant des deux extrémités. Ses coordonnées sont la moyenne des coordonnées des extrémités.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan affine muni d'un repère ; A et B sont deux points.",
        axiomes: [
            {
                nom: "M1 — Définition",
                enonce: "Le milieu de [AB] est le point I tel que AI = IB."
            },
            {
                nom: "M2 — Chasles",
                enonce: "AB + BC = AC pour tous points A, B, C."
            },
            {
                nom: "M3 — Coordonnées",
                enonce: "Les coordonnées de AB sont (x_B − x_A ; y_B − y_A)."
            }
        ],
        conclusion: "Le milieu I existe et est unique : AI = IB donne 2·OI = OA + OB, donc I a pour coordonnées ((x_A + x_B)/2 ; (y_A + y_B)/2)."
    },
    formulas: [
      {
        text: "1. M((xA+xB)/2 ; (yA+yB)/2).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+M%28%28xA%2BxB%29%2F2+%3B+%28yA%2ByB%29%2F2%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Équidistance.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+%C3%89quidistance.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Utilisé pour les constructions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Utilis%C3%A9+pour+les+constructions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier de diviser par 2.",
    details: "Ses coordonnées sont la moyenne des coordonnées des extrémités. Cette notion s'appuie sur : coordonnées. Par exemple, A(2,4), B(6,8) → M(4,6) illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(2,4), B(6,8) → M(4,6)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Vecteurs et repérage : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9OB3hct6gak",
        lang: "fr"
      },
      methode: {
        title: "Calculer les coordonnées d'un milieu",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YTQCtSvxAmM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Géométrie analytique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20le%20milieu%20de%20A%281%2C3%29%20et%20B%285%2C7%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver le milieu de A(1,3) et B(5,7).</a>",
      "<a href=\"https://www.google.com/search?q=V%C3%A9rifier%20que%20M%20est%20%C3%A9quidistant%20de%20A%20et%20B.\" target=\"_blank\" rel=\"noopener noreferrer\">Vérifier que M est équidistant de A et B.</a>"
    ]
  },
  "ecole:1170": {
    title: "Expérience aléatoire",
    definition: "Une expérience aléatoire est une expérience dont le résultat ne peut pas être prévu avec certitude, mais dont tous les résultats possibles sont connus à l’avance.",
    definition_axiomatique: {
        cadre: "Une expérience aléatoire se répète dans les mêmes conditions et son résultat est imprévisible.",
        axiomes: [
            {
                nom: "E1 — Issues",
                enonce: "L'ensemble Ω des issues est connu à l'avance : à chaque réalisation, une et une seule issue se produit."
            },
            {
                nom: "E2 — Stabilité des fréquences",
                enonce: "Lorsqu'on répète l'expérience un grand nombre de fois, la fréquence de chaque événement se stabilise (loi des grands nombres)."
            },
            {
                nom: "E3 — Modèle",
                enonce: "On modélise l'expérience par une probabilité P sur Ω : des nombres P(ω) ≥ 0 de somme 1."
            }
        ],
        conclusion: "Une expérience aléatoire est décrite par le couple (Ω, P). La probabilité d'un événement A est le nombre autour duquel se stabilise sa fréquence, et vaut la somme des P(ω) pour ω dans A.",
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
        text: "1. Résultats possibles : issues.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+R%C3%A9sultats+possibles+%3A+issues.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. On peut associer des probabilités aux issues.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+On+peut+associer+des+probabilit%C3%A9s+aux+issues.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. L’ensemble des issues forme l’univers Ω.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+L%E2%80%99ensemble+des+issues+forme+l%E2%80%99univers+%CE%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre expérience aléatoire et expérience déterministe.",
    details: "Une expérience aléatoire est une expérience dont le résultat ne peut pas être prévu avec certitude, mais dont tous les résultats possibles sont connus à l’avance. Cette notion s'appuie sur : notion d’ensemble et de résultat. Par exemple, Lancer un dé, tirer une carte, choisir un élève au hasard illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Lancer un dé, tirer une carte, choisir un élève au hasard"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Expériences aléatoires ».",
      items: [
        { file: "300-0-univers.png", alt: "Expériences aléatoires" },
        { file: "300-1-evenement.png", alt: "Expériences aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d6Co0q01QH0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Jeux de hasard"
      },
      {
        icon: "finance",
        text: "Sondages"
      },
      {
        icon: "research",
        text: "Modélisation d’incertitude"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20l%E2%80%99univers%20d%E2%80%99une%20exp%C3%A9rience%20%3A%20lancer%20un%20d%C3%A9%20%C3%A9quilibr%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner l’univers d’une expérience : lancer un dé équilibré.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9crire%20une%20exp%C3%A9rience%20al%C3%A9atoire%20li%C3%A9e%20%C3%A0%20la%20vie%20quotidienne.\" target=\"_blank\" rel=\"noopener noreferrer\">Décrire une expérience aléatoire liée à la vie quotidienne.</a>"
    ]
  },
  "ecole:1171": {
    title: "Événements et univers",
    definition: "Un événement est un sous-ensemble de l’univers d’une expérience aléatoire. L’univers est l’ensemble de toutes les issues possibles.",
    definition_axiomatique: {
        cadre: "Une expérience aléatoire a pour univers Ω, ensemble de ses issues.",
        axiomes: [
            {
                nom: "E1 — Univers",
                enonce: "Ω est un ensemble non vide dont les éléments sont les issues possibles, exclusives les unes des autres."
            },
            {
                nom: "E2 — Événements",
                enonce: "Un événement est une partie de Ω ; le complémentaire, la réunion et l'intersection d'événements sont des événements."
            },
            {
                nom: "E3 — Événements particuliers",
                enonce: "Ω est l'événement certain, ∅ l'événement impossible, {ω} un événement élémentaire."
            }
        ],
        conclusion: "Réaliser l'événement A, c'est obtenir une issue de A. A ∩ B se réalise si A et B se réalisent, A ∪ B si l'un au moins des deux se réalise, A̅ si A ne se réalise pas.",
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
        text: "1. Événement certain = univers.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+%C3%89v%C3%A9nement+certain+%3D+univers.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Événement impossible = ensemble vide.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+%C3%89v%C3%A9nement+impossible+%3D+ensemble+vide.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Événements peuvent être compatibles ou incompatibles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+%C3%89v%C3%A9nements+peuvent+%C3%AAtre+compatibles+ou+incompatibles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier des issues dans l’univers.",
    details: "L’univers est l’ensemble de toutes les issues possibles. Cette notion s'appuie sur : notion d’ensemble. Par exemple, Univers d’un dé : {1,2,3,4,5,6}. Événement « nombre pair » : {2,4,6} illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Univers d’un dé : {1,2,3,4,5,6}. Événement « nombre pair » : {2,4,6}"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Probabilité d’un événement ».",
      items: [
        { file: "301-1-intervalle.png", alt: "Probabilité d’un événement" },
        { file: "301-2-total.png", alt: "Probabilité d’un événement" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer une probabilité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/d6Co0q01QH0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calcul de probabilités"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9crire%20l%E2%80%99univers%20et%20un%20%C3%A9v%C3%A9nement%20pour%20un%20tirage%20de%20carte.\" target=\"_blank\" rel=\"noopener noreferrer\">Décrire l’univers et un événement pour un tirage de carte.</a>",
      "<a href=\"https://www.google.com/search?q=Identifier%20l%E2%80%99%C3%A9v%C3%A9nement%20certain%20et%20l%E2%80%99%C3%A9v%C3%A9nement%20impossible.\" target=\"_blank\" rel=\"noopener noreferrer\">Identifier l’événement certain et l’événement impossible.</a>"
    ]
  },
  "ecole:1172": {
    title: "Événements incompatibles et compatibles",
    definition: "Deux événements sont incompatibles s’ils ne peuvent pas se produire en même temps. Ils sont compatibles s’ils peuvent se produire simultanément.",
    definition_axiomatique: {
        cadre: "On travaille avec une probabilité P sur un univers Ω ; A et B sont deux événements.",
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
        conclusion: "A et B sont incompatibles si A ∩ B = ∅ ; ils sont compatibles sinon. Pour des événements incompatibles, P(A ∪ B) = P(A) + P(B) (P3) ; pour des événements compatibles, P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
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
        text: "1. Incompatibles : A∩B=∅.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Incompatibles+%3A+A%E2%88%A9B%3D%E2%88%85.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. P(A∪B)=P(A)+P(B) si A et B sont incompatibles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+P%28A%E2%88%AAB%29%3DP%28A%29%2BP%28B%29+si+A+et+B+sont+incompatibles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Compatibles : A∩B≠∅.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Compatibles+%3A+A%E2%88%A9B%E2%89%A0%E2%88%85.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : croire que tous les événements sont incompatibles.",
    details: "Ils sont compatibles s’ils peuvent se produire simultanément. Cette notion s'appuie sur : intersection et union d’ensembles. Par exemple, Sur un dé, « obtenir 2 » et « obtenir 3 » sont incompatibles illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Sur un dé, « obtenir 2 » et « obtenir 3 » sont incompatibles"
      },
      {
        terme: "Exemple 2",
        definition: "« obtenir un nombre pair » et « obtenir un nombre >3 » sont compatibles"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Martingales et temps d'arrêt ».",
      items: [
        { file: "315-0-martingale.png", alt: "Martingales et temps d'arrêt" },
        { file: "315-1-arret-doob.png", alt: "Martingales et temps d'arrêt" },
        { file: "315-2-doob-inegalite.png", alt: "Martingales et temps d'arrêt" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Notion de probabilité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dvx_O37gfyY",
        lang: "fr"
      },
      methode: {
        title: "Calculer la probabilité d'une intersection",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VprpP3e_R-4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculs de probabilités composées"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20deux%20%C3%A9v%C3%A9nements%20incompatibles%20pour%20un%20lancer%20de%20d%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner deux événements incompatibles pour un lancer de dé.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28A%E2%88%AAB%29%20pour%20deux%20%C3%A9v%C3%A9nements%20incompatibles.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(A∪B) pour deux événements incompatibles.</a>"
    ]
  },
  "ecole:1173": {
    title: "Série statistique et effectif",
    definition: "Une série statistique est un ensemble de données recueillies sur une population. L’effectif d’une valeur est le nombre de fois où elle apparaît.",
    definition_axiomatique: {
        cadre: "On étudie un caractère sur une population finie de N individus.",
        axiomes: [
            {
                nom: "S1 — Valeurs",
                enonce: "Le caractère prend un nombre fini de valeurs x₁, …, x_p."
            },
            {
                nom: "S2 — Effectif",
                enonce: "L'effectif nᵢ de la valeur xᵢ est le nombre d'individus qui la prennent."
            },
            {
                nom: "S3 — Total",
                enonce: "n₁ + … + n_p = N."
            }
        ],
        conclusion: "La fréquence de xᵢ est fᵢ = nᵢ/N ; elles vérifient 0 ≤ fᵢ ≤ 1 et f₁ + … + f_p = 1. Une série statistique est l'ensemble des couples (xᵢ ; nᵢ)."
    },
    formulas: [
      {
        text: "1. Population, caractère, modalités.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+Population%2C+caract%C3%A8re%2C+modalit%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Effectif total = somme des effectifs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Effectif+total+%3D+somme+des+effectifs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Fréquence = effectif / effectif total.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+3.+Fr%C3%A9quence+%3D+effectif+%2F+effectif+total.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre effectif et valeur.",
    details: "L’effectif d’une valeur est le nombre de fois où elle apparaît. Cette notion s'appuie sur : calculs de base. Par exemple, Notes : 10, 12, 12, 14 → effectif de 12 = 2 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Notes : 10, 12, 12, 14 → effectif de 12 = 2"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Statistique mathématique ».",
      items: [
        { file: "318-1-cramerrao.png", alt: "Statistique mathématique" },
        { file: "318-2-ic.png", alt: "Statistique mathématique" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer des fréquences",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/GWDDay-mdVA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse de données"
      },
      {
        icon: "finance",
        text: "Sondages"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20l%E2%80%99effectif%20de%20chaque%20valeur%20dans%20une%20s%C3%A9rie%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner l’effectif de chaque valeur dans une série donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20l%E2%80%99effectif%20total%20d%E2%80%99une%20s%C3%A9rie.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer l’effectif total d’une série.</a>"
    ]
  },
  "ecole:1174": {
    title: "Moyenne d'une série",
    definition: "La moyenne d’une série statistique est la somme des valeurs pondérées par leurs effectifs, divisée par l’effectif total. Elle donne une valeur centrale.",
    definition_axiomatique: {
        cadre: "On considère une série statistique de valeurs xᵢ, d'effectifs nᵢ et d'effectif total N.",
        axiomes: [
            {
                nom: "M1 — Valeur unique",
                enonce: "Si toutes les valeurs sont égales à x, la moyenne vaut x."
            },
            {
                nom: "M2 — Regroupement",
                enonce: "Si on partage la série en deux sous-séries d'effectifs N₁ et N₂ et de moyennes m₁ et m₂, la moyenne de la série entière est (N₁m₁ + N₂m₂)/(N₁ + N₂)."
            }
        ],
        conclusion: "La moyenne est la seule règle vérifiant M1 et M2 : m = (n₁x₁ + … + n_px_p)/N. C'est l'unique nombre a tel que Σ nᵢ(xᵢ − a) = 0 (la moyenne est le point d'équilibre de la série).",
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
        text: "1. Sensible aux valeurs extrêmes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+Sensible+aux+valeurs+extr%C3%AAmes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Moyenne pondérée si les valeurs ont des effectifs différents.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Moyenne+pond%C3%A9r%C3%A9e+si+les+valeurs+ont+des+effectifs+diff%C3%A9rents.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier de diviser par l’effectif total.",
    details: "Elle donne une valeur centrale. Cette notion s'appuie sur : série statistique. Par exemple, Notes : 10, 12, 14 avec effectifs 1,2,1 → moyenne = (10×1+12×2+14×1)/4=12 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Notes : 10, 12, 14 avec effectifs 1,2,1 → moyenne = (10×1+12×2+14×1)/4=12"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Statistique mathématique ».",
      items: [
        { file: "318-1-cramerrao.png", alt: "Statistique mathématique" },
        { file: "318-2-ic.png", alt: "Statistique mathématique" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer une moyenne (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/88_16UbkdZM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse de performances"
      },
      {
        icon: "research",
        text: "Indicateurs"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20moyenne%20d%E2%80%99une%20s%C3%A9rie%20de%20notes.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la moyenne d’une série de notes.</a>",
      "<a href=\"https://www.google.com/search?q=Comparer%20deux%20moyennes%20de%20s%C3%A9ries%20diff%C3%A9rentes.\" target=\"_blank\" rel=\"noopener noreferrer\">Comparer deux moyennes de séries différentes.</a>"
    ]
  },
  "ecole:1175": {
    title: "Médiane",
    definition: "La médiane d’une série ordonnée est une valeur qui partage la série en deux groupes de même effectif. Elle est moins sensible aux valeurs extrêmes que la moyenne.",
    definition_axiomatique: {
        cadre: "On considère une série de N valeurs rangées dans l'ordre croissant x₁ ≤ x₂ ≤ … ≤ x_N.",
        axiomes: [
            {
                nom: "M1 — Partage",
                enonce: "La médiane Me est un nombre tel qu'au moins la moitié des valeurs sont ≤ Me et au moins la moitié sont ≥ Me."
            },
            {
                nom: "M2 — Cas impair",
                enonce: "Si N = 2p + 1, Me = x_{p+1}."
            },
            {
                nom: "M3 — Cas pair",
                enonce: "Si N = 2p, Me est le milieu de l'intervalle [x_p ; x_{p+1}] des nombres vérifiant M1."
            }
        ],
        conclusion: "La médiane sépare la série en deux groupes de même effectif. C'est aussi le nombre a qui minimise la somme des écarts absolus Σ|xᵢ − a| ; elle est moins sensible que la moyenne aux valeurs extrêmes.",
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
        text: "1. Série ordonnée.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+S%C3%A9rie+ordonn%C3%A9e.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Si l’effectif est impair : valeur centrale.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Si+l%E2%80%99effectif+est+impair+%3A+valeur+centrale.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Si l’effectif est pair : moyenne des deux valeurs centrales.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+3.+Si+l%E2%80%99effectif+est+pair+%3A+moyenne+des+deux+valeurs+centrales.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : ne pas ordonner la série avant de chercher la médiane.",
    details: "Elle est moins sensible aux valeurs extrêmes que la moyenne. Cette notion s'appuie sur : série statistique ordonnée. Par exemple, Série : 8, 10, 12, 14, 18 → médiane = 12 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Série : 8, 10, 12, 14, 18 → médiane = 12"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Valeurs propres ».",
      items: [
        { file: "107-0-vecteur-propre.png", alt: "Valeurs propres" },
        { file: "107-1-polycar.png", alt: "Valeurs propres" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer une médiane dans une liste (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kr90dXv0NFY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse de revenus"
      },
      {
        icon: "research",
        text: "Temps de réponse"
      },
      {
        icon: "research",
        text: "Etc"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20la%20m%C3%A9diane%20d%E2%80%99une%20s%C3%A9rie%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver la médiane d’une série donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Comparer%20moyenne%20et%20m%C3%A9diane%20pour%20une%20s%C3%A9rie%20avec%20valeurs%20extr%C3%AAmes.\" target=\"_blank\" rel=\"noopener noreferrer\">Comparer moyenne et médiane pour une série avec valeurs extrêmes.</a>"
    ]
  },
  "ecole:1176": {
    title: "Quartiles",
    definition: "Les quartiles sont des valeurs qui partagent une série ordonnée en quatre groupes de même effectif. Le premier quartile Q1 sépare le premier quart, le troisième quartile Q3 sépare les trois quarts.",
    definition_axiomatique: {
        cadre: "On considère une série de N valeurs rangées dans l'ordre croissant.",
        axiomes: [
            {
                nom: "Q1 — Premier quartile",
                enonce: "Q₁ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs soient inférieures ou égales à Q₁."
            },
            {
                nom: "Q2 — Médiane",
                enonce: "Me est la plus petite valeur telle qu'au moins 50 % des valeurs soient inférieures ou égales à Me."
            },
            {
                nom: "Q3 — Troisième quartile",
                enonce: "Q₃ est la plus petite valeur telle qu'au moins 75 % des valeurs soient inférieures ou égales à Q₃."
            }
        ],
        conclusion: "Les quartiles partagent la série en quatre parts d'effectifs voisins. L'écart interquartile Q₃ − Q₁ mesure la dispersion de la moitié centrale des valeurs.",
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
        text: "1. Série ordonnée.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+S%C3%A9rie+ordonn%C3%A9e.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Q1 : 25 % des données en dessous.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Q1+%3A+25+%25+des+donn%C3%A9es+en+dessous.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Q3 : 75 % des données en dessous.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+3.+Q3+%3A+75+%25+des+donn%C3%A9es+en+dessous.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : mal positionner Q1 et Q3 dans la série.",
    details: "Le premier quartile Q1 sépare le premier quart, le troisième quartile Q3 sépare les trois quarts. Cette notion s'appuie sur : médiane, série ordonnée. Par exemple, Série : 2,4,6,8,10,12,14,16 → Q1≈4, Q3≈12 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Série : 2,4,6,8,10,12,14,16 → Q1≈4, Q3≈12"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Groupes ».",
      items: [
        { file: "110-0-table-Z4.png", alt: "Groupes" },
        { file: "110-1-identite-inverse.png", alt: "Groupes" },
        { file: "110-2-associativite.png", alt: "Groupes" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
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
        icon: "research",
        text: "Analyse de dispersion"
      },
      {
        icon: "research",
        text: "Boîtes à moustaches"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20Q1%20et%20Q3%20d%E2%80%99une%20s%C3%A9rie%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer Q1 et Q3 d’une série donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Construire%20une%20bo%C3%AEte%20%C3%A0%20moustaches%20%C3%A0%20partir%20des%20quartiles.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire une boîte à moustaches à partir des quartiles.</a>"
    ]
  },
  "ecole:1177": {
    title: "Étendue",
    definition: "L’étendue d’une série statistique est la différence entre la plus grande et la plus petite valeur. Elle mesure la dispersion globale.",
    definition_axiomatique: {
        cadre: "On munit ℝ de la distance d(x, y) = |x − y|, qui vérifie : d(x, y) = 0 ⟺ x = y ; d(x, y) = d(y, x) ; d(x, z) ≤ d(x, y) + d(y, z).",
        axiomes: [
            {
                nom: "E1 — Diamètre",
                enonce: "L'étendue d'une série de valeurs x₁, …, x_N est le diamètre de la série : la plus grande des distances entre deux valeurs, max d(xᵢ, xⱼ)."
            },
            {
                nom: "E2 — Valeurs extrêmes",
                enonce: "Cette plus grande distance est atteinte entre la plus grande et la plus petite valeur."
            }
        ],
        conclusion: "L'étendue est e = x_max − x_min. Elle est nulle si et seulement si toutes les valeurs sont égales, ne change pas quand on ajoute une même constante aux valeurs, et est multipliée par |λ| quand on multiplie les valeurs par λ. Elle est très sensible aux valeurs extrêmes."
    },
    formulas: [
      {
        text: "1. Étendue = max − min.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+%C3%89tendue+%3D+max+%E2%88%92+min.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Sensible aux valeurs extrêmes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Sensible+aux+valeurs+extr%C3%AAmes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre étendue et moyenne.",
    details: "Elle mesure la dispersion globale. Cette notion s'appuie sur : lecture de données. Par exemple, Série : 5, 7, 9, 12 → étendue = 12−5=7 illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Série : 5, 7, 9, 12 → étendue = 12−5=7"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Statistique mathématique ».",
      items: [
        { file: "318-1-cramerrao.png", alt: "Statistique mathématique" },
        { file: "318-2-ic.png", alt: "Statistique mathématique" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer une étendue",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/PPXGOs2b4Ls",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Comparer la dispersion de deux séries"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20l%E2%80%99%C3%A9tendue%20d%E2%80%99une%20s%C3%A9rie%20de%20temp%C3%A9ratures.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer l’étendue d’une série de températures.</a>",
      "<a href=\"https://www.google.com/search?q=Comparer%20les%20%C3%A9tendues%20de%20deux%20s%C3%A9ries.\" target=\"_blank\" rel=\"noopener noreferrer\">Comparer les étendues de deux séries.</a>"
    ]
  },
  "ecole:1178": {
    title: "Diagrammes statistiques",
    definition: "Les diagrammes statistiques (diagramme en bâtons, histogramme, diagramme circulaire, boîte à moustaches) permettent de représenter visuellement une série de données.",
    definition_axiomatique: {
        cadre: "On représente graphiquement une série statistique : à chaque valeur ou classe on associe un dessin.",
        axiomes: [
            {
                nom: "G1 — Proportionnalité",
                enonce: "La mesure du dessin (hauteur d'un bâton, aire d'un rectangle, angle d'un secteur) est proportionnelle à l'effectif ou à la fréquence."
            },
            {
                nom: "G2 — Total",
                enonce: "L'ensemble des dessins représente la totalité de la population : longueurs, aires ou angles s'additionnent (secteurs : 360°)."
            }
        ],
        conclusion: "Dans un diagramme en bâtons, la hauteur est proportionnelle à l'effectif ; dans un histogramme, c'est l'aire du rectangle (donc la hauteur = effectif / amplitude de la classe) ; dans un diagramme circulaire, l'angle du secteur vaut 360° × fréquence."
    },
    formulas: [
      {
        text: "1. Chaque type de diagramme met en avant un aspect : fréquences, répartition, dispersion.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+1.+Chaque+type+de+diagramme+met+en+avant+un+aspect+%3A+fr%C3%A9quences%2C+r%C3%A9partition%2C+dispersion.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Ils doivent être correctement étiquetés (titres, axes, unités).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Seconde+%28lyc%C3%A9e%29+statistiques+2.+Ils+doivent+%C3%AAtre+correctement+%C3%A9tiquet%C3%A9s+%28titres%2C+axes%2C+unit%C3%A9s%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : axes mal gradués, proportions incorrectes.",
    details: "Les diagrammes statistiques (diagramme en bâtons, histogramme, diagramme circulaire, boîte à moustaches) permettent de représenter visuellement une série de données. Cette notion s'appuie sur : série statistique, effectifs, fréquences. Par exemple, Diagramme en bâtons pour des notes illustre concrètement cette notion, telle qu'elle est abordée en classe de Seconde.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Diagramme en bâtons pour des notes"
      },
      {
        terme: "Exemple 2",
        definition: "diagramme circulaire pour des pourcentages"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Statistiques avancées ».",
      items: [
        { file: "713-0-estimateur.png", alt: "Statistiques avancées" },
        { file: "713-1-ic.png", alt: "Statistiques avancées" },
        { file: "713-2-test.png", alt: "Statistiques avancées" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Construire une boîte à moustaches",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/la7c0Yf8VyM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Communication de données"
      },
      {
        icon: "research",
        text: "Analyse visuelle"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construire%20un%20diagramme%20en%20b%C3%A2tons%20%C3%A0%20partir%20d%E2%80%99une%20s%C3%A9rie.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire un diagramme en bâtons à partir d’une série.</a>",
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9ter%20un%20diagramme%20circulaire%20donn%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Interpréter un diagramme circulaire donné.</a>"
    ]
  },
  "ecole:1179": {
    title: "Fonction dérivée",
    definition: "La dérivée d’une fonction mesure la variation instantanée de la fonction. Elle correspond au taux de variation lorsque l’intervalle tend vers zéro.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "La fonction dérivée de f est la fonction f' : x ↦ f'(x), définie sur l'ensemble des points où f est dérivable. Elle donne, en chaque x, le coefficient directeur de la tangente à la courbe de f. Sa nature (signe, valeurs) décrit les variations de f."
    },
    formulas: [
      {
        text: "1. f'(x)=lim(h→0)[f(x+h)−f(x)]/h.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+f%27%28x%29%3Dlim%28h%E2%86%920%29%5Bf%28x%2Bh%29%E2%88%92f%28x%29%5D%2Fh.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f' positive → f croissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+f%27+positive+%E2%86%92+f+croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. f' négative → f décroissante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+f%27+n%C3%A9gative+%E2%86%92+f+d%C3%A9croissante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre dérivée et fonction dérivée.",
    details: "Elle correspond au taux de variation lorsque l’intervalle tend vers zéro. Cette notion s'appuie sur : fonctions, variations. Par exemple, Si f(x)=x², alors f'(x)=2x illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x)=x², alors f'(x)=2x"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Mesure et intégrale de Lebesgue ».",
      items: [
        { file: "18-0-convergence-dominee.png", alt: "Mesure et intégrale de Lebesgue" },
        { file: "18-1-fatou.png", alt: "Mesure et intégrale de Lebesgue" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "finance",
        text: "Physique (vitesse instantanée)"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20d%C3%A9riv%C3%A9e%20de%20f%28x%29%3D3x%C2%B2%E2%88%925x.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la dérivée de f(x)=3x²−5x.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20les%20intervalles%20de%20croissance%20d%E2%80%99une%20fonction%20d%C3%A9rivable.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer les intervalles de croissance d’une fonction dérivable.</a>"
    ]
  },
  "ecole:1180": {
    title: "Taux de variation",
    definition: "Le taux de variation entre deux points mesure la variation moyenne de la fonction sur un intervalle.",
    definition_axiomatique: {
        cadre: "On considère une fonction f et deux points A(a ; f(a)) et B(b ; f(b)) de sa courbe, avec a ≠ b.",
        axiomes: [
            {
                nom: "T1 — Pente",
                enonce: "Le coefficient directeur de la droite (AB) est (f(b) − f(a))/(b − a) (rapport indépendant du couple de points d'une même droite, par Thalès)."
            },
            {
                nom: "T2 — Définition",
                enonce: "Ce quotient est le taux de variation de f entre a et b."
            }
        ],
        conclusion: "Le taux de variation mesure la variation moyenne de f par unité de x sur [a ; b]. Il est constant sur ℝ si et seulement si f est affine ; sa limite quand b → a, si elle existe, est le nombre dérivé f'(a)."
    },
    formulas: [
      {
        text: "1. TV = [f(b)−f(a)]/(b−a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+TV+%3D+%5Bf%28b%29%E2%88%92f%28a%29%5D%2F%28b%E2%88%92a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Approche de la dérivée.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+Approche+de+la+d%C3%A9riv%C3%A9e.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Interprétation graphique : pente de la sécante.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+Interpr%C3%A9tation+graphique+%3A+pente+de+la+s%C3%A9cante.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre taux de variation et dérivée.",
    details: "Le taux de variation entre deux points mesure la variation moyenne de la fonction sur un intervalle. Cette notion s'appuie sur : fonctions. Par exemple, Pour f(x)=x², entre 2 et 3 : TV = (9−4)/1 = 5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², entre 2 et 3 : TV = (9−4)/1 = 5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Mesure et intégrale de Lebesgue ».",
      items: [
        { file: "18-0-convergence-dominee.png", alt: "Mesure et intégrale de Lebesgue" },
        { file: "18-1-fatou.png", alt: "Mesure et intégrale de Lebesgue" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Calculer le nombre dérivé (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/UmT0Gov6yyE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étude de croissance"
      },
      {
        icon: "research",
        text: "Estimation de dérivées"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20le%20taux%20de%20variation%20de%20f%28x%29%3Dx%C2%B3%20entre%201%20et%202.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer le taux de variation de f(x)=x³ entre 1 et 2.</a>",
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9ter%20un%20taux%20de%20variation%20donn%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Interpréter un taux de variation donné.</a>"
    ]
  },
  "ecole:1181": {
    title: "Tangente à une courbe",
    definition: "La tangente à une courbe en un point est la droite qui approche au mieux la courbe localement. Sa pente est la dérivée en ce point.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "T1 — Contact",
                enonce: "La tangente à la courbe de f en A(a ; f(a)) est la droite non verticale T passant par A telle que f(x) − T(x) = (x − a)ε(x) avec ε(x) → 0 quand x → a."
            },
            {
                nom: "T2 — Unicité",
                enonce: "Elle est unique lorsque f est dérivable en a ; son coefficient directeur est f'(a)."
            }
        ],
        conclusion: "La tangente en A a pour équation y = f'(a)(x − a) + f(a). Elle est la position limite des sécantes (AB) quand B tend vers A sur la courbe, et c'est la droite qui approche le mieux la courbe près de A."
    },
    formulas: [
      {
        text: "1. Équation : y=f(a)+f'(a)(x−a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+%C3%89quation+%3A+y%3Df%28a%29%2Bf%27%28a%29%28x%E2%88%92a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Pente = f'(a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+Pente+%3D+f%27%28a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Interprétation géométrique.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+Interpr%C3%A9tation+g%C3%A9om%C3%A9trique.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : utiliser f(a) au lieu de f'(a).",
    details: "Sa pente est la dérivée en ce point. Cette notion s'appuie sur : dérivée. Par exemple, Pour f(x)=x², tangente en 1 : y=1+2(x−1) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x², tangente en 1 : y=1+2(x−1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Déterminer une équation d'une tangente à une courbe",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/fKEGoo50Xmo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Approximations locales"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99%C3%A9quation%20de%20la%20tangente%20%C3%A0%20f%28x%29%3Dx%C2%B2%20en%20x%3D2.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’équation de la tangente à f(x)=x² en x=2.</a>",
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20tangente%20%C3%A0%20une%20courbe%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la tangente à une courbe donnée.</a>"
    ]
  },
  "ecole:1182": {
    title: "Fonctions dérivables usuelles",
    definition: "Certaines fonctions courantes ont des dérivées connues : polynômes, exponentielle, logarithme, sinus, cosinus.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "À partir de la définition, on obtient les dérivées des fonctions usuelles : (c)' = 0, (x)' = 1, (xⁿ)' = nxⁿ⁻¹, (1/x)' = −1/x², (√x)' = 1/(2√x), (eˣ)' = eˣ, (ln x)' = 1/x. Les règles (u + v)' = u' + v', (uv)' = u'v + uv', (u/v)' = (u'v − uv')/v², (v ∘ u)' = u' × (v' ∘ u) permettent de dériver toutes les fonctions construites à partir d'elles."
    },
    formulas: [
      {
        text: "1. (xⁿ)' = nxⁿ⁻¹.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+%28x%E2%81%BF%29%27+%3D+nx%E2%81%BF%E2%81%BB%C2%B9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. (eˣ)' = eˣ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+%28e%CB%A3%29%27+%3D+e%CB%A3.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. (ln x)' = 1/x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+%28ln+x%29%27+%3D+1%2Fx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. (sin x)' = cos x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+4.+%28sin+x%29%27+%3D+cos+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "5. (cos x)' = −sin x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+5.+%28cos+x%29%27+%3D+%E2%88%92sin+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier les règles de dérivation composées.",
    details: "Certaines fonctions courantes ont des dérivées connues : polynômes, exponentielle, logarithme, sinus, cosinus. Cette notion s'appuie sur : fonctions de base. Par exemple, Dériver f(x)=3x³−2ln x illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Dériver f(x)=3x³−2ln x"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uMSNllPBFhQ",
        lang: "fr"
      },
      methode: {
        title: "Dériver les fonctions usuelles",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/9Mann4wOGJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Calculs rapides"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20f%28x%29%3Dx%C2%B3%2B2e%CB%A3.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver f(x)=x³+2eˣ.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20f%28x%29%3Dln%20x%20%2B%20sin%20x.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver f(x)=ln x + sin x.</a>"
    ]
  },
  "ecole:1183": {
    title: "Fonction exponentielle",
    definition: "La fonction exponentielle est définie par exp(x)=eˣ. Elle est strictement croissante et intervient dans de nombreux modèles.",
    definition_axiomatique: {
        cadre: "On cherche l'unique fonction dérivable sur ℝ égale à sa dérivée et valant 1 en 0.",
        axiomes: [
            {
                nom: "E1 — Dérivabilité",
                enonce: "f est dérivable sur ℝ."
            },
            {
                nom: "E2 — Équation",
                enonce: "f' = f."
            },
            {
                nom: "E3 — Condition initiale",
                enonce: "f(0) = 1."
            }
        ],
        conclusion: "La fonction exponentielle exp = e^x est l'unique fonction qui vérifie E1 à E3. Elle est strictement positive, strictement croissante, vérifie e^{x + y} = eˣ·eʸ et (e^u)' = u'e^u ; elle est la réciproque de ln.",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. exp'(x)=exp(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+exp%27%28x%29%3Dexp%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. exp(x+y)=exp(x)exp(y).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+exp%28x%2By%29%3Dexp%28x%29exp%28y%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. exp(0)=1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+exp%280%29%3D1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre eˣ et xᵉ.",
    details: "Elle est strictement croissante et intervient dans de nombreux modèles. Cette notion s'appuie sur : puissances. Par exemple, exp(2)=e² illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "exp(2)=e²"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction exponentielle : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aD03wqgxexk",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur la fonction exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qDFjeFyA_OY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Croissance"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Finance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20exp%283%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer exp(3).</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20les%20variations%20de%20exp%28x%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier les variations de exp(x).</a>"
    ]
  },
  "ecole:1184": {
    title: "Fonction logarithme",
    definition: "La fonction logarithme népérien ln(x) est la réciproque de la fonction exponentielle. Elle est définie sur (0,+∞).",
    definition_axiomatique: {
        cadre: "On travaille sur ]0 ; +∞[ : on cherche la primitive de x ↦ 1/x qui s'annule en 1.",
        axiomes: [
            {
                nom: "L1 — Dérivée",
                enonce: "ln est dérivable sur ]0 ; +∞[ et ln'(x) = 1/x."
            },
            {
                nom: "L2 — Normalisation",
                enonce: "ln(1) = 0."
            }
        ],
        conclusion: "Le logarithme népérien est l'unique fonction vérifiant L1 et L2. Il est strictement croissant, vérifie ln(ab) = ln a + ln b (la fonction x ↦ ln(ax) a même dérivée que ln), (ln u)' = u'/u, et il est la réciproque de exp."
    },
    formulas: [
      {
        text: "1. ln(ab)=ln a + ln b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+ln%28ab%29%3Dln+a+%2B+ln+b.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ln(aᵏ)=k ln a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+ln%28a%E1%B5%8F%29%3Dk+ln+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. (ln x)' = 1/x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+%28ln+x%29%27+%3D+1%2Fx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre ln(x) et log₁₀(x).",
    details: "Elle est définie sur (0,+∞). Cette notion s'appuie sur : exponentielle. Par exemple, ln(e)=1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "ln(e)=1"
      },
      {
        terme: "Exemple 2",
        definition: "ln(1)=0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Appliquer les formules sur les logarithmes",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/HGrK77-SCl4",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Acoustique"
      },
      {
        icon: "finance",
        text: "Finance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Simplifier%20ln%283e%C2%B2%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Simplifier ln(3e²).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20ln%28x%C2%B2%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver ln(x²).</a>"
    ]
  },
  "ecole:1185": {
    title: "Étude de fonctions",
    definition: "Étudier une fonction consiste à analyser ses variations, ses extremums, ses limites, son signe et sa représentation graphique. C’est une synthèse complète du comportement de la fonction.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Accroissements finis",
                enonce: "Si f est continue sur [a ; b] et dérivable sur ]a ; b[, il existe c ∈ ]a ; b[ tel que f(b) − f(a) = f'(c)(b − a)."
            },
            {
                nom: "A2 — Fermat",
                enonce: "Si f admet un extremum local en un point intérieur a où elle est dérivable, alors f'(a) = 0."
            },
            {
                nom: "A3 — Valeurs intermédiaires",
                enonce: "Une fonction continue sur un intervalle prend toutes les valeurs comprises entre deux de ses valeurs."
            }
        ],
        conclusion: "Étudier une fonction, c'est déterminer son ensemble de définition, sa dérivée, le signe de f' (A1 : f' ≥ 0 sur un intervalle si et seulement si f y est croissante), ses extremums (A2), ses limites aux bornes, et dresser le tableau de variations ; A3 donne le nombre de solutions de f(x) = k."
    },
    formulas: [
      {
        text: "1. Tableau de variations.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+Tableau+de+variations.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Étude du signe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+%C3%89tude+du+signe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Limites éventuelles.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+3.+Limites+%C3%A9ventuelles.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Tangentes et dérivées.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+4.+Tangentes+et+d%C3%A9riv%C3%A9es.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier de vérifier les valeurs aux bornes.",
    details: "C’est une synthèse complète du comportement de la fonction. Cette notion s'appuie sur : dérivée, variations. Par exemple, Étude de f(x)=x³−3x : variations, extremums, signe illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Étude de f(x)=x³−3x : variations, extremums, signe"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonctions de référence : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/7BlHXCcTEx8",
        lang: "fr"
      },
      methode: {
        title: "Etudier une fonction exponentielle 1/3 : Limites",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/I4HkvkpqjNw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20fonction%20f%28x%29%3Dx%C2%B3%E2%88%924x.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la fonction f(x)=x³−4x.</a>",
      "<a href=\"https://www.google.com/search?q=Construire%20le%20tableau%20de%20variations%20d%E2%80%99une%20fonction%20d%C3%A9rivable.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire le tableau de variations d’une fonction dérivable.</a>"
    ]
  },
  "ecole:1186": {
    title: "Fonctions composées",
    definition: "Une fonction composée est une fonction obtenue en appliquant une fonction à une autre. On note (f∘g)(x)=f(g(x)).",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Définition",
                enonce: "f est dérivable en a si le taux d'accroissement (f(a + h) − f(a))/h a une limite finie quand h → 0 ; cette limite est le nombre dérivé f'(a)."
            },
            {
                nom: "A2 — Règles sur les limites",
                enonce: "La limite d'une somme, d'un produit et d'un quotient (dénominateur de limite non nulle) est la somme, le produit et le quotient des limites."
            },
            {
                nom: "A3 — Continuité",
                enonce: "Une fonction dérivable en a est continue en a : f(a + h) − f(a) = h × (taux) → 0."
            }
        ],
        conclusion: "Une fonction composée x ↦ v(u(x)) est dérivable là où u l'est en x et v l'est en u(x), et (v ∘ u)' = u' × (v' ∘ u). En particulier (uⁿ)' = n u' uⁿ⁻¹, (√u)' = u'/(2√u), (eᵘ)' = u'eᵘ, (ln u)' = u'/u. Le sens de variation de v ∘ u se déduit de ceux de u et v."
    },
    formulas: [
      {
        text: "1. Domaine : valeurs où g(x) est défini et où f(g(x)) est défini.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+1.+Domaine+%3A+valeurs+o%C3%B9+g%28x%29+est+d%C3%A9fini+et+o%C3%B9+f%28g%28x%29%29+est+d%C3%A9fini.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dérivation : (f∘g)'(x)=f'(g(x))·g'(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+analyse+2.+D%C3%A9rivation+%3A+%28f%E2%88%98g%29%27%28x%29%3Df%27%28g%28x%29%29%C2%B7g%27%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre f(g(x)) et g(f(x)).",
    details: "On note (f∘g)(x)=f(g(x)). Cette notion s'appuie sur : fonctions, dérivation. Par exemple, Si f(x)=x² et g(x)=3x−1, alors (f∘g)(x)=(3x−1)² illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si f(x)=x² et g(x)=3x−1, alors (f∘g)(x)=(3x−1)²"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XAgdHblbajE",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la dérivée d'une fonction composée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/lwcFgnbs0Ew",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Dérivation avancée"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20%28f%E2%88%98g%29%28x%29%20pour%20deux%20fonctions%20donn%C3%A9es.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer (f∘g)(x) pour deux fonctions données.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20une%20fonction%20compos%C3%A9e%20simple.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver une fonction composée simple.</a>"
    ]
  },
  "ecole:1187": {
    title: "Polynômes du second degré",
    definition: "Un polynôme du second degré est une expression de la forme ax²+bx+c. Il possède une parabole comme courbe représentative.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +. Un polynôme du second degré est une fonction f(x) = ax² + bx + c avec a ≠ 0.",
        axiomes: [
            {
                nom: "P1 — Degré",
                enonce: "f est du second degré si a ≠ 0."
            },
            {
                nom: "P2 — Identification",
                enonce: "Deux polynômes égaux en tout réel ont les mêmes coefficients."
            },
            {
                nom: "P3 — Carrés",
                enonce: "Un carré de réel est positif ou nul."
            }
        ],
        conclusion: "Sous forme canonique f(x) = a(x − α)² + β avec α = −b/2a et β = −Δ/4a (Δ = b² − 4ac). Le signe de Δ donne le nombre de racines réelles (0, 1 ou 2) ; f est du signe de a hors des racines. Si a > 0, f est décroissante puis croissante, avec un minimum β en α ; si a < 0, c'est l'inverse, avec un maximum β en α."
    },
    formulas: [
      {
        text: "1. Sommet : x=−b/(2a).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Sommet+%3A+x%3D%E2%88%92b%2F%282a%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Discriminant Δ=b²−4ac.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+Discriminant+%CE%94%3Db%C2%B2%E2%88%924ac.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Signe dépend de Δ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Signe+d%C3%A9pend+de+%CE%94.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre sommet et racines.",
    details: "Il possède une parabole comme courbe représentative. Cette notion s'appuie sur : équations du second degré. Par exemple, f(x)=2x²−4x+1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=2x²−4x+1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Polynômes ».",
      items: [
        { file: "102-2-racines.png", alt: "Polynômes" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Second degré (fonctions) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/WVYWdN13kPE",
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
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Trajectoires"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20le%20sommet%20de%20f%28x%29%3Dx%C2%B2%E2%88%926x%2B5.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver le sommet de f(x)=x²−6x+5.</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20le%20signe%20de%202x%C2%B2%E2%88%923x%E2%88%922.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier le signe de 2x²−3x−2.</a>"
    ]
  },
  "ecole:1188": {
    title: "Fonctions trigonométriques",
    definition: "Les fonctions sinus et cosinus sont des fonctions périodiques fondamentales en mathématiques et en physique.",
    definition_axiomatique: {
        cadre: "On cherche deux fonctions cos et sin définies sur ℝ qui décrivent les coordonnées d'un point qui parcourt le cercle unité.",
        axiomes: [
            {
                nom: "T1 — Dérivées",
                enonce: "cos et sin sont dérivables sur ℝ, avec cos' = −sin et sin' = cos."
            },
            {
                nom: "T2 — Conditions initiales",
                enonce: "cos(0) = 1 et sin(0) = 0."
            }
        ],
        conclusion: "Il existe un seul couple de fonctions (cos, sin) vérifiant T1 et T2. On en déduit cos²+ sin² = 1 (dérivée nulle, valeur 1 en 0), cos paire, sin impaire, et la périodicité : π est défini comme le double du plus petit réel strictement positif où cos s'annule ; cos et sin sont 2π-périodiques et vérifient les formules d'addition."
    },
    formulas: [
      {
        text: "1. sin²x + cos²x = 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+sin%C2%B2x+%2B+cos%C2%B2x+%3D+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. sin'(x)=cos(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+sin%27%28x%29%3Dcos%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. cos'(x)=−sin(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+cos%27%28x%29%3D%E2%88%92sin%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre radian et degré.",
    details: "Les fonctions sinus et cosinus sont des fonctions périodiques fondamentales en mathématiques et en physique. Cette notion s'appuie sur : trigonométrie de base. Par exemple, sin(0)=0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "sin(0)=0"
      },
      {
        terme: "Exemple 2",
        definition: "cos(0)=1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Théorie de jauge et interactions fondamentales ».",
      items: [
        { file: "426-0-yangmills.png", alt: "Théorie de jauge et interactions fondamentales" },
        { file: "426-1-sun.png", alt: "Théorie de jauge et interactions fondamentales" },
        { file: "426-2-connexion-fibre.png", alt: "Théorie de jauge et interactions fondamentales" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation trigonométrique (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VbfA7HGIeLw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Ondes"
      },
      {
        icon: "research",
        text: "Rotations"
      },
      {
        icon: "research",
        text: "Signaux"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20sin%28%CF%80/3%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer sin(π/3).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20f%28x%29%3Dsin%28x%29%2B2cos%28x%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver f(x)=sin(x)+2cos(x).</a>"
    ]
  },
  "ecole:1189": {
    title: "Matrices 2×2",
    definition: "Une matrice 2×2 est un tableau de nombres permettant de représenter des transformations linéaires simples.",
    definition_axiomatique: {
        cadre: "Une matrice 2×2 est un tableau de quatre réels A = (a b ; c d) ; M₂(ℝ) est l'ensemble de ces matrices.",
        axiomes: [
            {
                nom: "M1 — Addition",
                enonce: "L'addition se fait terme à terme, et (M₂(ℝ), +) est un groupe commutatif."
            },
            {
                nom: "M2 — Produit",
                enonce: "Le produit se fait ligne par colonne ; il est associatif et distributif sur l'addition."
            },
            {
                nom: "M3 — Neutre",
                enonce: "La matrice identité I = (1 0 ; 0 1) vérifie AI = IA = A ; le produit n'est pas commutatif."
            }
        ],
        conclusion: "Une matrice A est inversible si et seulement si ad − bc ≠ 0 (le déterminant), et alors A⁻¹ = (1/(ad − bc))·(d −b ; −c a). Un système linéaire 2×2 s'écrit AX = B et, si A est inversible, sa solution est X = A⁻¹B."
    },
    formulas: [
      {
        text: "1. Addition et multiplication.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Addition+et+multiplication.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Matrice identité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+Matrice+identit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Déterminant : ad−bc.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+D%C3%A9terminant+%3A+ad%E2%88%92bc.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre multiplication matricielle et terme à terme.",
    details: "Une matrice 2×2 est un tableau de nombres permettant de représenter des transformations linéaires simples. Cette notion s'appuie sur : algèbre de base. Par exemple, A = [[1,2],[3,4]] illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A = [[1,2],[3,4]]"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Matrices ».",
      items: [
        { file: "103-0-matrice.png", alt: "Matrices" },
        { file: "103-2-inverse.png", alt: "Matrices" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Linear transformations and matrices | Chapter 3, Essence of linear algebra",
        channel: "3Blue1Brown",
        url: "https://youtu.be/kYB8IZa5AuE",
        lang: "en"
      },
      methode: {
        title: "Calculer le produit de deux matrices carrées",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/ZOtgQxB5NXI",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Transformations géométriques"
      },
      {
        icon: "research",
        text: "Systèmes linéaires"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20A%2BB%20pour%20deux%20matrices%20donn%C3%A9es.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer A+B pour deux matrices données.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20le%20d%C3%A9terminant%20d%E2%80%99une%20matrice%202%C3%972.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer le déterminant d’une matrice 2×2.</a>"
    ]
  },
  "ecole:1190": {
    title: "Systèmes linéaires 3×3",
    definition: "Un système linéaire 3×3 comporte trois équations à trois inconnues. Il peut être résolu par substitution, combinaison ou matrices.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication. On considère un système de trois équations à trois inconnues x, y, z.",
        axiomes: [
            {
                nom: "S1 — Échange",
                enonce: "Échanger deux équations donne un système équivalent."
            },
            {
                nom: "S2 — Multiplication",
                enonce: "Multiplier une équation par un nombre non nul donne un système équivalent."
            },
            {
                nom: "S3 — Combinaison",
                enonce: "Remplacer une équation par elle-même plus un multiple d'une autre donne un système équivalent."
            }
        ],
        conclusion: "La méthode du pivot de Gauss applique S1 à S3 pour se ramener à un système triangulaire. Le système a alors soit une unique solution, soit aucune, soit une infinité de solutions (droite ou plan)."
    },
    formulas: [
      {
        text: "1. Une solution, aucune ou infiniment.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Une+solution%2C+aucune+ou+infiniment.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Méthodes : substitution, élimination.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+M%C3%A9thodes+%3A+substitution%2C+%C3%A9limination.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : mauvaise élimination.",
    details: "Il peut être résolu par substitution, combinaison ou matrices. Cette notion s'appuie sur : systèmes 2×2. Par exemple, Système : x+y+z=3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Système : x+y+z=3"
      },
      {
        terme: "Exemple 2",
        definition: "x−y+2z=4"
      },
      {
        terme: "Exemple 3",
        definition: "2x+y−z=1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Matrices ».",
      items: [
        { file: "103-0-matrice.png", alt: "Matrices" },
        { file: "103-2-inverse.png", alt: "Matrices" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Systèmes d'équations et droites : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/sWaHnxqUve0",
        lang: "fr"
      },
      methode: {
        title: "Résoudre un système par combinaisons linéaires (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Zw-qI9DFv54",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Géométrie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20un%20syst%C3%A8me%203%C3%973%20par%20%C3%A9limination.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre un système 3×3 par élimination.</a>",
      "<a href=\"https://www.google.com/search?q=V%C3%A9rifier%20une%20solution%20propos%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Vérifier une solution proposée.</a>"
    ]
  },
  "ecole:1191": {
    title: "Suites arithmétiques et géométriques",
    definition: "Les suites arithmétiques et géométriques modélisent des évolutions régulières. Elles sont définies explicitement ou par récurrence.",
    definition_axiomatique: {
        cadre: "On travaille avec les suites réelles indexées par ℕ (axiomes de Peano).",
        axiomes: [
            {
                nom: "A1 — Suite arithmétique",
                enonce: "uₙ₊₁ = uₙ + r (raison r constante) : uₙ = u₀ + nr."
            },
            {
                nom: "A2 — Suite géométrique",
                enonce: "uₙ₊₁ = q·uₙ (raison q constante) : uₙ = u₀qⁿ."
            },
            {
                nom: "A3 — Récurrence",
                enonce: "Une propriété vraie au rang 0 et héréditaire est vraie pour tout n."
            }
        ],
        conclusion: "Une suite est arithmétique si et seulement si uₙ₊₁ − uₙ est constant ; elle est géométrique si et seulement si uₙ₊₁/uₙ est constant. Les sommes valent Σ_{k=0}^{n−1} uₖ = n(u₀ + uₙ₋₁)/2 dans le cas arithmétique et u₀(1 − qⁿ)/(1 − q) dans le cas géométrique (q ≠ 1).",
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
        text: "1. Arithmétique : uₙ=u₀+nd.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Arithm%C3%A9tique+%3A+u%E2%82%99%3Du%E2%82%80%2Bnd.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Géométrique : uₙ=u₀·qⁿ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+G%C3%A9om%C3%A9trique+%3A+u%E2%82%99%3Du%E2%82%80%C2%B7q%E2%81%BF.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Variation selon d ou q.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Variation+selon+d+ou+q.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre d et q.",
    details: "Elles sont définies explicitement ou par récurrence. Cette notion s'appuie sur : suites en Seconde. Par exemple, uₙ=2+3n illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "uₙ=2+3n"
      },
      {
        terme: "Exemple 2",
        definition: "vₙ=5·2ⁿ"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Nombres réels ».",
      items: [
        { file: "100-0-droite-reelle.png", alt: "Nombres réels" },
        { file: "100-1-densite.png", alt: "Nombres réels" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Suites arithmétiques, géométriques : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/05UHsy9G4M4",
        lang: "fr"
      },
      methode: {
        title: "Reconnaitre une suite arithmétique et une suite géométrique",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pHq6oClOylU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Croissance"
      },
      {
        icon: "research",
        text: "Intérêts"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20u%E2%82%85%20pour%20u%E2%82%99%3D1%2B4n.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner u₅ pour uₙ=1+4n.</a>",
      "<a href=\"https://www.google.com/search?q=Donner%20v%E2%82%84%20pour%20v%E2%82%99%3D3%C2%B71.2%E2%81%BF.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner v₄ pour vₙ=3·1.2ⁿ.</a>"
    ]
  },
  "ecole:1192": {
    title: "Vecteurs dans le plan",
    definition: "Les vecteurs permettent de décrire des déplacements dans le plan. Ils sont définis par leurs coordonnées.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan affine : des points, et des vecteurs qui décrivent les translations.",
        axiomes: [
            {
                nom: "V1 — Chasles",
                enonce: "AB + BC = AC pour tous points A, B, C."
            },
            {
                nom: "V2 — Report",
                enonce: "Pour tout point A et tout vecteur u, il existe un unique point B tel que AB = u."
            },
            {
                nom: "V3 — Multiplication par un réel",
                enonce: "λ(u + v) = λu + λv, (λ + μ)u = λu + μu, (λμ)u = λ(μu), 1u = u."
            }
        ],
        conclusion: "Deux vecteurs non colinéaires forment une base : tout vecteur s'écrit de façon unique xu + yv. Dans un repère orthonormé, u(x ; y) a pour norme √(x² + y²) et le produit scalaire de u(x ; y) et v(x' ; y') est xx' + yy'."
    },
    formulas: [
      {
        text: "1. AB⃗=(xB−xA ; yB−yA).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+AB%E2%83%97%3D%28xB%E2%88%92xA+%3B+yB%E2%88%92yA%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Somme de vecteurs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Somme+de+vecteurs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Colinéarité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Colin%C3%A9arit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : inverser A et B.",
    details: "Ils sont définis par leurs coordonnées. Cette notion s'appuie sur : vecteurs en Seconde. Par exemple, A(1,2), B(4,6) → AB⃗=(3,4) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(1,2), B(4,6) → AB⃗=(3,4)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Vecteurs ».",
      items: [
        { file: "201-0-vecteur-AB.png", alt: "Vecteurs" },
        { file: "201-1-norme.png", alt: "Vecteurs" },
        { file: "201-2-produit.png", alt: "Vecteurs" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les vecteurs : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/aSSDBNn_rRI",
        lang: "fr"
      },
      methode: {
        title: "Construire un point à partir de vecteurs",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/zcQPz4dfnn0",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Géométrie analytique"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20AB%E2%83%97%20pour%20A%282%2C1%29%20et%20B%285%2C7%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer AB⃗ pour A(2,1) et B(5,7).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20deux%20vecteurs%20sont%20colin%C3%A9aires.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si deux vecteurs sont colinéaires.</a>"
    ]
  },
  "ecole:1193": {
    title: "Droites dans le plan",
    definition: "Une droite peut être définie par une équation cartésienne ou par deux points. Elle est caractérisée par son coefficient directeur.",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère ; les points sont les couples (x ; y).",
        axiomes: [
            {
                nom: "D1 — Incidence",
                enonce: "Par deux points distincts passe une unique droite."
            },
            {
                nom: "D2 — Vecteur directeur",
                enonce: "La droite (AB) est l'ensemble des points M tels que AM est colinéaire à AB."
            },
            {
                nom: "D3 — Équation",
                enonce: "Une droite est l'ensemble des solutions d'une équation ax + by + c = 0 avec (a ; b) ≠ (0 ; 0)."
            }
        ],
        conclusion: "Le vecteur (−b ; a) dirige la droite d'équation ax + by + c = 0, et le vecteur (a ; b) lui est orthogonal (vecteur normal) dans un repère orthonormé. Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires, perpendiculaires si leurs vecteurs normaux sont orthogonaux."
    },
    formulas: [
      {
        text: "1. y=ax+b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+y%3Dax%2Bb.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Parallélisme : a₁=a₂.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Parall%C3%A9lisme+%3A+a%E2%82%81%3Da%E2%82%82.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Perpendicularité : a₁×a₂=−1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Perpendicularit%C3%A9+%3A+a%E2%82%81%C3%97a%E2%82%82%3D%E2%88%921.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre pente et ordonnée à l’origine.",
    details: "Elle est caractérisée par son coefficient directeur. Cette notion s'appuie sur : droites en Seconde. Par exemple, Droite passant par (0,1) et (2,5) : y=2x+1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Droite passant par (0,1) et (2,5) : y=2x+1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
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
        icon: "research",
        text: "Modélisation linéaire"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20l%E2%80%99%C3%A9quation%20de%20la%20droite%20passant%20par%20%281%2C2%29%20et%20%283%2C6%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer l’équation de la droite passant par (1,2) et (3,6).</a>",
      "<a href=\"https://www.google.com/search?q=Tracer%20la%20droite%20y%3D%E2%88%92x%2B4.\" target=\"_blank\" rel=\"noopener noreferrer\">Tracer la droite y=−x+4.</a>"
    ]
  },
  "ecole:1194": {
    title: "Vecteurs dans l'espace",
    definition: "Un vecteur de l’espace est défini par ses trois coordonnées et représente un déplacement dans ℝ³.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace affine : des points, et des vecteurs qui décrivent les translations de l'espace.",
        axiomes: [
            {
                nom: "V1 — Chasles",
                enonce: "AB + BC = AC pour tous points A, B, C."
            },
            {
                nom: "V2 — Report",
                enonce: "Pour tout point A et tout vecteur u, il existe un unique point B tel que AB = u."
            },
            {
                nom: "V3 — Espace vectoriel",
                enonce: "Les vecteurs sont munis d'une addition et d'une multiplication par un réel qui vérifient les axiomes d'espace vectoriel."
            }
        ],
        conclusion: "Trois vecteurs non coplanaires forment une base : tout vecteur s'écrit de façon unique xi + yj + zk. Dans un repère orthonormé, la norme de u(x ; y ; z) est √(x² + y² + z²) et le produit scalaire de u et u' est xx' + yy' + zz'."
    },
    formulas: [
      {
        text: "1. AB⃗ = (xB−xA ; yB−yA ; zB−zA).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+AB%E2%83%97+%3D+%28xB%E2%88%92xA+%3B+yB%E2%88%92yA+%3B+zB%E2%88%92zA%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Colinéarité : vecteurs proportionnels.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Colin%C3%A9arit%C3%A9+%3A+vecteurs+proportionnels.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Somme et différence de vecteurs.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Somme+et+diff%C3%A9rence+de+vecteurs.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier la troisième coordonnée.",
    details: "Un vecteur de l’espace est défini par ses trois coordonnées et représente un déplacement dans ℝ³. Cette notion s'appuie sur : vecteurs du plan. Par exemple, A(1,2,3), B(4,6,5) → AB⃗=(3,4,2) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "A(1,2,3), B(4,6,5) → AB⃗=(3,4,2)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Vecteurs ».",
      items: [
        { file: "201-0-vecteur-AB.png", alt: "Vecteurs" },
        { file: "201-1-norme.png", alt: "Vecteurs" },
        { file: "201-2-produit.png", alt: "Vecteurs" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Vecteurs, droites et plans de l'espace : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/EoT48VtnUJ4",
        lang: "fr"
      },
      methode: {
        title: "Représenter des combinaisons linéaires de vecteurs donnés",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Z83z54pkGqA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Mécanique"
      },
      {
        icon: "research",
        text: "Géométrie 3D"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20AB%E2%83%97%20pour%20A%282%2C1%2C0%29%20et%20B%285%2C7%2C3%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer AB⃗ pour A(2,1,0) et B(5,7,3).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20deux%20vecteurs%20de%20%E2%84%9D%C2%B3%20sont%20colin%C3%A9aires.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si deux vecteurs de ℝ³ sont colinéaires.</a>"
    ]
  },
  "ecole:1195": {
    title: "Droites dans l'espace",
    definition: "Une droite de l’espace peut être définie par un point et un vecteur directeur. Elle n’est plus représentable par une équation cartésienne unique.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace euclidien de dimension 3 : points, droites, plans, distance.",
        axiomes: [
            {
                nom: "D1 — Incidence",
                enonce: "Par deux points distincts de l'espace passe une unique droite."
            },
            {
                nom: "D2 — Vecteur directeur",
                enonce: "La droite (AB) est l'ensemble des points M tels que AM = t·AB avec t réel."
            },
            {
                nom: "D3 — Représentation paramétrique",
                enonce: "Dans un repère, la droite passant par A(x_A ; y_A ; z_A) et de vecteur directeur u(α ; β ; γ) est l'ensemble des points (x_A + tα ; y_A + tβ ; z_A + tγ), t ∈ ℝ."
            }
        ],
        conclusion: "Une droite de l'espace est décrite par un système paramétrique (et non par une seule équation). Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires ; sinon elles sont sécantes (un point commun) ou non coplanaires."
    },
    formulas: [
      {
        text: "1. Paramétrage : D : (x,y,z) = A + t·u⃗.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Param%C3%A9trage+%3A+D+%3A+%28x%2Cy%2Cz%29+%3D+A+%2B+t%C2%B7u%E2%83%97.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Parallélisme : vecteurs directeurs proportionnels.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Parall%C3%A9lisme+%3A+vecteurs+directeurs+proportionnels.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Intersection : résolution d’un système.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Intersection+%3A+r%C3%A9solution+d%E2%80%99un+syst%C3%A8me.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Plan : ax + by + cz + d = 0",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Droites%20dans%20l%27espace%20Plan%20%3A%20ax%20%2B%20by%20%2B%20cz%20%2B%20d%20%3D%200%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "5. Droite : A + t u",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Droites%20dans%20l%27espace%20Droite%20%3A%20A%20%2B%20t%20u%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre équation cartésienne et paramétrique.",
    details: "Elle n’est plus représentable par une équation cartésienne unique. Cette notion s'appuie sur : vecteurs dans l’espace. Par exemple, D : (x,y,z) = (1,2,0) + t(2,1,3) illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "D : (x,y,z) = (1,2,0) + t(2,1,3)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Géométrie dans l’espace ».",
      items: [
        { file: "217-0-plan3d.png", alt: "Géométrie dans l’espace" },
        { file: "217-1-droite3d.png", alt: "Géométrie dans l’espace" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Vecteurs, droites et plans de l'espace : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/EoT48VtnUJ4",
        lang: "fr"
      },
      methode: {
        title: "Utiliser la représentation paramétrique d'une droite",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/smCUbzJs9xo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation 3D"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Donner%20un%20param%C3%A9trage%20d%E2%80%99une%20droite%20passant%20par%20A%20et%20dirig%C3%A9e%20par%20u%E2%83%97.\" target=\"_blank\" rel=\"noopener noreferrer\">Donner un paramétrage d’une droite passant par A et dirigée par u⃗.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20deux%20droites%20sont%20parall%C3%A8les.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si deux droites sont parallèles.</a>"
    ]
  },
  "ecole:1196": {
    title: "Plans dans l'espace",
    definition: "Un plan de l’espace peut être défini par un point et deux vecteurs non colinéaires ou par une équation cartésienne.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace euclidien de dimension 3 : points, droites, plans, distance.",
        axiomes: [
            {
                nom: "P1 — Trois points",
                enonce: "Trois points non alignés déterminent un unique plan."
            },
            {
                nom: "P2 — Vecteur normal",
                enonce: "Un plan de vecteur normal n(a ; b ; c) passant par A est l'ensemble des points M tels que AM·n = 0."
            },
            {
                nom: "P3 — Équation",
                enonce: "Dans un repère orthonormé, un plan est l'ensemble des solutions d'une équation ax + by + cz + d = 0 avec (a ; b ; c) ≠ (0 ; 0 ; 0)."
            }
        ],
        conclusion: "Le vecteur (a ; b ; c) est normal au plan d'équation ax + by + cz + d = 0. Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires, perpendiculaires si leurs vecteurs normaux sont orthogonaux ; la distance d'un point M₀ à ce plan est |ax₀ + by₀ + cz₀ + d|/√(a² + b² + c²)."
    },
    formulas: [
      {
        text: "1. Paramétrage : P : A + s·u⃗ + t·v⃗.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Param%C3%A9trage+%3A+P+%3A+A+%2B+s%C2%B7u%E2%83%97+%2B+t%C2%B7v%E2%83%97.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Équation : ax + by + cz + d = 0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+%C3%89quation+%3A+ax+%2B+by+%2B+cz+%2B+d+%3D+0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Parallélisme et perpendicularité via vecteurs normaux.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Parall%C3%A9lisme+et+perpendicularit%C3%A9+via+vecteurs+normaux.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. Plan paramétrique : A + s u + t v",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Plans%20dans%20l%27espace%20Plan%20param%C3%A9trique%20%3A%20A%20%2B%20s%20u%20%2B%20t%20v%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre vecteur normal et vecteur directeur.",
    details: "Un plan de l’espace peut être défini par un point et deux vecteurs non colinéaires ou par une équation cartésienne. Cette notion s'appuie sur : vecteurs dans l’espace. Par exemple, Plan : 2x − y + 3z − 5 = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Plan : 2x − y + 3z − 5 = 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Géométrie dans l’espace ».",
      items: [
        { file: "217-0-plan3d.png", alt: "Géométrie dans l’espace" },
        { file: "217-1-droite3d.png", alt: "Géométrie dans l’espace" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Représentations paramétriques et éq. cartésiennes : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/naOM6YG6DJc",
        lang: "fr"
      },
      methode: {
        title: "Déterminer une équation cartésienne d'un plan",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/s4xqI6IPQBY",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation 3D"
      },
      {
        icon: "research",
        text: "Architecture"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20une%20%C3%A9quation%20cart%C3%A9sienne%20d%E2%80%99un%20plan%20donn%C3%A9%20par%20trois%20points.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver une équation cartésienne d’un plan donné par trois points.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20une%20droite%20est%20parall%C3%A8le%20%C3%A0%20un%20plan.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si une droite est parallèle à un plan.</a>"
    ]
  },
  "ecole:1197": {
    title: "Arbres de probabilités",
    definition: "Un arbre de probabilités représente graphiquement les différentes issues d’une expérience et leurs probabilités. Il facilite les calculs de probabilités composées.",
    definition_axiomatique: {
        cadre: "On représente une expérience à plusieurs étapes par un arbre : chaque nœud a des branches, pondérées par des probabilités.",
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
            },
            {
                nom: "P4 — Probabilité conditionnelle",
                enonce: "P(A ∩ B) = P(A) × P_A(B)."
            },
            {
                nom: "A1 — Règle du nœud",
                enonce: "Les probabilités des branches issues d'un même nœud sont les probabilités conditionnelles des issues de l'étape suivante ; leur somme vaut 1."
            }
        ],
        conclusion: "Règle du produit : la probabilité d'un chemin est le produit des probabilités de ses branches (P4 appliqué étape par étape). Règle de la somme : la probabilité d'un événement est la somme des probabilités des chemins qui y mènent (P3, ces chemins étant incompatibles) ; c'est la formule des probabilités totales.",
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
        text: "1. Probabilités sur les branches.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Probabilit%C3%A9s+sur+les+branches.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Probabilité d’un chemin = produit des probabilités.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Probabilit%C3%A9+d%E2%80%99un+chemin+%3D+produit+des+probabilit%C3%A9s.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Probabilité d’un événement = somme des chemins favorables.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Probabilit%C3%A9+d%E2%80%99un+%C3%A9v%C3%A9nement+%3D+somme+des+chemins+favorables.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier de multiplier les probabilités sur un chemin.",
    details: "Il facilite les calculs de probabilités composées. Cette notion s'appuie sur : probabilités de base. Par exemple, Arbre pour deux tirages successifs avec remise illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Arbre pour deux tirages successifs avec remise"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Expériences aléatoires ».",
      items: [
        { file: "300-0-univers.png", alt: "Expériences aléatoires" },
        { file: "300-1-evenement.png", alt: "Expériences aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Probabilités conditionnelles et indépendance : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/5oBnmZVrOXE",
        lang: "fr"
      },
      methode: {
        title: "Construire un arbre pondéré",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Pc5kJBkPDbo",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Probabilités conditionnelles"
      },
      {
        icon: "research",
        text: "Indépendance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construire%20un%20arbre%20pour%20deux%20tirages%20avec%20remise.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire un arbre pour deux tirages avec remise.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20probabilit%C3%A9%20d%E2%80%99un%20%C3%A9v%C3%A9nement%20%C3%A0%20partir%20d%E2%80%99un%20arbre.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la probabilité d’un événement à partir d’un arbre.</a>"
    ]
  },
  "ecole:1198": {
    title: "Régression linéaire",
    definition: "La régression linéaire permet de modéliser une relation entre deux variables par une droite d’ajustement.",
    definition_axiomatique: {
        cadre: "On dispose d'un nuage de n points (xᵢ ; yᵢ) et on cherche la droite y = ax + b qui s'en approche le mieux.",
        axiomes: [
            {
                nom: "R1 — Critère",
                enonce: "On choisit a et b qui minimisent la somme des carrés des écarts verticaux S(a, b) = Σ(yᵢ − axᵢ − b)²."
            },
            {
                nom: "R2 — Non dégénéré",
                enonce: "Les xᵢ ne sont pas tous égaux (variance de x non nulle)."
            }
        ],
        conclusion: "S est un trinôme du second degré en b puis en a : son minimum est unique. On trouve a = Cov(x, y)/V(x) et b = ȳ − a·x̄ : la droite de régression passe par le point moyen G(x̄ ; ȳ)."
    },
    formulas: [
      {
        text: "1. y=ax+b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+1.+y%3Dax%2Bb.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. a = cov(x,y)/var(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+2.+a+%3D+cov%28x%2Cy%29%2Fvar%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. b = moyenne(y) − a·moyenne(x).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+3.+b+%3D+moyenne%28y%29+%E2%88%92+a%C2%B7moyenne%28x%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre corrélation et causalité.",
    details: "La régression linéaire permet de modéliser une relation entre deux variables par une droite d’ajustement. Cette notion s'appuie sur : statistiques de base. Par exemple, Ajustement d’une série de points illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Ajustement d’une série de points"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Variables aléatoires ».",
      items: [
        { file: "302-0-mapping.png", alt: "Variables aléatoires" },
        { file: "302-1-loi.png", alt: "Variables aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Linear Regression, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/7ArmBVF2dCs",
        lang: "en"
      },
      methode: {
        title: "Utiliser un ajustement affine par la méthode des moindres carrés",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/vdEL0MOKAIg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Économie"
      },
      {
        icon: "research",
        text: "Sciences"
      },
      {
        icon: "research",
        text: "Prévisions"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20la%20droite%20d%E2%80%99ajustement%20d%E2%80%99une%20s%C3%A9rie%20de%20points.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver la droite d’ajustement d’une série de points.</a>",
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9ter%20le%20coefficient%20directeur.\" target=\"_blank\" rel=\"noopener noreferrer\">Interpréter le coefficient directeur.</a>"
    ]
  },
  "ecole:1199": {
    title: "Corrélation",
    definition: "La corrélation mesure l’intensité de la relation linéaire entre deux variables.",
    definition_axiomatique: {
        cadre: "On considère des séries (xᵢ) et (yᵢ) de moyennes x̄ et ȳ, d'écarts types σₓ et σᵧ non nuls.",
        axiomes: [
            {
                nom: "C1 — Covariance",
                enonce: "Cov(x, y) = (1/n)Σ(xᵢ − x̄)(yᵢ − ȳ) est bilinéaire, symétrique et positive : Cov(x, x) = V(x) ≥ 0."
            },
            {
                nom: "C2 — Cauchy-Schwarz",
                enonce: "|Cov(x, y)| ≤ σₓσᵧ, avec égalité si et seulement si les yᵢ sont une fonction affine des xᵢ."
            }
        ],
        conclusion: "Le coefficient de corrélation linéaire r = Cov(x, y)/(σₓσᵧ) vérifie −1 ≤ r ≤ 1 (C2). Il vaut ±1 exactement lorsque les points sont alignés, et il est inchangé par toute transformation affine croissante des données. Une valeur proche de 0 indique l'absence de relation affine (non de toute relation)."
    },
    formulas: [
      {
        text: "1. r ∈ [−1,1].",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+1.+r+%E2%88%88+%5B%E2%88%921%2C1%5D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. r>0 : corrélation positive.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+2.+r%3E0+%3A+corr%C3%A9lation+positive.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. r<0 : corrélation négative.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+3.+r%3C0+%3A+corr%C3%A9lation+n%C3%A9gative.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre corrélation et causalité.",
    details: "La corrélation mesure l’intensité de la relation linéaire entre deux variables. Cette notion s'appuie sur : covariance. Par exemple, Relation entre taille et poids illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Relation entre taille et poids"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Covariance et corrélation ».",
      items: [
        { file: "310-0-covariance.png", alt: "Covariance et corrélation" },
        { file: "310-1-correlation.png", alt: "Covariance et corrélation" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Pearson's Correlation, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/xZ_z8KWkhXE",
        lang: "en"
      },
      methode: {
        title: "Calculer un coefficient de corrélation",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/FxREenh3fgE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse de données"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20le%20coefficient%20de%20corr%C3%A9lation%20d%E2%80%99une%20s%C3%A9rie.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer le coefficient de corrélation d’une série.</a>",
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9ter%20un%20coefficient%20de%20corr%C3%A9lation%20donn%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Interpréter un coefficient de corrélation donné.</a>"
    ]
  },
  "ecole:1200": {
    title: "Variance et écart-type",
    definition: "La variance mesure la dispersion des valeurs autour de la moyenne. L’écart-type est la racine carrée de la variance.",
    definition_axiomatique: {
        cadre: "On considère une série de valeurs xᵢ, d'effectifs nᵢ, d'effectif total N et de moyenne x̄.",
        axiomes: [
            {
                nom: "V1 — Définition",
                enonce: "La variance est la moyenne des carrés des écarts à la moyenne : V = (1/N)Σ nᵢ(xᵢ − x̄)²."
            },
            {
                nom: "V2 — Minimisation",
                enonce: "V = min_a (1/N)Σ nᵢ(xᵢ − a)² : le minimum est atteint en a = x̄."
            },
            {
                nom: "V3 — Écart type",
                enonce: "σ = √V."
            }
        ],
        conclusion: "La variance mesure la dispersion autour de la moyenne ; elle est nulle si et seulement si toutes les valeurs sont égales, ne change pas par translation des valeurs et est multipliée par λ² quand on multiplie les valeurs par λ. Formule de König-Huygens : V = (moyenne des xᵢ²) − x̄².",
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
        text: "1. Var = moyenne des carrés des écarts à la moyenne.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+1.+Var+%3D+moyenne+des+carr%C3%A9s+des+%C3%A9carts+%C3%A0+la+moyenne.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. σ = √Var.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+2.+%CF%83+%3D+%E2%88%9AVar.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Sensible aux valeurs extrêmes.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Premi%C3%A8re+%28lyc%C3%A9e%29+statistiques+3.+Sensible+aux+valeurs+extr%C3%AAmes.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier de centrer les valeurs avant de les élever au carré.",
    details: "L’écart-type est la racine carrée de la variance. Cette notion s'appuie sur : moyenne, séries statistiques. Par exemple, Pour la série 10, 12, 14 : variance ≈ 2.67 illustre concrètement cette notion, telle qu'elle est abordée en classe de Premiere.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour la série 10, 12, 14 : variance ≈ 2.67"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Variance et écart-type ».",
      items: [
        { file: "305-0-variance.png", alt: "Variance et écart-type" },
        { file: "305-1-ecart-type.png", alt: "Variance et écart-type" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Statistiques (2nde) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dZ1arqz41Bg",
        lang: "fr"
      },
      methode: {
        title: "Calculer la variance et l'écart-type",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/CiFoBkipJQk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse de dispersion"
      },
      {
        icon: "research",
        text: "Fiabilité des données"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20variance%20d%E2%80%99une%20s%C3%A9rie%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la variance d’une série donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Comparer%20les%20%C3%A9carts-types%20de%20deux%20s%C3%A9ries.\" target=\"_blank\" rel=\"noopener noreferrer\">Comparer les écarts-types de deux séries.</a>"
    ]
  },
  "ecole:1201": {
    title: "Limites de fonctions",
    definition: "La limite d’une fonction décrit son comportement lorsque la variable s’approche d’une valeur donnée ou tend vers l’infini.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ muni de la valeur absolue ; f est définie au voisinage de a (a réel ou infini).",
        axiomes: [
            {
                nom: "A1 — Limite finie",
                enonce: "f a pour limite ℓ en a si ∀ε > 0, ∃δ > 0, 0 < |x − a| < δ ⟹ |f(x) − ℓ| < ε."
            },
            {
                nom: "A2 — Limite infinie",
                enonce: "f tend vers +∞ en a si ∀A, ∃δ > 0, 0 < |x − a| < δ ⟹ f(x) > A ; en +∞ : ∀A, ∃B, x > B ⟹ f(x) > A."
            },
            {
                nom: "A3 — Comparaison",
                enonce: "Si f ≤ g ≤ h près de a et si f et h tendent vers ℓ, alors g tend vers ℓ."
            }
        ],
        conclusion: "La limite est unique. Les limites de sommes, de produits et de quotients se calculent à partir de celles des termes (sauf formes indéterminées ∞ − ∞, 0 × ∞, ∞/∞, 0/0), et la limite d'une composée est la composée des limites. Le théorème des gendarmes (A3) donne les limites usuelles, comme sin x/x → 1 en 0."
    },
    formulas: [
      {
        text: "1. Limites finies ou infinies.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+Limites+finies+ou+infinies.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Limites à gauche et à droite.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+Limites+%C3%A0+gauche+et+%C3%A0+droite.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Opérations sur les limites.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Op%C3%A9rations+sur+les+limites.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre limite et valeur de la fonction.",
    details: "La limite d’une fonction décrit son comportement lorsque la variable s’approche d’une valeur donnée ou tend vers l’infini. Cette notion s'appuie sur : variations, dérivée. Par exemple, lim(x→+∞) 1/x = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "lim(x→+∞) 1/x = 0"
      },
      {
        terme: "Exemple 2",
        definition: "lim(x→0⁺) ln(x) = −∞"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Limites ».",
      items: [
        { file: "2-0-limite-point.png", alt: "Limites" },
        { file: "2-1-limite-infini.png", alt: "Limites" },
        { file: "2-2-limite-sinx.png", alt: "Limites" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Limites des fonctions : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YPwJyYDsmxM",
        lang: "fr"
      },
      methode: {
        title: "Calculer une limite avec une forme indéterminée (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/4NQbGdXThrk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Étude de fonctions"
      },
      {
        icon: "research",
        text: "Asymptotes"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20lim%28x%E2%86%92%2B%E2%88%9E%29%20%283x%E2%88%922%29/%28x%2B1%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer lim(x→+∞) (3x−2)/(x+1).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20lim%28x%E2%86%920%E2%81%BA%29%201/%E2%88%9Ax.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer lim(x→0⁺) 1/√x.</a>"
    ]
  },
  "ecole:1202": {
    title: "Fonction exponentielle et équations différentielles simples",
    definition: "La fonction exponentielle intervient dans la résolution d’équations différentielles du type y' = ay.",
    definition_axiomatique: {
        cadre: "On considère l'équation différentielle y' = ay, où a est un réel, d'inconnue une fonction y dérivable sur ℝ.",
        axiomes: [
            {
                nom: "E1 — Exponentielle",
                enonce: "exp est dérivable, exp' = exp, exp(0) = 1 et exp ne s'annule pas."
            },
            {
                nom: "E2 — Fonction constante",
                enonce: "Une fonction de dérivée nulle sur un intervalle est constante."
            }
        ],
        conclusion: "Les solutions de y' = ay sont les fonctions y(x) = C·e^{ax}, C réel. En effet, si y' = ay, (y(x)e^{−ax})' = (y' − ay)e^{−ax} = 0, donc y(x)e^{−ax} = C (E2). Avec y(0) = y₀, la solution est unique : y(x) = y₀e^{ax}. Pour a > 0 c'est la croissance exponentielle, pour a < 0 la décroissance (radioactivité).",
        sources: [
            {
                titre: "SchoolMouv — Fonction exponentielle : définition",
                url: "https://www.schoolmouv.fr/definitions/fonction-exponentielle-2/definition"
            },
            {
                titre: "Mathovore — Fonction exponentielle (relation fonctionnelle caractéristique)",
                url: "https://www.mathovore.fr/analyse/fonction-exponentielle.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Solution générale : y = Ce^{ax}.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+Solution+g%C3%A9n%C3%A9rale+%3A+y+%3D+Ce%5E%7Bax%7D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Croissance ou décroissance selon a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+Croissance+ou+d%C3%A9croissance+selon+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Unicité de la solution.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Unicit%C3%A9+de+la+solution.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier la constante C.",
    details: "La fonction exponentielle intervient dans la résolution d’équations différentielles du type y' = ay. Cette notion s'appuie sur : exponentielle, dérivée. Par exemple, y' = 3y → y = Ce^{3x} illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "y' = 3y → y = Ce^{3x}"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Équations différentielles ».",
      items: [
        { file: "6-0-y-ay.png", alt: "Équations différentielles" },
        { file: "6-1-y-ay-f.png", alt: "Équations différentielles" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Primitives et équations différentielles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qHF5kiDFkW8",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation différentielle du type y'=ay",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/YJNHTq85tJA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Biologie"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20y%27%20%3D%202y.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre y' = 2y.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20la%20solution%20de%20y%27%20%3D%20%E2%88%925y%20avec%20y%280%29%3D3.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver la solution de y' = −5y avec y(0)=3.</a>"
    ]
  },
  "ecole:1203": {
    title: "Fonctions convexes et concaves",
    definition: "Une fonction est convexe si son graphe est situé au-dessus de toutes ses tangentes. Elle est concave si son graphe est en dessous.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ ; f est définie sur un intervalle I.",
        axiomes: [
            {
                nom: "C1 — Cordes",
                enonce: "f est convexe sur I si, pour tous x, y ∈ I et tout t ∈ [0 ; 1], f(tx + (1 − t)y) ≤ t·f(x) + (1 − t)·f(y)."
            },
            {
                nom: "C2 — Tangentes",
                enonce: "Pour f dérivable, f est convexe si et seulement si sa courbe est au-dessus de chacune de ses tangentes."
            },
            {
                nom: "C3 — Concavité",
                enonce: "f est concave si −f est convexe."
            }
        ],
        conclusion: "Pour f dérivable, f est convexe si et seulement si f' est croissante ; pour f deux fois dérivable, si et seulement si f'' ≥ 0. Exemples : x², exp sont convexes ; ln et √ sont concaves."
    },
    formulas: [
      {
        text: "1. f''(x) > 0 → convexe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+f%27%27%28x%29+%3E+0+%E2%86%92+convexe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f''(x) < 0 → concave.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+f%27%27%28x%29+%3C+0+%E2%86%92+concave.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Convexité implique croissance du taux de variation.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Convexit%C3%A9+implique+croissance+du+taux+de+variation.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre convexité et croissance.",
    details: "Elle est concave si son graphe est en dessous. Cette notion s'appuie sur : dérivée seconde. Par exemple, La fonction f(x)=x² est convexe sur ℝ illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La fonction f(x)=x² est convexe sur ℝ"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Convexité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gge4xdn6cFA",
        lang: "fr"
      },
      methode: {
        title: "Etudier la convexité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/8H2aYKN8NGE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "finance",
        text: "Économie"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20convexit%C3%A9%20de%20f%28x%29%3Dx%C2%B3%E2%88%923x.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la convexité de f(x)=x³−3x.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20les%20intervalles%20de%20convexit%C3%A9%20d%E2%80%99une%20fonction%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer les intervalles de convexité d’une fonction donnée.</a>"
    ]
  },
  "ecole:1204": {
    title: "Dérivée seconde",
    definition: "La dérivée seconde mesure la variation de la dérivée. Elle permet d’étudier la convexité et les points d’inflexion.",
    definition_axiomatique: {
        cadre: "On travaille avec une fonction f dérivable dont la dérivée f' est elle-même dérivable.",
        axiomes: [
            {
                nom: "D1 — Définition",
                enonce: "La dérivée seconde de f est la dérivée de f' : f'' = (f')'."
            },
            {
                nom: "D2 — Signe de la dérivée",
                enonce: "f' est croissante si et seulement si f'' ≥ 0 (signe de la dérivée appliqué à f')."
            }
        ],
        conclusion: "f'' ≥ 0 sur I si et seulement si f' est croissante sur I, si et seulement si f est convexe (courbe au-dessus de ses tangentes) ; f'' ≤ 0 si et seulement si f est concave. Un point d'inflexion est un point où f'' s'annule en changeant de signe : la tangente y traverse la courbe."
    },
    formulas: [
      {
        text: "1. f''>0 → f convexe.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+f%27%27%3E0+%E2%86%92+f+convexe.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f''<0 → f concave.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+f%27%27%3C0+%E2%86%92+f+concave.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. f''=0 → point d’inflexion possible.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+f%27%27%3D0+%E2%86%92+point+d%E2%80%99inflexion+possible.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : croire que f''=0 suffit pour un point d’inflexion.",
    details: "Elle permet d’étudier la convexité et les points d’inflexion. Cette notion s'appuie sur : dérivée. Par exemple, Pour f(x)=x³, f''(x)=6x illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour f(x)=x³, f''(x)=6x"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Mesure et intégrale de Lebesgue ».",
      items: [
        { file: "18-0-convergence-dominee.png", alt: "Mesure et intégrale de Lebesgue" },
        { file: "18-1-fatou.png", alt: "Mesure et intégrale de Lebesgue" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Convexité : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/gge4xdn6cFA",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la dérivée seconde",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/W6rypabq8uA",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20f%27%27%20pour%20f%28x%29%3Dx%E2%81%B4%E2%88%922x%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer f'' pour f(x)=x⁴−2x².</a>",
      "<a href=\"https://www.google.com/search?q=Identifier%20les%20points%20d%E2%80%99inflexion%20d%E2%80%99une%20fonction.\" target=\"_blank\" rel=\"noopener noreferrer\">Identifier les points d’inflexion d’une fonction.</a>"
    ]
  },
  "ecole:1205": {
    title: "Intégrale définie",
    definition: "L’intégrale définie représente l’aire algébrique sous la courbe d’une fonction continue sur un intervalle.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions continues sur un intervalle de ℝ ; l'intégrale ∫ₐᵇ f associe à f et à [a ; b] un réel.",
        axiomes: [
            {
                nom: "I1 — Linéarité",
                enonce: "∫ₐᵇ (αf + βg) = α∫ₐᵇ f + β∫ₐᵇ g."
            },
            {
                nom: "I2 — Positivité",
                enonce: "Si f ≥ 0 sur [a ; b], alors ∫ₐᵇ f ≥ 0."
            },
            {
                nom: "I3 — Chasles",
                enonce: "Pour a ≤ c ≤ b, l'intégrale de f sur [a ; b] est la somme de son intégrale sur [a ; c] et de son intégrale sur [c ; b]."
            },
            {
                nom: "I4 — Normalisation",
                enonce: "∫ₐᵇ 1 dx = b − a."
            }
        ],
        conclusion: "L'intégrale ∫ₐᵇ f est l'aire algébrique entre la courbe et l'axe des abscisses : comptée positivement là où f ≥ 0, négativement là où f ≤ 0. La fonction F(x) = ∫ₐˣ f est dérivable de dérivée f : F(x + h) − F(x) = ∫ₓˣ⁺ʰ f est comprise entre h·min f et h·max f sur [x ; x + h] (I2, I4). Donc ∫ₐᵇ f = G(b) − G(a) pour toute primitive G de f."
    },
    formulas: [
      {
        text: "1. ∫ₐᵇ f(x)dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Linéarité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+Lin%C3%A9arit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Relation avec dérivée : théorème fondamental.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Relation+avec+d%C3%A9riv%C3%A9e+%3A+th%C3%A9or%C3%A8me+fondamental.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier la constante dans la primitive.",
    details: "L’intégrale définie représente l’aire algébrique sous la courbe d’une fonction continue sur un intervalle. Cette notion s'appuie sur : primitives, dérivée. Par exemple, ∫₀¹ x² dx = 1/3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "∫₀¹ x² dx = 1/3"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Intégrale de Riemann ».",
      items: [
        { file: "13-0-integrale.png", alt: "Intégrale de Riemann" },
        { file: "13-1-ipp.png", alt: "Intégrale de Riemann" },
        { file: "13-2-changement-variable.png", alt: "Intégrale de Riemann" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Calcul intégral : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pFKzXZrMVxs",
        lang: "fr"
      },
      methode: {
        title: "Calculer une intégrale (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/Z3vKJJE57Uw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Économie"
      },
      {
        icon: "research",
        text: "Probabilités"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20%E2%88%AB%E2%82%80%C2%B2%20%283x%E2%88%921%29%20dx.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer ∫₀² (3x−1) dx.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99aire%20sous%20la%20courbe%20d%E2%80%99une%20fonction%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’aire sous la courbe d’une fonction donnée.</a>"
    ]
  },
  "ecole:1206": {
    title: "Primitives",
    definition: "Une primitive de f est une fonction F telle que F' = f. Les primitives permettent de calculer des intégrales.",
    definition_axiomatique: {
        cadre: "On considère une fonction f continue sur un intervalle I.",
        axiomes: [
            {
                nom: "P1 — Primitive",
                enonce: "F est une primitive de f sur I si F est dérivable et F' = f."
            },
            {
                nom: "P2 — Constante",
                enonce: "Deux primitives de f diffèrent d'une constante."
            },
            {
                nom: "P3 — Théorème fondamental",
                enonce: "x ↦ ∫ₐˣ f est la primitive de f qui s'annule en a."
            }
        ],
        conclusion: "f continue admet des primitives (P3), toutes de la forme F + C (P2). Une condition F(x₀) = y₀ fixe C. On calcule ∫ₐᵇ f = F(b) − F(a) pour une primitive F quelconque."
    },
    formulas: [
      {
        text: "1. F' = f.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+F%27+%3D+f.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Toute primitive s’écrit F+C.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+Toute+primitive+s%E2%80%99%C3%A9crit+F%2BC.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Liée à l’intégrale définie.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Li%C3%A9e+%C3%A0+l%E2%80%99int%C3%A9grale+d%C3%A9finie.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier la constante C.",
    details: "Les primitives permettent de calculer des intégrales. Cette notion s'appuie sur : dérivée. Par exemple, Primitive de 2x est x² + C illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Primitive de 2x est x² + C"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Transformées intégrales ».",
      items: [
        { file: "16-1-fourier.png", alt: "Transformées intégrales" },
        { file: "16-2-convolution.png", alt: "Transformées intégrales" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Primitives : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/bQ-eS1zZCdw",
        lang: "fr"
      },
      methode: {
        title: "Calculer une primitive (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/GA6jMgLd_Cw",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Intégration"
      },
      {
        icon: "research",
        text: "Physique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Trouver%20une%20primitive%20de%20f%28x%29%3D3x%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver une primitive de f(x)=3x².</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20une%20int%C3%A9grale%20via%20une%20primitive.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer une intégrale via une primitive.</a>"
    ]
  },
  "ecole:1207": {
    title: "Fonctions à variations complexes",
    definition: "Certaines fonctions présentent des variations multiples, avec plusieurs extremums, points d’inflexion ou changements de convexité. Leur étude nécessite une analyse fine de la dérivée et de la dérivée seconde.",
    definition_axiomatique: {
        cadre: "On travaille avec des fonctions définies sur un intervalle de ℝ ; la dérivée de f en a est la limite, si elle existe, de (f(a + h) − f(a))/h quand h tend vers 0.",
        axiomes: [
            {
                nom: "A1 — Accroissements finis",
                enonce: "f' ≥ 0 sur un intervalle si et seulement si f y est croissante."
            },
            {
                nom: "A2 — Fermat",
                enonce: "Un extremum local intérieur est un zéro de f'."
            },
            {
                nom: "A3 — Valeurs intermédiaires et bijection",
                enonce: "Sur un intervalle où f est continue et strictement monotone, f est une bijection sur son image."
            }
        ],
        conclusion: "Pour une fonction à variations multiples, on découpe le domaine en intervalles où le signe de f' est constant (en factorisant f'), on dresse le tableau de variations, on repère les extremums locaux (A2) et, avec f'', les points d'inflexion. Le nombre de solutions de f(x) = k se lit intervalle par intervalle (A3)."
    },
    formulas: [
      {
        text: "1. f' permet d’identifier les extremums.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+f%27+permet+d%E2%80%99identifier+les+extremums.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. f'' permet d’identifier convexité et inflexions.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+f%27%27+permet+d%E2%80%99identifier+convexit%C3%A9+et+inflexions.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Les variations peuvent être non monotones.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+Les+variations+peuvent+%C3%AAtre+non+monotones.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre point critique et extremum.",
    details: "Leur étude nécessite une analyse fine de la dérivée et de la dérivée seconde. Cette notion s'appuie sur : dérivée, dérivée seconde. Par exemple, f(x)=x³−3x possède deux extremums et un point d’inflexion illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=x³−3x possède deux extremums et un point d’inflexion"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Théorèmes fondamentaux de l'analyse ».",
      items: [
        { file: "12-1-taf.png", alt: "Théorèmes fondamentaux de l'analyse" },
        { file: "12-2-tvi.png", alt: "Théorèmes fondamentaux de l'analyse" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Dérivation (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/XAgdHblbajE",
        lang: "fr"
      },
      methode: {
        title: "Etudier une fonction composée 4/6 : Variations",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/95eLAWaSwwc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Optimisation avancée"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20les%20variations%20de%20f%28x%29%3Dx%C2%B3%E2%88%926x.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier les variations de f(x)=x³−6x.</a>",
      "<a href=\"https://www.google.com/search?q=Identifier%20les%20extremums%20et%20points%20d%E2%80%99inflexion%20d%E2%80%99une%20fonction%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Identifier les extremums et points d’inflexion d’une fonction donnée.</a>"
    ]
  },
  "ecole:1208": {
    title: "Fonctions trigonométriques avancées",
    definition: "Les fonctions trigonométriques peuvent être combinées, dérivées ou intégrées pour modéliser des phénomènes périodiques complexes.",
    definition_axiomatique: {
        cadre: "On travaille avec cos et sin : l'unique couple de fonctions dérivables vérifiant cos' = −sin, sin' = cos, cos(0) = 1, sin(0) = 0.",
        axiomes: [
            {
                nom: "T1 — Dérivées",
                enonce: "cos' = −sin et sin' = cos."
            },
            {
                nom: "T2 — Valeurs en 0",
                enonce: "cos(0) = 1 et sin(0) = 0."
            },
            {
                nom: "T3 — Addition",
                enonce: "cos(a + b) = cos a cos b − sin a sin b, sin(a + b) = sin a cos b + cos a sin b."
            }
        ],
        conclusion: "Par dérivée d'une composée, (cos(ax + b))' = −a sin(ax + b) et (sin(ax + b))' = a cos(ax + b) ; cos(ax + b) et sin(ax + b) sont périodiques de période 2π/|a|. Les primitives s'en déduisent. Équations : cos x = cos α ⟺ x ≡ ±α [2π] ; sin x = sin α ⟺ x ≡ α ou π − α [2π]."
    },
    formulas: [
      {
        text: "1. Dérivées : (sin x)'=cos x, (cos x)'=−sin x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+1.+D%C3%A9riv%C3%A9es+%3A+%28sin+x%29%27%3Dcos+x%2C+%28cos+x%29%27%3D%E2%88%92sin+x.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Identités : sin(a±b), cos(a±b).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+2.+Identit%C3%A9s+%3A+sin%28a%C2%B1b%29%2C+cos%28a%C2%B1b%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Périodicité : 2π.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+analyse+3.+P%C3%A9riodicit%C3%A9+%3A+2%CF%80.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre radian et degré.",
    details: "Les fonctions trigonométriques peuvent être combinées, dérivées ou intégrées pour modéliser des phénomènes périodiques complexes. Cette notion s'appuie sur : trigonométrie en Première. Par exemple, f(x)=2sin(x)+3cos(2x) illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=2sin(x)+3cos(2x)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Fonctions ».",
      items: [
        { file: "1-1-accroissement.png", alt: "Fonctions" },
        { file: "1-2-composition.png", alt: "Fonctions" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Trigonométrie (1ère) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/wJjb3CSS3cg",
        lang: "fr"
      },
      methode: {
        title: "Etudier une fonction trigonométrique 1/4 : Parité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/uOXv5XnAiNk",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Ondes"
      },
      {
        icon: "research",
        text: "Signaux"
      },
      {
        icon: "research",
        text: "Acoustique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9river%20f%28x%29%3Dsin%28x%29%2B2cos%283x%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Dériver f(x)=sin(x)+2cos(3x).</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20p%C3%A9riode%20d%E2%80%99une%20fonction%20trigonom%C3%A9trique%20compos%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la période d’une fonction trigonométrique composée.</a>"
    ]
  },
  "ecole:1209": {
    title: "Fonction logarithme et équations",
    definition: "Le logarithme permet de résoudre des équations de la forme a^x = b ou des équations différentielles simples.",
    definition_axiomatique: {
        cadre: "On travaille sur ]0 ; +∞[ avec le logarithme népérien : unique fonction dérivable telle que ln'(x) = 1/x et ln(1) = 0.",
        axiomes: [
            {
                nom: "L1 — Stricte croissance",
                enonce: "ln' = 1/x > 0 : ln est strictement croissante ; c'est une bijection de ]0 ; +∞[ sur ℝ."
            },
            {
                nom: "L2 — Produit",
                enonce: "ln(ab) = ln a + ln b."
            },
            {
                nom: "L3 — Réciproque",
                enonce: "ln est la réciproque de exp : ln(eˣ) = x et e^{ln x} = x."
            }
        ],
        conclusion: "Comme ln est strictement croissante et bijective : ln a = ln b ⟺ a = b et ln a < ln b ⟺ a < b (pour a, b > 0). Donc eˣ = b ⟺ x = ln b (b > 0) et, pour a > 0, a ≠ 1, aˣ = b ⟺ x·ln a = ln b ⟺ x = ln b/ln a. Les inéquations se résolvent en gardant le sens si l'on compose par ln ou exp."
    },
    formulas: [
      {
        text: "1. ln(ab)=ln a + ln b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+ln%28ab%29%3Dln+a+%2B+ln+b.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ln(a^k)=k ln a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+ln%28a%5Ek%29%3Dk+ln+a.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. ln(e^x)=x.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+ln%28e%5Ex%29%3Dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre ln(x) et log₁₀(x).",
    details: "Le logarithme permet de résoudre des équations de la forme a^x = b ou des équations différentielles simples. Cette notion s'appuie sur : exponentielle. Par exemple, Résoudre 3^x = 20 → x = ln(20)/ln(3) illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Résoudre 3^x = 20 → x = ln(20)/ln(3)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Équations différentielles ».",
      items: [
        { file: "6-0-y-ay.png", alt: "Équations différentielles" },
        { file: "6-1-y-ay-f.png", alt: "Équations différentielles" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Fonction logarithme népérien : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/VJns0RfVWGg",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation contenant des logarithmes (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/lCT-8ijhZiE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Acoustique"
      },
      {
        icon: "finance",
        text: "Finance"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20e%5E%7B2x%7D%3D7.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre e^{2x}=7.</a>",
      "<a href=\"https://www.google.com/search?q=Simplifier%20ln%285e%C2%B3%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Simplifier ln(5e³).</a>"
    ]
  },
  "ecole:1210": {
    title: "Suites et limites",
    definition: "Une suite peut tendre vers une limite finie ou infinie. L’étude des limites permet de comprendre son comportement asymptotique.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ muni de la valeur absolue ; (uₙ) est une suite réelle.",
        axiomes: [
            {
                nom: "A1 — Limite finie",
                enonce: "uₙ → ℓ si ∀ε > 0, ∃N, ∀n ≥ N, |uₙ − ℓ| < ε."
            },
            {
                nom: "A2 — Limite infinie",
                enonce: "uₙ → +∞ si ∀A, ∃N, ∀n ≥ N, uₙ > A."
            },
            {
                nom: "A3 — Gendarmes",
                enonce: "Si uₙ ≤ vₙ ≤ wₙ et uₙ, wₙ → ℓ, alors vₙ → ℓ."
            }
        ],
        conclusion: "La limite, si elle existe, est unique ; une suite convergente est bornée. La limite d'une somme, d'un produit, d'un quotient (limite du dénominateur non nulle) est la somme, le produit, le quotient des limites. Le théorème des gendarmes (A3) et la comparaison (uₙ ≥ vₙ et vₙ → +∞ ⟹ uₙ → +∞) complètent ces règles."
    },
    formulas: [
      {
        text: "1. Suite convergente.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Suite+convergente.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Suite divergente.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+Suite+divergente.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Théorème de comparaison.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Th%C3%A9or%C3%A8me+de+comparaison.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre limite et terme de la suite.",
    details: "L’étude des limites permet de comprendre son comportement asymptotique. Cette notion s'appuie sur : suites en Première. Par exemple, uₙ = 1/n → limite = 0 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "uₙ = 1/n → limite = 0"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Limites ».",
      items: [
        { file: "2-0-limite-point.png", alt: "Limites" },
        { file: "2-1-limite-infini.png", alt: "Limites" },
        { file: "2-2-limite-sinx.png", alt: "Limites" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Calculer une limite à l'aide des formules d'opération",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/v7hD6s3thp8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20limite%20de%20u%E2%82%99%20%3D%20%283n%2B1%29/%28n%E2%88%922%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la limite de uₙ = (3n+1)/(n−2).</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20une%20suite%20est%20convergente.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si une suite est convergente.</a>"
    ]
  },
  "ecole:1211": {
    title: "Suites monotones et convergence",
    definition: "Une suite monotone est croissante ou décroissante. Une suite monotone bornée converge.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné complet : toute partie non vide majorée a une borne supérieure.",
        axiomes: [
            {
                nom: "A1 — Borne supérieure",
                enonce: "Toute partie non vide et majorée de ℝ possède une borne supérieure."
            },
            {
                nom: "A2 — Monotonie",
                enonce: "(uₙ) est croissante si uₙ ≤ uₙ₊₁ pour tout n, décroissante si uₙ ≥ uₙ₊₁."
            },
            {
                nom: "A3 — Limite",
                enonce: "uₙ → ℓ si ∀ε > 0, ∃N, ∀n ≥ N, |uₙ − ℓ| < ε."
            }
        ],
        conclusion: "Toute suite croissante et majorée converge vers sa borne supérieure ; toute suite décroissante et minorée converge vers sa borne inférieure ; une suite croissante non majorée tend vers +∞. Deux suites adjacentes (l'une croissante, l'autre décroissante, de différence tendant vers 0) convergent vers la même limite.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. Croissante : uₙ₊₁ ≥ uₙ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Croissante+%3A+u%E2%82%99%E2%82%8A%E2%82%81+%E2%89%A5+u%E2%82%99.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Décroissante : uₙ₊₁ ≤ uₙ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+D%C3%A9croissante+%3A+u%E2%82%99%E2%82%8A%E2%82%81+%E2%89%A4+u%E2%82%99.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Théorème de convergence.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Th%C3%A9or%C3%A8me+de+convergence.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre monotone et convergente.",
    details: "Une suite monotone bornée converge. Cette notion s'appuie sur : suites en Première. Par exemple, uₙ = 1 − 1/n est croissante et converge vers 1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "uₙ = 1 − 1/n est croissante et converge vers 1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Suites et séries numériques ».",
      items: [
        { file: "11-0-cauchy.png", alt: "Suites et séries numériques" },
        { file: "11-1-riemann.png", alt: "Suites et séries numériques" },
        { file: "11-2-dalembert.png", alt: "Suites et séries numériques" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Les suites (Terminale) : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/MJv7_pkFcdA",
        lang: "fr"
      },
      methode: {
        title: "Démontrer qu'une suite est majorée ou minorée",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/F1u_BVwiW8E",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Analyse"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20la%20monotonie%20de%20u%E2%82%99%20%3D%20%28n%2B1%29/n.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier la monotonie de uₙ = (n+1)/n.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20la%20limite%20d%E2%80%99une%20suite%20monotone%20born%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer la limite d’une suite monotone bornée.</a>"
    ]
  },
  "ecole:1212": {
    title: "Équations différentielles linéaires",
    definition: "Une équation différentielle linéaire relie une fonction à sa dérivée. Les solutions sont souvent des exponentielles.",
    definition_axiomatique: {
        cadre: "On considère l'équation différentielle y' = ay + b (a ≠ 0), d'inconnue y dérivable sur ℝ.",
        axiomes: [
            {
                nom: "L1 — Linéarité",
                enonce: "Si y₁ et y₂ sont solutions de y' = ay, toute combinaison λy₁ + μy₂ l'est aussi."
            },
            {
                nom: "L2 — Solution particulière",
                enonce: "y est solution de y' = ay + b si et seulement si y − y_p est solution de y' = ay, où y_p est une solution particulière."
            },
            {
                nom: "L3 — Condition initiale",
                enonce: "Il existe une unique solution vérifiant y(x₀) = y₀."
            }
        ],
        conclusion: "La fonction constante y_p = −b/a est solution particulière. Les solutions de y' = ay + b sont donc y(x) = Ce^{ax} − b/a, C réel ; avec y(0) = y₀ on a C = y₀ + b/a. Pour a < 0, y tend vers −b/a quand x → +∞ (régime permanent)."
    },
    formulas: [
      {
        text: "1. y' = ay + b.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+y%27+%3D+ay+%2B+b.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Solution générale : y = Ce^{ax} − b/a.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+Solution+g%C3%A9n%C3%A9rale+%3A+y+%3D+Ce%5E%7Bax%7D+%E2%88%92+b%2Fa.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Unicité.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Unicit%C3%A9.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier la constante d’intégration.",
    details: "Les solutions sont souvent des exponentielles. Cette notion s'appuie sur : exponentielle, dérivée. Par exemple, y' = 2y + 3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "y' = 2y + 3"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Équations différentielles linéaires ».",
      items: [
        { file: "15-0-edl1.png", alt: "Équations différentielles linéaires" },
        { file: "15-1-caracteristique.png", alt: "Équations différentielles linéaires" },
        { file: "15-2-systeme.png", alt: "Équations différentielles linéaires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Primitives et équations différentielles : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/qHF5kiDFkW8",
        lang: "fr"
      },
      methode: {
        title: "Résoudre une équation différentielle du type y'=ay+b (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/F_LQLZ8rUhg",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Biologie"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=R%C3%A9soudre%20y%27%20%3D%204y%20%E2%88%92%202.\" target=\"_blank\" rel=\"noopener noreferrer\">Résoudre y' = 4y − 2.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20la%20solution%20particuli%C3%A8re%20d%E2%80%99une%20%C3%A9quation%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver la solution particulière d’une équation donnée.</a>"
    ]
  },
  "ecole:1213": {
    title: "Polynômes de degré supérieur",
    definition: "Les polynômes de degré supérieur à 2 peuvent présenter plusieurs racines, extremums et variations complexes. Leur étude repose sur la dérivée et la factorisation.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +. Un polynôme est une fonction x ↦ aₙxⁿ + … + a₁x + a₀ (aₙ ≠ 0) ; n est son degré.",
        axiomes: [
            {
                nom: "P1 — Degré",
                enonce: "deg(PQ) = deg P + deg Q pour P et Q non nuls."
            },
            {
                nom: "P2 — Division euclidienne",
                enonce: "Pour B non nul, tout A s'écrit A = BQ + R avec deg R < deg B (R = 0 ou deg R < deg B), de façon unique."
            },
            {
                nom: "P3 — Identification",
                enonce: "Deux polynômes égaux en tout réel ont les mêmes coefficients."
            }
        ],
        conclusion: "Par P2, avec B = X − a : P(a) = 0 si et seulement si (X − a) divise P. Donc un polynôme de degré n a au plus n racines réelles, et s'écrit P = (X − x₁)…(X − x_k)·Q avec Q sans racine réelle. Sur ℂ, il se factorise en facteurs de degré 1 (d'Alembert-Gauss) ; sur ℝ, en facteurs de degré 1 ou 2."
    },
    formulas: [
      {
        text: "1. Nombre maximal de racines : degré du polynôme.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+1.+Nombre+maximal+de+racines+%3A+degr%C3%A9+du+polyn%C3%B4me.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Dérivée : permet d’identifier extremums.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+2.+D%C3%A9riv%C3%A9e+%3A+permet+d%E2%80%99identifier+extremums.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Factorisation parfois impossible sur ℝ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+alg%C3%A8bre+3.+Factorisation+parfois+impossible+sur+%E2%84%9D.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : chercher une factorisation impossible sur ℝ.",
    details: "Leur étude repose sur la dérivée et la factorisation. Cette notion s'appuie sur : polynômes en Première. Par exemple, f(x)=x⁴−4x²+1 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=x⁴−4x²+1"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Polynômes ».",
      items: [
        { file: "102-2-racines.png", alt: "Polynômes" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Résoudre une équation de degré 3 (racine connue)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/KqghKmQ9gOk",
        lang: "fr"
      },
      methode: {
        title: "Factoriser un polynôme dont une racine est connue",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/1Y-JtI6nNXU",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation"
      },
      {
        icon: "research",
        text: "Optimisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=%C3%89tudier%20les%20variations%20de%20f%28x%29%3Dx%E2%81%B4%E2%88%922x%C2%B2.\" target=\"_blank\" rel=\"noopener noreferrer\">Étudier les variations de f(x)=x⁴−2x².</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20les%20racines%20d%E2%80%99un%20polyn%C3%B4me%20de%20degr%C3%A9%203.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver les racines d’un polynôme de degré 3.</a>"
    ]
  },
  "ecole:1214": {
    title: "Produit vectoriel",
    definition: "Le produit vectoriel de deux vecteurs de ℝ³ est un vecteur orthogonal aux deux vecteurs, dont la norme représente l’aire du parallélogramme formé.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace de dimension 3 muni d'une base orthonormée directe (i, j, k) et du produit scalaire.",
        axiomes: [
            {
                nom: "X1 — Bilinéarité",
                enonce: "u × v est bilinéaire : (λu + μu') × v = λ u × v + μ u' × v, et de même en v."
            },
            {
                nom: "X2 — Alternance",
                enonce: "u × u = 0 pour tout vecteur u (donc v × u = −u × v)."
            },
            {
                nom: "X3 — Base directe",
                enonce: "i × j = k, j × k = i, k × i = j."
            }
        ],
        conclusion: "Ces axiomes déterminent le produit vectoriel : pour u(x, y, z) et v(x', y', z'), u × v = (yz' − zy' ; zx' − xz' ; xy' − yx'). Le vecteur u × v est orthogonal à u et à v, sa norme est ‖u‖‖v‖sin θ (l'aire du parallélogramme construit sur u et v), et u × v = 0 si et seulement si u et v sont colinéaires."
    },
    formulas: [
      {
        text: "1. u×v ⟂ u et v.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+u%C3%97v+%E2%9F%82+u+et+v.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. ||u×v|| = ||u||·||v||·sinθ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+%7C%7Cu%C3%97v%7C%7C+%3D+%7C%7Cu%7C%7C%C2%B7%7C%7Cv%7C%7C%C2%B7sin%CE%B8.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Déterminant matriciel.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+D%C3%A9terminant+matriciel.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre produit scalaire et vectoriel.",
    details: "Le produit vectoriel de deux vecteurs de ℝ³ est un vecteur orthogonal aux deux vecteurs, dont la norme représente l’aire du parallélogramme formé. Cette notion s'appuie sur : vecteurs dans l’espace. Par exemple, u=(1,0,0), v=(0,1,0) → u×v=(0,0,1) illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "u=(1,0,0), v=(0,1,0) → u×v=(0,0,1)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Vecteurs ».",
      items: [
        { file: "201-0-vecteur-AB.png", alt: "Vecteurs" },
        { file: "201-1-norme.png", alt: "Vecteurs" },
        { file: "201-2-produit.png", alt: "Vecteurs" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Produit scalaire : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/dII7myZuLvo",
        lang: "fr"
      },
      methode: {
        title: "Appliquer le théorème d'Al Kashi (1)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/SeFjmbOGhVc",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Mécanique"
      },
      {
        icon: "research",
        text: "Géométrie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20u%C3%97v%20pour%20deux%20vecteurs%20donn%C3%A9s.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer u×v pour deux vecteurs donnés.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20l%E2%80%99aire%20d%E2%80%99un%20parall%C3%A9logramme%20via%20u%C3%97v.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer l’aire d’un parallélogramme via u×v.</a>"
    ]
  },
  "ecole:1215": {
    title: "Droites et plans dans l'espace : positions relatives",
    definition: "Les droites et plans de l’espace peuvent être parallèles, sécants ou orthogonaux. Leur position se détermine via les vecteurs directeurs et normaux.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace euclidien de dimension 3 : points, droites, plans, distance.",
        axiomes: [
            {
                nom: "I1 — Deux plans",
                enonce: "Deux plans distincts sont disjoints (parallèles) ou se coupent selon une droite."
            },
            {
                nom: "I2 — Droite et plan",
                enonce: "Une droite est incluse dans un plan, ou parallèle à ce plan, ou le coupe en un seul point."
            },
            {
                nom: "I3 — Vecteurs",
                enonce: "Une droite de vecteur directeur u et un plan de vecteur normal n sont parallèles ou la droite est incluse dans le plan si et seulement si u·n = 0."
            }
        ],
        conclusion: "Dans un repère orthonormé, deux plans de vecteurs normaux n et n' sont parallèles (ou confondus) si n et n' sont colinéaires, perpendiculaires si n·n' = 0. Une droite de vecteur directeur u est orthogonale à un plan si u est colinéaire à n. Deux droites de l'espace sont parallèles, sécantes, ou non coplanaires."
    },
    formulas: [
      {
        text: "1. Parallélisme : vecteurs directeurs proportionnels.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Parall%C3%A9lisme+%3A+vecteurs+directeurs+proportionnels.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Orthogonalité : produit scalaire nul.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Orthogonalit%C3%A9+%3A+produit+scalaire+nul.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Intersection : résolution d’un système.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Intersection+%3A+r%C3%A9solution+d%E2%80%99un+syst%C3%A8me.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre vecteur directeur et normal.",
    details: "Leur position se détermine via les vecteurs directeurs et normaux. Cette notion s'appuie sur : vecteurs, plans. Par exemple, Droite parallèle à un plan si son vecteur directeur est orthogonal au vecteur normal du plan illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Droite parallèle à un plan si son vecteur directeur est orthogonal au vecteur normal du plan"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Points, droites et plans ».",
      items: [
        { file: "200-0-droite.png", alt: "Points, droites et plans" },
        { file: "200-1-plan.png", alt: "Points, droites et plans" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Orthogonalité dans l'espace : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pMQBaCqLPsQ",
        lang: "fr"
      },
      methode: {
        title: "Déterminer l'intersection d'une droite et d'un plan",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/BYBMauyizhE",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modélisation 3D"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9terminer%20si%20une%20droite%20est%20parall%C3%A8le%20%C3%A0%20un%20plan.\" target=\"_blank\" rel=\"noopener noreferrer\">Déterminer si une droite est parallèle à un plan.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99intersection%20entre%20une%20droite%20et%20un%20plan.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’intersection entre une droite et un plan.</a>"
    ]
  },
  "ecole:1216": {
    title: "Distances et angles dans l'espace",
    definition: "La distance entre deux points de l’espace et l’angle entre deux vecteurs se calculent à l’aide des coordonnées et du produit scalaire.",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace muni d'un repère orthonormé et du produit scalaire, qui vérifie l'inégalité de Cauchy-Schwarz.",
        axiomes: [
            {
                nom: "S1 — Norme",
                enonce: "‖u‖ = √(u·u) ; la distance de A à B est AB = ‖AB‖."
            },
            {
                nom: "S2 — Angle",
                enonce: "L'angle θ ∈ [0 ; π] de deux vecteurs non nuls est défini par cos θ = u·v/(‖u‖‖v‖)."
            },
            {
                nom: "S3 — Projection orthogonale",
                enonce: "La distance d'un point à un plan (ou une droite) est la distance à son projeté orthogonal."
            }
        ],
        conclusion: "Distance de deux points : √(Δx² + Δy² + Δz²). Distance de M₀(x₀ ; y₀ ; z₀) au plan ax + by + cz + d = 0 : |ax₀ + by₀ + cz₀ + d|/√(a² + b² + c²). Distance à la droite de vecteur directeur u passant par A : ‖AM₀ × u‖/‖u‖. L'angle de deux droites ou de deux plans se déduit de leurs vecteurs directeurs ou normaux.",
        sources: [
            {
                titre: "Cahier de prépa (MPSI 3) — Espaces préhilbertiens",
                url: "https://cahier-de-prepa.fr/mpsi3-llg/download?id=561"
            },
            {
                titre: "Coulbois (Aix-Marseille) — Formes bilinéaires et produit scalaire",
                url: "https://www.i2m.univ-amu.fr/perso/thierry.coulbois/2020/capes/cours-bilineaire-capes-2020.pdf"
            }
        ]
    },
    formulas: [
      {
        text: "1. Distance : √((x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+1.+Distance+%3A+%E2%88%9A%28%28x%E2%82%82%E2%88%92x%E2%82%81%29%C2%B2%2B%28y%E2%82%82%E2%88%92y%E2%82%81%29%C2%B2%2B%28z%E2%82%82%E2%88%92z%E2%82%81%29%C2%B2%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Angle via produit scalaire.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+2.+Angle+via+produit+scalaire.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Orthogonalité : u·v=0.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+g%C3%A9om%C3%A9trie+3.+Orthogonalit%C3%A9+%3A+u%C2%B7v%3D0.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : oublier une coordonnée dans le calcul.",
    details: "La distance entre deux points de l’espace et l’angle entre deux vecteurs se calculent à l’aide des coordonnées et du produit scalaire. Cette notion s'appuie sur : vecteurs dans l’espace. Par exemple, Distance entre A(1,2,3) et B(4,6,5) illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Distance entre A(1,2,3) et B(4,6,5)"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Produit scalaire ».",
      items: [
        { file: "203-0-angle.png", alt: "Produit scalaire" },
        { file: "203-1-formule.png", alt: "Produit scalaire" },
        { file: "203-2-orthogonal.png", alt: "Produit scalaire" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Orthogonalité dans l'espace : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/pMQBaCqLPsQ",
        lang: "fr"
      },
      methode: {
        title: "Déterminer la distance d'un point à un plan (projection orthogonale)",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/1b9FtX4sCmQ",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Mécanique"
      },
      {
        icon: "research",
        text: "Géométrie 3D"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20la%20distance%20entre%20deux%20points%20de%20%E2%84%9D%C2%B3.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer la distance entre deux points de ℝ³.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99angle%20entre%20deux%20vecteurs.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’angle entre deux vecteurs.</a>"
    ]
  },
  "ecole:1217": {
    title: "Loi normale",
    definition: "La loi normale est une loi continue en forme de courbe en cloche, caractérisée par sa moyenne μ et son écart-type σ.",
    definition_axiomatique: {
        cadre: "On considère une variable aléatoire réelle X à densité f (fonction ≥ 0 d'intégrale 1) d'espérance μ et de variance σ² > 0 fixées.",
        axiomes: [
            {
                nom: "N1 — Densité",
                enonce: "f ≥ 0 et ∫₋∞^{+∞} f(x)dx = 1."
            },
            {
                nom: "N2 — Moments",
                enonce: "E(X) = μ et V(X) = σ²."
            },
            {
                nom: "N3 — Entropie maximale",
                enonce: "Parmi toutes les densités vérifiant N1 et N2, f est celle dont l'entropie −∫ f ln f est maximale."
            }
        ],
        conclusion: "La densité qui vérifie N1 à N3 est f(x) = (1/(σ√(2π)))·exp(−(x − μ)²/(2σ²)) : c'est la loi normale N(μ, σ²). Sa courbe en cloche est symétrique par rapport à x = μ ; environ 68 % de la probabilité est dans [μ − σ ; μ + σ], 95 % dans [μ − 1,96σ ; μ + 1,96σ]. Elle intervient comme limite de la loi binomiale (théorème de Moivre-Laplace)."
    },
    formulas: [
      {
        text: "1. Densité symétrique.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Densit%C3%A9+sym%C3%A9trique.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. 68%-95%-99.7% autour de μ.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+68%25-95%25-99.7%25+autour+de+%CE%BC.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Standardisation.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Standardisation.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre densité et probabilité.",
    details: "La loi normale est une loi continue en forme de courbe en cloche, caractérisée par sa moyenne μ et son écart-type σ. Cette notion s'appuie sur : statistiques avancées. Par exemple, N(0,1) : loi normale centrée réduite illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "N(0,1) : loi normale centrée réduite"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Variance et écart-type ».",
      items: [
        { file: "305-0-variance.png", alt: "Variance et écart-type" },
        { file: "305-1-ecart-type.png", alt: "Variance et écart-type" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "The Normal Distribution, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/rzFX5NWojp0",
        lang: "en"
      },
      methode: {
        title: "Calculer une probabilité pour une loi normale",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/kZVL8AR-1ug",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Statistiques"
      },
      {
        icon: "research",
        text: "Sciences"
      },
      {
        icon: "research",
        text: "Probabilités"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28X%3C1.2%29%20pour%20X~N%280%2C1%29.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(X<1.2) pour X~N(0,1).</a>",
      "<a href=\"https://www.google.com/search?q=Standardiser%20une%20variable%20normale.\" target=\"_blank\" rel=\"noopener noreferrer\">Standardiser une variable normale.</a>"
    ]
  },
  "ecole:1218": {
    title: "Estimateurs",
    definition: "Un estimateur est une statistique calculée à partir d’un échantillon pour estimer une valeur inconnue de la population.",
    definition_axiomatique: {
        cadre: "On dispose d'un échantillon (X₁, …, Xₙ) de variables indépendantes de même loi, d'espérance inconnue θ.",
        axiomes: [
            {
                nom: "E1 — Estimateur",
                enonce: "Un estimateur de θ est une variable aléatoire Tₙ = g(X₁, …, Xₙ) calculée à partir de l'échantillon."
            },
            {
                nom: "E2 — Absence de biais",
                enonce: "Tₙ est sans biais si E(Tₙ) = θ."
            },
            {
                nom: "E3 — Convergence",
                enonce: "Tₙ est convergent si Tₙ tend vers θ (en probabilité) quand n tend vers +∞."
            }
        ],
        conclusion: "La moyenne empirique X̄ₙ = (X₁ + … + Xₙ)/n est un estimateur sans biais de θ (E(X̄ₙ) = θ par linéarité), de variance σ²/n qui tend vers 0 : il est convergent (loi des grands nombres). La fréquence observée f d'un caractère est un estimateur sans biais de sa proportion p.",
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
        text: "1. Biais.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Biais.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Variance.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Variance.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Convergence.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Convergence.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre estimateur et estimation.",
    details: "Un estimateur est une statistique calculée à partir d’un échantillon pour estimer une valeur inconnue de la population. Cette notion s'appuie sur : statistiques avancées. Par exemple, La moyenne de l’échantillon est un estimateur de la moyenne de la population illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "La moyenne de l’échantillon est un estimateur de la moyenne de la population"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Statistique mathématique ».",
      items: [
        { file: "318-1-cramerrao.png", alt: "Statistique mathématique" },
        { file: "318-2-ic.png", alt: "Statistique mathématique" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Population and Estimated Parameters, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/vikkiwjQqfU",
        lang: "en"
      },
      methode: {
        title: "Population and Estimated Parameters, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/vikkiwjQqfU",
        lang: "en"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Statistiques"
      },
      {
        icon: "research",
        text: "Sciences"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Comparer%20deux%20estimateurs.\" target=\"_blank\" rel=\"noopener noreferrer\">Comparer deux estimateurs.</a>",
      "<a href=\"https://www.google.com/search?q=Calculer%20le%20biais%20d%E2%80%99un%20estimateur%20donn%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer le biais d’un estimateur donné.</a>"
    ]
  },
  "ecole:1219": {
    title: "Tests statistiques",
    definition: "Un test statistique permet de décider si une hypothèse sur une population est compatible avec les données observées.",
    definition_axiomatique: {
        cadre: "On veut décider, à partir d'un échantillon, si une hypothèse sur une population est compatible avec les données.",
        axiomes: [
            {
                nom: "T1 — Hypothèses",
                enonce: "On oppose une hypothèse nulle H₀ (dont on suppose la vérité) à une hypothèse alternative H₁."
            },
            {
                nom: "T2 — Règle de décision",
                enonce: "On fixe une région de rejet de H₀ pour la statistique observée."
            },
            {
                nom: "T3 — Risque de première espèce",
                enonce: "Le risque α est la probabilité de rejeter H₀ alors qu'elle est vraie ; on le fixe a priori (5 % par exemple)."
            }
        ],
        conclusion: "Le test consiste à calculer la statistique sur l'échantillon et à rejeter H₀ si elle tombe dans la région de rejet (dont la probabilité sous H₀ est α). Ne pas rejeter H₀ ne prouve pas que H₀ est vraie ; rejeter H₀ signifie que les données sont peu compatibles avec H₀ au niveau α."
    },
    formulas: [
      {
        text: "1. Hypothèse nulle H₀.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+Hypoth%C3%A8se+nulle+H%E2%82%80.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Intervalle de fluctuation.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Intervalle+de+fluctuation.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Décision : accepter ou rejeter H₀.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+D%C3%A9cision+%3A+accepter+ou+rejeter+H%E2%82%80.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre test et intervalle de confiance.",
    details: "Un test statistique permet de décider si une hypothèse sur une population est compatible avec les données observées. Cette notion s'appuie sur : probabilités, fluctuations. Par exemple, Tester si une proportion observée diffère de 0.5 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Tester si une proportion observée diffère de 0.5"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Tests d'hypothèses ».",
      items: [
        { file: "319-0-alpha.png", alt: "Tests d'hypothèses" },
        { file: "319-1-neymanpearson.png", alt: "Tests d'hypothèses" },
        { file: "319-2-chi2.png", alt: "Tests d'hypothèses" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Hypothesis Testing and The Null Hypothesis, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/0oc49DyA3hU",
        lang: "en"
      },
      methode: {
        title: "Confidence Intervals, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/TqOeMYtOc1w",
        lang: "en"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Sondages"
      },
      {
        icon: "research",
        text: "Sciences"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Tester%20une%20hypoth%C3%A8se%20sur%20une%20proportion.\" target=\"_blank\" rel=\"noopener noreferrer\">Tester une hypothèse sur une proportion.</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9cider%20si%20une%20proportion%20observ%C3%A9e%20appartient%20%C3%A0%20l%E2%80%99intervalle%20de%20fluctuation.\" target=\"_blank\" rel=\"noopener noreferrer\">Décider si une proportion observée appartient à l’intervalle de fluctuation.</a>"
    ]
  },
  "ecole:1220": {
    title: "Variables aléatoires continues",
    definition: "Une variable aléatoire continue prend des valeurs dans un intervalle et est décrite par une densité de probabilité.",
    definition_axiomatique: {
        cadre: "Une variable aléatoire X à valeurs dans un intervalle de ℝ est décrite par une densité de probabilité f, et P est une probabilité.",
        axiomes: [
            {
                nom: "D1 — Densité",
                enonce: "f est continue par morceaux, positive ou nulle, et ∫ f = 1 sur ℝ."
            },
            {
                nom: "D2 — Probabilité",
                enonce: "P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx pour tous a ≤ b."
            },
            {
                nom: "D3 — Kolmogorov",
                enonce: "P est positive, P(Ω) = 1 et additive sur les événements incompatibles."
            }
        ],
        conclusion: "Pour tout réel a, P(X = a) = ∫ₐᵃ f = 0 : c'est pourquoi P(X ≤ a) = P(X < a). La fonction de répartition F(x) = ∫₋∞ˣ f = P(X ≤ x) est croissante, de limites 0 et 1. L'espérance de X est E(X) = ∫ x f(x)dx. La loi uniforme sur [a ; b] a pour densité 1/(b − a) ; la loi exponentielle de paramètre λ a pour densité λe^{−λx} (x ≥ 0).",
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
        text: "1. P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+1.+P%28a+%E2%89%A4+X+%E2%89%A4+b%29+%3D+%E2%88%AB%E2%82%90%E1%B5%87+f%28x%29+dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Densité positive et intégrale = 1.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+2.+Densit%C3%A9+positive+et+int%C3%A9grale+%3D+1.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Espérance : ∫ x f(x) dx.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+probabilit%C3%A9s+3.+Esp%C3%A9rance+%3A+%E2%88%AB+x+f%28x%29+dx.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "4. E(X) = ∫ x f_X(x) dx (continu)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Variables%20al%C3%A9atoires%20continues%20E%28X%29%20%3D%20%E2%88%AB%20x%20f_X%28x%29%20dx%20%28continu%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre densité et probabilité ponctuelle.",
    details: "Une variable aléatoire continue prend des valeurs dans un intervalle et est décrite par une densité de probabilité. Cette notion s'appuie sur : intégrale, probabilités. Par exemple, Loi normale, loi exponentielle illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Loi normale, loi exponentielle"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Variables aléatoires continues ».",
      items: [
        { file: "312-0-densite.png", alt: "Variables aléatoires continues" },
        { file: "312-2-esperance.png", alt: "Variables aléatoires continues" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Utiliser une loi de probabilité à densité",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/0Ry-2yLsANA",
        lang: "fr"
      },
      methode: {
        title: "Utiliser la loi exponentielle",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/tL8-UTORSLM",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Statistiques"
      },
      {
        icon: "research",
        text: "Physique"
      },
      {
        icon: "research",
        text: "Modélisation"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Calculer%20P%28X%3C2%29%20pour%20une%20densit%C3%A9%20donn%C3%A9e.\" target=\"_blank\" rel=\"noopener noreferrer\">Calculer P(X<2) pour une densité donnée.</a>",
      "<a href=\"https://www.google.com/search?q=Trouver%20l%E2%80%99esp%C3%A9rance%20d%E2%80%99une%20variable%20continue%20simple.\" target=\"_blank\" rel=\"noopener noreferrer\">Trouver l’espérance d’une variable continue simple.</a>"
    ]
  },
  "ecole:1221": {
    title: "Intervalle de confiance",
    definition: "Un intervalle de confiance estime une valeur inconnue d’une population à partir d’un échantillon.",
    definition_axiomatique: {
        cadre: "On observe, dans un échantillon de taille n, la fréquence f d'un caractère dont la proportion p dans la population est inconnue.",
        axiomes: [
            {
                nom: "C1 — Niveau",
                enonce: "Un intervalle de confiance de niveau 95 % est un intervalle aléatoire I qui, pour tout p, contient p avec une probabilité au moins égale à 0,95."
            },
            {
                nom: "C2 — Fluctuation",
                enonce: "Si F est la fréquence dans un échantillon de taille n, alors P(|F − p| ≤ 1/√n) ≥ 0,95 (conditions : n ≥ 30, np ≥ 5, n(1 − p) ≥ 5)."
            }
        ],
        conclusion: "Comme |F − p| ≤ 1/√n équivaut à p ∈ [F − 1/√n ; F + 1/√n], l'intervalle I = [f − 1/√n ; f + 1/√n] est un intervalle de confiance de niveau au moins 95 % pour p. Sa longueur 2/√n décroît en 1/√n : pour diviser la marge d'erreur par 2, il faut multiplier la taille de l'échantillon par 4."
    },
    formulas: [
      {
        text: "1. Dépend de la taille de l’échantillon.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+1.+D%C3%A9pend+de+la+taille+de+l%E2%80%99%C3%A9chantillon.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Niveau de confiance (souvent 95%).",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+2.+Niveau+de+confiance+%28souvent+95%25%29.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Forme : moyenne ± marge d’erreur.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+3.+Forme+%3A+moyenne+%C2%B1+marge+d%E2%80%99erreur.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre intervalle de confiance et intervalle de fluctuation.",
    details: "Un intervalle de confiance estime une valeur inconnue d’une population à partir d’un échantillon. Cette notion s'appuie sur : loi normale. Par exemple, IC à 95% pour une moyenne : m ± 1.96·σ/√n illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "IC à 95% pour une moyenne : m ± 1.96·σ/√n"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Expériences aléatoires ».",
      items: [
        { file: "300-0-univers.png", alt: "Expériences aléatoires" },
        { file: "300-1-evenement.png", alt: "Expériences aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Confidence Intervals, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/TqOeMYtOc1w",
        lang: "en"
      },
      methode: {
        title: "Hypothesis Testing and The Null Hypothesis, Clearly Explained!!!",
        channel: "StatQuest with Josh Starmer",
        url: "https://youtu.be/0oc49DyA3hU",
        lang: "en"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Sondages"
      },
      {
        icon: "research",
        text: "Sciences"
      },
      {
        icon: "finance",
        text: "Économie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construire%20un%20intervalle%20de%20confiance%20pour%20une%20moyenne.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire un intervalle de confiance pour une moyenne.</a>",
      "<a href=\"https://www.google.com/search?q=Interpr%C3%A9ter%20un%20intervalle%20de%20confiance%20donn%C3%A9.\" target=\"_blank\" rel=\"noopener noreferrer\">Interpréter un intervalle de confiance donné.</a>"
    ]
  },
  "ecole:1222": {
    title: "Intervalle de fluctuation",
    definition: "Un intervalle de fluctuation permet d’estimer la proportion d’une population à partir d’un échantillon dans un cadre binomial.",
    definition_axiomatique: {
        cadre: "On considère un caractère de proportion connue p dans une population, et des échantillons de taille n, dont la fréquence F du caractère varie d'un échantillon à l'autre.",
        axiomes: [
            {
                nom: "F1 — Loi binomiale",
                enonce: "Le nombre de succès X dans l'échantillon suit la loi binomiale B(n, p) ; F = X/n."
            },
            {
                nom: "F2 — Approximation normale",
                enonce: "Pour n grand, F suit approximativement N(p, p(1 − p)/n)."
            },
            {
                nom: "F3 — Niveau 95 %",
                enonce: "P(|F − p| ≤ 1,96·√(p(1 − p)/n)) ≈ 0,95."
            }
        ],
        conclusion: "L'intervalle de fluctuation au seuil de 95 % est [p − 1,96√(p(1 − p)/n) ; p + 1,96√(p(1 − p)/n)]. Comme √(p(1 − p)) ≤ 1/2, il est contenu dans [p − 1/√n ; p + 1/√n], qui convient donc avec une probabilité d'au moins 0,95. Une fréquence observée hors de cet intervalle conduit à mettre en doute la valeur de p.",
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
        text: "1. Dépend de n.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+1.+D%C3%A9pend+de+n.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "2. Pour n≥30 : p ± 1/√n.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+2.+Pour+n%E2%89%A530+%3A+p+%C2%B1+1%2F%E2%88%9An.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      },
      {
        text: "3. Niveau de confiance 95%.",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma+Terminale+%28lyc%C3%A9e%29+statistiques+3.+Niveau+de+confiance+95%25.+-site%3Afacebook.com+-site%3Ainstagram.com+-site%3Atwitter.com+-site%3Ax.com+-site%3Atiktok.com+-site%3Apinterest.com+-site%3Alinkedin.com+-site%3Areddit.com+-site%3Asnapchat.com+-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces propriétés se lisent ligne à ligne pour appliquer correctement la notion. Attention à l'erreur fréquente : confondre fluctuation et confiance.",
    details: "Un intervalle de fluctuation permet d’estimer la proportion d’une population à partir d’un échantillon dans un cadre binomial. Cette notion s'appuie sur : loi binomiale. Par exemple, Pour n=100 et p=0.4 : intervalle ≈ [0.3 illustre concrètement cette notion, telle qu'elle est abordée en classe de Terminale.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Pour n=100 et p=0.4 : intervalle ≈ [0.3"
      },
      {
        terme: "Exemple 2",
        definition: "0.5]"
      }
    ],
    images: {
      intro: "Illustration(s) associée(s) au chapitre « Expériences aléatoires ».",
      items: [
        { file: "300-0-univers.png", alt: "Expériences aléatoires" },
        { file: "300-1-evenement.png", alt: "Expériences aléatoires" }
      ]
    },
    videos: {
      intro: "La vidéo de cours la plus vue, et une vidéo de méthode, sur cette notion.",
      cours: {
        title: "Loi des grands nombres : le cours en vidéo",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/_ZzxgjAxrt4",
        lang: "fr"
      },
      methode: {
        title: "Appliquer la loi des grands nombres",
        channel: "Maths et tiques (Yvan Monka)",
        url: "https://youtu.be/fzuNxQSDTb8",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "finance",
        text: "Sondages"
      },
      {
        icon: "research",
        text: "Proportions"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construire%20un%20intervalle%20de%20fluctuation%20pour%20une%20proportion.\" target=\"_blank\" rel=\"noopener noreferrer\">Construire un intervalle de fluctuation pour une proportion.</a>",
      "<a href=\"https://www.google.com/search?q=Tester%20une%20hypoth%C3%A8se%20%C3%A0%20partir%20d%E2%80%99un%20intervalle.\" target=\"_blank\" rel=\"noopener noreferrer\">Tester une hypothèse à partir d’un intervalle.</a>"
    ]
  },
  "ecole:1229": {
    title: "L'ensemble des nombres réels ℝ",
    definition: "ℝ désigne l'ensemble de tous les nombres réels : il regroupe les entiers, les nombres décimaux, les fractions et les nombres irrationnels comme √2 ou π.",
    definition_axiomatique: {
        cadre: "On veut décrire l'ensemble ℝ des nombres réels par ses propriétés.",
        axiomes: [
            {
                nom: "R1 — Corps",
                enonce: "(ℝ, +, ×) est un corps commutatif : associativité, commutativité, distributivité, neutres 0 ≠ 1, opposés, inverses des non-nuls."
            },
            {
                nom: "R2 — Ordre",
                enonce: "ℝ est totalement ordonné par ≤, et l'ordre est compatible avec l'addition et la multiplication par un réel positif."
            },
            {
                nom: "R3 — Borne supérieure",
                enonce: "Toute partie non vide et majorée de ℝ possède une borne supérieure."
            }
        ],
        conclusion: "ℝ est le corps totalement ordonné complet ; il est unique à isomorphisme près. Il contient ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. R3 distingue ℝ de ℚ : la partie {x ∈ ℚ : x² < 2} est majorée dans ℚ mais n'a pas de borne supérieure rationnelle, alors qu'elle en a une dans ℝ : √2.",
        sources: [
            {
                titre: "Université d'Aix-Marseille — Axiomatique de ℝ (corps ordonné, archimédien, complet)",
                url: "https://formations.univ-amu.fr/fr/pdf/3SMI@SMI4U20"
            }
        ]
    },
    formulas: [
      {
        text: "1. ℝ = ensemble des nombres réels",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%202nde%20nombres%20%E2%84%9D%20%3D%20ensemble%20des%20nombres%20r%C3%A9els%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ (entiers naturels, relatifs, décimaux, rationnels, réels)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%202nde%20nombres%20%E2%84%95%20%E2%8A%82%20%E2%84%A4%20%E2%8A%82%20%F0%9D%94%BB%20%E2%8A%82%20%E2%84%9A%20%E2%8A%82%20%E2%84%9D%20%28entiers%20naturels%2C%20relatifs%2C%20d%C3%A9cimaux%2C%20rationnels%2C%20r%C3%A9els%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette hiérarchie d'ensembles montre que chaque type de nombre déjà connu (entiers, fractions) est inclus dans un ensemble plus vaste, jusqu'à ℝ qui contient aussi les irrationnels.",
    details: "ℝ est le cadre de travail de toute l'analyse au lycée : fonctions, équations, inéquations. Cette notion s'appuie sur : les ensembles de nombres déjà connus (ℕ, ℤ, ℚ). Par exemple, √2 appartient à ℝ mais pas à ℚ, car on démontre qu'il ne peut pas s'écrire comme une fraction.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3 est à la fois dans ℕ, ℤ, ℚ et ℝ."
      },
      {
        terme: "Exemple 2",
        definition: "√2 ≈ 1,41421356... est dans ℝ mais pas dans ℚ : c'est un nombre irrationnel."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : L'ensemble des nombres réels ℝ",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=L%27ensemble%20des%20nombres%20r%C3%A9els%20%E2%84%9D%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : L'ensemble des nombres réels ℝ",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=L%27ensemble%20des%20nombres%20r%C3%A9els%20%E2%84%9D%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "ruler",
        text: "Mesurer une longueur qui n'est pas un nombre entier ou décimal exact"
      },
      {
        icon: "target",
        text: "Cadre de travail pour l'étude des fonctions"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20l%27irrationalit%C3%A9%20de%20%E2%88%9A2\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de l'irrationalité de √2</a>",
      "<a href=\"https://www.google.com/search?q=Droite%20gradu%C3%A9e%20et%20repr%C3%A9sentation%20des%20r%C3%A9els\" target=\"_blank\" rel=\"noopener noreferrer\">Droite graduée et représentation des réels</a>"
    ]
  },
  "ecole:1230": {
    title: "Équation cartésienne d'un cercle",
    definition: "Dans un repère orthonormé, un cercle de centre Ω(a;b) et de rayon r est l'ensemble des points M(x;y) vérifiant l'équation (x−a)² + (y−b)² = r².",
    definition_axiomatique: {
        cadre: "On travaille dans un plan muni d'un repère orthonormé, où la distance de deux points vérifie d² = Δx² + Δy².",
        axiomes: [
            {
                nom: "C1 — Cercle",
                enonce: "Le cercle de centre Ω(a ; b) et de rayon r > 0 est l'ensemble des points M(x ; y) tels que ΩM = r."
            },
            {
                nom: "C2 — Distance",
                enonce: "ΩM² = (x − a)² + (y − b)²."
            }
        ],
        conclusion: "Un point M(x ; y) est sur le cercle si et seulement si (x − a)² + (y − b)² = r². Réciproquement, x² + y² + αx + βy + γ = 0 se ramène à cette forme en complétant les carrés ; c'est un cercle si le membre de droite obtenu est strictement positif."
    },
    formulas: [
      {
        text: "1. (x − a)² + (y − b)² = r², cercle de centre (a;b) et de rayon r",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%202nde%20g%C3%A9om%C3%A9trie%20rep%C3%A8re%20%28x%20%E2%88%92%20a%29%C2%B2%20%2B%20%28y%20%E2%88%92%20b%29%C2%B2%20%3D%20r%C2%B2%2C%20cercle%20de%20centre%20%28a%3Bb%29%20et%20de%20rayon%20r%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette équation traduit simplement que la distance entre M(x;y) et le centre Ω(a;b) vaut toujours r, en appliquant la formule de distance entre deux points.",
    details: "L'équation du cercle découle directement de la formule de distance : ΩM = r équivaut à ΩM² = r², d'où (x−a)²+(y−b)²=r². Cette notion s'appuie sur : la formule de distance entre deux points dans un repère. Par exemple, le cercle de centre (0;0) et de rayon 5 a pour équation x²+y²=25.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Cercle de centre (2;−1) et de rayon 3 : (x−2)²+(y+1)²=9."
      },
      {
        terme: "Exemple 2",
        definition: "Vérifier que le point (5;0) appartient au cercle x²+y²=25 : 5²+0²=25, c'est bien vérifié."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Équation cartésienne d'un cercle",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quation%20cart%C3%A9sienne%20d%27un%20cercle%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Équation cartésienne d'un cercle",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quation%20cart%C3%A9sienne%20d%27un%20cercle%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "map",
        text: "Modéliser une zone de couverture circulaire (antenne, GPS)"
      },
      {
        icon: "target",
        text: "Résoudre des problèmes de géométrie analytique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Passage%20de%20l%27%C3%A9quation%20d%C3%A9velopp%C3%A9e%20%C3%A0%20la%20forme%20centre-rayon%20%28identit%C3%A9s%20remarquables%29\" target=\"_blank\" rel=\"noopener noreferrer\">Passage de l'équation développée à la forme centre-rayon (identités remarquables)</a>",
      "<a href=\"https://www.google.com/search?q=Position%20relative%20d%27un%20point%20par%20rapport%20%C3%A0%20un%20cercle\" target=\"_blank\" rel=\"noopener noreferrer\">Position relative d'un point par rapport à un cercle</a>"
    ]
  },
  "ecole:1231": {
    title: "Aire d'un polygone régulier",
    definition: "Un polygone régulier à n côtés de longueur c a une aire qui se calcule à partir de n, de c et de la fonction tangente.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien avec les axiomes de l'aire ; un polygone régulier à n côtés de longueur c est inscrit dans un cercle de centre O.",
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
        conclusion: "Le polygone est réuni de n triangles isocèles superposables de sommet O (A2, A3). Chacun a pour base c et pour hauteur l'apothème a = c/(2tan(π/n)), donc pour aire c·a/2. L'aire du polygone est n·c²/(4tan(π/n)) = ½ × périmètre × apothème.",
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
        text: "1. A = (n × c²) / (4 tan(π/n))",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20polygone%20r%C3%A9gulier%20A%20%3D%20%28n%20%C3%97%20c%C2%B2%29%20/%20%284%20tan%28%CF%80/n%29%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette formule vient du découpage du polygone en n triangles isocèles identiques depuis son centre, dont on calcule l'aire à l'aide de la trigonométrie.",
    details: "L'aire d'un polygone régulier dépend du nombre de côtés n et de leur longueur c. Cette notion s'appuie sur : la trigonométrie (tangente) et le découpage en triangles. Par exemple, un hexagone régulier (n=6) de côté 2 a pour aire A = (6×4)/(4 tan(30°)) ≈ 20,8.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Carré (n=4, cas particulier) : A = (4c²)/(4 tan(45°)) = c², qui redonne bien la formule usuelle du carré."
      },
      {
        terme: "Exemple 2",
        definition: "Hexagone régulier de côté 1 : A = 6/(4 tan(30°)) ≈ 2,60."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Aire d'un polygone régulier",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Aire%20d%27un%20polygone%20r%C3%A9gulier%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Aire d'un polygone régulier",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Aire%20d%27un%20polygone%20r%C3%A9gulier%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "shapes",
        text: "Calculer l'aire d'un pavage ou d'un carrelage régulier"
      },
      {
        icon: "design",
        text: "Architecture et design géométrique"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20par%20d%C3%A9coupage%20en%20n%20triangles%20isoc%C3%A8les\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration par découpage en n triangles isocèles</a>",
      "<a href=\"https://www.google.com/search?q=Comportement%20de%20l%27aire%20quand%20n%20devient%20grand%20%28approximation%20du%20cercle%29\" target=\"_blank\" rel=\"noopener noreferrer\">Comportement de l'aire quand n devient grand (approximation du cercle)</a>"
    ]
  },
  "ecole:1232": {
    title: "Rayon du cercle circonscrit (loi des sinus)",
    definition: "Dans un triangle ABC, le rayon R du cercle circonscrit se calcule à partir d'un côté et du sinus de l'angle opposé.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. Un triangle ABC est inscrit dans un cercle de centre O et de rayon R.",
        axiomes: [
            {
                nom: "A1 — Angle inscrit",
                enonce: "Un angle inscrit vaut la moitié de l'angle au centre qui intercepte le même arc."
            },
            {
                nom: "A2 — Triangle rectangle",
                enonce: "Dans un triangle rectangle d'hypoténuse h et d'angle aigu α, le côté opposé à α mesure h·sin α."
            }
        ],
        conclusion: "Avec BC = a et Â l'angle en A : le point D diamétralement opposé à B est tel que BCD est rectangle en C, avec BD = 2R et ∠BDC = Â (A1) ; A2 donne a = BC = 2R sin Â. Donc a/sin Â = b/sin B̂ = c/sin Ĉ = 2R (loi des sinus)."
    },
    formulas: [
      {
        text: "1. R = a / (2 sin A), où a = BC est le côté opposé à l'angle A",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20triangle%20R%20%3D%20a%20/%20%282%20sin%20A%29%2C%20o%C3%B9%20a%20%3D%20BC%20est%20le%20c%C3%B4t%C3%A9%20oppos%C3%A9%20%C3%A0%20l%27angle%20A%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Loi des sinus : a/sin A = b/sin B = c/sin C = 2R",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20triangle%20Loi%20des%20sinus%20%3A%20a/sin%20A%20%3D%20b/sin%20B%20%3D%20c/sin%20C%20%3D%202R%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "La loi des sinus relie chaque côté d'un triangle au sinus de l'angle opposé, avec un même rapport égal à 2R quel que soit le côté choisi.",
    details: "Cette formule permet de calculer le rayon du cercle circonscrit sans connaître son centre, uniquement à partir d'un côté et de l'angle opposé. Cette notion s'appuie sur : le cercle circonscrit et la trigonométrie dans le triangle. Par exemple, dans un triangle équilatéral de côté 6, R = 6/(2 sin 60°) = 6/√3 = 2√3.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Triangle rectangle en A, hypoténuse a=10 : R = a/2 = 5 (le centre du cercle circonscrit est le milieu de l'hypoténuse)."
      },
      {
        terme: "Exemple 2",
        definition: "Triangle avec a=8 et A=45° : R = 8/(2 sin 45°) = 8/√2 = 4√2."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Rayon du cercle circonscrit (loi des sinus)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Rayon%20du%20cercle%20circonscrit%20%28loi%20des%20sinus%29%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Rayon du cercle circonscrit (loi des sinus)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Rayon%20du%20cercle%20circonscrit%20%28loi%20des%20sinus%29%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "ruler",
        text: "Calculer le rayon du cercle circonscrit sans construire son centre"
      },
      {
        icon: "target",
        text: "Résolution de triangles (trouver angles et côtés manquants)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20loi%20des%20sinus\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la loi des sinus</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20R%20et%20l%27aire%20du%20triangle%20%3A%20Aire%20%3D%20abc/%284R%29\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre R et l'aire du triangle : Aire = abc/(4R)</a>"
    ]
  },
  "ecole:1233": {
    title: "Inégalité arithmético-géométrique (AM-GM) et Cauchy-Schwarz",
    definition: "L'inégalité AM-GM affirme que la moyenne arithmétique de nombres positifs est toujours supérieure ou égale à leur moyenne géométrique. L'inégalité de Cauchy-Schwarz compare le carré d'une somme de produits à un produit de sommes de carrés.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication.",
        axiomes: [
            {
                nom: "O1 — Carrés",
                enonce: "Pour tout réel x, x² ≥ 0."
            },
            {
                nom: "O2 — Somme de carrés",
                enonce: "Une somme de carrés est ≥ 0, et elle est nulle si et seulement si chaque terme est nul."
            }
        ],
        conclusion: "Inégalité arithmético-géométrique : pour a, b ≥ 0, (√a − √b)² ≥ 0 (O1) donne (a + b)/2 ≥ √(ab), avec égalité si et seulement si a = b. Cauchy-Schwarz : pour tous réels aᵢ et bᵢ, le trinôme Σ(aᵢt + bᵢ)² est ≥ 0 pour tout t ; son discriminant est donc ≤ 0, ce qui donne (Σ aᵢbᵢ)² ≤ (Σ aᵢ²)(Σ bᵢ²)."
    },
    formulas: [
      {
        text: "1. AM-GM (2 termes) : (a+b)/2 ≥ √(ab), pour a,b ≥ 0, égalité ssi a=b",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20in%C3%A9galit%C3%A9s%20AM-GM%20%282%20termes%29%20%3A%20%28a%2Bb%29/2%20%E2%89%A5%20%E2%88%9A%28ab%29%2C%20pour%20a%2Cb%20%E2%89%A5%200%2C%20%C3%A9galit%C3%A9%20ssi%20a%3Db%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Cauchy-Schwarz : (Σ aᵢbᵢ)² ≤ (Σ aᵢ²)(Σ bᵢ²)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20in%C3%A9galit%C3%A9s%20Cauchy-Schwarz%20%3A%20%28%CE%A3%20a%E1%B5%A2b%E1%B5%A2%29%C2%B2%20%E2%89%A4%20%28%CE%A3%20a%E1%B5%A2%C2%B2%29%28%CE%A3%20b%E1%B5%A2%C2%B2%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces deux inégalités classiques servent d'outils de base pour démontrer des inégalités plus complexes, en particulier dans les problèmes de type olympiade.",
    details: "L'inégalité AM-GM découle de (√a−√b)² ≥ 0 ; Cauchy-Schwarz se démontre en étudiant le signe d'un polynôme du second degré bien choisi. Cette notion s'appuie sur : les identités remarquables et le signe d'un trinôme. Par exemple, pour a=4 et b=9 : (4+9)/2=6,5 ≥ √36=6.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "a=4, b=4 : (4+4)/2=4=√16=4, l'égalité est atteinte car a=b."
      },
      {
        terme: "Exemple 2",
        definition: "Cauchy-Schwarz avec (a₁,a₂)=(1,2) et (b₁,b₂)=(3,4) : (3+8)²=121 ≤ (1+4)(9+16)=125."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Inégalité arithmético-géométrique (AM-GM) et Cauchy-Schwarz",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20arithm%C3%A9tico-g%C3%A9om%C3%A9trique%20%28AM-GM%29%20et%20Cauchy-Schwarz%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Inégalité arithmético-géométrique (AM-GM) et Cauchy-Schwarz",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20arithm%C3%A9tico-g%C3%A9om%C3%A9trique%20%28AM-GM%29%20et%20Cauchy-Schwarz%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Démontrer qu'une quantité est minimale ou maximale sans dérivée"
      },
      {
        icon: "research",
        text: "Outils de base pour les problèmes de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20AM-GM%20%C3%A0%20partir%20de%20%28%E2%88%9Aa%E2%88%92%E2%88%9Ab%29%C2%B2%E2%89%A50\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de AM-GM à partir de (√a−√b)²≥0</a>",
      "<a href=\"https://www.google.com/search?q=Cas%20d%27%C3%A9galit%C3%A9%20et%20d%C3%A9monstration%20de%20Cauchy-Schwarz\" target=\"_blank\" rel=\"noopener noreferrer\">Cas d'égalité et démonstration de Cauchy-Schwarz</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20de%20AM-GM%20%C3%A0%20n%20termes\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation de AM-GM à n termes</a>"
    ]
  },
  "ecole:1234": {
    title: "Techniques d'optimisation par inégalités (AM-GM, symétrisation)",
    definition: "Avant d'utiliser la dérivée, certains problèmes de minimum ou de maximum se résolvent directement grâce à des inégalités classiques comme AM-GM, ou en exploitant la symétrie du problème.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : axiomes de corps (dont l'inverse de tout réel non nul) et ordre total compatible avec l'addition et la multiplication.",
        axiomes: [
            {
                nom: "O1 — Carrés",
                enonce: "x² ≥ 0 pour tout réel x."
            },
            {
                nom: "O2 — AM-GM",
                enonce: "Pour a, b ≥ 0, (a + b)/2 ≥ √(ab), avec égalité si et seulement si a = b."
            },
            {
                nom: "O3 — Cas d'égalité",
                enonce: "Un minimum ou un maximum n'est démontré que lorsque le cas d'égalité est atteint."
            }
        ],
        conclusion: "Pour optimiser une expression, on la minore (ou la majore) par une constante à l'aide de O1 ou O2, puis on vérifie que le cas d'égalité est atteint. Exemples : x + 1/x ≥ 2 pour x > 0, avec égalité en x = 1 ; pour a + b = s fixé, ab ≤ s²/4 avec égalité si a = b : le rectangle de périmètre donné d'aire maximale est le carré."
    },
    formulas: [
      {
        text: "1. Pour x>0, x + 1/x ≥ 2, égalité ssi x=1 (cas particulier d'AM-GM)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20optimisation%20sans%20d%C3%A9riv%C3%A9e%20Pour%20x%3E0%2C%20x%20%2B%201/x%20%E2%89%A5%202%2C%20%C3%A9galit%C3%A9%20ssi%20x%3D1%20%28cas%20particulier%20d%27AM-GM%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. À somme fixée, le produit de deux nombres positifs est maximal quand ils sont égaux (symétrisation)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20optimisation%20sans%20d%C3%A9riv%C3%A9e%20%C3%80%20somme%20fix%C3%A9e%2C%20le%20produit%20de%20deux%20nombres%20positifs%20est%20maximal%20quand%20ils%20sont%20%C3%A9gaux%20%28sym%C3%A9trisation%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces techniques évitent le recours au calcul différentiel : elles reposent sur l'idée que, dans de nombreux problèmes symétriques, l'optimum est atteint quand toutes les variables sont égales.",
    details: "La symétrisation consiste à remarquer qu'un problème invariant par échange des variables atteint souvent son extremum quand elles sont toutes égales. Cette notion s'appuie sur : l'inégalité AM-GM. Par exemple, pour x+y=10 fixé, le produit xy est maximal (=25) quand x=y=5.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Trouver le minimum de x+4/x pour x>0 : par AM-GM, x+4/x ≥ 2√4 = 4, atteint en x=2."
      },
      {
        terme: "Exemple 2",
        definition: "Parmi tous les rectangles de périmètre 20, le carré (5×5) a l'aire maximale (25)."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Techniques d'optimisation par inégalités (AM-GM, symétrisation)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Techniques%20d%27optimisation%20par%20in%C3%A9galit%C3%A9s%20%28AM-GM%2C%20sym%C3%A9trisation%29%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Techniques d'optimisation par inégalités (AM-GM, symétrisation)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Techniques%20d%27optimisation%20par%20in%C3%A9galit%C3%A9s%20%28AM-GM%2C%20sym%C3%A9trisation%29%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Résoudre des problèmes de maximum/minimum sans dérivée"
      },
      {
        icon: "research",
        text: "Optimisation dans les problèmes de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Comparaison%20avec%20la%20m%C3%A9thode%20par%20d%C3%A9rivation\" target=\"_blank\" rel=\"noopener noreferrer\">Comparaison avec la méthode par dérivation</a>",
      "<a href=\"https://www.google.com/search?q=M%C3%A9thode%20des%20extremums%20li%C3%A9s%20par%20sym%C3%A9trie\" target=\"_blank\" rel=\"noopener noreferrer\">Méthode des extremums liés par symétrie</a>"
    ]
  },
  "ecole:1235": {
    title: "Identité a³+b³+c³−3abc",
    definition: "Cette identité factorise la quantité a³+b³+c³−3abc en un produit de deux facteurs, très utile pour prouver des inégalités ou résoudre des équations symétriques à trois variables.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +.",
        axiomes: [
            {
                nom: "A1 — Distributivité",
                enonce: "k(a + b) = ka + kb."
            },
            {
                nom: "A2 — Commutativité",
                enonce: "ab = ba."
            }
        ],
        conclusion: "En développant (a + b + c)(a² + b² + c² − ab − bc − ca), tous les termes croisés se simplifient (A1, A2) et il reste a³ + b³ + c³ − 3abc. Donc a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca) = ½(a + b + c)[(a − b)² + (b − c)² + (c − a)²]. Si a + b + c = 0, alors a³ + b³ + c³ = 3abc."
    },
    formulas: [
      {
        text: "1. a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20factorisation%20a%C2%B3%2Bb%C2%B3%2Bc%C2%B3%E2%88%923abc%20%3D%20%28a%2Bb%2Bc%29%28a%C2%B2%2Bb%C2%B2%2Bc%C2%B2%E2%88%92ab%E2%88%92bc%E2%88%92ca%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette identité se retrouve en reconnaissant un facteur commun après un développement soigneux, ou en utilisant les identités remarquables du second degré à trois variables.",
    details: "Elle généralise à trois variables la factorisation a²−b²=(a−b)(a+b). Cette notion s'appuie sur : les identités remarquables classiques. Par exemple, quand a+b+c=0, l'identité donne directement a³+b³+c³=3abc.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Si a+b+c=0, alors a³+b³+c³=3abc (cas particulier très utilisé en olympiades)."
      },
      {
        terme: "Exemple 2",
        definition: "a=1,b=2,c=3 : a³+b³+c³−3abc = 1+8+27−18=18, et (a+b+c)(...)=6×3=18, ça correspond."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Identité a³+b³+c³−3abc",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Identit%C3%A9%20a%C2%B3%2Bb%C2%B3%2Bc%C2%B3%E2%88%923abc%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Identité a³+b³+c³−3abc",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Identit%C3%A9%20a%C2%B3%2Bb%C2%B3%2Bc%C2%B3%E2%88%923abc%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Résoudre des équations symétriques à trois variables"
      },
      {
        icon: "target",
        text: "Démontrer des inégalités de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20compl%C3%A8te%20de%20l%27identit%C3%A9\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration complète de l'identité</a>",
      "<a href=\"https://www.google.com/search?q=Cas%20particulier%20a%2Bb%2Bc%3D0%20et%20ses%20applications\" target=\"_blank\" rel=\"noopener noreferrer\">Cas particulier a+b+c=0 et ses applications</a>"
    ]
  },
  "ecole:1236": {
    title: "Puissance d'un point et théorème de Ptolémée",
    definition: "La puissance d'un point M par rapport à un cercle mesure sa position par rapport à ce cercle à l'aide d'une seule formule ; le théorème de Ptolémée relie de son côté les côtés et diagonales d'un quadrilatère inscriptible dans un cercle.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan euclidien : points, droites, distance, mesure des angles en degrés. On considère un cercle de centre O et de rayon R, et un point M.",
        axiomes: [
            {
                nom: "A1 — Angles inscrits",
                enonce: "Deux angles inscrits qui interceptent le même arc sont égaux."
            },
            {
                nom: "A2 — Triangles semblables",
                enonce: "Deux triangles qui ont deux angles égaux sont semblables : leurs côtés sont proportionnels."
            },
            {
                nom: "A3 — Pythagore",
                enonce: "Dans un triangle rectangle, le carré de l'hypoténuse est la somme des carrés des deux autres côtés."
            }
        ],
        conclusion: "Si deux droites passant par M coupent le cercle en A, B et en C, D, les triangles MAC et MDB sont semblables (A1, A2), d'où MA·MB = MC·MD : cette valeur, la puissance de M, est MO² − R² (en valeur algébrique) (prendre une droite passant par O, ou utiliser A3). Pour un quadrilatère convexe inscrit ABCD, la même technique de triangles semblables donne le théorème de Ptolémée : AC·BD = AB·CD + AD·BC."
    },
    formulas: [
      {
        text: "1. Puissance de M : p(M) = MA × MB, pour toute droite passant par M et coupant le cercle en A et B",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20olympique%20Puissance%20de%20M%20%3A%20p%28M%29%20%3D%20MA%20%C3%97%20MB%2C%20pour%20toute%20droite%20passant%20par%20M%20et%20coupant%20le%20cercle%20en%20A%20et%20B%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. p(M) = MO² − r², où O est le centre et r le rayon du cercle",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20olympique%20p%28M%29%20%3D%20MO%C2%B2%20%E2%88%92%20r%C2%B2%2C%20o%C3%B9%20O%20est%20le%20centre%20et%20r%20le%20rayon%20du%20cercle%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "3. Ptolémée : pour ABCD cyclique, AC × BD = AB × CD + AD × BC",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20g%C3%A9om%C3%A9trie%20olympique%20Ptol%C3%A9m%C3%A9e%20%3A%20pour%20ABCD%20cyclique%2C%20AC%20%C3%97%20BD%20%3D%20AB%20%C3%97%20CD%20%2B%20AD%20%C3%97%20BC%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Le résultat remarquable de la puissance d'un point est que le produit MA×MB ne dépend pas de la droite choisie passant par M ; le théorème de Ptolémée n'est vrai que pour des quadrilatères dont les 4 sommets sont sur un même cercle (il devient une inégalité sinon).",
    details: "Ces deux résultats sont des outils classiques de géométrie du cercle, souvent combinés dans les problèmes. Cette notion s'appuie sur : le théorème de Pythagore, les triangles semblables et les quadrilatères inscriptibles. Par exemple, pour un carré de côté c inscrit dans un cercle, l'égalité de Ptolémée se vérifie directement : AC×BD=2c² = AB×CD+AD×BC=2c².",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "M sur le cercle : p(M) = 0 ; deux sécantes issues de M coupant le cercle en A,B et C,D vérifient MA×MB = MC×MD."
      },
      {
        terme: "Exemple 2",
        definition: "Carré de côté c : AC×BD = (c√2)² = 2c², et AB×CD+AD×BC = c²+c² = 2c², l'égalité de Ptolémée est vérifiée."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Puissance d'un point et théorème de Ptolémée",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Puissance%20d%27un%20point%20et%20th%C3%A9or%C3%A8me%20de%20Ptol%C3%A9m%C3%A9e%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Puissance d'un point et théorème de Ptolémée",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Puissance%20d%27un%20point%20et%20th%C3%A9or%C3%A8me%20de%20Ptol%C3%A9m%C3%A9e%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Démontrer des alignements ou des égalités de longueurs"
      },
      {
        icon: "research",
        text: "Outils classiques de géométrie de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20la%20puissance%20d%27un%20point%20par%20triangles%20semblables\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de la puissance d'un point par triangles semblables</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20th%C3%A9or%C3%A8me%20de%20Ptol%C3%A9m%C3%A9e%20et%20in%C3%A9galit%C3%A9%20de%20Ptol%C3%A9m%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du théorème de Ptolémée et inégalité de Ptolémée</a>",
      "<a href=\"https://www.google.com/search?q=Axe%20radical%20de%20deux%20cercles%20et%20inversion%20g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Axe radical de deux cercles et inversion géométrique</a>"
    ]
  },
  "ecole:1237": {
    title: "Barycentre de deux points pondérés",
    definition: "Le barycentre de deux points A et B affectés de coefficients (masses) mA et mB est le point d'équilibre du système, situé sur la droite (AB).",
    definition_axiomatique: {
        cadre: "On travaille dans le plan (ou l'espace) affine ; A et B sont deux points et α, β deux réels de somme α + β ≠ 0.",
        axiomes: [
            {
                nom: "B1 — Existence et unicité",
                enonce: "Il existe un unique point G tel que α·GA + β·GB = 0."
            },
            {
                nom: "B2 — Formule",
                enonce: "Pour tout point O, OG = (α·OA + β·OB)/(α + β)."
            },
            {
                nom: "B3 — Homogénéité",
                enonce: "Multiplier α et β par un même réel non nul ne change pas G."
            }
        ],
        conclusion: "G est le barycentre de (A, α) et (B, β) ; il est sur la droite (AB), avec AG = β/(α + β)·AB. Si α = β, c'est le milieu de [AB]. Si α + β = 0, le point n'existe pas (le vecteur α·OA + β·OB ne dépend plus de O)."
    },
    formulas: [
      {
        text: "1. G = (mA·A + mB·B) / (mA + mB)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20barycentres%20G%20%3D%20%28mA%C2%B7A%20%2B%20mB%C2%B7B%29%20/%20%28mA%20%2B%20mB%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. mA·GA→ + mB·GB→ = 0→ (relation vectorielle caractéristique)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20barycentres%20mA%C2%B7GA%E2%86%92%20%2B%20mB%C2%B7GB%E2%86%92%20%3D%200%E2%86%92%20%28relation%20vectorielle%20caract%C3%A9ristique%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Le barycentre généralise la notion de milieu : quand mA=mB, on retrouve exactement le milieu du segment [AB].",
    details: "Le barycentre se déplace vers le point ayant le coefficient le plus grand, comme un point d'équilibre physique. Cette notion s'appuie sur : les vecteurs et le milieu d'un segment. Par exemple, le barycentre de (A,1) et (B,3) est situé aux trois quarts du chemin de A vers B.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "mA=mB=1 : G est le milieu de [AB]."
      },
      {
        terme: "Exemple 2",
        definition: "mA=1, mB=2 pour A(0;0) et B(6;0) : G = (0+12)/3 ; 0) = (4;0)."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Barycentre de deux points pondérés",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Barycentre%20de%20deux%20points%20pond%C3%A9r%C3%A9s%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Barycentre de deux points pondérés",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Barycentre%20de%20deux%20points%20pond%C3%A9r%C3%A9s%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Centre de gravité d'un système de points pondérés"
      },
      {
        icon: "research",
        text: "Démonstrations de concours de droites en géométrie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Barycentre%20de%20trois%20points%20ou%20plus\" target=\"_blank\" rel=\"noopener noreferrer\">Barycentre de trois points ou plus</a>",
      "<a href=\"https://www.google.com/search?q=Centre%20de%20gravit%C3%A9%20d%27un%20triangle%20comme%20barycentre%20des%20sommets\" target=\"_blank\" rel=\"noopener noreferrer\">Centre de gravité d'un triangle comme barycentre des sommets</a>"
    ]
  },
  "ecole:1238": {
    title: "Relations entre coefficients et racines d'un polynôme",
    definition: "Pour un polynôme du second degré, la somme et le produit de ses racines s'expriment directement à partir de ses coefficients, sans avoir besoin de les calculer séparément.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ (ou dans un anneau commutatif quelconque) muni de l'addition et de la multiplication, qui vérifient : associativité et commutativité de + et de ×, éléments neutres 0 et 1, opposés, distributivité de × sur +. Un polynôme est déterminé par ses coefficients.",
        axiomes: [
            {
                nom: "A1 — Factorisation",
                enonce: "Si x₁, …, xₙ sont les racines d'un polynôme de degré n à coefficient dominant a, alors P(x) = a(x − x₁)…(x − xₙ)."
            },
            {
                nom: "A2 — Identification",
                enonce: "Deux polynômes égaux en tout réel ont les mêmes coefficients."
            }
        ],
        conclusion: "En développant a(x − x₁)(x − x₂) et en identifiant (A2) avec ax² + bx + c, on obtient x₁ + x₂ = −b/a et x₁x₂ = c/a. Plus généralement, les coefficients d'un polynôme sont, au signe près, les fonctions symétriques élémentaires de ses racines (relations de Viète)."
    },
    formulas: [
      {
        text: "1. Pour ax²+bx+c=0 de racines x₁,x₂ : x₁+x₂ = −b/a et x₁×x₂ = c/a",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%201ere%20polyn%C3%B4mes%20Pour%20ax%C2%B2%2Bbx%2Bc%3D0%20de%20racines%20x%E2%82%81%2Cx%E2%82%82%20%3A%20x%E2%82%81%2Bx%E2%82%82%20%3D%20%E2%88%92b/a%20et%20x%E2%82%81%C3%97x%E2%82%82%20%3D%20c/a%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces relations, dites de Viète, permettent de retrouver des informations sur les racines (leur somme, leur produit) sans les calculer explicitement, ce qui est très utile dans les exercices.",
    details: "Les relations de Viète viennent du développement de a(x−x₁)(x−x₂) = ax²+bx+c. Cette notion s'appuie sur : la factorisation d'un polynôme par ses racines. Par exemple, pour x²−5x+6=0, on sait directement que la somme des racines est 5 et leur produit 6, donc les racines sont 2 et 3.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "x²−5x+6=0 : somme=5, produit=6, donc racines 2 et 3."
      },
      {
        terme: "Exemple 2",
        definition: "Construire une équation du second degré dont les racines sont 3 et −4 : somme=−1, produit=−12, donc x²+x−12=0."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Relations entre coefficients et racines d'un polynôme",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Relations%20entre%20coefficients%20et%20racines%20d%27un%20polyn%C3%B4me%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Relations entre coefficients et racines d'un polynôme",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Relations%20entre%20coefficients%20et%20racines%20d%27un%20polyn%C3%B4me%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "target",
        text: "Retrouver des racines sans résoudre l'équation complètement"
      },
      {
        icon: "research",
        text: "Construire une équation à partir de racines données"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20%C3%A0%20partir%20de%20la%20forme%20factoris%C3%A9e\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration à partir de la forme factorisée</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20aux%20polyn%C3%B4mes%20de%20degr%C3%A9%20sup%C3%A9rieur%20%28relations%20de%20Vi%C3%A8te%20g%C3%A9n%C3%A9rales%29\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation aux polynômes de degré supérieur (relations de Viète générales)</a>"
    ]
  },
  "ecole:1239": {
    title: "Congruences et arithmétique modulaire",
    definition: "Deux entiers a et b sont congrus modulo n s'ils ont le même reste dans la division euclidienne par n ; l'ensemble ℤ/nℤ regroupe les entiers selon leur reste modulo n.",
    definition_axiomatique: {
        cadre: "On travaille dans ℤ, avec la division euclidienne ; n est un entier ≥ 2.",
        axiomes: [
            {
                nom: "C1 — Définition",
                enonce: "a ≡ b (mod n) si n divise a − b, c'est-à-dire si a et b ont le même reste dans la division par n."
            },
            {
                nom: "C2 — Équivalence",
                enonce: "≡ est réflexive, symétrique et transitive."
            },
            {
                nom: "C3 — Compatibilité",
                enonce: "Si a ≡ a' et b ≡ b' (mod n), alors a + b ≡ a' + b' et ab ≡ a'b' (mod n)."
            }
        ],
        conclusion: "Les classes de congruence modulo n forment l'anneau ℤ/nℤ, où l'on peut additionner et multiplier sans sortir des restes (C3) ; en particulier a ≡ b ⟹ aᵏ ≡ bᵏ. Ainsi 10 ≡ 1 (mod 9) explique le critère de divisibilité par 9. Un élément a est inversible modulo n si et seulement si pgcd(a, n) = 1.",
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
        text: "1. a ≡ b (mod n) ⟺ n divise (a−b)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20arithm%C3%A9tique%20a%20%E2%89%A1%20b%20%28mod%20n%29%20%E2%9F%BA%20n%20divise%20%28a%E2%88%92b%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. ℤ/nℤ = {0, 1, 2, ..., n−1} (classes de restes modulo n)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20arithm%C3%A9tique%20%E2%84%A4/n%E2%84%A4%20%3D%20%7B0%2C%201%2C%202%2C%20...%2C%20n%E2%88%921%7D%20%28classes%20de%20restes%20modulo%20n%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Travailler modulo n revient à ne s'intéresser qu'au reste d'une division : cela simplifie énormément l'étude de la divisibilité et des grandes puissances.",
    details: "La relation de congruence se comporte comme une égalité vis-à-vis de l'addition et de la multiplication, ce qui en fait un outil puissant. Cette notion s'appuie sur : la division euclidienne. Par exemple, 17 ≡ 2 (mod 5) car 17 = 3×5+2.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "23 ≡ 3 (mod 10), car 23 se termine par 3."
      },
      {
        terme: "Exemple 2",
        definition: "Calculer le reste de 2¹⁰ modulo 7 en réduisant les puissances successives modulo 7."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Congruences et arithmétique modulaire",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Congruences%20et%20arithm%C3%A9tique%20modulaire%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Congruences et arithmétique modulaire",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Congruences%20et%20arithm%C3%A9tique%20modulaire%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Bases de la cryptographie (RSA)"
      },
      {
        icon: "research",
        text: "Résolution d'équations de divisibilité"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Op%C3%A9rations%20%28addition%2C%20multiplication%29%20compatibles%20avec%20les%20congruences\" target=\"_blank\" rel=\"noopener noreferrer\">Opérations (addition, multiplication) compatibles avec les congruences</a>",
      "<a href=\"https://www.google.com/search?q=Petit%20th%C3%A9or%C3%A8me%20de%20Fermat%20et%20ses%20applications\" target=\"_blank\" rel=\"noopener noreferrer\">Petit théorème de Fermat et ses applications</a>"
    ]
  },
  "ecole:1240": {
    title: "Cryptographie à clé publique : RSA",
    definition: "RSA est un système de chiffrement à clé publique reposant sur l'arithmétique modulaire : le message est élevé à une puissance modulo un grand nombre, opération facile à faire mais très difficile à inverser sans connaître la clé privée.",
    definition_axiomatique: {
        cadre: "On travaille dans ℤ/nℤ avec n = pq produit de deux grands nombres premiers ; φ(n) = (p − 1)(q − 1) est le nombre d'entiers de [1 ; n] premiers avec n.",
        axiomes: [
            {
                nom: "R1 — Euler",
                enonce: "Si pgcd(m, n) = 1, alors m^{φ(n)} ≡ 1 (mod n)."
            },
            {
                nom: "R2 — Bézout",
                enonce: "Si pgcd(e, φ(n)) = 1, il existe d tel que ed ≡ 1 (mod φ(n))."
            },
            {
                nom: "R3 — Hypothèse de sécurité",
                enonce: "Retrouver p et q à partir de n (factoriser) est supposé calculatoirement difficile : c'est une hypothèse, non un théorème."
            }
        ],
        conclusion: "Clé publique (n, e), clé privée d. Chiffrement : c = mᵉ mod n. Déchiffrement : cᵈ = m^{ed} = m^{1 + kφ(n)} ≡ m (mod n) par R1 si m est premier avec n (le cas contraire se traite modulo p et q, via le petit théorème de Fermat). La sécurité repose sur R3 : connaître φ(n) revient à connaître p et q."
    },
    formulas: [
      {
        text: "1. Chiffrement RSA : c ≡ mᵉ (mod n), où (e,n) est la clé publique",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20cryptographie%20Chiffrement%20RSA%20%3A%20c%20%E2%89%A1%20m%E1%B5%89%20%28mod%20n%29%2C%20o%C3%B9%20%28e%2Cn%29%20est%20la%20cl%C3%A9%20publique%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Échange de clé Diffie-Hellman : chaque partie calcule gᵃᵇ (mod p) sans jamais révéler a ni b",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20cryptographie%20%C3%89change%20de%20cl%C3%A9%20Diffie-Hellman%20%3A%20chaque%20partie%20calcule%20g%E1%B5%83%E1%B5%87%20%28mod%20p%29%20sans%20jamais%20r%C3%A9v%C3%A9ler%20a%20ni%20b%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "La sécurité de RSA repose sur la difficulté à factoriser un grand nombre n produit de deux grands nombres premiers, tandis que Diffie-Hellman repose sur la difficulté du logarithme discret.",
    details: "Ces systèmes permettent de communiquer de façon sécurisée sans avoir échangé de secret au préalable. Cette notion s'appuie sur : les congruences et le petit théorème de Fermat. Par exemple, sur un petit exemple avec n=33=3×11, on peut vérifier à la main le chiffrement et le déchiffrement RSA.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Chiffrer m=5 avec e=3, n=33 : c ≡ 5³ ≡ 125 ≡ 26 (mod 33)."
      },
      {
        terme: "Exemple 2",
        definition: "Le déchiffrement utilise un exposant d tel que ed ≡ 1 (mod φ(n))."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Cryptographie à clé publique : RSA",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Cryptographie%20%C3%A0%20cl%C3%A9%20publique%20%3A%20RSA%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Cryptographie à clé publique : RSA",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Cryptographie%20%C3%A0%20cl%C3%A9%20publique%20%3A%20RSA%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "computer",
        text: "Sécurisation des communications sur Internet (HTTPS)"
      },
      {
        icon: "research",
        text: "Signature numérique et authentification"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Construction%20compl%C3%A8te%20d%27une%20paire%20de%20cl%C3%A9s%20RSA\" target=\"_blank\" rel=\"noopener noreferrer\">Construction complète d'une paire de clés RSA</a>",
      "<a href=\"https://www.google.com/search?q=Fonction%20indicatrice%20d%27Euler%20%CF%86%28n%29%20et%20son%20r%C3%B4le%20dans%20RSA\" target=\"_blank\" rel=\"noopener noreferrer\">Fonction indicatrice d'Euler φ(n) et son rôle dans RSA</a>",
      "<a href=\"https://www.google.com/search?q=Logarithme%20discret%20et%20%C3%A9change%20de%20cl%C3%A9%20Diffie-Hellman\" target=\"_blank\" rel=\"noopener noreferrer\">Logarithme discret et échange de clé Diffie-Hellman</a>"
    ]
  },
  "ecole:1241": {
    title: "Homothétie exprimée avec les nombres complexes",
    definition: "Une homothétie de centre l'origine et de rapport k se traduit, en notation complexe, par la multiplication de l'affixe du point par le réel k.",
    definition_axiomatique: {
        cadre: "On travaille dans le plan complexe : à un point M d'affixe z correspond le point M' d'affixe z' image par l'homothétie de centre Ω d'affixe ω et de rapport réel k ≠ 0.",
        axiomes: [
            {
                nom: "H1 — Centre invariant",
                enonce: "h(Ω) = Ω."
            },
            {
                nom: "H2 — Vecteurs",
                enonce: "ΩM' = k·ΩM."
            },
            {
                nom: "H3 — Affixe d'un vecteur",
                enonce: "L'affixe de ΩM est z − ω."
            }
        ],
        conclusion: "H2 s'écrit z' − ω = k(z − ω), soit z' = kz + (1 − k)ω. Si le centre est l'origine, z' = kz. La composée de deux homothéties de rapports k et k' est une homothétie de rapport kk' (ou une translation si kk' = 1). Le module de z' − ω vaut |k| fois celui de z − ω."
    },
    formulas: [
      {
        text: "1. z' = k z, homothétie de centre O(0) et de rapport k (k réel non nul)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20nombres%20complexes%20g%C3%A9om%C3%A9trie%20z%27%20%3D%20k%20z%2C%20homoth%C3%A9tie%20de%20centre%20O%280%29%20et%20de%20rapport%20k%20%28k%20r%C3%A9el%20non%20nul%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Multiplier un nombre complexe par un réel k dilate sa distance à l'origine par |k|, tout en gardant (ou en inversant si k<0) sa direction : c'est exactement l'effet d'une homothétie.",
    details: "Cette écriture complexe unifie homothétie, rotation et translation dans un même formalisme algébrique. Cette notion s'appuie sur : la forme algébrique des nombres complexes. Par exemple, l'image de z=2+3i par l'homothétie de rapport k=2 est z'=4+6i.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "k=2, z=1+i : z'=2z=2+2i."
      },
      {
        terme: "Exemple 2",
        definition: "k=−1 : l'homothétie de rapport −1 est la symétrie centrale par rapport à O."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Homothétie exprimée avec les nombres complexes",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Homoth%C3%A9tie%20exprim%C3%A9e%20avec%20les%20nombres%20complexes%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Homothétie exprimée avec les nombres complexes",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Homoth%C3%A9tie%20exprim%C3%A9e%20avec%20les%20nombres%20complexes%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "shapes",
        text: "Transformations géométriques en notation complexe"
      },
      {
        icon: "computer",
        text: "Animation et transformation d'images vectorielles"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Composition%20d%27une%20homoth%C3%A9tie%20et%20d%27une%20rotation%20via%20les%20complexes\" target=\"_blank\" rel=\"noopener noreferrer\">Composition d'une homothétie et d'une rotation via les complexes</a>",
      "<a href=\"https://www.google.com/search?q=Homoth%C3%A9tie%20de%20centre%20quelconque%20%3A%20z%27%20%3D%20k%28z%E2%88%92%CF%89%29%2B%CF%89\" target=\"_blank\" rel=\"noopener noreferrer\">Homothétie de centre quelconque : z' = k(z−ω)+ω</a>"
    ]
  },
  "ecole:1242": {
    title: "Équation cartésienne d'une sphère",
    definition: "Dans l'espace muni d'un repère orthonormé, une sphère de centre Ω(a;b;c) et de rayon r est l'ensemble des points M(x;y;z) vérifiant l'équation (x−a)²+(y−b)²+(z−c)²=r².",
    definition_axiomatique: {
        cadre: "On travaille dans l'espace muni d'un repère orthonormé, où la distance de deux points vérifie AB² = Δx² + Δy² + Δz².",
        axiomes: [
            {
                nom: "S1 — Sphère",
                enonce: "La sphère de centre Ω(a ; b ; c) et de rayon r > 0 est l'ensemble des points M tels que ΩM = r."
            },
            {
                nom: "S2 — Distance",
                enonce: "ΩM² = (x − a)² + (y − b)² + (z − c)²."
            }
        ],
        conclusion: "Un point M(x ; y ; z) est sur la sphère si et seulement si (x − a)² + (y − b)² + (z − c)² = r². Réciproquement, x² + y² + z² + αx + βy + γz + δ = 0 se ramène à cette forme en complétant les carrés ; c'est une sphère si le membre de droite obtenu est strictement positif. L'intersection avec un plan est un cercle, un point ou l'ensemble vide."
    },
    formulas: [
      {
        text: "1. (x−a)² + (y−b)² + (z−c)² = r², sphère de centre (a;b;c) et de rayon r",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20g%C3%A9om%C3%A9trie%20espace%20%28x%E2%88%92a%29%C2%B2%20%2B%20%28y%E2%88%92b%29%C2%B2%20%2B%20%28z%E2%88%92c%29%C2%B2%20%3D%20r%C2%B2%2C%20sph%C3%A8re%20de%20centre%20%28a%3Bb%3Bc%29%20et%20de%20rayon%20r%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette équation généralise à l'espace l'équation du cercle dans le plan, en ajoutant une troisième coordonnée : elle traduit que tout point M reste à distance r du centre Ω.",
    details: "L'équation découle directement de la formule de distance entre deux points de l'espace. Cette notion s'appuie sur : le théorème de Pythagore généralisé à l'espace (Pythagore dans l'espace). Par exemple, la sphère de centre (0;0;0) et de rayon 3 a pour équation x²+y²+z²=9.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Sphère de centre (1;−2;0) et de rayon 5 : (x−1)²+(y+2)²+z²=25."
      },
      {
        terme: "Exemple 2",
        definition: "Vérifier que le point (1;0;0) appartient à la sphère x²+y²+z²=1 : 1+0+0=1, c'est bien vérifié."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Équation cartésienne d'une sphère",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quation%20cart%C3%A9sienne%20d%27une%20sph%C3%A8re%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Équation cartésienne d'une sphère",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quation%20cart%C3%A9sienne%20d%27une%20sph%C3%A8re%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "map",
        text: "Modéliser une zone de couverture 3D (GPS, antenne)"
      },
      {
        icon: "target",
        text: "Intersection d'une sphère et d'un plan ou d'une droite"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Intersection%20d%27une%20sph%C3%A8re%20et%20d%27un%20plan%20%28cercle%20ou%20point%20ou%20vide%29\" target=\"_blank\" rel=\"noopener noreferrer\">Intersection d'une sphère et d'un plan (cercle ou point ou vide)</a>",
      "<a href=\"https://www.google.com/search?q=Distance%20d%27un%20point%20%C3%A0%20une%20sph%C3%A8re\" target=\"_blank\" rel=\"noopener noreferrer\">Distance d'un point à une sphère</a>"
    ]
  },
  "ecole:1243": {
    title: "Inégalité de Jensen",
    definition: "Pour une fonction convexe f, la valeur de f en une moyenne pondérée de points est toujours inférieure ou égale à la moyenne pondérée des valeurs de f en ces points.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ ; f est une fonction convexe sur un intervalle I.",
        axiomes: [
            {
                nom: "C1 — Convexité",
                enonce: "f(tx + (1 − t)y) ≤ t·f(x) + (1 − t)·f(y) pour x, y ∈ I et t ∈ [0 ; 1]."
            },
            {
                nom: "C2 — Récurrence",
                enonce: "Une propriété vraie au rang 2 et héréditaire est vraie pour tout n ≥ 2."
            }
        ],
        conclusion: "Inégalité de Jensen : pour des points x₁, …, xₙ de I et des poids λᵢ ≥ 0 de somme 1, f(λ₁x₁ + … + λₙxₙ) ≤ λ₁f(x₁) + … + λₙf(xₙ). Preuve par récurrence sur n : on isole xₙ et on applique C1 à la combinaison des n − 1 premiers points. Si f est strictement convexe, l'égalité n'a lieu que si tous les xᵢ de poids non nul sont égaux. Avec ln concave, on retrouve l'inégalité arithmético-géométrique."
    },
    formulas: [
      {
        text: "1. f convexe ⟹ f(moyenne pondérée des xᵢ) ≤ moyenne pondérée des f(xᵢ)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20in%C3%A9galit%C3%A9s%20convexit%C3%A9%20f%20convexe%20%E2%9F%B9%20f%28moyenne%20pond%C3%A9r%C3%A9e%20des%20x%E1%B5%A2%29%20%E2%89%A4%20moyenne%20pond%C3%A9r%C3%A9e%20des%20f%28x%E1%B5%A2%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette inégalité généralise à un nombre quelconque de points l'inégalité de convexité vue en cours (le graphe d'une fonction convexe est toujours en dessous de ses cordes).",
    details: "L'inégalité de Jensen englobe de nombreuses inégalités classiques comme AM-GM comme cas particuliers, en choisissant f=−ln par exemple. Cette notion s'appuie sur : la convexité d'une fonction, étudiée à l'aide de f''. Par exemple, avec f(x)=x² (convexe), Jensen redonne l'inégalité entre moyenne des carrés et carré de la moyenne.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=x² convexe : la moyenne des carrés est toujours ≥ le carré de la moyenne."
      },
      {
        terme: "Exemple 2",
        definition: "f=−ln (convexe) appliquée à Jensen redonne exactement l'inégalité AM-GM."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Inégalité de Jensen",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20de%20Jensen%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Inégalité de Jensen",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20de%20Jensen%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Démontrer des inégalités de type olympiade"
      },
      {
        icon: "target",
        text: "Théorie de l'information et probabilités (entropie)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20de%20Jensen%20par%20r%C3%A9currence%20%C3%A0%20partir%20du%20cas%20%C3%A0%202%20points\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration de Jensen par récurrence à partir du cas à 2 points</a>",
      "<a href=\"https://www.google.com/search?q=Retrouver%20AM-GM%20comme%20cas%20particulier%20de%20Jensen\" target=\"_blank\" rel=\"noopener noreferrer\">Retrouver AM-GM comme cas particulier de Jensen</a>"
    ]
  },
  "ecole:1244": {
    title: "Équations fonctionnelles classiques (équation de Cauchy)",
    definition: "Une équation fonctionnelle est une équation dont l'inconnue est une fonction. Les équations de Cauchy relient la valeur de f en une somme (ou un produit) aux valeurs de f en chaque terme.",
    definition_axiomatique: {
        cadre: "On cherche les fonctions f de ℝ dans ℝ qui vérifient l'équation de Cauchy : f(x + y) = f(x) + f(y) pour tous réels x et y.",
        axiomes: [
            {
                nom: "C1 — Additivité",
                enonce: "f(x + y) = f(x) + f(y)."
            },
            {
                nom: "C2 — Régularité",
                enonce: "f est continue en un point (ou monotone, ou bornée sur un intervalle)."
            }
        ],
        conclusion: "C1 donne f(0) = 0, f(−x) = −f(x), f(nx) = n f(x) puis f(q) = q·f(1) pour tout rationnel q. Avec C2, l'extension à ℝ par densité de ℚ donne f(x) = ax, où a = f(1). Sans C2, il existe des solutions non linéaires, construites avec l'axiome du choix (base de Hamel) : une régularité est indispensable."
    },
    formulas: [
      {
        text: "1. f(x+y) = f(x) + f(y), équation de Cauchy additive",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20%C3%A9quations%20fonctionnelles%20f%28x%2By%29%20%3D%20f%28x%29%20%2B%20f%28y%29%2C%20%C3%A9quation%20de%20Cauchy%20additive%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. f(xy) = f(x)f(y), équation de Cauchy multiplicative",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20%C3%A9quations%20fonctionnelles%20f%28xy%29%20%3D%20f%28x%29f%28y%29%2C%20%C3%A9quation%20de%20Cauchy%20multiplicative%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Résoudre une équation fonctionnelle consiste à trouver toutes les fonctions qui la vérifient, en général en testant des valeurs particulières (0, 1, x=y) pour en déduire des propriétés.",
    details: "Sous des hypothèses de régularité (continuité par exemple), la seule solution de f(x+y)=f(x)+f(y) est f(x)=ax (fonction linéaire). Cette notion s'appuie sur : le raisonnement par substitution de valeurs particulières. Par exemple, en posant x=y=0 dans f(x+y)=f(x)+f(y), on obtient f(0)=2f(0), donc f(0)=0.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "f(x)=ax vérifie f(x+y)=a(x+y)=ax+ay=f(x)+f(y) pour tout réel a."
      },
      {
        terme: "Exemple 2",
        definition: "En posant x=y dans f(xy)=f(x)f(y), on obtient f(x²)=f(x)², ce qui montre que f(x)≥0 pour tout x qui est un carré."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Équations fonctionnelles classiques (équation de Cauchy)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quations%20fonctionnelles%20classiques%20%28%C3%A9quation%20de%20Cauchy%29%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Équations fonctionnelles classiques (équation de Cauchy)",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=%C3%89quations%20fonctionnelles%20classiques%20%28%C3%A9quation%20de%20Cauchy%29%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Problèmes classiques de type olympiade"
      },
      {
        icon: "target",
        text: "Caractérisation des fonctions linéaires ou exponentielles"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20compl%C3%A8te%20pour%20f%20continue%20%28th%C3%A9or%C3%A8me%20de%20Cauchy%29\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration complète pour f continue (théorème de Cauchy)</a>",
      "<a href=\"https://www.google.com/search?q=Solutions%20pathologiques%20sans%20hypoth%C3%A8se%20de%20continuit%C3%A9%20%28axiome%20du%20choix%29\" target=\"_blank\" rel=\"noopener noreferrer\">Solutions pathologiques sans hypothèse de continuité (axiome du choix)</a>",
      "<a href=\"https://www.google.com/search?q=%C3%89quation%20de%20Cauchy%20multiplicative%20et%20fonctions%20exponentielles\" target=\"_blank\" rel=\"noopener noreferrer\">Équation de Cauchy multiplicative et fonctions exponentielles</a>"
    ]
  },
  "ecole:1245": {
    title: "Invariants et monovariants dans un problème",
    definition: "Un invariant est une quantité qui reste inchangée au cours d'un processus ou d'une transformation ; un monovariant est une quantité qui évolue toujours dans le même sens (croît ou décroît strictement), ce qui garantit qu'un processus s'arrête.",
    definition_axiomatique: {
        cadre: "On étudie un système qui évolue par étapes successives (opérations sur un tableau, une configuration, des nombres).",
        axiomes: [
            {
                nom: "I1 — Invariant",
                enonce: "Un invariant est une quantité I(état) qui ne change pas à chaque étape."
            },
            {
                nom: "I2 — Monovariant",
                enonce: "Un monovariant est une quantité M(état) à valeurs entières, ≥ 0, qui varie strictement (par exemple diminue) à chaque étape."
            },
            {
                nom: "I3 — Bon ordre",
                enonce: "Toute suite strictement décroissante d'entiers naturels est finie."
            }
        ],
        conclusion: "Un invariant montre qu'un état est inaccessible : si I(état initial) ≠ I(état visé), aucune suite d'étapes ne le relie à l'état visé. Un monovariant montre que le processus s'arrête (I3) et permet de borner le nombre d'étapes."
    },
    formulas: [
      {
        text: "1. Invariant : quantité I telle que I(après transformation) = I(avant transformation)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20invariants%20Invariant%20%3A%20quantit%C3%A9%20I%20telle%20que%20I%28apr%C3%A8s%20transformation%29%20%3D%20I%28avant%20transformation%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Monovariant : quantité M strictement croissante ou décroissante à chaque étape, bornée, donc le processus termine",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20invariants%20Monovariant%20%3A%20quantit%C3%A9%20M%20strictement%20croissante%20ou%20d%C3%A9croissante%20%C3%A0%20chaque%20%C3%A9tape%2C%20born%C3%A9e%2C%20donc%20le%20processus%20termine%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Repérer un invariant permet souvent de prouver qu'une configuration est impossible à atteindre ; repérer un monovariant permet de prouver qu'un processus (jeu, algorithme) se termine forcément.",
    details: "Ces deux notions, très utilisées en olympiades, reposent souvent sur des considérations de parité, de couleur, ou de somme. Cette notion s'appuie sur : le raisonnement par l'absurde et la récurrence. Par exemple, dans un jeu où l'on remplace deux nombres a,b par a+b−1, la quantité (somme des nombres) − (nombre de nombres) est un invariant.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Un problème de coloriage où la parité du nombre de cases noires est un invariant, prouvant qu'une configuration finale est impossible."
      },
      {
        terme: "Exemple 2",
        definition: "Un jeu où un nombre entier positif diminue strictement à chaque coup : c'est un monovariant, qui garantit que le jeu se termine."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Invariants et monovariants dans un problème",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Invariants%20et%20monovariants%20dans%20un%20probl%C3%A8me%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Invariants et monovariants dans un problème",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Invariants%20et%20monovariants%20dans%20un%20probl%C3%A8me%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Prouver l'impossibilité d'atteindre une configuration"
      },
      {
        icon: "target",
        text: "Prouver qu'un algorithme ou un jeu se termine"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Techniques%20classiques%20d%27invariants%20%28parit%C3%A9%2C%20couleur%2C%20somme%20modulo%20n%29\" target=\"_blank\" rel=\"noopener noreferrer\">Techniques classiques d'invariants (parité, couleur, somme modulo n)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20monovariants%20et%20d%C3%A9monstrations%20de%20terminaison\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre monovariants et démonstrations de terminaison</a>",
      "<a href=\"https://www.google.com/search?q=Sym%C3%A9trisation%20comme%20technique%20de%20r%C3%A9duction%20du%20probl%C3%A8me\" target=\"_blank\" rel=\"noopener noreferrer\">Symétrisation comme technique de réduction du problème</a>"
    ]
  },
  "ecole:1246": {
    title: "Descente infinie et équations diophantiennes",
    definition: "La méthode de descente infinie prouve qu'une équation n'a pas de solution entière positive en montrant que toute solution supposée en engendrerait une strictement plus petite, ce qui est impossible indéfiniment. Une équation diophantienne est une équation dont on cherche les solutions entières.",
    definition_axiomatique: {
        cadre: "On travaille dans ℕ (axiomes de Peano, dont le bon ordre) : toute partie non vide de ℕ possède un plus petit élément.",
        axiomes: [
            {
                nom: "P1 — Bon ordre",
                enonce: "Toute partie non vide de ℕ possède un plus petit élément."
            },
            {
                nom: "P2 — Pas de descente infinie",
                enonce: "Il n'existe aucune suite strictement décroissante infinie d'entiers naturels."
            }
        ],
        conclusion: "Méthode : on suppose qu'une équation a des solutions en entiers positifs ; par P1, il en existe une de plus petite « taille » (par exemple x minimal) ; on en construit une plus petite, ce qui contredit le choix. Exemple : x² = 2y² n'a pas de solution en entiers strictement positifs, car x serait pair, x = 2x', puis y² = 2x'² : (y, x') est une solution plus petite.",
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
        text: "1. Équation diophantienne linéaire : ax + by = c a des solutions entières ssi pgcd(a,b) divise c",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20th%C3%A9orie%20des%20nombres%20%C3%89quation%20diophantienne%20lin%C3%A9aire%20%3A%20ax%20%2B%20by%20%3D%20c%20a%20des%20solutions%20enti%C3%A8res%20ssi%20pgcd%28a%2Cb%29%20divise%20c%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Principe de descente infinie : toute suite strictement décroissante d'entiers naturels est finie",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20th%C3%A9orie%20des%20nombres%20Principe%20de%20descente%20infinie%20%3A%20toute%20suite%20strictement%20d%C3%A9croissante%20d%27entiers%20naturels%20est%20finie%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "La descente infinie, utilisée par Fermat, s'appuie sur le fait qu'il n'existe pas de suite infinie strictement décroissante d'entiers naturels : si une solution en engendre toujours une plus petite, aucune solution ne peut exister.",
    details: "Ces deux techniques sont complémentaires : la descente infinie sert souvent à démontrer qu'une équation diophantienne n'a pas de solution non triviale. Cette notion s'appuie sur : le théorème de Bézout et la divisibilité. Par exemple, l'équation 6x+9y=4 n'a pas de solution entière car pgcd(6,9)=3 ne divise pas 4.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "3x+5y=1 a pour solution (x,y)=(2,−1), et toutes les solutions s'obtiennent en ajoutant des multiples de (5,−3)."
      },
      {
        terme: "Exemple 2",
        definition: "Démonstration par descente infinie que √2 est irrationnel, en supposant √2=p/q avec p,q entiers minimaux."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Descente infinie et équations diophantiennes",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Descente%20infinie%20et%20%C3%A9quations%20diophantiennes%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Descente infinie et équations diophantiennes",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Descente%20infinie%20et%20%C3%A9quations%20diophantiennes%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Résoudre des équations à solutions entières"
      },
      {
        icon: "target",
        text: "Démontrer l'absence de solution (irrationalité, impossibilité)"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Algorithme%20d%27Euclide%20%C3%A9tendu%20pour%20r%C3%A9soudre%20ax%2Bby%3Dc\" target=\"_blank\" rel=\"noopener noreferrer\">Algorithme d'Euclide étendu pour résoudre ax+by=c</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20dernier%20th%C3%A9or%C3%A8me%20de%20Fermat%20pour%20n%3D4%20par%20descente%20infinie\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du dernier théorème de Fermat pour n=4 par descente infinie</a>"
    ]
  },
  "ecole:1247": {
    title: "Principe des tiroirs, double comptage et inclusion-exclusion",
    definition: "Le principe des tiroirs (ou de Dirichlet) affirme que si l'on range plus d'objets que de tiroirs, au moins un tiroir contient plusieurs objets. Le double comptage consiste à compter une même quantité de deux façons différentes pour obtenir une égalité. L'inclusion-exclusion permet de compter une union d'ensembles en évitant les doubles comptages.",
    definition_axiomatique: {
        cadre: "On travaille avec des ensembles finis et leur nombre d'éléments (cardinal).",
        axiomes: [
            {
                nom: "T1 — Tiroirs",
                enonce: "Aucune application d'un ensemble de n + 1 éléments dans un ensemble de n éléments n'est injective."
            },
            {
                nom: "T2 — Double comptage",
                enonce: "Si R est une relation entre A et B, le nombre de couples (a, b) de R se calcule en sommant sur A ou sur B : Σ_a |{b : (a, b) ∈ R}| = Σ_b |{a : (a, b) ∈ R}|."
            },
            {
                nom: "T3 — Réunion",
                enonce: "|A ∪ B| = |A| + |B| − |A ∩ B|."
            }
        ],
        conclusion: "Le principe des tiroirs (T1) : si on range n + 1 objets dans n tiroirs, l'un des tiroirs en contient au moins deux ; plus généralement, si kn + 1 objets sont rangés dans n tiroirs, un tiroir en contient au moins k + 1. Le double comptage (T2) donne des identités en comptant de deux façons. T3 se généralise en la formule d'inclusion-exclusion."
    },
    formulas: [
      {
        text: "1. Principe des tiroirs : n objets dans k tiroirs (n>k) ⟹ un tiroir contient au moins ⌈n/k⌉ objets",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20combinatoire%20olympiade%20Principe%20des%20tiroirs%20%3A%20n%20objets%20dans%20k%20tiroirs%20%28n%3Ek%29%20%E2%9F%B9%20un%20tiroir%20contient%20au%20moins%20%E2%8C%88n/k%E2%8C%89%20objets%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Inclusion-exclusion (2 ensembles) : |A∪B| = |A|+|B|−|A∩B|",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20combinatoire%20olympiade%20Inclusion-exclusion%20%282%20ensembles%29%20%3A%20%7CA%E2%88%AAB%7C%20%3D%20%7CA%7C%2B%7CB%7C%E2%88%92%7CA%E2%88%A9B%7C%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Ces trois techniques de dénombrement, très utilisées en olympiades, permettent de prouver l'existence d'une configuration ou de compter exactement une quantité complexe sans énumération directe.",
    details: "Le principe des tiroirs prouve souvent l'existence d'un résultat sans le construire explicitement, tandis que l'inclusion-exclusion sert à des dénombrements précis. Cette notion s'appuie sur : les combinaisons C(n,k). Par exemple, parmi 13 personnes, deux au moins sont nées le même mois (12 tiroirs, 13 objets).",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Parmi 367 personnes, deux au moins ont la même date d'anniversaire (365 ou 366 jours possibles)."
      },
      {
        terme: "Exemple 2",
        definition: "Nombre d'entiers de 1 à 100 divisibles par 2 ou 3 : |A∪B| = 50+33−16 = 67 (double comptage des multiples de 6)."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Principe des tiroirs, double comptage et inclusion-exclusion",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Principe%20des%20tiroirs%2C%20double%20comptage%20et%20inclusion-exclusion%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Principe des tiroirs, double comptage et inclusion-exclusion",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Principe%20des%20tiroirs%2C%20double%20comptage%20et%20inclusion-exclusion%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Démontrer l'existence d'une configuration sans la construire"
      },
      {
        icon: "target",
        text: "Dénombrement précis d'unions d'ensembles"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20du%20principe%20des%20tiroirs%20%28version%20renforc%C3%A9e%29\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation du principe des tiroirs (version renforcée)</a>",
      "<a href=\"https://www.google.com/search?q=Formule%20d%27inclusion-exclusion%20pour%20n%20ensembles\" target=\"_blank\" rel=\"noopener noreferrer\">Formule d'inclusion-exclusion pour n ensembles</a>",
      "<a href=\"https://www.google.com/search?q=Exemples%20classiques%20de%20double%20comptage%20en%20combinatoire\" target=\"_blank\" rel=\"noopener noreferrer\">Exemples classiques de double comptage en combinatoire</a>"
    ]
  },
  "ecole:1248": {
    title: "Théorie des graphes pour olympiades",
    definition: "Un graphe est composé de sommets reliés par des arêtes. Le lemme des poignées de main relie le nombre d'arêtes à la somme des degrés des sommets, et le théorème de Ramsey garantit l'apparition inévitable de structures régulières dans un grand graphe colorié.",
    definition_axiomatique: {
        cadre: "Un graphe est un couple (V, E) formé d'un ensemble fini V de sommets et d'un ensemble E d'arêtes, chacune reliant deux sommets distincts.",
        axiomes: [
            {
                nom: "G1 — Graphe simple",
                enonce: "Chaque arête est une paire {u, v} de sommets distincts."
            },
            {
                nom: "G2 — Degré",
                enonce: "Le degré d(v) d'un sommet est le nombre d'arêtes qui le contiennent."
            },
            {
                nom: "G3 — Double comptage",
                enonce: "Le nombre de couples (v, e) avec v ∈ e se calcule en sommant sur les sommets ou sur les arêtes."
            }
        ],
        conclusion: "Lemme des poignées de main : Σ d(v) = 2|E| (chaque arête est comptée deux fois, G3). Le nombre de sommets de degré impair est donc pair. Un arbre à n sommets (graphe connexe sans cycle) a n − 1 arêtes."
    },
    formulas: [
      {
        text: "1. Lemme des poignées de main : Σ deg(v) = 2 × (nombre d'arêtes)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20graphes%20olympiade%20Lemme%20des%20poign%C3%A9es%20de%20main%20%3A%20%CE%A3%20deg%28v%29%20%3D%202%20%C3%97%20%28nombre%20d%27ar%C3%AAtes%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Ramsey R(3,3)=6 : parmi 6 personnes, il y a toujours 3 personnes se connaissant mutuellement ou 3 ne se connaissant pas",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20graphes%20olympiade%20Ramsey%20R%283%2C3%29%3D6%20%3A%20parmi%206%20personnes%2C%20il%20y%20a%20toujours%203%20personnes%20se%20connaissant%20mutuellement%20ou%203%20ne%20se%20connaissant%20pas%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Le lemme des poignées de main découle du fait que chaque arête est comptée deux fois (une fois pour chaque sommet qu'elle touche) ; le théorème de Ramsey illustre qu'un désordre total est impossible à partir d'une certaine taille.",
    details: "Ces résultats fondent l'usage des graphes pour modéliser des problèmes de connexité, de coloration ou de rencontres. Cette notion s'appuie sur : le dénombrement et les colorations. Par exemple, un graphe à 4 sommets tous reliés entre eux (graphe complet K4) a 6 arêtes, et la somme des degrés vaut 4×3=12=2×6.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Dans un graphe, le nombre de sommets de degré impair est toujours pair (conséquence directe du lemme des poignées de main)."
      },
      {
        terme: "Exemple 2",
        definition: "Coloration d'un graphe en 2 couleurs pour montrer l'existence d'un sous-graphe monochromatique (idée de base de Ramsey)."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Théorie des graphes pour olympiades",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Th%C3%A9orie%20des%20graphes%20pour%20olympiades%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Théorie des graphes pour olympiades",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Th%C3%A9orie%20des%20graphes%20pour%20olympiades%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Modéliser des réseaux de connaissances ou de connexions"
      },
      {
        icon: "target",
        text: "Problèmes de coloration et de connexité de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20lemme%20des%20poign%C3%A9es%20de%20main\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du lemme des poignées de main</a>",
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20%C3%A9l%C3%A9mentaire%20de%20R%283%2C3%29%3D6\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration élémentaire de R(3,3)=6</a>",
      "<a href=\"https://www.google.com/search?q=Graphes%20planaires%20et%20th%C3%A9or%C3%A8me%20des%20quatre%20couleurs\" target=\"_blank\" rel=\"noopener noreferrer\">Graphes planaires et théorème des quatre couleurs</a>"
    ]
  },
  "ecole:1249": {
    title: "Colorations et pavages : arguments d'invariant",
    definition: "De nombreux problèmes de pavage (recouvrir une surface par des pièces) ou de coloration se résolvent en trouvant un argument de coloriage : une coloration astucieuse qui révèle un invariant interdisant certaines configurations.",
    definition_axiomatique: {
        cadre: "On veut recouvrir une surface quadrillée avec des pièces, ou colorier ses cases.",
        axiomes: [
            {
                nom: "C1 — Coloration",
                enonce: "Une coloration est une application c des cases dans un ensemble de couleurs."
            },
            {
                nom: "C2 — Pièces",
                enonce: "Chaque pièce posée recouvre un nombre fixé de cases de chaque couleur, quelle que soit sa position."
            },
            {
                nom: "C3 — Comptage",
                enonce: "Si une surface est pavée par k pièces disjointes, le nombre de cases de chaque couleur est k fois celui d'une pièce."
            }
        ],
        conclusion: "Si les nombres de cases de chaque couleur ne sont pas dans les proportions imposées par C3, aucun pavage n'existe : un échiquier 8 × 8 privé de deux coins opposés (32 cases d'une couleur, 30 de l'autre) ne se pave pas par dominos, car chaque domino recouvre une case de chaque couleur. La coloration est un invariant du pavage."
    },
    formulas: [
      {
        text: "1. Argument de l'échiquier : colorier en noir et blanc pour comparer le nombre de cases de chaque couleur couvertes",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20colorations%20pavages%20Argument%20de%20l%27%C3%A9chiquier%20%3A%20colorier%20en%20noir%20et%20blanc%20pour%20comparer%20le%20nombre%20de%20cases%20de%20chaque%20couleur%20couvertes%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Un pavage par dominos d'un échiquier 8×8 amputé de deux coins de même couleur est impossible (invariant de parité/couleur)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20colorations%20pavages%20Un%20pavage%20par%20dominos%20d%27un%20%C3%A9chiquier%208%C3%978%20amput%C3%A9%20de%20deux%20coins%20de%20m%C3%AAme%20couleur%20est%20impossible%20%28invariant%20de%20parit%C3%A9/couleur%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "L'idée est de choisir une coloration (souvent en 2 ou 3 couleurs) telle que chaque pièce du pavage recouvre toujours le même nombre de cases de chaque couleur : si les comptes ne correspondent pas, le pavage est impossible.",
    details: "Cette technique transforme un problème géométrique de recouvrement en un simple argument de comptage. Cette notion s'appuie sur : les invariants et la parité. Par exemple, un échiquier 8×8 privé de deux coins opposés (de même couleur) ne peut pas être pavé par des dominos, car chaque domino couvre une case noire et une case blanche, mais il resterait 32 cases d'une couleur contre 30 de l'autre.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Échiquier 8×8 privé de deux coins opposés : impossible à paver par des dominos (30 cases d'une couleur, 32 de l'autre)."
      },
      {
        terme: "Exemple 2",
        definition: "Pavage d'un rectangle par des polyominos en L : utiliser une coloration en 4 couleurs pour montrer certaines impossibilités."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Colorations et pavages : arguments d'invariant",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Colorations%20et%20pavages%20%3A%20arguments%20d%27invariant%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Colorations et pavages : arguments d'invariant",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Colorations%20et%20pavages%20%3A%20arguments%20d%27invariant%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Prouver l'impossibilité d'un pavage"
      },
      {
        icon: "target",
        text: "Problèmes de coloration de type olympiade"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Colorations%20%C3%A0%203%20couleurs%20et%20pavages%20par%20triominos\" target=\"_blank\" rel=\"noopener noreferrer\">Colorations à 3 couleurs et pavages par triominos</a>",
      "<a href=\"https://www.google.com/search?q=Invariants%20de%20parit%C3%A9%20dans%20les%20jeux%20de%20pavage\" target=\"_blank\" rel=\"noopener noreferrer\">Invariants de parité dans les jeux de pavage</a>"
    ]
  },
  "ecole:1250": {
    title: "Inégalité de réarrangement",
    definition: "Pour deux suites de nombres réels, la somme des produits terme à terme est maximale quand les deux suites sont ordonnées dans le même sens, et minimale quand elles sont ordonnées en sens opposés.",
    definition_axiomatique: {
        cadre: "On travaille dans ℝ, corps totalement ordonné : deux suites de réels a₁ ≤ … ≤ aₙ et b₁ ≤ … ≤ bₙ, et σ est une permutation de {1, …, n}.",
        axiomes: [
            {
                nom: "O1 — Signe d'un produit",
                enonce: "Un produit de deux réels positifs ou nuls est positif ou nul."
            },
            {
                nom: "O2 — Échange",
                enonce: "Si i < j, (aⱼ − aᵢ)(bⱼ − bᵢ) ≥ 0, c'est-à-dire aᵢbᵢ + aⱼbⱼ ≥ aᵢbⱼ + aⱼbᵢ."
            }
        ],
        conclusion: "Inégalité de réarrangement : la somme Σ aᵢb_{σ(i)} est maximale pour σ = id (suites rangées dans le même ordre) et minimale quand les suites sont rangées en ordres opposés. Preuve : si σ n'est pas l'identité, un échange de deux termes désordonnés augmente la somme (O2), et on itère."
    },
    formulas: [
      {
        text: "1. Pour a₁≤...≤aₙ et b₁≤...≤bₙ : Σ aᵢb_{σ(i)} est maximale pour σ=identité, minimale pour σ qui inverse l'ordre",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20in%C3%A9galit%C3%A9s%20Pour%20a%E2%82%81%E2%89%A4...%E2%89%A4a%E2%82%99%20et%20b%E2%82%81%E2%89%A4...%E2%89%A4b%E2%82%99%20%3A%20%CE%A3%20a%E1%B5%A2b_%7B%CF%83%28i%29%7D%20est%20maximale%20pour%20%CF%83%3Didentit%C3%A9%2C%20minimale%20pour%20%CF%83%20qui%20inverse%20l%27ordre%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Intuitivement, associer les grands termes d'une suite aux grands termes de l'autre (« dans le même sens ») donne toujours la plus grande somme possible de produits.",
    details: "Cette inégalité généralise et permet de retrouver rapidement AM-GM et Cauchy-Schwarz dans certains cas particuliers. Cette notion s'appuie sur : le raisonnement par échange (si un réarrangement diminue la somme, on peut toujours l'améliorer). Par exemple, pour (1,2,3) et (4,5,6), la somme maximale des produits est 1×4+2×5+3×6=32, contre 1×6+2×5+3×4=28 si on inverse l'ordre.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "a=(1,2,3), b=(4,5,6) : somme maximale (même ordre) = 4+10+18=32."
      },
      {
        terme: "Exemple 2",
        definition: "Même exemple, ordre inversé : 6+10+12=28, qui est bien inférieur à 32."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Inégalité de réarrangement",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20de%20r%C3%A9arrangement%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Inégalité de réarrangement",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=In%C3%A9galit%C3%A9%20de%20r%C3%A9arrangement%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Démontrer des inégalités de type olympiade"
      },
      {
        icon: "target",
        text: "Optimiser une somme de produits sous contrainte d'ordre"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20par%20%C3%A9change%20de%20deux%20termes\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration par échange de deux termes</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20l%27in%C3%A9galit%C3%A9%20de%20Tchebychev%20pour%20les%20sommes\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec l'inégalité de Tchebychev pour les sommes</a>"
    ]
  },
  "ecole:1251": {
    title: "Loi géométrique",
    definition: "La loi géométrique modélise le nombre d'essais nécessaires pour obtenir un premier succès, dans une répétition d'épreuves indépendantes de même probabilité de succès p.",
    definition_axiomatique: {
        cadre: "On considère une variable aléatoire X à valeurs dans ℕ* (le rang du premier succès) d'une suite d'épreuves indépendantes.",
        axiomes: [
            {
                nom: "G1 — Valeurs",
                enonce: "X prend ses valeurs dans ℕ* et P(X > 0) = 1."
            },
            {
                nom: "G2 — Absence de mémoire",
                enonce: "Pour tous entiers n, m ≥ 0, P(X > n + m | X > n) = P(X > m)."
            }
        ],
        conclusion: "Soit q = P(X > 1) et S(n) = P(X > n). G2 donne S(n + m) = S(n)S(m), donc S(n) = qⁿ. Alors P(X = k) = S(k − 1) − S(k) = qᵏ⁻¹(1 − q) : c'est la loi géométrique de paramètre p = 1 − q. Elle a pour espérance 1/p, et c'est la seule loi sur ℕ* sans mémoire.",
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
        text: "1. P(X=k) = (1−p)^(k−1) × p, pour k ≥ 1",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20probabilit%C3%A9s%20P%28X%3Dk%29%20%3D%20%281%E2%88%92p%29%5E%28k%E2%88%921%29%20%C3%97%20p%2C%20pour%20k%20%E2%89%A5%201%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. E(X) = 1/p",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20probabilit%C3%A9s%20E%28X%29%20%3D%201/p%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Cette loi traduit qu'il faut échouer (k−1) fois avant de réussir à la k-ième tentative, chaque essai étant indépendant des précédents.",
    details: "La loi géométrique est dite « sans mémoire » : la probabilité d'attendre encore un certain temps ne dépend pas du temps déjà écoulé. Cette notion s'appuie sur : les épreuves de Bernoulli répétées et indépendantes. Par exemple, pour p=1/6 (lancer d'un dé jusqu'à obtenir un 6), l'espérance du nombre de lancers est E(X)=6.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "p=1/2 (pile ou face) : P(X=3) = (1/2)²×(1/2) = 1/8, probabilité d'obtenir le premier pile au 3e lancer."
      },
      {
        terme: "Exemple 2",
        definition: "E(X)=1/p : pour p=0,1 (10% de chance de succès), il faut en moyenne 10 essais pour réussir."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Loi géométrique",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Loi%20g%C3%A9om%C3%A9trique%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Loi géométrique",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Loi%20g%C3%A9om%C3%A9trique%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "dice",
        text: "Nombre d'essais avant un premier succès (jeux, contrôle qualité)"
      },
      {
        icon: "chart",
        text: "Modélisation de temps d'attente discrets"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Propri%C3%A9t%C3%A9%20d%27absence%20de%20m%C3%A9moire%20de%20la%20loi%20g%C3%A9om%C3%A9trique\" target=\"_blank\" rel=\"noopener noreferrer\">Propriété d'absence de mémoire de la loi géométrique</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20avec%20la%20loi%20exponentielle%20%28son%20analogue%20continu%29\" target=\"_blank\" rel=\"noopener noreferrer\">Lien avec la loi exponentielle (son analogue continu)</a>"
    ]
  },
  "ecole:1252": {
    title: "Arithmétique pour olympiades : congruences, PGCD/PPCM et petit théorème de Fermat",
    definition: "Les problèmes d'arithmétique de type olympiade combinent souvent congruences, PGCD/PPCM et le petit théorème de Fermat pour étudier la divisibilité de grandes expressions.",
    definition_axiomatique: {
        cadre: "On travaille dans ℤ avec les congruences, le PGCD et le PPCM.",
        axiomes: [
            {
                nom: "A1 — Congruences",
                enonce: "La congruence modulo n est compatible avec l'addition et la multiplication."
            },
            {
                nom: "A2 — Bézout",
                enonce: "Si d = pgcd(a, b), il existe des entiers u et v tels que au + bv = d."
            },
            {
                nom: "A3 — Petit théorème de Fermat",
                enonce: "Si p est premier et p ne divise pas a, alors a^{p−1} ≡ 1 (mod p)."
            }
        ],
        conclusion: "Ces outils se combinent : pgcd(a, b)·ppcm(a, b) = ab ; l'équation ax ≡ 1 (mod n) a une solution si et seulement si pgcd(a, n) = 1 (A2) ; pour p premier, aᵖ ≡ a (mod p) pour tout a (A3). On raisonne modulo des entiers bien choisis pour prouver qu'une équation n'a pas de solution ou pour calculer des restes.",
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
        text: "1. a ≡ b (mod n) ⟺ n divise (a−b)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20arithm%C3%A9tique%20olympiade%20a%20%E2%89%A1%20b%20%28mod%20n%29%20%E2%9F%BA%20n%20divise%20%28a%E2%88%92b%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. PGCD(a,b) × PPCM(a,b) = a × b",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20arithm%C3%A9tique%20olympiade%20PGCD%28a%2Cb%29%20%C3%97%20PPCM%28a%2Cb%29%20%3D%20a%20%C3%97%20b%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "3. Petit théorème de Fermat : si p est premier et p ne divise pas a, alors aᵖ⁻¹ ≡ 1 (mod p)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20arithm%C3%A9tique%20olympiade%20Petit%20th%C3%A9or%C3%A8me%20de%20Fermat%20%3A%20si%20p%20est%20premier%20et%20p%20ne%20divise%20pas%20a%2C%20alors%20a%E1%B5%96%E2%81%BB%C2%B9%20%E2%89%A1%201%20%28mod%20p%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Le petit théorème de Fermat permet de réduire instantanément de très grandes puissances modulo un nombre premier, un outil décisif dans les problèmes de divisibilité.",
    details: "Ces trois outils se combinent fréquemment : on utilise les congruences pour formuler le problème, le PGCD/PPCM pour le simplifier, et Fermat pour calculer des puissances modulo un nombre premier. Cette notion s'appuie sur : la division euclidienne et les nombres premiers. Par exemple, pour calculer 2¹⁰⁰ mod 7 (7 premier), Fermat donne 2⁶≡1 (mod 7), donc 2¹⁰⁰=2^(6×16+4)≡2⁴≡16≡2 (mod 7).",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "PGCD(12,18)=6 et PPCM(12,18)=36, et bien 6×36=216=12×18."
      },
      {
        terme: "Exemple 2",
        definition: "Montrer que n⁷−n est toujours divisible par 7 en utilisant le petit théorème de Fermat (7 premier)."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Arithmétique pour olympiades : congruences, PGCD/PPCM et petit théorème de Fermat",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Arithm%C3%A9tique%20pour%20olympiades%20%3A%20congruences%2C%20PGCD/PPCM%20et%20petit%20th%C3%A9or%C3%A8me%20de%20Fermat%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Arithmétique pour olympiades : congruences, PGCD/PPCM et petit théorème de Fermat",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Arithm%C3%A9tique%20pour%20olympiades%20%3A%20congruences%2C%20PGCD/PPCM%20et%20petit%20th%C3%A9or%C3%A8me%20de%20Fermat%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "research",
        text: "Problèmes de divisibilité de type olympiade"
      },
      {
        icon: "computer",
        text: "Fondements théoriques de la cryptographie"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=D%C3%A9monstration%20du%20petit%20th%C3%A9or%C3%A8me%20de%20Fermat\" target=\"_blank\" rel=\"noopener noreferrer\">Démonstration du petit théorème de Fermat</a>",
      "<a href=\"https://www.google.com/search?q=Ordre%20multiplicatif%20d%27un%20entier%20modulo%20n%20et%20diviseurs%20de%20p%E2%88%921\" target=\"_blank\" rel=\"noopener noreferrer\">Ordre multiplicatif d'un entier modulo n et diviseurs de p−1</a>",
      "<a href=\"https://www.google.com/search?q=G%C3%A9n%C3%A9ralisation%20par%20le%20th%C3%A9or%C3%A8me%20d%27Euler%20%28%CF%86%28n%29%29\" target=\"_blank\" rel=\"noopener noreferrer\">Généralisation par le théorème d'Euler (φ(n))</a>"
    ]
  },
  "ecole:1253": {
    title: "Arrangements, combinaisons et binôme de Newton",
    definition: "Un arrangement compte le nombre de façons de choisir k éléments parmi n en tenant compte de l'ordre ; une combinaison compte le nombre de façons de les choisir sans tenir compte de l'ordre.",
    definition_axiomatique: {
        cadre: "On dénombre des ensembles finis : le cardinal |A| est le nombre d'éléments de A.",
        axiomes: [
            {
                nom: "D1 — Principe additif",
                enonce: "Si A et B sont disjoints, |A ∪ B| = |A| + |B|."
            },
            {
                nom: "D2 — Principe multiplicatif",
                enonce: "|A × B| = |A|·|B| : on effectue un choix en deux étapes indépendantes."
            },
            {
                nom: "D3 — Bijection",
                enonce: "Deux ensembles en bijection ont le même cardinal."
            }
        ],
        conclusion: "Le nombre de permutations de n éléments est n! (D2) ; le nombre d'arrangements de k éléments parmi n (avec ordre) est n!/(n − k)! ; le nombre de combinaisons C(n, k) = n!/(k!(n − k)!) (sans ordre, D3 : chaque combinaison correspond à k! arrangements). On a C(n, k) = C(n − 1, k − 1) + C(n − 1, k) (D1) et (a + b)ⁿ = Σ C(n, k)aᵏbⁿ⁻ᵏ, formule du binôme de Newton."
    },
    formulas: [
      {
        text: "1. Arrangements : A(n,k) = n! / (n−k)!",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20combinatoire%20Arrangements%20%3A%20A%28n%2Ck%29%20%3D%20n%21%20/%20%28n%E2%88%92k%29%21%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "2. Combinaisons : C(n,k) = n! / (k!(n−k)!)",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20combinatoire%20Combinaisons%20%3A%20C%28n%2Ck%29%20%3D%20n%21%20/%20%28k%21%28n%E2%88%92k%29%21%29%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      },
      {
        text: "3. Binôme de Newton : (x+y)ⁿ = Σₖ C(n,k) xⁿ⁻ᵏyᵏ",
        images: "https://www.google.com/search?tbm=isch&q=sch%C3%A9ma%20Tle%20combinatoire%20Bin%C3%B4me%20de%20Newton%20%3A%20%28x%2By%29%E2%81%BF%20%3D%20%CE%A3%E2%82%96%20C%28n%2Ck%29%20x%E2%81%BF%E2%81%BB%E1%B5%8Fy%E1%B5%8F%20-site%3Afacebook.com%20-site%3Ainstagram.com%20-site%3Atwitter.com%20-site%3Ax.com%20-site%3Atiktok.com%20-site%3Apinterest.com%20-site%3Alinkedin.com%20-site%3Areddit.com%20-site%3Asnapchat.com%20-site%3Athreads.net"
      }
    ],
    explication_formules: "Le binôme de Newton généralise le développement de (x+y)² en utilisant les coefficients C(n,k), qui comptent aussi le nombre de chemins dans le triangle de Pascal.",
    details: "Ces formules de dénombrement sont à la base de toute la combinatoire et des probabilités discrètes. Cette notion s'appuie sur : la factorielle n!. Par exemple, C(5,2)=10 correspond au nombre de façons de choisir 2 éléments parmi 5, et (x+y)³ = x³+3x²y+3xy²+y³.",
    sous_points: [
      {
        terme: "Exemple 1",
        definition: "Nombre de mains de 5 cartes parmi 32 : C(32,5) = 201 376."
      },
      {
        terme: "Exemple 2",
        definition: "(x+y)⁴ = x⁴+4x³y+6x²y²+4xy³+y⁴, coefficients lus dans le triangle de Pascal."
      }
    ],
    videos: {
      intro: "Recherche vidéo (YouTube) sur cette notion — aucune vidéo francophone dédiée identifiée à ce jour pour ce théorème avancé ; lien de recherche fourni à défaut.",
      cours: {
        title: "Rechercher une vidéo de cours sur : Arrangements, combinaisons et binôme de Newton",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Arrangements%2C%20combinaisons%20et%20bin%C3%B4me%20de%20Newton%20math%C3%A9matiques%20cours",
        lang: "fr"
      },
      methode: {
        title: "Rechercher une vidéo d'application sur : Arrangements, combinaisons et binôme de Newton",
        channel: "YouTube (recherche)",
        url: "https://www.youtube.com/results?search_query=Arrangements%2C%20combinaisons%20et%20bin%C3%B4me%20de%20Newton%20exercice%20application",
        lang: "fr"
      }
    },
    applications_list: [
      {
        icon: "chart",
        text: "Calcul de probabilités dans un schéma de Bernoulli (loi binomiale)"
      },
      {
        icon: "research",
        text: "Dénombrement de configurations en combinatoire"
      }
    ],
    approfondissements: [
      "<a href=\"https://www.google.com/search?q=Triangle%20de%20Pascal%20et%20relation%20de%20Pascal%20C%28n%2Ck%29%3DC%28n-1%2Ck-1%29%2BC%28n-1%2Ck%29\" target=\"_blank\" rel=\"noopener noreferrer\">Triangle de Pascal et relation de Pascal C(n,k)=C(n-1,k-1)+C(n-1,k)</a>",
      "<a href=\"https://www.google.com/search?q=Lien%20entre%20le%20bin%C3%B4me%20de%20Newton%20et%20la%20loi%20binomiale\" target=\"_blank\" rel=\"noopener noreferrer\">Lien entre le binôme de Newton et la loi binomiale</a>"
    ]
  }
});
