// =====================================================================
// PAGE « PRÉSENTATION DU SITE » — accessible depuis l'Accueil (vignette « Présentation du site »).
// Version 1.0
//
// Remplace loadPresentation() d'app.js : la zone centrale affiche désormais le texte du document
// « Introduction.pdf » (Alpha Omega Math, une carte des mathématiques classée comme une vraie
// discipline), avec le style du site (h1, .notion-card, .back-btn, thème sombre).
// Le menu vertical de gauche est réduit à l'ouverture de la page.
// Styles : presentation-page.css (tout est préfixé .pres-).
// À charger APRÈS app.js et AVANT nav-history.js (qui accroche les fonctions chargées avant lui).
// =====================================================================
(function () {
  "use strict";

  // Réduit le menu vertical de gauche (sans effet s'il est déjà réduit)
  function collapseSidebar() {
    const btn = document.getElementById("sidebar-toggle");
    if (btn) {
      if (btn.getAttribute("aria-expanded") === "true") btn.click();
      return;
    }
    if (typeof window.setSidebarCollapsed === "function") window.setSidebarCollapsed(true);
  }

  // [nom, badge, description (HTML), appel]
  const MENU = [
    ["Accueil", "", "La page d’atterrissage : six vignettes vers les grandes rubriques du site (Présentation, Études, Correspondances, Exercices, Banque d’images, Spécialisation — MSC n’y figure pas en tuile), complétées par des tuiles « Collège / Lycée / Prépa-CPGE / Grandes Écoles / Tous les niveaux » qui comptent, pour chacune, ses notions et ses concepts.", "setApp('mathsite'); loadHome()"],
    ["MSC", "", "Une page de référence, indépendante de toute notion précise : elle explique la classification MSC2020 (Mathematics Subject Classification) qu’utilise désormais tout le site — ses 6 grands domaines, sa structure en 3 niveaux, son code à 5 caractères (ex. 11G15).", "setApp('mathsite'); loadMscPage()"],
    ["Études", "fusion", "La bibliothèque Encyclopédie au complet : toutes les fiches, rangées par niveau, classe et chapitre. L’écran d’entrée affiche des chiffres calculés à la volée (domaines, disciplines, notions, fiches) niveau par niveau, avec des puces de domaine MSC, avant de renvoyer vers le sommaire (menu de gauche) et vers Correspondances / MSC.", "loadEtudes()"],
    ["Correspondances", "", "33 notions-pivots, rangées sous les 6 domaines MSC, chacune reliée à d’autres notions du sommaire — avec, pour chaque lien, la raison mathématique précise. Un pont assumé entre disciplines plutôt qu’entre niveaux.", "setApp('mathsite'); loadCorrespondanceTable()"],
    ["Exercices", "", "Les « Exercices fondamentaux », désormais rattachés à trois familles de fiches à la fois : celles d’Études, les chapitres de Spécialisation, et les notions complémentaires de l’ancienne Encyclopédie. Des onglets par niveau s’affichent dynamiquement, sans total codé en dur.", "setApp('mathsite'); loadExosFondamentauxHome()"],
    ["Banque d’images", "en construction", "Une rubrique dédiée aux schémas et illustrations du site — au singulier désormais dans le menu (contre « Banques d’images » avant). Le contenu affiché reste, au moment de la rédaction de ce carnet, un simple message « section en construction », même si des classes CSS de grille (<code>.bank-tiles</code>, <code>.bank-grid</code>) sont déjà prêtes en coulisse.", "setApp('mathsite'); loadBanqueImages()"],
    ["Spécialisation", "lien stylé à part", "Le même savoir relu autrement : les formules et théorèmes regroupés par grand chapitre transversal, plutôt que par niveau scolaire. Le clic atterrit directement sur « Vue d’ensemble » — l’ancien écran d’introduction (« 1150 Concepts ») a disparu du parcours. Seule entrée du menu avec sa propre classe CSS (<code>nav-link-formules</code>).", "loadSpecialisation()"]
  ];

  const STATS = [
    ["~2200", "notions, du Collège aux Grandes Écoles"],
    ["5000+", "formules &amp; théorèmes"],
    ["6", "domaines de la classification MSC"],
    ["33", "notions-pivots dans Correspondances"],
    ["7", "entrées dans le menu horizontal"]
  ];

  function pageHtml() {
    return `
      <div class="pres-page">
        <button class="back-btn" onclick="loadHome()">&larr; Retour</button>
        <h1>Alpha Omega Math, une carte des mathématiques classée comme une vraie discipline</h1>
        <p class="pres-lead">Ce carnet réunit trois choses : une présentation du site pour quelqu’un qui le découvre, une explication précise de ce qui distingue — et relie — Études et Spécialisation, les deux grandes lectures du même contenu, et un script prêt à tourner pour un tutoriel vidéo, filmé du point de vue d’un élève de Seconde.</p>

        <div class="pres-callout">
          <span class="pres-callout-label">🔄 Mise à jour</span>
          <p>Le menu a été réorganisé — Encyclopédie, 2200 Notions et l’ancien écran d’accueil de 5000 Formules ont laissé place à deux rubriques : <strong>Études</strong> (les mêmes fiches, désormais réunies en une seule bibliothèque par niveau) et <strong>Spécialisation</strong> (les mêmes formules, atterrissant directement sur « Vue d’ensemble »). Le menu horizontal compte maintenant 7 entrées au lieu de 8. Le menu de gauche est devenu rétractable, et un moteur d’historique de navigation (<code>nav-history.js</code>) a fait son apparition en coulisse.</p>
        </div>

        <section class="pres-section">
          <div class="pres-kicker">00 — Aperçu</div>
          <h2>Un site qui n’a toujours pas besoin d’internet</h2>
          <p>Le principe fondateur n’a pas bougé : tout le contenu arrive par des balises <code>&lt;script&gt;</code>, jamais par <code>fetch()</code>, précisément parce qu’un <code>fetch()</code> local est bloqué par Chrome en <code>file://</code>. On double-clique sur <code>index.html</code>, sans serveur, sans wifi, et tout est déjà là.</p>
          <p>Le site s’appelle aujourd’hui <strong>Alpha Omega Math</strong> à l’écran (le nom ΩPrépa reste utilisé dans certains textes internes, comme le paragraphe d’ouverture de la page « Présentation du site »), avec pour signature « Find a way or find excuses ». Quelques chiffres :</p>
          <div class="pres-stats">
            ${STATS.map(s => `<div class="notion-card pres-stat"><span class="pres-stat-num">${s[0]}</span><span class="pres-stat-label">${s[1]}</span></div>`).join("")}
          </div>
          <p>Comme le dit le site lui-même sur sa page « Présentation » : « L’objectif n’est pas de remplacer un cours, mais de donner un point de repère fiable à tout moment de la scolarité. » Chaque notion reste documentée par une fiche complète — définition, formules, explications, exemples, applications, vidéos — et, quand la fiche le prévoit, une section « Définition axiomatique » (cadre, axiomes, conclusion, sources) s’affiche désormais réellement sous la définition : ce n’est plus une simple préparation CSS, le rendu est en place dans <code>app.js</code>, même si toutes les fiches n’ont pas encore ce champ renseigné.</p>
        </section>

        <section class="pres-section">
          <div class="pres-kicker">01 — Navigation</div>
          <h2>Le menu horizontal, poste par poste</h2>
          <p>Sept entrées aujourd’hui, contre huit dans la version précédente du site : Encyclopédie, 2200 Notions et l’ancien écran d’entrée de 5000 Formules se sont fondus en deux rubriques, Études et Spécialisation.</p>
          <div class="pres-menu-grid">
            ${MENU.map(m => `
              <div class="notion-card pres-menu-card">
                <div class="pres-menu-head"><h3>${m[0]}</h3>${m[1] ? `<span class="pres-badge">${m[1]}</span>` : ""}</div>
                <p>${m[2]}</p>
                <code class="pres-call">${m[3]}</code>
              </div>`).join("")}
          </div>
        </section>

        <section class="pres-section">
          <div class="pres-kicker">02 — Deux lectures, une seule matière</div>
          <h2>Études, Spécialisation : quelle différence ?</h2>
          <p>C’est la question qu’on pose le plus souvent en découvrant le site. La réponse tient en une phrase, écrite noir sur blanc dans la page « Présentation du site » elle-même (Accueil → « Présentation du site ») :</p>
          <blockquote class="pres-quote">« Ces deux rubriques ne racontent pas la même histoire, mais elles reposent sur les mêmes fiches. Études est la bibliothèque Encyclopédie : toutes les fiches, rangées par niveau, classe et chapitre, pour retrouver une notion précise à son niveau exact. Spécialisation est une bibliothèque indépendante : les mêmes résultats, regroupés par grand thème transversal plutôt que par niveau, pour ceux qui préfèrent une lecture par fil conducteur plutôt que par programme. »</blockquote>
        </section>
      </div>`;
  }

  window.loadPresentation = function () {
    const c = document.getElementById("content");
    if (!c) return;
    c.innerHTML = pageHtml();
    c.scrollTop = 0;
    window.scrollTo(0, 0);
    collapseSidebar();
  };
})();
