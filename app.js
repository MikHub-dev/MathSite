// Version : 1.5
// --- Icônes SVG pour les applications pratiques ---
const ICONS = {"transport": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13\"/><rect x=\"2.5\" y=\"13\" width=\"19\" height=\"5\" rx=\"1.5\"/><circle cx=\"7\" cy=\"18.5\" r=\"1.6\"/><circle cx=\"17\" cy=\"18.5\" r=\"1.6\"/></svg>", "space": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 2c2.5 2 4 6 4 10.5L12 16l-4-3.5C8 8 9.5 4 12 2z\"/><path d=\"M9 13l-3 1 1 3M15 13l3 1-1 3\"/><circle cx=\"12\" cy=\"9\" r=\"1.3\"/></svg>", "medicine": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 21s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9z\"/><path d=\"M9 12h2v-2h2v2h2v2h-2v2h-2v-2H9z\"/></svg>", "finance": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M3 20h18M6 20V11m6 9V6m6 14v-7\"/><path d=\"M4 8l5-4 4 3 6-4\"/></svg>", "electronics": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"1\"/><path d=\"M9 2v2M12 2v2M15 2v2M9 20v2M12 20v2M15 20v2M2 9h2M2 12h2M2 15h2M20 9h2M20 12h2M20 15h2\"/></svg>", "computer": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"1.5\"/><path d=\"M8 20h8M12 16v4\"/><path d=\"M8 8l-2 2.5L8 13M16 8l2 2.5L16 13\"/></svg>", "physics": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"3.6\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"3.6\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"3.6\" transform=\"rotate(120 12 12)\"/></svg>", "communication": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 21v-8M12 13l6-7M8 6l4 7\"/><circle cx=\"18\" cy=\"5\" r=\"2\"/><circle cx=\"8\" cy=\"5\" r=\"2\"/><path d=\"M4 12a8 8 0 0 1 3-6.2M20 12a8 8 0 0 0-3-6.2\"/></svg>", "construction": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M4 21V10l8-5 8 5v11\"/><path d=\"M4 21h16M9 21v-6h6v6\"/></svg>", "environment": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 21c5-2 8-6 8-11a8 8 0 0 0-16 0c0 5 3 9 8 11z\"/><path d=\"M12 21V9M12 9c0-2.5 1.5-4 4-5M12 13c0-2-1.5-3.2-3.5-4\"/></svg>", "chemistry": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 2h6M10 2v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 20h12.4a1.5 1.5 0 0 0 1.3-2.5L14 8V2\"/><path d=\"M7.5 15h9\"/></svg>", "biology": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M7 3c0 6 10 6 10 12s-10 6-10 12M17 3c0 6-10 6-10 12s10 6 10 12\"/><path d=\"M7.5 8h9M7.5 20h9M7 12h10\"/></svg>", "security": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6z\"/><path d=\"M9 12l2 2 4-4\"/></svg>", "games": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"2\" y=\"8\" width=\"20\" height=\"10\" rx=\"4\"/><path d=\"M7 11v4M5 13h4\"/><circle cx=\"16\" cy=\"11.5\" r=\"1\"/><circle cx=\"18.5\" cy=\"14\" r=\"1\"/></svg>", "agriculture": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 21V9\"/><path d=\"M12 9C7 9 4 6 4 3c4 0 8 2 8 6zM12 9c5 0 8-3 8-6-4 0-8 2-8 6z\"/><path d=\"M6 21h12\"/></svg>", "education": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M2 8l10-4 10 4-10 4z\"/><path d=\"M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5M22 8v6\"/></svg>", "sports": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M7 4h10v4a5 5 0 0 1-10 0z\"/><path d=\"M4 5h3v2a3 3 0 0 1-3-3zM20 5h-3v2a3 3 0 0 0 3-3z\"/><path d=\"M12 13v4M9 21h6M9 18h6v3H9z\"/></svg>", "audio": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 18V5l11-2v13\"/><circle cx=\"6.5\" cy=\"18\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"16\" r=\"2.5\"/></svg>", "navigation": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/></svg>", "data": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M4 20V10M10 20V4M16 20v-7M21 20H3\"/></svg>", "robotics": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"5\" y=\"8\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M12 8V4M9 4h6\"/><circle cx=\"9\" cy=\"13\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"15\" cy=\"13\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M9 16.5h6M2 12v3M22 12v3\"/></svg>", "industry": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M3 21V11l5 3v-3l5 3V8l6 4v9z\"/><path d=\"M3 21h18\"/></svg>", "research": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 3h6M10 3v5.5L5 17a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3L14 8.5V3\"/><path d=\"M7.5 14h9\"/></svg>", "network": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"5\" cy=\"6\" r=\"2.3\"/><circle cx=\"19\" cy=\"6\" r=\"2.3\"/><circle cx=\"12\" cy=\"18\" r=\"2.3\"/><path d=\"M6.8 7.6L11 16M17.2 7.6L13 16M7.3 6h9.4\"/></svg>", "art": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H13a1.5 1.5 0 0 1 0-3h4a3 3 0 0 0 3-3c0-4.4-4-8-8-8z\"/><circle cx=\"7.5\" cy=\"10.5\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"7.5\" cy=\"15\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"7.5\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/></svg>"};

// --- Normalisation pour recherche insensible aux accents et à la casse ---
function normalize(s) {
  return s ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str == null ? "" : String(str);
  return d.innerHTML;
}

let notions = [];

// --- Chargement des données ---
// NOTIONS est fourni par notions-data.js (chargé avant app.js dans index.html).
// On ne fait plus de fetch("notions.json") : en local (file://), fetch() d'un fichier
// local est bloqué par Chrome (erreur CORS) et la page resterait vide.
function loadNotions() {
  if (!window.NOTIONS) {
    console.error("notions-data.js n'a pas été chargé ou est vide.");
    const c = document.getElementById("content");
    if (c) c.innerHTML = "<h1>Erreur de chargement</h1><p>Le fichier notions-data.js est introuvable ou vide.</p>";
    return;
  }
  notions = window.NOTIONS;
  renderSidebar();
  loadHome();
}

// --- Sidebar : regroupée par niveau puis catégorie ---
const NIVEAU_LABELS = {
  college: "Collège",
  lycee: "Lycée",
  prepa: "Prépa / CPGE",
  "grandes-ecoles": "Grandes Écoles"
};
const NIVEAU_ORDER = ["college", "lycee", "prepa", "grandes-ecoles"];
const NIVEAU_TAG_CLASS = {
  college: "tag-college",
  lycee: "tag-lycee",
  prepa: "tag-prepa",
  "grandes-ecoles": "tag-ge"
};
function niveauTagClass(niveau) {
  return NIVEAU_TAG_CLASS[niveau] || "tag-college";
}

// --- Sommaire "1150 concepts" (jsonMathsite.js) : Niveau > Année > Matière ---
// jsonMathsite.js fournit window.MATHSITE_TREE = { College:{6e,5e,4e,3e}, Lycee:{Seconde,Premiere,Terminale},
// L1, L2, L3, M1, M2 } — chaque feuille étant { matière: [{id,title}, ...] }.
// L1/L2 (Licence/Prépa) et L3/M1/M2 (Master/Grandes Écoles) n'ont pas de sous-clé "année" dans le JSON
// (le nom du cycle fait déjà office d'année), donc on les traite comme leurs propres "années".
const GRADE_LABELS = { Premiere: "Première" };
function prettifyGrade(key) {
  return GRADE_LABELS[key] || key;
}

const SUBJECT_LABELS = {
  Arithmetique: "Arithmétique",
  Algebre: "Algèbre",
  GeometriePlane: "Géométrie plane",
  GeometrieEspace: "Géométrie dans l'espace",
  Geometrie: "Géométrie",
  Fonctions: "Fonctions",
  Trigonometrie: "Trigonométrie",
  TrigonometrieAvancee: "Trigonométrie (approfondissements)",
  Complexes: "Nombres complexes",
  ComplexesAvances: "Nombres complexes (approfondissements)",
  Probabilites: "Probabilités",
  ProbabilitesStatistiques: "Probabilités et statistiques",
  Probabilites_Avancees: "Probabilités avancées",
  Probabilites_Avancees_2: "Probabilités avancées (II)",
  Probabilites_Stochastiques_Avancees: "Probabilités stochastiques avancées",
  Limites: "Limites",
  TVI: "Théorème des valeurs intermédiaires",
  Derivation: "Dérivation",
  DerivationAvancee: "Dérivation (approfondissements)",
  Integration: "Intégration",
  Suites: "Suites",
  SuitesAvancees: "Suites (approfondissements)",
  Analyse: "Analyse",
  Analyse_Derivation: "Analyse — Dérivation",
  Analyse_Integration: "Analyse — Intégration",
  Analyse_Multivariable: "Analyse multivariable",
  Analyse_Complexe: "Analyse complexe",
  Analyse_Fonctionnelle: "Analyse fonctionnelle",
  Analyse_Fonctionnelle_Avancee: "Analyse fonctionnelle avancée",
  Analyse_Fourier_Avancee: "Analyse de Fourier avancée",
  Analyse_Avancee: "Analyse avancée",
  Analyse_Numerique: "Analyse numérique",
  Algebre_Lineaire_Avancee: "Algèbre linéaire avancée",
  Algebre_Generale: "Algèbre générale",
  Equations_Differentielles: "Équations différentielles",
  Topologie_Analyse_Avancee: "Topologie et analyse avancée",
  Topologie_Avancee: "Topologie avancée",
  Geometrie_Differentielle: "Géométrie différentielle",
  Geometrie_Riemannienne_Avancee: "Géométrie riemannienne avancée",
  Geometrie_Algebrique_Avancee: "Géométrie algébrique avancée",
  EDP_Avancees: "Équations aux dérivées partielles avancées",
  EDP_Avancees_2: "Équations aux dérivées partielles avancées (II)",
  EDP_Avancees_3: "Équations aux dérivées partielles avancées (III)",
  Categories_Theorie: "Théorie des catégories",
  Categories_Avancees: "Théorie des catégories avancée",
  Informatique_Theorique: "Informatique théorique",
  Faisceaux_Cohomologie_Avancee: "Faisceaux et cohomologie avancée",
  Physique_Mathematique: "Physique mathématique",
  Physique_Mathematique_Avancee: "Physique mathématique avancée",
  Physique_Mathematique_Avancee_2: "Physique mathématique avancée (II)",
  Finance_Mathematique: "Finance mathématique",
  Finance_Mathematique_Avancee_2: "Finance mathématique avancée (II)"
};
function prettifySubject(key) {
  if (SUBJECT_LABELS[key]) return SUBJECT_LABELS[key];
  // Repli générique pour toute clé non répertoriée : underscores -> espaces,
  // espace avant chaque majuscule interne (CamelCase -> mots séparés).
  return String(key)
    .replace(/_/g, " ")
    .replace(/([a-zà-ÿ0-9])([A-ZÀ-Ÿ])/g, "$1 $2")
    .trim();
}

// Description de la structure : pour chaque niveau du site, quelles "années"
// de jsonMathsite.js le composent, et comment y accéder dans window.MATHSITE_TREE.
const MATHSITE_NIVEAUX = [
  { key: "college", grades: ["6e", "5e", "4e", "3e"], branch: "College", nested: true },
  { key: "lycee", grades: ["Seconde", "Premiere", "Terminale"], branch: "Lycee", nested: true },
  { key: "prepa", grades: ["L1", "L2"], nested: false },
  { key: "grandes-ecoles", grades: ["L3", "M1", "M2"], nested: false }
];

// Renvoie { matière: [{id,title}, ...] } pour un niveau/année donnés.
function getGradeSubjects(niveauDef, gradeKey) {
  const tree = window.MATHSITE_TREE || {};
  if (niveauDef.nested) {
    return (tree[niveauDef.branch] || {})[gradeKey] || {};
  }
  // Pour L1/L2/L3/M1/M2, la clé d'année est directement une clé racine.
  return tree[gradeKey] || {};
}

// --- POC : cinq illustrations SVG par niveau de collège, affichées au clic sur n'importe quel
// chapitre (matière) de ce niveau dans le sommaire — les 3 chapitres de 6e, les 4 de 5e/4e/3e
// partagent chacun la même illustration pour leur niveau. Classes CSS partagées ("sixe-panel",
// "sixe-panel-title", "sixe-panel-grid") et couleurs par niveau ("sixe-p21".."sixe-p40")
// définies dans styles.css.

// 6e : priorités opératoires, addition de fractions, proportionnalité, symétrie axiale,
// volumes cube/pavé droit.
const SIXE_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques de 6eme : priorites operatoires, addition de fractions, proportionnalite, symetrie axiale, volumes du cube et du pave droit.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p21" style="grid-column:span 2">
      <div class="sixe-panel-title">Priorités opératoires</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Ordre des priorites operatoires</title><desc>Quatre etapes de calcul dans l'ordre : parentheses, puissances, multiplications et divisions, additions et soustractions.</desc>
        <rect x="25" y="80" width="55" height="50" rx="8" fill="#bcd6f0" stroke="#1f4e7a" stroke-width="1"/>
        <rect x="100" y="80" width="55" height="50" rx="8" fill="#bcd6f0" stroke="#1f4e7a" stroke-width="1"/>
        <rect x="175" y="80" width="55" height="50" rx="8" fill="#bcd6f0" stroke="#1f4e7a" stroke-width="1"/>
        <rect x="250" y="80" width="55" height="50" rx="8" fill="#bcd6f0" stroke="#1f4e7a" stroke-width="1"/>
        <text x="52" y="110" text-anchor="middle" font-size="14" fill="#1f4e7a">( )</text>
        <text x="127" y="110" text-anchor="middle" font-size="14" fill="#1f4e7a">xⁿ</text>
        <text x="202" y="110" text-anchor="middle" font-size="14" fill="#1f4e7a">× ÷</text>
        <text x="277" y="110" text-anchor="middle" font-size="14" fill="#1f4e7a">+ −</text>
        <circle cx="52" cy="55" r="11" fill="#1f4e7a"/><text x="52" y="59" text-anchor="middle" font-size="12" fill="#dce9f7">1</text>
        <circle cx="127" cy="55" r="11" fill="#1f4e7a"/><text x="127" y="59" text-anchor="middle" font-size="12" fill="#dce9f7">2</text>
        <circle cx="202" cy="55" r="11" fill="#1f4e7a"/><text x="202" y="59" text-anchor="middle" font-size="12" fill="#dce9f7">3</text>
        <circle cx="277" cy="55" r="11" fill="#1f4e7a"/><text x="277" y="59" text-anchor="middle" font-size="12" fill="#dce9f7">4</text>
        <line x1="63" y1="55" x2="116" y2="55" stroke="#1f4e7a" stroke-width="1.2"/><polygon points="116,55 108,51 108,59" fill="#1f4e7a"/>
        <line x1="138" y1="55" x2="191" y2="55" stroke="#1f4e7a" stroke-width="1.2"/><polygon points="191,55 183,51 183,59" fill="#1f4e7a"/>
        <line x1="213" y1="55" x2="266" y2="55" stroke="#1f4e7a" stroke-width="1.2"/><polygon points="266,55 258,51 258,59" fill="#1f4e7a"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-p22" style="grid-column:span 2">
      <div class="sixe-panel-title">Addition de fractions</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Addition de deux fractions</title><desc>Deux fractions representees par des rectangles partages, dont la somme est un rectangle partage en douze parts.</desc>
        <rect x="20" y="70" width="23.33" height="40" fill="#e77aa8" opacity=".7"/>
        <rect x="20" y="70" width="70" height="40" fill="none" stroke="#8a2f52" stroke-width="1"/>
        <line x1="43.3" y1="70" x2="43.3" y2="110" stroke="#8a2f52" stroke-width="0.7"/>
        <line x1="66.6" y1="70" x2="66.6" y2="110" stroke="#8a2f52" stroke-width="0.7"/>
        <text x="55" y="128" text-anchor="middle" font-size="12" fill="#8a2f52">1/3</text>
        <text x="100" y="98" text-anchor="middle" font-size="18" fill="#8a2f52">+</text>
        <rect x="110" y="70" width="15" height="40" fill="#e77aa8" opacity=".7"/>
        <rect x="110" y="70" width="60" height="40" fill="none" stroke="#8a2f52" stroke-width="1"/>
        <line x1="125" y1="70" x2="125" y2="110" stroke="#8a2f52" stroke-width="0.7"/>
        <line x1="140" y1="70" x2="140" y2="110" stroke="#8a2f52" stroke-width="0.7"/>
        <line x1="155" y1="70" x2="155" y2="110" stroke="#8a2f52" stroke-width="0.7"/>
        <text x="140" y="128" text-anchor="middle" font-size="12" fill="#8a2f52">1/4</text>
        <text x="183" y="98" text-anchor="middle" font-size="18" fill="#8a2f52">=</text>
        <rect x="195" y="70" width="64.17" height="40" fill="#e77aa8" opacity=".7"/>
        <rect x="195" y="70" width="110" height="40" fill="none" stroke="#8a2f52" stroke-width="1"/>
        <line x1="204.2" y1="70" x2="204.2" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="213.3" y1="70" x2="213.3" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="222.5" y1="70" x2="222.5" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="231.7" y1="70" x2="231.7" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="240.8" y1="70" x2="240.8" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="250" y1="70" x2="250" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="259.2" y1="70" x2="259.2" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="268.3" y1="70" x2="268.3" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="277.5" y1="70" x2="277.5" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="286.7" y1="70" x2="286.7" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <line x1="295.8" y1="70" x2="295.8" y2="110" stroke="#8a2f52" stroke-width="0.5"/>
        <text x="250" y="128" text-anchor="middle" font-size="12" fill="#8a2f52">7/12</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p23" style="grid-column:span 2">
      <div class="sixe-panel-title">Proportionnalité</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Tableau et graphique de proportionnalite</title><desc>Un tableau de proportionnalite et la droite passant par l'origine associee.</desc>
        <line x1="40" y1="25" x2="40" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="100" y1="25" x2="100" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="160" y1="25" x2="160" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="220" y1="25" x2="220" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="280" y1="25" x2="280" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="40" y1="25" x2="280" y2="25" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="40" y1="45" x2="280" y2="45" stroke="#3a6b1f" stroke-width="0.8"/>
        <line x1="40" y1="65" x2="280" y2="65" stroke="#3a6b1f" stroke-width="0.8"/>
        <text x="25" y="42" text-anchor="end" font-size="11" fill="#3a6b1f">x</text>
        <text x="25" y="62" text-anchor="end" font-size="11" fill="#3a6b1f">y</text>
        <text x="70" y="39" text-anchor="middle" font-size="11" fill="#3a6b1f">1</text>
        <text x="130" y="39" text-anchor="middle" font-size="11" fill="#3a6b1f">2</text>
        <text x="190" y="39" text-anchor="middle" font-size="11" fill="#3a6b1f">3</text>
        <text x="250" y="39" text-anchor="middle" font-size="11" fill="#3a6b1f">4</text>
        <text x="70" y="59" text-anchor="middle" font-size="11" fill="#3a6b1f">3</text>
        <text x="130" y="59" text-anchor="middle" font-size="11" fill="#3a6b1f">6</text>
        <text x="190" y="59" text-anchor="middle" font-size="11" fill="#3a6b1f">9</text>
        <text x="250" y="59" text-anchor="middle" font-size="11" fill="#3a6b1f">12</text>
        <line x1="40" y1="170" x2="40" y2="82" stroke="#3a6b1f" stroke-width="1"/>
        <polygon points="40,82 35,92 45,92" fill="#3a6b1f"/>
        <line x1="40" y1="170" x2="288" y2="170" stroke="#3a6b1f" stroke-width="1"/>
        <polygon points="288,170 278,165 278,175" fill="#3a6b1f"/>
        <line x1="40" y1="170" x2="250" y2="90" stroke="#c0512f" stroke-width="1.8"/>
        <text x="32" y="180" font-size="11" fill="#3a6b1f">0</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p24" style="grid-column:span 3">
      <div class="sixe-panel-title">Symétrie axiale</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Symetrie axiale d'une figure</title><desc>Une figure et son image symetrique par rapport a un axe vertical.</desc>
        <line x1="240" y1="15" x2="240" y2="175" stroke="#7a4a12" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="240" y="10" text-anchor="middle" font-size="11" fill="#7a4a12">axe de symétrie</text>
        <polygon points="100,140 150,140 130,80" fill="#f2c98c" opacity=".7" stroke="#7a4a12" stroke-width="1.2"/>
        <polygon points="380,140 330,140 350,80" fill="#f2c98c" opacity=".7" stroke="#7a4a12" stroke-width="1.2"/>
        <line x1="100" y1="140" x2="380" y2="140" stroke="#7a4a12" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="150" y1="140" x2="330" y2="140" stroke="#7a4a12" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="130" y1="80" x2="350" y2="80" stroke="#7a4a12" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="237" y1="137" x2="243" y2="143" stroke="#7a4a12" stroke-width="1"/>
        <line x1="237" y1="77" x2="243" y2="83" stroke="#7a4a12" stroke-width="1"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-p25" style="grid-column:span 3">
      <div class="sixe-panel-title">Volumes : cube et pavé droit</div>
      <svg viewBox="0 0 480 195" style="width:100%;height:auto;display:block" role="img">
        <title>Volume du cube et du pave droit</title><desc>Un cube et un pave droit en perspective avec leurs formules de volume.</desc>
        <polygon points="70,70 150,70 175,45 95,45" fill="#e3d9f5" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <polygon points="150,70 150,150 175,125 175,45" fill="#b3a0d9" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <rect x="70" y="70" width="80" height="80" fill="#c9b8e8" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <text x="110" y="163" text-anchor="middle" font-size="11" fill="#4a2f7a">c</text>
        <text x="110" y="183" text-anchor="middle" font-size="12" fill="#4a2f7a">V = c³</text>
        <polygon points="290,60 400,60 430,35 320,35" fill="#e3d9f5" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <polygon points="400,60 400,150 430,125 430,35" fill="#b3a0d9" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <rect x="290" y="60" width="110" height="90" fill="#c9b8e8" opacity=".8" stroke="#4a2f7a" stroke-width="1"/>
        <text x="345" y="163" text-anchor="middle" font-size="11" fill="#4a2f7a">L</text>
        <text x="408" y="108" font-size="11" fill="#4a2f7a">h</text>
        <text x="362" y="42" text-anchor="middle" font-size="11" fill="#4a2f7a">l</text>
        <text x="365" y="185" text-anchor="middle" font-size="12" fill="#4a2f7a">V = L × l × h</text>
      </svg>
    </div>
  </div>
`;

// 5e : pourcentage, médiane et quartiles, développement, angles alternes-internes,
// volume d'un cylindre.
const CINQUIEME_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques de 5eme : pourcentage, mediane et quartiles, developpement, angles alternes-internes, volume d'un cylindre.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p26" style="grid-column:span 2">
      <div class="sixe-panel-title">Pourcentage</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Pourcentage represente par un disque</title><desc>Un quart de disque colore representant 25 pour cent, avec les ecritures fraction, pourcentage et decimale.</desc>
        <circle cx="100" cy="95" r="60" fill="none" stroke="#0f5c46" stroke-width="1.2"/>
        <path d="M100,95 L100,35 A60,60 0 0 1 160,95 Z" fill="#6fcaa8" stroke="#0f5c46" stroke-width="1"/>
        <text x="128" y="65" text-anchor="middle" font-size="12" fill="#0f5c46">25 %</text>
        <text x="230" y="60" text-anchor="middle" font-size="13" fill="#0f5c46">1/4</text>
        <line x1="230" y1="68" x2="230" y2="84" stroke="#0f5c46" stroke-width="1"/><polygon points="230,84 226,76 234,76" fill="#0f5c46"/>
        <text x="230" y="99" text-anchor="middle" font-size="13" fill="#0f5c46">25 %</text>
        <line x1="230" y1="107" x2="230" y2="123" stroke="#0f5c46" stroke-width="1"/><polygon points="230,123 226,115 234,115" fill="#0f5c46"/>
        <text x="230" y="138" text-anchor="middle" font-size="13" fill="#0f5c46">0,25</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p27" style="grid-column:span 2">
      <div class="sixe-panel-title">Médiane et quartiles</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Mediane et quartiles d'une serie</title><desc>Des valeurs ordonnees sur un axe et la boite a moustaches correspondante.</desc>
        <line x1="20" y1="70" x2="300" y2="70" stroke="#a3406a" stroke-width="1"/>
        <circle cx="40" cy="70" r="3.5" fill="#7a1f3c"/><circle cx="70" cy="70" r="3.5" fill="#7a1f3c"/>
        <circle cx="100" cy="70" r="3.5" fill="#7a1f3c"/><circle cx="130" cy="70" r="3.5" fill="#7a1f3c"/>
        <circle cx="160" cy="70" r="3.5" fill="#7a1f3c"/><circle cx="190" cy="70" r="3.5" fill="#7a1f3c"/>
        <circle cx="220" cy="70" r="3.5" fill="#7a1f3c"/><circle cx="250" cy="70" r="3.5" fill="#7a1f3c"/>
        <circle cx="280" cy="70" r="3.5" fill="#7a1f3c"/>
        <line x1="40" y1="130" x2="100" y2="130" stroke="#7a1f3c" stroke-width="1.2"/>
        <line x1="220" y1="130" x2="280" y2="130" stroke="#7a1f3c" stroke-width="1.2"/>
        <rect x="100" y="115" width="120" height="30" fill="#f0a8c2" opacity=".6" stroke="#7a1f3c" stroke-width="1"/>
        <line x1="160" y1="115" x2="160" y2="145" stroke="#7a1f3c" stroke-width="1.6"/>
        <text x="100" y="163" text-anchor="middle" font-size="10" fill="#7a1f3c">Q1</text>
        <text x="160" y="163" text-anchor="middle" font-size="10" fill="#7a1f3c">médiane</text>
        <text x="220" y="163" text-anchor="middle" font-size="10" fill="#7a1f3c">Q3</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p28" style="grid-column:span 2">
      <div class="sixe-panel-title">Développement</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Developpement d'une expression</title><desc>Le rectangle d'aire k fois a plus b decoupe en deux aires k fois a et k fois b.</desc>
        <text x="160" y="28" text-anchor="middle" font-size="13" fill="#22406b">k(a + b) = k·a + k·b</text>
        <path d="M120,38 Q117,70 114,98" fill="none" stroke="#22406b" stroke-width="0.7" stroke-dasharray="2 2"/>
        <path d="M150,38 Q180,70 204,98" fill="none" stroke="#22406b" stroke-width="0.7" stroke-dasharray="2 2"/>
        <rect x="60" y="100" width="108" height="50" fill="#c3cbea" opacity=".8" stroke="#22406b" stroke-width="1"/>
        <rect x="168" y="100" width="72" height="50" fill="#8fa0d9" opacity=".8" stroke="#22406b" stroke-width="1"/>
        <text x="114" y="128" text-anchor="middle" font-size="12" fill="#22406b">k·a</text>
        <text x="204" y="128" text-anchor="middle" font-size="12" fill="#22406b">k·b</text>
        <text x="114" y="165" text-anchor="middle" font-size="11" fill="#22406b">a</text>
        <text x="204" y="165" text-anchor="middle" font-size="11" fill="#22406b">b</text>
        <text x="45" y="128" text-anchor="middle" font-size="11" fill="#22406b">k</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p29" style="grid-column:span 3">
      <div class="sixe-panel-title">Angles alternes-internes</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Angles alternes-internes</title><desc>Deux droites paralleles coupees par une secante, avec deux angles alternes-internes marques de la meme couleur.</desc>
        <line x1="40" y1="60" x2="440" y2="60" stroke="#7a4a12" stroke-width="1.2"/>
        <line x1="40" y1="140" x2="440" y2="140" stroke="#7a4a12" stroke-width="1.2"/>
        <line x1="100" y1="20" x2="380" y2="180" stroke="#7a4a12" stroke-width="1.2"/>
        <path d="M190,60 A20,20 0 0 1 187,70" fill="none" stroke="#c0512f" stroke-width="2"/>
        <path d="M290,140 A20,20 0 0 1 287,130" fill="none" stroke="#c0512f" stroke-width="2"/>
        <text x="196" y="52" font-size="12" fill="#c0512f">a</text>
        <text x="270" y="152" font-size="12" fill="#c0512f">a</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p30" style="grid-column:span 3">
      <div class="sixe-panel-title">Volume d'un cylindre</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Volume d'un cylindre</title><desc>Un cylindre avec son rayon et sa hauteur annotes, et la formule du volume.</desc>
        <ellipse cx="240" cy="50" rx="90" ry="25" fill="#d3cdf0" opacity=".8" stroke="#3a2f7a" stroke-width="1.2"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="#3a2f7a" stroke-width="1.2"/>
        <line x1="330" y1="50" x2="330" y2="150" stroke="#3a2f7a" stroke-width="1.2"/>
        <ellipse cx="240" cy="150" rx="90" ry="25" fill="#c3bce8" opacity=".8" stroke="#3a2f7a" stroke-width="1.2"/>
        <line x1="240" y1="50" x2="330" y2="50" stroke="#3a2f7a" stroke-width="1"/>
        <text x="285" y="43" text-anchor="middle" font-size="11" fill="#3a2f7a">r</text>
        <line x1="120" y1="50" x2="120" y2="150" stroke="#3a2f7a" stroke-width="0.8" stroke-dasharray="3 3"/>
        <text x="105" y="103" font-size="11" fill="#3a2f7a">h</text>
        <text x="240" y="180" text-anchor="middle" font-size="13" fill="#3a2f7a">V = π r² h</text>
      </svg>
    </div>
  </div>
`;

// 4e : notation scientifique, identité remarquable (a+b)², théorème de Pythagore, théorème de
// Thalès, fonction affine.
const QUATRIEME_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques de 4eme : notation scientifique, identite remarquable (a+b) au carre, theoreme de Pythagore, theoreme de Thales, fonction affine.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p31" style="grid-column:span 2">
      <div class="sixe-panel-title">Notation scientifique</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Notation scientifique d'un nombre</title><desc>Un nombre ecrit en notation decimale puis transforme en notation scientifique.</desc>
        <text x="75" y="105" text-anchor="middle" font-size="17" fill="#1f4e8a">12300</text>
        <path d="M115,90 Q155,60 195,90" fill="none" stroke="#1f4e8a" stroke-width="1.4"/>
        <polygon points="195,90 185,84 187,93" fill="#1f4e8a"/>
        <text x="155" y="58" text-anchor="middle" font-size="11" fill="#1f4e8a">×10⁴</text>
        <text x="255" y="105" text-anchor="middle" font-size="16" fill="#1f4e8a">1,23 × 10⁴</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p32" style="grid-column:span 2">
      <div class="sixe-panel-title">Identité remarquable (a+b)²</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Identite remarquable (a+b) au carre</title><desc>Un carre de cote a plus b decoupe en quatre aires : a carre, ab, ab et b carre.</desc>
        <rect x="60" y="30" width="120" height="78" fill="#f2c9a8" opacity=".85" stroke="#8a3a1f" stroke-width="1"/>
        <rect x="180" y="30" width="80" height="78" fill="#e8a778" opacity=".85" stroke="#8a3a1f" stroke-width="1"/>
        <rect x="60" y="108" width="120" height="52" fill="#e8a778" opacity=".85" stroke="#8a3a1f" stroke-width="1"/>
        <rect x="180" y="108" width="80" height="52" fill="#d6875a" opacity=".85" stroke="#8a3a1f" stroke-width="1"/>
        <text x="120" y="72" text-anchor="middle" font-size="13" fill="#5a2410">a²</text>
        <text x="220" y="72" text-anchor="middle" font-size="13" fill="#5a2410">ab</text>
        <text x="120" y="137" text-anchor="middle" font-size="13" fill="#5a2410">ab</text>
        <text x="220" y="137" text-anchor="middle" font-size="13" fill="#5a2410">b²</text>
        <text x="120" y="20" text-anchor="middle" font-size="12" fill="#8a3a1f">a</text>
        <text x="220" y="20" text-anchor="middle" font-size="12" fill="#8a3a1f">b</text>
        <text x="160" y="182" text-anchor="middle" font-size="12" fill="#8a3a1f">(a+b)² = a² + 2ab + b²</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p33" style="grid-column:span 2">
      <div class="sixe-panel-title">Théorème de Pythagore</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Theoreme de Pythagore</title><desc>Un triangle rectangle avec un carre construit sur chacun de ses trois cotes.</desc>
        <polygon points="170,95 215,140 125,140 125,95" fill="#c3c9e2" opacity=".85" stroke="#34406b" stroke-width="1"/>
        <polygon points="170,140 215,140 215,185 170,185" fill="#c3c9e2" opacity=".85" stroke="#34406b" stroke-width="1"/>
        <polygon points="170,95 215,140 260,95 215,50" fill="#a8b0d9" opacity=".85" stroke="#34406b" stroke-width="1"/>
        <polygon points="170,95 215,140 170,140" fill="#eef0f8" stroke="#34406b" stroke-width="1.2"/>
        <text x="147" y="120" text-anchor="middle" font-size="12" fill="#22284a">a²</text>
        <text x="192" y="165" text-anchor="middle" font-size="12" fill="#22284a">b²</text>
        <text x="215" y="98" text-anchor="middle" font-size="12" fill="#22284a">c²</text>
        <text x="160" y="25" text-anchor="middle" font-size="12" fill="#34406b">a² + b² = c²</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p34" style="grid-column:span 3">
      <div class="sixe-panel-title">Théorème de Thalès</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Theoreme de Thales</title><desc>Deux droites issues d'un meme point, coupees par deux paralleles, formant deux triangles emboites.</desc>
        <line x1="240" y1="20" x2="96" y2="164" stroke="#3a6b1f" stroke-width="1.2"/>
        <line x1="240" y1="20" x2="384" y2="164" stroke="#3a6b1f" stroke-width="1.2"/>
        <line x1="150" y1="110" x2="330" y2="110" stroke="#3a6b1f" stroke-width="1.2"/>
        <line x1="96" y1="164" x2="384" y2="164" stroke="#3a6b1f" stroke-width="1.2"/>
        <circle cx="240" cy="20" r="3" fill="#3a6b1f"/><circle cx="150" cy="110" r="3" fill="#3a6b1f"/>
        <circle cx="330" cy="110" r="3" fill="#3a6b1f"/><circle cx="96" cy="164" r="3" fill="#3a6b1f"/>
        <circle cx="384" cy="164" r="3" fill="#3a6b1f"/>
        <text x="240" y="14" text-anchor="middle" font-size="12" fill="#3a6b1f">S</text>
        <text x="135" y="105" font-size="12" fill="#3a6b1f">A</text>
        <text x="338" y="105" font-size="12" fill="#3a6b1f">B</text>
        <text x="80" y="178" font-size="12" fill="#3a6b1f">A'</text>
        <text x="390" y="178" font-size="12" fill="#3a6b1f">B'</text>
        <text x="240" y="188" text-anchor="middle" font-size="11" fill="#3a6b1f">SA/SA' = SB/SB' = AB/A'B'</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p35" style="grid-column:span 3">
      <div class="sixe-panel-title">Fonction affine</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Fonction affine</title><desc>Une droite d'equation y egal a x plus b dans un repere, avec l'ordonnee a l'origine et le coefficient directeur.</desc>
        <line x1="60" y1="160" x2="60" y2="20" stroke="#7a5c12" stroke-width="1"/>
        <polygon points="60,12 55,22 65,22" fill="#7a5c12"/>
        <line x1="20" y1="160" x2="450" y2="160" stroke="#7a5c12" stroke-width="1"/>
        <polygon points="458,160 448,155 448,165" fill="#7a5c12"/>
        <text x="463" y="165" font-size="12" fill="#7a5c12">x</text>
        <text x="45" y="25" text-anchor="end" font-size="12" fill="#7a5c12">y</text>
        <line x1="60" y1="130" x2="400" y2="50" stroke="#c0512f" stroke-width="2"/>
        <line x1="60" y1="130" x2="40" y2="130" stroke="#7a5c12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <text x="38" y="134" text-anchor="end" font-size="11" fill="#7a5c12">b</text>
        <line x1="150" y1="110" x2="250" y2="110" stroke="#7a5c12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <line x1="250" y1="110" x2="250" y2="80" stroke="#7a5c12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <text x="200" y="122" text-anchor="middle" font-size="11" fill="#7a5c12">Δx</text>
        <text x="258" y="97" font-size="11" fill="#7a5c12">Δy</text>
        <text x="200" y="140" text-anchor="middle" font-size="11" fill="#7a5c12">a = Δy/Δx</text>
        <text x="55" y="172" text-anchor="end" font-size="11" fill="#7a5c12">0</text>
      </svg>
    </div>
  </div>
`;

// 3e : PGCD (algorithme d'Euclide), équation du second degré (discriminant), trigonométrie,
// volume d'une sphère, théorème de Pythagore dans l'espace.
const TROISIEME_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques de 3eme : algorithme d'Euclide, equation du second degre et discriminant, trigonometrie, volume d'une sphere, theoreme de Pythagore dans l'espace.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p36" style="grid-column:span 2">
      <div class="sixe-panel-title">PGCD — algorithme d'Euclide</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Algorithme d'Euclide</title><desc>Trois divisions euclidiennes successives menant au calcul du PGCD par le dernier reste non nul.</desc>
        <text x="30" y="50" font-size="13" fill="#10556b">252 = 2 × 105 + 42</text>
        <text x="30" y="90" font-size="13" fill="#10556b">105 = 2 × 42 + 21</text>
        <rect x="118" y="78" width="26" height="18" fill="#a8dbe8" opacity=".7"/>
        <text x="30" y="130" font-size="13" fill="#10556b">42 = 2 × 21 + 0</text>
        <rect x="15" y="150" width="140" height="28" rx="8" fill="#10556b"/>
        <text x="85" y="169" text-anchor="middle" font-size="13" fill="#dff0f5">PGCD = 21</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p37" style="grid-column:span 2">
      <div class="sixe-panel-title">Équation du 2nd degré : discriminant</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Cas du discriminant</title><desc>Trois paraboles illustrant les cas delta positif, nul et negatif.</desc>
        <line x1="10" y1="130" x2="100" y2="130" stroke="#8a5a12" stroke-width="1"/>
        <path d="M20,80 Q55,175 90,80" fill="none" stroke="#8a5a12" stroke-width="1.6"/>
        <circle cx="35" cy="130" r="2.5" fill="#8a5a12"/><circle cx="75" cy="130" r="2.5" fill="#8a5a12"/>
        <text x="55" y="150" text-anchor="middle" font-size="12" fill="#8a5a12">Δ&gt;0</text>
        <line x1="110" y1="130" x2="200" y2="130" stroke="#8a5a12" stroke-width="1"/>
        <path d="M120,80 Q155,130 190,80" fill="none" stroke="#8a5a12" stroke-width="1.6"/>
        <circle cx="155" cy="130" r="2.5" fill="#8a5a12"/>
        <text x="155" y="150" text-anchor="middle" font-size="12" fill="#8a5a12">Δ=0</text>
        <line x1="210" y1="130" x2="300" y2="130" stroke="#8a5a12" stroke-width="1"/>
        <path d="M220,60 Q255,100 290,60" fill="none" stroke="#8a5a12" stroke-width="1.6"/>
        <text x="255" y="150" text-anchor="middle" font-size="12" fill="#8a5a12">Δ&lt;0</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p38" style="grid-column:span 2">
      <div class="sixe-panel-title">Trigonométrie : cos, sin, tan</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Rapports trigonometriques</title><desc>Un triangle rectangle avec les cotes adjacent, oppose et hypotenuse, et les formules de cosinus, sinus et tangente.</desc>
        <text x="20" y="25" font-size="11" fill="#7a1f3c">cos θ = adjacent / hypoténuse</text>
        <text x="20" y="42" font-size="11" fill="#7a1f3c">sin θ = opposé / hypoténuse</text>
        <text x="20" y="59" font-size="11" fill="#7a1f3c">tan θ = opposé / adjacent</text>
        <polygon points="90,170 230,170 230,90" fill="#f0b3c8" opacity=".55" stroke="#7a1f3c" stroke-width="1.2"/>
        <path d="M110,170 A20,20 0 0 1 107,160" fill="none" stroke="#7a1f3c" stroke-width="1"/>
        <text x="100" y="155" font-size="11" fill="#7a1f3c">θ</text>
        <text x="160" y="183" text-anchor="middle" font-size="11" fill="#7a1f3c">adj.</text>
        <text x="240" y="132" font-size="11" fill="#7a1f3c">opp.</text>
        <text x="160" y="118" text-anchor="middle" font-size="11" fill="#7a1f3c">hyp.</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p39" style="grid-column:span 3">
      <div class="sixe-panel-title">Volume d'une sphère</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Volume d'une sphere</title><desc>Une sphere avec son rayon annote et la formule de son volume.</desc>
        <defs><linearGradient id="sph" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#eaf3fb"/><stop offset="100%" stop-color="#9fc4ea"/></linearGradient></defs>
        <circle cx="190" cy="90" r="65" fill="url(#sph)" stroke="#1f4e8a" stroke-width="1.2"/>
        <line x1="190" y1="90" x2="255" y2="90" stroke="#1f4e8a" stroke-width="1.2"/>
        <text x="222" y="83" text-anchor="middle" font-size="12" fill="#1f4e8a">r</text>
        <text x="190" y="180" text-anchor="middle" font-size="13" fill="#1f4e8a">V = (4/3) π r³</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p40" style="grid-column:span 3">
      <div class="sixe-panel-title">Pythagore dans l'espace</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Pythagore dans l'espace</title><desc>Un pave droit avec sa diagonale de base et sa diagonale spatiale, illustrant deux applications du theoreme de Pythagore.</desc>
        <polygon points="100,60 240,60 280,30 140,30" fill="#cfe6d4" opacity=".8" stroke="#1f5c3a" stroke-width="1"/>
        <polygon points="240,60 240,150 280,120 280,30" fill="#a8cdb2" opacity=".8" stroke="#1f5c3a" stroke-width="1"/>
        <rect x="100" y="60" width="140" height="90" fill="#dcefe0" opacity=".8" stroke="#1f5c3a" stroke-width="1"/>
        <line x1="100" y1="150" x2="280" y2="120" stroke="#1f5c3a" stroke-width="1" stroke-dasharray="4 3"/>
        <line x1="100" y1="150" x2="280" y2="30" stroke="#1f5c3a" stroke-width="1.6"/>
        <text x="170" y="163" text-anchor="middle" font-size="11" fill="#1f5c3a">L</text>
        <text x="265" y="42" text-anchor="middle" font-size="11" fill="#1f5c3a">l</text>
        <text x="85" y="105" font-size="11" fill="#1f5c3a">h</text>
        <text x="180" y="140" font-size="11" fill="#1f5c3a">d</text>
        <text x="205" y="72" font-size="11" fill="#1f5c3a">D</text>
        <text x="190" y="180" text-anchor="middle" font-size="12" fill="#1f5c3a">D² = L² + l² + h²</text>
      </svg>
    </div>
  </div>
`;

// --- Lycée (Seconde/Première/Terminale) : mêmes classes CSS partagées ("sixe-panel-grid",
// "sixe-panel-title"), mais trois habillages différents par niveau (voir styles.css) :
// Seconde reprend le style "panel coloré" du collège (une couleur par notion, dont un panneau
// sombre) ; Première utilise un habillage minimaliste "image + légende" ("sixe-panel-plain",
// "sixe-imgbox", "sixe-caption") ; Terminale utilise un unique panneau sombre pour les 5 notions.

// Seconde : fonction inverse et asymptotes, équations du second degré, coefficients directeurs,
// compatibilité des événements, quartiles et boîte à moustaches.
const SECONDE_SCHEMA_HTML = `
  <h2 class="sr-only">Reproduction d'une planche de cinq notions : fonction inverse et asymptotes, equations du second degre, coefficients directeurs, compatibilite des evenements, quartiles et boite a moustaches.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-q1" style="grid-column:span 2">
      <div class="sixe-panel-title">Fonction inverse &amp; Asymptote</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Fonction inverse et ses asymptotes</title><desc>La courbe f(x)=1/x avec une asymptote verticale et une asymptote horizontale en pointilles.</desc>
        <line x1="130" y1="15" x2="130" y2="178" stroke="#eaf2fb" stroke-width="0.8" stroke-dasharray="4 3"/>
        <line x1="20" y1="100" x2="300" y2="100" stroke="#eaf2fb" stroke-width="0.8" stroke-dasharray="4 3"/>
        <path d="M140,15 C145,60 150,90 200,98 C250,100 280,100 300,101" fill="none" stroke="#e2574a" stroke-width="1.8"/>
        <path d="M120,178 C112,150 100,115 70,105 C45,100 30,100 20,100" fill="none" stroke="#e2574a" stroke-width="1.8"/>
        <text x="30" y="30" font-size="13" fill="#eaf2fb">f(x) = 1/x</text>
        <line x1="150" y1="46" x2="132" y2="46" stroke="#eaf2fb" stroke-width="0.6"/>
        <text x="153" y="50" font-size="10" fill="#eaf2fb">Asymptote verticale</text>
        <line x1="200" y1="118" x2="200" y2="102" stroke="#eaf2fb" stroke-width="0.6"/>
        <text x="153" y="128" font-size="10" fill="#eaf2fb">Asymptote horizontale</text>
        <text x="122" y="113" font-size="10" fill="#eaf2fb">0</text>
        <text x="305" y="98" font-size="11" fill="#eaf2fb">x</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-q2" style="grid-column:span 2">
      <div class="sixe-panel-title">Équations du second degré</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Cas du discriminant</title><desc>La formule du second degre et deux paraboles illustrant les cas discriminant positif et negatif.</desc>
        <rect x="90" y="15" width="140" height="26" rx="6" fill="#f5d5ae" stroke="#7a4a1f" stroke-width="0.8"/>
        <text x="160" y="33" text-anchor="middle" font-size="13" fill="#7a4a1f">ax² + bx + c = 0</text>
        <line x1="20" y1="130" x2="130" y2="130" stroke="#7a4a1f" stroke-width="1"/>
        <path d="M30,90 Q80,175 130,90" fill="none" stroke="#c0392b" stroke-width="1.6"/>
        <circle cx="80" cy="150" r="3" fill="#f2b705"/>
        <text x="75" y="165" text-anchor="middle" font-size="11" fill="#7a4a1f">Δ &gt; 0</text>
        <text x="75" y="178" text-anchor="middle" font-size="10" fill="#7a4a1f">2 solutions</text>
        <line x1="190" y1="130" x2="300" y2="130" stroke="#7a4a1f" stroke-width="1"/>
        <path d="M190,90 Q245,50 300,90" fill="none" stroke="#c0392b" stroke-width="1.6"/>
        <circle cx="245" cy="50" r="3" fill="#f2b705"/>
        <text x="245" y="165" text-anchor="middle" font-size="11" fill="#7a4a1f">Δ &lt; 0</text>
        <text x="245" y="178" text-anchor="middle" font-size="10" fill="#7a4a1f">Pas de solution</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-q3" style="grid-column:span 2">
      <div class="sixe-panel-title">Coefficients directeurs</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Coefficients directeurs de droites</title><desc>Une droite de pente positive, une de pente negative, et une horizontale de pente nulle.</desc>
        <line x1="60" y1="20" x2="60" y2="175" stroke="#1f4e7a" stroke-width="1"/>
        <text x="60" y="14" text-anchor="middle" font-size="11" fill="#1f4e7a">x</text>
        <line x1="20" y1="170" x2="300" y2="170" stroke="#1f4e7a" stroke-width="1"/>
        <line x1="70" y1="150" x2="280" y2="50" stroke="#3ba15c" stroke-width="2"/>
        <polygon points="280,50 268,54 270,63" fill="#3ba15c"/>
        <text x="235" y="45" font-size="11" fill="#3ba15c">pente m &gt; 0</text>
        <line x1="70" y1="60" x2="280" y2="150" stroke="#2b6cb0" stroke-width="2"/>
        <polygon points="280,150 269,144 273,153" fill="#2b6cb0"/>
        <text x="230" y="145" font-size="11" fill="#2b6cb0">pente m &lt; 0</text>
        <line x1="150" y1="110" x2="235" y2="110" stroke="#1f4e7a" stroke-width="3"/>
        <text x="240" y="114" font-size="11" fill="#1f4e7a">m = 0</text>
        <text x="60" y="188" text-anchor="middle" font-size="12" fill="#1f4e7a">Δy/Δx</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-q4" style="grid-column:span 3">
      <div class="sixe-panel-title">Compatibilité des événements</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Evenements compatibles et incompatibles</title><desc>A gauche deux ensembles se chevauchant representant des evenements compatibles, a droite deux ensembles disjoints representant des evenements incompatibles.</desc>
        <circle cx="90" cy="90" r="45" fill="none" stroke="#1f5c3a" stroke-width="1.2"/>
        <circle cx="150" cy="90" r="45" fill="#e2574a" opacity=".55" stroke="#1f5c3a" stroke-width="1.2"/>
        <text x="55" y="94" font-size="14" fill="#0f3a1f">A</text>
        <text x="185" y="94" font-size="14" fill="#0f3a1f">B</text>
        <text x="120" y="150" text-anchor="middle" font-size="12" fill="#1f5c3a">Événements compatibles</text>
        <line x1="360" y1="20" x2="360" y2="160" stroke="#1f5c3a" stroke-width="0.6" stroke-dasharray="3 3"/>
        <circle cx="305" cy="90" r="35" fill="none" stroke="#1f5c3a" stroke-width="1.2"/>
        <circle cx="405" cy="90" r="35" fill="none" stroke="#1f5c3a" stroke-width="1.2"/>
        <circle cx="355" cy="90" r="14" fill="none" stroke="#1f5c3a" stroke-width="1.4"/>
        <line x1="345" y1="80" x2="365" y2="100" stroke="#1f5c3a" stroke-width="1.4"/>
        <text x="278" y="94" font-size="14" fill="#0f3a1f">A</text>
        <text x="418" y="94" font-size="14" fill="#0f3a1f">B</text>
        <text x="355" y="150" text-anchor="middle" font-size="12" fill="#1f5c3a">Événements incompatibles</text>
        <text x="355" y="164" text-anchor="middle" font-size="10" fill="#1f5c3a">pas d'intersection</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-q5" style="grid-column:span 3">
      <div class="sixe-panel-title">Quartiles &amp; Boîte à moustaches</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Quartiles et boite a moustaches</title><desc>Une legende verticale Min, Q1, mediane, Q3, Max, et la boite a moustaches correspondante.</desc>
        <text x="45" y="35" text-anchor="end" font-size="11" fill="#4a2f7a">Max</text>
        <text x="45" y="70" text-anchor="end" font-size="11" fill="#4a2f7a">Q3</text>
        <text x="45" y="98" text-anchor="end" font-size="11" fill="#4a2f7a">médiane (Q2)</text>
        <text x="45" y="128" text-anchor="end" font-size="11" fill="#4a2f7a">Q1</text>
        <text x="45" y="160" text-anchor="end" font-size="11" fill="#4a2f7a">Min</text>
        <line x1="100" y1="95" x2="300" y2="95" stroke="#4a2f7a" stroke-width="1.2"/>
        <line x1="100" y1="80" x2="100" y2="110" stroke="#4a2f7a" stroke-width="1.2"/>
        <line x1="300" y1="80" x2="300" y2="110" stroke="#4a2f7a" stroke-width="1.2"/>
        <rect x="160" y="75" width="80" height="40" fill="#b79ce0" opacity=".8" stroke="#4a2f7a" stroke-width="1.2"/>
        <line x1="200" y1="75" x2="200" y2="115" stroke="#4a2f7a" stroke-width="1.8"/>
      </svg>
    </div>
  </div>
`;

// Première : dérivée et tangente, matrices 2×2 et déterminant, plans et vecteurs normaux,
// probabilité conditionnelle, régression linéaire.
const PREMIERE_SCHEMA_HTML = `
  <h2 class="sr-only">Reproduction d'une planche de cinq notions : derivee et tangente, matrices 2x2 et determinant, plans et vecteurs normaux, probabilite conditionnelle, regression lineaire.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel-plain" style="grid-column:span 2">
      <div class="sixe-imgbox">
        <svg viewBox="0 0 320 160" style="width:100%;height:auto;display:block" role="img">
          <title>Derivee et tangente</title><desc>Une courbe, sa tangente en un point, et la courbe derivee.</desc>
          <line x1="45" y1="10" x2="45" y2="140" stroke="#5a6b8a" stroke-width="1"/>
          <line x1="20" y1="140" x2="300" y2="140" stroke="#5a6b8a" stroke-width="1"/>
          <path d="M40,120 C80,110 100,60 140,55 C180,50 220,40 260,20" fill="none" stroke="#2f6fb5" stroke-width="1.8"/>
          <line x1="90" y1="100" x2="220" y2="25" stroke="#c0392b" stroke-width="1.6"/>
          <path d="M40,130 C80,125 120,100 150,95 C190,90 230,70 270,60" fill="none" stroke="#2f8a5c" stroke-width="1.6"/>
          <circle cx="150" cy="52" r="3" fill="#1f3a6b"/>
          <text x="205" y="35" font-size="11" fill="#1f3a6b">f'(a)</text>
          <text x="240" y="22" font-size="11" fill="#c0392b">Tangente</text>
          <text x="245" y="65" font-size="11" fill="#2f8a5c">Dérivée</text>
          <text x="40" y="152" font-size="10" fill="#5a6b8a">0</text>
          <text x="140" y="152" text-anchor="middle" font-size="10" fill="#5a6b8a">(a, f(a))</text>
        </svg>
      </div>
      <div class="sixe-caption">Dérivée &amp; tangente</div>
    </div>
    <div class="sixe-panel-plain" style="grid-column:span 2">
      <div class="sixe-imgbox">
        <svg viewBox="0 0 320 160" style="width:100%;height:auto;display:block" role="img">
          <title>Matrice 2x2 et determinant</title><desc>Une matrice 2x2 et les formules de son determinant.</desc>
          <path d="M60,35 L52,35 L52,90 L60,90" fill="none" stroke="#1f3a6b" stroke-width="1.4"/>
          <path d="M180,35 L188,35 L188,90 L180,90" fill="none" stroke="#1f3a6b" stroke-width="1.4"/>
          <text x="95" y="60" text-anchor="middle" font-size="16" font-style="italic" fill="#1f3a6b">a</text>
          <text x="145" y="60" text-anchor="middle" font-size="16" font-style="italic" fill="#1f3a6b">b</text>
          <text x="95" y="82" text-anchor="middle" font-size="16" font-style="italic" fill="#1f3a6b">c</text>
          <text x="145" y="82" text-anchor="middle" font-size="16" font-style="italic" fill="#1f3a6b">d</text>
          <text x="120" y="118" text-anchor="middle" font-size="13" fill="#1f3a6b">det A = ad − bc</text>
          <text x="120" y="142" text-anchor="middle" font-size="13" fill="#1f3a6b">|A| = ad − bc</text>
        </svg>
      </div>
      <div class="sixe-caption">Matrices 2×2 &amp; déterminant</div>
    </div>
    <div class="sixe-panel-plain" style="grid-column:span 2">
      <div class="sixe-imgbox">
        <svg viewBox="0 0 320 160" style="width:100%;height:auto;display:block" role="img">
          <title>Plan et vecteur normal</title><desc>Un plan incline avec un point P et son vecteur normal n.</desc>
          <polygon points="60,110 220,110 260,70 100,70" fill="#c7d8f2" opacity=".7" stroke="#1f3a6b" stroke-width="1"/>
          <text x="90" y="98" font-size="11" fill="#1f3a6b">Plan</text>
          <circle cx="150" cy="90" r="3" fill="#1f3a6b"/>
          <text x="168" y="82" font-size="11" fill="#1f3a6b">P(x, y, z)</text>
          <line x1="150" y1="90" x2="150" y2="25" stroke="#c0392b" stroke-width="1.6"/>
          <polygon points="150,25 145,35 155,35" fill="#c0392b"/>
          <text x="158" y="25" font-size="12" fill="#c0392b">n̄</text>
          <line x1="100" y1="70" x2="70" y2="45" stroke="#5a6b8a" stroke-width="1"/><polygon points="70,45 74,54 78,47" fill="#5a6b8a"/>
          <line x1="100" y1="70" x2="130" y2="45" stroke="#5a6b8a" stroke-width="1"/><polygon points="130,45 122,47 126,54" fill="#5a6b8a"/>
        </svg>
        <div style="text-align:center;font-size:12px;color:#1f3a6b;margin-top:-6px">ax + by + cz + d = 0</div>
      </div>
      <div class="sixe-caption">Plans &amp; vecteurs normaux</div>
    </div>
    <div class="sixe-panel-plain" style="grid-column:span 3">
      <div class="sixe-imgbox">
        <svg viewBox="0 0 480 170" style="width:100%;height:auto;display:block" role="img">
          <title>Probabilite conditionnelle</title><desc>La formule de probabilite conditionnelle, un diagramme de Venn de A et B, et un schema Si B alors A.</desc>
          <text x="60" y="28" font-size="13" fill="#1f3a6b">P(A|B) =</text>
          <text x="185" y="20" text-anchor="middle" font-size="13" fill="#1f3a6b">P(A∩B)</text>
          <line x1="145" y1="26" x2="225" y2="26" stroke="#1f3a6b" stroke-width="1"/>
          <text x="185" y="40" text-anchor="middle" font-size="13" fill="#1f3a6b">P(B)</text>
          <circle cx="110" cy="110" r="45" fill="#e8935a" opacity=".55" stroke="#8a4a1f" stroke-width="1"/>
          <circle cx="165" cy="110" r="45" fill="#5fb583" opacity=".55" stroke="#1f6b3a" stroke-width="1"/>
          <text x="80" y="114" font-size="14" fill="#5a2f10">A</text>
          <text x="195" y="114" font-size="14" fill="#0f4a24">B</text>
          <text x="340" y="90" text-anchor="middle" font-size="13" fill="#1f3a6b">B</text>
          <text x="400" y="70" text-anchor="middle" font-size="13" fill="#1f3a6b">A</text>
          <line x1="345" y1="86" x2="392" y2="72" stroke="#1f3a6b" stroke-width="1.2"/><polygon points="392,72 384,72 386,80" fill="#1f3a6b"/>
          <text x="340" y="145" text-anchor="middle" font-size="12" fill="#1f3a6b">Si B alors A</text>
        </svg>
      </div>
      <div class="sixe-caption">Probabilité conditionnelle</div>
    </div>
    <div class="sixe-panel-plain" style="grid-column:span 3">
      <div class="sixe-imgbox">
        <svg viewBox="0 0 480 170" style="width:100%;height:auto;display:block" role="img">
          <title>Regression lineaire</title><desc>Un nuage de points bleu et une droite de regression rouge de pente positive.</desc>
          <line x1="45" y1="10" x2="45" y2="150" stroke="#5a6b8a" stroke-width="1"/>
          <line x1="20" y1="150" x2="450" y2="150" stroke="#5a6b8a" stroke-width="1"/>
          <text x="450" y="145" font-size="11" fill="#5a6b8a">x</text>
          <text x="40" y="18" font-size="11" fill="#5a6b8a">y</text>
          <text x="38" y="162" font-size="10" fill="#5a6b8a">O</text>
          <text x="70" y="35" font-size="13" fill="#c0392b">y = ax + b</text>
          <text x="60" y="75" font-size="11" fill="#1f3a6b">Nuage de</text>
          <text x="60" y="88" font-size="11" fill="#1f3a6b">points</text>
          <line x1="55" y1="140" x2="415" y2="45" stroke="#c0392b" stroke-width="2"/>
          <text x="330" y="105" font-size="12" fill="#c0392b">a &gt; 0</text>
          <circle cx="80" cy="130" r="3.5" fill="#2f6fb5"/><circle cx="100" cy="118" r="3.5" fill="#2f6fb5"/>
          <circle cx="120" cy="125" r="3.5" fill="#2f6fb5"/><circle cx="140" cy="105" r="3.5" fill="#2f6fb5"/>
          <circle cx="160" cy="112" r="3.5" fill="#2f6fb5"/><circle cx="180" cy="92" r="3.5" fill="#2f6fb5"/>
          <circle cx="200" cy="100" r="3.5" fill="#2f6fb5"/><circle cx="220" cy="80" r="3.5" fill="#2f6fb5"/>
          <circle cx="240" cy="88" r="3.5" fill="#2f6fb5"/><circle cx="260" cy="70" r="3.5" fill="#2f6fb5"/>
          <circle cx="280" cy="78" r="3.5" fill="#2f6fb5"/><circle cx="300" cy="60" r="3.5" fill="#2f6fb5"/>
          <circle cx="320" cy="66" r="3.5" fill="#2f6fb5"/><circle cx="340" cy="52" r="3.5" fill="#2f6fb5"/>
          <circle cx="360" cy="58" r="3.5" fill="#2f6fb5"/><circle cx="380" cy="45" r="3.5" fill="#2f6fb5"/>
        </svg>
      </div>
      <div class="sixe-caption">Régression linéaire</div>
    </div>
  </div>
`;

// Terminale : théorème fondamental de l'analyse, polynômes de degré supérieur, produit
// vectoriel, loi normale, intervalle de confiance. Habillage uniformément sombre (déjà pensé
// pour un thème sombre par le fichier d'origine, donc gardé sans changement de couleurs).
const TERMINALE_SCHEMA_HTML = `
  <h2 class="sr-only">Reproduction d'une planche de cinq notions : theoreme fondamental de l'analyse, polynomes de degre superieur, produit vectoriel, loi normale, intervalle de confiance.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-term" style="grid-column:span 2">
      <div class="sixe-panel-title">Théorème Fondamental de l'Analyse</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Theoreme fondamental de l'analyse</title><desc>Une courbe f avec deux zones oranges aux extremites et une zone bleue au centre, entre les bornes t et e, illustrant l'integrale.</desc>
        <path d="M60,150 L110,150 C130,110 150,72 200,65 C220,68 225,90 230,150 L110,150 Z" fill="#e8935a" opacity=".55"/>
        <path d="M110,150 C130,110 150,72 200,65 C220,68 225,90 230,150 Z" fill="#6fb3e0" opacity=".5"/>
        <line x1="50" y1="20" x2="50" y2="160" stroke="#f0ead6" stroke-width="1"/>
        <polygon points="50,14 45,24 55,24" fill="#f0ead6"/>
        <line x1="30" y1="160" x2="300" y2="160" stroke="#f0ead6" stroke-width="1"/>
        <polygon points="300,160 292,156 292,164" fill="#f0ead6"/>
        <path d="M60,150 C100,70 160,55 200,65 C240,75 260,95 270,110" fill="none" stroke="#e2574a" stroke-width="1.8"/>
        <line x1="110" y1="70" x2="110" y2="160" stroke="#f0ead6" stroke-width="0.7" stroke-dasharray="3 3"/>
        <line x1="230" y1="63" x2="230" y2="160" stroke="#f0ead6" stroke-width="0.7" stroke-dasharray="3 3"/>
        <text x="60" y="172" text-anchor="middle" font-size="10" fill="#f0ead6">a</text>
        <text x="110" y="172" text-anchor="middle" font-size="10" fill="#f0ead6">t</text>
        <text x="230" y="172" text-anchor="middle" font-size="10" fill="#f0ead6">e</text>
        <text x="270" y="172" text-anchor="middle" font-size="10" fill="#f0ead6">b</text>
        <text x="30" y="145" text-anchor="middle" font-size="10" fill="#f0ead6">F(a)</text>
        <text x="252" y="52" font-size="10" fill="#f0ead6">f(b)</text>
        <text x="278" y="70" font-size="10" fill="#f0ead6">f(a)</text>
        <text x="160" y="184" text-anchor="middle" font-size="11" fill="#f0ead6">∫ₐᵇ f(x) dx = F(b) − F(a)</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-term" style="grid-column:span 2">
      <div class="sixe-panel-title">Polynômes de Degré Supérieur</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Polynome de degre superieur</title><desc>Une courbe polynomiale sinueuse avec quatre points critiques marques par des pointilles.</desc>
        <text x="160" y="25" text-anchor="middle" font-size="12" fill="#f0ead6">P(x) = ax⁴ + bx³ − cx² + dx + e</text>
        <line x1="50" y1="35" x2="50" y2="150" stroke="#f0ead6" stroke-width="1"/>
        <polygon points="50,29 45,39 55,39" fill="#f0ead6"/>
        <line x1="30" y1="150" x2="300" y2="150" stroke="#f0ead6" stroke-width="1"/>
        <polygon points="300,150 292,146 292,154" fill="#f0ead6"/>
        <path d="M40,110 C70,60 90,60 110,110 C130,160 150,160 170,70 C185,35 200,35 215,75 C235,120 260,110 290,90" fill="none" stroke="#e8935a" stroke-width="1.8"/>
        <line x1="75" y1="60" x2="75" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="115" y1="110" x2="115" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="155" y1="160" x2="155" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="235" y1="120" x2="235" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <text x="75" y="163" text-anchor="middle" font-size="11" fill="#f0ead6">x₁</text>
        <text x="115" y="180" text-anchor="middle" font-size="11" fill="#f0ead6">x₂</text>
        <text x="155" y="180" text-anchor="middle" font-size="11" fill="#f0ead6">x₃</text>
        <text x="235" y="163" text-anchor="middle" font-size="11" fill="#f0ead6">x₄</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-term" style="grid-column:span 2">
      <div class="sixe-panel-title">Produit vectoriel</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Produit vectoriel de deux vecteurs</title><desc>Deux vecteurs u et v dans un plan et leur produit vectoriel n, perpendiculaire au plan.</desc>
        <text x="230" y="30" text-anchor="middle" font-size="14" fill="#f0ead6">n = ū × v̄</text>
        <polygon points="60,150 220,150 260,110 100,110" fill="none" stroke="#f0ead6" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="140" cy="130" r="3" fill="#f0ead6"/>
        <line x1="140" y1="130" x2="255" y2="65" stroke="#e8935a" stroke-width="1.8"/>
        <polygon points="255,65 244,68 248,76" fill="#e8935a"/>
        <text x="262" y="60" font-size="11" fill="#e8935a">u</text>
        <line x1="140" y1="130" x2="70" y2="168" stroke="#6fcf7a" stroke-width="1.8"/>
        <polygon points="70,168 78,158 82,167" fill="#6fcf7a"/>
        <text x="55" y="178" font-size="11" fill="#6fcf7a">v</text>
        <line x1="140" y1="130" x2="150" y2="35" stroke="#6fb3e0" stroke-width="1.8"/>
        <polygon points="150,35 144,45 156,45" fill="#6fb3e0"/>
        <text x="158" y="40" font-size="11" fill="#6fb3e0">n</text>
        <path d="M170,120 A34,34 0 0 0 158,150" fill="none" stroke="#f0ead6" stroke-width="0.6"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-term" style="grid-column:span 3">
      <div class="sixe-panel-title">Loi Normale</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Loi normale</title><desc>Une courbe en cloche avec une zone centrale bleue entre mu moins sigma et mu plus sigma, et des zones oranges dans les queues.</desc>
        <path d="M60,150 C110,150 140,60 240,55 C340,60 370,150 420,150 L310,150 L170,150 Z" fill="#e8935a" opacity=".55"/>
        <path d="M170,150 C190,90 215,58 240,56 C265,58 290,90 310,150 Z" fill="#6fb3e0" opacity=".6"/>
        <line x1="40" y1="150" x2="450" y2="150" stroke="#f0ead6" stroke-width="1"/>
        <path d="M60,150 C110,150 140,60 240,55 C340,60 370,150 420,150" fill="none" stroke="#f0ead6" stroke-width="1.6"/>
        <line x1="170" y1="60" x2="170" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="240" y1="55" x2="240" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="310" y1="60" x2="310" y2="150" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <text x="170" y="168" text-anchor="middle" font-size="12" fill="#f0ead6">μ − σ</text>
        <text x="240" y="168" text-anchor="middle" font-size="12" fill="#f0ead6">μ</text>
        <text x="310" y="168" text-anchor="middle" font-size="12" fill="#f0ead6">μ + σ</text>
        <text x="240" y="185" text-anchor="middle" font-size="13" fill="#f0ead6">N(μ, σ²)</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-term" style="grid-column:span 3">
      <div class="sixe-panel-title">Intervalle de Confiance</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Intervalle de confiance</title><desc>Une barre representant un intervalle de confiance a 95 pour cent, avec des fleches indiquant la marge d'erreur de chaque cote.</desc>
        <line x1="90" y1="40" x2="400" y2="40" stroke="#f0ead6" stroke-width="1"/>
        <line x1="90" y1="34" x2="90" y2="46" stroke="#f0ead6" stroke-width="1"/>
        <line x1="400" y1="34" x2="400" y2="46" stroke="#f0ead6" stroke-width="1"/>
        <text x="245" y="30" text-anchor="middle" font-size="13" fill="#f0ead6">95%</text>
        <line x1="90" y1="70" x2="90" y2="130" stroke="#f0ead6" stroke-width="1"/>
        <line x1="80" y1="70" x2="100" y2="70" stroke="#f0ead6" stroke-width="1"/>
        <line x1="80" y1="130" x2="100" y2="130" stroke="#f0ead6" stroke-width="1"/>
        <line x1="400" y1="70" x2="400" y2="130" stroke="#f0ead6" stroke-width="1"/>
        <line x1="390" y1="70" x2="410" y2="70" stroke="#f0ead6" stroke-width="1"/>
        <line x1="390" y1="130" x2="410" y2="130" stroke="#f0ead6" stroke-width="1"/>
        <rect x="130" y="80" width="220" height="40" rx="6" fill="#6fb3e0" stroke="#f0ead6" stroke-width="1"/>
        <text x="240" y="105" text-anchor="middle" font-size="14" fill="#0d2436">IC = [ỹ − m ; ỹ + m]</text>
        <line x1="125" y1="100" x2="102" y2="100" stroke="#f0ead6" stroke-width="1.4"/><polygon points="102,100 110,96 110,104" fill="#f0ead6"/>
        <line x1="355" y1="100" x2="388" y2="100" stroke="#f0ead6" stroke-width="1.4"/><polygon points="388,100 380,96 380,104" fill="#f0ead6"/>
        <line x1="130" y1="120" x2="130" y2="155" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="350" y1="120" x2="350" y2="155" stroke="#f0ead6" stroke-width="0.6" stroke-dasharray="3 3"/>
        <line x1="60" y1="160" x2="420" y2="160" stroke="#f0ead6" stroke-width="0.8"/>
        <text x="130" y="172" text-anchor="middle" font-size="12" fill="#f0ead6">y − m</text>
        <text x="350" y="172" text-anchor="middle" font-size="12" fill="#f0ead6">y + m</text>
      </svg>
    </div>
  </div>
`;

// --- Prépa/CPGE (L1/L2) et Grandes Écoles (L3/M1/M2) : mêmes classes partagées. Aucune bannière
// PNG de niveau n'a été fournie pour ces cinq niveaux (contrairement au collège/lycée) : seules
// les matières (chapitres) affichent un bloc HTML, les niveaux eux-mêmes gardent le comportement
// habituel (repli/déploiement du sous-menu uniquement).

// L1 : complétude (bornes sup/inf), théorème du rang, coniques, lois discrètes, régression
// linéaire. Un panneau volontairement sombre (comme pour la Seconde) parmi les cinq.
const L1_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques pour classes preparatoires : bornes et completude, theoreme du rang, coniques, lois discretes, regression lineaire.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-r1" style="grid-column:span 2">
      <div class="sixe-panel-title">Complétude</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Bornes inférieure et supérieure</title><desc>Axe réel avec un ensemble de points bleus, deux droites verticales pour la borne inférieure et la borne supérieure, et un halo autour de la borne supérieure.</desc>
        <circle cx="180" cy="140" r="16" fill="#7fd1ff" opacity=".25"/>
        <line x1="20" y1="140" x2="295" y2="140" stroke="#9fb8d4" stroke-width="1.5"/>
        <polygon points="295,140 285,135 285,145" fill="#9fb8d4"/>
        <polygon points="20,140 30,135 30,145" fill="#9fb8d4"/>
        <line x1="95" y1="60" x2="95" y2="150" stroke="#9fb8d4" stroke-width="1" stroke-dasharray="4 3"/>
        <line x1="180" y1="60" x2="180" y2="150" stroke="#9fb8d4" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="95" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="112" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="128" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="145" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="158" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="170" cy="136" r="4" fill="#5ab0f5"/>
        <circle cx="180" cy="136" r="4" fill="#5ab0f5"/>
        <text x="95" y="165" text-anchor="middle" font-size="12" fill="#cfe0f5">inf(A)</text>
        <text x="180" y="165" text-anchor="middle" font-size="12" fill="#cfe0f5">sup(A)</text>
        <text x="300" y="128" text-anchor="end" font-size="13" fill="#cfe0f5">R</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-r2" style="grid-column:span 2">
      <div class="sixe-panel-title">Théorème du rang</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Theoreme du rang</title><desc>Deux plans E et F relies par une application lineaire f, avec le noyau de f en rouge dans E et l'image de f en bleu dans F.</desc>
        <polygon points="20,45 130,25 130,150 20,170" fill="rgba(255,255,255,.55)" stroke="#7a4a1f" stroke-width="1.2"/>
        <polygon points="190,45 300,25 300,150 190,170" fill="rgba(255,255,255,.55)" stroke="#7a4a1f" stroke-width="1.2"/>
        <text x="30" y="58" font-size="14" fill="#7a4a1f">E</text>
        <text x="270" y="58" font-size="14" fill="#7a4a1f">F</text>
        <ellipse cx="65" cy="125" rx="30" ry="22" fill="#f0b3b3" stroke="#a33232" stroke-width="1"/>
        <text x="65" y="129" text-anchor="middle" font-size="11" fill="#7a1f1f">Ker(f)</text>
        <ellipse cx="255" cy="85" rx="32" ry="22" fill="#b8d4f0" stroke="#2b5c8a" stroke-width="1"/>
        <text x="255" y="89" text-anchor="middle" font-size="11" fill="#173a5c">Im(f)</text>
        <line x1="108" y1="63" x2="238" y2="72" stroke="#5a3a1f" stroke-width="1"/>
        <circle cx="108" cy="63" r="3" fill="#5a3a1f"/>
        <circle cx="238" cy="72" r="3" fill="#173a5c"/>
        <line x1="65" y1="125" x2="205" y2="140" stroke="#8a8a8a" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="205" cy="140" r="3" fill="#5a5a5a"/>
        <text x="212" y="144" font-size="11" fill="#5a3a1f">0</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#5a3a1f">f</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-r3" style="grid-column:span 2">
      <div class="sixe-panel-title">Coniques</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Coniques</title><desc>Une ellipse, une parabole et une hyperbole, chacune dans un repere orthonorme discret.</desc>
        <line x1="55" y1="25" x2="55" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <line x1="10" y1="155" x2="100" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <ellipse cx="55" cy="95" rx="32" ry="28" fill="none" stroke="#1f4e7a" stroke-width="1.5"/>
        <line x1="155" y1="25" x2="155" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <line x1="110" y1="155" x2="200" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <path d="M120,150 Q155,35 190,150" fill="none" stroke="#1f4e7a" stroke-width="1.5"/>
        <line x1="255" y1="25" x2="255" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <line x1="210" y1="155" x2="300" y2="155" stroke="#7a93ad" stroke-width="1"/>
        <path d="M230,30 Q210,92 230,155" fill="none" stroke="#1f4e7a" stroke-width="1.5"/>
        <path d="M280,30 Q300,92 280,155" fill="none" stroke="#1f4e7a" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-r4" style="grid-column:span 3">
      <div class="sixe-panel-title">Lois discrètes</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Lois discretes</title><desc>Diagramme en batons representant une loi de probabilite discrete, avec l'axe vertical des probabilites.</desc>
        <line x1="55" y1="160" x2="55" y2="20" stroke="#4a6b57" stroke-width="1"/>
        <polygon points="55,12 50,22 60,22" fill="#4a6b57"/>
        <line x1="55" y1="160" x2="440" y2="160" stroke="#4a6b57" stroke-width="1"/>
        <polygon points="448,160 438,155 438,165" fill="#4a6b57"/>
        <text x="42" y="24" text-anchor="end" font-size="12" fill="#1f5c3a">P</text>
        <text x="445" y="177" font-size="12" fill="#1f5c3a">k</text>
        <line x1="100" y1="160" x2="100" y2="144" stroke="#1f5c3a" stroke-width="2"/><circle cx="100" cy="144" r="4" fill="#1f5c3a"/>
        <line x1="150" y1="160" x2="150" y2="115" stroke="#1f5c3a" stroke-width="2"/><circle cx="150" cy="115" r="4" fill="#1f5c3a"/>
        <line x1="200" y1="160" x2="200" y2="80" stroke="#1f5c3a" stroke-width="2"/><circle cx="200" cy="80" r="4" fill="#1f5c3a"/>
        <line x1="250" y1="160" x2="250" y2="50" stroke="#1f5c3a" stroke-width="2"/><circle cx="250" cy="50" r="4" fill="#1f5c3a"/>
        <line x1="300" y1="160" x2="300" y2="80" stroke="#1f5c3a" stroke-width="2"/><circle cx="300" cy="80" r="4" fill="#1f5c3a"/>
        <line x1="350" y1="160" x2="350" y2="115" stroke="#1f5c3a" stroke-width="2"/><circle cx="350" cy="115" r="4" fill="#1f5c3a"/>
        <line x1="400" y1="160" x2="400" y2="144" stroke="#1f5c3a" stroke-width="2"/><circle cx="400" cy="144" r="4" fill="#1f5c3a"/>
        <text x="100" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">0</text>
        <text x="150" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">1</text>
        <text x="200" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">2</text>
        <text x="250" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">3</text>
        <text x="300" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">4</text>
        <text x="350" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">5</text>
        <text x="400" y="175" text-anchor="middle" font-size="11" fill="#1f5c3a">6</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-r5" style="grid-column:span 3">
      <div class="sixe-panel-title">Régression linéaire</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Regression lineaire</title><desc>Nuage de points bleu avec une droite de regression rouge.</desc>
        <line x1="50" y1="160" x2="50" y2="20" stroke="#6a5a8a" stroke-width="1"/>
        <polygon points="50,12 45,22 55,22" fill="#6a5a8a"/>
        <line x1="50" y1="160" x2="440" y2="160" stroke="#6a5a8a" stroke-width="1"/>
        <polygon points="448,160 438,155 438,165" fill="#6a5a8a"/>
        <line x1="60" y1="150" x2="430" y2="42" stroke="#c0392b" stroke-width="2"/>
        <circle cx="80" cy="145" r="4" fill="#3574b5"/>
        <circle cx="100" cy="130" r="4" fill="#3574b5"/>
        <circle cx="120" cy="140" r="4" fill="#3574b5"/>
        <circle cx="140" cy="120" r="4" fill="#3574b5"/>
        <circle cx="160" cy="125" r="4" fill="#3574b5"/>
        <circle cx="180" cy="105" r="4" fill="#3574b5"/>
        <circle cx="200" cy="115" r="4" fill="#3574b5"/>
        <circle cx="220" cy="95" r="4" fill="#3574b5"/>
        <circle cx="240" cy="100" r="4" fill="#3574b5"/>
        <circle cx="260" cy="85" r="4" fill="#3574b5"/>
        <circle cx="280" cy="90" r="4" fill="#3574b5"/>
        <circle cx="300" cy="70" r="4" fill="#3574b5"/>
        <circle cx="320" cy="78" r="4" fill="#3574b5"/>
        <circle cx="340" cy="60" r="4" fill="#3574b5"/>
        <circle cx="360" cy="65" r="4" fill="#3574b5"/>
        <circle cx="380" cy="50" r="4" fill="#3574b5"/>
        <circle cx="400" cy="55" r="4" fill="#3574b5"/>
        <circle cx="415" cy="45" r="4" fill="#3574b5"/>
      </svg>
    </div>
  </div>
`;

// L2 : convergence des séries numériques, espaces vectoriels normés, applications linéaires,
// variables aléatoires continues, estimateurs et biais.
const L2_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques pour classes preparatoires : convergence des series numeriques, espaces vectoriels normes, applications lineaires, variables aleatoires continues, estimateurs et biais.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p1" style="grid-column:span 2">
      <div class="sixe-panel-title">Séries numériques — convergence</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Convergence d'une serie numerique</title><desc>Axe des n, barres representant les termes un, et courbe des sommes partielles SN tendant vers une limite.</desc>
        <line x1="20" y1="160" x2="295" y2="160" stroke="#5c8a7d" stroke-width="1.5"/>
        <polygon points="295,160 285,155 285,165" fill="#5c8a7d"/>
        <text x="300" y="165" font-size="12" fill="#0f5c46">n</text>
        <line x1="20" y1="45" x2="295" y2="45" stroke="#0f5c46" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="300" y="49" font-size="12" fill="#0f5c46">L</text>
        <rect x="45" y="90" width="10" height="70" fill="#0f5c46" opacity=".85"/>
        <rect x="75" y="110" width="10" height="50" fill="#0f5c46" opacity=".85"/>
        <rect x="105" y="124" width="10" height="36" fill="#0f5c46" opacity=".85"/>
        <rect x="135" y="134" width="10" height="26" fill="#0f5c46" opacity=".85"/>
        <rect x="165" y="142" width="10" height="18" fill="#0f5c46" opacity=".85"/>
        <rect x="195" y="147" width="10" height="13" fill="#0f5c46" opacity=".85"/>
        <rect x="225" y="151" width="10" height="9" fill="#0f5c46" opacity=".85"/>
        <path d="M50,155 L80,138 L110,118 L140,98 L170,80 L200,65 L230,55 L260,50 L285,46" fill="none" stroke="#c0512f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="50" cy="155" r="2.5" fill="#c0512f"/>
        <circle cx="80" cy="138" r="2.5" fill="#c0512f"/>
        <circle cx="110" cy="118" r="2.5" fill="#c0512f"/>
        <circle cx="140" cy="98" r="2.5" fill="#c0512f"/>
        <circle cx="170" cy="80" r="2.5" fill="#c0512f"/>
        <circle cx="200" cy="65" r="2.5" fill="#c0512f"/>
        <circle cx="230" cy="55" r="2.5" fill="#c0512f"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-p2" style="grid-column:span 2">
      <div class="sixe-panel-title">Espaces vectoriels normés</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Espace vectoriel norme</title><desc>Un espace E avec une boule ouverte centree en un point, la norme etant indiquee par la distance au centre.</desc>
        <rect x="20" y="20" width="280" height="150" rx="10" fill="none" stroke="#7a1f3c" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="30" y="38" font-size="14" fill="#7a1f3c">E</text>
        <circle cx="170" cy="100" r="55" fill="#f3c3d3" opacity=".35" stroke="#a33260" stroke-width="1.2" stroke-dasharray="4 3"/>
        <circle cx="170" cy="100" r="3.5" fill="#7a1f3c"/>
        <text x="170" y="118" text-anchor="middle" font-size="11" fill="#7a1f3c">x0</text>
        <line x1="170" y1="100" x2="215" y2="69" stroke="#7a1f3c" stroke-width="1"/>
        <text x="199" y="74" font-size="11" fill="#7a1f3c">r</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p3" style="grid-column:span 2">
      <div class="sixe-panel-title">Applications linéaires</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Application lineaire entre deux plans</title><desc>Deux plans E et F relies par des fleches representant une transformation lineaire f.</desc>
        <polygon points="20,45 130,25 130,150 20,170" fill="rgba(255,255,255,.5)" stroke="#22406b" stroke-width="1.2"/>
        <polygon points="190,45 300,25 300,150 190,170" fill="rgba(255,255,255,.5)" stroke="#22406b" stroke-width="1.2"/>
        <text x="30" y="58" font-size="14" fill="#22406b">E</text>
        <text x="270" y="58" font-size="14" fill="#22406b">F</text>
        <line x1="105" y1="55" x2="235" y2="60" stroke="#22406b" stroke-width="1"/>
        <circle cx="105" cy="55" r="3" fill="#22406b"/><circle cx="235" cy="60" r="3" fill="#22406b"/>
        <line x1="100" y1="95" x2="230" y2="100" stroke="#22406b" stroke-width="1"/>
        <circle cx="100" cy="95" r="3" fill="#22406b"/><circle cx="230" cy="100" r="3" fill="#22406b"/>
        <line x1="105" y1="140" x2="235" y2="135" stroke="#22406b" stroke-width="1"/>
        <circle cx="105" cy="140" r="3" fill="#22406b"/><circle cx="235" cy="135" r="3" fill="#22406b"/>
        <text x="165" y="82" text-anchor="middle" font-size="12" font-style="italic" fill="#22406b">f</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p4" style="grid-column:span 3">
      <div class="sixe-panel-title">Variables aléatoires continues</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Densite d'une variable aleatoire continue</title><desc>Courbe de densite f(x) avec l'aire coloree sous la courbe.</desc>
        <path d="M60,158 C120,158 150,60 240,55 C330,60 360,158 420,158 L420,160 L60,160 Z" fill="#f2b26a" opacity=".45"/>
        <line x1="40" y1="160" x2="450" y2="160" stroke="#7a4a12" stroke-width="1"/>
        <polygon points="458,160 448,155 448,165" fill="#7a4a12"/>
        <text x="463" y="165" font-size="12" fill="#7a4a12">x</text>
        <path d="M60,158 C120,158 150,60 240,55 C330,60 360,158 420,158" fill="none" stroke="#7a4a12" stroke-width="2"/>
        <text x="240" y="40" text-anchor="middle" font-size="12" fill="#7a4a12">f(x)</text>
        <line x1="240" y1="55" x2="240" y2="160" stroke="#7a4a12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <text x="240" y="177" text-anchor="middle" font-size="11" fill="#7a4a12">μ</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p5" style="grid-column:span 3">
      <div class="sixe-panel-title">Estimateurs &amp; biais</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Biais d'un estimateur</title><desc>Nuage de points, moyenne empirique, et fleche montrant l'ecart entre l'estimateur et la vraie valeur.</desc>
        <circle cx="170" cy="80" r="4" fill="#6a7fc9"/>
        <circle cx="190" cy="70" r="4" fill="#6a7fc9"/>
        <circle cx="210" cy="90" r="4" fill="#6a7fc9"/>
        <circle cx="230" cy="75" r="4" fill="#6a7fc9"/>
        <circle cx="180" cy="110" r="4" fill="#6a7fc9"/>
        <circle cx="220" cy="105" r="4" fill="#6a7fc9"/>
        <circle cx="205" cy="60" r="4" fill="#6a7fc9"/>
        <circle cx="160" cy="95" r="4" fill="#6a7fc9"/>
        <circle cx="240" cy="95" r="4" fill="#6a7fc9"/>
        <circle cx="205" cy="120" r="4" fill="#6a7fc9"/>
        <circle cx="175" cy="60" r="4" fill="#6a7fc9"/>
        <circle cx="230" cy="120" r="4" fill="#6a7fc9"/>
        <circle cx="195" cy="85" r="4" fill="#6a7fc9"/>
        <circle cx="215" cy="70" r="4" fill="#6a7fc9"/>
        <g stroke="#3a2f7a" stroke-width="2"><line x1="192" y1="90" x2="208" y2="90"/><line x1="200" y1="82" x2="200" y2="98"/></g>
        <line x1="200" y1="52" x2="200" y2="82" stroke="#3a2f7a" stroke-width="0.6" stroke-dasharray="2 2"/>
        <text x="200" y="42" text-anchor="middle" font-size="11" fill="#3a2f7a">moyenne empirique</text>
        <polygon points="320,80 330,90 320,100 310,90" fill="#3a2f7a"/>
        <line x1="320" y1="80" x2="320" y2="55" stroke="#3a2f7a" stroke-width="0.6" stroke-dasharray="2 2"/>
        <text x="320" y="45" text-anchor="middle" font-size="11" fill="#3a2f7a">vraie valeur</text>
        <line x1="212" y1="90" x2="308" y2="90" stroke="#3a2f7a" stroke-width="1.5"/>
        <polygon points="308,90 298,85 298,95" fill="#3a2f7a"/>
        <text x="260" y="80" text-anchor="middle" font-size="12" fill="#3a2f7a">biais</text>
      </svg>
    </div>
  </div>
`;

// L3 : ouverts d'un espace topologique, continuité topologique, variétés différentielles, lois
// de probabilité avancées, méthode du maximum de vraisemblance.
const L3_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques pour classes preparatoires : ouverts d'un espace topologique, continuite topologique, varietes differentielles, lois de probabilite avancees, methode du maximum de vraisemblance.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p6" style="grid-column:span 2">
      <div class="sixe-panel-title">Espaces topologiques — ouverts</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Ouverts d'un espace topologique</title><desc>Un ensemble X avec plusieurs zones colorees se chevauchant representant des ouverts.</desc>
        <rect x="20" y="25" width="280" height="140" rx="20" fill="none" stroke="#10556b" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="30" y="45" font-size="14" fill="#10556b">X</text>
        <ellipse cx="100" cy="90" rx="55" ry="40" fill="#7fd1ff" opacity=".35" stroke="#2b7ba8" stroke-width="1"/>
        <ellipse cx="160" cy="120" rx="50" ry="38" fill="#8ce0c2" opacity=".35" stroke="#1f8a63" stroke-width="1"/>
        <ellipse cx="220" cy="85" rx="48" ry="35" fill="#ffd28c" opacity=".35" stroke="#b8791f" stroke-width="1"/>
        <text x="70" y="68" font-size="11" fill="#2b7ba8">U1</text>
        <text x="172" y="150" font-size="11" fill="#1f8a63">U2</text>
        <text x="238" y="58" font-size="11" fill="#b8791f">U3</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p7" style="grid-column:span 2">
      <div class="sixe-panel-title">Continuité topologique</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Continuite entre deux espaces topologiques</title><desc>Deux espaces X et Y relies par une fleche montrant l'image d'un ouvert.</desc>
        <rect x="20" y="30" width="120" height="130" rx="16" fill="none" stroke="#8a3a24" stroke-width="1" stroke-dasharray="5 4"/>
        <rect x="190" y="30" width="110" height="130" rx="16" fill="none" stroke="#8a3a24" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="28" y="48" font-size="14" fill="#8a3a24">X</text>
        <text x="198" y="48" font-size="14" fill="#8a3a24">Y</text>
        <ellipse cx="80" cy="110" rx="40" ry="32" fill="#f6b8a0" opacity=".45" stroke="#a8452b" stroke-width="1"/>
        <text x="58" y="98" font-size="11" fill="#a8452b">U</text>
        <ellipse cx="245" cy="95" rx="35" ry="25" fill="#f6b8a0" opacity=".45" stroke="#a8452b" stroke-width="1"/>
        <text x="222" y="90" font-size="11" fill="#a8452b">f(U)</text>
        <line x1="120" y1="100" x2="208" y2="95" stroke="#8a3a24" stroke-width="1"/>
        <polygon points="208,95 198,90 198,100" fill="#8a3a24"/>
        <text x="165" y="80" text-anchor="middle" font-size="12" font-style="italic" fill="#8a3a24">f</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p8" style="grid-column:span 2">
      <div class="sixe-panel-title">Variétés différentielles</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Variete differentielle et plan tangent</title><desc>Une surface lisse de type paraboloide avec un plan tangent en un point.</desc>
        <ellipse cx="160" cy="70" rx="120" ry="28" fill="none" stroke="#1f5c3a" stroke-width="1.3"/>
        <path d="M40,70 Q160,175 280,70" fill="none" stroke="#1f5c3a" stroke-width="1.3"/>
        <polygon points="176,100 256,92 264,118 184,126" fill="#bfe3cf" opacity=".55" stroke="#1f5c3a" stroke-width="1" stroke-dasharray="3 2"/>
        <circle cx="220" cy="109" r="4" fill="#1f5c3a"/>
        <line x1="184" y1="126" x2="192" y2="140" stroke="#1f5c3a" stroke-width="0.6" stroke-dasharray="2 2"/>
        <text x="150" y="152" font-size="11" fill="#1f5c3a">plan tangent</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p9" style="grid-column:span 3">
      <div class="sixe-panel-title">Lois de probabilité avancées</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Lois de probabilite avancees</title><desc>Courbes superposees d'une loi exponentielle, d'une loi gamma et d'une loi normale.</desc>
        <line x1="40" y1="160" x2="450" y2="160" stroke="#4a2f7a" stroke-width="1"/>
        <polygon points="458,160 448,155 448,165" fill="#4a2f7a"/>
        <line x1="40" y1="160" x2="40" y2="20" stroke="#4a2f7a" stroke-width="1"/>
        <text x="463" y="165" font-size="12" fill="#4a2f7a">x</text>
        <path d="M45,45 C90,120 130,155 200,158 C300,159 380,160 450,160" fill="none" stroke="#c0512f" stroke-width="2"/>
        <path d="M45,160 C90,160 110,60 160,50 C210,45 260,90 320,140 C360,155 400,159 450,160" fill="none" stroke="#1f8a63" stroke-width="2"/>
        <path d="M45,158 C150,158 220,60 280,55 C340,60 400,140 450,158" fill="none" stroke="#2b5c8a" stroke-width="2"/>
        <text x="100" y="95" text-anchor="middle" font-size="11" fill="#c0512f">Exp</text>
        <text x="200" y="38" text-anchor="middle" font-size="11" fill="#1f8a63">Gamma</text>
        <text x="280" y="40" text-anchor="middle" font-size="11" fill="#2b5c8a">N</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p10" style="grid-column:span 3">
      <div class="sixe-panel-title">Méthodes d'estimation avancées (MLE)</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Maximum de vraisemblance</title><desc>Courbe de vraisemblance avec le point du maximum indique par des lignes pointillees.</desc>
        <line x1="40" y1="160" x2="450" y2="160" stroke="#6b5a12" stroke-width="1"/>
        <polygon points="458,160 448,155 448,165" fill="#6b5a12"/>
        <line x1="40" y1="160" x2="40" y2="20" stroke="#6b5a12" stroke-width="1"/>
        <text x="463" y="165" font-size="12" fill="#6b5a12">θ</text>
        <text x="46" y="30" font-size="12" fill="#6b5a12">L(θ)</text>
        <path d="M50,155 C120,155 150,50 240,45 C330,50 380,140 440,158" fill="none" stroke="#6b5a12" stroke-width="2"/>
        <line x1="40" y1="45" x2="240" y2="45" stroke="#6b5a12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <line x1="240" y1="45" x2="240" y2="160" stroke="#6b5a12" stroke-width="0.8" stroke-dasharray="3 3"/>
        <circle cx="240" cy="45" r="4" fill="#6b5a12"/>
        <text x="250" y="35" font-size="11" fill="#6b5a12">maximum</text>
        <text x="240" y="177" text-anchor="middle" font-size="12" fill="#6b5a12">θ*</text>
      </svg>
    </div>
  </div>
`;

// M1 : distributions, espaces de Hilbert, groupes et morphismes, processus stochastiques,
// méthodes statistiques avancées (courbe ROC).
const M1_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques pour classes preparatoires : espace des distributions, espaces de Hilbert, groupes et morphismes, processus stochastiques, methodes statistiques avancees avec courbe ROC.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p11" style="grid-column:span 2">
      <div class="sixe-panel-title">Distributions</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Espace des distributions</title><desc>Un espace de fonctions test D(Omega) relie par une fleche a une forme lineaire T.</desc>
        <rect x="20" y="30" width="140" height="130" rx="16" fill="none" stroke="#2a3a5c" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="28" y="50" font-size="14" fill="#2a3a5c">D(Ω)</text>
        <path d="M50,130 Q90,70 130,130" fill="none" stroke="#2a3a5c" stroke-width="1.5"/>
        <text x="90" y="85" text-anchor="middle" font-size="11" font-style="italic" fill="#2a3a5c">φ</text>
        <circle cx="250" cy="95" r="30" fill="none" stroke="#2a3a5c" stroke-width="1"/>
        <text x="250" y="99" text-anchor="middle" font-size="14" fill="#2a3a5c">ℝ</text>
        <line x1="160" y1="90" x2="220" y2="95" stroke="#2a3a5c" stroke-width="1"/>
        <polygon points="220,95 210,90 210,100" fill="#2a3a5c"/>
        <text x="190" y="78" text-anchor="middle" font-size="12" font-style="italic" fill="#2a3a5c">T</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p12" style="grid-column:span 2">
      <div class="sixe-panel-title">Espaces de Hilbert</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Espace de Hilbert</title><desc>Un espace muni d'un produit scalaire, avec deux vecteurs orthogonaux issus d'un meme point.</desc>
        <rect x="20" y="25" width="280" height="140" rx="16" fill="none" stroke="#0f6b52" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="28" y="45" font-size="14" fill="#0f6b52">H</text>
        <line x1="100" y1="140" x2="100" y2="60" stroke="#0f6b52" stroke-width="1.5"/>
        <polygon points="100,60 95,70 105,70" fill="#0f6b52"/>
        <line x1="100" y1="140" x2="220" y2="140" stroke="#0f6b52" stroke-width="1.5"/>
        <polygon points="220,140 210,135 210,145" fill="#0f6b52"/>
        <polyline points="100,130 110,130 110,140" fill="none" stroke="#0f6b52" stroke-width="0.8"/>
        <text x="108" y="58" font-size="12" fill="#0f6b52">u</text>
        <text x="222" y="144" font-size="12" fill="#0f6b52">v</text>
        <text x="160" y="155" text-anchor="middle" font-size="12" fill="#0f6b52">⟨u, v⟩ = 0</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p13" style="grid-column:span 2">
      <div class="sixe-panel-title">Groupes &amp; morphismes</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Morphisme entre deux groupes</title><desc>Deux groupes G et H relies par un morphisme.</desc>
        <circle cx="85" cy="95" r="60" fill="none" stroke="#8a5a12" stroke-width="1.2"/>
        <circle cx="235" cy="95" r="60" fill="none" stroke="#8a5a12" stroke-width="1.2"/>
        <text x="60" y="45" font-size="14" fill="#8a5a12">G</text>
        <text x="210" y="45" font-size="14" fill="#8a5a12">H</text>
        <circle cx="65" cy="75" r="3" fill="#8a5a12"/><circle cx="105" cy="75" r="3" fill="#8a5a12"/>
        <circle cx="65" cy="115" r="3" fill="#8a5a12"/><circle cx="105" cy="115" r="3" fill="#8a5a12"/>
        <circle cx="85" cy="95" r="4" fill="#8a5a12"/><text x="91" y="99" font-size="11" fill="#8a5a12">e</text>
        <circle cx="215" cy="75" r="3" fill="#8a5a12"/><circle cx="255" cy="75" r="3" fill="#8a5a12"/>
        <circle cx="215" cy="115" r="3" fill="#8a5a12"/><circle cx="255" cy="115" r="3" fill="#8a5a12"/>
        <circle cx="235" cy="95" r="4" fill="#8a5a12"/><text x="241" y="99" font-size="11" fill="#8a5a12">e</text>
        <line x1="145" y1="95" x2="175" y2="95" stroke="#8a5a12" stroke-width="1.2"/>
        <polygon points="175,95 165,90 165,100" fill="#8a5a12"/>
        <text x="160" y="80" text-anchor="middle" font-size="12" font-style="italic" fill="#8a5a12">φ</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p14" style="grid-column:span 3">
      <div class="sixe-panel-title">Processus stochastiques</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Trajectoires d'un processus stochastique</title><desc>Plusieurs trajectoires aleatoires superposees partant d'un meme point initial.</desc>
        <line x1="40" y1="160" x2="450" y2="160" stroke="#1f4e8a" stroke-width="1"/>
        <polygon points="458,160 448,155 448,165" fill="#1f4e8a"/>
        <line x1="40" y1="160" x2="40" y2="20" stroke="#1f4e8a" stroke-width="1"/>
        <polygon points="40,12 35,22 45,22" fill="#1f4e8a"/>
        <text x="463" y="165" font-size="12" fill="#1f4e8a">t</text>
        <polyline points="40,100 80,80 120,110 160,70 200,90 240,60 280,100 320,75 360,120 400,90 440,60" fill="none" stroke="#1f4e8a" stroke-width="1.5" opacity="1" stroke-linejoin="round"/>
        <polyline points="40,100 80,120 120,90 160,130 200,100 240,140 280,110 320,150 360,120 400,140 440,110" fill="none" stroke="#1f4e8a" stroke-width="1.5" opacity=".55" stroke-linejoin="round"/>
        <polyline points="40,100 80,95 120,60 160,50 200,80 240,40 280,55 320,30 360,50 400,35 440,45" fill="none" stroke="#1f4e8a" stroke-width="1.5" opacity=".3" stroke-linejoin="round"/>
        <circle cx="40" cy="100" r="3.5" fill="#1f4e8a"/>
        <text x="46" y="88" font-size="11" fill="#1f4e8a">X0</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p15" style="grid-column:span 3">
      <div class="sixe-panel-title">Méthodes statistiques avancées</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Courbe ROC</title><desc>Courbe ROC au dessus de la diagonale de reference, aire sous la courbe ombree.</desc>
        <path d="M60,160 C80,60 150,30 250,25 C330,22 400,20 440,20 L440,160 Z" fill="#c9b3e0" opacity=".3"/>
        <line x1="60" y1="160" x2="440" y2="160" stroke="#5a2f7a" stroke-width="1"/>
        <line x1="60" y1="160" x2="60" y2="20" stroke="#5a2f7a" stroke-width="1"/>
        <line x1="60" y1="160" x2="440" y2="20" stroke="#5a2f7a" stroke-width="0.8" stroke-dasharray="4 3"/>
        <path d="M60,160 C80,60 150,30 250,25 C330,22 400,20 440,20" fill="none" stroke="#5a2f7a" stroke-width="2"/>
        <text x="445" y="175" font-size="12" fill="#5a2f7a">FPR</text>
        <text x="35" y="25" text-anchor="end" font-size="12" fill="#5a2f7a">TPR</text>
        <text x="272" y="102" font-size="11" fill="#5a2f7a">hasard</text>
        <text x="350" y="35" text-anchor="middle" font-size="11" fill="#5a2f7a">ROC</text>
      </svg>
    </div>
  </div>
`;

// M2 : variétés algébriques projectives, analyse harmonique avancée, théorie de Galois, chaînes
// de Markov avancées, inférence bayésienne.
const M2_SCHEMA_HTML = `
  <h2 class="sr-only">Cinq illustrations de notions de mathematiques pour classes preparatoires : variete algebrique projective, decomposition harmonique en modes, tour d'extensions de corps en theorie de Galois, graphe d'une chaine de Markov, et inference bayesienne prior-vraisemblance-posterior.</h2>
  <div class="sixe-panel-grid">
    <div class="sixe-panel sixe-p16" style="grid-column:span 2">
      <div class="sixe-panel-title">Variétés algébriques projectives</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Variete algebrique dans l'espace projectif</title><desc>Un espace projectif stylise contenant une courbe algebrique homogene.</desc>
        <polygon points="160,20 30,160 290,160" fill="none" stroke="#0d5c66" stroke-width="1" stroke-dasharray="5 4"/>
        <text x="135" y="14" font-size="14" fill="#0d5c66">P²</text>
        <path d="M70,150 C110,120 130,70 170,100 C210,130 220,90 250,140" fill="none" stroke="#0d5c66" stroke-width="1.6"/>
      </svg>
    </div>
    <div class="sixe-panel sixe-p17" style="grid-column:span 2">
      <div class="sixe-panel-title">Analyse harmonique avancée</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Decomposition harmonique en modes</title><desc>Un signal decompose en plusieurs modes sinusoidaux de frequences croissantes.</desc>
        <text x="20" y="14" font-size="11" fill="#8a3a1f">signal(t)</text>
        <path d="M20,45 C45,15 65,75 90,45 C115,15 135,75 160,35 C185,10 205,65 230,40 C255,20 275,55 300,45" fill="none" stroke="#8a3a1f" stroke-width="1.6"/>
        <path d="M20,105 q15,-12 30,0 q15,12 30,0 q15,-12 30,0 q15,12 30,0 q15,-12 30,0 q15,12 30,0 q15,-12 30,0 q15,12 30,0" fill="none" stroke="#8a3a1f" stroke-width="1.3"/>
        <text x="265" y="108" font-size="10" fill="#8a3a1f">mode 1</text>
        <path d="M20,135 q10,-8 20,0 q10,8 20,0 q10,-8 20,0 q10,8 20,0 q10,-8 20,0 q10,8 20,0 q10,-8 20,0 q10,8 20,0 q10,-8 20,0 q10,8 20,0 q10,-8 20,0 q10,8 20,0" fill="none" stroke="#8a3a1f" stroke-width="1.1"/>
        <text x="265" y="138" font-size="10" fill="#8a3a1f">mode 2</text>
        <path d="M20,165 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0 q6,-5 12,0 q6,5 12,0" fill="none" stroke="#8a3a1f" stroke-width="1"/>
        <text x="265" y="168" font-size="10" fill="#8a3a1f">mode 3</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p18" style="grid-column:span 2">
      <div class="sixe-panel-title">Théorie de Galois</div>
      <svg viewBox="0 0 320 190" style="width:100%;height:auto;display:block" role="img">
        <title>Tour d'extensions de corps</title><desc>Trois corps K, L et M empiles montrant une tour d'extensions.</desc>
        <line x1="160" y1="140" x2="160" y2="115" stroke="#34406b" stroke-width="1"/>
        <line x1="160" y1="85" x2="160" y2="60" stroke="#34406b" stroke-width="1"/>
        <rect x="110" y="140" width="100" height="30" rx="8" fill="#c7cde8" stroke="#34406b" stroke-width="1"/>
        <text x="160" y="159" text-anchor="middle" font-size="14" fill="#22284a">K</text>
        <rect x="110" y="85" width="100" height="30" rx="8" fill="#c7cde8" stroke="#34406b" stroke-width="1"/>
        <text x="160" y="104" text-anchor="middle" font-size="14" fill="#22284a">L</text>
        <rect x="110" y="30" width="100" height="30" rx="8" fill="#c7cde8" stroke="#34406b" stroke-width="1"/>
        <text x="160" y="49" text-anchor="middle" font-size="14" fill="#22284a">M</text>
        <text x="175" y="131" font-size="10" fill="#34406b">[L:K]</text>
        <text x="175" y="76" font-size="10" fill="#34406b">[M:L]</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p19" style="grid-column:span 3">
      <div class="sixe-panel-title">Chaînes de Markov avancées</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Graphe d'une chaine de Markov</title><desc>Trois etats relies par des transitions probabilistes, chacun muni d'une boucle de transition sur lui meme.</desc>
        <path d="M75,90 C68,60 100,60 105,90" fill="none" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="105,90 96,84 100,94" fill="#3a6b1f"/>
        <text x="90" y="50" text-anchor="middle" font-size="11" fill="#3a6b1f">p11</text>
        <path d="M225,25 C221,8 259,8 255,25" fill="none" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="255,25 246,20 251,29" fill="#3a6b1f"/>
        <text x="268" y="18" font-size="11" fill="#3a6b1f">p22</text>
        <path d="M375,90 C368,60 400,60 405,90" fill="none" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="375,90 380,81 384,91" fill="#3a6b1f"/>
        <text x="390" y="50" text-anchor="middle" font-size="11" fill="#3a6b1f">p33</text>
        <line x1="119" y1="107" x2="211" y2="68" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="211,68 201,70 206,78" fill="#3a6b1f"/>
        <text x="160" y="78" text-anchor="middle" font-size="11" fill="#3a6b1f">p12</text>
        <line x1="269" y1="68" x2="361" y2="107" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="361,107 351,99 356,109" fill="#3a6b1f"/>
        <text x="315" y="80" text-anchor="middle" font-size="11" fill="#3a6b1f">p23</text>
        <path d="M368,146 Q240,182 112,146" fill="none" stroke="#3a6b1f" stroke-width="1.2"/>
        <polygon points="112,146 122,140 120,150" fill="#3a6b1f"/>
        <text x="240" y="167" text-anchor="middle" font-size="11" fill="#3a6b1f">p31</text>
        <circle cx="90" cy="120" r="32" fill="#cfe6c2" stroke="#3a6b1f" stroke-width="1.3"/>
        <circle cx="240" cy="55" r="32" fill="#cfe6c2" stroke="#3a6b1f" stroke-width="1.3"/>
        <circle cx="390" cy="120" r="32" fill="#cfe6c2" stroke="#3a6b1f" stroke-width="1.3"/>
        <text x="90" y="125" text-anchor="middle" font-size="14" fill="#22440f">1</text>
        <text x="240" y="60" text-anchor="middle" font-size="14" fill="#22440f">2</text>
        <text x="390" y="125" text-anchor="middle" font-size="14" fill="#22440f">3</text>
      </svg>
    </div>
    <div class="sixe-panel sixe-p20" style="grid-column:span 3">
      <div class="sixe-panel-title">Inférence bayésienne (Bayes)</div>
      <svg viewBox="0 0 480 190" style="width:100%;height:auto;display:block" role="img">
        <title>Schema de l'inference bayesienne</title><desc>Trois cartes reliees par des operateurs : prior, vraisemblance et posterior.</desc>
        <rect x="30" y="40" width="110" height="90" rx="10" fill="none" stroke="#7a5c12" stroke-width="1" stroke-dasharray="4 3"/>
        <path d="M45,120 C65,120 75,60 85,55 C95,60 105,120 125,120" fill="none" stroke="#7a5c12" stroke-width="1.6"/>
        <text x="85" y="148" text-anchor="middle" font-size="12" fill="#7a5c12">Prior</text>
        <text x="155" y="95" text-anchor="middle" font-size="18" font-weight="500" fill="#7a5c12">×</text>
        <rect x="180" y="40" width="120" height="90" rx="10" fill="none" stroke="#7a5c12" stroke-width="1" stroke-dasharray="4 3"/>
        <path d="M195,120 C205,120 220,50 245,45 C270,55 285,100 295,120" fill="none" stroke="#7a5c12" stroke-width="1.6"/>
        <text x="240" y="148" text-anchor="middle" font-size="12" fill="#7a5c12">Vraisemblance</text>
        <text x="318" y="95" text-anchor="middle" font-size="18" font-weight="500" fill="#7a5c12">∝</text>
        <rect x="335" y="40" width="115" height="90" rx="10" fill="none" stroke="#7a5c12" stroke-width="1" stroke-dasharray="4 3"/>
        <path d="M355,120 C365,120 375,50 392,48 C409,50 419,120 429,120" fill="none" stroke="#7a5c12" stroke-width="1.6"/>
        <text x="392" y="148" text-anchor="middle" font-size="12" fill="#7a5c12">Posterior</text>
      </svg>
    </div>
  </div>
`;

// --- POC : image (ou bloc HTML) affichée dans la zone centrale au clic sur un niveau/matière du
// sommaire "1150 concepts" ---
// Clé "niveau:grade" pour un clic sur l'année (ex. "college:6e"), "niveau:grade:matiere" pour un
// clic sur la matière (ex. "college:6e:Arithmetique"). Une entrée porte soit "src" (image simple),
// soit "html" (contenu HTML riche, ex. plusieurs schémas SVG) — jamais les deux. Construite
// dynamiquement à partir de MATHSITE_NIVEAUX/getGradeSubjects (donc de window.MATHSITE_TREE,
// fourni par jsonMathsite.js, chargé avant ce fichier) : chaque niveau ci-dessous obtient l'image
// de niveau correspondante (si fournie), et chacune de ses matières (quel que soit leur nombre)
// obtient le même bloc HTML de niveau. Un niveau/matière absent de NIVEAU_GRADE_ASSETS garde le
// comportement habituel : seul le sous-menu se déploie/replie (comportement natif de <details>),
// rien ne s'affiche dans la zone centrale.
const NIVEAU_GRADE_ASSETS = {
  college: {
    "6e": { src: "Niveau6eme.png", html: SIXE_SCHEMA_HTML },
    "5e": { src: "Niveau5eme.png", html: CINQUIEME_SCHEMA_HTML },
    "4e": { src: "Niveau4eme.png", html: QUATRIEME_SCHEMA_HTML },
    "3e": { src: "Niveau3eme.png", html: TROISIEME_SCHEMA_HTML }
  },
  lycee: {
    "Seconde": { src: "NiveauSeconde.png", html: SECONDE_SCHEMA_HTML },
    "Premiere": { src: "NiveauPremière.png", html: PREMIERE_SCHEMA_HTML },
    "Terminale": { src: "NiveauTerminale.png", html: TERMINALE_SCHEMA_HTML }
  },
  prepa: {
    // Pas de bannière de niveau fournie pour L1/L2 : seules les matières affichent un schéma.
    "L1": { html: L1_SCHEMA_HTML },
    "L2": { html: L2_SCHEMA_HTML }
  },
  "grandes-ecoles": {
    // Pas de bannière de niveau fournie pour L3/M1/M2 : seules les matières affichent un schéma.
    "L3": { html: L3_SCHEMA_HTML },
    "M1": { html: M1_SCHEMA_HTML },
    "M2": { html: M2_SCHEMA_HTML }
  }
};

const SIDEBAR_CLICK_IMAGES = {};
MATHSITE_NIVEAUX.forEach(niveauDef => {
  const gradeAssets = NIVEAU_GRADE_ASSETS[niveauDef.key];
  if (!gradeAssets) return;
  niveauDef.grades.forEach(gradeKey => {
    const assets = gradeAssets[gradeKey];
    if (!assets) return;
    // N'ajoute une entrée de niveau que si une image de niveau a été fournie (assets.src) : sinon
    // le clic sur le niveau garde le comportement habituel (repli/déploiement du sous-menu).
    if (assets.src) {
      SIDEBAR_CLICK_IMAGES[`${niveauDef.key}:${gradeKey}`] = { src: assets.src, alt: `${NIVEAU_LABELS[niveauDef.key] || niveauDef.key} — ${gradeKey}` };
    }
    const subjects = getGradeSubjects(niveauDef, gradeKey);
    Object.keys(subjects).forEach(subjectKey => {
      SIDEBAR_CLICK_IMAGES[`${niveauDef.key}:${gradeKey}:${subjectKey}`] = { html: assets.html };
    });
  });
});

// Affiche l'entrée associée à `key` dans la zone centrale, en remplacement de son contenu actuel.
// Retourne true si une entrée existait pour cette clé (et a donc été affichée), false sinon
// (auquel cas on ne touche pas à la zone centrale : comportement habituel).
function showSidebarImage(key, title) {
  const entry = SIDEBAR_CLICK_IMAGES[key];
  if (!entry) return false;
  const c = document.getElementById("content");
  if (!c) return false;
  // Contenu HTML riche (schémas) : pas de recadrage/centrage comme pour une image, le cadre
  // scrolle si besoin (voir styles.css .sidebar-html-frame). Image simple : comportement inchangé.
  const frameClass = entry.html ? "sidebar-html-frame" : "sidebar-image-frame";
  const body = entry.html
    ? entry.html
    : `<img src="${escapeHtml(autresImage(entry.src))}" alt="${escapeHtml(entry.alt)}" onerror="this.style.display='none'" />`;
  // Pas de bouton Retour ici (demandé) ; titre remonté et réduit (voir styles.css
  // .sidebar-image-view h1) pour laisser un maximum de place au contenu dans le cadre.
  c.innerHTML = `
    <div class="sidebar-image-view">
      <h1>${escapeHtml(title)}</h1>
      <div class="${frameClass}">
        ${body}
      </div>
    </div>
  `;
  setActiveNav("");
  window.scrollTo(0, 0);
  return true;
}

// niveauFilter optionnel : si fourni (ex. "college"), seul ce niveau est rendu dans le sommaire
// (menu réduit) et le titre l'indique ("Niveaux — Collège"). Sans argument (ou null), comportement
// inchangé : sommaire complet, comme avant l'étape 3. C'est l'option "menu réduit" plutôt que
// l'option "menu complet grisé" : elle réutilise le rendu existant tel quel (juste une liste de
// niveaux plus courte) au lieu d'ajouter un état visuel "désactivé" à gérer en plus.
function renderSidebar(niveauFilter) {
  const sidebar = document.getElementById("sidebar-content");
  if (!sidebar) return;
  sidebar.innerHTML = "";

  const titleEl = document.getElementById("sidebar-title");
  if (titleEl) {
    titleEl.textContent = niveauFilter ? `Niveaux — ${NIVEAU_LABELS[niveauFilter] || niveauFilter}` : "Niveaux";
  }

  const niveauxToRender = niveauFilter
    ? MATHSITE_NIVEAUX.filter(nd => nd.key === niveauFilter)
    : MATHSITE_NIVEAUX;

  niveauxToRender.forEach(niveauDef => {
    const niveau = niveauDef.key;
    const niveauBlock = document.createElement("div");
    niveauBlock.className = "sidebar-niveau";
    niveauBlock.innerHTML = `
      <h2 class="sidebar-niveau-title">
        ${escapeHtml(NIVEAU_LABELS[niveau] || niveau)}
        <span class="sidebar-niveau-link" onclick="setApp('mathsite'); loadCategory('${niveau}')">fiches →</span>
      </h2>`;

    niveauDef.grades.forEach(gradeKey => {
      const subjects = getGradeSubjects(niveauDef, gradeKey);
      const subjectKeys = Object.keys(subjects);
      if (subjectKeys.length === 0) return;
      const gradeTotal = subjectKeys.reduce((sum, k) => sum + (subjects[k] || []).length, 0);

      const gradeDetails = document.createElement("details");
      gradeDetails.className = "sidebar-annee";
      gradeDetails.dataset.niveau = niveau;      // repères utilisés par la recherche (revealInSidebar)
      gradeDetails.dataset.grade = gradeKey;
      const gradeSummary = document.createElement("summary");
      gradeSummary.innerHTML = `${escapeHtml(prettifyGrade(gradeKey))} <span class="sidebar-count">${gradeTotal}</span>`;
      // En plus du repli/déploiement natif de <details>, affiche l'image du niveau si définie
      // dans SIDEBAR_CLICK_IMAGES (POC) ; sinon ne change rien à la zone centrale (comportement habituel).
      gradeSummary.addEventListener("click", () => {
        showSidebarImage(`${niveau}:${gradeKey}`, `${NIVEAU_LABELS[niveau] || niveau} — ${prettifyGrade(gradeKey)}`);
      });
      gradeDetails.appendChild(gradeSummary);

      subjectKeys.forEach(subjectKey => {
        const items = subjects[subjectKey] || [];
        const subjectDetails = document.createElement("details");
        subjectDetails.className = "sidebar-matiere";
        subjectDetails.dataset.subject = subjectKey;
        const subjectSummary = document.createElement("summary");
        subjectSummary.innerHTML = `${escapeHtml(prettifySubject(subjectKey))} <span class="sidebar-count">${items.length}</span>`;
        // Idem : image de la matière si définie (POC), sinon comportement habituel inchangé.
        subjectSummary.addEventListener("click", () => {
          showSidebarImage(`${niveau}:${gradeKey}:${subjectKey}`, `${prettifySubject(subjectKey)} — ${prettifyGrade(gradeKey)}`);
        });
        subjectDetails.appendChild(subjectSummary);

        const ul = document.createElement("ul");
        items.forEach(it => {
          const li = document.createElement("li");
          li.textContent = it.title;
          li.dataset.conceptId = it.id;
          li.onclick = (e) => {
            e.stopPropagation();
            openMenuConcept(niveau, gradeKey, subjectKey, it.id, it.title);
          };
          ul.appendChild(li);
        });
        subjectDetails.appendChild(ul);
        gradeDetails.appendChild(subjectDetails);
      });

      niveauBlock.appendChild(gradeDetails);
    });

    sidebar.appendChild(niveauBlock);
  });
}

// --- Ouverture d'un concept du sommaire "1150 concepts" ---
// 1) Si une fiche détaillée dédiée existe dans window.MATHSITE_FICHES (POC), on l'affiche.
// 2) Sinon, si le titre correspond à une fiche déjà présente dans l'Encyclopédie, on l'ouvre.
// 3) Sinon on affiche une fiche minimale (repère + emplacement dans le programme).
function mathsiteBranch(niveau) {
  return (niveau === "college" || niveau === "lycee") ? "ecole" : "sup";
}
function mathsiteFicheKey(niveau, conceptId) {
  return mathsiteBranch(niveau) + ":" + conceptId;
}

function openMenuConcept(niveau, gradeKey, subjectKey, conceptId, title) {
  const fiches = window.MATHSITE_FICHES || {};
  const fiche = fiches[mathsiteFicheKey(niveau, conceptId)];
  if (fiche) {
    openMathsiteFiche(niveau, gradeKey, subjectKey, fiche);
    return;
  }

  const match = notions.find(n => normalize(n.title) === normalize(title));
  if (match) {
    openNotion(match.id);
    return;
  }

  const c = document.getElementById("content");
  if (!c) return;
  c.innerHTML = `
    <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
    <span class="card-niveau-tag ${niveauTagClass(niveau)}">${escapeHtml(NIVEAU_LABELS[niveau] || niveau)}</span>
    <h1>${escapeHtml(title)}</h1>
    <p class="subtitle">${escapeHtml(prettifyGrade(gradeKey))} — ${escapeHtml(prettifySubject(subjectKey))}</p>
    <div class="section">
      <p>Ce repère fait partie du sommaire des <strong>1150 concepts</strong> du programme, mais n'a pas encore de fiche détaillée dans l'Encyclopédie.</p>
      <p>Il est en revanche recensé et numéroté dans la partie <a href="#" onclick="loadFormulesHome(); return false;">Σ 1150 Concepts</a>.</p>
    </div>
  `;
  setActiveNav("");
  window.scrollTo(0, 0);
}

// --- Affichage d'une fiche détaillée issue du sommaire "1150 concepts" (POC) ---
// Même gabarit visuel que openNotion() (Définition / Formules / Explication / Détails /
// Vidéos / Applications pratiques / Pour aller plus loin), mais alimenté par
// window.MATHSITE_FICHES au lieu de window.NOTIONS. Pas de section "Correspondances" ici
// (retirée des données ET de l'affichage) ; "Pour aller plus loin" contient du HTML (des
// liens <a> vers une recherche Google) déjà généré côté données, donc rendu sans escapeHtml.
// Section « Définition axiomatique » d'une fiche (placée juste après « Définition »). Champ
// optionnel fiche.definition_axiomatique = { cadre, axiomes: [{nom, enonce}], conclusion, remarque } :
// cadre (objets et symboles de départ), axiomes (liste), conclusion (la définition qui en découle),
// remarque (facultative), sources (facultatif : [{titre, url}], pages web consultées pour établir la
// définition, affichées en fin de section). Une fiche qui n'a pas ce champ n'affiche pas la section.
function renderDefinitionAxiomatique(da) {
  if (!da || typeof da !== "object") return "";
  const axiomes = (da.axiomes || []).filter(Boolean);
  const sources = (da.sources || []).filter(s => s && s.url);
  if (!da.cadre && !axiomes.length && !da.conclusion) return "";
  return `
    <div class="section section-axiomatique">
      <h3>Définition axiomatique</h3>
      ${da.cadre ? `<p><strong>Cadre.</strong> ${escapeHtml(da.cadre)}</p>` : ""}
      ${axiomes.length ? `
      <p><strong>Axiomes.</strong></p>
      <ul class="axiomes-list">
        ${axiomes.map(ax => `<li><strong>${escapeHtml(ax.nom || "")}</strong> — ${escapeHtml(ax.enonce || "")}</li>`).join("")}
      </ul>` : ""}
      ${da.conclusion ? `<p><strong>Définition.</strong> ${escapeHtml(da.conclusion)}</p>` : ""}
      ${da.remarque ? `<p class="axiome-remarque"><strong>Remarque.</strong> ${escapeHtml(da.remarque)}</p>` : ""}
      ${sources.length ? `<p class="axiome-sources"><strong>Sources.</strong> ${sources.map(s => `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.titre || s.url)}</a>`).join(" · ")}</p>` : ""}
    </div>`;
}

function openMathsiteFiche(niveau, gradeKey, subjectKey, fiche) {
  const c = document.getElementById("content");
  if (!c) return;

  const niveauLabel = NIVEAU_LABELS[niveau] || niveau;
  const subjectLabel = prettifySubject(subjectKey);
  const gradeLabel = prettifyGrade(gradeKey);

  c.innerHTML = `
    <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
    <span class="card-niveau-tag ${niveauTagClass(niveau)}">${escapeHtml(niveauLabel)}</span>
    <h1>${escapeHtml(fiche.title)}</h1>
    <p class="subtitle">${escapeHtml(subjectLabel)} — ${escapeHtml(gradeLabel)} · ${escapeHtml(niveauLabel)}</p>

    ${fiche.definition ? `
    <div class="section">
      <h3>Définition</h3>
      <p>${escapeHtml(fiche.definition)}</p>
    </div>` : ""}

    ${renderDefinitionAxiomatique(fiche.definition_axiomatique)}

    <div class="section">
      <h3>Formules</h3>
      <ol class="formulas-list">
        ${(fiche.formulas || []).map(f => {
          const text = typeof f === "string" ? f : f.text;
          const imgLink = (f && typeof f === "object" && f.images) ? f.images : null;
          return `
          <li class="formula-item">
            <span class="formula-text">${escapeHtml(text)}</span>
            ${imgLink ? `<a class="formula-images-link" href="${escapeHtml(imgLink)}" target="_blank" rel="noopener noreferrer">images</a>` : ""}
          </li>`;
        }).join("")}
      </ol>
    </div>

    ${fiche.explication_formules ? `
    <div class="section">
      <h3>Explication des formules</h3>
      <p>${escapeHtml(fiche.explication_formules)}</p>
    </div>` : ""}

    <div class="section">
      <h3>Détails</h3>
      <p>${escapeHtml(fiche.details || "")}</p>
      ${fiche.sous_points && fiche.sous_points.length ? `
      <ol class="sous-points-list">
        ${fiche.sous_points.map(sp => `<li><strong>${escapeHtml(sp.terme)}</strong> — ${escapeHtml(sp.definition)}</li>`).join("")}
      </ol>` : ""}
    </div>

    ${fiche.images && fiche.images.items && fiche.images.items.length ? `
    <div class="section">
      <h3>Images / Graphiques</h3>
      ${fiche.images.intro ? `<p>${escapeHtml(fiche.images.intro)}</p>` : ""}
      <div class="fiche-images-grid">
        ${fiche.images.items.map(img => `<img src="${escapeHtml(autresImage(img.file))}" alt="${escapeHtml(img.alt || fiche.title)}" onerror="this.style.display='none'" />`).join("")}
      </div>
    </div>` : ""}

    ${fiche.videos && (fiche.videos.cours || fiche.videos.methode) ? `
    <div class="section">
      <h3>Vidéos</h3>
      ${fiche.videos.intro ? `<p>${escapeHtml(fiche.videos.intro)}</p>` : ""}
      <ol class="applications-list">
        ${fiche.videos.cours ? `
          <li class="application-item">
            <a href="${escapeHtml(fiche.videos.cours.url)}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;width:100%;">
              <span class="application-icon">${ICONS.education}</span>
              <span class="video-lang-badge" style="display:inline-block;flex-shrink:0;min-width:28px;text-align:center;padding:2px 6px;border-radius:10px;font-size:11px;font-weight:700;letter-spacing:0.03em;${fiche.videos.cours.lang === "en" ? "background:#1d3a8f;color:#a8c4ff;" : "background:#7a3a12;color:#ffcfa3;"}">${fiche.videos.cours.lang === "en" ? "EN" : "FR"}</span>
              <span class="application-text"><strong>Cours</strong> — ${escapeHtml(fiche.videos.cours.title)} <em>(${escapeHtml(fiche.videos.cours.channel)})</em></span>
            </a>
          </li>` : ""}
        ${fiche.videos.methode ? `
          <li class="application-item">
            <a href="${escapeHtml(fiche.videos.methode.url)}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;width:100%;">
              <span class="application-icon">${ICONS.research}</span>
              <span class="video-lang-badge" style="display:inline-block;flex-shrink:0;min-width:28px;text-align:center;padding:2px 6px;border-radius:10px;font-size:11px;font-weight:700;letter-spacing:0.03em;${fiche.videos.methode.lang === "en" ? "background:#1d3a8f;color:#a8c4ff;" : "background:#7a3a12;color:#ffcfa3;"}">${fiche.videos.methode.lang === "en" ? "EN" : "FR"}</span>
              <span class="application-text"><strong>Méthode</strong> — ${escapeHtml(fiche.videos.methode.title)} <em>(${escapeHtml(fiche.videos.methode.channel)})</em></span>
            </a>
          </li>` : ""}
      </ol>
    </div>` : ""}

    ${fiche.applications_list && fiche.applications_list.length ? `
    <div class="section">
      <h3>Applications pratiques</h3>
      <ol class="applications-list">
        ${fiche.applications_list.map(a => `
          <li class="application-item">
            <span class="application-icon">${ICONS[a.icon] || ICONS.research}</span>
            <span class="application-text">${escapeHtml(a.text)}</span>
          </li>
        `).join("")}
      </ol>
    </div>` : ""}

    ${fiche.approfondissements && fiche.approfondissements.length ? `
    <div class="section">
      <h3>Pour aller plus loin</h3>
      <ol class="approfondissements-list">
        ${fiche.approfondissements.map(label => `<li>${label}</li>`).join("")}
      </ol>
    </div>` : ""}
  `;

  setActiveNav("");
  window.scrollTo(0, 0);
}

// --- Génération du HTML d'une carte ---
function renderCard(n) {
  const preview = n.details ? escapeHtml(n.details).slice(0, 150) : "";
  return `
    <div class="notion-card" onclick="openNotion(${n.id})">
      <span class="card-niveau-tag ${niveauTagClass(n.niveau)}">${escapeHtml(NIVEAU_LABELS[n.niveau] || n.niveau)}</span>
      <h3>${escapeHtml(n.title)}</h3>
      <p>${preview}${n.details && n.details.length > 150 ? "..." : ""}</p>
    </div>
  `;
}

// --- Affichage d'une notion unique ---
function openNotion(id) {
  const n = notions.find(x => x.id === id);
  const c = document.getElementById("content");
  if (!n || !c) return;

  const imagesHtml = (n.images || [])
    .map(img => `<img src="${escapeHtml(autresImage(img))}" alt="${escapeHtml(n.title)}" onerror="this.style.display='none'" />`)
    .join("");

  c.innerHTML = `
    <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
    <span class="card-niveau-tag ${niveauTagClass(n.niveau)}">${escapeHtml(NIVEAU_LABELS[n.niveau] || n.niveau)}</span>
    <h1>${escapeHtml(n.title)}</h1>
    <p class="subtitle">${escapeHtml(n.category)} — ${escapeHtml(NIVEAU_LABELS[n.niveau] || n.niveau)}</p>

    ${n.definition ? `
    <div class="section">
      <h3>Définition</h3>
      <p>${escapeHtml(n.definition)}</p>
    </div>` : ""}

    <div class="section">
      <h3>Formules</h3>
      <pre>${escapeHtml((n.formulas || []).join("\n"))}</pre>
    </div>

    ${n.explication_formules ? `
    <div class="section">
      <h3>Explication des formules</h3>
      <p>${escapeHtml(n.explication_formules)}</p>
    </div>` : ""}

    <div class="section">
      <h3>Détails</h3>
      <p>${escapeHtml(n.details || "")}</p>
      ${n.sous_points && n.sous_points.length ? `
      <ol class="sous-points-list">
        ${n.sous_points.map(sp => `<li><strong>${escapeHtml(sp.terme)}</strong> — ${escapeHtml(sp.definition)}</li>`).join("")}
      </ol>` : ""}
    </div>

    ${n.applications_list && n.applications_list.length ? `
    <div class="section">
      <h3>Applications pratiques</h3>
      <ol class="applications-list">
        ${n.applications_list.map(a => `
          <li class="application-item">
            <span class="application-icon">${ICONS[a.icon] || ICONS.research}</span>
            <span class="application-text">${escapeHtml(a.text)}</span>
          </li>
        `).join("")}
      </ol>
    </div>` : ""}

    ${n.approfondissements && n.approfondissements.length ? `
    <div class="section">
      <h3>Pour aller plus loin — top 5</h3>
      <ol class="approfondissements-list">
        ${n.approfondissements.map(a => {
          const label = typeof a === "string" ? a : a.label;
          const link = typeof a === "string" ? null : a.link;
          if (link && link.type === "notion") {
            return `<li class="approf-link" onclick="openNotion(${link.id})">${escapeHtml(label)}</li>`;
          } else if (link && link.type === "theme") {
            return `<li class="approf-link" onclick="loadTheme('${link.slug}')">${escapeHtml(label)}</li>`;
          }
          return `<li>${escapeHtml(label)}</li>`;
        }).join("")}
      </ol>
    </div>` : ""}

    <div class="section">
      <h3>Correspondances</h3>
      <ul class="correspondances-list">
        ${(n.correspondances || []).map(cor => `
          <li onclick="openNotion(${cor.id})">
            <span class="cor-title">${escapeHtml(cor.title)}</span>
            ${cor.raison ? `<span class="cor-raison">${escapeHtml(cor.raison)}</span>` : ""}
          </li>
        `).join("") || "<li class='empty'>Aucune</li>"}
      </ul>
    </div>

    ${imagesHtml ? `<div class="section"><h3>Images</h3>${imagesHtml}</div>` : ""}
  `;
  setActiveNav(n.niveau);
  window.scrollTo(0, 0);
}

// --- Icônes du site (IconeAccueil.png, IconeCollege.png…) : toutes les images d'icônes sont dans ce
// sous-répertoire, à côté d'index.html. Les listes ci-dessous ne gardent que le nom du fichier ;
// le dossier est ajouté au moment d'afficher l'image (pour le changer un jour : une seule ligne). ---
const ICONES_DIR = "Icones-images/";

// --- Images « autres » : toutes les images du site qui ne sont NI des icônes (Icones-images/),
// NI des SVG, NI des images MSC (msc-images/) — logo, bandeaux de niveau, images des fiches et
// des notions, images des formules… — sont rangées dans ce sous-répertoire, à côté d'index.html.
// Les données (fiches, notions, formules) ne gardent que le nom du fichier : le dossier est
// ajouté au moment d'afficher l'image, par autresImage(). Pour le changer un jour : une seule ligne.
// Inchangés : les URL externes (http…, data:…), les SVG, les chemins déjà rangés dans
// autres-images/, les icônes et les images MSC. Les anciens chemins « assets/images/… » des
// formules sont ramenés dans autres-images/. ---
const AUTRES_IMAGES_DIR = "autres-images/";

function autresImage(chemin) {
  const p = String(chemin == null ? "" : chemin).trim();
  if (!p || /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(p)) return p;                       // URL externe, data:, blob:…
  if (p.startsWith(AUTRES_IMAGES_DIR) || p.startsWith(ICONES_DIR) || p.startsWith("msc-images/")) return p;
  if (!/\.(png|jpe?g|gif|webp|bmp|avif)$/i.test(p)) return p;                        // SVG et autres formats : inchangés
  return AUTRES_IMAGES_DIR + p.replace(/^\.\//, "").replace(/^assets\/images\//, "");
}

// --- Cartes de la page d'accueil : un lien par grande section du site (menu horizontal) ---
const HOME_SECTION_CARDS = [
  { icon: "IconeAccueil.png", title: "Présentation du site", desc: "Le mode d'emploi : à quoi sert chaque rubrique et comment naviguer d'un bout à l'autre du site.", onclick: "location.href='carnet-visite-alpha-omega-math.html'" },
  { icon: "IconeEncyclopédie.png", title: "Études", desc: "La bibliothèque Encyclopédie : toutes les fiches, du Collège aux Grandes Écoles, par niveau, classe et chapitre.", onclick: "loadEtudes()", nav: "etudes" },
  { icon: "IconeCorrespondances.png", title: "Correspondances", desc: "Le tableau croisant notions et niveaux.", onclick: "setApp('mathsite'); loadCorrespondanceTable()", nav: "tableau" },
  { icon: "IconeExercices.png", title: "Exercices", desc: "Des exercices ciblés pour s'entraîner.", onclick: "setApp('mathsite'); loadExosFondamentauxHome()", nav: "exos-fondamentaux" },
  { icon: "IconeBanque.png", title: "Banque d'images", desc: "Les schémas et illustrations du site.", onclick: "setApp('mathsite'); loadBanqueImages()", nav: "banque-images" },
  { icon: "IconeFormules.png", title: "Spécialisation", desc: "Les formules regroupées par grand chapitre transversal.", onclick: "loadSpecialisation()", nav: "formules" }
];

// --- Page d'accueil : présentation du site + accès rapide aux grandes sections ---
function loadHome() {
  const c = document.getElementById("content");
  if (!c) return;

  const cards = HOME_SECTION_CARDS.concat(getHomeNiveauCards());

  c.innerHTML = `
    <h1 class="home-title">Encyclopédie Scientifique</h1>
    <p class="subtitle">Toutes les notions, formules, théorèmes et correspondances — du Collège aux Grandes Écoles.</p>

    <div class="home-links-grid">
      ${cards.map(card => `
        <div class="home-link-card" onclick="${card.nav ? `sidebarForNav('${card.nav}'); ` : ""}${card.onclick}">
          <div class="home-link-icon-wrap">
            <img class="home-link-icon" src="${escapeHtml(ICONES_DIR + card.icon)}" alt="" />
          </div>
          <div class="home-link-text">
            <div class="home-link-title">${escapeHtml(card.title)}</div>
            <div class="home-link-desc">${escapeHtml(card.desc)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  setActiveNav("home");
}

// --- Tuiles "niveau" (Collège / Lycée / Prépa-CPGE / Grandes Écoles / Tous les niveaux),
// affichées à la suite des 7 tuiles existantes, dans la MÊME grille (home-links-grid) — même
// forme {icon, title, desc, onclick} que HOME_SECTION_CARDS, pour un rendu identique (icône à
// gauche, texte à droite). Réutilise getNiveauStats()/getHomeNiveauxStats() (étape 2) pour les
// compteurs.
const HOME_NIVEAU_ICONS = {
  college: "IconeCollege.png",
  lycee: "IconeLycee.png",
  prepa: "IconePrepa.png",
  "grandes-ecoles": "IconeGrandesEcoles.png"
};

function getHomeNiveauCards() {
  const rows = getHomeNiveauxStats();
  const cards = rows.map(r => ({
    icon: HOME_NIVEAU_ICONS[r.key] || "IconeAccueil.png",
    title: r.label,
    desc: `${r.notionsCount} notion(s) · ${r.conceptsCount} concept(s)`,
    onclick: `setApp('mathsite'); loadNiveauHome('${r.key}')`,
    nav: "etudes"
  }));
  const totalNotions = rows.reduce((s, r) => s + r.notionsCount, 0);
  const totalConcepts = rows.reduce((s, r) => s + r.conceptsCount, 0);
  cards.push({
    icon: "IconeTousNiveaux.png",
    title: "Tous les niveaux",
    desc: `${totalNotions} notion(s) · ${totalConcepts} concept(s)`,
    onclick: "setApp('mathsite'); loadNiveauHome(null)",
    nav: "etudes"
  });
  return cards;
}

// --- Page "niveau" ouverte au clic sur une tuile : le sommaire à gauche se filtre sur ce seul
// niveau (renderSidebar(niveauKey)) ; avec niveauKey=null ("Tous les niveaux"), le sommaire reste
// complet (renderSidebar() sans argument) et la page récapitule les 4 niveaux.
function loadNiveauHome(niveauKey) {
  const c = document.getElementById("content");
  if (!c) return;

  if (niveauKey) {
    renderSidebar(niveauKey);
    const stats = getNiveauStats(niveauKey);
    c.innerHTML = `
      <span class="card-niveau-tag ${niveauTagClass(niveauKey)}">${escapeHtml(stats.label)}</span>
      <h1>${escapeHtml(stats.label)}</h1>
      <p class="subtitle">${stats.notionsCount} notion(s) dans l'Encyclopédie · ${stats.conceptsCount} concept(s) dans le sommaire (2200 Concepts).</p>
      <p>Le menu Niveaux, à gauche, est maintenant limité à ce niveau : parcourez les années puis les chapitres pour ouvrir une fiche. Vous pouvez aussi consulter <a href="#" onclick="setApp('mathsite'); loadCategory('${niveauKey}'); return false;">les notions de l'Encyclopédie pour ce niveau</a>.</p>
    `;
  } else {
    renderSidebar();
    const rows = getHomeNiveauxStats();
    const totalNotions = rows.reduce((s, r) => s + r.notionsCount, 0);
    const totalConcepts = rows.reduce((s, r) => s + r.conceptsCount, 0);
    c.innerHTML = `
      <h1>Tous les niveaux</h1>
      <p class="subtitle">${totalNotions} notion(s) et ${totalConcepts} concept(s), du Collège aux Grandes Écoles.</p>
      <div class="niveau-recap-grid">
        ${rows.map(r => `
          <div class="notion-card">
            <span class="card-niveau-tag ${niveauTagClass(r.key)}">${escapeHtml(r.label)}</span>
            <p>${r.notionsCount} notion(s) · ${r.conceptsCount} concept(s)</p>
          </div>
        `).join("")}
      </div>
      <p>Le menu Niveaux complet est déployé dans la barre latérale à gauche.</p>
    `;
  }
  setActiveNav("home");
  window.scrollTo(0, 0);
}

// --- Contenu de la page "Présentation du site" : guide des rubriques du menu ---
const PRESENTATION_GUIDE = [
  { icon: "IconeAccueil.png", title: "Accueil", text: "Le point de départ : un accès rapide à chacune des grandes rubriques du site.", nav: "formules" },
  { icon: "IconeEncyclopédie.png", title: "Études", text: "La bibliothèque Encyclopédie : toutes les fiches du site, niveau par niveau, classe par classe, du Collège aux Grandes Écoles. L'introduction donne les totaux (domaines, disciplines, notions, fiches, formules) et le menu Niveaux, à gauche, ouvre chaque fiche." },
  { icon: "IconeCorrespondances.png", title: "Correspondances", text: "Un tableau qui croise les notions-pivots et montre comment elles se retrouvent, sous des formes différentes, en Algèbre, Analyse, Géométrie et Probabilités." },
  { icon: "IconeExercices.png", title: "Exercices", text: "Des exercices ciblés, rattachés aux fiches, pour s'entraîner sur une notion qu'on vient de revoir." },
  { icon: "IconeBanque.png", title: "Banque d'images", text: "Les schémas et illustrations du site rassemblés au même endroit, pour les consulter ou les retrouver rapidement." },
  { icon: "IconeFormules.png", title: "Spécialisation", text: "Les mêmes mathématiques relues autrement : les formules et théorèmes regroupés par grand chapitre transversal, indépendamment du niveau scolaire. Le premier écran, « Vue d'ensemble », met les grands domaines en regard." }
];

// --- Page "Présentation du site" : mode d'emploi des rubriques + repères pour s'y retrouver ---
function loadPresentation() {
  const c = document.getElementById("content");
  if (!c) return;

  c.innerHTML = `
    <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
    <h1>Présentation du site</h1>
    <p class="subtitle">Le mode d'emploi de ΩPrépa : à quoi sert chaque rubrique et comment naviguer d'un bout à l'autre du cursus.</p>

    <p>ΩPrépa rassemble, sur un seul site, les mathématiques du Collège aux Grandes Écoles : plus de 2200 notions et près de 5000 formules et théorèmes, chacun documenté par une fiche complète (définition, formules, explications, exemples, applications, correspondances, vidéos). L'objectif n'est pas de remplacer un cours, mais de donner un point de repère fiable à tout moment de la scolarité.</p>

    <h2>Le mode d'emploi des rubriques</h2>
    <div class="presentation-guide-grid">
      ${PRESENTATION_GUIDE.map(item => `
        <div class="notion-card presentation-guide-card">
          <div class="presentation-guide-header">
            <img class="nav-icon" src="${escapeHtml(ICONES_DIR + item.icon)}" alt="" />
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `).join("")}
    </div>

    <h2>Études et Spécialisation : quelle différence ?</h2>
    <p>Ces deux rubriques ne racontent pas la même histoire, mais elles reposent sur les mêmes fiches. <strong>Études</strong> est la bibliothèque Encyclopédie : toutes les fiches, rangées par niveau, classe et chapitre, pour retrouver une notion précise à son niveau exact. <strong>Spécialisation</strong> est une bibliothèque indépendante : les mêmes résultats, regroupés par grand thème transversal plutôt que par niveau, pour ceux qui préfèrent une lecture par fil conducteur plutôt que par programme.</p>
    <p>Ces deux lectures partagent les mêmes fiches et le même style visuel, si bien qu'on peut passer de l'une à l'autre sans perdre ses repères.</p>

    <h2>Pour qui ?</h2>
    <ul class="applications-list">
      <li class="application-item"><span class="application-text"><strong>Le lycéen en révision</strong> retrouve rapidement une notion de son programme, avec sa fiche complète et ses exercices fondamentaux.</span></li>
      <li class="application-item"><span class="application-text"><strong>L'étudiant en prépa</strong> prépare un oral en s'appuyant sur les correspondances entre domaines et les formules regroupées par thème.</span></li>
      <li class="application-item"><span class="application-text"><strong>L'enseignant</strong> compose un TD ou retrouve rapidement un énoncé, une formule ou un schéma à réutiliser.</span></li>
      <li class="application-item"><span class="application-text"><strong>Le curieux</strong> découvre les mathématiques du Collège aux Grandes Écoles au fil des correspondances entre notions.</span></li>
    </ul>
  `;
}

// --- Encyclopédie : liste complète des notions classées par domaine ---
function loadEncyclopedie() {
  const c = document.getElementById("content");
  if (!c) return;

  c.innerHTML = `
    <h1>Encyclopédie</h1>
    <p class="subtitle">Toutes les notions, classées par domaine.</p>

    <div id="results">
      ${notions.map(renderCard).join("")}
    </div>
  `;
  setActiveNav("encyclopedie");
}

// --- 2200 Concepts : page d'accueil du sommaire Collège → Grandes Écoles (le détail se parcourt
// dans le sommaire à gauche, déjà entièrement déployé par setApp('mathsite') / renderSidebar()) ---
function countNiveauConcepts(niveauDef) {
  let total = 0;
  niveauDef.grades.forEach(gradeKey => {
    const subjects = getGradeSubjects(niveauDef, gradeKey);
    Object.keys(subjects).forEach(subjectKey => {
      total += (subjects[subjectKey] || []).length;
    });
  });
  return total;
}

// --- Étape 2 : agrégation Encyclopédie + 2200 Concepts par niveau, pour les 4 tuiles
// "Collège / Lycée / Prépa-CPGE / Grandes Écoles" de la page d'accueil. Ne lit aucune
// nouvelle donnée : réutilise countNiveauConcepts()/getGradeSubjects() (comme
// loadConceptsHome()) pour les fiches, et le même filtrage sur n.niveau que loadCategory()
// pour l'Encyclopédie.
function getNiveauStats(niveauKey) {
  const niveauDef = MATHSITE_NIVEAUX.find(nd => nd.key === niveauKey);
  const notionsCount = notions.filter(n => normalize(n.niveau) === normalize(niveauKey)).length;
  const conceptsCount = niveauDef ? countNiveauConcepts(niveauDef) : 0;
  return {
    key: niveauKey,
    label: NIVEAU_LABELS[niveauKey] || niveauKey,
    notionsCount,
    conceptsCount
  };
}

// Les 4 tuiles de la page d'accueil, dans l'ordre NIVEAU_ORDER (college, lycee, prepa, grandes-ecoles).
function getHomeNiveauxStats() {
  return NIVEAU_ORDER.map(getNiveauStats);
}

function loadConceptsHome() {
  const c = document.getElementById("content");
  if (!c) return;

  const rows = MATHSITE_NIVEAUX.map(niveauDef => ({
    label: NIVEAU_LABELS[niveauDef.key] || niveauDef.key,
    count: countNiveauConcepts(niveauDef)
  }));
  const total = rows.reduce((sum, r) => sum + r.count, 0);

  c.innerHTML = `
    <h1>2200 Concepts</h1>
    <p class="subtitle">${total} concepts, du Collège aux Grandes Écoles (${rows.map(r => `${escapeHtml(r.label)} : ${r.count}`).join(" · ")}).</p>
    <p>Parcourez le menu Niveaux complet dans la barre latérale à gauche : chaque niveau se déplie en années, puis en chapitres, puis en concepts.</p>
  `;
  setActiveNav("concepts");
}

// --- Banques d'images : section à construire ---
function loadBanqueImages() {
  const c = document.getElementById("content");
  if (!c) return;

  c.innerHTML = `
    <h1>Banque d'images</h1>
    <p class="subtitle">Cette section est en construction.</p>
  `;
  setActiveNav("banque-images");
}

// --- Navigation par niveau ---
function loadCategory(niveau) {
  const c = document.getElementById("content");
  if (!c) return;

  const label = NIVEAU_LABELS[niveau] || niveau;
  const filtered = notions.filter(n => normalize(n.niveau) === normalize(niveau));

  c.innerHTML = `
    <h1>${escapeHtml(label)}</h1>
    <p class="subtitle">Notions de niveau : ${escapeHtml(label)} (${filtered.length})</p>

    <div id="results">
      ${filtered.map(renderCard).join("")}
    </div>
  `;
  setActiveNav(niveau);
}

// --- Navigation par niveau + catégorie (depuis la barre latérale) ---
function loadSubCategory(niveau, category) {
  const c = document.getElementById("content");
  if (!c) return;

  const niveauLabel = NIVEAU_LABELS[niveau] || niveau;
  const filtered = notions.filter(n => n.niveau === niveau && n.category === category);

  c.innerHTML = `
    <button class="back-btn" onclick="loadCategory('${niveau}')">&larr; Retour à ${escapeHtml(niveauLabel)}</button>
    <h1>${escapeHtml(category)}</h1>
    <p class="subtitle">${escapeHtml(niveauLabel)} — ${filtered.length} notion(s)</p>

    <div id="results">
      ${filtered.map(renderCard).join("")}
    </div>
  `;
  setActiveNav(niveau);
  window.scrollTo(0, 0);
}


function setActiveNav(key) {
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
  const el = document.querySelector(`.nav-links a[data-nav="${key}"]`);
  if (el) el.classList.add("active");
}

// --- Menu de gauche (« Niveaux ») rétractable ---
// La flèche placée en tête du menu (#sidebar-toggle) le rétracte jusqu'à une colonne de la largeur
// de la flèche (classe .collapsed sur #sidebar, voir styles.css) ; la flèche change alors
// d'orientation, la zone centrale prend toute la place libre, et un nouveau clic sur la flèche
// réaffiche le menu. Le contenu du menu n'est que masqué (pas supprimé) : sa position de défilement
// et l'entrée mise en évidence par une recherche sont donc retrouvées à la réouverture.
function setSidebarCollapsed(collapsed) {
  const sb = document.getElementById("sidebar");
  if (!sb) return;
  const c = !!collapsed;
  sb.classList.toggle("collapsed", c);
  const btn = document.getElementById("sidebar-toggle");
  if (btn) {
    const label = c ? "Afficher le menu" : "Réduire le menu";
    btn.setAttribute("aria-expanded", String(!c));
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
}

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  if (sb) setSidebarCollapsed(!sb.classList.contains("collapsed"));
}

// Rubriques du menu horizontal (attribut data-nav) : les quatre premières n'ont pas besoin du menu de
// gauche (il se rétracte) ; Accueil, Études et Spécialisation s'appuient dessus (il se réaffiche).
const SIDEBAR_NAV_RETRACTE = ["msc", "tableau", "exos-fondamentaux", "banque-images"];
const SIDEBAR_NAV_AFFICHE = ["home", "etudes", "formules"];

function sidebarForNav(key) {
  if (SIDEBAR_NAV_RETRACTE.includes(key)) setSidebarCollapsed(true);
  else if (SIDEBAR_NAV_AFFICHE.includes(key)) setSidebarCollapsed(false);
}

// Clic dans le menu horizontal (un seul écouteur délégué ; les cartes de l'accueil appellent
// sidebarForNav() elles-mêmes, voir loadHome).
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest(".nav-links a[data-nav]");
  if (a) sidebarForNav(a.dataset.nav);
});

// Touche Entrée dans la barre de recherche : les résultats s'affichent en pleine largeur.
document.addEventListener("keydown", e => {
  if (e.key !== "Enter" || e.isComposing) return;
  if (e.target.id !== "global-search" || !e.target.value.trim()) return;
  setSidebarCollapsed(true);
});

// --- Recherche unique (barre du menu horizontal) ---
// Règle demandée : plusieurs mots séparés par des espaces => recherche en OU (au moins un mot
// trouvé) ; si le signe "+" est présent, les termes qu'il sépare sont recherchés en ET (tous
// doivent être trouvés). La recherche porte sur trois familles de résultats :
//   1) les MENUS : menu horizontal (Encyclopédie, 2200 Concepts, 5000 Formules...) et menu
//      vertical (niveaux, années, matières du sommaire ; chapitres de 5000 Formules) ;
//   2) les FICHES DÉTAILLÉES du sommaire vertical, en profondeur : titre ET contenu (définition,
//      formules, explication, détails, applications pratiques, pour aller plus loin). Une fiche
//      trouvée par son contenu s'affiche avec un extrait où les mots cherchés sont surlignés ;
//   3) les FICHES de l'Encyclopédie (titre, détails, formules, tags) — comportement d'origine.
// Un clic sur un résultat de menu fait ce que ferait un clic sur l'entrée du menu elle-même
// (et déplie le sommaire vertical jusqu'à cette entrée quand elle en fait partie).
// Comme normalize() (sans accents, minuscules), et l'apostrophe typographique ’ est ramenée à ' :
// les données mélangent les deux ("Dérivée d’un produit" / "d'un produit") et la personne qui
// cherche tape ' au clavier.
function normalizeForSearch(s) {
  return normalize(s).replace(/[\u2018\u2019\u02BC\u00B4]/g, "'");
}

function parseSearchQuery(rawQuery) {
  const q = (rawQuery || "").trim();
  if (q.includes("+")) {
    return { mode: "and", terms: q.split("+").map(s => normalizeForSearch(s.trim())).filter(Boolean) };
  }
  return { mode: "or", terms: q.split(/\s+/).map(s => normalizeForSearch(s.trim())).filter(Boolean) };
}

// Nombre de termes trouvés dans `haystack` (déjà normalisé) si la règle ET/OU est satisfaite,
// 0 sinon. Sert aussi à classer les résultats (en OU : plus de mots trouvés = plus haut).
function countSearchTerms(haystack, parsed) {
  let hits = 0;
  parsed.terms.forEach(t => { if (haystack.includes(t)) hits++; });
  return hits;
}

function scoreSearchTerms(haystack, parsed) {
  if (!parsed.terms.length) return 0;
  const hits = countSearchTerms(haystack, parsed);
  if (parsed.mode === "and") return hits === parsed.terms.length ? hits : 0;
  return hits;
}

function searchHaystack(n) {
  return normalizeForSearch([
    n.title, n.details, n.subdetails, n.category,
    (n.formulas || []).join(" "),
    (n.tags || []).join(" ")
  ].filter(Boolean).join(" "));
}

function matchesSearchQuery(n, rawQuery) {
  const q = (rawQuery || "").trim();
  if (!q) return true;
  return scoreSearchTerms(searchHaystack(n), parseSearchQuery(q)) > 0;
}

// --- Recherche en profondeur dans les fiches détaillées (window.MATHSITE_FICHES) ---
function stripHtml(s) {
  return String(s == null ? "" : s)
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&amp;/g, "&");
}

// Les textes d'une fiche qui sont affichés à l'écran, dans l'ordre de la fiche, avec le nom de
// la section (le même que dans la fiche). Sert à construire l'index ET à extraire l'extrait.
function ficheSearchFields(f) {
  const out = [];
  const add = (label, v) => {
    if (v == null) return;
    const text = String(v).replace(/\s+/g, " ").trim();
    if (text) out.push({ label, text });
  };
  add("Définition", f.definition);
  const da = f.definition_axiomatique;
  if (da && typeof da === "object") {
    add("Définition axiomatique", da.cadre);
    (da.axiomes || []).forEach(ax => add("Définition axiomatique", ax && `${ax.nom} — ${ax.enonce}`));
    add("Définition axiomatique", da.conclusion);
    add("Définition axiomatique", da.remarque);
  }
  (f.formulas || []).forEach(x => add("Formules", typeof x === "string" ? x : (x && x.text)));
  add("Explication des formules", f.explication_formules);
  add("Détails", f.details);
  (f.sous_points || []).forEach(sp => add("Détails", sp && `${sp.terme} — ${sp.definition}`));
  (f.applications_list || []).forEach(a => add("Applications pratiques", a && a.text));
  (f.approfondissements || []).forEach(a => add("Pour aller plus loin", stripHtml(a)));
  return out;
}

// Texte normalisé + tables de correspondance vers le texte d'origine (pour surligner dans le
// texte réel une occurrence trouvée dans le texte normalisé, accents et apostrophes compris).
function normalizeWithMap(text) {
  let norm = "";
  const start = [], end = [];
  let i = 0;
  for (const ch of text) {
    const n = normalizeForSearch(ch);
    for (let k = 0; k < n.length; k++) { start.push(i); end.push(i + ch.length); }
    norm += n;
    i += ch.length;
  }
  return { norm, start, end };
}

// Extrait (HTML déjà échappé) montrant où un mot cherché apparaît dans le CORPS de la fiche.
// Vide si la fiche est trouvée par son seul titre.
function buildDeepSnippet(e, parsed) {
  if (!parsed || !parsed.terms || !e.ficheKey) return "";
  const fiche = (window.MATHSITE_FICHES || {})[e.ficheKey];
  if (!fiche) return "";
  const bodyTerms = parsed.terms.filter(t => e.deep.includes(t) && !e.hay.includes(t));
  if (!bodyTerms.length) return "";

  for (const f of ficheSearchFields(fiche)) {
    const m = normalizeWithMap(f.text);
    const positions = bodyTerms.map(t => m.norm.indexOf(t)).filter(pos => pos >= 0);
    if (!positions.length) continue;
    const first = Math.min(...positions);

    // Fenêtre autour de la première occurrence, calée sur des débuts/fins de mots.
    let ns = Math.max(0, first - 60);
    while (ns > 0 && m.norm[ns - 1] !== " " && first - ns < 75) ns--;
    let ne = Math.min(m.norm.length, first + 110);
    while (ne < m.norm.length && m.norm[ne] !== " " && ne - first < 125) ne++;

    // Toutes les occurrences de tous les termes dans la fenêtre, en coordonnées du texte d'origine.
    const ranges = [];
    parsed.terms.forEach(t => {
      let pos = m.norm.indexOf(t, ns);
      while (pos >= 0 && pos < ne) {
        ranges.push([m.start[pos], m.end[Math.min(pos + t.length, m.norm.length) - 1]]);
        pos = m.norm.indexOf(t, pos + t.length);
      }
    });
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [];
    ranges.forEach(r => {
      const last = merged[merged.length - 1];
      if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
      else merged.push(r.slice());
    });

    const os = m.start[ns];
    let oe = ne >= m.norm.length ? f.text.length : m.start[ne];
    merged.forEach(r => { if (r[1] > oe) oe = r[1]; });

    let html = "";
    let cursor = os;
    merged.forEach(([a, b]) => {
      html += escapeHtml(f.text.slice(cursor, a)) + "<mark>" + escapeHtml(f.text.slice(a, b)) + "</mark>";
      cursor = b;
    });
    html += escapeHtml(f.text.slice(cursor, oe));
    return `<span class="search-snippet-field">${escapeHtml(f.label)}</span> ${os > 0 ? "…" : ""}${html}${oe < f.text.length ? "…" : ""}`;
  }
  return "";
}

// --- Index de recherche des MENUS ---
// Construit une seule fois, à la première recherche, puis réutilisé. Chaque entrée :
// { n (position dans idx.all), group ("menus" | "concepts"), kind, label (texte cherché),
//   hay (label normalisé), tag, tagClass, path (texte secondaire), run() (= le clic du menu) }.
let menuSearchIndex = null;

function runInlineHandler(code) {
  try { new Function(code)(); }
  catch (err) { console.error("Entrée de menu inutilisable :", err); }
}

function buildMenuSearchIndex() {
  const idx = { all: [], menus: [], concepts: [] };
  const fiches = window.MATHSITE_FICHES || {};
  const add = (group, e) => {
    e.n = idx.all.length;
    e.group = group;
    e.hay = normalizeForSearch(e.label);
    idx.all.push(e);
    idx[group].push(e);
    return e;
  };

  // 1) Menu horizontal — lu directement dans la barre du haut (index.html), pour que toute
  // rubrique ajoutée ou renommée là-bas soit trouvée sans rien changer ici.
  const cardByTitle = {};
  HOME_SECTION_CARDS.forEach(card => { cardByTitle[normalize(card.title)] = card; });
  const navSeen = {};
  document.querySelectorAll(".nav-links a").forEach(a => {
    const label = a.textContent.trim();
    const code = a.getAttribute("onclick");
    if (!label || !code) return;
    navSeen[normalize(label)] = true;
    const card = cardByTitle[normalize(label)];
    add("menus", {
      kind: "nav", label, tag: "Menu horizontal", tagClass: "tag-theme",
      path: card ? card.desc : "",
      run: () => runInlineHandler(code)
    });
  });
  // Rubriques de la page d'accueil qui ne sont pas dans la barre du haut (ex. Présentation du site).
  HOME_SECTION_CARDS.forEach(card => {
    if (navSeen[normalize(card.title)]) return;
    add("menus", {
      kind: "nav", label: card.title, tag: "Menu horizontal", tagClass: "tag-theme",
      path: card.desc,
      run: () => runInlineHandler(card.onclick)
    });
  });

  // 2) Menu vertical — sommaire Niveau > Année > Matière > Concept (window.MATHSITE_TREE).
  MATHSITE_NIVEAUX.forEach(niveauDef => {
    const niveau = niveauDef.key;
    const niveauLabel = NIVEAU_LABELS[niveau] || niveau;
    const tagClass = niveauTagClass(niveau);

    add("menus", {
      kind: "niveau", label: niveauLabel, tag: "Niveau", tagClass,
      path: "Menu vertical", niveau,
      run: () => { setApp("mathsite"); loadNiveauHome(niveau); }
    });

    niveauDef.grades.forEach(gradeKey => {
      const subjects = getGradeSubjects(niveauDef, gradeKey);
      const subjectKeys = Object.keys(subjects);
      if (subjectKeys.length === 0) return;
      const gradeLabel = prettifyGrade(gradeKey);

      add("menus", {
        kind: "annee", label: gradeLabel, tag: "Année", tagClass,
        path: `Menu vertical › ${niveauLabel}`, niveau, gradeKey,
        run: () => {
          revealInSidebar(niveau, gradeKey);
          if (!showSidebarImage(`${niveau}:${gradeKey}`, `${niveauLabel} — ${gradeLabel}`)) {
            showMenuBranchPage(niveau, gradeKey);
          }
        }
      });

      subjectKeys.forEach(subjectKey => {
        const items = subjects[subjectKey] || [];
        const subjectLabel = prettifySubject(subjectKey);

        add("menus", {
          kind: "matiere", label: subjectLabel, tag: "Chapitre", tagClass,
          path: `Menu vertical › ${niveauLabel} › ${gradeLabel} · ${items.length} concept(s)`,
          niveau, gradeKey, subjectKey,
          run: () => {
            revealInSidebar(niveau, gradeKey, subjectKey);
            if (!showSidebarImage(`${niveau}:${gradeKey}:${subjectKey}`, `${subjectLabel} — ${gradeLabel}`)) {
              showMenuBranchPage(niveau, gradeKey, subjectKey);
            }
          }
        });

        items.forEach(it => {
          const entry = add("concepts", {
            kind: "concept", label: it.title, tag: niveauLabel, tagClass,
            path: `${gradeLabel} › ${subjectLabel}`, niveau, gradeKey, subjectKey,
            run: () => {
              revealInSidebar(niveau, gradeKey, subjectKey, it.id);
              openMenuConcept(niveau, gradeKey, subjectKey, it.id, it.title);
            }
          });
          // Texte cherché = titre du menu + titre et corps de la fiche (une ligne par section,
          // pour qu'un terme à plusieurs mots ne puisse pas "enjamber" deux sections).
          const ficheKey = mathsiteFicheKey(niveau, it.id);
          const fiche = fiches[ficheKey];
          if (fiche) {
            entry.ficheKey = ficheKey;
            entry.deep = normalizeForSearch(
              [it.title, fiche.title].concat(ficheSearchFields(fiche).map(f => f.text)).filter(Boolean).join("\n")
            );
          } else {
            entry.deep = entry.hay;
          }
        });
      });
    });
  });

  // 3) Menu vertical de "Spécialisation" — les chapitres (sans l'introduction, retirée de ce menu).
  (window.FORMULES_CHAPTERS || []).filter(ch => ch.id !== "intro").forEach(ch => {
    add("menus", {
      kind: "chapitre", label: ch.title, tag: "Spécialisation", tagClass: "tag-formules",
      path: `Menu vertical › Spécialisation › Chapitre ${ch.num}`,
      run: () => loadFormulesChapter(ch.id)
    });
  });

  return idx;
}

function getMenuSearchIndex() {
  if (!menuSearchIndex) {
    try {
      menuSearchIndex = buildMenuSearchIndex();
    } catch (err) {
      // Ne casse jamais la recherche des fiches : sans index, seuls les menus sont absents.
      console.error("Index de recherche des menus indisponible :", err);
      return { all: [], menus: [], concepts: [] };
    }
  }
  return menuSearchIndex;
}

function searchMenuEntries(list, parsed) {
  const scored = [];
  list.forEach(e => {
    const s = scoreSearchTerms(e.hay, parsed);
    if (s > 0) scored.push({ e, s });
  });
  // Tri stable : à score égal, l'ordre du menu est conservé.
  scored.sort((a, b) => b.s - a.s);
  return scored.map(x => x.e);
}

// Fiches détaillées : cherche dans titre + corps ; les fiches dont le TITRE contient des termes
// passent avant celles trouvées par leur seul contenu (puis plus de termes trouvés = plus haut).
function searchFicheEntries(list, parsed) {
  const scored = [];
  list.forEach(e => {
    const s = scoreSearchTerms(e.deep, parsed);
    if (s > 0) scored.push({ e, t: countSearchTerms(e.hay, parsed), s });
  });
  scored.sort((a, b) => (b.t - a.t) || (b.s - a.s));
  return scored.map(x => x.e);
}

// --- Actions liées au menu vertical ---
// Ré-affiche le sommaire complet et déplie le chemin Année > Matière (> concept) jusqu'à
// l'entrée visée, qu'il met en évidence. Renvoie l'élément ciblé (ou null s'il est introuvable).
function revealInSidebar(niveau, gradeKey, subjectKey, conceptId) {
  setApp("mathsite");
  const sidebar = document.getElementById("sidebar-content");
  if (!sidebar) return null;

  const grade = Array.from(sidebar.querySelectorAll("details.sidebar-annee"))
    .find(d => d.dataset.niveau === niveau && d.dataset.grade === gradeKey);
  if (!grade) return null;
  grade.open = true;
  let target = grade.querySelector("summary");

  if (subjectKey) {
    const subject = Array.from(grade.querySelectorAll("details.sidebar-matiere"))
      .find(d => d.dataset.subject === subjectKey);
    if (subject) {
      subject.open = true;
      target = subject.querySelector("summary");
      if (conceptId != null) {
        const li = Array.from(subject.querySelectorAll("li"))
          .find(x => x.dataset.conceptId === String(conceptId));
        if (li) target = li;
      }
    }
  }

  target.classList.add("sidebar-current");
  target.scrollIntoView({ block: "center" });
  return target;
}

// Repli quand l'année ou la matière n'a pas d'image/schéma dédié dans le menu : une page qui
// liste ses enfants (matières d'une année, concepts d'une matière), pour qu'un clic ne reste
// jamais sans effet visible.
function showMenuBranchPage(niveau, gradeKey, subjectKey) {
  const c = document.getElementById("content");
  if (!c) return;
  const idx = getMenuSearchIndex();
  const niveauLabel = NIVEAU_LABELS[niveau] || niveau;
  const gradeLabel = prettifyGrade(gradeKey);
  const children = idx.all.filter(e =>
    e.niveau === niveau && e.gradeKey === gradeKey &&
    (subjectKey ? (e.kind === "concept" && e.subjectKey === subjectKey) : e.kind === "matiere"));
  const title = subjectKey ? prettifySubject(subjectKey) : `${niveauLabel} — ${gradeLabel}`;

  c.innerHTML = `
    <span class="card-niveau-tag ${niveauTagClass(niveau)}">${escapeHtml(niveauLabel)}</span>
    <h1>${escapeHtml(title)}</h1>
    <p class="subtitle">${escapeHtml(subjectKey ? gradeLabel : niveauLabel)} — ${children.length} ${subjectKey ? "concept(s)" : "chapitre(s)"}</p>
    <div class="search-menu-list">${children.map(c => renderMenuHitRow(c)).join("")}</div>
  `;
  setActiveNav("");
  window.scrollTo(0, 0);
}

// --- Rendu des résultats ---
const SEARCH_PAGE_SIZE = 50;
let searchPagers = {};

// `parsed` (requête analysée) est facultatif : fourni, il ajoute l'extrait du contenu de la fiche.
function renderMenuHitRow(e, parsed) {
  const snippet = parsed ? buildDeepSnippet(e, parsed) : "";
  return `
    <div class="search-menu-item" onclick="runMenuSearchHit(${e.n})">
      <span class="card-niveau-tag ${e.tagClass || "tag-theme"}">${escapeHtml(e.tag)}</span>
      <span class="search-menu-text">
        <span class="search-menu-label">${escapeHtml(e.label)}</span>
        ${e.path ? `<span class="search-menu-path">${escapeHtml(e.path)}</span>` : ""}
        ${snippet ? `<span class="search-menu-snippet">${snippet}</span>` : ""}
      </span>
    </div>`;
}

function renderSearchGroup(groupId, title, hits, parsed) {
  const shown = Math.min(SEARCH_PAGE_SIZE, hits.length);
  searchPagers[groupId] = { hits, shown, parsed };
  return `
    <h2 class="search-group-title" id="search-grp-${groupId}">${escapeHtml(title)} <span class="search-group-count">${hits.length}</span></h2>
    <div class="search-menu-list" id="search-list-${groupId}">
      ${hits.slice(0, shown).map(h => renderMenuHitRow(h, parsed)).join("")}
    </div>
    ${hits.length > shown ? `<button class="back-btn search-more" id="search-more-${groupId}" onclick="showMoreSearchHits('${groupId}')">Afficher plus (${hits.length - shown} restants)</button>` : ""}
  `;
}

function showMoreSearchHits(groupId) {
  const pager = searchPagers[groupId];
  const list = document.getElementById(`search-list-${groupId}`);
  if (!pager || !list) return;
  const next = Math.min(pager.shown + SEARCH_PAGE_SIZE, pager.hits.length);
  list.insertAdjacentHTML("beforeend", pager.hits.slice(pager.shown, next).map(h => renderMenuHitRow(h, pager.parsed)).join(""));
  pager.shown = next;
  const btn = document.getElementById(`search-more-${groupId}`);
  if (!btn) return;
  if (next >= pager.hits.length) btn.remove();
  else btn.textContent = `Afficher plus (${pager.hits.length - next} restants)`;
}

function jumpToSearchGroup(groupId) {
  const el = document.getElementById(`search-grp-${groupId}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function runMenuSearchHit(n) {
  const e = getMenuSearchIndex().all[n];
  if (e) e.run();
}

function showSearchResults(rawQuery) {
  const c = document.getElementById("content");
  if (!c) return;
  const q = rawQuery.trim();
  const parsed = parseSearchQuery(q);
  const idx = getMenuSearchIndex();
  const menuHits = searchMenuEntries(idx.menus, parsed);
  const conceptHits = searchFicheEntries(idx.concepts, parsed);
  const found = notions.filter(n => matchesSearchQuery(n, q));
  const total = menuHits.length + conceptHits.length + found.length;

  searchPagers = {};
  const groups = [];   // [id, titre, nombre] — sert aux liens "Aller à" en haut de page
  let body = "";
  if (menuHits.length) {
    groups.push(["menus", "Menus", menuHits.length]);
    body += renderSearchGroup("menus", "Menus", menuHits, parsed);
  }
  if (found.length) {
    groups.push(["fiches", "Fiches de l'Encyclopédie", found.length]);
    body += `
      <h2 class="search-group-title" id="search-grp-fiches">Fiches de l'Encyclopédie <span class="search-group-count">${found.length}</span></h2>
      <div id="results">${found.map(renderCard).join("")}</div>`;
  }
  if (conceptHits.length) {
    groups.push(["concepts", "Fiches détaillées", conceptHits.length]);
    body += renderSearchGroup("concepts", "Fiches détaillées", conceptHits, parsed);
  }
  if (!total) {
    body = `<div id="results"><p class="empty">Aucun résultat pour « ${escapeHtml(q)} ».</p></div>`;
  }

  const jumps = groups.length > 1
    ? `<p class="search-jumps">Aller à : ${groups.map(g =>
        `<a href="#" onclick="jumpToSearchGroup('${g[0]}'); return false;">${escapeHtml(g[1])} (${g[2]})</a>`).join("")}</p>`
    : "";

  c.innerHTML = `
    <h1>Résultats de recherche</h1>
    <p class="subtitle">« ${escapeHtml(q)} » — ${total} résultat(s)</p>
    ${jumps}
    ${body}
  `;
  setActiveNav("");
  window.scrollTo(0, 0);
}

document.addEventListener("input", e => {
  if (e.target.id !== "global-search") return;
  const raw = e.target.value;
  if (!raw.trim()) {
    loadHome();
    return;
  }
  showSearchResults(raw);
});

// Clic en dehors de la barre de recherche : elle revient à son état initial (champ vidé,
// texte d'aide visible). Les résultats déjà affichés restent à l'écran et restent cliquables.
// "pointerdown" couvre souris et écran tactile ; vider le champ par code ne déclenche pas
// l'événement "input", donc la page ne repasse pas par l'accueil.
document.addEventListener("pointerdown", e => {
  const input = document.getElementById("global-search");
  if (!input || !input.value) return;
  if (e.target.closest && e.target.closest(".nav-search")) return;
  input.value = "";
});

// Construit l'index de recherche (texte des fiches compris) en tâche de fond après le
// chargement de la page, pour que la toute première frappe n'ait pas ce calcul à attendre.
if (typeof window.requestIdleCallback === "function") {
  window.requestIdleCallback(() => getMenuSearchIndex(), { timeout: 4000 });
} else {
  setTimeout(getMenuSearchIndex, 1500);
}

// =====================================================================
// EXERCICES DU JOUR — journal quotidien avec correction, note, historique
// =====================================================================
const EXO_STORAGE_KEY = "omega-prepa-sessions";

function loadExoSessions() {
  try { return JSON.parse(localStorage.getItem(EXO_STORAGE_KEY)) || []; }
  catch (e) { return []; }
}
function saveExoSessions(sessions) {
  try {
    localStorage.setItem(EXO_STORAGE_KEY, JSON.stringify(sessions));
    return true;
  } catch (e) {
    console.error("Impossible d'écrire dans localStorage :", e);
    return false;
  }
}

function loadExercises() {
  const c = document.getElementById("content");
  if (!c) return;
  setActiveNav("exercices");

  const todayLabel = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  c.innerHTML = `
    <div class="exo-header">
      <div>
        <h1>Exercices du jour</h1>
        <p class="subtitle">Demande tes 3 exercices « niveau actuel » + 3 « niveau supérieur » dans le chat, rédige tes réponses ici, puis colle la correction et la note reçues.</p>
      </div>
      <div class="exo-stats">
        🔥 Série : <strong id="streak-count">0</strong> jour(s) &nbsp;•&nbsp;
        📈 Moyenne : <strong id="avg-note">—</strong>/20
      </div>
    </div>

    <div class="notion-card exo-session-card">
      <h3>Nouvelle séance — ${escapeHtml(todayLabel)}</h3>
      <p class="subtitle" style="margin-bottom:1rem">Rien n'est envoyé nulle part : tout reste enregistré dans ce navigateur.</p>
      <div id="exo-list"></div>
      <button class="btn-secondary" id="add-exo-btn" type="button">+ Ajouter un exercice à cette séance</button>
      <br><br>
      <button class="btn-primary" id="save-session-btn" type="button">Enregistrer la séance du jour</button>
    </div>

    <div class="exo-chip-row">
      <span class="exo-chip active" data-filter="all">Tout l'historique</span>
      <span class="exo-chip" data-filter="week">7 derniers jours</span>
      <span class="exo-chip" data-filter="unnoted">Sans note</span>
    </div>
    <h2 class="section-title">Historique</h2>
    <div id="exo-history"></div>
  `;

  const exoList = document.getElementById("exo-list");
  let exoCount = 0;

  function exoBlock(n, level) {
    const div = document.createElement("div");
    div.className = "exo-block";
    div.dataset.idx = n;
    div.innerHTML = `
      <div class="exo-meta">
        <span class="exo-tag ${level === "sup" ? "exo-tag-sup" : "exo-tag-actuel"}">${level === "sup" ? "Niveau supérieur" : "Niveau actuel"}</span>
        <span class="exo-tag">Exercice ${n}</span>
      </div>
      <textarea placeholder="Énoncé (copie-le depuis le chat)..." class="exo-enonce"></textarea>
      <textarea placeholder="Ta réponse / ta rédaction..." class="exo-reponse"></textarea>
      <textarea placeholder="Correction & remarques (à coller une fois reçues)..." class="exo-correction"></textarea>
      <div class="exo-meta" style="margin-top:.6rem">
        <label class="exo-note-label">Note /20 :
          <input type="number" min="0" max="20" step="0.5" class="exo-note">
        </label>
      </div>
    `;
    return div;
  }

  function addDefaultSix() {
    exoList.innerHTML = "";
    exoCount = 0;
    for (let i = 0; i < 3; i++) { exoCount++; exoList.appendChild(exoBlock(exoCount, "actuel")); }
    for (let i = 0; i < 3; i++) { exoCount++; exoList.appendChild(exoBlock(exoCount, "sup")); }
  }
  addDefaultSix();

  document.getElementById("add-exo-btn").addEventListener("click", () => {
    exoCount++;
    exoList.appendChild(exoBlock(exoCount, "sup"));
  });

  document.getElementById("save-session-btn").addEventListener("click", () => {
    const exos = [...exoList.querySelectorAll(".exo-block")].map(div => ({
      enonce: div.querySelector(".exo-enonce").value,
      reponse: div.querySelector(".exo-reponse").value,
      correction: div.querySelector(".exo-correction").value,
      note: div.querySelector(".exo-note").value
    })).filter(e => e.enonce || e.reponse || e.correction);

    if (exos.length === 0) { alert("Ajoute au moins un exercice avant d'enregistrer."); return; }

    const notesVal = exos.map(e => parseFloat(e.note)).filter(n => !isNaN(n));
    const avgSession = notesVal.length ? (notesVal.reduce((a, b) => a + b, 0) / notesVal.length) : null;

    const sessions = loadExoSessions();
    sessions.push({ date: new Date().toISOString(), exos, avg: avgSession });
    const ok = saveExoSessions(sessions);

    if (!ok) {
      alert("Impossible d'enregistrer la séance : le stockage local n'est pas disponible dans ce navigateur (mode navigation privée ?). Copie tes réponses ailleurs par précaution.");
      return;
    }

    renderExoHistory(currentExoFilter);
    addDefaultSix();
    alert("Séance enregistrée !");
  });

  document.querySelectorAll(".exo-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".exo-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentExoFilter = chip.dataset.filter;
      renderExoHistory(currentExoFilter);
    });
  });

  renderExoHistory("all");
}

let currentExoFilter = "all";

function exoNoteClass(n) {
  if (n === null || isNaN(n)) return "";
  if (n >= 14) return "exo-note-high";
  if (n >= 10) return "exo-note-mid";
  return "exo-note-low";
}

function computeExoStreak(sessions) {
  if (!sessions.length) return 0;
  const days = [...new Set(sessions.map(s => new Date(s.date).toDateString()))]
    .map(d => new Date(d)).sort((a, b) => b - a);
  let streak = 0;
  let cursor = new Date(); cursor.setHours(0, 0, 0, 0);
  for (const d of days) {
    const dd = new Date(d); dd.setHours(0, 0, 0, 0);
    const diff = Math.round((cursor - dd) / 86400000);
    if (diff === 0 || diff === 1) { streak++; cursor = dd; }
    else break;
  }
  return streak;
}

function renderExoHistory(filter) {
  const sessions = loadExoSessions().slice().reverse();
  const container = document.getElementById("exo-history");
  if (!container) return;
  container.innerHTML = "";

  const now = new Date();
  const filtered = sessions.filter(s => {
    if (filter === "week") return (now - new Date(s.date)) <= 7 * 86400000;
    if (filter === "unnoted") return s.exos.some(e => e.note === "" || e.note === undefined);
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p class="empty">Aucune séance enregistrée pour ce filtre. Commence par une séance ci-dessus !</p>';
  } else {
    filtered.forEach(s => {
      const d = new Date(s.date);
      const avgTxt = s.avg !== null ? s.avg.toFixed(1) : "—";
      const item = document.createElement("div");
      item.className = "exo-history-item";
      item.innerHTML = `
        <h4>${escapeHtml(d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }))}
          <span class="exo-note-badge ${exoNoteClass(s.avg)}">${avgTxt}/20</span>
        </h4>
        <p class="subtitle">${s.exos.length} exercice(s)</p>
        <details>
          <summary>Voir le détail</summary>
          ${s.exos.map((e, idx) => `
            <div class="exo-detail-block">
              <strong>Exercice ${idx + 1}${e.note ? " — note: " + escapeHtml(e.note) + "/20" : ""}</strong>
              ${e.enonce ? "<p class='subtitle'><em>Énoncé :</em> " + escapeHtml(e.enonce) + "</p>" : ""}
              ${e.reponse ? "<p><em>Réponse :</em> " + escapeHtml(e.reponse) + "</p>" : ""}
              ${e.correction ? "<p class='exo-correction-text'><em>Correction :</em> " + escapeHtml(e.correction) + "</p>" : ""}
            </div>
          `).join("")}
        </details>
      `;
      container.appendChild(item);
    });
  }

  const streakEl = document.getElementById("streak-count");
  const avgEl = document.getElementById("avg-note");
  if (streakEl) streakEl.textContent = computeExoStreak(loadExoSessions());
  const allNotes = loadExoSessions().flatMap(s => s.exos.map(e => parseFloat(e.note)).filter(n => !isNaN(n)));
  if (avgEl) avgEl.textContent = allNotes.length ? (allNotes.reduce((a, b) => a + b, 0) / allNotes.length).toFixed(1) : "—";
}

// =====================================================================
// TABLEAU DE CORRESPONDANCES INTERDISCIPLINAIRES
// =====================================================================
// Notions-pivots qui relient Algèbre, Analyse, Géométrie, Probabilités
// (et parfois Physique / Informatique). Construit dynamiquement à partir
// des correspondances qui portent une "raison" explicite.
const HUB_IDS = [104, 103, 102, 109, 110, 702, 8, 18, 7, 15, 324];

function loadCorrespondanceTable() {
  const c = document.getElementById("content");
  if (!c) return;
  setActiveNav("tableau");

  const hubs = HUB_IDS.map(id => notions.find(n => n.id === id)).filter(Boolean);

  c.innerHTML = `
    <h1>Tableau de correspondances interdisciplinaires</h1>
    <p class="subtitle">Les notions-pivots qui relient Algèbre, Analyse, Géométrie et Probabilités — avec, pour chaque lien, la raison mathématique précise de la correspondance.</p>
    <div id="hub-cards"></div>
  `;

  const container = document.getElementById("hub-cards");
  hubs.forEach(hub => {
    const reasoned = (hub.correspondances || []).filter(cor => cor.raison);
    if (reasoned.length === 0) return;

    const card = document.createElement("div");
    card.className = "notion-card hub-card";
    card.innerHTML = `
      <div class="hub-card-header" onclick="openNotion(${hub.id})">
        <span class="card-niveau-tag ${niveauTagClass(hub.niveau)}">${escapeHtml(hub.category)}</span>
        <h3>${escapeHtml(hub.title)}</h3>
      </div>
      <div class="hub-links">
        ${reasoned.map(cor => {
          const target = notions.find(n => n.id === cor.id);
          const cat = target ? target.category : "";
          return `
            <div class="hub-link" onclick="openNotion(${cor.id})">
              <div class="hub-link-top">
                <span class="hub-link-cat">${escapeHtml(cat)}</span>
                <strong>${escapeHtml(cor.title)}</strong>
              </div>
              <p class="hub-link-raison">${escapeHtml(cor.raison)}</p>
            </div>
          `;
        }).join("")}
      </div>
    `;
    container.appendChild(card);
  });
}

// =====================================================================
// PAGE DE THÈME — détail d'un sous-sujet "Pour aller plus loin"
// =====================================================================
function loadTheme(slug) {
  const c = document.getElementById("content");
  if (!c) return;
  const theme = (window.THEMES || {})[slug];
  if (!theme) { loadHome(); return; }

  // Trouver les notions qui référencent ce thème dans leur top 5
  const origins = notions.filter(n =>
    (n.approfondissements || []).some(a => a && a.link && a.link.type === "theme" && a.link.slug === slug)
  );

  c.innerHTML = `
    <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
    <span class="card-niveau-tag tag-theme">Thème d'approfondissement</span>
    <h1>${escapeHtml(theme.title)}</h1>

    <div class="section">
      <p class="theme-description">${escapeHtml(theme.description)}</p>
    </div>

    ${origins.length ? `
    <div class="section">
      <h3>Suggéré depuis</h3>
      <ul class="correspondances-list">
        ${origins.map(o => `
          <li onclick="openNotion(${o.id})">
            <span class="cor-title">${escapeHtml(o.title)}</span>
            <span class="cor-raison">${escapeHtml(o.category)} — ${escapeHtml(NIVEAU_LABELS[o.niveau] || o.niveau)}</span>
          </li>
        `).join("")}
      </ul>
    </div>` : ""}
  `;
  setActiveNav("");
  window.scrollTo(0, 0);
}

// --- Comportement général : toute image affichée dans la zone centrale (#content) s'ouvre en
// plein écran dans un nouvel onglet au clic — bannières de niveau, images de fiches/notions,
// etc. Un seul écouteur délégué sur le document (posé une fois pour toutes) : #content est
// entièrement regénéré à chaque navigation, il serait donc inutile de rattacher un écouteur par
// image à chaque rendu. Le curseur "zoom-in" associé est défini dans styles.css (#content img).
document.addEventListener("click", (e) => {
  const img = e.target.closest("#content img");
  if (!img) return;
  const url = img.currentSrc || img.src;
  if (url) window.open(url, "_blank");
});

// --- Lancement ---
loadNotions();
