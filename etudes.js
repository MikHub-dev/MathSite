// Version : 1.1
// =====================================================================
// ÉTUDES et SPÉCIALISATION — les deux « bibliothèques » du menu horizontal
// =====================================================================
// Menu horizontal : Accueil · MSC · Études · Correspondances · Exercices · Banque d'images ·
// Spécialisation · recherche.
//
//   1. « Études » (bibliothèque Encyclopédie : toutes les fiches du sommaire).
//      - menu de gauche : le sommaire complet Niveau → Classe → Chapitre (setApp('mathsite')),
//        exactement comme l'ancienne entrée « Encyclopédie » ;
//      - zone centrale : une introduction construite sur le modèle de l'« Introduction » de la
//        bibliothèque 1000 Formules (même en-tête, mêmes paragraphes d'ouverture, mêmes onglets
//        de niveau) mais adaptée aux fiches : totaux de la bibliothèque (domaines, disciplines,
//        notions, fiches, formules), puis, par niveau et par classe, le nombre de notions, de
//        fiches, de formules et le nombre de domaines et de disciplines MSC impliqués.
//
//   2. « Spécialisation » (bibliothèque des formules, ex « 5000 Formules »).
//      - menu de gauche : le menu vertical complet de la bibliothèque, SANS l'élément
//        « Introduction » ;
//      - zone centrale : le contenu de « Vue d'ensemble » (chapitre 01).
//
// Aucun chiffre n'est écrit en dur : tout est recalculé à l'ouverture de la page à partir de
//   - window.MATHSITE_TREE  (jsonMathsite.js)      → notions par niveau / classe / chapitre,
//   - window.MATHSITE_FICHES (mathsite-fiches-data-*.js) → fiches et formules,
//   - window.MATHSITE_MSC / MATHSITE_MSC_REFERENTIEL (msc-data.js) → domaines et disciplines.
// Une notion classée « Hors classification » est comptée dans les fiches, mais pas dans les
// domaines ni dans les disciplines (une note en bas de l'introduction le signale).
//
// Sans modifier formules.js ni formules-data.js : on enveloppe renderFormulesSidebar() et
// loadFormulesChapter(), comme le font exercices.js et graphics.js.
// À charger APRÈS app.js, formules.js, exercices.js, graphics.js et correspondances.js.
// =====================================================================
(function () {
  "use strict";

  // ---------------------------------------------------------------
  // Styles (injectés une seule fois, pas de modification de styles.css)
  // ---------------------------------------------------------------
  const CSS_ETUDES = `
    .etu-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin: 20px 0 22px; }
    .etu-kpi { background: #1a1d24; border: 1px solid #2a2d35; border-radius: 10px; padding: 14px 16px; }
    .etu-kpi-n { display: block; font-size: 28px; font-weight: 700; line-height: 1.15; color: #ffb86b; }
    .etu-kpi-l { display: block; margin-top: 4px; font-size: 12.5px; color: #9a9a9a; }

    table.etu-table { min-width: 760px; }
    table.etu-table th.c { text-align: center; }
    table.etu-table td.c { color: #e6e6e6; font-size: 14px; text-align: center; vertical-align: top; }
    table.etu-table td.c .etu-num { font-weight: 700; }
    .etu-doms { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px 10px; margin-top: 5px;
                font-size: 11px; font-weight: 400; color: #9a9a9a; }
    .etu-dom { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
    .etu-dom i { display: inline-block; flex: none; width: 8px; height: 8px; border-radius: 2px; }
    tr.etu-total td { font-weight: 700; color: #ffb86b; background: rgba(255, 184, 107, .06); border-top: 1px solid #3a3e4a; }
    tr.etu-total td.c { color: #ffb86b; }
    tr.etu-total .etu-doms { color: #c8c8c8; font-weight: 400; }
  `;
  function injecteStyle() {
    if (document.getElementById("etudes-style")) return;
    const st = document.createElement("style");
    st.id = "etudes-style";
    st.textContent = CSS_ETUDES;
    document.head.appendChild(st);
  }

  // ---------------------------------------------------------------
  // Petits utilitaires
  // ---------------------------------------------------------------
  const fr = n => Number(n).toLocaleString("fr-FR");
  const accord = (n, un, plu) => fr(n) + " " + (n > 1 ? plu : un);
  const estHors = nom => /^hors classification/i.test(nom || "");

  // ---------------------------------------------------------------
  // Calcul des totaux : bibliothèque → niveau → classe
  // ---------------------------------------------------------------
  // Chaque compteur : { notions, fiches, formules, domaines: Map(nom → nb de fiches),
  //                     disciplines: Map(nom → nb de fiches) }.
  function compteurVide() {
    return { notions: 0, fiches: 0, formules: 0, domaines: new Map(), disciplines: new Map() };
  }

  function calculeStats() {
    const F = window.MATHSITE_FICHES || {};
    const M = window.MATHSITE_MSC || {};
    const REF = (window.MATHSITE_MSC_REFERENTIEL || {}).disciplines || {};

    const total = compteurVide();
    const niveaux = [];
    const horsClassement = []; // fiches sans domaine MSC (« Hors classification » ou rattachement absent)

    MATHSITE_NIVEAUX.forEach(nd => {
      const niv = Object.assign(compteurVide(), { key: nd.key, label: NIVEAU_LABELS[nd.key] || nd.key, classes: [] });

      nd.grades.forEach(gradeKey => {
        const subjects = getGradeSubjects(nd, gradeKey);
        const cl = Object.assign(compteurVide(), { key: gradeKey, label: prettifyGrade(gradeKey) });

        Object.keys(subjects).forEach(subjectKey => {
          (subjects[subjectKey] || []).forEach(it => {
            const cle = mathsiteFicheKey(nd.key, it.id);
            const fiche = F[cle];
            const msc = M[cle];
            const cibles = [cl, niv, total];

            cibles.forEach(c => {
              c.notions++;
              if (fiche) {
                c.fiches++;
                c.formules += Array.isArray(fiche.formulas) ? fiche.formulas.length : 0;
              }
            });

            const discipline = msc ? msc[3] : null;
            const domaine = discipline ? REF[discipline] : null;
            if (!domaine || estHors(domaine)) {
              horsClassement.push({ titre: (fiche && fiche.title) || it.title, classe: cl.label });
            } else {
              cibles.forEach(c => {
                c.domaines.set(domaine, (c.domaines.get(domaine) || 0) + 1);
                c.disciplines.set(discipline, (c.disciplines.get(discipline) || 0) + 1);
              });
            }
          });
        });

        if (cl.notions) niv.classes.push(cl);
      });

      niveaux.push(niv);
    });

    return { total, niveaux, horsClassement };
  }

  // ---------------------------------------------------------------
  // Rendu
  // ---------------------------------------------------------------
  function domainesMsc() {
    return (window.MSC_COMMUN && window.MSC_COMMUN.DOMAINES) || [];
  }

  // « 6e à 3e », « Seconde à Terminale », « L1 et L2 », « L3 à M2 »
  function listeClasses(niv) {
    const l = niv.classes.map(c => c.label);
    if (l.length <= 1) return l.join("");
    if (l.length === 2) return l[0] + " et " + l[1];
    return l[0] + " à " + l[l.length - 1];
  }

  function rendreKpis(t) {
    const items = [
      [t.domaines.size, "Domaines MSC"],
      [t.disciplines.size, "Disciplines MSC"],
      [t.notions, "Notions"],
      [t.fiches, "Fiches"],
      [t.formules, "Formules"]
    ];
    return '<div class="etu-kpis">' + items.map(it =>
      '<div class="etu-kpi"><span class="etu-kpi-n">' + fr(it[0]) + '</span><span class="etu-kpi-l">' + escapeHtml(it[1]) + '</span></div>'
    ).join("") + '</div>';
  }

  // Cellule « domaines » : le nombre, puis les domaines impliqués (pastille + nom court).
  function celluleDomaines(c) {
    const DOMS = domainesMsc();
    const ordre = DOMS.map(d => d.nom);
    const noms = Array.from(c.domaines.keys()).sort((a, b) => {
      const ia = ordre.indexOf(a), ib = ordre.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    return '<span class="etu-num">' + c.domaines.size + '</span>' +
      '<span class="etu-doms">' + noms.map(nom => {
        const d = DOMS.find(x => x.nom === nom);
        return '<span class="etu-dom" title="' + escapeAttr(nom + " — " + accord(c.domaines.get(nom), "fiche", "fiches")) + '">' +
          '<i style="background:' + (d ? d.couleur : "#8b90a0") + '"></i>' + escapeHtml(d ? d.court : nom) + '</span>';
      }).join("") + '</span>';
  }

  function celluleDisciplines(c) {
    const noms = Array.from(c.disciplines.keys());
    return '<span class="etu-num" title="' + escapeAttr(noms.join(" · ")) + '">' + c.disciplines.size + '</span>';
  }

  function ligne(c, libelleHtml, classe) {
    return '<tr' + (classe ? ' class="' + classe + '"' : '') + '>' +
      '<td>' + libelleHtml + '</td>' +
      '<td class="c">' + fr(c.notions) + '</td>' +
      '<td class="c">' + fr(c.fiches) + '</td>' +
      '<td class="c">' + fr(c.formules) + '</td>' +
      '<td class="c">' + celluleDomaines(c) + '</td>' +
      '<td class="c">' + celluleDisciplines(c) + '</td>' +
      '</tr>';
  }

  // Panneau d'un onglet de niveau : une ligne par classe, puis le total du niveau.
  function rendrePanneau(niv, actif) {
    return '<div class="level-panel' + (actif ? ' active' : '') + '" data-level="' + escapeAttr(niv.key) + '">' +
      '<div class="formules-table-wrap"><table class="formules-table etu-table">' +
      '<thead><tr><th>Classe</th><th class="c">Notions</th><th class="c">Fiches</th><th class="c">Formules</th>' +
      '<th class="c">Domaines MSC</th><th class="c">Disciplines MSC</th></tr></thead><tbody>' +
      niv.classes.map(cl => ligne(cl, escapeHtml(cl.label))).join("") +
      ligne(niv, "Total " + escapeHtml(niv.label), "etu-total") +
      '</tbody></table></div></div>';
  }

  function rendreOnglets(niveaux) {
    const tabs = niveaux.map((n, i) =>
      '<button class="level-tab' + (i === 0 ? ' active' : '') + '" data-level="' + escapeAttr(n.key) + '" onclick="showFormulesLevel(this,\'' + n.key + '\')">' +
      escapeHtml(n.label) + ' <span class="level-count">' + fr(n.fiches) + '</span></button>'
    ).join("");
    const panels = niveaux.map((n, i) => rendrePanneau(n, i === 0)).join("");
    return '<div class="sublevels"><div class="levels-tabs">' + tabs + '</div><div class="levels-panels">' + panels + '</div></div>';
  }

  function rendreNoteHors(hors) {
    if (!hors.length) return "";
    const n = hors.length;
    const texte = n === 1
      ? "La fiche « " + hors[0].titre + " » (" + hors[0].classe + ") n'est rattachée à aucun domaine MSC : elle est comptée dans les fiches, mais pas dans les domaines ni dans les disciplines."
      : n + " fiches ne sont rattachées à aucun domaine MSC : elles sont comptées dans les fiches, mais pas dans les domaines ni dans les disciplines.";
    return '<div class="formules-note">' + escapeHtml(texte) + '</div>';
  }

  // ---------------------------------------------------------------
  // Page « Études »
  // ---------------------------------------------------------------
  window.loadEtudes = function () {
    const c = document.getElementById("content");
    if (!c) return;
    injecteStyle();
    // Menu de gauche : le sommaire complet (niveaux, classes, chapitres), comme l'ancienne « Encyclopédie ».
    if (typeof setApp === "function") setApp("mathsite");

    const S = calculeStats();
    const t = S.total;

    const parNiveau = S.niveaux.map(n => n.label + " — " + listeClasses(n) + " (" + accord(n.fiches, "fiche", "fiches") + ")");
    const enumNiveaux = parNiveau.slice(0, -1).join(", ") + ", et " + parNiveau[parNiveau.length - 1];

    c.innerHTML = `
      <span class="card-niveau-tag tag-formules">Études</span>
      <h1>Introduction</h1>
      <p class="subtitle">${escapeHtml(accord(t.fiches, "fiche", "fiches"))}, du collège aux grandes écoles — quatre niveaux, une seule progression</p>
      <p>${escapeHtml("Cette page présente la bibliothèque Encyclopédie : l'ensemble des notions du sommaire, du collège aux grandes écoles, chacune accompagnée d'une fiche détaillée (définition, formules, explications, exemples, applications, vidéos, exercices fondamentaux). Au total : " + accord(t.notions, "notion", "notions") + " et " + accord(t.fiches, "fiche", "fiches") + ", réunissant " + accord(t.formules, "formule", "formules") + " et théorèmes, classées par le référentiel MSC (Mathematics Subject Classification) en " + accord(t.domaines.size, "domaine", "domaines") + " et " + accord(t.disciplines.size, "discipline", "disciplines") + ".")}</p>
      ${rendreKpis(t)}
      <p>${escapeHtml("Le classement suit la progression scolaire française : " + enumNiveaux + ". Utilisez les onglets ci-dessous pour naviguer d'un niveau à l'autre : chacun donne, pour le niveau puis pour chacune de ses classes, le nombre de notions, de fiches et de formules, ainsi que le nombre de domaines et de disciplines MSC impliqués. Le menu Niveaux, à gauche (classes puis chapitres), permet d'ouvrir chaque fiche.")}</p>
      ${rendreNoteHors(S.horsClassement)}
      ${rendreOnglets(S.niveaux)}
      <div class="section"><h3>Guided Links</h3>
        <ul class="correspondances-list">
          <li onclick="loadSpecialisation()"><span class="cor-title">Vue d'ensemble</span></li>
          <li onclick="loadMscPage()"><span class="cor-title">Classification MSC</span></li>
        </ul>
      </div>
    `;
    setActiveNav("etudes");
    window.scrollTo(0, 0);
  };

  // ---------------------------------------------------------------
  // « Spécialisation » : menu vertical de la bibliothèque des formules, sans « Introduction »
  // ---------------------------------------------------------------
  if (typeof window.renderFormulesSidebar === "function") {
    const _prevRenderFormulesSidebar = window.renderFormulesSidebar;
    window.renderFormulesSidebar = function () {
      _prevRenderFormulesSidebar.apply(this, arguments);
      const titre = document.getElementById("sidebar-title");
      if (titre) titre.textContent = "Spécialisation";
      // L'élément « Introduction » (chapitre 00) n'apparaît plus dans le menu.
      document.querySelectorAll('#formules-toc li[data-chid="intro"]').forEach(li => li.remove());
    };
  }

  // Sur « Vue d'ensemble », premier écran de la rubrique, le bouton « Retour » n'a plus de sens.
  if (typeof window.loadFormulesChapter === "function") {
    const _prevLoadFormulesChapter = window.loadFormulesChapter;
    window.loadFormulesChapter = function (id) {
      _prevLoadFormulesChapter.apply(this, arguments);
      if (id === "overview") {
        const retour = document.querySelector("#content > .back-btn");
        if (retour) retour.remove();
      }
    };
  }

  // Point d'entrée du menu horizontal : menu vertical (sans introduction) + contenu de « Vue d'ensemble ».
  window.loadSpecialisation = function () {
    window.loadFormulesChapter("overview");
  };

  // L'ancien accueil de la bibliothèque (grille des chapitres, avec l'introduction) n'existe plus :
  // tous les anciens appels (bouton « Retour » d'un chapitre, lien d'une fiche…) mènent à la Spécialisation.
  window.loadFormulesHome = window.loadSpecialisation;
})();
