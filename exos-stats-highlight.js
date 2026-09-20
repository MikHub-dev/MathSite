/* exos-stats-highlight.js — Version 1.0
 *
 * Page « Exercices » : met en blanc gras brillant, dans la phrase d'introduction,
 *   - le total de fiches           (ex. « 2 470 fiches »)
 *   - le total d'exercices corrigés (ex. « 12 350 exercices corrigés »)
 *
 * Les chiffres sont repérés par motif (et non écrits en dur) : la mise en forme
 * reste valable quand les totaux évoluent. « 2 238 fiches dans Études » n'est pas
 * touché : seul « N fiches » suivi de « équipées » est mis en valeur.
 *
 * Non invasif, comme les autres modules : n'édite pas exercices.js. Il observe
 * simplement #content et enveloppe les deux groupes de mots dans
 * <strong class="exof-hl"> après chaque rendu de la page.
 *
 * Chargement : à placer dans index.html juste après exercices.js.
 */
(function exosStatsHighlight() {
  const content = document.getElementById("content");
  if (!content) return;

  // Style : blanc pur, gras, léger halo pour l'effet « brillant ».
  // (#content + strong.exof-hl l'emporte sur d'éventuelles règles « strong » du site.)
  const style = document.createElement("style");
  style.textContent =
    "#content strong.exof-hl {" +
    " color: #ffffff;" +
    " font-weight: 800;" +
    " text-shadow: 0 0 8px rgba(255, 255, 255, .35);" +
    " }";
  document.head.appendChild(style);

  // \s couvre l'espace insécable et l'espace fine insécable utilisés dans « 2 470 ».
  const PATTERNS = [
    /\d(?:[\s\d]*\d)?\s+fiches(?=\s+équipées)/,
    /\d(?:[\s\d]*\d)?\s+exercices\s+corrigés/
  ];

  function highlight(root) {
    // Sortie rapide : la phrase n'est pas dans la page affichée.
    if (!/équipées|corrigés/.test(root.textContent)) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        return p && !p.closest("strong.exof-hl, script, style")
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const text = node.nodeValue;
      const hits = [];
      PATTERNS.forEach(re => {
        const m = re.exec(text);
        if (m) hits.push({ start: m.index, end: m.index + m[0].length });
      });
      if (!hits.length) return;
      hits.sort((a, b) => a.start - b.start);

      const frag = document.createDocumentFragment();
      let pos = 0;
      hits.forEach(h => {
        if (h.start < pos) return;
        frag.appendChild(document.createTextNode(text.slice(pos, h.start)));
        const strong = document.createElement("strong");
        strong.className = "exof-hl";
        strong.textContent = text.slice(h.start, h.end);
        frag.appendChild(strong);
        pos = h.end;
      });
      frag.appendChild(document.createTextNode(text.slice(pos)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  // Re-applique après chaque rendu de #content (ouverture de la page, choix d'un niveau...).
  let pending = false;
  new MutationObserver(() => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      highlight(content);
    });
  }).observe(content, { childList: true, subtree: true });

  highlight(content);
})();
