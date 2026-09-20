// Version : 1.0
// =====================================================================
// DOSSIER MULTI‑NIVEAUX — une entrée ajoutée à chacun des 4 niveaux (Collège, Lycée,
// Prépa / CPGE, Grandes Écoles) du sommaire vertical gauche de l'Encyclopédie. Elle contient
// une copie des fiches de la bibliothèque des 221 fiches historiques (window.NOTIONS) qui
// correspondent à ce niveau, d'après le classeur Excel (données : dossier-multiniveaux-data.js).
//
// Non-invasif, comme exercices.js / graphics.js : app.js n'est pas modifié. On enveloppe
// renderSidebar() pour ajouter l'entrée après le rendu habituel, et une « copie » de fiche est
// simplement la fiche d'origine ouverte via openNotion() — donc avec tout ce qui s'y accroche
// déjà (vidéos, exercices fondamentaux, graphiques, schémas) — dont on adapte l'en-tête au niveau.
// Sans effet sur la bibliothèque « Formules » (son sommaire ne passe pas par renderSidebar).
// =====================================================================
(function () {
  "use strict";

  const DOSSIER_LABEL = "Dossier multi\u2011niveaux";

  function dossierData() {
    return window.DOSSIER_MULTINIVEAUX || {};
  }

  // Années d'un niveau qui ont des fiches, dans l'ordre de MATHSITE_NIVEAUX (app.js).
  function dossierGroups(niveauKey) {
    const tree = dossierData()[niveauKey] || {};
    const def = (typeof MATHSITE_NIVEAUX !== "undefined")
      ? MATHSITE_NIVEAUX.find(nd => nd.key === niveauKey)
      : null;
    const order = def ? def.grades : Object.keys(tree);
    return order
      .filter(g => (tree[g] || []).length > 0)
      .map(g => ({ grade: g, items: tree[g] }));
  }

  function dossierTotal(groups) {
    return groups.reduce((sum, g) => sum + g.items.length, 0);
  }

  function findDossierRow(niveauKey, gradeKey, id) {
    const items = ((dossierData()[niveauKey] || {})[gradeKey]) || [];
    return items.find(it => it.id === id) || null;
  }

  // Autres endroits du Dossier où figure la même fiche historique (fiches réparties sur plusieurs années).
  function otherPlacements(id, niveauKey, gradeKey) {
    const out = [];
    const all = dossierData();
    Object.keys(all).forEach(nk => {
      Object.keys(all[nk]).forEach(gk => {
        if (nk === niveauKey && gk === gradeKey) return;
        if (all[nk][gk].some(it => it.id === id)) out.push({ niveau: nk, grade: gk });
      });
    });
    return out;
  }

  function levelLabel(niveauKey) {
    return (typeof NIVEAU_LABELS !== "undefined" && NIVEAU_LABELS[niveauKey]) || niveauKey;
  }

  // --- Page d'accueil du Dossier d'un niveau : les fiches, année par année ---
  function loadDossierMultiNiveaux(niveauKey) {
    const c = document.getElementById("content");
    if (!c) return;
    const label = levelLabel(niveauKey);
    const groups = dossierGroups(niveauKey);
    const total = dossierTotal(groups);

    c.innerHTML = `
      <span class="card-niveau-tag ${niveauTagClass(niveauKey)}">${escapeHtml(label)}</span>
      <h1>${escapeHtml(DOSSIER_LABEL)} — ${escapeHtml(label)}</h1>
      <p class="subtitle">${total} fiche(s) de la bibliothèque «&nbsp;221 fiches historiques&nbsp;» correspondant à ce niveau, classées par année.</p>
      ${groups.map(g => `
        <h2 class="dossier-annee-title">${escapeHtml(prettifyGrade(g.grade))} <span class="sidebar-count">${g.items.length}</span></h2>
        <div class="dossier-grid">
          ${g.items.map(it => {
            const apercu = it.formules.join(" · ");
            return `
            <div class="notion-card" onclick="openDossierFiche('${niveauKey}','${g.grade}',${it.id})">
              <span class="card-niveau-tag ${niveauTagClass(niveauKey)}">${escapeHtml(it.categorie)}</span>
              <h3>${escapeHtml(it.titre)}</h3>
              <p>${escapeHtml(apercu.length > 140 ? apercu.slice(0, 140) + "…" : apercu)}</p>
            </div>`;
          }).join("")}
        </div>
      `).join("")}
    `;
    setActiveNav("");
    window.scrollTo(0, 0);
  }

  // Bloc d'information en tête d'une copie : formules rattachées à cette année (colonne
  // « Formules » du classeur, telle quelle) + liens vers les autres années où la fiche figure.
  function dossierNoteHtml(row, niveauKey, gradeKey) {
    const others = otherPlacements(row.id, niveauKey, gradeKey);
    const othersHtml = others.length
      ? `<p class="dossier-note-autres">Cette fiche figure aussi dans le Dossier en : ${others.map(o => {
          const lbl = `${prettifyGrade(o.grade)} (${levelLabel(o.niveau)})`;
          return `<a href="#" onclick="openDossierFiche('${o.niveau}','${o.grade}',${row.id}); return false;">${escapeHtml(lbl)}</a>`;
        }).join(" · ")}.</p>`
      : "";
    return `
      <div class="section dossier-note">
        <h3>${escapeHtml(DOSSIER_LABEL)} — ${escapeHtml(prettifyGrade(gradeKey))}</h3>
        <p>Formules de cette fiche rattachées à cette année :</p>
        <ul class="dossier-note-formules">${row.formules.map(f => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
        ${othersHtml}
      </div>`;
  }

  // --- Ouverture d'une copie de fiche depuis le Dossier ---
  function openDossierFiche(niveauKey, gradeKey, id) {
    const row = findDossierRow(niveauKey, gradeKey, id);
    const c = document.getElementById("content");
    if (!row || !c) return;

    const label = levelLabel(niveauKey);
    const subtitle = `${row.categorie} — ${label} · ${prettifyGrade(gradeKey)} — ${DOSSIER_LABEL}`;
    const backHtml = `&larr; ${escapeHtml(DOSSIER_LABEL)}`;
    const noteHtml = dossierNoteHtml(row, niveauKey, gradeKey);
    const inLibrary = (window.NOTIONS || []).some(n => n.id === id);

    if (!inLibrary || typeof window.openNotion !== "function") {
      // Filet de sécurité (ne devrait pas arriver) : page minimale bâtie sur les seules données du classeur.
      c.innerHTML = `
        <button class="back-btn" onclick="loadDossierMultiNiveaux('${niveauKey}')">${backHtml}</button>
        <span class="card-niveau-tag ${niveauTagClass(niveauKey)}">${escapeHtml(label)}</span>
        <h1>${escapeHtml(row.titre)}</h1>
        <p class="subtitle">${escapeHtml(subtitle)}</p>
        ${noteHtml}`;
      setActiveNav("");
      window.scrollTo(0, 0);
      return;
    }

    // La fiche d'origine, avec toutes ses couches habituelles (openNotion est résolu au moment du clic).
    window.openNotion(id);

    const tag = c.querySelector(".card-niveau-tag");
    if (tag) {
      tag.className = `card-niveau-tag ${niveauTagClass(niveauKey)}`;
      tag.textContent = label;
    }
    const sub = c.querySelector("p.subtitle");
    if (sub) {
      sub.textContent = subtitle;
      sub.insertAdjacentHTML("afterend", noteHtml);
    }
    const back = c.querySelector(".back-btn");
    if (back) {
      back.setAttribute("onclick", `loadDossierMultiNiveaux('${niveauKey}')`);
      back.innerHTML = backHtml;
    }
  }

  // --- Entrée « Dossier multi‑niveaux » du sommaire vertical, à la suite des années d'un niveau ---
  function buildDossierDetails(niveauKey) {
    const groups = dossierGroups(niveauKey);
    if (groups.length === 0) return null;

    const dossier = document.createElement("details");
    dossier.className = "sidebar-annee sidebar-dossier";
    const summary = document.createElement("summary");
    summary.innerHTML = `${escapeHtml(DOSSIER_LABEL)} <span class="sidebar-count">${dossierTotal(groups)}</span>`;
    // En plus du repli/déploiement natif de <details> : page d'accueil du Dossier (comme les années
    // affichent leur image de niveau).
    summary.addEventListener("click", () => loadDossierMultiNiveaux(niveauKey));
    dossier.appendChild(summary);

    groups.forEach(g => {
      const anneeDetails = document.createElement("details");
      anneeDetails.className = "sidebar-matiere";
      const anneeSummary = document.createElement("summary");
      anneeSummary.innerHTML = `${escapeHtml(prettifyGrade(g.grade))} <span class="sidebar-count">${g.items.length}</span>`;
      anneeDetails.appendChild(anneeSummary);

      const ul = document.createElement("ul");
      g.items.forEach(it => {
        const li = document.createElement("li");
        li.textContent = it.titre;
        li.onclick = (e) => {
          e.stopPropagation();
          // window.openDossierFiche (et non la fonction locale) : ainsi msc.js, qui l'enveloppe, s'applique aussi
          window.openDossierFiche(niveauKey, g.grade, it.id);
        };
        ul.appendChild(li);
      });
      anneeDetails.appendChild(ul);
      dossier.appendChild(anneeDetails);
    });
    return dossier;
  }

  function appendDossierToSidebar() {
    const root = document.getElementById("sidebar-content");
    if (!root) return;
    root.querySelectorAll(".sidebar-niveau").forEach((block, idx) => {
      if (block.querySelector(".sidebar-dossier")) return; // idempotent
      // Le niveau du bloc se lit dans son lien « fiches → » : loadCategory('<niveau>').
      const link = block.querySelector(".sidebar-niveau-link");
      const m = link && (link.getAttribute("onclick") || "").match(/loadCategory\('([^']+)'\)/);
      const niveauKey = m ? m[1] : (typeof NIVEAU_ORDER !== "undefined" ? NIVEAU_ORDER[idx] : null);
      if (!niveauKey) return;
      const details = buildDossierDetails(niveauKey);
      if (details) block.appendChild(details);
    });
  }

  window.loadDossierMultiNiveaux = loadDossierMultiNiveaux;
  window.openDossierFiche = openDossierFiche;

  // Accroche sur renderSidebar (setApp('mathsite'), loadNiveauHome(...), etc. passent par là).
  if (typeof window.renderSidebar === "function") {
    const _prevRenderSidebar = window.renderSidebar;
    window.renderSidebar = function () {
      _prevRenderSidebar.apply(this, arguments);
      appendDossierToSidebar();
    };
  }

  // Le premier rendu du sommaire a eu lieu à la fin de app.js, avant cette accroche : on le complète.
  appendDossierToSidebar();
})();
