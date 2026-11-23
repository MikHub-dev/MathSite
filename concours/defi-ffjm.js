/* defi-ffjm.js — défi chronométré sur les fiches de résolution FFJM (concours/ffjm-*-fiche-*.html).
   - Sur une fiche : bouton « ⏱ Relever le défi chronométré ». La réponse et la résolution sont masquées,
     un chronomètre démarre (temps conseillé d'après le coefficient), l'élève saisit sa réponse.
     Vérification automatique quand les nombres de la réponse officielle sont tous retrouvés ;
     sinon la réponse officielle s'affiche et l'élève dit lui-même s'il avait juste.
   - Sur une page d'année (ffjm-AAAA-quarts.html) : un ✓ (et le meilleur temps) suit chaque fiche réussie.
   Résultats gardés sur l'appareil : localStorage « famzak:mathsite:ffjm » = { "<fiche>": {ok, sec, date, essais} }. */
(function () {
  "use strict";
  var CLE = "famzak:mathsite:ffjm";
  function lire() { try { return JSON.parse(localStorage.getItem(CLE)) || {}; } catch (e) { return {}; } }
  function ecrire(v) { try { localStorage.setItem(CLE, JSON.stringify(v)); } catch (e) {} }
  function duree(s) { var m = Math.floor(s / 60), r = s % 60; return (m ? m + " min " : "") + (r < 10 && m ? "0" : "") + r + " s"; }
  var page = location.pathname.split("/").pop().replace(/\.html$/, "");

  function css() {
    var s = document.createElement("style");
    s.textContent =
      ".defi{background:#fffbeb;border:1px solid #fde68a;border-left:5px solid #f59e0b;border-radius:6px;padding:14px 18px;margin:0 0 24px;font-size:15.5px}" +
      ".defi .dt{font-weight:700;color:#92400e;margin-bottom:6px}" +
      ".defi button{font:inherit;cursor:pointer;border-radius:6px;padding:7px 14px;border:1px solid #d97706;background:#f59e0b;color:#fff;font-weight:700;margin:6px 8px 0 0}" +
      ".defi button.alt{background:#fff;color:#92400e}" +
      ".defi input{font:inherit;padding:7px 10px;border:1px solid #d6d3d1;border-radius:6px;min-width:min(100%,320px)}" +
      ".defi .chrono{font:700 28px/1.1 'DejaVu Sans Mono',Consolas,monospace;color:#0f172a;margin:6px 0}" +
      ".defi .chrono.depasse{color:#dc2626}" +
      ".defi .barre{height:6px;background:#fde68a;border-radius:99px;overflow:hidden;margin:4px 0 10px}" +
      ".defi .barre i{display:block;height:100%;width:0;background:#f59e0b}" +
      ".defi .res{margin-top:10px;padding:10px 12px;border-radius:6px}" +
      ".defi .res.ok{background:#f0fdf4;border:1px solid #bbf7d0;color:#14532d}" +
      ".defi .res.ko{background:#fef2f2;border:1px solid #fecaca;color:#7f1d1d}" +
      ".defi .res.neutre{background:#f8fafc;border:1px solid #e5e9f0}" +
      ".defi small{color:#78716c}" +
      ".defi-cache{display:none!important}" +
      ".defi-ok{display:inline-block;margin-left:8px;padding:1px 8px;border-radius:99px;background:#dcfce7;color:#166534;font-size:13px;font-weight:700}" +
      ".defi-bilan{background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:10px 14px;margin:10px 0 18px}" +
      "@media print{.defi,.defi-bilan,.defi-ok{display:none!important}.defi-cache{display:block!important}}";
    document.head.appendChild(s);
  }

  /* ---------- Comparaison des réponses ---------- */
  function nombres(t) {
    t = String(t).replace(/(\d)[\s  ](?=\d{3}(\D|$))/g, "$1").replace(/(\d),(\d)/g, "$1.$2");
    return (t.match(/\d+(?:\.\d+)?/g) || []).map(Number);
  }
  function contient(u, e) {
    var reste = u.slice();
    return e.every(function (x) {
      var k = reste.findIndex(function (y) { return Math.abs(y - x) <= 1e-9 * Math.max(1, Math.abs(x)); });
      if (k < 0) return false; reste.splice(k, 1); return true;
    });
  }
  // true : juste ; false : faux ; null : impossible à juger automatiquement
  function juger(saisie, officielle) {
    var e = nombres(officielle), u = nombres(saisie);
    if (!e.length) return null;
    if (!u.length) return false;
    if (contient(u, e)) return true;
    // « 2 solutions : 1296 et 2025 » : le nombre de solutions peut être omis
    if (/solution/i.test(officielle) && e.length > 1 && contient(u, e.slice(1))) return true;
    // une seule valeur attendue après « = » ou « ≈ » (ex. « x ≈ 170 m », « N = 16 »)
    var apres = officielle.split(/[=≈]/);
    if (apres.length === 2 && nombres(apres[0]).length === 0) return contient(u, nombres(apres[1]));
    return u.length === 1 && e.length > 1 ? null : false;
  }

  /* ---------- Page d'année : ✓ à côté des fiches réussies ---------- */
  function pageAnnee() {
    var r = lire(), liens = document.querySelectorAll('a[href*="-fiche-"]'), n = 0, ok = 0;
    liens.forEach(function (a) {
      var f = a.getAttribute("href").split("#")[0].replace(/\.html$/, ""), x = r[f];
      n++;
      if (x && x.ok) { ok++; var s = document.createElement("span"); s.className = "defi-ok"; s.textContent = "⏱ ✓ " + duree(x.sec); s.title = "Défi chronométré réussi (meilleur temps)"; a.after(s); }
    });
    if (n && ok) {
      var h = document.querySelector("h1");
      if (h) { var b = document.createElement("p"); b.className = "defi-bilan"; b.textContent = "⏱ Défis chronométrés réussis : " + ok + " / " + n + " fiches de cette année (gardé sur cet appareil)."; h.after(b); }
    }
  }

  /* ---------- Fiche : le défi ---------- */
  function fiche() {
    var enonce = document.querySelector(".enonce"), rep = document.querySelector(".reponse .v");
    if (!enonce || !rep) return;
    var officielle = (rep.firstChild && rep.firstChild.nodeType === 3 ? rep.firstChild.textContent : rep.textContent).trim();
    var detail = rep.querySelector("small") ? rep.querySelector("small").textContent : "";
    var coefTxt = (document.querySelector(".chip.coef") || {}).textContent || "";
    var coef = parseInt((coefTxt.match(/\d+/) || [0])[0], 10);
    var conseil = coef ? Math.max(3, Math.round(coef * 1.5)) : 10;   // minutes
    var premier = enonce.closest("section.page");
    var aCacher = [];
    for (var el = enonce.nextElementSibling; el; el = el.nextElementSibling) if (!el.classList.contains("foot")) aCacher.push(el);
    document.querySelectorAll("section.page").forEach(function (s) { if (s !== premier) aCacher.push(s); });

    var resultats = lire(), moi = resultats[page];
    var box = document.createElement("div");
    box.className = "defi";
    enonce.after(box);
    function accueil() {
      box.innerHTML = '<div class="dt">⏱ Défi chronométré</div>' +
        "<div>Cache la réponse et la résolution, lance le chrono (" + conseil + " min conseillées" + (coef ? ", coefficient " + coef : "") + ") et donne ta réponse.</div>" +
        (moi && moi.ok ? "<div><small>Déjà réussi en " + duree(moi.sec) + " le " + moi.date.split("-").reverse().join("/") + ". Bats ton record !</small></div>" : moi ? "<div><small>Déjà tenté " + (moi.essais || 1) + " fois, pas encore réussi.</small></div>" : "") +
        '<button type="button" data-a="go">Relever le défi</button>';
    }
    var t0 = 0, minuterie = null;
    function cacher(on) { aCacher.forEach(function (x) { x.classList.toggle("defi-cache", on); }); }
    function lancer() {
      cacher(true);
      t0 = Date.now();
      box.innerHTML = '<div class="dt">⏱ Défi en cours · ' + conseil + ' min conseillées</div>' +
        '<div class="chrono">0:00</div><div class="barre"><i></i></div>' +
        '<label>Ta réponse : <input type="text" autocomplete="off" spellcheck="false" placeholder="ex. 42, ou 2 solutions : 12 et 18"></label><br>' +
        '<button type="button" data-a="verifier">Vérifier</button><button type="button" class="alt" data-a="abandon">Voir la réponse</button>' +
        '<div><small>Les nombres de ta réponse sont comparés à la réponse officielle. Si le cas est ambigu, c\'est toi qui juges.</small></div>';
      var champ = box.querySelector("input");
      champ.focus();
      champ.addEventListener("keydown", function (e) { if (e.key === "Enter") verifier(); });
      clearInterval(minuterie);
      minuterie = setInterval(tic, 250); tic();
      box.scrollIntoView({ block: "nearest" });
    }
    function tic() {
      var s = Math.floor((Date.now() - t0) / 1000), ch = box.querySelector(".chrono"), b = box.querySelector(".barre i");
      if (!ch) return;
      ch.textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
      ch.classList.toggle("depasse", s > conseil * 60);
      b.style.width = Math.min(100, s / (conseil * 60) * 100) + "%";
    }
    function enregistrer(ok, sec) {
      resultats = lire();
      var x = resultats[page] || { ok: false, sec: 0, essais: 0 };
      x.essais = (x.essais || 0) + 1;
      if (ok && (!x.ok || sec < x.sec)) { x.ok = true; x.sec = sec; x.date = new Date().toISOString().slice(0, 10); }
      if (!x.date) x.date = new Date().toISOString().slice(0, 10);
      resultats[page] = x; ecrire(resultats); moi = x;
      return x;
    }
    function fin(ok, sec, texte) {
      clearInterval(minuterie);
      cacher(false);
      var avant = moi && moi.ok ? moi.sec : null;
      var x = ok === null ? null : enregistrer(ok, sec);
      var record = ok && avant !== null && sec < avant ? " Nouveau record (avant : " + duree(avant) + ") !" : "";
      var bonus = ok && sec <= conseil * 60 ? " Dans le temps conseillé ⭐" : "";
      box.innerHTML = '<div class="dt">⏱ Défi terminé en ' + duree(sec) + "</div>" +
        '<div class="res ' + (ok === null ? "neutre" : ok ? "ok" : "ko") + '">' + texte + (ok ? bonus + record : "") + "</div>" +
        (x ? "<div><small>" + (x.ok ? "Meilleur temps : " + duree(x.sec) + " · " : "") + x.essais + " essai" + (x.essais > 1 ? "s" : "") + " sur cet appareil.</small></div>" : "") +
        '<button type="button" class="alt" data-a="go">Recommencer</button>';
    }
    function verifier() {
      var champ = box.querySelector("input"), v = champ ? champ.value.trim() : "";
      var sec = Math.round((Date.now() - t0) / 1000);
      if (!v) { champ.focus(); return; }
      var j = juger(v, officielle);
      if (j === true) return fin(true, sec, "<b>Bravo, c'est juste !</b> Réponse officielle : " + officielle + (detail ? " <small>" + detail + "</small>" : "") + ".");
      if (j === false) return fin(false, sec, "<b>Pas tout à fait.</b> Tu as répondu « " + v.replace(/[<>&]/g, "") + " » ; la réponse officielle est : " + officielle + (detail ? " <small>" + detail + "</small>" : "") + ". Lis la résolution ci-dessous.");
      clearInterval(minuterie);
      box.innerHTML = '<div class="dt">⏱ ' + duree(sec) + " · à toi de juger</div>" +
        '<div class="res neutre">Ta réponse : « ' + v.replace(/[<>&]/g, "") + " ». Réponse officielle : <b>" + officielle + "</b>" + (detail ? " <small>" + detail + "</small>" : "") + ".</div>" +
        '<button type="button" data-a="juste" data-s="' + sec + '">C\'était juste</button><button type="button" class="alt" data-a="faux" data-s="' + sec + '">C\'était faux</button>';
    }
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var a = b.dataset.a, sec;
      if (a === "go") lancer();
      else if (a === "verifier") verifier();
      else if (a === "abandon") { sec = Math.round((Date.now() - t0) / 1000); fin(false, sec, "Réponse officielle : <b>" + officielle + "</b>" + (detail ? " <small>" + detail + "</small>" : "") + ". La résolution est ci-dessous."); }
      else if (a === "juste") fin(true, +b.dataset.s, "<b>Bravo !</b> Réponse officielle : " + officielle + ".");
      else if (a === "faux") fin(false, +b.dataset.s, "Réponse officielle : " + officielle + ". La résolution est ci-dessous.");
    });
    accueil();
  }

  css();
  if (/-fiche-/.test(page)) fiche(); else pageAnnee();
  window.DefiFFJM = { juger: juger, nombres: nombres };
})();
