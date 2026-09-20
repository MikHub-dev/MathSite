// Version : 1.0
// =====================================================================
// MSC — chaque fiche du sommaire (« 2200 Concepts ») et chaque fiche du Dossier multi-niveaux
// affiche sa situation :  Niveau · Classe · Chapitre  +  Domaine MSC · Discipline MSC
// Les données viennent de msc-data.js (généré depuis MathSite_fiches_MSC.xlsx).
// Sans modifier app.js : on s'accroche sur openMenuConcept() (sommaire) et sur
// openDossierFiche() (Dossier multi-niveaux), comme exercices.js.
// À charger APRÈS app.js, dossier-multiniveaux.js et msc-data.js (donc en dernier dans index.html).
// =====================================================================
(function () {
  "use strict";

  // --- Couleur d'accent par domaine MSC (thème sombre du site) ---
  const DOMAIN_COLORS = {
    "Fondements et Logique": "#7aa2ff",
    "Algèbre et Théorie des nombres": "#7ee0a3",
    "Analyse mathématique": "#ffb26b",
    "Géométrie et Topologie": "#c8a2ff",
    "Probabilités et Statistiques": "#ffd76e",
    "Mathématiques appliquées et computationnelles": "#6fd3e0",
    "Hors classification": "#8b90a0"
  };

  // --- Styles, injectés une seule fois (pas de modification de styles.css) ---
  function injectStyles() {
    if (document.getElementById("msc-styles")) return;
    const st = document.createElement("style");
    st.id = "msc-styles";
    st.textContent = `
      .msc-meta { margin: -4px 0 22px; border: 1px solid #2a2d35; border-left: 4px solid var(--msc-accent, #7aa2ff); border-radius: 10px; background: #1a1d24; overflow: hidden; }
      .msc-meta-row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 12px 36px; padding: 12px 18px; }
      .msc-cell { display: flex; flex-direction: column; gap: 4px; min-width: 88px; }
      .msc-label { font-size: 10.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: #8b90a0; }
      .msc-value { font-size: 14.5px; font-weight: 600; color: #e6e6e6; line-height: 1.3; }
      .msc-cell-msc .msc-value { color: var(--msc-accent, #7aa2ff); }
      .msc-value-muted { font-weight: 500; font-style: italic; color: #8b90a0 !important; }
      .msc-meta .card-niveau-tag { margin: 0; align-self: flex-start; }
    `;
    document.head.appendChild(st);
  }

  function esc(s) {
    return (typeof escapeHtml === "function")
      ? escapeHtml(String(s))
      : String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Clé de fiche "<branche>:<id>" — identique à mathsiteFicheKey() de app.js
  function ficheKey(niveau, conceptId) {
    return (typeof mathsiteFicheKey === "function")
      ? mathsiteFicheKey(niveau, conceptId)
      : (((niveau === "college" || niveau === "lycee") ? "ecole" : "sup") + ":" + conceptId);
  }

  // Domaine MSC d'une discipline (référentiel de msc-data.js)
  function domainOf(discipline) {
    const ref = window.MATHSITE_MSC_REFERENTIEL;
    return (ref && ref.disciplines && ref.disciplines[discipline]) || null;
  }

  // Bloc HTML « Niveau · Classe · Chapitre » + « Domaine MSC · Discipline MSC »
  // rec = [niveau, classe, chapitre, discipline] (msc-data.js), ou undefined : on se rabat alors sur
  // le niveau/classe/chapitre connus de l'appelant et on signale « non renseigné ».
  function buildMeta(rec, niveau, classeRepli, chapitreRepli) {
    const niveauLabel = rec ? rec[0] : ((typeof NIVEAU_LABELS !== "undefined" && NIVEAU_LABELS[niveau]) || niveau);
    const classe = rec ? rec[1] : classeRepli;
    const chapitre = rec ? rec[2] : chapitreRepli;
    const discipline = rec ? rec[3] : null;
    const domaine = discipline ? domainOf(discipline) : null;

    const tagClass = (typeof niveauTagClass === "function") ? niveauTagClass(niveau) : "";

    let domaineHtml, disciplineHtml;
    if (!discipline || !domaine) {
      domaineHtml = `<span class="msc-value msc-value-muted">non renseigné</span>`;
      disciplineHtml = `<span class="msc-value msc-value-muted">non renseignée</span>`;
    } else if (domaine === "Hors classification") {
      domaineHtml = `<span class="msc-value">Hors classification</span>`;
      disciplineHtml = `<span class="msc-value msc-value-muted">Aucune (méthodologie)</span>`;
    } else {
      domaineHtml = `<span class="msc-value">${esc(domaine)}</span>`;
      disciplineHtml = `<span class="msc-value">${esc(discipline)}</span>`;
    }
    const accent = DOMAIN_COLORS[domaine] || "#8b90a0";

    return `
      <div class="msc-meta" role="group" aria-label="Situation de la fiche" style="--msc-accent:${accent}">
        <div class="msc-meta-row">
          <div class="msc-cell"><span class="msc-label">Niveau</span><span class="card-niveau-tag ${tagClass}">${esc(niveauLabel)}</span></div>
          <div class="msc-cell"><span class="msc-label">Classe</span><span class="msc-value">${esc(classe)}</span></div>
          <div class="msc-cell"><span class="msc-label">Chapitre</span><span class="msc-value">${esc(chapitre)}</span></div>
          <div class="msc-cell msc-cell-msc"><span class="msc-label">Domaine MSC</span>${domaineHtml}</div>
          <div class="msc-cell msc-cell-msc"><span class="msc-label">Discipline MSC</span>${disciplineHtml}</div>
        </div>
      </div>`;
  }

  // Remplace, sur la page affichée, l'ancien tag de niveau + sous-titre par le bloc MSC
  function placeMeta(c, html) {
    const h1 = c.querySelector("h1");
    if (!h1 || c.querySelector(".msc-meta")) return;
    injectStyles();
    const oldTag = Array.from(c.children).find(el => el.classList && el.classList.contains("card-niveau-tag"));
    if (oldTag) oldTag.remove();
    const sub = h1.nextElementSibling;
    if (sub && sub.classList && sub.classList.contains("subtitle")) {
      sub.outerHTML = html;
    } else {
      h1.insertAdjacentHTML("afterend", html);
    }
  }

  // Fiche du sommaire (« 2200 Concepts »)
  function decorateFiche(niveau, gradeKey, subjectKey, conceptId) {
    const key = ficheKey(niveau, conceptId);
    // Seules les fiches détaillées du sommaire sont concernées (pas une notion de l'Encyclopédie,
    // ni la page « repère sans fiche »)
    if (!window.MATHSITE_FICHES || !window.MATHSITE_FICHES[key]) return;
    const c = document.getElementById("content");
    if (!c) return;
    placeMeta(c, buildMeta(
      (window.MATHSITE_MSC || {})[key], niveau,
      typeof prettifyGrade === "function" ? prettifyGrade(gradeKey) : gradeKey,
      typeof prettifySubject === "function" ? prettifySubject(subjectKey) : subjectKey));
  }

  // Fiche du Dossier multi-niveaux : clé « niveau|année|id de la notion » (msc-data.js) ;
  // chapitre de repli = catégorie de la notion (Analyse, Algèbre, Géométrie…).
  function decorateDossier(niveauKey, gradeKey, id) {
    const rows = ((window.DOSSIER_MULTINIVEAUX || {})[niveauKey] || {})[gradeKey] || [];
    const row = rows.find(it => it.id === id);
    if (!row) return;
    const c = document.getElementById("content");
    if (!c) return;
    placeMeta(c, buildMeta(
      (window.MATHSITE_MSC_DOSSIER || {})[niveauKey + "|" + gradeKey + "|" + id], niveauKey,
      typeof prettifyGrade === "function" ? prettifyGrade(gradeKey) : gradeKey,
      row.categorie));
  }

  // --- Accroche sur openMenuConcept (ouverture d'une fiche depuis le sommaire) ---
  if (typeof window.openMenuConcept === "function") {
    const _prevOpenMenuConcept = window.openMenuConcept;
    window.openMenuConcept = function (niveau, gradeKey, subjectKey, conceptId, title) {
      _prevOpenMenuConcept(niveau, gradeKey, subjectKey, conceptId, title);
      try {
        decorateFiche(niveau, gradeKey, subjectKey, conceptId);
      } catch (e) {
        console.error("msc.js : affichage MSC impossible pour la fiche", niveau, conceptId, e);
      }
    };
  }

  // --- Accroche sur openDossierFiche (ouverture d'une copie de fiche depuis le Dossier multi-niveaux) ---
  if (typeof window.openDossierFiche === "function") {
    const _prevOpenDossierFiche = window.openDossierFiche;
    window.openDossierFiche = function (niveauKey, gradeKey, id) {
      _prevOpenDossierFiche(niveauKey, gradeKey, id);
      try {
        decorateDossier(niveauKey, gradeKey, id);
      } catch (e) {
        console.error("msc.js : affichage MSC impossible pour la fiche du Dossier", niveauKey, gradeKey, id, e);
      }
    };
  }

  // --- Vocabulaire : « chapitre » à la place de « matière » dans les textes d'aide du sommaire ---
  function chapitrer(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      if (/mati[eè]re/i.test(n.nodeValue)) {
        n.nodeValue = n.nodeValue.replace(/\bmatières\b/g, "chapitres").replace(/\bmatière\b/g, "chapitre");
      }
    });
  }
  ["loadNiveauHome", "loadConceptsHome"].forEach(name => {
    if (typeof window[name] !== "function") return;
    const _prev = window[name];
    window[name] = function () {
      const r = _prev.apply(this, arguments);
      chapitrer(document.getElementById("content"));
      return r;
    };
  });
})();
