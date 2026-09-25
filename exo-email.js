// Version : 1.0
// =====================================================================
// EXERCICES DU JOUR — listes en cascade Niveau → Domaine → Notion,
// horodatage par exercice, suppression d'une séance de l'historique, et
// envoi du contenu complet par email (mailto:). Rien n'est modifié dans
// app.js ; tout est injecté depuis ce fichier (champs ajoutés via un
// MutationObserver, bouton "Enregistrer" remplacé par un clone pour
// pouvoir capturer les nouveaux champs à la sauvegarde).
// =====================================================================

const EXO_EMAIL_RECIPIENT = "az.autres@gmail.com";
const EXO_NIVEAUX = ["Collège", "Lycée", "Prépa / CPGE", "Grandes Écoles"];
// Fait le lien entre le libellé affiché et la clé "niveau" utilisée dans
// notions-data.js (window.NOTIONS / la variable `notions` d'app.js).
const EXO_NIVEAU_KEY_MAP = {
  "Collège": "college",
  "Lycée": "lycee",
  "Prépa / CPGE": "prepa",
  "Grandes Écoles": "grandes-ecoles"
};

// --- Domaines disponibles pour un niveau donné (déduits de `notions`) ---
function exoDomainesForNiveau(niveauKey) {
  if (!niveauKey || typeof notions === "undefined") return [];
  const cats = [];
  notions.forEach(n => {
    if (n.niveau === niveauKey && !cats.includes(n.category)) cats.push(n.category);
  });
  return cats;
}

// --- Notions disponibles pour un couple (niveau, domaine) donné ---
function exoNotionsForDomaine(niveauKey, domaine) {
  if (!niveauKey || !domaine || typeof notions === "undefined") return [];
  return notions.filter(n => n.niveau === niveauKey && n.category === domaine).map(n => n.title);
}

function exoFillSelect(select, options, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>` + options.map(o => `<option>${o}</option>`).join("");
}

// --- Mise à jour en cascade quand niveau ou domaine change ---
function onExoNiveauChange(block) {
  const niveauSel = block.querySelector(".exo-niveau");
  const domaineSel = block.querySelector(".exo-domaine");
  const notionSel = block.querySelector(".exo-notion");
  const niveauKey = EXO_NIVEAU_KEY_MAP[niveauSel.value] || "";
  exoFillSelect(domaineSel, exoDomainesForNiveau(niveauKey), "Domaine…");
  exoFillSelect(notionSel, [], "Notion…");
  domaineSel.disabled = !niveauKey;
  notionSel.disabled = true;
}

function onExoDomaineChange(block) {
  const niveauSel = block.querySelector(".exo-niveau");
  const domaineSel = block.querySelector(".exo-domaine");
  const notionSel = block.querySelector(".exo-notion");
  const niveauKey = EXO_NIVEAU_KEY_MAP[niveauSel.value] || "";
  exoFillSelect(notionSel, exoNotionsForDomaine(niveauKey, domaineSel.value), "Notion…");
  notionSel.disabled = !domaineSel.value;
}

// --- Injection des listes "Niveau scolaire", "Domaine" et "Notion" ---
function injectExoExtraFields(block) {
  if (block.querySelector(".exo-niveau")) return;
  const wrap = document.createElement("div");
  wrap.className = "exo-extra-fields";
  wrap.innerHTML = `
    <select class="exo-niveau">
      <option value="">Niveau scolaire…</option>
      ${EXO_NIVEAUX.map(n => `<option>${n}</option>`).join("")}
    </select>
    <select class="exo-domaine" disabled>
      <option value="">Domaine…</option>
    </select>
    <select class="exo-notion" disabled>
      <option value="">Notion…</option>
    </select>
  `;
  const enonceTA = block.querySelector(".exo-enonce");
  if (enonceTA) enonceTA.insertAdjacentElement("beforebegin", wrap);
  else block.appendChild(wrap);

  wrap.querySelector(".exo-niveau").addEventListener("change", () => onExoNiveauChange(block));
  wrap.querySelector(".exo-domaine").addEventListener("change", () => onExoDomaineChange(block));
}

let _exoListObserved = null;
function ensureExoListObserver() {
  const exoList = document.getElementById("exo-list");
  if (!exoList) return;
  exoList.querySelectorAll(".exo-block").forEach(injectExoExtraFields);
  if (_exoListObserved === exoList) return;
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList && node.classList.contains("exo-block")) {
          injectExoExtraFields(node);
        }
      });
    });
  });
  observer.observe(exoList, { childList: true });
  _exoListObserved = exoList;
}

// --- Lecture d'un bloc d'exercice (avec niveau/domaine/notion + horodatage) ---
function readExoBlock(div) {
  return {
    enonce: div.querySelector(".exo-enonce").value,
    reponse: div.querySelector(".exo-reponse").value,
    correction: div.querySelector(".exo-correction").value,
    note: div.querySelector(".exo-note").value,
    niveau: div.querySelector(".exo-niveau") ? div.querySelector(".exo-niveau").value : "",
    domaine: div.querySelector(".exo-domaine") ? div.querySelector(".exo-domaine").value : "",
    notion: div.querySelector(".exo-notion") ? div.querySelector(".exo-notion").value : "",
    timestamp: new Date().toISOString()
  };
}

function formatExoTimestamp(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const datePart = d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const timePart = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  return `${datePart} à ${timePart}`;
}

// --- Reconstruction du formulaire (6 blocs) après notre propre sauvegarde ---
// Duplique le gabarit HTML privé d'app.js (exoBlock) puisqu'il n'est pas
// accessible depuis l'extérieur de la fonction loadExercises().
function exoBlockHTML(n, level) {
  return `
    <div class="exo-meta">
      <span class="exo-tag ${level === "sup" ? "exo-tag-sup" : "exo-tag-actuel"}">${level === "sup" ? "Niveau supérieur" : "Niveau actuel"}</span>
      <span class="exo-tag">Exercice ${n}</span>
    </div>
    <textarea placeholder="Énoncé (copie-le depuis le chat)..." class="exo-enonce"></textarea>
    <textarea placeholder="Ta réponse / ta rédaction..." class="exo-reponse"></textarea>
    <textarea placeholder="Correction & remarques (à coller une fois reçues)..." class="exo-correction"></textarea>
    <div class="exo-meta" style="margin-top:.6rem">
      <label class="exo-note-label">Note /20 :
        <input type="number" min="0" max="20" step="0.5" class="exo-note">
      </label>
    </div>
  `;
}

function resetExoListWithSix() {
  const exoList = document.getElementById("exo-list");
  if (!exoList) return;
  exoList.innerHTML = "";
  let n = 0;
  for (let i = 0; i < 3; i++) {
    n++;
    const div = document.createElement("div");
    div.className = "exo-block";
    div.dataset.idx = n;
    div.innerHTML = exoBlockHTML(n, "actuel");
    exoList.appendChild(div);
  }
  for (let i = 0; i < 3; i++) {
    n++;
    const div = document.createElement("div");
    div.className = "exo-block";
    div.dataset.idx = n;
    div.innerHTML = exoBlockHTML(n, "sup");
    exoList.appendChild(div);
  }
}

// --- Remplacement du bouton "Enregistrer" pour capturer niveau/domaine/notion ---
function replaceExoSaveButton() {
  const oldBtn = document.getElementById("save-session-btn");
  if (!oldBtn || oldBtn.dataset.exoEnhanced === "1") return;
  const newBtn = oldBtn.cloneNode(true);
  newBtn.dataset.exoEnhanced = "1";
  oldBtn.replaceWith(newBtn);

  newBtn.addEventListener("click", () => {
    const exoList = document.getElementById("exo-list");
    if (!exoList) return;
    const exos = [...exoList.querySelectorAll(".exo-block")]
      .map(readExoBlock)
      .filter(e => e.enonce || e.reponse || e.correction);

    if (exos.length === 0) {
      alert("Ajoute au moins un exercice avant d'enregistrer.");
      return;
    }

    const notesVal = exos.map(e => parseFloat(e.note)).filter(n => !isNaN(n));
    const avgSession = notesVal.length ? (notesVal.reduce((a, b) => a + b, 0) / notesVal.length) : null;

    const sessions = loadExoSessions();
    sessions.push({ date: new Date().toISOString(), exos, avg: avgSession });
    const ok = saveExoSessions(sessions);

    if (!ok) {
      alert("Impossible d'enregistrer la séance : le stockage local n'est pas disponible dans ce navigateur (mode navigation privée ?). Copie tes réponses ailleurs par précaution.");
      return;
    }

    renderExoHistory(currentExoFilter);
    resetExoListWithSix();
    ensureExoListObserver();
    alert("Séance enregistrée !");
  });
}

// --- Construction et envoi du mailto ---
function buildExoMailto(exos, dateLabel) {
  const notesVal = exos.map(e => parseFloat(e.note)).filter(n => !isNaN(n));
  const avg = notesVal.length ? (notesVal.reduce((a, b) => a + b, 0) / notesVal.length).toFixed(1) : "—";
  const subject = `ΩPrépa – Séance du ${dateLabel} (moyenne ${avg}/20)`;

  const lines = [`Séance du ${dateLabel}`, `Moyenne : ${avg}/20`, ""];
  exos.forEach((e, i) => {
    lines.push(`— Exercice ${i + 1} —`);
    if (e.timestamp) lines.push(`Horodatage : ${formatExoTimestamp(e.timestamp)}`);
    if (e.niveau) lines.push(`Niveau scolaire : ${e.niveau}`);
    if (e.domaine) lines.push(`Domaine : ${e.domaine}`);
    if (e.notion) lines.push(`Notion : ${e.notion}`);
    lines.push(`Énoncé : ${e.enonce ? e.enonce : "(non renseigné)"}`);
    lines.push(`Réponse : ${e.reponse ? e.reponse : "(non renseignée)"}`);
    lines.push(`Note : ${e.note ? e.note + "/20" : "(non notée)"}`);
    lines.push("");
  });
  const body = lines.join("\n");

  return `mailto:${EXO_EMAIL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function sendExoSessionByEmail(exos, dateLabel) {
  window.location.href = buildExoMailto(exos, dateLabel);
}

// --- Boutons "Envoyer par email" et "Réinitialiser" dans la séance en cours ---
(function attachExoEmailButton() {
  if (typeof window.loadExercises !== "function") return;
  const _prevLoadExercises = window.loadExercises;
  window.loadExercises = function () {
    _prevLoadExercises();

    ensureExoListObserver();
    replaceExoSaveButton();

    const saveBtn = document.getElementById("save-session-btn");
    if (!saveBtn || document.getElementById("email-session-btn")) return;

    const emailBtn = document.createElement("button");
    emailBtn.className = "btn-secondary";
    emailBtn.id = "email-session-btn";
    emailBtn.type = "button";
    emailBtn.style.marginLeft = "10px";
    emailBtn.textContent = "📧 Envoyer par email";
    saveBtn.insertAdjacentElement("afterend", emailBtn);

    emailBtn.addEventListener("click", () => {
      const exoList = document.getElementById("exo-list");
      if (!exoList) return;
      const exos = [...exoList.querySelectorAll(".exo-block")]
        .map(readExoBlock)
        .filter(e => e.enonce || e.reponse || e.correction);

      if (exos.length === 0) {
        alert("Ajoute au moins un exercice (avec une réponse) avant de l'envoyer.");
        return;
      }
      const todayLabel = new Date().toLocaleDateString("fr-FR", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      });
      sendExoSessionByEmail(exos, todayLabel);
    });
  };
})();

// --- Bouton "Envoyer par email" sur chaque séance de l'historique ---
(function attachExoHistoryEmailButtons() {
  if (typeof window.renderExoHistory !== "function") return;
  const _prevRenderExoHistory = window.renderExoHistory;
  window.renderExoHistory = function (filter) {
    _prevRenderExoHistory(filter);

    // On recalcule le même filtrage/tri que la fonction d'origine pour
    // faire correspondre chaque élément du DOM à sa séance.
    const sessions = loadExoSessions().slice().reverse();
    const now = new Date();
    const filtered = sessions.filter(s => {
      if (filter === "week") return (now - new Date(s.date)) <= 7 * 86400000;
      if (filter === "unnoted") return s.exos.some(e => e.note === "" || e.note === undefined);
      return true;
    });

    const items = document.querySelectorAll("#exo-history .exo-history-item");
    items.forEach((item, idx) => {
      if (item.querySelector(".exo-email-btn")) return;
      const s = filtered[idx];
      if (!s) return;

      const btn = document.createElement("button");
      btn.className = "btn-secondary exo-email-btn";
      btn.type = "button";
      btn.style.marginTop = "8px";
      btn.textContent = "📧 Envoyer par email";
      btn.addEventListener("click", () => {
        const dateLabel = new Date(s.date).toLocaleDateString("fr-FR", {
          weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
        sendExoSessionByEmail(s.exos, dateLabel);
      });

      const delBtn = document.createElement("button");
      delBtn.className = "btn-danger exo-delete-btn";
      delBtn.type = "button";
      delBtn.style.marginTop = "8px";
      delBtn.style.marginLeft = "8px";
      delBtn.textContent = "🗑️ Supprimer cette séance";
      delBtn.addEventListener("click", () => {
        const dateLabel = new Date(s.date).toLocaleDateString("fr-FR", {
          weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
        if (!confirm(`Supprimer définitivement la séance du ${dateLabel} de l'historique ? Cette action est irréversible.`)) {
          return;
        }
        const all = loadExoSessions();
        const realIdx = all.findIndex(x => x.date === s.date);
        if (realIdx !== -1) {
          all.splice(realIdx, 1);
          saveExoSessions(all);
        }
        renderExoHistory(currentExoFilter);
      });

      const h4 = item.querySelector("h4");
      if (h4) {
        h4.insertAdjacentElement("afterend", btn);
        btn.insertAdjacentElement("afterend", delBtn);
      }
    });
  };
})();
