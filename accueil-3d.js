/* accueil-3d.js — MathSite : les images des vignettes de l'accueil en scènes SVG 3D (v1.0).
   Petit moteur de projection maison, sans bibliothèque. Chaque vignette porte
   <svg class="home-link-3d" data-3d="cle">, rempli ici ; l'image PNG d'origine reste dans la
   vignette et ne sert que si ce script ne se charge pas.
   - Rotation lente automatique, inclinaison quand la souris passe sur la vignette,
     pivotement au glisser (un glisser n'ouvre pas la rubrique).
   - prefers-reduced-motion : scènes fixes.
   loadHome() (app.js) appelle MathSite3D.monter(conteneur) après avoir écrit les vignettes. */
(function () {
  "use strict";
  var F = 520, D = 520, NS = "http://www.w3.org/2000/svg";
  var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TAU = Math.PI * 2;
  var f1 = function (v) { return Math.round(v * 10) / 10; };
  var L = (function () { var v = [-0.45, 0.75, 0.55], n = Math.hypot(v[0], v[1], v[2]); return v.map(function (a) { return a / n; }); })();

  /* couleurs du site et des icônes d'origine */
  var C = { bleu: "#7aa2ff", menthe: "#7ee0c3", orange: "#ffb86b", rouge: "#ff5a5f", violet: "#b07aff", or: "#e8c27a", rose: "#ff7ac8", blanc: "#eef3ff", vert: "#5fe08a" };
  var hex = function (h) { return [1, 3, 5].map(function (i) { return parseInt(h.slice(i, i + 2), 16); }); };
  function mix(a, b, k) { return "rgb(" + a.map(function (v, i) { return Math.round(v + (b[i] - v) * k); }).join(",") + ")"; }
  function mixH(a, b, k) { return mix(hex(a), hex(b), k); }

  function rot(p, c) { var x1 = p[0] * c.cy + p[2] * c.sy, z1 = -p[0] * c.sy + p[2] * c.cy; return [x1, p[1] * c.cp - z1 * c.sp, p[1] * c.sp + z1 * c.cp]; }
  function proj(v) { var s = F / (D - v[2]); return [100 + v[0] * s, 100 - v[1] * s, s]; }
  function pts(P) { return P.map(function (p) { return f1(p[0]) + "," + f1(p[1]); }).join(" "); }
  var rx = function (p, a) { var c = Math.cos(a), s = Math.sin(a); return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c]; };
  var ry = function (p, a) { var c = Math.cos(a), s = Math.sin(a); return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c]; };
  var rz = function (p, a) { var c = Math.cos(a), s = Math.sin(a); return [p[0] * c - p[1] * s, p[0] * s + p[1] * c, p[2]]; };
  var add = function (a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; };

  /* ---------- primitives ---------- */
  // courbe découpée en petits morceaux (pour le tri en profondeur)
  function courbe(P, st, k) { var o = []; k = k || 2; for (var i = 0; i < P.length - 1; i += k) o.push(Object.assign({ t: "l", p: P.slice(i, Math.min(i + k, P.length - 1) + 1) }, st)); return o; }
  function param(fn, n, a0, a1) { var o = []; a0 = a0 || 0; a1 = a1 == null ? TAU : a1; for (var i = 0; i <= n; i++) o.push(fn(a0 + (a1 - a0) * i / n, i / n)); return o; }
  function cercle(r, n, map) { return param(function (a) { var p = [r * Math.cos(a), r * Math.sin(a), 0]; return map ? map(p) : p; }, n); }
  // tube : contour sombre + couleur + reflet, segment par segment
  function tube(P, w, colFn, k) {
    var o = []; k = k || 1;
    for (var i = 0; i < P.length - 1; i += k) { var u = i / (P.length - 1); o.push({ t: "tube", p: P.slice(i, Math.min(i + k, P.length - 1) + 1), w: w, c: colFn(u) }); }
    return o;
  }
  // pavé : centre, demi-côtés, rotation des décalages
  function pave(c, h, R, col, alpha) {
    var o = [], a = h[0], b = h[1], d = h[2];
    var Fc = [[[1, 0, 0], [[a, -b, -d], [a, -b, d], [a, b, d], [a, b, -d]]], [[-1, 0, 0], [[-a, -b, -d], [-a, b, -d], [-a, b, d], [-a, -b, d]]],
      [[0, 1, 0], [[-a, b, -d], [a, b, -d], [a, b, d], [-a, b, d]]], [[0, -1, 0], [[-a, -b, -d], [-a, -b, d], [a, -b, d], [a, -b, -d]]],
      [[0, 0, 1], [[-a, -b, d], [-a, b, d], [a, b, d], [a, -b, d]]], [[0, 0, -1], [[-a, -b, -d], [a, -b, -d], [a, b, -d], [-a, b, -d]]]];
    Fc.forEach(function (f) { o.push({ t: "f", p: f[1].map(function (p) { return add(c, R(p)); }), n: R(f[0]), col: hex(col), alpha: alpha == null ? 1 : alpha, edge: mixH(col, "#ffffff", 0.5) }); });
    return o;
  }
  function boule(p, r, fill, ex) { return Object.assign({ t: "b", p: [p], r: r, fill: fill }, ex || {}); }
  function texte(p, s, fs, fill, ex) { return Object.assign({ t: "tx", p: [p], s: s, fs: fs, fill: fill }, ex || {}); }
  // petit nuage de points reproductible
  function alea(seed) { return function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

  /* ---------- rendu ---------- */
  function Scene(svg, cfg, zone) {
    this.svg = svg; this.cfg = cfg; this.uy = 0; this.up = 0; this.hy = 0; this.hp = 0; this.thy = 0; this.thp = 0; this.moved = false;
    var self = this;
    svg.innerHTML = '<defs>' + DEFS + '</defs><rect x="2" y="2" width="196" height="196" rx="26" fill="url(#m3Fond)" stroke="' + cfg.halo + '" stroke-opacity=".35" stroke-width="2"/>' +
      '<circle cx="100" cy="100" r="78" fill="' + cfg.halo + '" opacity=".13" filter="url(#m3Flou)"/>';
    this.g = document.createElementNS(NS, "g"); svg.appendChild(this.g);
    this.statique = cfg.build();
    var drag = null;
    svg.style.touchAction = "pan-y"; svg.style.cursor = "grab";
    svg.addEventListener("pointerdown", function (e) { drag = { x: e.clientX, y: e.clientY, uy: self.uy, up: self.up }; self.moved = false; svg.style.cursor = "grabbing"; });
    window.addEventListener("pointerup", function () { if (drag) { drag = null; svg.style.cursor = "grab"; } });
    window.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) self.moved = true;
      self.uy = drag.uy + dx * 0.02; self.up = Math.max(-0.6, Math.min(0.8, drag.up + dy * 0.012));
    });
    zone.addEventListener("pointermove", function (e) {
      if (drag) return;
      var r = zone.getBoundingClientRect();
      self.thy = ((e.clientX - r.left) / r.width - 0.5) * 0.9; self.thp = ((e.clientY - r.top) / r.height - 0.5) * 0.5;
    });
    zone.addEventListener("pointerleave", function () { self.thy = 0; self.thp = 0; });
    // un glisser sur la scène n'ouvre pas la rubrique
    svg.addEventListener("click", function (e) { if (self.moved) { e.stopPropagation(); e.preventDefault(); self.moved = false; } }, true);
  }
  Scene.prototype.frame = function (t) {
    var c = this.cfg;
    this.hy += (this.thy - this.hy) * 0.08; this.hp += (this.thp - this.hp) * 0.08;
    var yaw = (RM ? 0 : c.auto(t)) + this.uy + this.hy + (c.yaw0 || 0), pit = c.pitch + this.up + this.hp;
    var K = { cy: Math.cos(yaw), sy: Math.sin(yaw), cp: Math.cos(pit), sp: Math.sin(pit) };
    var prims = this.statique.concat(c.dyn ? c.dyn(RM ? 0 : t) : []);
    var items = [];
    for (var i = 0; i < prims.length; i++) {
      var pr = prims[i], V = pr.p.map(function (p) { return rot(p, K); });
      var d = 0; for (var j = 0; j < V.length; j++) d += V[j][2]; d = d / V.length + (pr.b || 0);
      var k = 1;
      if (pr.n) {
        var n = rot(pr.n, K), cx = 0, cy = 0, cz = 0;
        V.forEach(function (v) { cx += v[0]; cy += v[1]; cz += v[2]; }); cx /= V.length; cy /= V.length; cz /= V.length;
        if (n[0] * (0 - cx) + n[1] * (0 - cy) + n[2] * (D - cz) <= 0) continue;
        k = Math.max(0, n[0] * L[0] + n[1] * L[1] + n[2] * L[2]);
      }
      if (pr.fixk) k = pr.fixk;
      items.push({ pr: pr, V: V, d: d, k: k });
    }
    items.sort(function (a, b) { return a.d - b.d; });
    var o = "";
    items.forEach(function (it) {
      var pr = it.pr, P = it.V.map(proj), s = P[0][2];
      if (pr.t === "f") {
        o += '<polygon points="' + pts(P) + '" fill="' + mix([8, 12, 24], pr.col, 0.38 + 0.62 * it.k) + '" fill-opacity="' + pr.alpha + '"' + (pr.edge ? ' stroke="' + pr.edge + '" stroke-width="1" stroke-opacity=".7"' : "") + ' stroke-linejoin="round"/>';
      } else if (pr.t === "poly") {
        o += '<polygon points="' + pts(P) + '" fill="' + pr.fill + '" fill-opacity="' + (pr.fo == null ? 1 : pr.fo) + '"' + (pr.s ? ' stroke="' + pr.s + '" stroke-width="' + f1((pr.w || 1.5) * s) + '" stroke-linejoin="round"' : "") + "/>";
      } else if (pr.t === "l") {
        o += '<polyline points="' + pts(P) + '" fill="none" stroke="' + pr.s + '" stroke-opacity="' + (pr.o == null ? 1 : pr.o) + '" stroke-width="' + f1((pr.w || 1.5) * s) + '" stroke-linecap="round" stroke-linejoin="round"' + (pr.da ? ' stroke-dasharray="' + pr.da + '"' : "") + (pr.fl ? ' filter="url(#m3Lueur)"' : "") + "/>";
      } else if (pr.t === "tube") {
        var ln = pts(P), w = pr.w * s;
        o += '<polyline points="' + ln + '" fill="none" stroke="#070b16" stroke-width="' + f1(w + 2.4) + '" stroke-linecap="butt" stroke-linejoin="round"/>' +
          '<polyline points="' + ln + '" fill="none" stroke="' + pr.c + '" stroke-width="' + f1(w) + '" stroke-linecap="round" stroke-linejoin="round"/>' +
          '<polyline points="' + ln + '" fill="none" stroke="#ffffff" stroke-opacity=".35" stroke-width="' + f1(w * 0.25) + '" stroke-linecap="round" stroke-linejoin="round"/>';
      } else if (pr.t === "b") {
        o += '<circle cx="' + f1(P[0][0]) + '" cy="' + f1(P[0][1]) + '" r="' + f1(pr.r * s) + '" fill="' + pr.fill + '"' + (pr.op != null ? ' opacity="' + pr.op + '"' : "") + (pr.fl ? ' filter="url(#m3Lueur)"' : "") + "/>";
      } else if (pr.t === "tx") {
        o += '<text x="' + f1(P[0][0]) + '" y="' + f1(P[0][1]) + '" font-size="' + f1(pr.fs * s) + '" fill="' + pr.fill + '" text-anchor="middle" dominant-baseline="central" font-family="' + (pr.ff || "Georgia,'Times New Roman',serif") + '" font-style="' + (pr.it ? "italic" : "normal") + '" font-weight="' + (pr.fw || 600) + '"' + (pr.op != null ? ' opacity="' + pr.op + '"' : "") + ' paint-order="stroke" stroke="#070b16" stroke-width="' + f1(3 * s) + '">' + pr.s + "</text>";
      }
    });
    this.g.innerHTML = o;
  };

  var DEFS =
    '<radialGradient id="m3Fond" cx=".5" cy=".42" r=".7"><stop offset="0" stop-color="#1c2740"/><stop offset=".65" stop-color="#111827"/><stop offset="1" stop-color="#0a0f1b"/></radialGradient>' +
    '<filter id="m3Flou" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16"/></filter>' +
    '<filter id="m3Lueur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
    '<radialGradient id="m3Bille" cx=".35" cy=".3"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#ffd59a"/><stop offset="1" stop-color="#c46a1c"/></radialGradient>' +
    '<radialGradient id="m3BilleR" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#ff8a8d"/><stop offset="1" stop-color="#a01c22"/></radialGradient>' +
    '<radialGradient id="m3BilleB" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#a9c2ff"/><stop offset="1" stop-color="#2c4fb0"/></radialGradient>' +
    '<radialGradient id="m3BilleM" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#a6f0d9"/><stop offset="1" stop-color="#1f8a6a"/></radialGradient>';

  /* ---------- les 12 scènes ---------- */
  var SC = {};

  // Présentation du site : α et Ω dans les boucles d'un ∞, sous un globe en fil de fer
  SC.presentation = {
    halo: C.menthe, pitch: 0.25, auto: function (t) { return 0.55 * Math.sin(t * 0.35); },
    build: function () {
      var o = [];
      [-0.9, -0.45, 0, 0.45, 0.9].forEach(function (la) { var r = 78 * Math.cos(la), y = 78 * Math.sin(la); o.push.apply(o, courbe(param(function (a) { return [r * Math.cos(a), y, r * Math.sin(a)]; }, 48), { s: C.bleu, o: 0.28, w: 1 }, 4)); });
      for (var m = 0; m < 4; m++) o.push.apply(o, courbe(param(function (a) { return ry([78 * Math.cos(a), 78 * Math.sin(a), 0], m * Math.PI / 4); }, 48), { s: C.bleu, o: 0.22, w: 1 }, 4));
      var inf = param(function (t) { var d = 1 + Math.sin(t) * Math.sin(t); return [62 * Math.cos(t) / d, 62 * Math.sin(t) * Math.cos(t) / d, 16 * Math.sin(t)]; }, 120);
      o.push.apply(o, tube(inf, 7, function (u) { return mixH(C.vert, C.menthe, 0.5 + 0.5 * Math.cos(u * TAU)); }, 4));
      o.push(texte([-36, 0, 0], "α", 34, C.orange, { it: true }), texte([36, 0, 0], "Ω", 30, C.bleu));
      return o;
    }
  };

  // Études : la bibliothèque en couches de couleur, avec une orbite
  SC.etudes = {
    halo: C.bleu, pitch: 0.45, auto: function (t) { return t * 0.3; },
    build: function () {
      var o = [], cols = [C.rouge, C.orange, C.menthe, C.bleu];
      cols.forEach(function (c, i) { var a = i * 0.22; o.push.apply(o, pave([0, -36 + i * 22, 0], [40, 8, 30], function (p) { return ry(p, a); }, c)); });
      return o;
    },
    dyn: function (t) {
      var o = [], R = function (p) { return rx(p, 0.35); };
      o.push.apply(o, courbe(cercle(74, 60, function (p) { return R([p[0], 0, p[1]]); }), { s: C.menthe, o: 0.55, w: 1.4, da: "3 5" }, 3));
      var a = t * 1.1; o.push(boule(R([74 * Math.cos(a), 0, 74 * Math.sin(a)]), 6, "url(#m3BilleM)"));
      return o;
    }
  };

  // Correspondances : deux ensembles A et B reliés par des flèches f : A → B
  SC.correspondances = {
    halo: C.vert, pitch: 0.2, auto: function (t) { return 0.6 * Math.sin(t * 0.3); },
    build: function () {
      var o = [];
      o.push.apply(o, courbe(param(function (a) { return [-48 + 26 * Math.cos(a), 44 * Math.sin(a), 0]; }, 60), { s: C.bleu, w: 3, fl: true }, 3));
      o.push.apply(o, courbe(param(function (a) { return [48 + 26 * Math.cos(a), 44 * Math.sin(a), 0]; }, 60), { s: C.vert, w: 3, fl: true }, 3));
      o.push(texte([-48, 58, 0], "A", 20, C.bleu, { it: true }), texte([48, 58, 0], "B", 20, C.vert, { it: true }));
      return o;
    },
    dyn: function (t) {
      var o = [], A = [[-52, 22, 0], [-44, 0, 0], [-54, -22, 0]], B = [[44, 24, 0], [52, 2, 0], [46, -24, 0]];
      A.forEach(function (a, i) {
        var b = B[(i + 1) % 3], arc = param(function (u) { var m = 4 * u * (1 - u); return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u + 14 * m, 34 * m]; }, 20, 0, 1);
        o.push.apply(o, courbe(arc, { s: C.orange, w: 2.2, o: 0.9 }, 2));
        var u = ((t * 0.45 + i / 3) % 1), m = 4 * u * (1 - u);
        o.push(boule([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u + 14 * m, 34 * m], 4.5, "url(#m3Bille)"));
        o.push(boule(a, 5, "url(#m3BilleB)"), boule(b, 5, "url(#m3BilleM)"));
      });
      o.push(texte([0, -44, 20], "f", 22, C.orange, { it: true }));
      return o;
    }
  };

  // Exercices : anneaux de gyroscope qui tournent autour du ∂
  SC.exercices = {
    halo: C.bleu, pitch: 0.3, auto: function (t) { return 0.4 * Math.sin(t * 0.3); },
    build: function () { return [texte([0, 0, 0], "∂", 50, C.menthe, { it: true })]; },
    dyn: function (t) {
      var o = [];
      [[72, C.bleu, function (p) { return ry(rx(p, Math.PI / 2), t * 0.6); }],
       [58, C.vert, function (p) { return rx(ry(p, Math.PI / 2), t * 0.8); }],
       [44, C.orange, function (p) { return rz(rx(p, 0.6), t * 1.1); }]].forEach(function (r) {
        o.push.apply(o, courbe(cercle(r[0], 64, r[2]), { s: r[1], w: 3, fl: true }, 2));
        o.push(boule(r[2]([r[0], 0, 0]), 5, "#ffffff", { fl: true }));
      });
      return o;
    }
  };

  // Banque d'images : des cadres empilés en profondeur et un nuage de points
  SC.banque = {
    halo: C.orange, pitch: 0.2, yaw0: -0.3, auto: function (t) { return 0.5 * Math.sin(t * 0.32); },
    build: function () {
      var o = [], cols = [C.bleu, C.menthe, C.rose, C.orange];
      cols.forEach(function (c, i) {
        var z = -36 + i * 24, a = (i - 1.5) * 0.12, R = function (p) { return rz(p, a); };
        o.push({ t: "poly", p: [[-50, -38, z], [50, -38, z], [50, 38, z], [-50, 38, z]].map(function (p) { return add(R([p[0], p[1], 0]), [0, 0, z]); }), fill: c, fo: 0.1, s: c, w: 2.4 });
      });
      var r = alea(7);
      for (var i = 0; i < 70; i++) { var u = r() * TAU, v = Math.acos(2 * r() - 1), q = 30 * Math.cbrt(r()); o.push(boule([q * Math.sin(v) * Math.cos(u), q * Math.cos(v), 12 + q * Math.sin(v) * Math.sin(u)], 1.6, i % 3 ? "#e7eeff" : C.orange, { op: 0.9 })); }
      return o;
    }
  };

  // Spécialisation : une surface z = sin·cos et les symboles qui tournent au-dessus
  SC.formules = {
    halo: C.violet, pitch: 0.5, auto: function (t) { return t * 0.25; },
    build: function () {
      var o = [], N = 10, H = function (x, z) { return -34 + 12 * Math.sin(x / 16) * Math.cos(z / 16); };
      for (var i = 0; i <= N; i++) {
        var v = -60 + 120 * i / N;
        o.push.apply(o, courbe(param(function (u, k) { var x = -60 + 120 * k; return [x, H(x, v), v]; }, 20), { s: C.menthe, o: 0.5, w: 1.1 }, 2));
        o.push.apply(o, courbe(param(function (u, k) { var z = -60 + 120 * k; return [v, H(v, z), z]; }, 20), { s: C.menthe, o: 0.5, w: 1.1 }, 2));
      }
      return o;
    },
    dyn: function (t) {
      var o = [], S = [["∫", C.orange], ["√", C.bleu], ["Σ", C.rose], ["π", C.menthe]];
      S.forEach(function (s, i) { var a = -t * 0.5 + i * TAU / 4; o.push(texte([46 * Math.cos(a), 18 + 6 * Math.sin(t + i), 46 * Math.sin(a)], s[0], 34, s[1], { it: s[0] === "∫" })); });
      return o;
    }
  };

  // Dictionnaires : un nœud de trèfle (la topologie de l'icône)
  SC.dictionnaires = {
    halo: C.violet, pitch: 0.2, auto: function (t) { return t * 0.35; },
    build: function () {
      var P = param(function (t) { return [22 * (Math.sin(t) + 2 * Math.sin(2 * t)), 22 * (Math.cos(t) - 2 * Math.cos(2 * t)), -22 * Math.sin(3 * t)]; }, 150);
      return tube(P, 9, function (u) { return mixH(C.bleu, C.orange, 0.5 + 0.5 * Math.sin(u * TAU * 3)); }, 3);
    }
  };

  // Collège : la fraction ¾ en part de gâteau 3D, le quart manquant qui flotte
  SC.college = {
    halo: C.orange, pitch: 0.55, yaw0: 0.4, auto: function (t) { return 0.5 * Math.sin(t * 0.3); },
    build: function () { return part(0, 1.5 * Math.PI, [0, 0, 0], C.orange, 1).concat([texte([0, 56, 0], "¾", 34, C.blanc)]); },
    dyn: function (t) {
      var s = 10 + 12 * (0.5 + 0.5 * Math.sin(t * 1.2)), a = 1.75 * Math.PI;
      return part(1.5 * Math.PI, TAU, [s * Math.cos(a), 4 + s * 0.6, -s * Math.sin(a)], C.menthe, 0.55);
    }
  };
  function part(a0, a1, c, col, alpha) {
    var o = [], R = 58, h = 12, n = 24, top = [add(c, [0, h, 0])], bot = [add(c, [0, -h, 0])];
    for (var i = 0; i <= n; i++) {
      var a = a0 + (a1 - a0) * i / n, b = a0 + (a1 - a0) * (i + 1) / n;
      top.push(add(c, [R * Math.cos(a), h, -R * Math.sin(a)])); bot.unshift(add(c, [R * Math.cos(a), -h, -R * Math.sin(a)]));
      if (i < n) { var m = (a + b) / 2; o.push({ t: "f", p: [[R * Math.cos(a), -h, -R * Math.sin(a)], [R * Math.cos(b), -h, -R * Math.sin(b)], [R * Math.cos(b), h, -R * Math.sin(b)], [R * Math.cos(a), h, -R * Math.sin(a)]].map(function (p) { return add(c, p); }), n: [Math.cos(m), 0, -Math.sin(m)], col: hex(col), alpha: alpha }); }
    }
    o.push({ t: "f", p: top, n: [0, 1, 0], col: hex(col), alpha: alpha, edge: mixH(col, "#ffffff", 0.5), b: 8 });
    o.push({ t: "f", p: bot, n: [0, -1, 0], col: hex(col), alpha: alpha });
    // faces de coupe : visibles des deux côtés, éclairage fixe
    [a0, a1].forEach(function (e, i) {
      var ca = Math.cos(e), sa = -Math.sin(e);
      o.push({ t: "f", p: [[0, -h, 0], [0, h, 0], [R * ca, h, R * sa], [R * ca, -h, R * sa]].map(function (p) { return add(c, p); }), col: hex(col), alpha: alpha, fixk: i ? 0.55 : 0.8 });
    });
    return o;
  }

  // Lycée : la parabole f(x) = x², ses axes et le paraboloïde de révolution
  SC.lycee = {
    halo: C.violet, pitch: 0.3, auto: function (t) { return 0.7 * Math.sin(t * 0.28); },
    build: function () {
      var o = [], Y = function (x) { return -44 + x * x / 34; };
      o.push.apply(o, courbe([[-76, -44, 0], [76, -44, 0]], { s: C.blanc, o: 0.55, w: 1.4 }, 1));
      o.push.apply(o, courbe([[0, -58, 0], [0, 76, 0]], { s: C.blanc, o: 0.55, w: 1.4 }, 1));
      [16, 32, 48].forEach(function (r) { o.push.apply(o, courbe(param(function (a) { return [r * Math.cos(a), Y(r), r * Math.sin(a)]; }, 40), { s: C.violet, o: 0.45, w: 1.1 }, 4)); });
      for (var m = 1; m < 6; m++) { var a = m * Math.PI / 6; o.push.apply(o, courbe(param(function (u, k) { var x = -58 + 116 * k; return ry([x, Y(x), 0], a); }, 24), { s: C.violet, o: 0.3, w: 1 }, 3)); }
      o.push.apply(o, courbe(param(function (u, k) { var x = -58 + 116 * k; return [x, Y(x), 0]; }, 40), { s: C.orange, w: 3.4, fl: true }, 2));
      o.push(texte([62, 60, 0], "f(x)", 17, C.orange, { it: true }));
      return o;
    },
    dyn: function (t) { var x = 50 * Math.sin(t * 0.9); return [boule([x, -44 + x * x / 34 + 5, 0], 6, "url(#m3BilleB)")]; }
  };

  // Prépa / CPGE : une spirale qui converge vers sa limite
  SC.prepa = {
    halo: C.rouge, pitch: 0.55, auto: function (t) { return t * 0.3; },
    build: function () {
      var P = param(function (a, k) { var r = 72 * Math.pow(1 - k, 1.2) + 3; return [r * Math.cos(a), 30 - 60 * k, r * Math.sin(a)]; }, 200, 0, 5 * TAU);
      var o = courbe(P, { s: C.rouge, w: 3, fl: true }, 2);
      o.push(boule([0, -32, 0], 7, "url(#m3BilleR)", { fl: true }), texte([0, 52, 0], "lim", 20, "#ffd0d1", { it: true }));
      return o;
    },
    dyn: function (t) { var k = (t * 0.12) % 1, a = k * 5 * TAU, r = 72 * Math.pow(1 - k, 1.2) + 3; return [boule([r * Math.cos(a), 30 - 60 * k + 5, r * Math.sin(a)], 5, "#ffffff", { fl: true })]; }
  };

  // Grandes Écoles : un tore doré autour de l'infini
  SC.grandesEcoles = {
    halo: C.or, pitch: 0.75, auto: function (t) { return t * 0.3; },
    build: function () {
      var o = [], R = 52, r = 20;
      for (var i = 0; i < 20; i++) { var u = i * TAU / 20; o.push.apply(o, courbe(param(function (v) { return [(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)]; }, 24), { s: C.or, o: 0.75, w: 1.3 }, 3)); }
      for (var j = 0; j < 8; j++) { var v = j * TAU / 8; o.push.apply(o, courbe(param(function (u) { return [(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)]; }, 64), { s: "#fff0c8", o: 0.4, w: 1 }, 4)); }
      o.push(texte([0, 0, 0], "∞", 40, C.vert, { b: 0 }));
      return o;
    }
  };

  // Tous les niveaux : e^(iθ) en hélice, le cercle unité et e^(iπ) + 1 = 0
  SC.tous = {
    halo: C.bleu, pitch: 0.25, yaw0: -0.6, auto: function (t) { return 0.6 * Math.sin(t * 0.25); },
    build: function () {
      var o = [];
      o.push.apply(o, courbe([[-80, 0, 0], [80, 0, 0]], { s: C.blanc, o: 0.45, w: 1.2 }, 1));
      o.push.apply(o, courbe(param(function (a, k) { return [-70 + 140 * k, 32 * Math.cos(a), 32 * Math.sin(a)]; }, 120, 0, 3 * TAU), { s: C.bleu, w: 2.6, fl: true }, 2));
      o.push.apply(o, courbe(cercle(32, 48, function (p) { return [0, p[0], p[1]]; }), { s: C.blanc, o: 0.6, w: 1.4, da: "3 4" }, 2));
      var r = alea(3);
      for (var i = 0; i < 14; i++) { var a = (i + r() * 0.5) * TAU / 14, q = 80 + r() * 6; if (Math.sin(a) < -0.45) continue; o.push(boule([q * Math.cos(a), q * Math.sin(a) * 0.85, -60], 1.2 + r() * 1.2, "#ffffff", { op: 0.7, b: -500 })); }
      o.push(texte([0, -64, 0], "e<tspan dy=\"-7\" font-size=\"70%\">iπ</tspan><tspan dy=\"7\"> + 1 = 0</tspan>", 17, C.blanc, { it: true }));
      return o;
    },
    dyn: function (t) {
      var a = t * 1.2, p = [0, 32 * Math.cos(a), 32 * Math.sin(a)];
      return courbe([[0, 0, 0], p], { s: C.orange, w: 2.6 }, 1).concat([boule(p, 5.5, "url(#m3Bille)")]);
    }
  };

  /* ---------- montage et animation ---------- */
  var scenes = [];
  function monter(racine) {
    (racine || document).querySelectorAll("svg[data-3d]:not([data-3d-ok])").forEach(function (svg) {
      var cfg = SC[svg.getAttribute("data-3d")];
      if (!cfg) return;
      svg.setAttribute("data-3d-ok", "1");
      var zone = svg.closest(".home-link-card") || svg;
      if (zone.parentNode && zone.parentNode.classList) zone.parentNode.classList.add("home-3d-pret");
      var s = new Scene(svg, cfg, zone);
      scenes.push(s); s.frame(0);
    });
  }
  var t0 = performance.now(), dernier = 0;
  function boucle(now) {
    scenes = scenes.filter(function (s) { return s.svg.isConnected; });
    if (!document.hidden && now - dernier > 30) {
      dernier = now;
      var t = (now - t0) / 1000;
      scenes.forEach(function (s) { var r = s.svg.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) s.frame(t); });
    }
    requestAnimationFrame(boucle);
  }
  if (!RM) requestAnimationFrame(boucle);
  else { // scènes fixes, mais on garde le glisser
    var bougerFixe = function () { scenes = scenes.filter(function (s) { return s.svg.isConnected; }); scenes.forEach(function (s) { s.frame(0); }); requestAnimationFrame(bougerFixe); };
    requestAnimationFrame(bougerFixe);
  }
  window.MathSite3D = { monter: monter, scenes: Object.keys(SC) };
})();
