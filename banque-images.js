// Version : 1.0
// =====================================================================
// BANQUES D'IMAGES — vignettes par niveau, puis galerie des SVG du
// dossier svg/<niveau>/.
//
// Remplace la section "en construction" de app.js sans le modifier : ce
// fichier est chargé APRÈS app.js et redéfinit loadBanqueImages().
// Les données viennent de svg-data.js (window.SVG_BANK : par niveau, la liste
// des chemins relatifs à svg/, ex. "lycee/Seconde/seconde_01_repere.svg"),
// généré par generer-svg-data.html (le site tourne en file:// : pas de fetch, pas de
// listage de dossier possible côté navigateur).
//
// Le clic sur une image réutilise la lightbox existante (formules.js) via
// la classe .formules-fig + data-src / data-cap.
// =====================================================================

// Vignettes du menu. Une vignette peut regrouper plusieurs niveaux de svg-data.js :
// « Lycée » réunit Seconde, Première et Terminale (galerie découpée en sections).
// Les clés de "levels" sont celles de window.SVG_BANK.
const BANK_LEVEL_LABELS = { Seconde: "Seconde", Premiere: "Première", Terminale: "Terminale" };
const BANK_TILES = [
  { key: "Lycee", label: "Lycée", levels: ["Seconde", "Premiere", "Terminale"] },
  { key: "L1",    label: "L1",    levels: ["L1"] },
  { key: "L2",    label: "L2",    levels: ["L2"] },
  { key: "L3",    label: "L3",    levels: ["L3"] },
  { key: "M1",    label: "M1",    levels: ["M1"] },
  { key: "M2",    label: "M2",    levels: ["M2"] }
];

function bankLevelFiles(levelKey) {
  const e = window.SVG_BANK && window.SVG_BANK[levelKey];
  return e ? e.files : [];
}
function bankTileCount(tile) {
  return tile.levels.reduce((sum, k) => sum + bankLevelFiles(k).length, 0);
}

// "l2_04_series-fourier.svg" -> "series-fourier"
// "premiere_algebre_01_polynome-du-second-degre.svg" -> "polynome-du-second-degre"
// Règle : on retire l'extension, puis tout ce qui précède le premier "_<numéro>_"
// (niveau, éventuel domaine, numéro). Si le nom ne suit pas ce modèle
// (ex. "seconde_01.svg"), on affiche simplement le nom sans extension.
function bankDisplayName(filename) {
  const base = String(filename).replace(/\.svg$/i, "");
  const m = base.match(/^.*?_\d+_(.+)$/);
  return m ? m[1] : base;
}

// path : chemin relatif à svg/ (peut contenir des sous-dossiers)
function bankSrc(path) {
  return "svg/" + path.split("/").map(encodeURIComponent).join("/");
}

// Image qui ne se charge pas : on affiche le chemin cherché plutôt qu'un cadre vide
function bankImgError(img) {
  const box = img.parentElement;
  const fig = img.closest("figure");
  let path = img.getAttribute("src") || "";
  try { path = decodeURIComponent(path); } catch (_) {}
  if (fig) { fig.classList.remove("formules-fig"); fig.classList.add("bank-fig-missing"); }
  box.textContent = "Image introuvable : " + path;
}

function bankCountLabel(n) {
  return n === 0 ? "aucune image" : n + (n === 1 ? " image" : " images");
}

// --- Page d'entrée : une vignette par niveau ---
function loadBanqueImages() {
  const c = document.getElementById("content");
  if (!c) return;

  const bank = window.SVG_BANK;
  if (!bank) {
    c.innerHTML = `
      <h1>Banque d'images</h1>
      <p class="subtitle">Le fichier <code>svg-data.js</code> est introuvable.</p>
      <p>Ouvrez <code>generer-svg-data.html</code> dans le navigateur pour le générer, placez-le à la
      racine du site, puis vérifiez que <code>index.html</code> le charge avant <code>banque-images.js</code>.</p>
    `;
    setActiveNav("banque-images");
    return;
  }

  const tiles = BANK_TILES.map(t => {
    const n = bankTileCount(t);
    return `
      <button type="button" class="bank-tile${n === 0 ? " bank-tile-empty" : ""}" onclick="loadBanqueNiveau('${t.key}')">
        <span class="bank-tile-label">${escapeHtml(t.label)}</span>
        <span class="bank-tile-count">${bankCountLabel(n)}</span>
      </button>`;
  }).join("");

  c.innerHTML = `
    <h1>Banque d'images</h1>
    <p class="subtitle">Choisissez un niveau pour afficher ses schémas et illustrations.</p>
    <div class="bank-tiles">${tiles}</div>
  `;
  setActiveNav("banque-images");
  window.scrollTo(0, 0);
}

// --- Une image de la galerie : cadre + nom affiché ---
function bankFigureHtml(entry, f) {
  // (ancien format de svg-data.js : { folder, files:[nom] } -> on recolle le dossier)
  const path = entry.folder ? entry.folder + "/" + f : f;
  const src = bankSrc(path);
  const name = bankDisplayName(path.split("/").pop());
  return `
    <figure class="formules-fig bank-fig" data-src="${escapeAttr(src)}" data-cap="${escapeAttr(name)}">
      <div class="bank-fig-img">
        <img src="${escapeAttr(src)}" alt="${escapeAttr(name)}" loading="lazy" onerror="bankImgError(this)" />
      </div>
      <figcaption>${escapeHtml(name)}</figcaption>
    </figure>`;
}

// --- Galerie d'une vignette : chaque image avec son nom.
//     Si la vignette regroupe plusieurs niveaux (Lycée), une section par niveau. ---
function loadBanqueNiveau(key) {
  const c = document.getElementById("content");
  if (!c) return;

  // (accepte aussi une clé de niveau : "Seconde" ouvre la vignette Lycée)
  const tile = BANK_TILES.find(t => t.key === key) || BANK_TILES.find(t => t.levels.includes(key));
  if (!tile || !window.SVG_BANK) { loadBanqueImages(); return; }

  const total = bankTileCount(tile);
  const multi = tile.levels.length > 1;

  const body = total === 0
    ? `<p>Aucune image SVG pour ce niveau. Ajoutez-en dans <code>svg/</code> puis régénérez
       <code>svg-data.js</code> avec <code>generer-svg-data.html</code>.</p>`
    : tile.levels.map(k => {
        const entry = window.SVG_BANK[k] || { files: [] };
        const head = multi
          ? `<h2 class="bank-section-title">${escapeHtml(BANK_LEVEL_LABELS[k] || k)}<span>${bankCountLabel(entry.files.length)}</span></h2>`
          : "";
        const grid = entry.files.length
          ? `<div class="bank-grid">${entry.files.map(f => bankFigureHtml(entry, f)).join("")}</div>`
          : "";
        return head + grid;
      }).join("");

  c.innerHTML = `
    <button class="back-btn" onclick="loadBanqueImages()">&larr; Banque d'images</button>
    <h1>Banque d'images — ${escapeHtml(tile.label)}</h1>
    <p class="subtitle">${bankCountLabel(total)}</p>
    ${body}
  `;
  setActiveNav("banque-images");
  window.scrollTo(0, 0);
}
