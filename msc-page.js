// =====================================================================
// PAGE « MSC » — Classification Mathématiques MSC, affichée dans la zone centrale (#content)
// de MathSite, comme les autres rubriques du menu horizontal (Exercices, Banques d'images...).
//
// - Appelée depuis le menu : setApp('mathsite'); loadMscPage()
// - Ne touche à aucun autre fichier : app.js, styles.css, msc.js et msc-data.js restent inchangés.
// - Styles dans msc-page.css (tout est préfixé .mscp / mscp-).
// - Images dans le dossier msc-images/ ; un clic sur une image l'ouvre en plein écran grâce au
//   gestionnaire général de MathSite (toute image de #content s'ouvre dans un nouvel onglet).
// - Contenu : hiérarchie Domaine > Mathématiques pures / appliquées > Discipline > Exemples de
//   notions, d'après le PDF « MathsMSC ».
// =====================================================================
(function () {
  "use strict";

  const IMG_DIR = "msc-images/";
  const PURES = "Mathématiques pures";
  const APPLIQUEES = "Mathématiques appliquées";

  // Chaque discipline : [nom, [exemples de notions]]
  const MSC_DOMAINS = [
    {
      id: "fondements", name: "Fondements et Logique",
      images: [
        ["msc-fondements-venn.jpg", "Diagramme de Venn de trois ensembles A, B et C avec leurs intersections"],
        ["msc-fondements-portes-logiques.png", "Portes logiques AND, OR, NOT, NAND et NOR avec leur fonction algébrique et leur table de vérité"]
      ],
      branches: [
        { label: PURES, items: [
          ["Logique mathématique", ["systèmes formels", "modèles", "calculabilité"]],
          ["Théorie des ensembles", ["fondements", "infinis", "axiomes"]],
          ["Théorie des catégories", ["structures abstraites", "morphismes"]]
        ] },
        { label: APPLIQUEES, items: [
          ["Logique mathématique", ["en informatique théorique (preuves automatiques, vérification)"]],
          ["Théorie des catégories", ["en informatique (langages fonctionnels, sémantique des programmes)"]]
        ] }
      ]
    },
    {
      id: "algebre", name: "Algèbre et Théorie des nombres",
      images: [
        ["msc-algebre-theorie-des-groupes.png", "Bases de la théorie des groupes en algèbre abstraite : groupes, sous-groupes et tables d’opérations"],
        ["msc-algebre-ensembles-de-nombres.jpg", "Diagramme de Venn des ensembles de nombres : naturels, entiers, rationnels, réels et complexes"]
      ],
      branches: [
        { label: PURES, items: [
          ["Arithmétique et théorie des nombres", ["nombres premiers", "structures arithmétiques"]],
          ["Algèbre générale", ["groupes", "anneaux", "corps"]],
          ["Algèbre linéaire et multilinéaire", ["espaces vectoriels", "matrices"]],
          ["Combinatoire", ["structures discrètes", "graphes"]]
        ] },
        { label: APPLIQUEES, items: [
          ["Théorie des nombres", ["cryptographie moderne"]],
          ["Algèbre linéaire", ["machine learning", "physique", "ingénierie"]],
          ["Combinatoire", ["algorithmique", "réseaux", "optimisation"]]
        ] }
      ]
    },
    {
      id: "analyse", name: "Analyse mathématique",
      images: [
        ["msc-analyse-equations-differentielles.png", "Définition d’une équation différentielle et exemples d’équations différentielles ordinaires"]
      ],
      branches: [
        { label: PURES, items: [
          ["Analyse réelle", ["limites", "dérivation", "intégration"]],
          ["Analyse complexe", ["holomorphie", "fonctions analytiques"]],
          ["Analyse fonctionnelle", ["espaces de Banach/Hilbert"]],
          ["Théorie de la mesure", ["Lebesgue", "intégration"]],
          ["Équations différentielles", ["EDO/EDP en théorie"]]
        ] },
        { label: APPLIQUEES, items: [
          ["Équations différentielles", ["physique", "ingénierie", "biologie"]],
          ["Analyse fonctionnelle", ["mécanique quantique", "PDE numériques"]],
          ["Théorie de la mesure", ["probabilités", "statistiques"]],
          ["Analyse réelle", ["modélisation", "calcul scientifique"]]
        ] }
      ]
    },
    {
      id: "geometrie", name: "Géométrie et Topologie",
      images: [
        ["msc-geometrie-triangles-semblables.png", "Exercice de géométrie : démonstration par triangles semblables et calcul de BC"],
        ["msc-geometrie-topologies-reseau.png", "Topologies de réseau : maillée, étoile, bus et anneau"]
      ],
      branches: [
        { label: PURES, items: [
          ["Géométrie euclidienne", ["figures", "transformations"]],
          ["Géométrie algébrique", ["variétés algébriques"]],
          ["Géométrie différentielle", ["courbure", "variétés"]],
          ["Topologie", ["continuité", "invariants topologiques"]]
        ] },
        { label: APPLIQUEES, items: [
          ["Géométrie différentielle", ["relativité générale", "robotique"]],
          ["Topologie", ["data analysis (TDA)", "réseaux"]],
          ["Géométrie euclidienne", ["vision par ordinateur", "CAO"]]
        ] }
      ]
    },
    {
      id: "probabilites", name: "Probabilités et Statistiques",
      images: [
        ["msc-probabilites-inference-statistique.jpg", "Schéma de l’inférence statistique : de l’échantillon à la population"],
        ["msc-probabilites-processus-stochastique.png", "Schéma d’un processus stochastique : une suite d’événements formée de variables aléatoires"]
      ],
      branches: [
        { label: PURES, items: [
          ["Théorie des probabilités", ["processus stochastiques", "martingales"]],
          ["Statistiques théoriques", ["inférence", "estimation", "tests"]]
        ] },
        { label: APPLIQUEES, items: [
          ["Statistiques", ["data science", "IA", "économie"]],
          ["Probabilités", ["finance", "physique statistique", "modélisation"]]
        ] }
      ]
    },
    {
      id: "appliquees", name: "Mathématiques appliquées et computationnelles",
      images: [],
      // Dans le PDF, ce domaine présente d'abord les mathématiques appliquées, puis les pures.
      branches: [
        { label: APPLIQUEES, items: [
          ["Analyse numérique", ["algorithmes", "calcul scientifique"]],
          ["Optimisation", ["logistique", "IA", "économie"]],
          ["Systèmes dynamiques", ["chaos", "météorologie"]],
          ["Théorie des jeux", ["économie", "biologie"]],
          ["Cryptographie", ["sécurité informatique"]]
        ] },
        { label: PURES, items: [
          ["Systèmes dynamiques", ["théorie ergodique", "bifurcations"]],
          ["Optimisation", ["convexité", "dualité"]],
          ["Théorie des jeux", ["équilibres", "structures stratégiques"]]
        ] }
      ]
    }
  ];

  const MSC_RANGES = [
    ["00-08", "Généralités, histoire, logique, combinatoire et algèbre générale", "00, 01, 03, 05, 06, 08"],
    ["11-19", "Théorie des nombres et algèbre", "11, 12, 13, 14, 15, 16, 17, 18, 19"],
    ["20-22", "Théorie des groupes et topologie algébrique/de Lie", "20, 22"],
    ["26-49", "Analyse", "fonctions réelles, mesures, équations différentielles, analyse fonctionnelle"],
    ["51-58", "Géométrie et variétés", "51, 52, 53, 54, 55, 57, 58"],
    ["60-68", "Probabilités, statistiques et informatique théorique", "60, 62, 65, 68"],
    ["70-86", "Mécanique, physique mathématique, astronomie", "70, 74, 76, 78, 80, 81, 82, 83, 85, 86"],
    ["90-94", "Sciences sociales, recherche opérationnelle, systèmes et information", "90, 91, 92, 93, 94"],
    ["97", "Enseignement et éducation mathématique", "97"]
  ];

  // Échappement local (protège aussi les guillemets, pour les attributs alt)
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  // --- Arbre d'un domaine : Domaine > Pures / Appliquées > Discipline > Exemples de notions ---
  function disciplineHtml(name, notions) {
    return `
              <li class="mscp-disc">
                <span class="mscp-lbl">${esc(name)}</span>
                <ul>
                  <li class="mscp-notions"><span class="mscp-pre">Exemples de notions :</span> ${esc(notions.join(", "))},&nbsp;<span class="mscp-dots">…</span></li>
                </ul>
              </li>`;
  }

  function branchHtml(branch) {
    return `
          <li class="mscp-branch">
            <span class="mscp-lbl">${esc(branch.label)}</span>
            <ul>${branch.items.map(function (it) { return disciplineHtml(it[0], it[1]); }).join("")}
            </ul>
          </li>`;
  }

  function galleryHtml(images) {
    if (!images.length) return "";
    return `
        <div class="mscp-gallery">${images.map(function (im) {
          return `
          <figure class="mscp-fig">
            <img src="${IMG_DIR}${esc(im[0])}" alt="${esc(im[1])}" loading="lazy" onerror="this.closest('.mscp-fig').style.display='none'">
          </figure>`;
        }).join("")}
        </div>`;
  }

  function domainHtml(d) {
    return `
    <section id="mscp-${d.id}" class="mscp-domain">
      <div class="mscp-panel">
        <div class="mscp-domain-body">
          <ul class="mscp-tree">
            <li>
              <h2><span class="mscp-pre">Domaine :</span> ${esc(d.name)}</h2>
              <ul>${d.branches.map(branchHtml).join("")}
              </ul>
            </li>
          </ul>${galleryHtml(d.images)}
        </div>
      </div>
    </section>`;
  }

  function pageHtml() {
    const toc = MSC_DOMAINS.map(function (d) {
      return `<a href="#mscp-${d.id}" data-target="mscp-${d.id}">${esc(d.name)}</a>`;
    }).join("");

    const ranges = MSC_RANGES.map(function (r) {
      return `
          <li class="mscp-range">
            <span class="mscp-range-tag">${esc(r[0])}</span>
            <p>${esc(r[1])} <span class="mscp-range-codes">(${esc(r[2])})</span></p>
          </li>`;
    }).join("");

    return `
    <div class="mscp">
      <div class="mscp-sym" style="font-size: 6rem; top: 20px; left: 10px; color: #7aa2ff;" aria-hidden="true">∫</div>
      <div class="mscp-sym" style="font-size: 8rem; top: 260px; right: 20px; color: #c8a2ff;" aria-hidden="true">∑</div>
      <div class="mscp-sym" style="font-size: 6rem; top: 520px; left: 25%; color: #7ee0c3;" aria-hidden="true">∞</div>
      <div class="mscp-sym" style="font-size: 8rem; top: 700px; right: 33%; color: #ff6b8b;" aria-hidden="true">∇</div>

      <div class="mscp-inner">

        <header class="mscp-hero">
          <div class="mscp-hero-grid">
            <div class="mscp-hero-main">
              <h1>Classification Mathématiques MSC</h1>
              <p class="mscp-lead"><span class="mscp-nb">La MSC (Mathematics Subject Classification) organise les mathématiques en grands domaines,</span> <span class="mscp-nb">eux-mêmes divisés en disciplines, qui manipulent des notions.</span></p>
              <p class="mscp-lead">C’est une cartographie hiérarchique de la structure des mathématiques.</p>
              <nav class="mscp-toc" aria-label="Sommaire de la page">${toc}</nav>
            </div>

            <aside class="mscp-panel mscp-legend" aria-label="Légende des couleurs">
              <h3>Légende des couleurs</h3>
              <ul class="mscp-legend-tree">
                <li class="mscp-legend-domaine">Domaine
                  <ul>
                    <li class="mscp-legend-branche">Math théorique ou appliquée
                      <ul>
                        <li class="mscp-legend-discipline">Discipline
                          <ul>
                            <li class="mscp-legend-notions">Exemples de notions</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>
        </header>
${MSC_DOMAINS.map(domainHtml).join("")}

        <section id="mscp-source">
          <div class="mscp-panel">
            <h2>Classification à la création de MathSite : MSC2020</h2>
            <p><a href="https://msc2020.org/" target="_blank" rel="noopener">https://msc2020.org/</a></p>
            <p>La <strong>Classification MSC2020</strong> (<em>Mathematics Subject Classification 2020</em>) est un système hiérarchique alphanumérique géré par <em>Mathematical Reviews</em> et <em>zbMATH</em> pour organiser la littérature en sciences mathématiques.</p>
          </div>
        </section>

        <section id="mscp-structure">
          <div class="mscp-panel">
            <h2>Structure hiérarchique à 3 niveaux</h2>
            <p>Le code MSC est composé de cinq caractères maximum, répartis sur trois niveaux :</p>

            <div class="mscp-levels">
              <div class="mscp-level mscp-c-mint">
                <div class="mscp-level-num">1</div>
                <h3>Niveau 1 (2 chiffres)</h3>
                <p>Le domaine principal (63 catégories de 00 à 97).</p>
              </div>
              <div class="mscp-level mscp-c-violet">
                <div class="mscp-level-num">2</div>
                <h3>Niveau 2 (1 lettre latine)</h3>
                <p>La sous-discipline ou la spécialité au sein du domaine.</p>
              </div>
              <div class="mscp-level mscp-c-rose">
                <div class="mscp-level-num">3</div>
                <h3>Niveau 3 (2 chiffres)</h3>
                <p>L’objet mathématique précis ou le problème étudié (plus de 6 000 feuilles terminales au total).</p>
              </div>
            </div>

            <div class="mscp-example">
              <div class="mscp-code" aria-label="Code 11G15">
                <span class="mscp-code-part mscp-c-mint">11</span>
                <span class="mscp-code-part mscp-c-violet">G</span>
                <span class="mscp-code-part mscp-c-rose">15</span>
              </div>
              <p><strong>Exemple :</strong> le code 11G15 désigne la théorie des nombres <span class="mscp-k mscp-c-mint">(11)</span>, la géométrie arithmétique/courbes <span class="mscp-k mscp-c-violet">(G)</span>, et spécifiquement les modules de CM pour les variétés abéliennes <span class="mscp-k mscp-c-rose">(15)</span>.</p>
            </div>
          </div>
        </section>

        <section id="mscp-grands-domaines">
          <div class="mscp-panel">
            <h2>Principaux grands domaines (Niveau 1)</h2>
            <p>La classification couvre les sections de 00 à 97, regroupées ainsi :</p>
            <ul class="mscp-ranges">${ranges}
            </ul>
          </div>
        </section>

      </div>
    </div>`;
  }

  // --- Sommaire : défilement doux vers le domaine choisi, sans toucher à l'adresse de la page ---
  function initToc(root) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.querySelectorAll(".mscp-toc a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.getElementById(a.dataset.target);
        const content = document.getElementById("content");
        if (!target || !content) return;
        // on fait défiler uniquement la zone centrale (pas la fenêtre entière)
        const top = target.getBoundingClientRect().top - content.getBoundingClientRect().top + content.scrollTop
          - (parseFloat(getComputedStyle(content).paddingTop) || 0);
        content.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
      });
    });
  }

  // --- Point d'entrée, appelé par le menu horizontal ---
  window.loadMscPage = function () {
    const c = document.getElementById("content");
    if (!c) return;
    c.innerHTML = pageHtml();
    if (typeof setActiveNav === "function") setActiveNav("msc");
    c.scrollTop = 0;
    const root = c.querySelector(".mscp");
    initToc(root);
  };
})();
