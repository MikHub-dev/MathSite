// Version : 1.0
// =====================================================================
// GRAPHIQUES — remplace la section "Images" (toujours vide dans les
// données actuelles) par une section "Graphiques" : pour chaque formule
// de la fiche, soit une image réellement sous licence libre (Wikimedia
// Commons), soit une carte-lien vers une vraie ressource existante —
// jamais de contenu tiers republié sans licence libre confirmée (même
// principe que la section Vidéos). Non-invasif : ne modifie ni app.js
// ni formules.js, tout est ajouté après coup.
// =====================================================================

function renderGraphiqueResource(r) {
  if (r.type === "image") {
    return `
      <div class="graphique-resource graphique-resource-image">
        <img src="${escapeHtml(r.imgUrl)}" alt="${escapeHtml(r.titre)}" loading="lazy"
             onerror="this.closest('.graphique-resource').style.display='none'">
        <p class="graphique-titre">${escapeHtml(r.titre)}</p>
        <p class="graphique-caption">${escapeHtml(r.caption)}</p>
        <a class="graphique-source" href="${escapeHtml(r.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.source)}</a>
      </div>`;
  }
  return `
    <div class="graphique-resource graphique-resource-link" onclick="window.open('${escapeHtml(r.sourceUrl)}','_blank','noopener')">
      <p class="graphique-titre">🔗 ${escapeHtml(r.titre)}</p>
      <p class="graphique-caption">${escapeHtml(r.caption)}</p>
      <span class="graphique-source">${escapeHtml(r.source)}</span>
    </div>`;
}

// Une entrée peut couvrir une seule formule (clé "formule") ou plusieurs
// formules qui partagent exactement la même ressource (clé "formules",
// tableau) — dans ce cas l'image/le lien n'apparaît qu'une seule fois,
// avec toutes les formules concernées listées au-dessus.
function renderGraphiqueFormules(e) {
  const liste = e.formules || (e.formule ? [e.formule] : []);
  if (liste.length > 1) {
    return `<div class="graphique-formule graphique-formules-multi">${
      liste.map(f => `<span class="graphique-formule-chip">${escapeHtml(f)}</span>`).join("")
    }</div>`;
  }
  return `<div class="graphique-formule">${escapeHtml(liste[0] || "")}</div>`;
}

function renderGraphiquesBlock(entries) {
  if (!entries || entries.length === 0) return "";
  return `
    <div class="section">
      <h3>Graphiques</h3>
      <p class="exof-caption">Une ressource visuelle par formule (ou par groupe de formules illustrées par la même ressource) : image sous licence libre quand elle existe, sinon un lien vers une vraie ressource externe.</p>
      <div class="graphiques-list">
        ${entries.map(e => `
          <div class="graphique-item">
            ${renderGraphiqueFormules(e)}
            <div class="graphique-resources-row">
              ${e.resources.map(renderGraphiqueResource).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>`;
}

(function attachNotionGraphiques() {
  if (typeof window.openNotion !== "function") return;
  const _prevOpenNotion = window.openNotion;
  window.openNotion = function (id) {
    _prevOpenNotion(id);
    const c = document.getElementById("content");
    if (!c) return;

    // Repère l'ancienne section "Images" (héritée de mathsite, vide en
    // pratique : l'image référencée n'existe pas et se masque au chargement,
    // laissant un titre "Images" sans contenu) pour la remplacer en place.
    let oldImagesSection = null;
    c.querySelectorAll(".section > h3").forEach(h3 => {
      if (h3.textContent.trim() === "Images") oldImagesSection = h3.parentElement;
    });

    const entries = (window.NOTION_GRAPHICS || {})[id];
    if (entries) {
      const html = renderGraphiquesBlock(entries);
      if (oldImagesSection) {
        oldImagesSection.insertAdjacentHTML("beforebegin", html);
        oldImagesSection.remove();
      } else {
        c.insertAdjacentHTML("beforeend", html);
      }
    } else if (oldImagesSection) {
      oldImagesSection.remove();
    }
  };
})();

(function attachChapterGraphiques() {
  if (typeof window.loadFormulesChapter !== "function") return;
  const _prevLoadFormulesChapter = window.loadFormulesChapter;
  window.loadFormulesChapter = function (id) {
    _prevLoadFormulesChapter(id);
    const entries = (window.CHAPTER_GRAPHICS || {})[id];
    if (!entries) return;
    const c = document.getElementById("content");
    if (c) c.insertAdjacentHTML("beforeend", renderGraphiquesBlock(entries));
  };
})();
