// Version : 1.1
// =====================================================================
// PAGES « CORRESPONDANCES » ET « VUE D'ENSEMBLE » — domaines du référentiel MSC
// =====================================================================
// Ce fichier regroupe deux pages qui s'appuient sur les notions du sommaire
// (window.MATHSITE_TREE, jsonMathsite.js) et sur leur classification MSC
// (window.MATHSITE_MSC, msc-data.js, lui-même généré depuis MathSite_fiches_MSC.xlsx) :
//
//   1. « Correspondances » (menu horizontal) — tableau de correspondances
//      interdisciplinaires : 33 notions-pivots rangées par domaine MSC, reliées à d'autres
//      notions du sommaire (et, pour la Physique et l'Informatique, de l'Encyclopédie),
//      chaque lien portant sa raison mathématique. Remplace loadCorrespondanceTable() de
//      app.js sans le modifier.
//   2. « Vue d'ensemble » (chapitre 01 de « 5000 Formules ») — tableau d'équivalences,
//      schémas et version pédagogique, par domaines MSC. Installée sans toucher à
//      formules-data.js ni formules.js.
//
// Une notion est toujours rangée sous SON domaine MSC, tel qu'affiché sur sa fiche : les
// pastilles de domaine sont lues dans msc-data.js au moment de l'affichage. Les titres,
// niveaux et dénombrements sont relus dans le sommaire.
//
// Références de la forme "sup:<id>" (Prépa / Grandes Écoles) ou "ecole:<id>" (Collège /
// Lycée), comme les clés de MATHSITE_FICHES. À charger APRÈS app.js.
// =====================================================================

// ---------------------------------------------------------------------
// BLOC COMMUN : domaines MSC, index du sommaire, pastilles, ouverture d'une fiche
// ---------------------------------------------------------------------
(function () {
  "use strict";

  // ---------- Les 6 domaines MSC (ordre des colonnes) ----------
  // ancre = section de classification_msc2020_wow.html ; couleur = pastille du domaine.
  const DOMAINES = [
    { cle: "FOND", nom: "Fondements et Logique",                         court: "Fondements",   ancre: "mscp-fondements",   couleur: "#4f8ff7" },
    { cle: "ALG",  nom: "Algèbre et Théorie des nombres",                court: "Algèbre",      ancre: "mscp-algebre",      couleur: "#5cc16f" },
    { cle: "ANA",  nom: "Analyse mathématique",                          court: "Analyse",      ancre: "mscp-analyse",      couleur: "#f5a04a" },
    { cle: "GEO",  nom: "Géométrie et Topologie",                        court: "Géométrie",    ancre: "mscp-geometrie",    couleur: "#b57edc" },
    { cle: "PRO",  nom: "Probabilités et Statistiques",                  court: "Probabilités", ancre: "mscp-probabilites", couleur: "#f2d04b" },
    { cle: "APP",  nom: "Mathématiques appliquées et computationnelles", court: "Appliquées",   ancre: "mscp-appliquees",   couleur: "#a9825f" }
  ];
  const PAGE_MSC = "classification_msc2020_wow.html";

  // ---------- Index du sommaire ----------
  const NIVEAU_DE = { "6e": "college", "5e": "college", "4e": "college", "3e": "college",
                      "Seconde": "lycee", "Premiere": "lycee", "Terminale": "lycee",
                      "L1": "prepa", "L2": "prepa", "L3": "grandes-ecoles", "M1": "grandes-ecoles", "M2": "grandes-ecoles" };
  const LABEL_NIVEAU = { "Seconde": "2nde", "Premiere": "1re", "Terminale": "Tle" };
  let INDEX = null;

  function index() {
    if (INDEX) return INDEX;
    INDEX = new Map();
    const T = window.MATHSITE_TREE || {};
    const ajoute = (branche, grade, matiere, it) => {
      INDEX.set(branche + ":" + it.id, { id: it.id, title: it.title, grade, subj: matiere, niveau: NIVEAU_DE[grade] });
    };
    ["College", "Lycee"].forEach(b => Object.keys(T[b] || {}).forEach(g =>
      Object.keys(T[b][g]).forEach(m => T[b][g][m].forEach(it => ajoute("ecole", g, m, it)))));
    ["L1", "L2", "L3", "M1", "M2"].forEach(g =>
      Object.keys(T[g] || {}).forEach(m => T[g][m].forEach(it => ajoute("sup", g, m, it))));
    return INDEX;
  }

  // Domaine MSC d'une notion, d'après msc-data.js (null si les données MSC ne sont pas chargées).
  function domaineMsc(cle) {
    const ref = window.MATHSITE_MSC_REFERENTIEL, msc = window.MATHSITE_MSC;
    if (!ref || !msc || !msc[cle]) return null;
    return (ref.disciplines || {})[msc[cle][3]] || null;
  }

  function classeNiveau(grade) {
    if (NIVEAU_DE[grade] === "college" || NIVEAU_DE[grade] === "lycee") return "ve-l-e";
    if (grade === "L1" || grade === "L2") return "ve-l-p";
    if (grade === "L3") return "ve-l-g";
    return "ve-l-m";
  }
  const libelleNiveau = grade => LABEL_NIVEAU[grade] || grade;

  // Couleur hexadécimale -> rgba (fonds translucides des pastilles)
  function rgba(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return "rgba(" + (n >> 16 & 255) + ", " + (n >> 8 & 255) + ", " + (n & 255) + ", " + a + ")";
  }

  // Objet DOMAINES d'une notion (null si les données MSC ne sont pas chargées).
  function domaineObjet(cle) {
    const nom = domaineMsc(cle);
    return DOMAINES.find(d => d.nom === nom) || null;
  }

  // Même chemin que la recherche du site : déplie le sommaire, puis ouvre la fiche.
  window.veOpenNotion = function (cle) {
    // "enc:<id>" = notion de l'Encyclopédie (Physique, Informatique : hors référentiel MSC)
    if (cle.indexOf("enc:") === 0) { if (typeof openNotion === "function") openNotion(+cle.slice(4)); return; }
    const e = index().get(cle);
    if (!e) return;
    try { if (typeof revealInSidebar === "function") revealInSidebar(e.niveau, e.grade, e.subj, e.id); }
    catch (err) { console.warn("Vue d'ensemble : sommaire non déplié", err); }
    openMenuConcept(e.niveau, e.grade, e.subj, e.id, e.title);
  };

  // En-tête de domaine : pastille de couleur + nom, lié à sa section de la page MSC.
  function enteteDomaine(d, avecNom) {
    return '<a class="ve-dom" href="' + PAGE_MSC + '#' + d.ancre + '" title="Ouvrir la présentation MSC : ' + escapeAttr(d.nom) + '">' +
      '<span class="ve-dot" style="background:' + d.couleur + '"></span>' + escapeHtml(avecNom ? d.nom : d.court) + '</a>';
  }

  const CSS_COMMUN = `
    .ve-stats { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; margin: 4px 0 6px; font-size: 12.5px; color: #9a9a9a; }
    .ve-stat { display: inline-flex; align-items: center; gap: 6px; }
    .ve-stat-total { color: #e6e6e6; font-size: 13px; margin-right: 4px; }
    .ve-stat-total b { color: #ffb86b; font-size: 15px; }

    .ve-dot { display: inline-block; flex: none; width: 9px; height: 9px; border-radius: 3px; margin-right: 6px; vertical-align: baseline; }
    a.ve-dom { color: inherit; text-decoration: none; }
    a.ve-dom:hover { text-decoration: underline; }
    .ve-stat a.ve-dom { color: #c8c8c8; }

    .ve-lvl { display: inline-block; flex: none; min-width: 32px; text-align: center; box-sizing: border-box;
              font-size: 9.5px; font-weight: 700; line-height: 1.5; padding: 1px 6px; border-radius: 999px; letter-spacing: .02em; }
    .ve-l-e { background: rgba(255, 184, 107, .14); color: #ffb86b; }
    .ve-l-p { background: rgba(126, 224, 195, .12); color: #7ee0c3; }
    .ve-l-g { background: rgba(122, 162, 255, .14); color: #7aa2ff; }
    .ve-l-m { background: rgba(199, 146, 234, .15); color: #c792ea; }
  `;
  if (!document.getElementById("correspondances-commun-style")) {
    const st = document.createElement("style");
    st.id = "correspondances-commun-style";
    st.textContent = CSS_COMMUN;
    document.head.appendChild(st);
  }

  window.MSC_COMMUN = { DOMAINES, PAGE_MSC, index, domaineMsc, domaineObjet, classeNiveau, libelleNiveau, rgba, enteteDomaine };
})();

// ---------------------------------------------------------------------
// PAGE « CORRESPONDANCES » — Tableau de correspondances interdisciplinaires
// ---------------------------------------------------------------------
// 33 notions-pivots, regroupées à l'affichage par domaine MSC. Chaque pivot est relié à
// d'autres notions (vignettes) qui portent chacune la raison mathématique de la
// correspondance ; sous chaque pivot, une synthèse : en pratique (quelles correspondances)
// et pourquoi.
//
// Deux types de références :
//   "sup:<id>" / "ecole:<id>" — notion du sommaire, pastille de son domaine MSC (msc-data.js) ;
//   "enc:<id>"                — notion de l'Encyclopédie (window.NOTIONS) pour la Physique et
//                               l'Informatique, absentes du référentiel MSC : pastille grise.
// Ajouter un pivot = ajouter une entrée à PIVOTS ; il est rangé sous son domaine MSC.
// ---------------------------------------------------------------------
(function () {
  "use strict";
  const { DOMAINES, PAGE_MSC, index, domaineObjet, classeNiveau, libelleNiveau, rgba } = window.MSC_COMMUN;

  // [ clé du pivot, { pratique, pourquoi }, [ [ clé de la notion liée, "raison" ], ... ] ]
  const PIVOTS = [
    ["sup:1952", {
      pratique: "existence de bases des espaces vectoriels (algèbre), théorème de Hahn–Banach (analyse), théorème de Tychonoff (topologie), parties non mesurables et tribus (probabilités).",
      pourquoi: "l'axiome du choix, équivalent au bon ordre de Zermelo et au lemme de Zorn, garantit l'existence d'objets qu'on ne sait pas construire explicitement : c'est la clé de voûte de nombreux théorèmes d'existence dans tous les domaines." }, [
      ["sup:1208", "L'existence d'une base pour tout espace vectoriel est équivalente à l'axiome du choix ; sans lui, on ne peut pas en général exhiber de base de ℝ comme espace vectoriel sur ℚ."],
      ["sup:494", "La démonstration prolonge une forme linéaire dominée par une semi-norme en invoquant le lemme de Zorn, équivalent à l'axiome du choix."],
      ["sup:416", "Un produit quelconque d'espaces compacts est compact : cet énoncé est équivalent à l'axiome du choix."],
      ["sup:1416", "Avec l'axiome du choix, il existe des parties de [0,1] non mesurables (ensemble de Vitali) : on ne peut pas prendre toutes les parties pour événements, d'où la notion de tribu."]]],

    ["sup:641", {
      pratique: "groupes vus comme catégories à un objet (algèbre), dualité des espaces normés (analyse), groupe fondamental (topologie algébrique).",
      pourquoi: "une catégorie décrit une structure par ses flèches plutôt que par ses éléments : les foncteurs traduisent un problème d'un domaine (topologie, analyse) dans un autre (groupes, espaces vectoriels), là où il devient calculable." }, [
      ["sup:80", "Un groupe est une catégorie à un seul objet dont tous les morphismes sont inversibles ; un morphisme de groupes est un foncteur entre deux telles catégories."],
      ["sup:1445", "Passer au dual est un foncteur contravariant : une application linéaire continue u : E → F induit u^t : F' → E', qui renverse le sens des flèches et respecte la composition."],
      ["sup:1619", "Le groupe fondamental est un foncteur de la catégorie des espaces pointés vers celle des groupes : deux espaces homéomorphes ont des groupes isomorphes, ce qui distingue le cercle du disque."]]],

    ["sup:673", {
      pratique: "circuits eulériens et hamiltoniens (combinatoire), sécurité de RSA et factorisation (cryptographie), programmation linéaire (optimisation).",
      pourquoi: "la théorie de la complexité classe les problèmes selon le coût de leur résolution : elle explique pourquoi deux énoncés voisins peuvent être l'un facile, l'autre hors de portée, et pourquoi certains problèmes servent de base à la cryptographie." }, [
      ["sup:1544", "Décider si un graphe a un circuit eulérien est polynomial (connexité et degrés pairs), alors que décider s'il a un circuit hamiltonien est NP-complet : deux énoncés voisins, deux classes de complexité."],
      ["sup:1893", "La sécurité de RSA repose sur l'hypothèse qu'aucun algorithme polynomial ne factorise les grands entiers : le problème est dans NP, mais on ne sait pas s'il est dans P."],
      ["sup:1090", "La programmation linéaire est dans P (méthode de l'ellipsoïde, points intérieurs), alors que la même programmation en nombres entiers est NP-difficile."]]],

    ["sup:95", {
      pratique: "existence de bases en dimension infinie (fondements), espaces de Banach (analyse), espaces affines (géométrie), vecteurs aléatoires (probabilités), moindres carrés (calcul appliqué).",
      pourquoi: "un espace vectoriel est le cadre où l'on peut additionner et dilater : vecteurs, fonctions, suites et variables aléatoires en sont des exemples, si bien que la même algèbre linéaire sert dans tous les domaines." }, [
      ["sup:1952", "Tout espace vectoriel admet une base, mais en dimension infinie cela repose sur l'axiome du choix : l'existence de bases pour tous les espaces vectoriels lui est équivalente."],
      ["sup:429", "Munir un espace vectoriel d'une norme complète en fait un espace de Banach ; en dimension finie toutes les normes sont équivalentes, ce qui cesse d'être vrai en dimension infinie (théorème de Riesz)."],
      ["sup:1212", "Un espace affine est un espace vectoriel « sans origine » : ses translations forment un espace vectoriel (sa direction), et une application affine est linéaire à une translation près."],
      ["sup:1240", "Un vecteur aléatoire de ℝ^n de carré intégrable est résumé par son vecteur moyenne et sa matrice de covariance, symétrique positive : l'algèbre linéaire décrit sa dispersion."],
      ["sup:1250", "Ajuster des données par moindres carrés revient à projeter orthogonalement le vecteur des observations sur le sous-espace engendré par les colonnes du modèle."]]],

    ["sup:101", {
      pratique: "matrices comme morphismes (fondements), exponentielle de matrice et déterminant (analyse), rotations et isométries (géométrie), matrices stochastiques (probabilités), décomposition en valeurs singulières (calcul appliqué).",
      pourquoi: "une matrice représente une application linéaire : produit, puissance, inverse et exponentielle traduisent la composition, l'itération et l'évolution continue, ce qui explique sa présence de la physique aux algorithmes." }, [
      ["sup:1489", "Les matrices sont les morphismes de la catégorie dont les objets sont les espaces ℝ^n : le produit matriciel est la composition, et la matrice unité est l'identité."],
      ["sup:290", "Le système X' = AX se résout explicitement par X(t) = e^(tA)X₀ ; de plus det(e^(tA)) = e^(t·tr A) : la trace de A gouverne la dilatation des volumes le long du flot (formule de Liouville)."],
      ["sup:125", "Une rotation du plan d'angle θ a pour matrice [[cos θ, −sin θ], [sin θ, cos θ]] ; plus généralement les matrices orthogonales (A^T A = I) représentent les isométries vectorielles."],
      ["sup:344", "La loi de X_n est μP^n, où P est la matrice de transition (lignes de somme 1) : les puissances de matrices décrivent l'évolution d'une chaîne."],
      ["sup:1643", "Toute matrice s'écrit A = UΣV^T (décomposition en valeurs singulières) : c'est l'outil de base de la compression, de la pseudo-inverse et de l'analyse en composantes principales."]]],

    ["sup:104", {
      pratique: "aire et volume signés (géométrie), exponentielle de matrice et formule de Liouville (analyse), facteur de changement de variables des intégrales multiples (analyse), groupes de Lie (géométrie), volume de dispersion d'un vecteur gaussien (probabilités), calcul par élimination de Gauss (calcul appliqué).",
      pourquoi: "le déterminant est le facteur par lequel une application linéaire multiplie les volumes : il réapparaît dès qu'on change de coordonnées, de loi ou d'échelle, et l'exponentielle de matrice le transforme en exponentielle de la trace." }, [
      ["sup:1052", "Dans le plan, det(u,v) est l'aire signée du parallélogramme construit sur u et v (volume signé en dimension 3) ; det(u,v)=0 exprime la colinéarité."],
      ["sup:264", "Le déterminant de la matrice jacobienne est le facteur de dilatation locale des volumes : dx dy = |det J| du dv dans un changement de variables d'une intégrale multiple."],
      ["sup:290", "Pour X' = AX, X(t) = e^(tA)X₀ ; le wronskien W = det X vérifie W' = tr(A)·W (formule de Liouville), donc det(e^(tA)) = e^(t·tr A) : le déterminant change l'exponentielle de matrice en exponentielle de la trace."],
      ["sup:1690", "L'application det : GL_n(ℝ) → ℝ* est un morphisme de groupes de Lie dont la différentielle en I est la trace ; via l'exponentielle, det(e^X) = e^(tr X), d'où SL_n(ℝ) = {det = 1} d'algèbre de Lie {tr = 0}."],
      ["sup:1426", "La densité d'un vecteur gaussien de covariance Σ contient le facteur (det Σ)^(-1/2) : √(det Σ) est proportionnel au volume de l'ellipsoïde de dispersion."],
      ["sup:1343", "La formule de Leibniz demande n! termes ; l'élimination de Gauss calcule le même déterminant en O(n³) opérations."]]],

    ["sup:191", {
      pratique: "stabilité des systèmes différentiels (analyse), courbures principales d'une surface (géométrie), composantes principales (statistiques), calcul numérique de valeurs propres (calcul appliqué).",
      pourquoi: "diagonaliser, c'est trouver les directions où une transformation se réduit à un facteur d'échelle : on remplace un problème couplé par des problèmes indépendants, d'où le rôle central des valeurs propres." }, [
      ["sup:219", "Pour X'=AX, diagonaliser A découple le système en équations x_i' = λ_i x_i, de solutions e^(λ_i t) : le signe de Re(λ_i) décide de la stabilité."],
      ["sup:1430", "En un point d'une surface, les courbures principales sont les valeurs propres de l'endomorphisme de Weingarten ; leur produit est la courbure de Gauss."],
      ["sup:1337", "L'analyse en composantes principales diagonalise la matrice de covariance des données : les axes principaux sont ses vecteurs propres, classés par variance décroissante."],
      ["sup:1730", "La méthode de la puissance itérée calcule la valeur propre dominante en multipliant un vecteur par A de façon répétée ; la convergence est gouvernée par le rapport |λ₂/λ₁|."],
      ["enc:406", "Les modes propres d'un système de ressorts couplés sont les vecteurs propres de la matrice de raideur (pondérée par les masses) ; les fréquences propres sont les racines carrées des valeurs propres."],
      ["sup:1506", "Une loi stationnaire π (πP=π) est un vecteur propre à gauche de la matrice de transition, pour la valeur propre 1 ; le trou spectral règle la vitesse de convergence vers l'équilibre."]]],

    ["sup:201", {
      pratique: "extension à la dimension infinie (Hilbert), métrique des variétés courbes (géométrie riemannienne), variance comme norme et espérance conditionnelle comme projection (probabilités), états quantiques (analyse), moindres carrés (calcul appliqué).",
      pourquoi: "un produit scalaire donne longueurs, angles et projections orthogonales : distance, meilleure approximation et, en quantique, probabilités en découlent." }, [
      ["sup:481", "Un espace de Hilbert est un espace euclidien ou hermitien complet : projections orthogonales, bases orthonormées et théorème de Pythagore se prolongent en dimension infinie."],
      ["sup:544", "Une métrique riemannienne munit chaque espace tangent d'un produit scalaire qui varie avec le point : longueurs, angles et volumes se calculent alors sur une variété courbe."],
      ["sup:1590", "Dans L², la variance est le carré d'une norme et E[X] la meilleure approximation constante de X ; plus généralement, l'espérance conditionnelle E[X | 𝒢] est la projection orthogonale de X sur les variables 𝒢-mesurables."],
      ["sup:799", "L'état d'un système quantique à n niveaux est un vecteur unitaire de ℂ^n muni du produit hermitien ; la probabilité de trouver le système dans l'état φ vaut |(φ|ψ)|²."],
      ["sup:1250", "Les moindres carrés cherchent la projection orthogonale de y sur l'espace engendré par les colonnes de X : β=(X^T X)^(-1) X^T y lorsque X^T X est inversible."]]],

    ["sup:206", {
      pratique: "convexité et hessienne (analyse), coniques et quadriques (géométrie), covariance d'un vecteur gaussien (probabilités), programmation quadratique (calcul appliqué).",
      pourquoi: "une forme quadratique est un polynôme homogène de degré 2 : sa signature classe la forme d'une conique, la nature d'un point critique, la dispersion d'une loi gaussienne ou la convexité d'un critère à optimiser." }, [
      ["sup:251", "En un point critique, la hessienne (la forme quadratique du développement de Taylor à l'ordre 2) décide de la nature du point : minimum si elle est définie positive, maximum si définie négative, col si indéfinie."],
      ["sup:1224", "La signature d'une forme quadratique classe les coniques et quadriques : x²/a² + y²/b² = 1 est une ellipse (signature (2,0)), x²/a² − y²/b² = 1 une hyperbole (signature (1,1))."],
      ["sup:1426", "La matrice de covariance d'un vecteur gaussien est symétrique définie positive ; la densité contient la forme quadratique x^T Σ^(-1) x, dont les lignes de niveau sont des ellipsoïdes."],
      ["sup:1725", "Minimiser une forme quadratique convexe sous contraintes linéaires est un problème de programmation quadratique : la convexité, équivalente à la positivité de la forme, garantit un minimum global."]]],

    ["sup:1032", {
      pratique: "indécidabilité des équations diophantiennes (fondements), équations différentielles à coefficients constants (analyse), courbes algébriques (géométrie), fonctions génératrices et loi binomiale (probabilités), interpolation (calcul appliqué).",
      pourquoi: "un polynôme est à la fois une fonction, une expression algébrique et une courbe : ses racines gouvernent les équations différentielles, ses coefficients codent des lois, et on l'évalue en tout point pour interpoler." }, [
      ["sup:670", "Dixième problème de Hilbert : il n'existe pas d'algorithme qui décide si une équation polynomiale à coefficients entiers a une solution entière (théorème de Matiyasevich)."],
      ["sup:1174", "Les solutions de y'' + ay' + by = 0 sont gouvernées par les racines de l'équation caractéristique r² + ar + b = 0 : leur nature (réelles, complexes conjuguées) décide du comportement."],
      ["sup:547", "Les zéros d'un polynôme à deux variables définissent une courbe algébrique : l'étude de ces courbes (degré, genre, intersections) relève de la géométrie algébrique."],
      ["sup:155", "La fonction génératrice G(s) = E[s^X] d'une variable à valeurs entières est un polynôme (ou une série) : pour la loi binomiale, G(s) = (1−p+ps)^n, et ses dérivées en 1 donnent espérance et variance."],
      ["sup:1244", "Par n+1 points d'abscisses distinctes passe un unique polynôme de degré ≤ n : l'interpolation approche une fonction par un polynôme, avec une erreur contrôlée par la dérivée d'ordre n+1."]]],

    ["sup:1029", {
      pratique: "rotations du plan (géométrie), fonctions holomorphes et résidus (analyse), fonction caractéristique d'une loi (probabilités), oscillations (physique), FFT (calcul appliqué).",
      pourquoi: "e^(iθ) fusionne exponentielle et trigonométrie : un angle, une phase ou une fréquence devient un simple facteur à multiplier." }, [
      ["sup:1101", "Le module mesure les longueurs, l'argument les angles : multiplier par e^(iθ) est une rotation, et les similitudes directes du plan s'écrivent z ↦ az+b."],
      ["sup:441", "Dériver au sens complexe est si exigeant qu'une fonction holomorphe est automatiquement développable en série entière ; les intégrales se calculent alors par résidus."],
      ["sup:339", "La fonction caractéristique φ(t)=E[e^(itX)], à valeurs complexes, caractérise la loi de X et sert à démontrer le théorème central limite."],
      ["enc:406", "Une oscillation A cos(ωt+φ) est la partie réelle de A e^(i(ωt+φ)) : dériver revient à multiplier par iω, et l'amplitude complexe code amplitude et phase."],
      ["sup:527", "La transformée de Fourier discrète évalue un polynôme aux racines n-ièmes de l'unité e^(2iπk/n) ; la FFT exploite leur structure pour passer de O(n²) à O(n log n)."]]],

    ["sup:80", {
      pratique: "groupes comme catégories (fondements), analyse harmonique sur les groupes (analyse), groupes de Lie (géométrie), marches aléatoires (probabilités), cryptographie à clé publique (calcul appliqué).",
      pourquoi: "un groupe formalise la symétrie et la composition : dès qu'un problème est invariant sous des transformations, sa structure fournit invariants, décompositions et, en cryptographie, des problèmes difficiles à inverser." }, [
      ["sup:641", "Un groupe est une catégorie à un seul objet dont tous les morphismes sont inversibles ; les morphismes de groupes sont les foncteurs entre ces catégories."],
      ["sup:534", "Sur un groupe abélien localement compact, la transformée de Fourier décompose selon les caractères du groupe : séries de Fourier (le cercle), transformée de Fourier (ℝ), transformée discrète (ℤ/nℤ)."],
      ["sup:1617", "Un groupe de Lie est à la fois un groupe et une variété différentielle : les rotations SO(n) ou les matrices inversibles GL_n(ℝ) sont des groupes sur lesquels on peut faire du calcul différentiel."],
      ["sup:1510", "Une marche aléatoire simple est la somme de pas indépendants dans le groupe (ℤ,+) : sa loi après n pas est la n-ième puissance de convolution de la loi d'un pas."],
      ["sup:1890", "Le logarithme discret dans le groupe des points d'une courbe elliptique fonde la cryptographie elliptique : calculer g^x est facile, retrouver x à partir de g^x ne l'est pas."]]],

    ["sup:156", {
      pratique: "explosion combinatoire et classes P/NP (fondements), séries génératrices (analyse), loi binomiale (probabilités), actions de groupes (algèbre), entropie de Boltzmann (physique).",
      pourquoi: "compter, c'est établir des bijections : le binôme de Newton, les séries génératrices et les actions de groupes transforment un dénombrement en calcul, tandis que l'explosion combinatoire (n!, 2^n) explique la difficulté des problèmes NP." }, [
      ["sup:673", "Le nombre de configurations (n! permutations, 2^n sous-ensembles) croît plus vite que tout polynôme : l'explosion combinatoire explique pourquoi la recherche exhaustive est impraticable pour les problèmes NP-complets."],
      ["sup:66", "Une suite de dénombrements (a_n) se code dans la série génératrice Σ a_n x^n : par exemple 1/(1−x−x²) = Σ F_(n+1) x^n donne les nombres de Fibonacci, et le rayon de convergence donne leur croissance."],
      ["sup:148", "Le nombre de façons de placer k succès parmi n épreuves est le coefficient binomial C(n,k) : la loi binomiale P(X=k) = C(n,k)·p^k(1−p)^(n−k) est un dénombrement pondéré."],
      ["sup:1396", "Compter des configurations à symétrie près revient à compter les orbites d'un groupe : le lemme de Burnside donne |X/G| = (1/|G|)·Σ_g |Fix(g)|."],
      ["enc:425", "L'entropie de Boltzmann S = k ln Ω compte les micro-états Ω compatibles avec un état macroscopique : c'est de la combinatoire."]]],

    ["sup:441", {
      pratique: "théorème de d'Alembert–Gauss (algèbre), variétés complexes et surfaces de Riemann (géométrie), fonctions caractéristiques (probabilités), ensembles de Julia (dynamique).",
      pourquoi: "être dérivable au sens complexe est une condition si rigide qu'elle impose analyticité, conservation des angles et principe du maximum : l'analyse complexe transporte ces propriétés à l'algèbre, à la géométrie et à la dynamique." }, [
      ["sup:92", "Tout polynôme non constant de ℂ[X] admet une racine dans ℂ : la démonstration classique utilise le théorème de Liouville (une fonction entière bornée est constante)."],
      ["sup:549", "Une variété complexe est un espace localement isomorphe à ℂ^n dont les changements de cartes sont holomorphes ; en dimension 1, ce sont les surfaces de Riemann."],
      ["sup:339", "La fonction caractéristique φ(t) = E[e^(itX)] est à valeurs complexes et caractérise la loi ; si X a des moments exponentiels, φ se prolonge en une fonction analytique dans une bande du plan complexe."],
      ["sup:1766", "Les ensembles de Julia et de Mandelbrot étudient l'itération z ↦ z² + c : c'est la dynamique holomorphe, où l'analyse complexe décrit la stabilité des orbites."]]],

    ["sup:1166", {
      pratique: "différentielle et jacobienne (applications linéaires), ensembles définis par des équations (variétés), changement de variables des densités (probabilités), lagrangien (mécanique), méthode de Newton (calcul numérique).",
      pourquoi: "la dérivée est l'approximation linéaire locale : un problème à plusieurs variables se ramène à de l'algèbre linéaire, avec la jacobienne comme pont." }, [
      ["sup:102", "La différentielle df(a) est l'application linéaire qui approche f près de a ; sa matrice dans les bases canoniques est la matrice jacobienne."],
      ["sup:541", "Par le théorème des fonctions implicites, {f=0} est une sous-variété là où df est de rang maximal : courbes, surfaces et variétés se décrivent par des équations."],
      ["sup:1240", "Pour Y=φ(X) avec φ un difféomorphisme, la densité de Y s'obtient par changement de variables : f_Y(y) = f_X(φ^(-1)(y)) · |det Dφ^(-1)(y)|."],
      ["sup:1769", "Le lagrangien L(q,q') est une fonction de plusieurs variables : annuler ses dérivées partielles donne les équations d'Euler–Lagrange, d/dt(∂L/∂q') = ∂L/∂q."],
      ["sup:1243", "La méthode de Newton en plusieurs variables résout f(x)=0 par x_(k+1) = x_k − J(x_k)^(-1) f(x_k), où J est la matrice jacobienne."]]],

    ["sup:1364", {
      pratique: "dénombrabilité et σ-additivité (fondements), intégration sur les variétés (géométrie), espérance (probabilités), méthode de Monte-Carlo (calcul appliqué).",
      pourquoi: "en découpant selon les valeurs de la fonction plutôt que selon son domaine, l'intégrale de Lebesgue s'applique à des espaces abstraits : une probabilité n'est qu'une mesure de masse 1, une espérance qu'une intégrale." }, [
      ["sup:1027", "La mesure de Lebesgue est σ-additive, c'est-à-dire additive pour les réunions dénombrables : tout ensemble dénombrable, comme ℚ, est de mesure nulle."],
      ["sup:1611", "Intégrer sur une variété revient à intégrer des formes différentielles dans des cartes ; la formule de Stokes ∫_M dω = ∫_(∂M) ω unifie les théorèmes de Green, de Gauss et de Stokes."],
      ["sup:1420", "L'espérance E[X] est l'intégrale de X par rapport à la probabilité P : elle unifie le cas discret (une somme) et le cas à densité (une intégrale)."],
      ["sup:1149", "La méthode de Monte-Carlo approche ∫ f dμ par la moyenne des f(X_i) sur des tirages indépendants : la loi des grands nombres garantit la convergence, avec une erreur en 1/√n."]]],

    ["sup:481", {
      pratique: "cas fini de l'algèbre linéaire (espaces hermitiens), théorème spectral, solutions faibles des EDP, intégrale d'Itô (mouvement brownien), états et observables quantiques.",
      pourquoi: "la complétude prolonge à l'infini projections, bases orthonormées et diagonalisation : fonctions et opérateurs se traitent comme vecteurs et matrices." }, [
      ["sup:1473", "En dimension finie, tout espace euclidien ou hermitien est complet donc de Hilbert : l'algèbre linéaire est le cas fini de la théorie."],
      ["sup:205", "Le théorème spectral prolonge la diagonalisation : un opérateur auto-adjoint compact se diagonalise dans une base hilbertienne, avec des valeurs propres réelles qui tendent vers 0."],
      ["sup:1584", "Pour −Δu=f avec conditions au bord, le théorème de représentation de Riesz (Lax–Milgram) donne une unique solution faible dans H^1_0 : l'EDP se ramène à trouver un représentant de Riesz dans un espace de Hilbert."],
      ["sup:1600", "L'intégrale d'Itô est construite comme une isométrie entre espaces L² : E[(∫_0^t H dB)²] = E[∫_0^t H² ds]."],
      ["sup:799", "En dimension infinie, l'espace des états est L²(ℝ) ; position, impulsion et énergie sont des opérateurs auto-adjoints, et |ψ(x)|² est la densité de probabilité de présence."]]],

    ["sup:312", {
      pratique: "caractères d'un groupe fini (algèbre), spectre du laplacien d'une variété (géométrie), fonction caractéristique d'une loi (probabilités), FFT (calcul appliqué).",
      pourquoi: "la transformée de Fourier décompose un objet sur des exponentielles, qui diagonalisent la dérivation, la translation et la convolution : elle change ces opérations en simples multiplications." }, [
      ["sup:1411", "Pour un groupe fini abélien, les caractères forment une base orthonormée des fonctions sur le groupe : la transformée de Fourier discrète est le cas du groupe ℤ/nℤ."],
      ["sup:573", "Sur une variété compacte, les fonctions propres du laplacien généralisent les exponentielles e^(inθ) (fonctions propres du laplacien du cercle) : le spectre du laplacien encode la géométrie."],
      ["sup:339", "La fonction caractéristique φ(t)=E[e^(itX)] est la transformée de Fourier de la loi de X : elle caractérise la loi et change la somme de variables indépendantes en produit."],
      ["sup:527", "La FFT calcule la transformée de Fourier discrète de n points en O(n log n) opérations au lieu de O(n²), ce qui rend praticables le filtrage et la convolution de signaux."]]],

    ["sup:307", {
      pratique: "diagonalisation de la dérivation (algèbre), équations différentielles résolues par Laplace (analyse), somme de variables indépendantes (probabilités), diffraction (optique), convolution rapide par FFT (calcul appliqué).",
      pourquoi: "la transformée change dérivation et convolution en multiplications : les problèmes différentiels, probabilistes ou de signal deviennent algébriques." }, [
      ["sup:1191", "Les exponentielles e^(iξx) sont fonctions propres de d/dx (valeur propre iξ) : la transformée de Fourier diagonalise les opérateurs invariants par translation."],
      ["sup:309", "La transformée de Laplace change la dérivation en multiplication (L[y'] = pY − y(0)) : une équation différentielle linéaire à coefficients constants devient algébrique."],
      ["sup:321", "La densité de X+Y, pour X et Y indépendantes, est la convolution f_X * f_Y ; la transformée de Fourier la change en produit des fonctions caractéristiques."],
      ["enc:409", "En diffraction de Fraunhofer, l'amplitude à l'infini est la transformée de Fourier de la transmittance de l'ouverture : une fente rectangulaire donne un sinus cardinal."],
      ["sup:527", "Le théorème de convolution F(f*g) = F(f)·F(g) permet de calculer une convolution en O(n log n) avec la FFT, au lieu de O(n²)."]]],

    ["sup:303", {
      pratique: "diagonalisation du laplacien discret (algèbre), flot de Ricci (géométrie), mouvement brownien (probabilités), schémas aux différences finies (calcul appliqué).",
      pourquoi: "l'équation de la chaleur est à la fois une loi de diffusion, le générateur du mouvement brownien et un problème spectral : la même équation se lit comme un calcul de valeurs propres, une espérance ou un schéma numérique." }, [
      ["sup:205", "Sur une chaîne discrétisée, l'équation devient u' = −Lu avec L symétrique positive : le théorème spectral donne u(t) = e^(−tL) u(0) en diagonalisant L dans une base orthonormée."],
      ["sup:954", "Le flot de Ricci ∂_t g = −2 Ric(g) est une équation de type chaleur pour la métrique : il lisse la courbure comme la chaleur lisse la température, ce qui a servi à Perelman pour la conjecture de Poincaré."],
      ["sup:598", "La densité de B_t est le noyau de la chaleur : u(t,x) = E[f(x+B_t)] résout ∂_t u = ½ ∂_x² u avec u(0,·) = f ; les solutions de l'EDP sont des espérances."],
      ["sup:1674", "Discrétiser ∂_t u = ∂_x² u par un schéma explicite aux différences finies n'est stable que si Δt ≤ Δx²/2 : le pas de temps est contraint par le pas d'espace."]]],

    ["sup:1533", {
      pratique: "séparation des variables sur les modes propres du laplacien (algèbre), laplacien de Laplace–Beltrami (géométrie), chaleur et mouvement brownien (probabilités), équation des ondes, discrétisation numérique (calcul appliqué).",
      pourquoi: "une EDP exprime une loi locale (diffusion, propagation) ; on la résout en décomposant sur des modes propres ou en moyennant des trajectoires aléatoires." }, [
      ["sup:205", "Par séparation des variables, on décompose sur les fonctions propres du laplacien (Δφ=−λφ) : l'équation de la chaleur devient u_k' = −λ_k u_k, de solutions e^(−λ_k t)."],
      ["sup:573", "Le laplacien de Laplace–Beltrami généralise Δ aux variétés riemanniennes : chaleur, ondes et problème de Dirichlet s'y posent, et son spectre encode la géométrie."],
      ["sup:598", "Si B est un mouvement brownien, u(t,x)=E[f(x+B_t)] résout ∂_t u = ½ ∂_x² u avec u(0,·)=f : les solutions de l'EDP sont des espérances."],
      ["sup:1577", "L'équation des ondes ∂_t² u = c² ∂_x² u a pour solution générale f(x−ct)+g(x+ct) : deux ondes progressives, l'une vers la droite, l'autre vers la gauche (d'Alembert)."],
      ["sup:1672", "Différences finies et éléments finis remplacent l'EDP par un grand système linéaire, résolu par des algorithmes itératifs."]]],

    ["sup:111", {
      pratique: "espaces euclidiens (algèbre), espaces de Hilbert (analyse), corrélation entre variables aléatoires (probabilités), gradient conjugué (calcul appliqué).",
      pourquoi: "un produit scalaire mesure l'alignement de deux objets : longueurs, angles et projections orthogonales s'étendent aux fonctions et aux variables aléatoires, ce qui explique sa présence dans tous les domaines." }, [
      ["sup:201", "En dimension quelconque, un produit scalaire redonne longueurs, angles et orthogonalité ; l'inégalité de Cauchy–Schwarz |(u|v)| ≤ ‖u‖‖v‖ y reste vraie."],
      ["sup:241", "Avec (f|g) = (1/2π) ∫_0^(2π) f·conj(g), les e^(inθ) sont orthonormées : les coefficients de Fourier sont des projections orthogonales, et la formule de Parseval est le théorème de Pythagore."],
      ["sup:336", "La covariance est un produit scalaire sur les variables centrées de carré intégrable ; le coefficient de corrélation est le cosinus de l'angle entre elles, d'où |ρ| ≤ 1."],
      ["sup:1640", "Le gradient conjugué construit des directions orthogonales pour le produit scalaire (x|Ay) d'une matrice A symétrique définie positive : il résout Ax = b en au plus n itérations en arithmétique exacte."],
      ["enc:404", "Le travail d'une force constante est le produit scalaire W = F·d : seule la composante de la force dans la direction du déplacement travaille."]]],

    ["sup:124", {
      pratique: "groupes d'isométries (algèbre), matrices orthogonales (algèbre linéaire), transformations conformes (analyse complexe), transformations de Lorentz (relativité).",
      pourquoi: "des transformations qui se composent et s'inversent forment un groupe, et une géométrie se définit par ce que ce groupe laisse invariant ; passer de Galilée à Lorentz change la physique." }, [
      ["sup:80", "Les isométries du plan (translations, rotations, symétries) forment un groupe pour la composition ; classer les géométries revient à classer les groupes de transformations qui préservent leurs propriétés (programme d'Erlangen)."],
      ["sup:1200", "Une isométrie vectorielle est représentée par une matrice orthogonale (A^T A = I) : det A = 1 pour une rotation, −1 pour une réflexion."],
      ["sup:450", "Une fonction holomorphe de dérivée non nulle conserve les angles orientés : c'est une transformation conforme, comme les homographies z ↦ (az+b)/(cz+d)."],
      ["enc:421", "Le passage d'un référentiel inertiel à un autre est une transformation de Lorentz, qui conserve l'intervalle c²t²−x²−y²−z² ; ces transformations forment un groupe."]]],

    ["sup:541", {
      pratique: "algèbres de Lie (algèbre), théorème des fonctions implicites (analyse), espace des phases hamiltonien (calcul appliqué).",
      pourquoi: "une variété est un espace qui ressemble localement à ℝ^n : on y transporte le calcul différentiel, ce qui permet de traiter comme des espaces courbes les groupes de matrices, les surfaces définies par des équations et les espaces de phases." }, [
      ["sup:1535", "L'espace tangent à l'identité d'un groupe de Lie est une algèbre de Lie : le crochet [X,Y] linéarise la non-commutativité du groupe."],
      ["sup:1181", "Si df est de rang maximal, {f=0} est localement le graphe d'une fonction : c'est ainsi que les courbes et surfaces définies par des équations sont des sous-variétés."],
      ["sup:1768", "L'espace des phases d'un système mécanique est une variété munie d'une forme symplectique ; les équations de Hamilton y définissent un flot qui la conserve (théorème de Liouville)."]]],

    ["sup:544", {
      pratique: "métrique comme tenseur (algèbre tensorielle), mesure de volume et intégration sur une variété (théorie de la mesure), mouvement brownien sur une variété (probabilités), espace-temps courbe (relativité générale).",
      pourquoi: "une métrique fournit distances, angles et volumes en chaque point : intégrales, laplacien et diffusion se transportent alors de l'espace plat à l'espace courbe." }, [
      ["sup:1632", "Une métrique riemannienne est un champ de tenseurs symétriques définis positifs g_ij ; la courbure est elle aussi un tenseur, celui de Riemann."],
      ["sup:1364", "Dans une carte, la métrique définit une mesure de volume √det(g_ij) dx¹…dx^n : on peut ainsi intégrer sur une variété, et définir longueurs, aires et volumes."],
      ["sup:598", "Le générateur du mouvement brownien est ½Δ ; sur une variété riemannienne il devient ½Δ_g (Laplace–Beltrami), et les trajectoires reflètent la courbure et le volume."],
      ["enc:422", "L'espace-temps est une variété lorentzienne (métrique de signature (−,+,+,+)) ; les équations d'Einstein relient sa courbure à la matière et à l'énergie."]]],

    ["sup:1349", {
      pratique: "théorème de Tychonoff (fondements), entiers p-adiques (arithmétique), théorème de Riesz (analyse), existence de minima (optimisation).",
      pourquoi: "la compacité remplace « fini » en topologie : elle force l'existence d'extrema et de suites convergentes, et elle distingue la dimension finie de la dimension infinie." }, [
      ["sup:1952", "Le théorème de Tychonoff, qui affirme qu'un produit de compacts est compact, est équivalent à l'axiome du choix, lui-même équivalent au bon ordre de Zermelo."],
      ["sup:1519", "L'anneau ℤ_p des entiers p-adiques, limite des ℤ/p^nℤ, est un espace topologique compact : la compacité y traduit des propriétés d'approximation modulo toutes les puissances de p."],
      ["sup:427", "La boule unité fermée d'un espace normé est compacte si et seulement si l'espace est de dimension finie : la compacité sépare dimension finie et dimension infinie."],
      ["sup:440", "Une fonction continue (ou semi-continue inférieurement) sur un compact atteint son minimum : c'est le théorème d'existence de base en optimisation."]]],

    ["sup:1240", {
      pratique: "covariance comme forme quadratique (algèbre), changement de variables des densités (analyse), lignes de niveau gaussiennes (géométrie), simulation par Cholesky (calcul appliqué).",
      pourquoi: "étudier plusieurs variables ensemble, c'est faire de l'algèbre linéaire et de la géométrie sur des lois : la matrice de covariance donne la forme du nuage de points." }, [
      ["sup:206", "Pour un vecteur X de covariance Σ, Var(a^T X) = a^T Σ a : la variance d'une combinaison linéaire est une forme quadratique, positive car une variance l'est."],
      ["sup:264", "Pour Y = φ(X), la densité de Y s'obtient par changement de variables : f_Y(y) = f_X(φ^(-1)(y)) · |det Dφ^(-1)(y)|."],
      ["sup:1224", "Les lignes de niveau de la densité d'un vecteur gaussien sont les quadriques x^T Σ^(-1) x = c : des ellipses en dimension 2, des ellipsoïdes en dimension 3, dont les axes suivent les vecteurs propres de Σ."],
      ["sup:1965", "Si Σ = LL^T (Cholesky) et Z est un vecteur gaussien standard, alors LZ suit N(0, Σ) : c'est ainsi qu'on simule des gaussiennes corrélées."],
      ["enc:425", "Les trois composantes de la vitesse d'une molécule de gaz parfait sont des gaussiennes indépendantes : c'est un vecteur gaussien de ℝ³ (loi de Maxwell–Boltzmann)."]]],

    ["sup:327", {
      pratique: "démonstration par les fonctions caractéristiques (nombres complexes, Fourier), fluctuations gaussiennes en physique statistique, erreur de la méthode de Monte-Carlo (calcul appliqué).",
      pourquoi: "une somme de variables indépendantes devient un produit de transformées, dont la limite est gaussienne dès que la variance est finie : d'où la loi normale et l'erreur en 1/√n." }, [
      ["sup:1029", "Pour des variables centrées réduites, φ(t/√n)^n → e^(−t²/2) : la démonstration passe par la fonction caractéristique, à valeurs complexes, et le théorème de Lévy donne la convergence en loi."],
      ["sup:312", "La fonction caractéristique est la transformée de Fourier de la loi, et la somme de variables indépendantes correspond à un produit de transformées : la démonstration devient un calcul."],
      ["enc:425", "Une grandeur macroscopique (énergie, pression) est une somme d'un très grand nombre de contributions microscopiques presque indépendantes : ses fluctuations sont gaussiennes, d'ordre 1/√N en valeur relative."],
      ["sup:1242", "La méthode de Monte-Carlo estime une espérance par une moyenne de n tirages ; le TCL donne l'erreur, de l'ordre σ/√n, et un intervalle de confiance asymptotique."]]],

    ["sup:344", {
      pratique: "automates finis (fondements), matrices stochastiques (algèbre), équation de Kolmogorov (analyse), recuit simulé (calcul appliqué).",
      pourquoi: "l'évolution d'une chaîne est une multiplication de matrices : son comportement à long terme est gouverné par le spectre de la matrice de transition, ce qui relie automates, algèbre linéaire et algorithmes d'optimisation." }, [
      ["sup:661", "Un automate fini est un système à états finis avec des transitions ; en munissant chaque transition d'une probabilité, on obtient une chaîne de Markov (automate probabiliste)."],
      ["sup:223", "La loi de X_n est μP^n, où P est la matrice de transition (lignes de somme 1) : une loi stationnaire vérifie πP = π, vecteur propre à gauche pour la valeur propre 1 (Perron–Frobenius)."],
      ["sup:219", "En temps continu, les probabilités de transition vérifient P'(t) = P(t)Q, un système différentiel linéaire de solution P(t) = e^(tQ)."],
      ["sup:1740", "Le recuit simulé (comme l'algorithme de Metropolis) construit une chaîne de Markov de loi stationnaire e^(−f/T)/Z, qui concentre la masse sur les minima de f quand T diminue."],
      ["enc:503", "Une chaîne de Markov est une marche aléatoire sur un graphe orienté pondéré ; PageRank est la loi stationnaire de la marche d'un surfeur aléatoire (avec téléportation) sur le graphe du web."],
      ["enc:428", "L'algorithme de Metropolis construit une chaîne de Markov réversible dont la loi stationnaire est la distribution de Boltzmann e^(−E/kT)/Z : il simule l'équilibre thermique."]]],

    ["sup:598", {
      pratique: "équation de la chaleur (analyse), diffusion sur une variété riemannienne (géométrie), simulation de trajectoires pour évaluer des options (calcul appliqué).",
      pourquoi: "le mouvement brownien est la limite continue de la marche aléatoire et sa densité est le noyau de la chaleur : il relie probabilités, équations aux dérivées partielles et géométrie." }, [
      ["sup:303", "La densité de B_t est le noyau de la chaleur : u(t,x) = E[f(x+B_t)] résout ∂_t u = ½ ∂_x² u avec u(0,·) = f ; les solutions de l'EDP sont des espérances."],
      ["sup:544", "Sur une variété riemannienne, la diffusion de générateur ½Δ_g généralise le mouvement brownien : sa loi encode la courbure et le volume de la variété."],
      ["sup:856", "En finance, on estime un prix d'option par Monte-Carlo en simulant des trajectoires browniennes discrétisées et en moyennant le gain actualisé."],
      ["enc:428", "Einstein a relié le brownien à la diffusion : E[x²]=2Dt avec D=kT/(6πηr) pour une sphère de rayon r dans un fluide de viscosité η, ce qui fait apparaître la constante de Boltzmann."],
      ["sup:1364", "La loi du mouvement brownien est une mesure de probabilité sur l'espace des trajectoires continues (mesure de Wiener) : sa construction et celle de l'intégrale d'Itô reposent sur la théorie de la mesure."]]],

    ["sup:1637", {
      pratique: "formes quadratiques positives (algèbre), hessienne et convexité (analyse), maximum de vraisemblance (statistiques).",
      pourquoi: "la convexité garantit qu'un minimum local est global et que les conditions d'optimalité suffisent : on la retrouve dans les formes quadratiques positives, dans la hessienne et dans la log-vraisemblance des modèles usuels." }, [
      ["sup:206", "Une forme quadratique est convexe si et seulement si elle est positive : sa signature (réduction de Gauss, loi d'inertie de Sylvester) dit si un problème quadratique admet un minimum."],
      ["sup:251", "Une fonction de classe C² est convexe si et seulement si sa hessienne est positive en tout point ; en un point critique, une hessienne définie positive donne un minimum local strict."],
      ["sup:351", "Pour les modèles exponentiels (gaussien, binomial, Poisson), l'opposé de la log-vraisemblance est convexe : l'estimateur du maximum de vraisemblance résout un problème d'optimisation convexe."]]],

    ["sup:527", {
      pratique: "racines de l'unité (algèbre), transformée de Fourier et convolution (analyse), fonctions caractéristiques (probabilités).",
      pourquoi: "la FFT exploite la structure des racines de l'unité pour passer de O(n²) à O(n log n) : elle rend calculables toutes les opérations qu'une transformée de Fourier ramène à des produits, comme la convolution de deux signaux ou la loi d'une somme." }, [
      ["sup:1030", "La FFT s'appuie sur les racines n-ièmes de l'unité : les carrés des racines d'ordre n sont les racines d'ordre n/2, ce qui permet de découper le calcul en deux moitiés."],
      ["sup:312", "Le théorème de convolution change f∗g en produit f̂·ĝ : avec la FFT, convoluer deux signaux de n points coûte O(n log n) au lieu de O(n²)."],
      ["sup:339", "La loi d'une somme de variables indépendantes est une convolution, donc un produit de fonctions caractéristiques : la FFT sert à les calculer et à les inverser numériquement, par exemple pour évaluer des prix d'options."]]],

    ["sup:296", {
      pratique: "exponentielle de matrice et valeurs propres (algèbre), existence et unicité des trajectoires (analyse), flots sur les variétés (géométrie), théorème ergodique (probabilités).",
      pourquoi: "étudier la stabilité, c'est comprendre le comportement à long terme d'un flot : la linéarisation le ramène aux valeurs propres, la géométrie lui donne son espace des phases, et le point de vue probabiliste remplace la trajectoire par la loi stationnaire." }, [
      ["sup:218", "Pour x' = Ax, la solution est x(t) = e^(tA)x₀ : l'origine est asymptotiquement stable si et seulement si toutes les valeurs propres de A sont de partie réelle strictement négative."],
      ["sup:287", "Le théorème de Cauchy–Lipschitz assure l'existence et l'unicité locales des trajectoires : sans lui, parler de flot et de stabilité d'un point d'équilibre n'a pas de sens."],
      ["sup:1608", "Un système dynamique est le flot d'un champ de vecteurs ; sur une variété, l'espace des phases est courbe (tore, sphère) et le champ est une section du fibré tangent."],
      ["sup:1507", "Le théorème ergodique affirme que la moyenne temporelle le long d'une trajectoire converge vers la moyenne sous la loi stationnaire : c'est l'analogue probabiliste de l'étude asymptotique d'un système dynamique."]]]
  ];

  window.CORRESPONDANCES_PIVOTS = PIVOTS;

  const COULEUR_ENC = "#9aa7bd";
  const NIVEAU_ENC = { "college": ["Collège", "ve-l-e"], "lycee": ["Lycée", "ve-l-e"], "prepa": ["Prépa", "ve-l-p"], "grandes-ecoles": ["Gr. éc.", "ve-l-g"] };

  // ---------- Mise en forme ----------
  // 5 vignettes alignées par ligne quand la zone de contenu est assez large (container queries) :
  //   ≥ 960 px → 5 colonnes · 720–959 → 3 · 480–719 → 2 · < 480 → 1
  const CSS_CORRESPONDANCES = `
    #hub-cards { container-type: inline-size; }

    /* repli si les container queries ne sont pas gérées */
    #hub-cards .hub-links { grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
    @container (min-width: 960px) { #hub-cards .hub-links { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
    @container (min-width: 720px) and (max-width: 959.98px) { #hub-cards .hub-links { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
    @container (min-width: 480px) and (max-width: 719.98px) { #hub-cards .hub-links { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @container (max-width: 479.98px) { #hub-cards .hub-links { grid-template-columns: minmax(0, 1fr); } }

    .cr-legend { margin: 2px 0 4px; }
    .cr-legend a.ve-dom { cursor: pointer; }
    .cr-legend .cr-n { color: #7a8090; margin-left: 5px; }
    .cr-aide { color: #9a9a9a; font-size: 13px; margin: 0 0 6px; }

    /* titre de section : un domaine MSC */
    #hub-cards h2.cr-section { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 12px; margin: 30px 0 14px; padding-bottom: 8px;
                               font-size: 18px; color: #e6e6e6; border-bottom: 1px solid #2a2d35; scroll-margin-top: 6px; }
    #hub-cards h2.cr-section:first-child { margin-top: 6px; }
    #hub-cards .cr-count { font-size: 12px; font-weight: 400; color: #9a9a9a; }
    #hub-cards a.cr-msc { margin-left: auto; font-size: 12px; font-weight: 400; color: #7aa2ff; text-decoration: none; }
    #hub-cards a.cr-msc:hover { text-decoration: underline; }

    #hub-cards .cr-head-tags { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .cr-domtag { display: inline-flex; align-items: center; font-size: 11px; font-weight: 600; line-height: 1.4;
                 padding: 2px 10px 2px 8px; border-radius: 999px; border: 1px solid; }
    .cr-domtag .ve-dot { margin-right: 6px; }

    /* synthèse sous le titre du pivot */
    #hub-cards .hub-resume { margin: -4px 0 16px; font-size: 14px; line-height: 1.55; color: #b4b9c4; }
    #hub-cards .hub-resume strong { color: #e6e6e6; font-weight: 600; }

    #hub-cards .hub-link { padding: 10px 11px; min-width: 0; }
    /* domaine (+ niveau) AU-DESSUS du titre de la notion */
    #hub-cards .hub-link-top { flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 6px; margin-bottom: 7px; }
    #hub-cards .cr-tags { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    #hub-cards .hub-link-top strong { font-size: 13.5px; line-height: 1.25; text-align: left; overflow-wrap: break-word; hyphens: auto; -webkit-hyphens: auto; }
    #hub-cards .hub-link-cat { font-size: 9.5px; padding: 2px 7px; }
    #hub-cards .hub-link-cat.cr-enc { color: ${COULEUR_ENC}; background: rgba(154, 167, 189, .14); }
    #hub-cards .hub-link-raison { font-size: 12px; line-height: 1.45; overflow-wrap: break-word; hyphens: auto; -webkit-hyphens: auto; }
  `;

  function injectStyle() {
    if (document.getElementById("correspondances-style")) return;
    const s = document.createElement("style");
    s.id = "correspondances-style";
    s.textContent = CSS_CORRESPONDANCES;
    document.head.appendChild(s);
  }
  injectStyle();

  // ---------- Rendu ----------
  // Informations d'affichage d'une notion liée : sommaire (pastille MSC) ou Encyclopédie (pastille grise).
  function infoNotion(cle) {
    if (cle.indexOf("enc:") === 0) {
      const n = (window.NOTIONS || []).find(x => x.id === +cle.slice(4));
      if (!n) return null;
      const nv = NIVEAU_ENC[n.niveau] || [n.niveau || "", "ve-l-p"];
      return { title: n.title, info: "Encyclopédie — " + n.category + " (hors classification MSC)",
               tag: '<span class="hub-link-cat cr-enc">' + escapeHtml(n.category) + '</span>',
               niveau: '<span class="ve-lvl ' + nv[1] + '">' + escapeHtml(nv[0]) + '</span>' };
    }
    const e = index().get(cle);
    if (!e) return null;
    const d = domaineObjet(cle);
    const matiere = typeof prettifySubject === "function" ? prettifySubject(e.subj) : e.subj;
    return { title: e.title, info: matiere + " — " + libelleNiveau(e.grade),
             tag: d ? '<span class="hub-link-cat" style="color:' + d.couleur + ';background:' + rgba(d.couleur, 0.13) + '">' + escapeHtml(d.court) + '</span>' : "",
             niveau: '<span class="ve-lvl ' + classeNiveau(e.grade) + '">' + escapeHtml(libelleNiveau(e.grade)) + '</span>' };
  }

  function vignette(cle, raison) {
    const i = infoNotion(cle);
    return '<div class="hub-link" onclick="veOpenNotion(\'' + cle + '\')" title="' + escapeAttr(i.info) + '">' +
      '<div class="hub-link-top"><div class="cr-tags">' + i.tag + i.niveau + '</div><strong>' + escapeHtml(i.title) + '</strong></div>' +
      '<p class="hub-link-raison">' + escapeHtml(raison) + '</p></div>';
  }

  function carte(p) {
    const cle = p[0], r = p[1];
    const i = infoNotion(cle);
    if (!i) { console.warn("Correspondances : pivot introuvable :", cle); return null; }
    const visibles = p[2].filter(l => {
      const ok = !!infoNotion(l[0]);
      if (!ok) console.warn("Correspondances : notion introuvable :", l[0], "(pivot " + cle + ")");
      return ok;
    });
    if (visibles.length === 0) return null;
    const d = domaineObjet(cle);
    const pastille = d ? '<span class="cr-domtag" style="color:' + d.couleur + ';background:' + rgba(d.couleur, 0.10) + ';border-color:' + rgba(d.couleur, 0.45) + '">' +
      '<span class="ve-dot" style="background:' + d.couleur + '"></span>' + escapeHtml(d.nom) + '</span>' : "";
    const card = document.createElement("div");
    card.className = "notion-card hub-card";
    card.innerHTML =
      '<div class="hub-card-header" onclick="veOpenNotion(\'' + cle + '\')">' +
        '<div class="cr-head-tags">' + pastille + i.niveau + '</div>' +
        '<h3>' + escapeHtml(i.title) + '</h3>' +
      '</div>' +
      '<p class="hub-resume"><strong>En pratique :</strong> ' + escapeHtml(r.pratique) + ' <strong>Pourquoi :</strong> ' + escapeHtml(r.pourquoi) + '</p>' +
      '<div class="hub-links">' + visibles.map(l => vignette(l[0], l[1])).join("") + '</div>';
    return card;
  }

  window.crAller = function (cle) {
    const el = document.getElementById("cr-" + cle);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function loadCorrespondanceTable() {
    const c = document.getElementById("content");
    if (!c) return;
    if (typeof setActiveNav === "function") setActiveNav("tableau");

    // pivots rangés sous leur domaine MSC (d'après msc-data.js) ; sans données MSC, une seule liste
    const groupes = DOMAINES.map(d => ({ d, pivots: [] })), sans = [];
    PIVOTS.forEach(p => {
      const d = domaineObjet(p[0]), g = d && groupes.find(x => x.d === d);
      (g ? g.pivots : sans).push(p);
    });

    const legende = groupes.filter(g => g.pivots.length).map(g =>
      '<span class="ve-stat"><a class="ve-dom" href="#cr-' + g.d.cle + '" onclick="crAller(\'' + g.d.cle + '\'); return false;" title="Aller à la section">' +
      '<span class="ve-dot" style="background:' + g.d.couleur + '"></span>' + escapeHtml(g.d.nom) + '<span class="cr-n">' + g.pivots.length + '</span></a></span>').join("") +
      '<span class="ve-stat" title="Notions de l\'Encyclopédie, hors classification MSC"><span class="ve-dot" style="background:' + COULEUR_ENC + '"></span>Physique · Informatique (Encyclopédie)</span>';

    c.innerHTML = `
      <h1>Tableau de correspondances interdisciplinaires</h1>
      <p class="subtitle">Les notions-pivots qui relient les six domaines du référentiel MSC — Fondements et Logique, Algèbre et Théorie des nombres, Analyse mathématique, Géométrie et Topologie, Probabilités et Statistiques, Mathématiques appliquées et computationnelles — avec, pour chaque lien, la raison mathématique précise de la correspondance.</p>
      <div class="ve-stats cr-legend">${legende}</div>
      <p class="cr-aide">${PIVOTS.length} pivots, rangés par domaine MSC. Chaque pivot est relié aux autres domaines par des notions du sommaire ; la Physique et l'Informatique, absentes du référentiel MSC, sont reprises de l'Encyclopédie (pastille grise). Cliquez sur un pivot ou une vignette pour ouvrir sa fiche, sur un domaine pour aller à sa section.</p>
      <div id="hub-cards"></div>
    `;

    const container = document.getElementById("hub-cards");
    groupes.forEach(g => {
      if (!g.pivots.length) return;
      const h = document.createElement("h2");
      h.className = "cr-section";
      h.id = "cr-" + g.d.cle;
      h.innerHTML = '<span class="ve-dot" style="background:' + g.d.couleur + '"></span>' + escapeHtml(g.d.nom) +
        '<span class="cr-count">' + g.pivots.length + ' pivot' + (g.pivots.length > 1 ? "s" : "") + '</span>' +
        '<a class="cr-msc" href="' + PAGE_MSC + '#' + g.d.ancre + '">présentation MSC →</a>';
      container.appendChild(h);
      g.pivots.forEach(p => { const k = carte(p); if (k) container.appendChild(k); });
    });
    sans.forEach(p => { const k = carte(p); if (k) container.appendChild(k); });
  }

  window.loadCorrespondanceTable = loadCorrespondanceTable;
})();

// =====================================================================
// PAGE « VUE D'ENSEMBLE » (chapitre 01 de « 5000 Formules ») — 6 domaines MSC
// =====================================================================
// Le tableau d'équivalences, les schémas et la version pédagogique mettent en vis-à-vis
// les 6 grands domaines du référentiel MSC (Fondements et Logique · Algèbre et Théorie des
// nombres · Analyse mathématique · Géométrie et Topologie · Probabilités et Statistiques ·
// Mathématiques appliquées et computationnelles), à partir des notions du sommaire
// (window.MATHSITE_TREE, jsonMathsite.js).
//
// Chaque notion est rangée dans la colonne de SON domaine MSC, tel qu'il est affiché sur
// sa fiche (msc-data.js / MathSite_fiches_MSC.xlsx). Les titres, niveaux et dénombrements
// sont relus dans le sommaire au moment de l'affichage. Si un rattachement MSC change
// dans l'Excel, la console signale les cases devenues incohérentes (avertissement « Vue
// d'ensemble ») : il suffit alors de remplacer la notion dans les tableaux ci-dessous.
//
// Références de la forme "sup:<id>" (Prépa / Grandes Écoles) ou "ecole:<id>" (Collège /
// Lycée), comme les clés de MATHSITE_FICHES.
//
// Mise en place sans toucher à formules-data.js ni formules.js : au chargement complet de
// la page, le chapitre "overview" est remplacé et renderFormulesBlock() est enveloppée pour
// les 4 types de blocs ve_stats, ve_table, ve_schema, ve_levels ; tous les autres blocs
// passent par l'original.
// =====================================================================
(function () {
  "use strict";

  // Domaines MSC, index du sommaire, pastilles et ouverture d'une fiche : voir le bloc commun ci-dessus.
  const { DOMAINES, PAGE_MSC, index, domaineMsc, classeNiveau, libelleNiveau, enteteDomaine } = window.MSC_COMMUN;

  // ---------- Données ----------
  // Thème, puis une liste de notions (0 à 2) par domaine, dans l'ordre de DOMAINES.
  // Liste vide = aucune notion du sommaire ne relie proprement ce thème à ce domaine.
  const VE_TABLE = [
    ["Espaces vectoriels",
      ["sup:164","sup:1952"],
      ["sup:95","sup:1632"],
      ["sup:1218","sup:429"],
      ["ecole:149","sup:1212"],
      ["sup:1240","sup:1426"],
      ["sup:1250","sup:1639"]],
    ["Matrices",
      ["sup:1489","sup:661"],
      ["sup:104","sup:191"],
      ["sup:219","sup:1478"],
      ["sup:125","sup:1690"],
      ["sup:344","sup:1506"],
      ["sup:1343","sup:1643"]],
    ["Formes quadratiques",
      [],
      ["sup:206","sup:1472"],
      ["ecole:105","sup:251"],
      ["sup:119","sup:1224"],
      ["sup:336","sup:624"],
      ["sup:1308","sup:1725"]],
    ["Polynômes",
      ["sup:670","sup:1922"],
      ["ecole:1213","sup:1625"],
      ["sup:66","sup:1381"],
      ["sup:547","sup:1775"],
      ["ecole:147","sup:1234"],
      ["sup:1244","sup:1755"]],
    ["Groupes",
      ["sup:1026","sup:641"],
      ["sup:82","sup:1984"],
      ["sup:534","sup:710"],
      ["sup:124","sup:1617"],
      ["sup:1510","sup:601"],
      ["ecole:1240","sup:1890"]],
    ["Topologie",
      ["sup:1550","sup:659"],
      ["sup:1519","sup:1961"],
      ["sup:231","sup:427"],
      ["sup:1263","sup:1619"],
      ["sup:341","sup:1501"],
      ["sup:1310","sup:440"]],
    ["Analyse complexe",
      [],
      ["sup:92","sup:1799"],
      ["sup:441","sup:447"],
      ["sup:549","sup:1782"],
      ["sup:339","sup:1425"],
      ["sup:1766"]],
    ["Intégration",
      ["sup:1027","sup:1952"],
      ["sup:185","sup:1210"],
      ["sup:166","sup:1364"],
      ["ecole:66","sup:1611"],
      ["sup:321","sup:1420"],
      ["sup:1245","sup:1735"]],
    ["ED / Fourier",
      [],
      ["sup:218","sup:1411"],
      ["ecole:1212","sup:312"],
      ["sup:556","sup:573"],
      ["sup:347","sup:1677"],
      ["sup:1249","sup:527"]]
  ];

  // Chaînes de progression : chaque étape est une notion du sommaire ; les chaînes
  // traversent les domaines du titre, dans l'ordre.
  const VE_SCHEMAS = [
    { titre: "Fondements → Algèbre → Analyse", chaines: [
      ["sup:164","sup:95","sup:1218","sup:429","sup:494"],
      ["sup:1026","sup:361","sup:228","sup:492","sup:481"],
      ["sup:1952","sup:1208","sup:1443","sup:1445"] ] },
    { titre: "Algèbre → Analyse → Géométrie et Topologie", chaines: [
      ["sup:95","sup:429","sup:404","sup:541","sup:1607","sup:1615"],
      ["sup:1032","sup:1162","sup:441","sup:547","sup:1775"],
      ["sup:206","sup:251","sup:1224","sup:1538"] ] },
    { titre: "Analyse → Probabilités → Mathématiques appliquées", chaines: [
      ["sup:1364","sup:1419","sup:1420","sup:1242","sup:1737"],
      ["sup:241","sup:312","sup:316","sup:339","sup:527"],
      ["sup:1021","sup:309","sup:347","sup:1677","sup:876"] ] }
  ];

  // Version pédagogique : cinq jalons de difficulté croissante par domaine, du L1 au M2.
  const VE_LEVELS = [
    { dom: "FOND", notions: ["sup:161","sup:165","sup:1547","sup:641","sup:1922"] },
    { dom: "ALG", notions: ["sup:95","sup:191","sup:1396","sup:1625","sup:1984"] },
    { dom: "ANA", notions: ["sup:166","sup:312","sup:1364","sup:1563","sup:783"] },
    { dom: "GEO", notions: ["sup:111","sup:1224","sup:541","sup:1607","sup:751"] },
    { dom: "PRO", notions: ["sup:148","sup:327","sup:1506","sup:1600","sup:1807"] },
    { dom: "APP", notions: ["sup:1123","sup:1249","sup:527","sup:1638","sup:775"] }
  ];

  // Pastille cliquable : niveau + titre de la notion. attendu = domaine MSC de la colonne (contrôle console).
  function puce(cle, attendu) {
    const e = index().get(cle);
    if (!e) { console.warn("Vue d'ensemble : notion introuvable dans le sommaire :", cle); return ""; }
    if (attendu) {
      const d = domaineMsc(cle);
      if (d && d !== attendu) console.warn("Vue d'ensemble : « " + e.title + " » (" + cle + ") est classée « " + d + " » par le référentiel MSC, pas dans « " + attendu + " ».");
    }
    const matiere = typeof prettifySubject === "function" ? prettifySubject(e.subj) : e.subj;
    return '<a class="ve-notion" href="#" onclick="veOpenNotion(\'' + cle + '\'); return false;" title="' +
      escapeAttr(matiere + " — " + libelleNiveau(e.grade)) + '">' +
      '<span class="ve-lvl ' + classeNiveau(e.grade) + '">' + escapeHtml(libelleNiveau(e.grade)) + '</span>' +
      '<span class="ve-t">' + escapeHtml(e.title) + '</span></a>';
  }

  // ---------- Rendu des blocs ----------
  function rendreStats() {
    const T = window.MATHSITE_TREE || {};
    const compte = obj => Object.keys(obj || {}).reduce((s, g) => s + (Array.isArray(obj[g]) ? obj[g].length : compte(obj[g])), 0);
    const total = ["College", "Lycee", "L1", "L2", "L3", "M1", "M2"].reduce((s, k) => s + compte(T[k]), 0);
    let html = '<div class="ve-stats"><span class="ve-stat ve-stat-total"><b>' + total + '</b> notions dans le sommaire</span>';
    if (window.MATHSITE_MSC && window.MATHSITE_MSC_REFERENTIEL) {
      const n = {};
      Object.keys(window.MATHSITE_MSC).forEach(k => { const d = domaineMsc(k); n[d] = (n[d] || 0) + 1; });
      html += DOMAINES.map(d => '<span class="ve-stat">' + enteteDomaine(d, false) + ' ' + (n[d.nom] || 0) + '</span>').join("");
    }
    return html + '</div>';
  }

  function rendreTableau(lignes) {
    return '<div class="formules-table-wrap formules-table-wrap-big"><table class="formules-table ve-table">' +
      '<colgroup><col style="width:140px">' + DOMAINES.map(() => '<col>').join("") + '</colgroup>' +
      '<thead><tr><th>Thème</th>' + DOMAINES.map(d => '<th>' + enteteDomaine(d, true) + '</th>').join("") + '</tr></thead><tbody>' +
      lignes.map(l => '<tr><td>' + escapeHtml(l[0]) + '</td>' +
        DOMAINES.map((d, i) => {
          const cell = l[i + 1] || [];
          return '<td class="c"><div class="ve-cell">' + (cell.length
            ? cell.map(k => puce(k, d.nom)).join("")
            : '<span class="ve-empty" title="Aucune notion du sommaire ne relie ce thème à ce domaine">—</span>') + '</div></td>';
        }).join("") + '</tr>').join("") +
      '</tbody></table></div>';
  }

  function rendreSchema(titre, chaines) {
    return '<div class="formules-schema"><h4>' + escapeHtml(titre) + '</h4>' +
      chaines.map(ch => '<div class="formules-chain ve-chain">' +
        ch.map(k => puce(k)).filter(Boolean).join('<span class="ve-arrow">→</span>') + '</div>').join("") + '</div>';
  }

  function rendreNiveaux(colonnes) {
    return '<div class="hub-links formules-cols3 ve-levels">' + colonnes.map(c => {
      const d = DOMAINES.find(x => x.cle === c.dom) || DOMAINES[0];
      return '<div class="hub-link ve-levelcol"><div class="hub-link-top"><strong>' + enteteDomaine(d, true) + '</strong></div>' +
        '<div class="ve-cell">' + c.notions.map(k => puce(k, d.nom)).join("") + '</div></div>';
    }).join("") + '</div>';
  }

  // ---------- Contenu du chapitre ----------
  function blocsChapitre() {
    return [
      ["p", "Un même objet mathématique change de nom et de forme selon le domaine où on le regarde. Ce tableau met en vis-à-vis les six grands domaines du référentiel MSC — Fondements et Logique, Algèbre et Théorie des nombres, Analyse mathématique, Géométrie et Topologie, Probabilités et Statistiques, Mathématiques appliquées et computationnelles — pour un même thème. Chaque case cite jusqu'à deux notions du sommaire, de la plus élémentaire à la plus avancée, rangées dans le domaine MSC affiché sur leur fiche ; un tiret signale qu'aucune notion du sommaire ne relie proprement ce thème à ce domaine. Cliquez sur une notion pour ouvrir sa fiche, sur un domaine pour ouvrir sa présentation MSC."],
      ["ve_stats"],
      ["ve_table", VE_TABLE],
      ["h", "Schémas conceptuels"],
      ["p", "Trois lectures rapides du même tableau, sous forme de chaînes de progression qui traversent les domaines dans l'ordre du titre : chaque étape est une notion du sommaire."]
    ].concat(
      VE_SCHEMAS.map(s => ["ve_schema", s.titre, s.chaines]),
      [
        ["h", "Version pédagogique — de la L1 au M2"],
        ["p", "Pour chaque domaine, cinq jalons de difficulté croissante, du L1 au M2."],
        ["ve_levels", VE_LEVELS],
        ["note", "Fondements et Logique posent le langage (ensembles, preuves, calculabilité) · Algèbre et Théorie des nombres structurent les objets · Analyse étudie les variations · Géométrie et Topologie donnent l'interprétation spatiale · Probabilités et Statistiques modélisent l'incertitude · Mathématiques appliquées et computationnelles en font des algorithmes et des modèles."]
      ]);
  }

  // ---------- Mise en forme ----------
  const CSS_VE = String.raw`


    .ve-cell { display: flex; flex-direction: column; gap: 7px; }
    a.ve-notion { display: flex; align-items: baseline; gap: 6px; color: #e6e6e6; text-decoration: none;
                  font-size: 12.5px; line-height: 1.35; cursor: pointer; }
    a.ve-notion .ve-t { min-width: 0; overflow-wrap: break-word; hyphens: auto; -webkit-hyphens: auto; }
    a.ve-notion:hover .ve-t { color: #7aa2ff; text-decoration: underline; }
    .ve-empty { color: #4a505c; font-size: 14px; padding-left: 4px; cursor: help; }

    table.ve-table { table-layout: fixed; min-width: 1100px; }
    table.ve-table a.ve-notion { font-size: 12px; gap: 5px; }
    table.ve-table .ve-lvl { min-width: 28px; padding: 1px 5px; }
    table.ve-table th { white-space: normal; vertical-align: bottom; font-size: 10.5px; line-height: 1.3; padding: 8px 8px; }
    table.ve-table td { padding: 10px 8px; }
    table.ve-table td.c { color: #e6e6e6; }

    .ve-chain { font-family: inherit; line-height: 1.5; display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 4px; }
    .ve-chain a.ve-notion { display: inline-flex; font-size: 13px; }
    .ve-arrow { color: #5f6675; margin: 0 4px; }

    .ve-levels { grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); }
    .ve-levelcol { cursor: default; padding: 12px 12px; }
    .ve-levelcol .hub-link-top { margin-bottom: 10px; min-height: 50px; }
    .ve-levelcol .hub-link-top strong { font-size: 12.5px; line-height: 1.3; }
    .ve-levelcol a.ve-notion { font-size: 12.5px; }
  `;

  function injecteStyle() {
    if (document.getElementById("correspondances-ve-style")) return;
    const s = document.createElement("style");
    s.id = "correspondances-ve-style";
    s.textContent = CSS_VE;
    document.head.appendChild(s);
  }

  // ---------- Installation (après le chargement de tous les scripts) ----------
  let installe = false;
  function installe_() {
    if (installe) return;
    const chapitre = (window.FORMULES_CHAPTERS || []).find(c => c.id === "overview");
    if (!chapitre || typeof window.renderFormulesBlock !== "function") {
      console.warn("Vue d'ensemble : chapitre ou renderFormulesBlock introuvable, page inchangée.");
      return;
    }
    installe = true;
    injecteStyle();
    chapitre.blocks = blocsChapitre();

    const original = window.renderFormulesBlock;
    window.renderFormulesBlock = function (b) {
      switch (b && b[0]) {
        case "ve_stats":  return rendreStats();
        case "ve_table":  return rendreTableau(b[1]);
        case "ve_schema": return rendreSchema(b[1], b[2]);
        case "ve_levels": return rendreNiveaux(b[1]);
        default:          return original.apply(this, arguments);
      }
    };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", installe_);
  else installe_();
})();
