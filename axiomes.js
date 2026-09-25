// =====================================================================
// PAGE « AXIOMES » — rubrique du menu horizontal, placée avant « Spécialisation ».
// Version 1.4
//
// - Appelée depuis le menu : setApp('mathsite'); loadAxiomesPage()
// - Page liste (tableau Domaine / Système d’axiomes / Exemple de structures) : openAxiomesList()
// - Page d’un système (clic sur le système) : openAxiomePage(slug)
// - Données : axiomes-data.js (AXIOMES_INTRO, AXIOMES_INDEX, AXIOMES_PAGES). Styles : axiomes.css.
// - Ne modifie ni app.js ni styles.css. Adresses : #axiomes  et  #axiomes/<slug>.
// - Si l’entrée « Axiomes » n’existe pas encore dans le menu horizontal, elle est insérée
//   automatiquement juste avant « Spécialisation » (voir aussi la ligne à mettre dans index.html).
// À charger APRÈS app.js (et après le script du menu/retractation du sommaire de gauche s’il y en a un).
// =====================================================================
(function () {
  "use strict";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // --- Historique de navigation du site (si présent) : on y enregistre l’ouverture de la page ---
  function pushHistory(fn) {
    try {
      if (window.navHistory && typeof window.navHistory.push === "function") window.navHistory.push(fn);
    } catch (e) { /* sans historique, on continue */ }
  }

  function setHash(h) {
    try { history.replaceState(null, "", h); } catch (e) { /* file:// restrictif : sans importance */ }
  }

  function markNav() {
    if (typeof setActiveNav === "function") setActiveNav("axiomes");
    else {
      document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
      const el = document.querySelector('.nav-links a[data-nav="axiomes"]');
      if (el) el.classList.add("active");
    }
  }

  // Réduit le menu vertical de gauche (sans effet s'il est déjà réduit)
  function collapseSidebar() {
    const btn = document.getElementById("sidebar-toggle");
    if (btn) {
      if (btn.getAttribute("aria-expanded") === "true") btn.click();
      return;
    }
    if (typeof window.setSidebarCollapsed === "function") window.setSidebarCollapsed(true);
  }

  function toTop(c) {
    c.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ---------------------------------------------------------------- page liste
  function renderAxiomesTable() {
    const tbody = document.getElementById("axiomes-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    (window.AXIOMES_INDEX || []).forEach(function (entry) {
      const tr = document.createElement("tr");

      const tdDomaine = document.createElement("td");
      tdDomaine.textContent = entry.domaine;

      const tdSysteme = document.createElement("td");
      tdSysteme.textContent = entry.systeme;
      tdSysteme.classList.add("systeme");
      tdSysteme.tabIndex = 0;
      tdSysteme.setAttribute("role", "link");
      tdSysteme.addEventListener("click", function () { openAxiomePage(entry.slug); });
      tdSysteme.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openAxiomePage(entry.slug); }
      });

      const tdExemple = document.createElement("td");
      tdExemple.textContent = entry.exemple;

      tr.appendChild(tdDomaine);
      tr.appendChild(tdSysteme);
      tr.appendChild(tdExemple);
      tbody.appendChild(tr);
    });
  }

  function listHtml() {
    const intro = window.AXIOMES_INTRO;
    const introHtml = intro
      ? `<div class="ax-encart ax-intro-box">
           <h2>${esc(intro.titre)}</h2>
           ${intro.paragraphes.map(p => `<p>${p}</p>`).join("")}
         </div>`
      : "";
    return `
      <div class="axiomes-page">
        <div class="ax-entete">
          <h1>Axiomes — grands systèmes et structures</h1>
          <p class="ax-initiation"><span class="ax-initiation-label">À lire aussi →</span><a class="ax-initiation-lien" href="axiomatisation-initiation.html">Initiation à l’axiomatisation au lycée</a></p>
        </div>
        <p class="axiomes-intro">
          Panorama des principaux systèmes d’axiomes utilisés en logique, ensembles, arithmétique,
          algèbre, géométrie, analyse, probabilités et calcul lambda.
        </p>
        ${introHtml}
        <table class="axiomes-table">
          <thead>
            <tr>
              <th>Domaine</th>
              <th>Système d’axiomes</th>
              <th>Exemple de structures</th>
            </tr>
          </thead>
          <tbody id="axiomes-table-body"></tbody>
        </table>
      </div>`;
  }

  function openAxiomesList(opts) {
    const content = document.getElementById("content");
    if (!content) return;
    if (!(opts && opts.fromHistory)) pushHistory(function () { openAxiomesList({ fromHistory: true }); });
    content.innerHTML = listHtml();
    renderAxiomesTable();
    markNav();
    setHash("#axiomes");
    toTop(content);
  }

  // ---------------------------------------------------------------- page d’un système
  function axiomesBlock(list) {
    return `<div class="ax-axiomes">` + list.map(function (a) {
      return `<div class="ax-axiome">
        <div class="ax-axiome-nom">${a.nom}</div>
        ${a.texte ? `<div class="ax-axiome-texte">${a.texte}</div>` : ""}
        ${a.formule ? `<code class="ax-formule">${esc(a.formule)}</code>` : ""}
      </div>`;
    }).join("") + `</div>`;
  }

  function tableBlock(t) {
    return `<div class="ax-table-wrap"><table class="ax-table">
      <thead><tr>${t.cols.map(c => `<th>${c}</th>`).join("")}</tr></thead>
      <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }

  function sectionHtml(s) {
    return `<section class="ax-section">
      <h2>${s.titre}</h2>
      ${s.intro ? `<p class="ax-p">${s.intro}</p>` : ""}
      ${s.axiomes ? axiomesBlock(s.axiomes) : ""}
      ${s.liste ? `<ul class="ax-liste">${s.liste.map(li => `<li>${li}</li>`).join("")}</ul>` : ""}
      ${s.tableau ? tableBlock(s.tableau) : ""}
      ${s.note ? `<p class="ax-note">${s.note}</p>` : ""}
    </section>`;
  }

  function pageHtml(slug, page) {
    const liens = (page.liens || []).map(function (l) {
      return `<a href="#axiomes/${esc(l[0])}" class="ax-lien" data-slug="${esc(l[0])}">${esc(l[1])}</a>`;
    }).join("");
    return `
      <div class="axiomes-page ax-detail">
        <a href="#axiomes" class="ax-retour" data-back="1">← Tous les axiomes</a>
        <h1>${page.titre}</h1>
        <span class="ax-domaine-tag">${esc(page.domaine)}</span>
        <div class="ax-takeaway"><span class="ax-takeaway-label">À retenir</span><p>${page.resume}</p></div>
        ${page.sections.map(sectionHtml).join("")}
        ${liens ? `<section class="ax-section"><h2>Pour aller plus loin</h2><div class="ax-liens">${liens}</div></section>` : ""}
      </div>`;
  }

  function openAxiomePage(slug, opts) {
    const content = document.getElementById("content");
    const page = window.AXIOMES_PAGES && window.AXIOMES_PAGES[slug];
    if (!content) return;
    if (!page) { openAxiomesList(opts); return; }
    if (!(opts && opts.fromHistory)) pushHistory(function () { openAxiomePage(slug, { fromHistory: true }); });
    content.innerHTML = pageHtml(slug, page);
    markNav();
    setHash("#axiomes/" + slug);
    toTop(content);

    const root = content.querySelector(".ax-detail");
    root.querySelectorAll("a[href^='#axiomes']").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        if (a.dataset.back) openAxiomesList();
        else openAxiomePage(a.dataset.slug);
      });
    });
  }

  // ---------------------------------------------------------------- points d’entrée
  window.renderAxiomesTable = renderAxiomesTable;
  window.openAxiomesList = openAxiomesList;
  window.openAxiomePage = openAxiomePage;
  // Clic sur « Axiomes » dans le menu horizontal : on affiche la page puis on réduit le menu de gauche
  window.loadAxiomesPage = function () { openAxiomesList(); collapseSidebar(); };

  // Adresse directe (#axiomes ou #axiomes/<slug>) : au chargement et si l’adresse change
  function routeFromHash() {
    const hash = location.hash || "";
    if (hash === "#axiomes") { openAxiomesList({ fromHistory: true }); collapseSidebar(); }
    else if (hash.indexOf("#axiomes/") === 0) { openAxiomePage(hash.slice("#axiomes/".length), { fromHistory: true }); collapseSidebar(); }
  }
  window.addEventListener("hashchange", routeFromHash);
  window.addEventListener("load", routeFromHash);

  // ---------------------------------------------------------------- entrée du menu horizontal
  // Filet de sécurité : si index.html ne contient pas encore le lien, on l’insère avant « Spécialisation ».
  function ensureNavLink() {
    const nav = document.querySelector(".nav-links");
    if (!nav || nav.querySelector('a[data-nav="axiomes"]')) return;
    const a = document.createElement("a");
    a.href = "#";
    a.setAttribute("data-nav", "axiomes");
    a.setAttribute("onclick", "setApp('mathsite'); loadAxiomesPage()");
    a.textContent = "Axiomes";
    const spec = Array.from(nav.querySelectorAll("a")).find(function (x) {
      return x.textContent.trim().toLowerCase() === "spécialisation" || x.getAttribute("data-nav") === "specialisation";
    });
    if (spec) nav.insertBefore(a, spec);
    else {
      const search = nav.querySelector(".nav-search");
      if (search) nav.insertBefore(a, search); else nav.appendChild(a);
    }
  }
  ensureNavLink();
})();
