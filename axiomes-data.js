// =====================================================================
// AXIOMES — données de la rubrique « Axiomes » (menu horizontal, avant « Spécialisation »)
// Version 1.1
// Sources : les PDF « Axiomes … » fournis (λ-calcul, Kolmogorov, corps ordonné complet, Euclide/Hilbert,
// groupe/anneau/corps, Peano, ZF/ZFC, premier ordre), les glossaires Tangente (Peano, choix, « Mais que
// sont les axiomes ? ») et le sujet INF423 (X2012) sur la logique du premier ordre.
// Les énoncés des PDF ont été relus : les points inexacts ou ambigus sont corrigés dans les fiches
// (postulat 5 d’Euclide, axiome d’incidence des plans de Hilbert, ZF « constructive », etc.).
//
//   window.AXIOMES_INTRO  : encart « Qu’est-ce qu’un axiome ? » de la page liste
//   window.AXIOMES_INDEX  : une ligne du tableau par système (domaine / système / exemple / slug)
//   window.AXIOMES_PAGES  : une page par slug
//       { titre, domaine, resume, sections:[ { titre, intro, axiomes:[{nom, texte, formule}],
//         liste:[…], tableau:{cols:[…], rows:[[…]]}, note, encart:{titre, texte} } ], liens:[[slug, label]] }
// Les champs « texte / intro / note / liste / cellules » acceptent un peu de HTML (<em>, <strong>) ;
// les « formule » sont du texte brut (échappé à l’affichage).
// =====================================================================
window.AXIOMES_INTRO = {
  titre: "Qu’est-ce qu’un axiome ?",
  paragraphes: [
    "Étymologiquement, le terme axiome vient du grec ancien <span class=\"ax-grec\">αξιωμα</span>, signifiant « digne d’être pris en considération et donc, évident en soi », qui dérive lui-même de l’adjectif <span class=\"ax-grec\">αξιος</span>, signifiant « <span class=\"ax-grec\">digne</span> ». Il désigne une vérité indémontrable qui doit être admise. Toute démonstration part de prémisses : des propriétés déjà démontrées, ou des affirmations admises sans preuve. En remontant le fil de toutes les démonstrations d’une théorie, on aboutit forcément à un nombre fini de points de départ non démontrés : les <strong>axiomes</strong>.",
    "Pour les Grecs, et jusqu’au début du XIX<sup>e</sup> siècle, un axiome était une vérité évidente en soi (les <em>Éléments</em> d’Euclide). Aujourd’hui, un axiome est une vérité première acceptée <em>à l’intérieur d’une théorie</em> : il postule l’existence d’objets non définis et de relations entre eux, sans valeur de vérité « morale ». L’ensemble des axiomes d’une théorie s’appelle une <strong>axiomatique</strong> ; sa seule contrainte est d’être <strong>non contradictoire</strong>.",
    "Le tableau ci-dessous recense les grands systèmes d’axiomes. Cliquez sur un système pour ouvrir sa page."
  ]
};

window.AXIOMES_INDEX = [
  { domaine: "Logique",     systeme: "Logique du premier ordre (axiomes logiques)", exemple: "Cadre commun de toutes les théories du premier ordre : groupes, Peano, ZFC…", slug: "logique-premier-ordre" },
  { domaine: "Ensembles",   systeme: "Zermelo–Fraenkel (ZF) et ZFC",               exemple: "Ensembles, ordinaux, cardinaux, construction de ℕ, ℤ, ℚ, ℝ", slug: "zf-zfc" },
  { domaine: "Ensembles",   systeme: "Axiome du choix",                             exemple: "Fonctions de choix, lemme de Zorn, bon ordre, bases d’espaces vectoriels", slug: "axiome-du-choix" },
  { domaine: "Arithmétique", systeme: "Axiomes de Peano (PA, Q)",                   exemple: "ℕ (modèle standard), modèles non standard, arithmétique de Robinson", slug: "peano" },
  { domaine: "Algèbre",     systeme: "Groupes, anneaux, corps",                     exemple: "ℤ, ℚ, ℝ, ℂ, ℤ/nℤ, corps finis 𝔽ₚ, matrices carrées", slug: "groupes-anneaux-corps" },
  { domaine: "Géométrie",   systeme: "Axiomes d’Euclide",                           exemple: "Plan et espace euclidiens, géométries non euclidiennes (négation du postulat 5)", slug: "euclide" },
  { domaine: "Géométrie",   systeme: "Axiomes de Hilbert",                          exemple: "Géométrie euclidienne rigoureuse (modèle : ℝ² et ℝ³)", slug: "hilbert" },
  { domaine: "Analyse",     systeme: "Corps ordonné complet",                       exemple: "ℝ, unique à isomorphisme près", slug: "corps-ordonne-complet" },
  { domaine: "Probabilités", systeme: "Axiomes de Kolmogorov",                      exemple: "Espaces probabilisés (Ω, A, P) : dés, lois usuelles, mesures", slug: "kolmogorov" },
  { domaine: "Calcul lambda", systeme: "Axiomes du λ-calcul (α, β, η)",             exemple: "Termes λ, fonctions calculables, langages fonctionnels", slug: "lambda-calcul" }
];

window.AXIOMES_PAGES = {

  // ---------------------------------------------------------------- LOGIQUE
  "logique-premier-ordre": {
    titre: "Logique du premier ordre",
    domaine: "Logique",
    resume: "Les axiomes du premier ordre ne sont pas des axiomes « mathématiques » comme ceux des groupes ou de ZFC : ce sont les <strong>axiomes logiques universels</strong> qui régissent les connecteurs, les quantificateurs et l’égalité, avec deux règles d’inférence (modus ponens, généralisation). Ils sont valables dans toute théorie du premier ordre.",
    sections: [
      {
        titre: "Deux catégories d’axiomes",
        liste: [
          "<strong>Axiomes logiques</strong> : valides dans n’importe quel univers de discours ; ils formalisent les règles de base du raisonnement (connecteurs, ∀, ∃, égalité).",
          "<strong>Axiomes non logiques</strong> : propres à une théorie, ils s’ajoutent par-dessus dans une signature choisie (symboles 0, S, +, ×, ∈…). En logique du premier ordre, on ne quantifie que sur des <em>individus</em> — jamais sur des ensembles ou des fonctions."
        ],
        note: "Ce qui suit est une présentation standard « à la Hilbert » (schémas d’axiomes) ; d’autres systèmes déductifs équivalents existent (déduction naturelle, calcul des séquents)."
      },
      {
        titre: "1. Axiomes pour les connecteurs",
        intro: "Ce sont des <em>schémas</em> : on peut y substituer n’importe quelles formules A, B, C. Avec le modus ponens, ces trois schémas suffisent à démontrer toutes les tautologies propositionnelles.",
        axiomes: [
          { nom: "Implication 1", texte: "Une hypothèse peut être ajoutée à toute conclusion.", formule: "A → (B → A)" },
          { nom: "Implication 2", texte: "Distributivité de l’implication.", formule: "(A → (B → C)) → ((A → B) → (A → C))" },
          { nom: "Négation", texte: "Contraposition (raisonnement par l’absurde).", formule: "(¬B → ¬A) → (A → B)" }
        ]
      },
      {
        titre: "2. Axiomes pour les quantificateurs",
        axiomes: [
          { nom: "Spécialisation (instanciation universelle)", texte: "Ce qui est vrai de tout x est vrai d’un terme t, à condition que t soit substituable à x dans A (pas de capture de variable).", formule: "∀x A(x) → A(t)" },
          { nom: "Distribution du ∀ sur →", texte: "Valable si x n’est pas libre dans A.", formule: "∀x (A → B) → (A → ∀x B)" }
        ]
      },
      {
        titre: "3. Axiomes pour l’égalité",
        intro: "L’égalité est un prédicat logique spécial : son interprétation est toujours l’identité dans les modèles.",
        axiomes: [
          { nom: "Réflexivité", texte: "Tout objet est égal à lui-même.", formule: "∀x (x = x)" },
          { nom: "Substitution fonctionnelle", texte: "Pour tout symbole de fonction f.", formule: "x = y → f(…, x, …) = f(…, y, …)" },
          { nom: "Substitution relationnelle", texte: "Pour tout symbole de relation R. Forme générale : x = y → (A(x) → A(y)).", formule: "x = y → (R(…, x, …) ↔ R(…, y, …))" }
        ]
      },
      {
        titre: "4. Règles d’inférence",
        intro: "Elles ne sont pas des axiomes, mais font partie du système déductif.",
        axiomes: [
          { nom: "Modus ponens", texte: "De A et de A → B, on déduit B.", formule: "A,  A → B  ⊢  B" },
          { nom: "Généralisation", texte: "De A, on déduit ∀x A, si x n’est libre dans aucune des hypothèses utilisées.", formule: "A  ⊢  ∀x A" }
        ]
      },
      {
        titre: "Ce que ces axiomes garantissent — et leurs limites",
        liste: [
          "<strong>Universalité</strong> : toute théorie du premier ordre (groupes, anneaux, corps, Peano, ZFC…) utilise exactement ces axiomes logiques ; seuls les axiomes non logiques changent.",
          "<strong>Complétude (Gödel)</strong> : ces axiomes et règles démontrent tout ce qui est vrai dans tous les modèles.",
          "<strong>Non-catégoricité (Löwenheim–Skolem)</strong> : une théorie du premier ordre sur une signature dénombrable qui a un modèle en a un dénombrable. Aucun système d’axiomes du premier ordre ne peut donc caractériser une structure infinie non dénombrable (comme ℝ) à isomorphisme près, et il existe toujours des <em>modèles non standard</em> (de ℕ par exemple).",
          "<strong>Incomplétude (Gödel)</strong> : dès qu’une théorie du premier ordre (récursivement axiomatisée) est assez riche pour faire de l’arithmétique, comme Peano, elle contient des énoncés vrais mais indémontrables."
        ]
      }
    ],
    liens: [["peano", "Axiomes de Peano"], ["zf-zfc", "ZF et ZFC"], ["corps-ordonne-complet", "Corps ordonné complet (ℝ n’est pas axiomatisable au premier ordre)"], ["groupes-anneaux-corps", "Groupes, anneaux, corps"]]
  },

  // ---------------------------------------------------------------- ZF / ZFC
  "zf-zfc": {
    titre: "Zermelo–Fraenkel (ZF) et ZFC",
    domaine: "Ensembles",
    resume: "ZF (Zermelo–Fraenkel) est le socle standard de la théorie des ensembles moderne ; ZFC = ZF + axiome du choix. Ce sont des théories du premier ordre dans le langage {∈}. Elles évitent les paradoxes de la théorie « naïve » (Russell) en n’autorisant que des définitions <em>restreintes</em>.",
    sections: [
      {
        titre: "Axiomes de ZF",
        intro: "Selon la présentation, on compte 8 ou 9 axiomes : l’axiome de l’ensemble vide est souvent omis car il se déduit de l’infini et de la séparation. La liste ci-dessous le conserve. Séparation et Remplacement sont des <em>schémas</em> : un axiome par formule φ.",
        axiomes: [
          { nom: "1. Extensionnalité", texte: "Deux ensembles ayant les mêmes éléments sont égaux.", formule: "∀x ∀y (∀z (z ∈ x ↔ z ∈ y) → x = y)" },
          { nom: "2. Ensemble vide", texte: "Il existe un ensemble sans élément.", formule: "∃x ∀y (y ∉ x)" },
          { nom: "3. Paire", texte: "Pour tous x, y, l’ensemble {x, y} existe.", formule: "∀x ∀y ∃z ∀w (w ∈ z ↔ (w = x ∨ w = y))" },
          { nom: "4. Réunion", texte: "Pour tout ensemble x, la réunion ⋃x de ses éléments existe.", formule: "∀x ∃u ∀z (z ∈ u ↔ ∃y (y ∈ x ∧ z ∈ y))" },
          { nom: "5. Parties", texte: "Pour tout ensemble x, l’ensemble 𝒫(x) de ses sous-ensembles existe.", formule: "∀x ∃p ∀y (y ∈ p ↔ y ⊆ x)" },
          { nom: "6. Séparation (schéma)", texte: "Pour tout ensemble x et toute propriété φ, les éléments de x qui vérifient φ forment un ensemble. Remplace la compréhension naïve.", formule: "∀x ∃y ∀z (z ∈ y ↔ (z ∈ x ∧ φ(z)))" },
          { nom: "7. Infini", texte: "Il existe un ensemble contenant ∅ et fermé sous y ↦ y ∪ {y} : il garantit l’existence de ℕ.", formule: "∃x (∅ ∈ x ∧ ∀y (y ∈ x → y ∪ {y} ∈ x))" },
          { nom: "8. Fondation (régularité)", texte: "Tout ensemble non vide a un élément minimal pour ∈ : pas de cycle d’appartenance.", formule: "∀x (x ≠ ∅ → ∃y ∈ x (y ∩ x = ∅))" },
          { nom: "9. Remplacement (schéma)", texte: "L’image d’un ensemble par une fonction définissable est un ensemble.", formule: "∀x (φ définit une fonction sur x) → ∃y (y = image de x)" }
        ]
      },
      {
        titre: "ZFC : l’axiome supplémentaire",
        axiomes: [
          { nom: "10. Choix", texte: "Toute famille d’ensembles non vides possède une fonction de choix. Voir la page dédiée.", formule: "∀A ∈ X (A ≠ ∅) ⟹ ∃f : X → ⋃X, ∀A ∈ X, f(A) ∈ A" }
        ]
      },
      {
        titre: "Rôle des axiomes",
        tableau: {
          cols: ["Axiome", "Rôle"],
          rows: [
            ["Extensionnalité", "Fixe l’identité des ensembles"],
            ["Séparation", "Remplace la compréhension naïve, évite le paradoxe de Russell"],
            ["Fondation", "Élimine les cycles ∈ et garantit la hiérarchie cumulative"],
            ["Remplacement", "Construit des ensembles très grands (indispensable pour les ordinaux transfinis)"],
            ["Infini", "Garantit l’existence de ℕ"],
            ["Choix", "Produits infinis, lemme de Zorn, bases de Hamel…"]
          ]
        }
      },
      {
        titre: "ZF contre ZFC",
        liste: [
          "<strong>ZF</strong> n’a pas l’axiome du choix. <strong>ZFC</strong> ajoute un axiome <em>non constructif</em> (il affirme l’existence d’une fonction sans la construire), mais indispensable à une grande part des mathématiques modernes (analyse fonctionnelle, algèbre, topologie).",
          "L’axiome du choix, comme l’hypothèse du continu, est <strong>indépendant de ZF</strong> : si ZF est cohérent, on ne peut ni le démontrer ni le réfuter (Gödel 1938 pour la cohérence, Cohen 1963 pour l’indépendance ; médaille Fields 1966).",
          "Séparation et Remplacement étant des schémas, ZF a une infinité d’axiomes."
        ],
        note: "La théorie naïve admettait que toute propriété définit un ensemble. Elle est contradictoire (Russell) : il existe des collections parfaitement définies qui ne sont pas des ensembles, comme « l’ensemble de tout ce qui n’est pas un chat »."
      }
    ],
    liens: [["axiome-du-choix", "Axiome du choix"], ["logique-premier-ordre", "Logique du premier ordre"], ["peano", "Axiomes de Peano"]]
  },

  // ---------------------------------------------------------------- CHOIX
  "axiome-du-choix": {
    titre: "Axiome du choix",
    domaine: "Ensembles",
    resume: "Pour tout ensemble X d’ensembles non vides, il existe une fonction f définie sur X telle que f(A) ∈ A pour chaque A de X. On peut donc choisir <em>simultanément</em> un représentant dans chaque ensemble, même si la famille est infinie et sans règle explicite de choix. Formulé par Zermelo en 1904.",
    sections: [
      {
        titre: "Énoncé",
        axiomes: [
          { nom: "Fonction de choix", texte: "Soit X un ensemble dont chaque élément est un ensemble non vide. Une fonction de choix sur X associe à chaque A ∈ X un élément f(A) de A.", formule: "∀A ∈ X, f(A) ∈ A" },
          { nom: "Axiome du choix", texte: "Une telle fonction existe pour tout X de cette forme. Il ne demande ni que les membres de X soient disjoints, ni l’unicité de f, ni une procédure de construction.", formule: "(∀A ∈ X, A ≠ ∅) ⟹ (∃f : X → ⋃X, ∀A ∈ X, f(A) ∈ A)" }
        ],
        note: "Ajouté à ZF, il donne ZFC. Son <em>indépendance</em> signifie que, si ZF est cohérent, il ne se démontre ni ne se réfute à partir de ZF seul."
      },
      {
        titre: "En clair",
        intro: "Imaginez plusieurs boîtes contenant chacune au moins un objet. Choisir un objet dans trois boîtes se fait l’un après l’autre. L’axiome autorise le même geste pour une collection infinie de boîtes, sans règle qui décrive chaque sélection. Il garantit l’existence de la fonction, pas le choix des valeurs."
      },
      {
        titre: "Exemple fini, pas à pas",
        intro: "Soit X = { A, B, C } avec A = {rouge, bleu}, B = {cercle, carré, triangle}, C = {1, 2}. On choisit f(A) = bleu, f(B) = carré, f(C) = 2. On vérifie trois appartenances : bleu ∈ A, carré ∈ B, 2 ∈ C.",
        note: "Cet exemple illustre la définition mais <strong>n’a pas besoin de l’axiome</strong> : trois choix successifs suffisent dans ZF. L’axiome intervient pour une famille arbitraire (infinie) sans règle explicite."
      },
      {
        titre: "Formes équivalentes (dans ZF)",
        liste: [
          "<strong>Lemme de Zorn</strong> : si toute chaîne d’un ensemble ordonné non vide a un majorant, il existe un élément maximal.",
          "<strong>Théorème du bon ordre</strong> (Zermelo) : tout ensemble peut être muni d’un bon ordre.",
          "<strong>Bases</strong> : tout espace vectoriel possède une base (base de Hamel).",
          "<strong>Produit cartésien</strong> : un produit d’ensembles non vides est non vide."
        ]
      },
      {
        titre: "Pièges et limites",
        liste: [
          "<strong>Existence sans recette</strong> : la fonction existe, mais on n’a pas d’algorithme pour calculer ses valeurs.",
          "<strong>Pas d’unicité</strong> : dès qu’un membre a au moins deux éléments, plusieurs fonctions de choix existent (dans l’exemple, remplacer bleu par rouge en donne une autre).",
          "<strong>Cas vide</strong> : si X = ∅, la fonction vide convient ; si ∅ ∈ X, aucune fonction de choix sur X n’existe.",
          "<strong>Bon ordre déjà donné</strong> : si la réunion des membres est déjà bien ordonnée, « prendre le premier élément de chaque membre » est une règle explicite — l’axiome n’est pas nécessaire.",
          "<strong>Indépendance ≠ contradiction</strong> : ZF, ZFC et ZF + non-choix décrivent des cadres différents ; il faut annoncer le cadre adopté."
        ]
      }
    ],
    liens: [["zf-zfc", "ZF et ZFC"], ["logique-premier-ordre", "Logique du premier ordre"]]
  },

  // ---------------------------------------------------------------- PEANO
  "peano": {
    titre: "Axiomes de Peano",
    domaine: "Arithmétique",
    resume: "Les axiomes de Peano décrivent les entiers naturels à partir d’une constante 0 et d’une fonction successeur S : un point de départ, un passage au suivant, et des propriétés qui rendent cette progression injective, sans boucle, et qui engendre tous les naturels.",
    sections: [
      {
        titre: "Les trois axiomes (langage : 0, S, =)",
        axiomes: [
          { nom: "1. Zéro n’est le successeur de personne", texte: "Pas de retour vers 0.", formule: "∀x, S(x) ≠ 0" },
          { nom: "2. Injectivité du successeur", texte: "Deux naturels ayant le même successeur sont égaux : pas de fusion de deux chaînes.", formule: "∀x ∀y, S(x) = S(y) → x = y" },
          { nom: "3. Induction (récurrence)", texte: "Toute propriété vraie en 0 et transmise de x à S(x) est vraie pour tous les naturels.", formule: "(A(0) ∧ ∀x (A(x) → A(S(x)))) → ∀x A(x)" }
        ]
      },
      {
        titre: "Deux formulations de l’induction",
        tableau: {
          cols: ["Cadre", "Axiome d’induction", "Conséquence"],
          rows: [
            ["Second ordre", "∀M ⊆ ℕ, (0 ∈ M ∧ ∀x (x ∈ M → S(x) ∈ M)) → M = ℕ", "Structure unique à isomorphisme près (catégorique)"],
            ["Premier ordre", "Un <em>schéma</em> : un axiome pour chaque formule A(x)", "Il existe aussi des modèles non standard"]
          ]
        },
        note: "⚠ Ne pas transférer automatiquement une conclusion d’un cadre logique à l’autre : l’induction n’est pas un axiome unique au premier ordre, mais un schéma."
      },
      {
        titre: "Addition et multiplication",
        intro: "Elles ne font pas partie des trois axiomes. Dans le langage {0, S}, elles se <em>définissent</em> récursivement ; dans l’arithmétique de Peano du premier ordre (langage {0, S, +, ×}), ces équations sont posées comme axiomes.",
        axiomes: [
          { nom: "Addition", texte: "Définition récursive.", formule: "x + 0 = x      x + S(y) = S(x + y)" },
          { nom: "Multiplication", texte: "Définition récursive.", formule: "x × 0 = 0      x × S(y) = (x × y) + x" }
        ]
      },
      {
        titre: "PA et Q",
        liste: [
          "<strong>PA</strong> (arithmétique de Peano) : les axiomes ci-dessus avec + et ×, plus le schéma d’induction.",
          "<strong>Q</strong> (Robinson) : version affaiblie <em>sans</em> schéma d’induction (elle garde S(x) ≠ 0, l’injectivité de S, « tout x ≠ 0 est un successeur » et les équations de + et ×). Utile en logique et pour la décidabilité.",
          "Le premier théorème d’incomplétude de Gödel s’applique dès qu’on a de quoi faire de l’arithmétique : il reste des énoncés vrais non démontrables."
        ]
      },
      {
        titre: "Exemple : 0 + n = n pour tout n",
        intro: "Avec P(n) : « 0 + n = n ». (1) P(0) est vraie : 0 + 0 = 0. (2) Si 0 + n = n, alors 0 + S(n) = S(0 + n) = S(n). (3) L’ensemble des n qui vérifient P contient 0 et est stable par S : par récurrence c’est ℕ.",
        note: "Constater la propriété pour 0, 1, 2, 3 ne prouve rien : il faut le passage démontré de n à S(n) pour un n arbitraire. Une chaîne finie {0, 1, 2, 3} n’est pas un modèle : un retour vers 0 viole l’axiome 1, un retour ailleurs finit par violer l’injectivité. Le choix du premier naturel (0 ou 1) est une simple convention de notation."
      }
    ],
    liens: [["logique-premier-ordre", "Logique du premier ordre"], ["zf-zfc", "ZF et ZFC (construction de ℕ)"], ["corps-ordonne-complet", "Corps ordonné complet"]]
  },

  // ---------------------------------------------------------------- GROUPES / ANNEAUX / CORPS
  "groupes-anneaux-corps": {
    titre: "Groupes, anneaux, corps",
    domaine: "Algèbre",
    resume: "Un <strong>groupe</strong> a une opération ; un <strong>anneau</strong> en a deux ; un <strong>corps</strong> a deux opérations et un inverse multiplicatif pour tout élément non nul.",
    sections: [
      {
        titre: "1. Axiomes d’un groupe (G, ∗)",
        axiomes: [
          { nom: "Fermeture", texte: "La loi est interne.", formule: "∀a, b ∈ G,  a ∗ b ∈ G" },
          { nom: "Associativité", texte: "", formule: "∀a, b, c ∈ G,  (a ∗ b) ∗ c = a ∗ (b ∗ c)" },
          { nom: "Élément neutre", texte: "", formule: "∃e ∈ G, ∀a ∈ G,  e ∗ a = a = a ∗ e" },
          { nom: "Inverse", texte: "", formule: "∀a ∈ G, ∃a⁻¹ ∈ G,  a ∗ a⁻¹ = e = a⁻¹ ∗ a" }
        ],
        note: "<strong>Groupe abélien</strong> : de plus, ∀a, b, a ∗ b = b ∗ a."
      },
      {
        titre: "2. Axiomes d’un anneau (A, +, ×)",
        liste: [
          "<strong>Partie additive</strong> : (A, +) est un groupe abélien (fermeture, associativité, neutre 0, inverse additif, commutativité).",
          "<strong>Partie multiplicative</strong> : × est fermée et associative.",
          "<strong>Distributivité</strong> : a × (b + c) = a × b + a × c   et   (b + c) × a = b × a + c × a."
        ],
        note: "Variantes : <em>anneau unitaire</em> (existence d’un 1), <em>anneau commutatif</em> (a × b = b × a), <em>anneau intègre</em> (pas de diviseurs de zéro)."
      },
      {
        titre: "3. Axiomes d’un corps (K, +, ×)",
        intro: "Un corps est un anneau commutatif unitaire (1 ≠ 0) où tout élément non nul est inversible.",
        liste: [
          "<strong>Partie additive</strong> : (K, +) est un groupe abélien (mêmes axiomes que pour l’anneau).",
          "<strong>Partie multiplicative</strong> : (K∖{0}, ×) est un groupe abélien (fermeture, associativité, neutre 1, inverse multiplicatif, commutativité).",
          "<strong>Distributivité</strong> : identique à celle des anneaux."
        ],
        note: "Convention : dans une partie de la littérature française, « corps » n’impose pas la commutativité de × (on parle alors de « corps commutatif » pour la version ci-dessus). Exemples de corps : ℚ, ℝ, ℂ, corps finis 𝔽ₚ."
      },
      {
        titre: "Synthèse",
        tableau: {
          cols: ["Structure", "Axiomes", "Opérations", "Propriété clé"],
          rows: [
            ["Groupe", "Fermeture, associativité, neutre, inverse", "1", "Inverses pour tous"],
            ["Anneau", "(A, +) groupe abélien ; × associative ; distributivité", "2", "Pas d’inverses multiplicatifs en général"],
            ["Corps", "Anneau commutatif unitaire + inverses multiplicatifs", "2", "Tous les non-nuls sont inversibles"]
          ]
        }
      }
    ],
    liens: [["corps-ordonne-complet", "Corps ordonné complet"], ["logique-premier-ordre", "Logique du premier ordre"]]
  },

  // ---------------------------------------------------------------- EUCLIDE
  "euclide": {
    titre: "Axiomes d’Euclide",
    domaine: "Géométrie",
    resume: "Les axiomes d’Euclide (<em>Éléments</em>, livre I) sont historiques et intuitifs, non formalisés : 5 postulats et 5 notions communes.",
    sections: [
      {
        titre: "Les 5 postulats",
        axiomes: [
          { nom: "Postulat 1", texte: "On peut tracer une droite entre deux points.", formule: "" },
          { nom: "Postulat 2", texte: "Une droite (un segment) peut être prolongée indéfiniment.", formule: "" },
          { nom: "Postulat 3", texte: "On peut tracer un cercle de centre et de rayon quelconques.", formule: "" },
          { nom: "Postulat 4", texte: "Tous les angles droits sont égaux.", formule: "" },
          { nom: "Postulat 5 (des parallèles)", texte: "Si une droite en coupe deux autres en formant, du même côté, des angles intérieurs dont la somme est inférieure à deux angles droits, ces deux droites se rencontrent de ce côté. Sous une forme équivalente (axiome de Playfair) : par un point extérieur à une droite passe une seule parallèle.", formule: "" }
        ],
        note: "La formulation « par un point extérieur, une seule parallèle » est celle de Playfair ; elle est équivalente au postulat d’Euclide dans les autres axiomes. En la niant, on obtient les <strong>géométries non euclidiennes</strong>."
      },
      {
        titre: "Les 5 notions communes (axiomes généraux)",
        liste: [
          "<strong>Égalité</strong> : des choses égales à une même chose sont égales entre elles.",
          "<strong>Addition</strong> : ajouter des égaux à des égaux donne des égaux.",
          "<strong>Soustraction</strong> : retrancher des égaux à des égaux donne des égaux.",
          "<strong>Superposition</strong> : des choses qui coïncident sont égales.",
          "<strong>Totalité</strong> : le tout est plus grand que la partie."
        ]
      },
      {
        titre: "Limites",
        intro: "Euclide utilise, sans les énoncer, des propriétés d’ordre (un point « entre » deux autres, une droite qui entre dans un triangle en ressort…) et de continuité. C’est ce que Hilbert corrigera en 1899."
      }
    ],
    liens: [["hilbert", "Axiomes de Hilbert"], ["corps-ordonne-complet", "Corps ordonné complet (modèle ℝ²)"]]
  },

  // ---------------------------------------------------------------- HILBERT
  "hilbert": {
    titre: "Axiomes de Hilbert (1899)",
    domaine: "Géométrie",
    resume: "Hilbert reconstruit la géométrie euclidienne avec rigueur logique. Il utilise trois types d’objets non définis — <strong>points, droites, plans</strong> — trois relations (incidence, « entre », congruence) et cinq groupes d’axiomes.",
    sections: [
      {
        titre: "I. Axiomes d’incidence",
        intro: "Ils décrivent comment points, droites et plans se rencontrent.",
        liste: [
          "Deux points distincts déterminent une <strong>unique</strong> droite.",
          "Trois points non alignés déterminent un <strong>unique</strong> plan.",
          "Si deux points d’une droite sont dans un plan, la droite entière est dans ce plan.",
          "Si deux plans ont un point commun, ils ont au moins un second point commun (deux plans distincts se coupent donc selon une droite).",
          "Toute droite contient au moins deux points ; il existe trois points non alignés et quatre points non coplanaires."
        ]
      },
      {
        titre: "II. Axiomes d’ordre (inspirés de Pasch)",
        intro: "Ils décrivent la notion de « entre ».",
        liste: [
          "Si B est entre A et C, alors A, B, C sont alignés et distincts.",
          "Pour deux points A et C, il existe un point B entre eux (et un point D tel que C soit entre A et D).",
          "Parmi trois points alignés, un seul est entre les deux autres.",
          "<strong>Axiome de Pasch</strong> : une droite qui entre dans un triangle par un côté en ressort par un autre côté. On en déduit que, sur une droite, un point sépare les autres en deux régions."
        ]
      },
      {
        titre: "III. Axiomes de congruence",
        intro: "Ils définissent l’égalité des segments et des angles.",
        liste: [
          "On peut reporter un segment sur une droite, d’un côté donné d’un point.",
          "La congruence est une relation d’équivalence (réflexive, symétrique, transitive).",
          "Additivité des segments.",
          "Les angles peuvent être reportés d’un côté donné d’une demi-droite.",
          "Si deux triangles ont deux côtés et l’angle compris congruents, ils sont congruents (cas « côté-angle-côté », SAS)."
        ]
      },
      {
        titre: "IV. Axiome des parallèles",
        liste: ["Par un point extérieur à une droite, il passe <strong>au plus</strong> une parallèle. (L’existence d’une parallèle se démontre avec les axiomes précédents.)"]
      },
      {
        titre: "V. Axiomes de continuité",
        liste: [
          "<strong>Axiome d’Archimède</strong> : pas de longueurs infiniment petites ou infiniment grandes.",
          "<strong>Axiome de complétude</strong> (linéaire) : on ne peut ajouter aucun point, droite ou plan sans violer les axiomes précédents."
        ],
        note: "⚠ L’axiome de complétude de Hilbert porte sur toutes les extensions possibles du système : il n’est pas du premier ordre. Une axiomatisation du premier ordre de la géométrie euclidienne (Tarski) remplace cette continuité par un schéma d’axiomes."
      },
      {
        titre: "Euclide et Hilbert, comparés",
        tableau: {
          cols: ["Système", "Nature", "Rigueur", "Structure", "Parallèles"],
          rows: [
            ["Euclide", "Historique, intuitif", "Faible", "5 postulats + 5 notions communes", "Postulat 5 (ou forme de Playfair)"],
            ["Hilbert", "Moderne, formel", "Très forte", "5 groupes d’axiomes", "Au plus une parallèle"]
          ]
        }
      }
    ],
    liens: [["euclide", "Axiomes d’Euclide"], ["corps-ordonne-complet", "Corps ordonné complet"], ["logique-premier-ordre", "Logique du premier ordre"]]
  },

  // ---------------------------------------------------------------- CORPS ORDONNÉ COMPLET
  "corps-ordonne-complet": {
    titre: "Corps ordonné complet",
    domaine: "Analyse",
    resume: "Un corps ordonné complet = <strong>un corps</strong>, muni d’un <strong>ordre total compatible</strong>, <strong>complet</strong> au sens de la borne supérieure. C’est exactement la structure de ℝ : c’est, à isomorphisme près, le seul corps ordonné complet.",
    sections: [
      {
        titre: "1. Axiomes de corps",
        intro: "Structure (F, +, ×) : (F, +) est un groupe abélien (fermeture, associativité, neutre 0, inverses additifs, commutativité) ; (F∖{0}, ×) est un groupe abélien (neutre 1 ≠ 0, inverses multiplicatifs) ; distributivité a(b + c) = ab + ac. Voir la page Groupes, anneaux, corps."
      },
      {
        titre: "2. Axiomes d’ordre (corps ordonné)",
        axiomes: [
          { nom: "Ordre total", texte: "Pour tous a, b, exactement une des trois relations est vraie ; l’ordre < est de plus transitif.", formule: "a < b,   a = b,   b < a" },
          { nom: "Compatibilité avec l’addition", texte: "", formule: "a < b ⇒ a + c < b + c" },
          { nom: "Compatibilité avec la multiplication", texte: "", formule: "0 < a et 0 < b ⇒ 0 < ab" }
        ]
      },
      {
        titre: "3. Axiome de complétude (borne supérieure)",
        intro: "C’est l’axiome clé qui distingue ℝ de ℚ.",
        axiomes: [
          { nom: "Borne supérieure", texte: "Tout ensemble non vide majoré possède une borne supérieure : un majorant s qui est inférieur ou égal à tout autre majorant.", formule: "A ≠ ∅ et ∃M, ∀a ∈ A, a ≤ M  ⇒  ∃s (s majore A et ∀M majorant, s ≤ M)" }
        ],
        note: "Cet axiome est équivalent à la complétude de Dedekind. Il implique la propriété d’Archimède ; réciproquement, la complétude de Cauchy (suites) ou le théorème de Bolzano–Weierstrass caractérisent ℝ à condition d’y adjoindre la propriété d’Archimède."
      },
      {
        titre: "Synthèse",
        tableau: {
          cols: ["Propriété", "Axiomes", "Structure"],
          rows: [
            ["Corps", "Axiomes de corps", "(F, +, ×)"],
            ["Ordre compatible", "Ordre total + compatibilité", "(F, <)"],
            ["Complétude", "Borne supérieure", "ℝ"]
          ]
        }
      },
      {
        titre: "Pourquoi ℝ n’est pas axiomatisable au premier ordre",
        intro: "Cette axiomatique est du <strong>second ordre</strong> : l’axiome de la borne supérieure quantifie sur les <em>parties</em> X de ℝ, ce qu’interdit le premier ordre. De même la propriété d’Archimède, ∀x ∃n, x ≤ n (où n est le terme 1 + … + 1, n fois), n’est pas une formule du premier ordre : « n fois » n’est pas un terme fixé.",
        liste: [
          "<strong>Théorème</strong> : il n’existe pas d’ensemble d’axiomes du premier ordre, sur une signature dénombrable, caractérisant ℝ à isomorphisme près. Preuve : par Löwenheim–Skolem, une telle théorie ayant ℝ pour modèle aurait un modèle dénombrable, non isomorphe à ℝ (non dénombrable).",
          "<strong>Le résultat persiste avec une signature non dénombrable</strong> : ajoutons une constante c et, aux formules du premier ordre vraies dans ℝ, les axiomes c > r pour tout réel r. Toute partie finie est satisfaite dans ℝ, donc (compacité) la théorie a un modèle *ℝ. Dans *ℝ, c dépasse tous les entiers : *ℝ est <em>non archimédien</em>, donc non isomorphe à ℝ, tout en vérifiant les mêmes formules du premier ordre.",
          "<strong>Construction explicite</strong> : les ultrapuissances de ℝ (les « hyperréels ») ou la clôture réelle de ℝ(X), où X est infiniment grand. Le corps ℝ(X) lui-même est non archimédien mais ne satisfait pas les mêmes formules que ℝ."
        ]
      }
    ],
    liens: [["groupes-anneaux-corps", "Groupes, anneaux, corps"], ["logique-premier-ordre", "Logique du premier ordre"], ["hilbert", "Axiomes de Hilbert (Archimède, complétude)"], ["peano", "Axiomes de Peano"]]
  },

  // ---------------------------------------------------------------- KOLMOGOROV
  "kolmogorov": {
    titre: "Axiomes de Kolmogorov (1933)",
    domaine: "Probabilités",
    resume: "Les axiomes de Kolmogorov définissent une <strong>mesure de probabilité</strong> sur une σ-algèbre. Ils sont au nombre de trois, et toute la théorie moderne des probabilités en découle.",
    sections: [
      {
        titre: "Cadre : l’espace probabilisé (Ω, A, P)",
        liste: [
          "<strong>Ω</strong> : l’espace des issues (univers).",
          "<strong>A</strong> : une σ-algèbre sur Ω — l’ensemble des événements : contient Ω, stable par complémentaire et par réunion dénombrable.",
          "<strong>P</strong> : une mesure de probabilité P : A → ℝ."
        ]
      },
      {
        titre: "Les trois axiomes",
        axiomes: [
          { nom: "1. Non-négativité", texte: "Pour tout événement A ∈ A.", formule: "P(A) ≥ 0" },
          { nom: "2. Normalisation", texte: "L’événement certain a pour probabilité 1.", formule: "P(Ω) = 1" },
          { nom: "3. σ-additivité", texte: "Pour toute famille dénombrable d’événements deux à deux disjoints (Aᵢ), i ≥ 1.", formule: "P(⋃ᵢ Aᵢ) = Σᵢ P(Aᵢ)" }
        ]
      },
      {
        titre: "Conséquences fondamentales",
        intro: "Ce ne sont pas des axiomes : elles se déduisent des trois précédents.",
        axiomes: [
          { nom: "Probabilité du vide", texte: "", formule: "P(∅) = 0" },
          { nom: "Additivité finie", texte: "", formule: "A ∩ B = ∅ ⇒ P(A ∪ B) = P(A) + P(B)" },
          { nom: "Complémentaire", texte: "", formule: "P(Aᶜ) = 1 − P(A)" },
          { nom: "Monotonie", texte: "Elle donne aussi P(A) ≤ 1.", formule: "A ⊆ B ⇒ P(A) ≤ P(B)" }
        ]
      },
      {
        titre: "Interprétation",
        liste: [
          "Une probabilité est un nombre réel entre 0 et 1.",
          "La probabilité totale est 1.",
          "Les probabilités s’additionnent pour des événements incompatibles."
        ],
        note: "Tout le reste — probabilité conditionnelle, formule de Bayes, variables aléatoires, lois, loi des grands nombres — se construit à partir de ces trois règles et de définitions."
      }
    ],
    liens: [["zf-zfc", "ZF et ZFC (fondements de la mesure)"], ["logique-premier-ordre", "Logique du premier ordre"]]
  },

  // ---------------------------------------------------------------- LAMBDA
  "lambda-calcul": {
    titre: "Axiomes du λ-calcul",
    domaine: "Calcul lambda",
    resume: "Le λ-calcul pur est défini par trois schémas d’axiomes d’égalité : l’<strong>α-conversion</strong> (renommer les variables liées), la <strong>β-réduction</strong> (appliquer une fonction) et l’<strong>η-conversion</strong> (extensionnalité). Tout le reste (normalisation, confluence, types…) s’en déduit ou s’y ajoute.",
    sections: [
      {
        titre: "Termes",
        intro: "Un terme est une variable x, une abstraction λx. M (la fonction qui à x associe M), ou une application M N. Le λ-calcul pur n’a ni constantes, ni types, ni nombres : tout est fonction."
      },
      {
        titre: "Les trois axiomes",
        axiomes: [
          { nom: "1. α-conversion", texte: "Renommer une variable liée ne change pas le sens (si y n’apparaît pas libre dans M). Le nom d’une variable liée n’a aucune importance.", formule: "λx. M = λy. M[y/x]" },
          { nom: "2. β-réduction", texte: "Axiome central : l’application d’une fonction. M[N/x] désigne la substitution de N à x dans M (sans capture de variables). Il donne la dynamique du calcul.", formule: "(λx. M) N = M[N/x]" },
          { nom: "3. η-conversion", texte: "Extensionnalité : deux fonctions sont égales si elles ont le même comportement (si x n’est pas libre dans M). Optionnel dans certaines variantes.", formule: "λx. (M x) = M" }
        ]
      },
      {
        titre: "Synthèse",
        tableau: {
          cols: ["Axiome", "Formule", "Rôle"],
          rows: [
            ["α-conversion", "λx.M = λy.M[y/x]", "Renommage des variables liées"],
            ["β-réduction", "(λx.M) N = M[N/x]", "Application d’une fonction"],
            ["η-conversion", "λx.(M x) = M", "Extensionnalité des fonctions"]
          ]
        }
      },
      {
        titre: "Exemple",
        intro: "Avec K = λx. λy. x : K a b = (λy. a) b = a. Et (λx. x) y = y.",
        note: "Les axiomes définissent une théorie d’égalité (λ-calcul équationnel). La β-réduction seule donne la dynamique du calcul ; l’ajout de η donne la version βη, souvent utilisée en sémantique. La confluence (Church–Rosser) et l’existence de formes normales sont des <em>théorèmes</em>, pas des axiomes."
      }
    ],
    liens: [["logique-premier-ordre", "Logique du premier ordre"], ["peano", "Axiomes de Peano"]]
  }
};
