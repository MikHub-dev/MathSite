// Version : 1.11
// --- Page « Évaluations » (menu horizontal) ---
// Données : evaluations-data.js, généré par outils/compiler-evaluations.mjs à partir des dossiers
// evaluations/, notes/ et eleves/, fournit window.EVALUATIONS, window.EVAL_NOTES et window.EVAL_ELEVES.
// Les évaluations n'ont pas de date limite : elles restent ouvertes jusqu'à leur clôture par
// l'enseignant. Chaque copie est corrigée au passage hebdomadaire de l'agent qui suit son envoi ;
// l'élève voit alors sa note, son commentaire et sa date de réponse. L'évaluation est clôturée
// (corrigé publié) dès que tous les élèves inscrits de la classe ont été corrigés, ou à la main.
// Les résultats de classe (moyenne, répartition) ne s'affichent qu'à partir de EVAL_MIN_STATS inscrits.
// Chaque élève a un code personnel remis à la main ; le site ne publie que les EMPREINTES SHA-256
// des codes, jamais les noms ni les codes eux-mêmes. L'empreinte est calculée avec la classe
// (sel + classe + ":" + code) : un code n'est valable que dans la classe pour laquelle il a été créé.
// Envoi (réponses et demandes d'amélioration) : si EVAL_CONFIG.workerUrl est renseigné, les envois
// partent vers le Worker Cloudflare (dossier worker/), protégé par Turnstile ; sinon le site ouvre
// la messagerie de l'élève (mailto:) avec le message déjà rédigé.
// Page d'accueil : deux vignettes indépendantes (5e, Seconde), chacune avec la moyenne de la classe
// dans son titre et son propre champ de code. Le code est mémorisé par classe ; une fois accepté, la
// vignette de la classe occupe toute la largeur et devient l'espace de travail de l'élève.
// La page n'utilise pas le menu de gauche : il est rétracté, comme pour MSC ou Correspondances.
// Espace enseignant (loadAdministrationPage) : lance l'agent via le Worker (mot de passe + Turnstile)
// et affiche ses derniers passages ; le mot de passe n'est gardé que pour la session du navigateur.

const EVAL_CONFIG = {
  emailContact: "",                           // Mode sans Worker uniquement : adresse qui reçoit les messages
  workerUrl: "https://mathsite-formulaires.mikhub-dev.workers.dev",  // Worker Cloudflare (dossier worker/)
  turnstileSiteKey: "0x4AAAAAAFETfuoUgTaETXuv",  // Clé de site Cloudflare Turnstile (publique)
  sel: "mathsite:",                            // Identique à SEL dans outils/creer-codes.mjs et dans le Worker
};

const EVAL_CLASSES = [
  { key: "5e", label: "5e", niveau: "Collège" },
  { key: "seconde", label: "Seconde", niveau: "Lycée" },
];

const EVAL_STORAGE_CODE = "mathsite-code-eleve";
const EVAL_MIN_STATS = 3;   // en dessous, la moyenne de classe révélerait les notes individuelles
const EVAL_STORAGE_ENVOIS = "mathsite-envois-evaluations";

let evalEtat = { annee: null, classe: "5e" };
let evalTurnstileJeton = null;
let evalTurnstileWidget = null;
let evalRendu = 0;         // numéro du dernier affichage demandé : un affichage asynchrone dépassé s'abandonne
let evalApresCode = null;   // ce qu'il faut réafficher une fois un code validé
let evalTurnstileEnAttente = null;   // conteneur à remplir dès que le script Turnstile est chargé

// ---------- Données ----------
function evalAnnees() {
  return Object.keys(window.EVALUATIONS || {}).sort().reverse();
}
function evalAnneeCourante() {
  const annees = evalAnnees();
  if (!evalEtat.annee || !annees.includes(evalEtat.annee)) evalEtat.annee = annees[0] || null;
  return evalEtat.annee;
}
function evalListe(annee, classe) {
  return ((window.EVALUATIONS || {})[annee] || {})[classe] || [];
}
function evalTrouver(annee, classe, id) {
  return evalListe(annee, classe).find(e => e.id === id) || null;
}
function evalNotes(annee, classe, id) {
  const n = (((window.EVAL_NOTES || {})[annee] || {})[classe] || {})[id];
  return n && n.notes && Object.keys(n.notes).length ? n : null;
}
function evalStatsVisibles(annee, classe) {
  return evalInscrits(annee, classe).length >= EVAL_MIN_STATS;
}
function evalLabelClasse(classe) {
  const k = EVAL_CLASSES.find(c => c.key === classe);
  return k ? k.label : classe;
}
function evalAujourdhui() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
// ouverte : réponses acceptées (pas de date limite) ; cloturee : clôturée par l'enseignant,
// corrigé publié, plus de réponses acceptées.
function evalStatut(annee, classe, ev) {
  return ev.cloturee === true || ev.corrige ? "cloturee" : "ouverte";
}
function evalStats(n, total) {
  const vals = Object.values(n.notes).map(x => x.note);
  const tranches = [0, 0, 0, 0];
  vals.forEach(v => { tranches[Math.min(3, Math.floor(v / total * 4))]++; });
  return {
    n: vals.length,
    moyenne: vals.reduce((a, b) => a + b, 0) / vals.length,
    min: Math.min(...vals),
    max: Math.max(...vals),
    tranches,
  };
}

// ---------- Formats ----------
function evalDate(iso, avecAnnee) {
  const [y, m, d] = iso.split("-").map(Number);
  const opts = avecAnnee ? { day: "numeric", month: "long", year: "numeric" } : { day: "numeric", month: "long" };
  const texte = new Date(y, m - 1, d).toLocaleDateString("fr-FR", opts);
  return d === 1 ? texte.replace(/^1 /, "1er ") : texte;
}
function evalNombre(x) {
  return String(Math.round(x * 100) / 100).replace(".", ",");
}
function evalPoints(p) {
  return `${evalNombre(p)} point${p > 1 ? "s" : ""}`;
}

// ---------- Codes élèves ----------
function evalNormaliserCode(s) {
  return String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function evalFormaterCode(n) {
  // Codes aléatoires de 8 caractères affichés ABCD-EFGH ; les codes choisis (ex. MARCZA) tels quels.
  return n.length === 8 ? n.slice(0, 4) + "-" + n.slice(4) : n;
}
async function evalEmpreinte(code, classe) {
  const texte = `${EVAL_CONFIG.sel}${classe}:${evalNormaliserCode(code)}`;
  if (window.crypto && crypto.subtle) {
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texte));
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
    } catch (e) { /* contexte non sécurisé : calcul en JavaScript ci-dessous */ }
  }
  return evalSha256(texte);
}
function evalInscrits(annee, classe) {
  return (((window.EVAL_ELEVES || {})[annee] || {})[classe]) || [];
}
// Le code est-il valable dans cette classe ? Renvoie son empreinte, ou null.
async function evalEmpreinteDansClasse(annee, classe, code) {
  const h = await evalEmpreinte(code, classe);
  return evalInscrits(annee, classe).includes(h) ? h : null;
}
// Classe pour laquelle ce code a été créé (null si aucune).
async function evalClasseDuCode(annee, code) {
  for (const k of EVAL_CLASSES) {
    if (await evalEmpreinteDansClasse(annee, k.key, code)) return k.key;
  }
  return null;
}
// Codes mémorisés par classe : un même appareil peut servir à l'élève de 5e et à celui de Seconde.
function evalCleCode(classe) {
  return `${EVAL_STORAGE_CODE}:${classe}`;
}
function evalLireCode(classe) {
  try { return localStorage.getItem(evalCleCode(classe)) || ""; } catch (e) { return ""; }
}
function evalEcrireCode(classe, code) {
  try { code ? localStorage.setItem(evalCleCode(classe), code) : localStorage.removeItem(evalCleCode(classe)); } catch (e) {}
}
// Versions précédentes : un seul code mémorisé, sans classe ; on le range dans sa classe.
async function evalMigrerCode(annee) {
  let ancien = "";
  try {
    ancien = localStorage.getItem(EVAL_STORAGE_CODE) || "";
    if (ancien) localStorage.removeItem(EVAL_STORAGE_CODE);
  } catch (e) { return; }
  if (!ancien) return;
  const classe = await evalClasseDuCode(annee, ancien);
  if (classe && !evalLireCode(classe)) evalEcrireCode(classe, ancien);
}
function evalEnvoi(annee, classe, id) {
  try { return (JSON.parse(localStorage.getItem(EVAL_STORAGE_ENVOIS)) || {})[`${annee}/${classe}/${id}`] || null; }
  catch (e) { return null; }
}
function evalMarquerEnvoi(annee, classe, id) {
  try {
    const envois = JSON.parse(localStorage.getItem(EVAL_STORAGE_ENVOIS)) || {};
    envois[`${annee}/${classe}/${id}`] = new Date().toISOString();
    localStorage.setItem(EVAL_STORAGE_ENVOIS, JSON.stringify(envois));
  } catch (e) {}
}

// SHA-256 en JavaScript pur, utilisé si crypto.subtle est indisponible (certaines ouvertures en file://).
function evalSha256(message) {
  const rotr = (x, n) => (x >>> n) | (x << (32 - n));
  const H = [], K = [];
  const frac = x => ((x - Math.floor(x)) * 4294967296) >>> 0;
  const estPremier = p => { for (let d = 2; d * d <= p; d++) if (p % d === 0) return false; return true; };
  for (let n = 2, i = 0; i < 64; n++) {
    if (!estPremier(n)) continue;
    if (i < 8) H[i] = frac(Math.pow(n, 1 / 2));
    K[i++] = frac(Math.pow(n, 1 / 3));
  }
  const octets = Array.from(new TextEncoder().encode(message));
  const bits = octets.length * 8;
  octets.push(0x80);
  while (octets.length % 64 !== 56) octets.push(0);
  const haut = Math.floor(bits / 4294967296), bas = bits >>> 0;
  for (let i = 3; i >= 0; i--) octets.push((haut >>> (i * 8)) & 255);
  for (let i = 3; i >= 0; i--) octets.push((bas >>> (i * 8)) & 255);
  for (let off = 0; off < octets.length; off += 64) {
    const w = new Array(64);
    for (let i = 0; i < 16; i++) {
      const j = off + 4 * i;
      w[i] = ((octets[j] << 24) | (octets[j + 1] << 16) | (octets[j + 2] << 8) | octets[j + 3]) >>> 0;
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const t1 = (h + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) >>> 0;
      const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    [a, b, c, d, e, f, g, h].forEach((v, i) => { H[i] = (H[i] + v) >>> 0; });
  }
  return H.map(x => x.toString(16).padStart(8, "0")).join("");
}

// ---------- Page liste ----------
// classe : "5e" ou "seconde" ouvre l'espace de cette classe (si son code est mémorisé) ;
// "" revient aux deux vignettes ; sans argument, l'affichage en cours est conservé.
async function loadEvaluationsPage(classe) {
  const c = document.getElementById("content");
  if (!c) return;
  if (typeof setSidebarCollapsed === "function") setSidebarCollapsed(true);
  if (typeof setActiveNav === "function") setActiveNav("evaluations");

  const annee = evalAnneeCourante();
  if (!annee) {
    c.innerHTML = `<div class="eval-page"><h1 class="eval-title">Évaluations</h1>
      <p class="eval-vide">Aucune évaluation publiée. Vérifiez que evaluations-data.js est bien chargé dans index.html, avant evaluations.js.</p></div>`;
    return;
  }
  const rendu = ++evalRendu;
  await evalMigrerCode(annee);
  if (classe !== undefined) evalEtat.actif = classe || null;

  // L'espace d'une classe ne s'ouvre qu'avec un code mémorisé et toujours valable pour elle.
  let actif = evalEtat.actif && evalLireCode(evalEtat.actif) ? evalEtat.actif : null;
  let empreinte = null;
  if (actif) {
    empreinte = await evalEmpreinteDansClasse(annee, actif, evalLireCode(actif));
    if (!empreinte) { evalEcrireCode(actif, ""); actif = null; }
  }
  if (rendu !== evalRendu) return;   // l'utilisateur a déjà changé de page
  evalEtat.actif = actif;
  if (actif) evalEtat.classe = actif;

  c.innerHTML = `
    <div class="eval-page">
      <header class="eval-head">
        <div>
          <h1 class="eval-title">Évaluations</h1>
          <p class="subtitle">${actif
            ? "Votre espace de travail : les évaluations à faire, puis celles déjà corrigées."
            : "Chaque classe a son espace : entrez votre code dans la vignette de votre classe."}</p>
        </div>
        <label class="eval-annee">Année scolaire
          <select class="eval-input" onchange="evalChangerAnnee(this.value)">
            ${evalAnnees().map(a => `<option value="${a}"${a === annee ? " selected" : ""}>${a}</option>`).join("")}
          </select>
        </label>
      </header>

      <div class="eval-vignettes${actif ? " eval-vignettes--une" : ""}">
        ${actif ? evalEspaceHtml(annee, actif, empreinte) : EVAL_CLASSES.map(k => evalVignetteHtml(annee, k)).join("")}
      </div>

      <footer class="eval-pied">
        <p>Une idée pour le site ou une erreur à signaler ?
          <button type="button" class="eval-lien" onclick="loadDemandeAmelioration()">Proposer une amélioration</button></p>
        <button type="button" class="eval-lien eval-lien--discret" onclick="loadAdministrationPage()">Espace enseignant</button>
      </footer>
    </div>`;
  c.scrollTop = 0;
}

function evalChangerAnnee(annee) {
  evalEtat.annee = annee;
  loadEvaluationsPage();
}

// Moyenne sur 20 des notes publiées des élèves inscrits dans la classe (chaque note ramenée sur 20),
// ou null. Les notes d'anciens codes (démonstration, code remplacé) ne comptent pas.
function evalMoyenneClasse(annee, classe) {
  const inscrits = new Set(evalInscrits(annee, classe));
  const valeurs = [];
  for (const ev of evalListe(annee, classe)) {
    const n = evalNotes(annee, classe, ev.id);
    if (!n) continue;
    Object.entries(n.notes).forEach(([h, x]) => { if (inscrits.has(h)) valeurs.push(x.note / ev.total * 20); });
  }
  return valeurs.length ? valeurs.reduce((a, b) => a + b, 0) / valeurs.length : null;
}
function evalMoyenneHtml(annee, classe) {
  const m = evalMoyenneClasse(annee, classe);
  return m === null
    ? `<span class="eval-vignette-moyenne eval-vignette-moyenne--vide">Pas encore de note</span>`
    : `<span class="eval-vignette-moyenne">Moyenne ${evalNombre(Math.round(m * 10) / 10)}<small>/20</small></span>`;
}

function evalVignetteHtml(annee, k) {
  const liste = evalListe(annee, k.key);
  const cloturees = liste.filter(ev => evalStatut(annee, k.key, ev) === "cloturee").length;
  const pluriel = n => (n > 1 ? "s" : "");
  return `
    <section class="eval-vignette" aria-labelledby="vignette-${k.key}">
      <div class="eval-vignette-titre">
        <h2 id="vignette-${k.key}">${k.label}</h2>
        ${evalMoyenneHtml(annee, k.key)}
      </div>
      <p class="eval-vignette-niveau">${k.niveau}, ${liste.length} évaluation${pluriel(liste.length)}${cloturees ? `, dont ${cloturees} clôturée${pluriel(cloturees)}` : ""}</p>
      ${evalLireCode(k.key)
        ? `<button type="button" class="eval-btn" onclick="loadEvaluationsPage('${k.key}')">Ouvrir mon espace</button>`
        : `<label class="eval-vignette-code" for="eval-code-${k.key}">Mon code</label>
           <div class="eval-champ-ligne">
             <input id="eval-code-${k.key}" class="eval-input" placeholder="Votre code" autocomplete="off" spellcheck="false"
                    onkeydown="if (event.key === 'Enter') evalEntrerCode('${k.key}')"
                    oninput="document.getElementById('eval-code-erreur-${k.key}').textContent = ''">
             <button type="button" class="eval-btn" onclick="evalEntrerCode('${k.key}')">Entrer</button>
           </div>
           <p class="eval-erreur" id="eval-code-erreur-${k.key}" role="alert"></p>`}
    </section>`;
}

// Espace de travail de l'élève : la vignette de sa classe, sur toute la largeur.
function evalEspaceHtml(annee, classe, empreinte) {
  const k = EVAL_CLASSES.find(x => x.key === classe) || { label: classe, niveau: "" };
  const liste = evalListe(annee, classe);
  const noteDe = ev => { const n = evalNotes(annee, classe, ev.id); return (n && n.notes[empreinte]) || null; };
  const corrigees = liste.filter(noteDe);
  const aFaire = liste.filter(ev => !noteDe(ev) && evalStatut(annee, classe, ev) === "ouverte");
  const sansCopie = liste.filter(ev => !noteDe(ev) && evalStatut(annee, classe, ev) === "cloturee");
  const groupe = (titre, evs, vide) => `
    <div class="eval-groupe">
      <h3>${titre} <span class="eval-groupe-nombre">${evs.length}</span></h3>
      ${evs.length
        ? `<div class="eval-liste">${evs.map(ev => evalLigne(annee, classe, ev, noteDe(ev))).join("")}</div>`
        : `<p class="eval-vide">${vide}</p>`}
    </div>`;
  return `
    <section class="eval-vignette eval-vignette--active" aria-labelledby="vignette-${classe}">
      <div class="eval-vignette-titre">
        <h2 id="vignette-${classe}">${k.label}</h2>
        ${evalMoyenneHtml(annee, classe)}
      </div>
      <div class="eval-espace-barre">
        <p class="eval-vignette-niveau">${k.niveau}, code ${escapeHtml(evalFormaterCode(evalLireCode(classe)))}</p>
        <div class="eval-espace-actions">
          <button type="button" class="eval-lien" onclick="loadEvaluationsPage('')">Revenir aux deux classes</button>
          <button type="button" class="eval-lien" onclick="evalOublierCode('${classe}')">Oublier mon code</button>
        </div>
      </div>
      ${groupe("À faire", aFaire, "Rien à faire pour le moment : les nouvelles évaluations arrivent le dimanche matin.")}
      ${groupe("Corrigées", corrigees, "Aucune copie corrigée pour l'instant. Les copies sont corrigées chaque dimanche matin.")}
      ${sansCopie.length ? groupe("Clôturées sans copie", sansCopie, "") : ""}
    </section>`;
}

async function evalEntrerCode(classe) {
  const input = document.getElementById(`eval-code-${classe}`);
  const err = document.getElementById(`eval-code-erreur-${classe}`);
  if (!input || !err) return;
  const code = evalNormaliserCode(input.value);
  if (code.length < 6) {
    err.textContent = "Le code comporte au moins 6 caractères : saisissez celui remis par votre enseignant.";
    input.focus();
    return;
  }
  const annee = evalAnneeCourante();
  if (!(await evalEmpreinteDansClasse(annee, classe, code))) {
    const autre = await evalClasseDuCode(annee, code);
    err.textContent = autre
      ? `Ce code est celui d'un élève de ${evalLabelClasse(autre)} : utilisez la vignette ${evalLabelClasse(autre)}.`
      : "Ce code ne correspond à aucun élève de cette classe. Vérifiez-le auprès de votre enseignant.";
    input.focus();
    return;
  }
  evalEcrireCode(classe, code);
  loadEvaluationsPage(classe);
}

function evalOublierCode(classe) {
  evalEcrireCode(classe, "");
  loadEvaluationsPage("");
}

function evalBadge(annee, classe, ev) {
  const notes = evalNotes(annee, classe, ev.id);
  if (evalStatut(annee, classe, ev) === "ouverte") return `<span class="eval-badge eval-badge--ouverte">Ouverte</span>`;
  if (!notes || !evalStatsVisibles(annee, classe)) return `<span class="eval-badge eval-badge--corrigee">Clôturée</span>`;
  const st = evalStats(notes, ev.total);
  return `<span class="eval-badge eval-badge--corrigee">Clôturée, moyenne ${evalNombre(st.moyenne)}/${evalNombre(ev.total)}</span>`;
}

// Ligne d'évaluation dans l'espace de l'élève, avec son état personnel.
function evalLigne(annee, classe, ev, note) {
  const envoye = evalEnvoi(annee, classe, ev.id);
  let etat, badge;
  if (note) {
    etat = "cloturee";
    badge = `<span class="eval-badge eval-badge--corrigee">${evalNombre(note.note)}/${evalNombre(ev.total)}</span>`;
  } else if (evalStatut(annee, classe, ev) === "cloturee") {
    etat = "cloturee";
    badge = `<span class="eval-badge eval-badge--corrigee">Clôturée</span>`;
  } else if (envoye) {
    etat = "attente";
    badge = `<span class="eval-badge eval-badge--correction">Envoyée, corrigée dimanche</span>`;
  } else {
    etat = "ouverte";
    badge = `<span class="eval-badge eval-badge--ouverte">À faire</span>`;
  }
  return `<button type="button" class="eval-row eval-row--${etat}" onclick="openEvaluation('${annee}','${classe}','${ev.id}')">
    <span class="eval-row-date">${evalDate(ev.date)}</span>
    <span class="eval-row-main">
      <span class="eval-row-titre">${escapeHtml(ev.titre)}</span>
      <span class="eval-row-chap">${escapeHtml(ev.chapitre)}, ${evalPoints(ev.total)}${ev.dureeMinutes ? `, ${ev.dureeMinutes} min conseillées` : ""}</span>
    </span>
    ${badge}
  </button>`;
}

// ---------- Saisie du code sur la fiche d'une évaluation ----------
function evalSaisieCodeHtml(intro) {
  return `<p>${intro}</p>
    <div class="eval-champ-ligne">
      <input id="eval-code-saisie" class="eval-input" placeholder="Votre code" autocomplete="off" spellcheck="false"
             aria-label="Code élève" onkeydown="if (event.key === 'Enter') evalValiderCode()" oninput="document.getElementById('eval-code-erreur').textContent = ''">
      <button type="button" class="eval-btn" onclick="evalValiderCode()">Afficher</button>
    </div>
    <p class="eval-erreur" id="eval-code-erreur" role="alert"></p>`;
}

async function evalValiderCode() {
  const input = document.getElementById("eval-code-saisie");
  const err = document.getElementById("eval-code-erreur");
  if (!input || !err) return;
  const code = evalNormaliserCode(input.value);
  if (code.length < 6) {
    err.textContent = "Le code comporte au moins 6 caractères : saisissez celui remis par votre enseignant.";
    input.focus();
    return;
  }
  const classe = await evalClasseDuCode(evalAnneeCourante(), code);
  if (!classe) {
    err.textContent = "Ce code ne correspond à aucun élève. Vérifiez-le auprès de votre enseignant.";
    input.focus();
    return;
  }
  evalEcrireCode(classe, code);
  if (typeof evalApresCode === "function") evalApresCode();
}

function evalChangerCodeFiche(classe) {
  evalEcrireCode(classe, "");
  if (typeof evalApresCode === "function") evalApresCode();
}

// ---------- Page d'une évaluation ----------
async function openEvaluation(annee, classe, id) {
  const c = document.getElementById("content");
  const ev = evalTrouver(annee, classe, id);
  if (!c) return;
  if (!ev) { loadEvaluationsPage(); return; }
  evalEtat.annee = annee;
  evalEtat.classe = classe;
  if (typeof setSidebarCollapsed === "function") setSidebarCollapsed(true);
  if (typeof setActiveNav === "function") setActiveNav("evaluations");

  const statut = evalStatut(annee, classe, ev);
  const label = escapeHtml(evalLabelClasse(classe));
  const notes = evalNotes(annee, classe, id);
  // Note personnelle si le code mémorisé appartient à cette classe
  const rendu = ++evalRendu;
  const code = evalLireCode(classe);
  const emp = code ? await evalEmpreinteDansClasse(annee, classe, code) : null;
  if (rendu !== evalRendu) return;
  const maNote = emp && notes ? notes.notes[emp] || null : null;
  const envoye = evalEnvoi(annee, classe, id);

  let corps;
  if (statut === "cloturee") {
    corps = (notes ? `<section class="eval-resultats">${evalResultatsHtml(ev, notes, "cloturee", evalStatsVisibles(annee, classe))}</section>` : "")
      + `<p class="eval-info eval-info--neutre">Évaluation clôturée : le corrigé est affiché sous chaque question.</p>`
      + evalQuestionsLectureHtml(ev, true);
  } else if (maNote) {
    corps = `<section class="eval-resultats">${evalResultatsHtml(ev, notes, "ouverte", evalStatsVisibles(annee, classe))}</section>`
      + `<p class="eval-info eval-info--neutre">Votre copie est corrigée. Le corrigé détaillé sera publié quand l'évaluation sera clôturée.</p>`
      + evalQuestionsLectureHtml(ev, false);
  } else {
    corps = (envoye ? `<p class="eval-info eval-info--neutre">Réponses envoyées le ${evalDate(envoye.slice(0, 10), true)}. Elles seront corrigées au prochain passage, le dimanche matin ; un nouvel envoi d'ici là remplace le précédent.</p>` : "")
      + evalFormulaireHtml(annee, classe, ev);
  }

  c.innerHTML = `
    <div class="eval-page eval-detail">
      <button type="button" class="eval-lien eval-retour" onclick="loadEvaluationsPage('${classe}')">Retour aux évaluations de ${label}</button>
      <header class="eval-detail-head">
        <p class="eval-detail-chap">${label}, ${escapeHtml(ev.chapitre)}</p>
        <h1 class="eval-title">${escapeHtml(ev.titre)}</h1>
        <p class="eval-detail-meta">Publiée le ${evalDate(ev.date, true)}. Total : ${evalPoints(ev.total)}.</p>
        <div class="eval-detail-etiquettes">
          ${evalBadge(annee, classe, ev)}
          ${ev.dureeMinutes ? `<span class="eval-duree">Durée conseillée : ${ev.dureeMinutes} minutes</span>` : ""}
        </div>
      </header>
      ${ev.consignes ? `<div class="eval-consignes">${ev.consignes}</div>` : ""}
      ${corps}
    </div>`;

  if (statut === "ouverte" && !maNote) evalRenderTurnstile("eval-turnstile");
  if (document.getElementById("eval-ma-note")) {
    evalApresCode = () => openEvaluation(annee, classe, id);
    evalAfficherMaNote(annee, classe, ev);
  }
  c.scrollTop = 0;
}

function evalQuestionTete(q, i) {
  return `<div class="eval-q-tete"><span class="eval-q-num">Question ${i + 1}</span><span class="eval-q-pts">${evalPoints(q.points)}</span></div>
    <div class="eval-q-enonce">${q.enonce}</div>`;
}

function evalQuestionsLectureHtml(ev, avecCorrige) {
  return `<ol class="eval-questions">${ev.questions.map((q, i) => `
    <li class="eval-question">
      ${evalQuestionTete(q, i)}
      ${q.type === "qcm" ? `<ul class="eval-choix-lecture">${q.choix.map(ch => `<li>${escapeHtml(ch)}</li>`).join("")}</ul>` : ""}
      ${avecCorrige && ev.corrige && ev.corrige[q.id]
        ? `<div class="eval-corrige"><p class="eval-corrige-lib">Correction</p>${ev.corrige[q.id]}</div>` : ""}
    </li>`).join("")}</ol>`;
}

function evalResultatsHtml(ev, notes, statut, avecStats) {
  if (!avecStats) return `<div id="eval-ma-note" class="eval-ma-note eval-ma-note--seule"></div>`;
  const st = evalStats(notes, ev.total);
  const haut = Math.max(...st.tranches, 1);
  const pas = ev.total / 4;
  const libelles = [0, 1, 2, 3].map(i => `${evalNombre(i * pas)} à ${evalNombre((i + 1) * pas)}`);
  const resume = st.tranches.map((n, i) => `${n} entre ${libelles[i]}`).join(", ");
  return `
    <h2>Résultats de la classe <small>(${st.n} copie${st.n > 1 ? "s" : ""} corrigée${st.n > 1 ? "s" : ""}${statut === "ouverte" ? ", résultats provisoires" : ""})</small></h2>
    <div class="eval-resultats-corps">
      <dl class="eval-stats">
        <div><dt>Moyenne</dt><dd>${evalNombre(st.moyenne)}<small>/${evalNombre(ev.total)}</small></dd></div>
        <div><dt>Plus basse</dt><dd>${evalNombre(st.min)}</dd></div>
        <div><dt>Plus haute</dt><dd>${evalNombre(st.max)}</dd></div>
        <div><dt>Copies</dt><dd>${st.n}</dd></div>
      </dl>
      <div class="eval-histo" role="img" aria-label="Répartition des notes : ${resume}">
        ${st.tranches.map((n, i) => `
          <div class="eval-histo-col">
            <span class="eval-histo-n">${n}</span>
            <span class="eval-histo-piste"><span class="eval-histo-barre" style="height:${Math.round(n / haut * 100)}%"></span></span>
            <span class="eval-histo-lib">${libelles[i]}</span>
          </div>`).join("")}
      </div>
    </div>
    <div id="eval-ma-note" class="eval-ma-note"></div>`;
}

async function evalAfficherMaNote(annee, classe, ev) {
  const zone = document.getElementById("eval-ma-note");
  if (!zone) return;
  const code = evalLireCode(classe);
  if (!code) {
    zone.innerHTML = `<h3>Ma note</h3>${evalSaisieCodeHtml("Saisissez votre code pour afficher votre note et le commentaire.")}`;
    return;
  }
  const emp = await evalEmpreinteDansClasse(annee, classe, code);
  const n = emp ? evalNotes(annee, classe, ev.id).notes[emp] : null;
  const autreClasse = !emp;
  zone.innerHTML = `<h3>Ma note</h3>
    ${autreClasse
      ? `<p>Le code ${evalFormaterCode(code)} n'appartient pas à la classe de ${escapeHtml(evalLabelClasse(classe))}.</p>`
      : n
        ? `<p class="eval-ma-note-val">${evalNombre(n.note)}<small>/${evalNombre(ev.total)}</small></p>
           ${n.reponduLe ? `<p class="eval-ma-note-date">Répondu le ${evalDate(n.reponduLe.slice(0, 10), true)}${n.corrigeLe ? `, corrigé le ${evalDate(n.corrigeLe, true)}` : ""}.</p>` : ""}
           ${n.commentaire ? `<p class="eval-ma-note-com">${escapeHtml(n.commentaire)}</p>` : ""}`
        : `<p>Pas encore de copie corrigée pour le code ${evalFormaterCode(code)}.</p>`}
    <button type="button" class="eval-lien" onclick="evalChangerCodeFiche('${classe}')">Changer de code</button>`;
}

// ---------- Formulaire de réponse ----------
function evalChampHtml(q) {
  if (q.type === "qcm") {
    return `<div class="eval-choix" role="radiogroup">${q.choix.map((ch, j) => `
      <label class="eval-choix-item"><input type="radio" name="${q.id}" value="${j}"><span>${escapeHtml(ch)}</span></label>`).join("")}
    </div>`;
  }
  if (q.type === "numerique") {
    return `<input class="eval-input eval-input--court" name="${q.id}" inputmode="decimal" autocomplete="off" aria-label="Votre réponse">`;
  }
  return `<textarea class="eval-input" name="${q.id}" rows="4" aria-label="Votre réponse"></textarea>`;
}

function evalFormulaireHtml(annee, classe, ev) {
  const code = evalLireCode(classe);
  return `
    <form id="eval-form" class="eval-form" novalidate
          onsubmit="event.preventDefault(); evalEnvoyerReponses('${annee}','${classe}','${ev.id}')">
      <ol class="eval-questions">${ev.questions.map((q, i) => `
        <li class="eval-question">${evalQuestionTete(q, i)}${evalChampHtml(q)}</li>`).join("")}
      </ol>
      <fieldset class="eval-identite">
        <legend>Vos informations</legend>
        <label>Prénom<input name="prenom" class="eval-input" autocomplete="given-name"></label>
        <label>Code élève<input name="code" class="eval-input" placeholder="Votre code" autocomplete="off" spellcheck="false"
               value="${code ? evalFormaterCode(code) : ""}"></label>
      </fieldset>
      <div id="eval-turnstile" class="eval-turnstile"></div>
      <div class="eval-actions">
        <button type="submit" class="eval-btn">Envoyer mes réponses</button>
        ${EVAL_CONFIG.workerUrl ? "" : `<p class="eval-mode">L'envoi ouvre votre messagerie avec vos réponses déjà rédigées.</p>`}
      </div>
      <p class="eval-erreur" id="eval-form-erreur" role="alert"></p>
      <p class="eval-succes" id="eval-form-succes" role="status"></p>
    </form>`;
}

function evalErreurChamp(zone, message, champ) {
  zone.textContent = message;
  if (champ) champ.focus();
}

async function evalEnvoyerReponses(annee, classe, id) {
  const ev = evalTrouver(annee, classe, id);
  const form = document.getElementById("eval-form");
  const err = document.getElementById("eval-form-erreur");
  const ok = document.getElementById("eval-form-succes");
  if (!ev || !form) return;
  err.textContent = "";
  ok.textContent = "";

  const prenom = form.elements.prenom.value.trim();
  const code = evalNormaliserCode(form.elements.code.value);
  if (!prenom) return evalErreurChamp(err, "Indiquez votre prénom.", form.elements.prenom);
  if (code.length < 6) return evalErreurChamp(err, "Indiquez votre code élève (au moins 6 caractères), remis par votre enseignant.", form.elements.code);

  if (evalInscrits(annee, classe).length && !(await evalEmpreinteDansClasse(annee, classe, code))) {
    const classeCode = await evalClasseDuCode(annee, code);
    return evalErreurChamp(err, classeCode
      ? `Ce code a été créé pour la classe de ${evalLabelClasse(classeCode)} : il n'est pas valable en ${evalLabelClasse(classe)}.`
      : "Ce code ne correspond à aucun élève. Vérifiez-le auprès de votre enseignant.", form.elements.code);
  }

  const reponses = ev.questions.map(q => {
    let valeur = "";
    if (q.type === "qcm") {
      const coche = form.querySelector(`input[name="${q.id}"]:checked`);
      valeur = coche ? q.choix[Number(coche.value)] : "";
    } else {
      valeur = form.elements[q.id].value.trim();
    }
    return { question: q.id, reponse: valeur };
  });
  const vides = reponses.filter(r => !r.reponse).length;
  if (vides && !confirm(`${vides} question${vides > 1 ? "s" : ""} sans réponse. Envoyer quand même ?`)) return;

  const message = {
    type: "reponse-evaluation",
    annee, classe, evaluation: id, titre: ev.titre,
    prenom, code: evalFormaterCode(code),
    reponses,
    envoyeLe: new Date().toISOString(),
  };
  const corps = [
    `Évaluation : ${ev.titre} (${id})`,
    `Classe : ${evalLabelClasse(classe)}, année ${annee}`,
    `Prénom : ${prenom}`,
    `Code : ${message.code}`,
    "",
    ...reponses.map((r, i) => `Question ${i + 1} : ${r.reponse || "(sans réponse)"}`),
  ].join("\n");

  const bouton = form.querySelector("button[type=submit]");
  bouton.disabled = true;
  try {
    const mode = await evalExpedier(message, `[MathSite] Réponses ${evalLabelClasse(classe)}, ${ev.titre}, ${message.code}`, corps);
    evalEcrireCode(classe, code);
    if (mode === "mail") {
      ok.textContent = "Votre messagerie s'ouvre avec vos réponses : relisez le message puis cliquez sur Envoyer.";
    } else {
      evalMarquerEnvoi(annee, classe, id);
      ok.textContent = "Réponses envoyées. Elles seront corrigées dimanche matin ; votre note apparaîtra alors sur cette page.";
    }
  } catch (e) {
    err.textContent = e.message;
  } finally {
    bouton.disabled = false;
  }
}

// ---------- Demande d'amélioration ----------
function loadDemandeAmelioration() {
  const c = document.getElementById("content");
  if (!c) return;
  evalRendu++;
  if (typeof setSidebarCollapsed === "function") setSidebarCollapsed(true);
  if (typeof setActiveNav === "function") setActiveNav("evaluations");
  c.innerHTML = `
    <div class="eval-page eval-detail">
      <button type="button" class="eval-lien eval-retour" onclick="loadEvaluationsPage()">Retour aux évaluations</button>
      <h1 class="eval-title">Proposer une amélioration</h1>
      <p class="subtitle">Une erreur dans une fiche, une notion qui manque, une idée de page : décrivez-la en quelques lignes.</p>
      <form id="amelio-form" class="eval-form eval-form--etroit" novalidate onsubmit="event.preventDefault(); evalEnvoyerAmelioration()">
        <label>Type de demande
          <select name="categorie" class="eval-input">
            <option>Idée d'amélioration</option>
            <option>Erreur à corriger</option>
            <option>Autre</option>
          </select>
        </label>
        <label>Page ou notion concernée (facultatif)
          <input name="page" class="eval-input" placeholder="Par exemple : fiche sur le théorème de Pythagore">
        </label>
        <label>Votre message
          <textarea name="message" class="eval-input" rows="7"></textarea>
        </label>
        <label>Prénom (facultatif)
          <input name="prenom" class="eval-input" autocomplete="given-name">
        </label>
        <div id="amelio-turnstile" class="eval-turnstile"></div>
        <div class="eval-actions">
          <button type="submit" class="eval-btn">Envoyer la demande</button>
          ${EVAL_CONFIG.workerUrl ? "" : `<p class="eval-mode">L'envoi ouvre votre messagerie avec le message déjà rédigé.</p>`}
        </div>
        <p class="eval-erreur" id="amelio-erreur" role="alert"></p>
        <p class="eval-succes" id="amelio-succes" role="status"></p>
      </form>
    </div>`;
  evalRenderTurnstile("amelio-turnstile");
  c.scrollTop = 0;
}

async function evalEnvoyerAmelioration() {
  const form = document.getElementById("amelio-form");
  const err = document.getElementById("amelio-erreur");
  const ok = document.getElementById("amelio-succes");
  if (!form) return;
  err.textContent = "";
  ok.textContent = "";
  const texte = form.elements.message.value.trim();
  if (texte.length < 10) return evalErreurChamp(err, "Décrivez votre demande en une phrase au moins.", form.elements.message);

  const message = {
    type: "amelioration",
    categorie: form.elements.categorie.value,
    page: form.elements.page.value.trim(),
    message: texte,
    prenom: form.elements.prenom.value.trim(),
    envoyeLe: new Date().toISOString(),
  };
  const corps = [
    `Type : ${message.categorie}`,
    message.page ? `Page concernée : ${message.page}` : "",
    message.prenom ? `Prénom : ${message.prenom}` : "",
    "",
    texte,
  ].filter((l, i) => l || i === 3).join("\n");

  const bouton = form.querySelector("button[type=submit]");
  bouton.disabled = true;
  try {
    const mode = await evalExpedier(message, `[MathSite] ${message.categorie}${message.page ? ` : ${message.page}` : ""}`, corps);
    if (mode === "mail") {
      ok.textContent = "Votre messagerie s'ouvre avec la demande : relisez-la puis cliquez sur Envoyer.";
    } else {
      form.reset();
      ok.textContent = "Demande envoyée. Merci !";
    }
  } catch (e) {
    err.textContent = e.message;
  } finally {
    bouton.disabled = false;
  }
}

function evalOuvrirLien(url) {
  window.location.href = url;
}

// ---------- Expédition : messagerie (étape 1) ou Worker Cloudflare (étape 2) ----------
async function evalExpedier(message, sujet, corps) {
  if (!EVAL_CONFIG.workerUrl) {
    evalOuvrirLien(`mailto:${EVAL_CONFIG.emailContact}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`);
    return "mail";
  }
  if (EVAL_CONFIG.turnstileSiteKey && !evalTurnstileJeton) {
    throw new Error("Attendez la fin de la vérification anti-robot (ou cochez la case) avant d'envoyer.");
  }
  let res;
  try {
    res = await fetch(EVAL_CONFIG.workerUrl.replace(/\/$/, "") + "/envoyer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...message, jeton: evalTurnstileJeton }),
    });
  } catch (e) {
    throw new Error("Envoi impossible : vérifiez votre connexion Internet puis réessayez.");
  } finally {
    // Un jeton Turnstile ne sert qu'une fois : on en redemande un pour l'envoi suivant.
    if (window.turnstile && evalTurnstileWidget !== null) {
      evalTurnstileJeton = null;
      window.turnstile.reset(evalTurnstileWidget);
    }
  }
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).erreur || ""; } catch (e) {}
    throw new Error(detail || `L'envoi a échoué (erreur ${res.status}). Réessayez dans quelques minutes.`);
  }
  return "worker";
}

function evalRenderTurnstile(idConteneur) {
  evalTurnstileJeton = null;
  evalTurnstileWidget = null;
  if (!EVAL_CONFIG.workerUrl || !EVAL_CONFIG.turnstileSiteKey) return;
  // Le script Turnstile est chargé en asynchrone (index.html) : s'il n'est pas encore prêt,
  // evalTurnstilePret() fera le rendu à son arrivée.
  if (!window.turnstile) {
    evalTurnstileEnAttente = idConteneur;
    evalChargerTurnstile();
    return;
  }
  evalTurnstileEnAttente = null;
  evalTurnstileWidget = window.turnstile.render("#" + idConteneur, {
    sitekey: EVAL_CONFIG.turnstileSiteKey,
    theme: "dark",
    language: "fr",
    callback: jeton => { evalTurnstileJeton = jeton; },
    "expired-callback": () => { evalTurnstileJeton = null; },
  });
}

// Appelée par le script Turnstile une fois chargé (paramètre onload dans index.html).
function evalTurnstilePret() {
  if (evalTurnstileEnAttente && document.getElementById(evalTurnstileEnAttente)) evalRenderTurnstile(evalTurnstileEnAttente);
}

// Charge le script Turnstile s'il n'est pas déjà dans la page (index.html peut l'omettre).
function evalChargerTurnstile() {
  if (document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) return;
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=evalTurnstilePret";
  script.async = true;
  script.onerror = () => {
    const zone = document.getElementById(evalTurnstileEnAttente || "");
    if (zone) zone.innerHTML = `<p class="eval-erreur">La vérification anti-robot n'a pas pu se charger. Désactivez un éventuel bloqueur de publicités pour ce site, puis rechargez la page.</p>`;
  };
  document.head.appendChild(script);
}

// ---------- Espace enseignant : lancer l'agent sans passer par GitHub ----------
const EVAL_STORAGE_ADMIN = "mathsite-admin";
let evalSuiviAgent = 0;   // identifiant de la boucle de suivi en cours (0 = aucune)

function evalMotDePasseAdmin() {
  try { return sessionStorage.getItem(EVAL_STORAGE_ADMIN) || ""; } catch (e) { return ""; }
}
function evalEcrireMotDePasseAdmin(m) {
  try { m ? sessionStorage.setItem(EVAL_STORAGE_ADMIN, m) : sessionStorage.removeItem(EVAL_STORAGE_ADMIN); } catch (e) {}
}

async function evalAppelWorker(chemin, corps) {
  let res;
  try {
    res = await fetch(EVAL_CONFIG.workerUrl.replace(/\/$/, "") + chemin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corps),
    });
  } catch (e) {
    throw new Error("Le serveur est injoignable : vérifiez votre connexion Internet.");
  }
  let donnees = {};
  try { donnees = await res.json(); } catch (e) {}
  if (!res.ok) {
    const err = new Error(donnees.erreur || `Erreur ${res.status}.`);
    err.statut = res.status;
    throw err;
  }
  return donnees;
}

function loadAdministrationPage() {
  const c = document.getElementById("content");
  if (!c) return;
  evalRendu++;
  evalSuiviAgent = 0;
  if (typeof setSidebarCollapsed === "function") setSidebarCollapsed(true);
  if (typeof setActiveNav === "function") setActiveNav("evaluations");
  const entete = `
    <button type="button" class="eval-lien eval-retour" onclick="loadEvaluationsPage()">Retour aux évaluations</button>
    <h1 class="eval-title">Espace enseignant</h1>
    <p class="subtitle">Lancer l'agent de correction sans passer par GitHub et suivre ses passages.</p>`;

  if (!EVAL_CONFIG.workerUrl) {
    c.innerHTML = `<div class="eval-page eval-detail">${entete}<p class="eval-info">Le Worker n'est pas configuré (EVAL_CONFIG.workerUrl).</p></div>`;
    return;
  }
  if (!evalMotDePasseAdmin()) {
    c.innerHTML = `
      <div class="eval-page eval-detail">${entete}
        <form id="admin-connexion" class="eval-form eval-form--etroit" novalidate onsubmit="event.preventDefault(); evalConnexionAdmin()">
          <label>Mot de passe
            <input name="motDePasse" type="password" class="eval-input" autocomplete="current-password">
          </label>
          <div class="eval-actions"><button type="submit" class="eval-btn">Se connecter</button></div>
          <p class="eval-erreur" id="admin-erreur" role="alert"></p>
        </form>
      </div>`;
    const champ = document.querySelector("#admin-connexion input");
    if (champ) champ.focus();
    c.scrollTop = 0;
    return;
  }

  const annee = evalAnneeCourante();
  const ouvertes = EVAL_CLASSES.flatMap(k => evalListe(annee, k.key)
    .filter(ev => evalStatut(annee, k.key, ev) === "ouverte")
    .map(ev => `<option value="${ev.id}">${escapeHtml(k.label)} : ${escapeHtml(ev.titre)} (publiée le ${evalDate(ev.date)})</option>`));

  c.innerHTML = `
    <div class="eval-page eval-detail">${entete}
      <section class="eval-admin-bloc">
        <h2>Lancer l'agent maintenant</h2>
        <p class="eval-admin-aide">Sans option, l'agent corrige toutes les copies reçues depuis son dernier passage. Il passe de lui-même chaque dimanche à 5 h et crée alors le lot de la semaine.</p>
        <form id="admin-lancer" class="eval-form eval-form--etroit" novalidate onsubmit="event.preventDefault(); evalLancerAgent()">
          <label class="eval-case">
            <input type="checkbox" name="lot_hebdomadaire">
            <span>Créer maintenant le lot de la semaine (4 évaluations par classe)</span>
          </label>
          <label>Clôturer une évaluation (plus de réponses acceptées, corrigé publié)
            <select name="cloturer" class="eval-input">
              <option value="">Aucune évaluation</option>
              ${ouvertes.join("")}
            </select>
          </label>
          <label>Créer une évaluation supplémentaire
            <select name="generer_classe" class="eval-input" onchange="document.getElementById('admin-sujet').disabled = !this.value">
              <option value="">Non</option>
              ${EVAL_CLASSES.map(k => `<option value="${k.key}">${k.label}</option>`).join("")}
            </select>
          </label>
          <label>Sujet de la nouvelle évaluation (facultatif)
            <input id="admin-sujet" name="generer_sujet" class="eval-input" maxlength="120" disabled
                   placeholder="Vide : l'agent choisit la notion suivante">
          </label>
          <div id="admin-turnstile" class="eval-turnstile"></div>
          <div class="eval-actions"><button type="submit" class="eval-btn">Lancer l'agent</button></div>
          <p class="eval-erreur" id="admin-erreur" role="alert"></p>
          <p class="eval-succes" id="admin-succes" role="status"></p>
        </form>
      </section>
      <section class="eval-admin-bloc">
        <div class="eval-admin-titre">
          <h2>Derniers passages</h2>
          <button type="button" class="eval-lien" onclick="evalAfficherPassages()">Actualiser</button>
        </div>
        <div id="admin-passages"><p class="eval-admin-aide">Chargement…</p></div>
      </section>
      <button type="button" class="eval-lien eval-lien--discret" onclick="evalDeconnexionAdmin()">Se déconnecter</button>
    </div>`;
  evalRenderTurnstile("admin-turnstile");
  evalAfficherPassages();
  c.scrollTop = 0;
}

async function evalConnexionAdmin() {
  const form = document.getElementById("admin-connexion");
  const err = document.getElementById("admin-erreur");
  const motDePasse = form.elements.motDePasse.value;
  err.textContent = "";
  if (!motDePasse) { err.textContent = "Saisissez le mot de passe."; return; }
  const bouton = form.querySelector("button");
  bouton.disabled = true;
  try {
    await evalAppelWorker("/agent/etat", { motDePasse });
    evalEcrireMotDePasseAdmin(motDePasse);
    loadAdministrationPage();
  } catch (e) {
    err.textContent = e.message;
    form.elements.motDePasse.select();
  } finally {
    bouton.disabled = false;
  }
}

function evalDeconnexionAdmin() {
  evalEcrireMotDePasseAdmin("");
  loadEvaluationsPage();
}

async function evalLancerAgent() {
  const form = document.getElementById("admin-lancer");
  const err = document.getElementById("admin-erreur");
  const ok = document.getElementById("admin-succes");
  err.textContent = "";
  ok.textContent = "";
  if (EVAL_CONFIG.turnstileSiteKey && !evalTurnstileJeton) {
    err.textContent = "Attendez la fin de la vérification anti-robot (ou cochez la case) avant de lancer.";
    return;
  }
  const bouton = form.querySelector("button[type=submit]");
  bouton.disabled = true;
  try {
    await evalAppelWorker("/agent/lancer", {
      motDePasse: evalMotDePasseAdmin(),
      jeton: evalTurnstileJeton,
      cloturer: form.elements.cloturer.value,
      lot_hebdomadaire: form.elements.lot_hebdomadaire.checked,
      generer_classe: form.elements.generer_classe.value,
      generer_sujet: form.elements.generer_classe.value ? form.elements.generer_sujet.value.trim() : "",
    });
    ok.textContent = form.elements.lot_hebdomadaire.checked
      ? "Agent lancé. Son passage apparaît ci-dessous dans quelques secondes ; avec le lot de la semaine, il peut durer 15 à 40 minutes."
      : "Agent lancé. Son passage apparaît ci-dessous dans quelques secondes et prend en général 3 à 10 minutes.";
    setTimeout(() => evalAfficherPassages(true), 4000);
  } catch (e) {
    if (e.statut === 401) { evalEcrireMotDePasseAdmin(""); loadAdministrationPage(); return; }
    err.textContent = e.message;
  } finally {
    bouton.disabled = false;
    if (window.turnstile && evalTurnstileWidget !== null) {
      evalTurnstileJeton = null;
      window.turnstile.reset(evalTurnstileWidget);
    }
  }
}

function evalLibellePassage(p) {
  if (p.statut !== "completed") {
    return p.statut === "in_progress"
      ? `<span class="eval-badge eval-badge--ouverte">En cours</span>`
      : `<span class="eval-badge eval-badge--correction">En attente</span>`;
  }
  if (p.conclusion === "success") return `<span class="eval-badge eval-badge--corrigee">Réussi</span>`;
  if (p.conclusion === "cancelled" || p.conclusion === "skipped") return `<span class="eval-badge eval-badge--correction">Annulé</span>`;
  return `<span class="eval-badge eval-badge--echec">Échec</span>`;
}

// Affiche la dernière publication du site et les derniers passages de l'agent ; si l'un d'eux est
// en cours (ou si « suivre » vient d'un lancement), réinterroge toutes les 15 secondes tant que la
// page est affichée.
async function evalAfficherPassages(suivre) {
  const zone = document.getElementById("admin-passages");
  if (!zone) return;
  const boucle = ++evalSuiviAgent;
  let passages, publication;
  try {
    const etat = await evalAppelWorker("/agent/etat", { motDePasse: evalMotDePasseAdmin() });
    passages = etat.passages || [];
    publication = etat.publication || null;
  } catch (e) {
    if (e.statut === 401) { evalEcrireMotDePasseAdmin(""); loadAdministrationPage(); return; }
    zone.innerHTML = `<p class="eval-erreur">${escapeHtml(e.message)}</p>`;
    return;
  }
  if (boucle !== evalSuiviAgent || !document.getElementById("admin-passages")) return;
  zone.innerHTML = evalPublicationHtml(publication) + (passages.length ? `<ul class="eval-admin-passages">${passages.map(p => `
    <li>
      <span class="eval-admin-quand">${new Date(p.debut).toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" })}</span>
      <span class="eval-admin-type">${p.declencheur === "schedule" ? "Passage planifié" : "Lancement manuel"}</span>
      ${evalLibellePassage(p)}
      <a class="eval-lien" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Détail</a>
    </li>`).join("")}</ul>`
    : `<p class="eval-admin-aide">Aucun passage pour l'instant.</p>`);

  const enCours = passages.some(p => p.statut !== "completed") || (publication && publication.statut !== "completed");
  if (enCours || suivre) {
    setTimeout(() => { if (boucle === evalSuiviAgent) evalAfficherPassages(suivre && !enCours ? false : enCours); }, 15000);
  }
}

// Encadré « Publication du site » : après un passage réussi, l'agent lance static.yml. Une fois
// cette publication terminée, le cache de GitHub Pages peut encore servir l'ancienne version
// jusqu'à 10 minutes.
function evalPublicationHtml(p) {
  if (!p) return "";
  const heure = iso => new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  let badge, texte;
  if (p.statut !== "completed") {
    badge = `<span class="eval-badge eval-badge--ouverte">${p.statut === "in_progress" ? "En cours" : "En attente"}</span>`;
    texte = "Le site est en cours de publication. Comptez encore une à deux minutes, puis jusqu'à 10 minutes de cache.";
  } else if (p.conclusion === "success") {
    const fin = new Date(p.maj);
    const limite = new Date(fin.getTime() + 10 * 60000);
    badge = `<span class="eval-badge eval-badge--corrigee">Terminée à ${heure(p.maj)}</span>`;
    texte = Date.now() < limite.getTime()
      ? `Les changements seront visibles au plus tard vers ${heure(limite.toISOString())} (cache de GitHub Pages). Rechargez alors la page avec Ctrl + Maj + R.`
      : "Le site est à jour. Si une page affiche encore l'ancienne version, rechargez-la avec Ctrl + Maj + R.";
  } else {
    badge = `<span class="eval-badge eval-badge--echec">Échec</span>`;
    texte = "La dernière publication a échoué : le site n'a pas été mis à jour. Ouvrez le détail pour voir l'erreur.";
  }
  return `
    <div class="eval-admin-publication">
      <div class="eval-admin-publication-tete"><strong>Publication du site</strong>${badge}
        <a class="eval-lien" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Détail</a></div>
      <p class="eval-admin-aide">${texte}</p>
    </div>`;
}
