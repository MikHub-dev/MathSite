// Version : 1.2
// =====================================================================
// "1150 CONCEPTS" (ex "1000 Formules") — second pilier du site, cohabite avec l'Encyclopédie
// (mathsite / app.js) sans jamais toucher à ses données ni à son code.
// Réutilise volontairement les mêmes conventions (fonctions globales
// appelées depuis des onclick, escapeHtml(), classes .section/.notion-card)
// pour rester visuellement et techniquement cohérent avec l'existant.
// =====================================================================

let currentApp = "mathsite";

function setApp(app) {
  currentApp = app;
  document.querySelectorAll(".app-switch-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.app === app);
  });
  const titleEl = document.getElementById("sidebar-title");
  if (app === "formules") {
    renderFormulesSidebar();
  } else {
    if (titleEl) titleEl.textContent = "Niveaux";
    if (typeof renderSidebar === "function") renderSidebar();
  }
}

function homeClick() {
  if (currentApp === "formules") {
    loadFormulesHome();
  } else if (typeof loadHome === "function") {
    loadHome();
  }
}

// --- Menu latéral : liste des 11 chapitres ---
function renderFormulesSidebar() {
  const sidebar = document.getElementById("sidebar-content");
  const titleEl = document.getElementById("sidebar-title");
  if (titleEl) titleEl.textContent = "1150 Concepts";
  if (!sidebar) return;
  const chapters = window.FORMULES_CHAPTERS || [];
  sidebar.innerHTML = `
    <ul class="formules-toc" id="formules-toc">
      ${chapters.map(ch => `
        <li data-chid="${ch.id}" onclick="loadFormulesChapter('${ch.id}')">
          <span class="formules-toc-num">${escapeHtml(ch.num)}</span> ${escapeHtml(ch.title)}
        </li>
      `).join("")}
    </ul>
  `;
}

function highlightFormulesSidebar(id) {
  document.querySelectorAll("#formules-toc li").forEach(li => {
    li.classList.toggle("active", li.dataset.chid === id);
  });
}

function formulesSlugFor(label) {
  const ch = (window.FORMULES_CHAPTERS || []).find(c => c.title === label);
  return ch ? ch.id : "overview";
}

// --- Accueil "1150 Concepts" : grille des 11 chapitres ---
function loadFormulesHome() {
  setApp("formules");
  const c = document.getElementById("content");
  if (!c) return;
  const chapters = window.FORMULES_CHAPTERS || [];
  c.innerHTML = `
    <h1>1150 Concepts</h1>
    <p class="subtitle">Une carte des mathématiques, du collège aux grandes écoles — onze chapitres, une seule progression. Contenu indépendant de l'Encyclopédie : mêmes vitrines, deux bibliothèques distinctes.</p>
    <div id="formules-home-grid">
      ${chapters.map(ch => `
        <div class="notion-card" onclick="loadFormulesChapter('${ch.id}')">
          <span class="card-niveau-tag tag-formules">Chapitre ${escapeHtml(ch.num)}</span>
          <h3>${escapeHtml(ch.title)}</h3>
          <p>${escapeHtml(ch.subtitle)}</p>
        </div>
      `).join("")}
    </div>
  `;
  setActiveNav("formules");
  highlightFormulesSidebar(null);
  window.scrollTo(0, 0);
}

// --- Affichage d'un chapitre ---
function loadFormulesChapter(id) {
  setApp("formules");
  const ch = (window.FORMULES_CHAPTERS || []).find(c => c.id === id);
  const c = document.getElementById("content");
  if (!ch || !c) return;
  c.innerHTML = `
    <button class="back-btn" onclick="loadFormulesHome()">&larr; Retour</button>
    <span class="card-niveau-tag tag-formules">Chapitre ${escapeHtml(ch.num)}</span>
    <h1>${escapeHtml(ch.title)}</h1>
    <p class="subtitle">${escapeHtml(ch.subtitle)}</p>
    ${renderFormulesBlocks(ch.blocks)}
    ${renderVideoSection((window.CHAPTER_VIDEOS || {})[id])}
  `;
  setActiveNav("formules");
  highlightFormulesSidebar(id);
  window.scrollTo(0, 0);
}

// --- Bloc "Vidéos" réutilisable (chapitres 1150 Concepts ET fiches Encyclopédie) ---
function renderVideoSection(videos) {
  if (!videos || (!videos.en && !videos.fr)) return "";
  const item = (v, lang, langLabel) => {
    if (!v) return "";
    return `
      <a class="video-link" href="${escapeAttr(v.url)}" target="_blank" rel="noopener">
        <span class="video-lang video-lang-${lang}">${langLabel}</span>
        <span class="video-body">
          <span class="video-title">${escapeHtml(v.title)}</span>
          <span class="video-channel">${escapeHtml(v.channel || "")}${v.note ? " · " + escapeHtml(v.note) : ""}</span>
        </span>
      </a>`;
  };
  return `
    <div class="section">
      <h3>Vidéos</h3>
      <p class="video-caption">La vidéo la plus vue en anglais, et en français, sur cette notion.</p>
      <div class="video-links">
        ${item(videos.en, "en", "EN")}
        ${item(videos.fr, "fr", "FR")}
      </div>
    </div>`;
}

// --- Regroupe les blocs en .section (un "h" ouvre une nouvelle section) ---
function renderFormulesBlocks(blocks) {
  let html = "";
  let section = null;
  function flush() {
    if (section) {
      html += `<div class="section"><h3>${escapeHtml(section.title)}</h3>${section.html}</div>`;
      section = null;
    }
  }
  blocks.forEach(b => {
    if (b[0] === "h") {
      flush();
      section = { title: b[1], html: "" };
      return;
    }
    const piece = renderFormulesBlock(b);
    if (section) section.html += piece; else html += piece;
  });
  flush();
  return html;
}

function renderFormulesBlock(b) {
  const kind = b[0];
  switch (kind) {
    case "p":
      return `<p>${escapeHtml(b[1])}</p>`;

    case "ul":
      return `<ul class="formules-list">${b[1].map(it => `<li>${escapeHtml(it)}</li>`).join("")}</ul>`;

    case "f":
      return `<pre>${escapeHtml(b[1])}</pre>`;

    case "note":
      return `<div class="formules-note">${escapeHtml(b[1])}</div>`;

    case "imgs":
      return `<div class="formules-gallery formules-gallery-${Math.min(b[1].length, 3)}">
        ${b[1].map(([fichier, cap]) => {
          const src = autresImage(fichier); // dossier « autres-images/ » (voir app.js)
          return `
          <figure class="formules-fig" data-src="${escapeAttr(src)}" data-cap="${escapeAttr(cap)}">
            <img src="${escapeAttr(src)}" alt="${escapeAttr(cap)}" loading="lazy" onerror="this.parentElement.style.display='none'" />
            <figcaption>${escapeHtml(cap)}</figcaption>
          </figure>
        `;
        }).join("")}
      </div>`;

    case "table":
      return renderFormulesTable(b[1], b[2], false);

    case "table_big":
      return renderFormulesTable(b[1], b[2], true);

    case "schema": {
      const [title, lines] = [b[1], b[2]];
      return `<div class="formules-schema">
        <h4>${escapeHtml(title)}</h4>
        ${lines.map(l => `<div class="formules-chain">${escapeHtml(l)}</div>`).join("")}
      </div>`;
    }

    case "cols3":
      return `<div class="hub-links formules-cols3">
        ${b[1].map(([title, items]) => `
          <div class="hub-link">
            <div class="hub-link-top"><strong>${escapeHtml(title)}</strong></div>
            <ul class="formules-list formules-list-tight">${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>`;

    case "links":
      return `<div class="section"><h3>Guided Links</h3>
        <ul class="correspondances-list">
          ${b[1].map(label => `
            <li onclick="loadFormulesChapter('${formulesSlugFor(label)}')">
              <span class="cor-title">${escapeHtml(label)}</span>
            </li>
          `).join("")}
        </ul>
      </div>`;

    case "formula_levels":
      return renderFormulesLevels(b[1]);

    default:
      return "";
  }
}

function renderFormulesTable(headers, rows, big) {
  return `<div class="formules-table-wrap${big ? " formules-table-wrap-big" : ""}">
    <table class="formules-table">
      <thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map(r => `<tr>${r.map((c, i) => `<td${i === 0 ? "" : " class=\"c\""}>${escapeHtml(c)}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  </div>`;
}

// --- Page "Introduction" : les 1150 formules, 4 onglets de niveau ---
function renderFormulesLevels(levels) {
  const tabs = levels.map((lvl, i) => {
    const [key, label, groups] = lvl;
    const total = groups.reduce((s, g) => s + g.items.length, 0);
    return `<button class="level-tab${i === 0 ? " active" : ""}" data-level="${key}" onclick="showFormulesLevel(this,'${key}')">
      ${escapeHtml(label)} <span class="level-count">${total}</span>
    </button>`;
  }).join("");

  const panels = levels.map((lvl, i) => {
    const [key, , groups] = lvl;
    let inner = "";
    const hasYear = groups.some(g => g.year);
    if (hasYear) {
      let curYear = null, buf = "";
      groups.forEach(g => {
        if (g.year !== curYear) {
          if (curYear !== null) inner += `<div class="year-block">${buf}</div>`;
          buf = `<h4 class="year-title">${escapeHtml(g.year_title || "")}</h4>`;
          curYear = g.year;
        }
        buf += renderFormulesDomainGroup(g);
      });
      if (curYear !== null) inner += `<div class="year-block">${buf}</div>`;
    } else {
      groups.forEach(g => { inner += renderFormulesDomainGroup(g); });
    }
    return `<div class="level-panel${i === 0 ? " active" : ""}" data-level="${key}">${inner}</div>`;
  }).join("");

  return `<div class="sublevels">
    <div class="levels-tabs">${tabs}</div>
    <div class="levels-panels">${panels}</div>
  </div>`;
}

function renderFormulesDomainGroup(g) {
  const items = g.items.map(([n, t]) => `<li><span class="fnum">${n}.</span> ${escapeHtml(t)}</li>`).join("");
  return `<div class="domain-group"><h5>${escapeHtml(g.domain)}</h5><ul class="formula-index-list">${items}</ul></div>`;
}

function showFormulesLevel(btn, key) {
  const root = btn.closest(".sublevels");
  if (!root) return;
  root.querySelectorAll(".level-tab").forEach(t => t.classList.toggle("active", t === btn));
  root.querySelectorAll(".level-panel").forEach(p => p.classList.toggle("active", p.dataset.level === key));
}

// --- Lightbox images ---
function openFormulesLightbox(src, cap) {
  const lb = document.getElementById("formules-lightbox");
  const img = document.getElementById("formules-lightbox-img");
  const capEl = document.getElementById("formules-lightbox-cap");
  if (!lb || !img) return;
  img.src = src;
  img.alt = cap || "";
  if (capEl) capEl.textContent = cap || "";
  lb.classList.add("open");
}
function closeFormulesLightbox() {
  const lb = document.getElementById("formules-lightbox");
  if (lb) lb.classList.remove("open");
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeFormulesLightbox(); });
document.addEventListener("click", e => {
  const fig = e.target.closest(".formules-fig");
  if (fig) openFormulesLightbox(fig.dataset.src, fig.dataset.cap);
});

// --- Accroche le bloc "Vidéos" sur les fiches de l'Encyclopédie (openNotion),
//     sans modifier app.js : on enveloppe la fonction d'origine.
(function attachNotionVideos(){
  if (typeof window.openNotion !== "function") return;
  const _origOpenNotion = window.openNotion;
  window.openNotion = function(id){
    _origOpenNotion(id);
    const videos = (window.NOTION_VIDEOS || {})[id];
    if (!videos) return;
    const c = document.getElementById("content");
    if (c) c.insertAdjacentHTML("beforeend", renderVideoSection(videos));
  };
})();

// --- Petit utilitaire : échappement pour attributs HTML (data-*, src, alt) ---
function escapeAttr(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}
