// Version : 1.0
function renderSchemaFormules(e) {
  const liste = e.formules || (e.formule ? [e.formule] : []);
  if (liste.length > 1) {
    return `<div class="graphique-formule graphique-formules-multi">${
      liste.map(f => `<span class="graphique-formule-chip">${escapeHtml(f)}</span>`).join("")
    }</div>`;
  }
  return `<div class="graphique-formule">${escapeHtml(liste[0] || "")}</div>`;
}

function renderSchemaItem(e) {
  return `
    <div class="graphique-item">
      ${renderSchemaFormules(e)}
      <div class="graphique-resources-row">
        <div class="graphique-resource graphique-resource-image">
          <img src="${escapeHtml(e.imgPath)}" alt="${escapeHtml(e.titre)}" loading="lazy"
               onerror="this.closest('.graphique-resource').style.display='none'">
          <p class="graphique-titre">${escapeHtml(e.titre)}</p>
          <p class="graphique-caption">${escapeHtml(e.caption)}</p>
          <span class="graphique-source">Schéma original</span>
        </div>
      </div>
    </div>`;
}

function renderSchemaBlock(entries) {
  if (!entries || entries.length === 0) return "";
  return `
    <div class="section">
      <h3>Schéma</h3>
      <p class="exof-caption">Un schéma original par formule, généré par calcul (racines, coordonnées, tables...), pas une image externe.</p>
      <div class="graphiques-list">
        ${entries.map(renderSchemaItem).join("")}
      </div>
    </div>`;
}

(function attachCustomSchema() {
  if (typeof window.openNotion !== "function") return;
  const _prevOpenNotion = window.openNotion;
  window.openNotion = function (id) {
    _prevOpenNotion(id);
    const c = document.getElementById("content");
    if (!c) return;

    const existing = c.querySelector(".section-schema-original");
    if (existing) existing.remove();

    const entries = (window.CUSTOM_SCHEMAS || {})[id];
    if (!entries) return;

    c.insertAdjacentHTML("beforeend", renderSchemaBlock(entries));
    const added = c.querySelector(".section:last-of-type");
    if (added) added.classList.add("section-schema-original");
  };
})();
