// Version : 1.4
// =====================================================================
// HISTORIQUE DE NAVIGATION — le bouton « ← Retour » des fiches revient à l'écran PRÉCÉDENT
// (et non plus à l'accueil).
//
// Principe : on ne touche pas aux fonctions d'affichage. À l'instar de msc.js, on « s'accroche »
// sur les fonctions globales load…() / open…() (+ showSearchResults, showMenuBranchPage,
// showSidebarImage) : chaque fois que l'une d'elles change réellement le contenu de #content,
// l'écran quitté est empilé (fonction + arguments + position de défilement). Retour dépile et
// ré-exécute la fonction : les écouteurs (exercices, etc.) sont donc recréés normalement.
//
// Filet de sécurité : si un écran apparaît sans passer par une fonction accrochée (fonction
// locale à un script, par exemple), il est détecté par un MutationObserver ; on garde alors le
// HTML de l'écran au moment où on le quitte, pour pouvoir le remettre à l'identique.
//
// Utilisé par navBack() (app.js). À charger APRÈS msc.js (donc tout à la fin de index.html).
// =====================================================================
(function () {
  "use strict";

  const MAX_HISTORY = 100;
  const EXTRA_FUNCTIONS = ["showSearchResults", "showMenuBranchPage", "showSidebarImage"];
  const EXCLUDED = ["loadNotions"];            // initialisation, pas un écran

  const stack = [];                            // écrans précédents (le plus récent en dernier)
  // Écran de démarrage : app.js a déjà appelé loadHome() avant le chargement de ce fichier.
  let current = { name: "loadHome", args: [] };
  let currentTitle = "";
  let depth = 0;                               // > 0 : appel imbriqué dans une fonction accrochée
  let replaying = false;                       // true pendant un « Retour »
  let lastScroll = { win: 0, box: 0 };

  function content() { return document.getElementById("content"); }

  function titleOf() {
    const c = content();
    const h = c && c.querySelector("h1");
    return h ? h.textContent.trim() : "";
  }

  // Position de défilement : selon les écrans, c'est la fenêtre ou la zone #content qui défile.
  function scrollNow() {
    const c = content();
    return { win: window.scrollY || 0, box: c ? c.scrollTop : 0 };
  }
  window.addEventListener("scroll", function () { lastScroll = scrollNow(); }, { passive: true, capture: true });

  function sameArgs(a, b) {
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
  }

  function push(entry, scroll) {
    if (!entry) return;
    if (entry.snapshot && entry.html == null) return;    // rien pour le remettre : inutile de l'empiler
    stack.push(Object.assign({}, entry, { scroll: scroll }));
    if (stack.length > MAX_HISTORY) stack.shift();
  }

  // --- Détection des changements d'écran non vus par un wrapper -------------------------------
  // Les changements faits pendant un appel accroché sont « consommés » par takeRecords() : le
  // callback ne reçoit que ce qui est arrivé ailleurs.
  const observer = new MutationObserver(function () {
    if (replaying || depth > 0) return;
    const t = titleOf();
    if (t && t === currentTitle) return;                 // même écran mis à jour sur place
    push(current, lastScroll);
    current = { snapshot: true };
    currentTitle = t;
  });

  // --- Accroche d'une fonction globale --------------------------------------------------------
  function wrap(name) {
    const orig = window[name];
    if (typeof orig !== "function" || orig.__navWrapped) return;

    const wrapper = function () {
      const c = content();
      // Appel imbriqué (ex. openMenuConcept -> openMathsiteFiche), rejeu par Retour, ou page
      // sans zone centrale : on exécute simplement la fonction.
      if (replaying || depth > 0 || !c) return orig.apply(this, arguments);

      const args = Array.prototype.slice.call(arguments);
      const leaving = current;
      const scroll = scrollNow();
      if (leaving && leaving.snapshot) leaving.html = c.innerHTML;   // écran sans fonction connue

      observer.takeRecords();
      depth++;
      let result;
      try {
        result = orig.apply(this, arguments);
      } finally {
        depth--;
      }

      if (observer.takeRecords().length) {               // l'écran a réellement changé
        const sameScreen = leaving && leaving.name === name && sameArgs(leaving.args, args);
        // Recherche : chaque frappe relance showSearchResults — un seul écran dans l'historique.
        const typing = name === "showSearchResults" && leaving && leaving.name === "showSearchResults";
        if (!sameScreen && !typing) push(leaving, scroll);
        current = { name: name, args: args };
        currentTitle = titleOf();
      }
      return result;
    };
    wrapper.__navWrapped = true;
    window[name] = wrapper;
  }

  function isNative(fn) {
    return /\[native code\]/.test(Function.prototype.toString.call(fn));
  }

  Object.getOwnPropertyNames(window)
    .filter(function (n) {
      return /^(load|open)[A-Z]/.test(n) && EXCLUDED.indexOf(n) === -1 &&
        typeof window[n] === "function" && !isNative(window[n]);
    })
    .concat(EXTRA_FUNCTIONS)
    .forEach(wrap);

  // --- Retour ---------------------------------------------------------------------------------
  // Renvoie true si un écran précédent a été réaffiché, false s'il n'y en a pas.
  function back() {
    const c = content();
    if (!c) return false;
    while (stack.length) {
      const e = stack.pop();
      const fn = e.name ? window[e.name] : null;
      replaying = true;
      try {
        if (typeof fn === "function") fn.apply(window, e.args);
        else if (e.html != null) c.innerHTML = e.html;
        else continue;
      } catch (err) {
        console.error("nav-history.js : impossible de revenir à l'écran", e.name || "(sans nom)", err);
        continue;
      } finally {
        replaying = false;
        observer.takeRecords();
      }
      current = e.name ? { name: e.name, args: e.args } : { snapshot: true };
      currentTitle = titleOf();
      c.scrollTop = e.scroll.box;
      window.scrollTo(0, e.scroll.win);
      return true;
    }
    return false;
  }

  currentTitle = titleOf();
  const zone = content();
  if (zone) observer.observe(zone, { childList: true });

  window.NavHistory = { back: back, size: function () { return stack.length; } };
})();
