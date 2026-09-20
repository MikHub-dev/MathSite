// Version : 1.2
// =====================================================================
// EXERCICES FONDAMENTAUX — 5 exercices essentiels par fiche, avec correction
// dépliable : fiches de la bibliothèque Études (sommaire Niveau → Classe →
// Chapitre), chapitres de la bibliothèque Spécialisation, et notions
// complémentaires (window.NOTIONS). Page dédiée accessible depuis le menu
// horizontal (« Exercices »), + bloc inséré en bas de chaque fiche (comme pour
// les Vidéos), sans modifier app.js.
//
// Données (exercices-data.js) :
//   window.FICHE_EXERCICES   { "<branche>:<id>": [ {enonce, correction} ×5 ] }  → fiches d'Études
//   window.CHAPTER_EXERCICES { "<id du chapitre>": [ ... ] }                      → Spécialisation
//   window.NOTION_EXERCICES  { "<id de la notion>": [ ... ] }                     → notions complémentaires
// La page d'index est calculée à l'ouverture : elle liste toutes les fiches qui ont
// des exercices, sans aucun chiffre écrit en dur.
// =====================================================================

// --- Rendu d'un bloc de 5 exercices (réutilisé sur la page dédiée ET sur chaque fiche) ---
function renderExosFondamentauxBlock(exos, opts) {
  opts = opts || {};
  if (!exos || exos.length === 0) return "";
  const anchorId = opts.anchorId || "exos-fondamentaux-section";
  return `
    <div class="section" id="${anchorId}">
      <h3>Exercices fondamentaux</h3>
      <p class="exof-caption">5 exercices essentiels pour vérifier ta maîtrise de cette notion, du plus simple au plus exigeant.</p>
      <div class="exof-list">
        ${exos.map((ex, i) => `
          <div class="exof-item">
            <div class="exof-enonce"><span class="exof-num">${i + 1}</span><span>${escapeHtml(ex.enonce)}</span></div>
            <button class="exof-toggle" type="button" onclick="toggleExofCorrection(this)">Voir la correction</button>
            <div class="exof-correction">${escapeHtml(ex.correction)}</div>
          </div>
        `).join("")}
      </div>
    </div>`;
}

function toggleExofCorrection(btn) {
  const box = btn.nextElementSibling;
  const open = box.classList.toggle("exof-open");
  btn.textContent = open ? "Masquer la correction" : "Voir la correction";
}

// --- Accroche sur openNotion (notions complémentaires) et sur les chapitres de Spécialisation ---
(function attachNotionExos() {
  if (typeof window.openNotion !== "function") return;
  const _prevOpenNotion = window.openNotion;
  window.openNotion = function (id) {
    _prevOpenNotion(id);
    const exos = (window.NOTION_EXERCICES || {})[id];
    if (!exos) return;
    const c = document.getElementById("content");
    if (c) c.insertAdjacentHTML("beforeend", renderExosFondamentauxBlock(exos));
  };
})();

(function attachChapterExos() {
  if (typeof window.loadFormulesChapter !== "function") return;
  const _prevLoadFormulesChapter = window.loadFormulesChapter;
  window.loadFormulesChapter = function (id) {
    _prevLoadFormulesChapter(id);
    const exos = (window.CHAPTER_EXERCICES || {})[id];
    if (!exos) return;
    const c = document.getElementById("content");
    if (c) c.insertAdjacentHTML("beforeend", renderExosFondamentauxBlock(exos));
  };
})();

// --- Accroche sur openMenuConcept (fiches détaillées "1150 Concepts" / POC,
// window.MATHSITE_FICHES). Réutilise la même clé "<branche>:<id>" que
// mathsiteFicheKey() dans app.js (ex. "ecole:1" pour Priorités opératoires),
// pour ne cibler que les fiches réellement équipées dans FICHE_EXERCICES ---
(function attachMathsiteFicheExos() {
  if (typeof window.openMenuConcept !== "function") return;
  const _prevOpenMenuConcept = window.openMenuConcept;
  window.openMenuConcept = function (niveau, gradeKey, subjectKey, conceptId, title) {
    _prevOpenMenuConcept(niveau, gradeKey, subjectKey, conceptId, title);
    const key = (typeof mathsiteFicheKey === "function")
      ? mathsiteFicheKey(niveau, conceptId)
      : (((niveau === "college" || niveau === "lycee") ? "ecole" : "sup") + ":" + conceptId);
    const exos = (window.FICHE_EXERCICES || {})[key];
    if (!exos) return;
    const c = document.getElementById("content");
    if (c) c.insertAdjacentHTML("beforeend", renderExosFondamentauxBlock(exos));
  };
})();

// --- Aller directement aux exercices d'une fiche depuis l'index ---
function exofScrollToSection() {
  setTimeout(() => {
    const el = document.getElementById("exos-fondamentaux-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}

// Chapitre de Spécialisation (type "chapter") ou notion complémentaire (type "notion")
function goToExosFiche(type, id) {
  if (type === "chapter") {
    loadFormulesChapter(id);
  } else {
    setApp("mathsite");
    openNotion(typeof id === "string" && /^\d+$/.test(id) ? parseInt(id, 10) : id);
  }
  exofScrollToSection();
}

// Fiche de la bibliothèque Études : même chemin que la recherche (le sommaire de gauche se
// déplie sur la fiche, puis la fiche s'ouvre), et l'écran se cale sur ses exercices.
function goToExosFicheEtudes(niveau, gradeKey, subjectKey, id, title) {
  setApp("mathsite");
  try {
    if (typeof revealInSidebar === "function") revealInSidebar(niveau, gradeKey, subjectKey, id);
  } catch (err) {
    console.warn("Exercices : sommaire non déplié", err);
  }
  openMenuConcept(niveau, gradeKey, subjectKey, id, title);
  exofScrollToSection();
}

// --- Petits utilitaires de l'index ---
const exofFr = n => Number(n).toLocaleString("fr-FR");
const exofAccord = (n, un, plu) => exofFr(n) + " " + (n > 1 ? plu : un);
const exofNbExos = list => (Array.isArray(list) ? list.length : 0);
// Met un total en valeur (blanc gras brillant, style injecté par exofInjecteStyle)
const exofHl = s => `<strong class="exof-hl">${escapeHtml(s)}</strong>`;

// Style propre à l'index (injecté une fois, styles.css n'est pas modifié)
function exofInjecteStyle() {
  if (document.getElementById("exof-index-style")) return;
  const st = document.createElement("style");
  st.id = "exof-index-style";
  st.textContent = `
    .exof-yt-meta { color: #7a7f8c; text-transform: none; letter-spacing: 0; font-family: inherit; margin-left: 8px; }
    #exof-index .sublevels { margin-top: 6px; }
    #exof-index .year-title { text-transform: none; letter-spacing: .04em; }
    #content .exof-progress strong.exof-hl { color: #ffffff; font-weight: 800; text-shadow: 0 0 8px rgba(255, 255, 255, .35); }
  `;
  document.head.appendChild(st);
}

// --- Collecte : toutes les fiches d'Études qui ont des exercices, par niveau → classe → chapitre ---
function exofCollecteEtudes() {
  const FE = window.FICHE_EXERCICES || {};
  const res = { niveaux: [], fiches: 0, exos: 0, notions: 0 };
  if (typeof MATHSITE_NIVEAUX === "undefined") return res;

  MATHSITE_NIVEAUX.forEach(nd => {
    const niv = { key: nd.key, label: NIVEAU_LABELS[nd.key] || nd.key, classes: [], fiches: 0, exos: 0 };
    nd.grades.forEach(gradeKey => {
      const subjects = getGradeSubjects(nd, gradeKey);
      const cl = { key: gradeKey, label: prettifyGrade(gradeKey), chapitres: [], fiches: 0, exos: 0 };
      Object.keys(subjects).forEach(subjectKey => {
        const items = [];
        (subjects[subjectKey] || []).forEach(it => {
          res.notions++;
          const exos = FE[mathsiteFicheKey(nd.key, it.id)];
          if (exofNbExos(exos) > 0) items.push({ id: it.id, title: it.title, n: exos.length });
        });
        if (!items.length) return;
        cl.chapitres.push({ key: subjectKey, label: prettifySubject(subjectKey), items });
        cl.fiches += items.length;
        cl.exos += items.reduce((s, x) => s + x.n, 0);
      });
      if (!cl.fiches) return;
      niv.classes.push(cl);
      niv.fiches += cl.fiches;
      niv.exos += cl.exos;
    });
    res.niveaux.push(niv);
    res.fiches += niv.fiches;
    res.exos += niv.exos;
  });
  return res;
}

// --- Rendu des panneaux ---
function exofPanneauEtudes(niv, actif) {
  const blocs = niv.classes.map(cl => `
    <div class="year-block">
      <h4 class="year-title">${escapeHtml(cl.label)}<span class="exof-yt-meta">${escapeHtml(exofAccord(cl.fiches, "fiche", "fiches"))} · ${escapeHtml(exofAccord(cl.exos, "exercice", "exercices"))}</span></h4>
      ${cl.chapitres.map(ch => `
        <div class="exof-cat">
          <h4 class="exof-cat-title">${escapeHtml(ch.label)} <span class="sidebar-count">${ch.items.length}</span></h4>
          <div class="exof-chip-list">
            ${ch.items.map(it => `<span class="exof-chip" data-niveau="${escapeAttr(niv.key)}" data-grade="${escapeAttr(cl.key)}" data-subject="${escapeAttr(ch.key)}" data-id="${escapeAttr(it.id)}" data-title="${escapeAttr(it.title)}">${escapeHtml(it.title)}</span>`).join("")}
          </div>
        </div>`).join("")}
    </div>`).join("");
  return `<div class="level-panel${actif ? " active" : ""}" data-level="${escapeAttr(niv.key)}">${blocs || `<p class="empty">Aucune fiche de ce niveau n'a encore ses exercices.</p>`}</div>`;
}

function exofPanneauSpecialisation(chapitres, actif) {
  return `<div class="level-panel${actif ? " active" : ""}" data-level="specialisation">
    <div class="year-block">
      <h4 class="year-title">Chapitres transversaux<span class="exof-yt-meta">${escapeHtml(exofAccord(chapitres.length, "chapitre", "chapitres"))}</span></h4>
      <div class="exof-chip-list">
        ${chapitres.map(ch => `<span class="exof-chip" onclick="goToExosFiche('chapter','${ch.id}')">Ch. ${escapeHtml(ch.num)} — ${escapeHtml(ch.title)}</span>`).join("")}
      </div>
    </div>
  </div>`;
}

function exofPanneauComplementaires(notionsEquipees, actif) {
  const blocs = NIVEAU_ORDER.map(niveau => {
    const items = notionsEquipees.filter(n => n.niveau === niveau);
    if (!items.length) return "";
    const categories = [...new Set(items.map(n => n.category))];
    return `<div class="year-block">
      <h4 class="year-title">${escapeHtml(NIVEAU_LABELS[niveau] || niveau)}<span class="exof-yt-meta">${escapeHtml(exofAccord(items.length, "notion", "notions"))}</span></h4>
      ${categories.map(cat => {
        const catItems = items.filter(n => n.category === cat);
        return `<div class="exof-cat">
          <h4 class="exof-cat-title">${escapeHtml(cat)} <span class="sidebar-count">${catItems.length}</span></h4>
          <div class="exof-chip-list">
            ${catItems.map(n => `<span class="exof-chip" onclick="goToExosFiche('notion','${n.id}')">${escapeHtml(n.title)}</span>`).join("")}
          </div>
        </div>`;
      }).join("")}
    </div>`;
  }).join("");
  return `<div class="level-panel${actif ? " active" : ""}" data-level="complementaires">${blocs}</div>`;
}

// --- Page d'index « Exercices fondamentaux » ---
function loadExosFondamentauxHome() {
  const c = document.getElementById("content");
  if (!c) return;
  exofInjecteStyle();
  setActiveNav("exos-fondamentaux");

  const E = exofCollecteEtudes();
  const chapitres = Object.keys(window.CHAPTER_EXERCICES || {})
    .filter(id => exofNbExos(window.CHAPTER_EXERCICES[id]) > 0)
    .map(id => (window.FORMULES_CHAPTERS || []).find(ch => ch.id === id))
    .filter(Boolean);
  const nExosChap = chapitres.reduce((s, ch) => s + exofNbExos(window.CHAPTER_EXERCICES[ch.id]), 0);
  const notionsEquipees = (typeof notions !== "undefined" ? notions : [])
    .filter(n => exofNbExos((window.NOTION_EXERCICES || {})[n.id]) > 0);
  const nExosNotions = notionsEquipees.reduce((s, n) => s + window.NOTION_EXERCICES[n.id].length, 0);

  const totalFiches = E.fiches + chapitres.length + notionsEquipees.length;
  const totalExos = E.exos + nExosChap + nExosNotions;

  // Décompte, puis état d'avancement de la bibliothèque Études
  const parties = [exofAccord(E.fiches, "fiche", "fiches") + " dans Études"];
  if (chapitres.length) parties.push(exofAccord(chapitres.length, "chapitre", "chapitres") + " dans Spécialisation");
  if (notionsEquipees.length) parties.push(exofAccord(notionsEquipees.length, "notion complémentaire", "notions complémentaires"));
  const avancement = E.fiches >= E.notions
    ? "Toutes les fiches d'Études sont équipées."
    : "Il reste " + exofAccord(E.notions - E.fiches, "fiche", "fiches") + " d'Études à équiper.";

  // Onglets : les 4 niveaux d'Études, puis Spécialisation et notions complémentaires s'il y en a
  const onglets = E.niveaux.map(n => ({ key: n.key, label: n.label, count: n.fiches, html: a => exofPanneauEtudes(n, a) }));
  if (chapitres.length) onglets.push({ key: "specialisation", label: "Spécialisation", count: chapitres.length, html: a => exofPanneauSpecialisation(chapitres, a) });
  if (notionsEquipees.length) onglets.push({ key: "complementaires", label: "Notions complémentaires", count: notionsEquipees.length, html: a => exofPanneauComplementaires(notionsEquipees, a) });
  const premier = Math.max(0, onglets.findIndex(o => o.count > 0));

  c.innerHTML = `
    <h1>Exercices fondamentaux</h1>
    <p class="subtitle">Cinq exercices essentiels pour chaque fiche des bibliothèques Études et Spécialisation, du plus simple au plus exigeant, pour vérifier ta maîtrise avant de passer à la suite. Choisis un niveau, puis clique sur une fiche pour l'ouvrir directement sur son évaluation.</p>
    <p class="exof-progress">${exofHl(exofAccord(totalFiches, "fiche", "fiches"))}${escapeHtml((totalFiches > 1 ? " équipées" : " équipée") + " : " + parties.join(", ") + " — soit ")}${exofHl(exofAccord(totalExos, "exercice corrigé", "exercices corrigés"))}${escapeHtml(". " + avancement)}</p>
    <div id="exof-index">
      ${totalFiches === 0 ? `<p class="empty">Aucune fiche n'a encore ses exercices.</p>` : `
      <div class="sublevels">
        <div class="levels-tabs">
          ${onglets.map((o, i) => `<button class="level-tab${i === premier ? " active" : ""}" data-level="${escapeAttr(o.key)}" onclick="showFormulesLevel(this,'${o.key}')">${escapeHtml(o.label)} <span class="level-count">${exofFr(o.count)}</span></button>`).join("")}
        </div>
        <div class="levels-panels">
          ${onglets.map((o, i) => o.html(i === premier)).join("")}
        </div>
      </div>`}
    </div>
  `;

  // Un seul écouteur pour toutes les fiches d'Études (le sommaire se déplie sur la fiche choisie)
  const index = document.getElementById("exof-index");
  index.addEventListener("click", e => {
    const chip = e.target.closest(".exof-chip[data-niveau]");
    if (!chip) return;
    const id = /^\d+$/.test(chip.dataset.id) ? parseInt(chip.dataset.id, 10) : chip.dataset.id;
    goToExosFicheEtudes(chip.dataset.niveau, chip.dataset.grade, chip.dataset.subject, id, chip.dataset.title);
  });
  window.scrollTo(0, 0);
}
