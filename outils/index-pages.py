#!/usr/bin/env python3
"""Index de recherche des pages HTML annexes de MathSite (recherche-pages.json).

La recherche du site (app.js) cherche dans les menus et les fiches, qui sont dans les fichiers
de données. Les pages HTML à part (concours.html et les 400 pages de concours/, carnet de
visite, axiomatisation…) ne sont pas chargées par index.html : ce script lit leur texte et
l'écrit dans recherche-pages.json, que app.js charge à la première recherche.

Pages indexées : celles qu'on atteint en suivant les liens, à partir des pages .html citées
dans index.html et dans les fichiers .js de la racine. Une page est découpée en parties :
chaque élément qui porte un id et dont le premier titre (h1 à h3) est à l'intérieur donne
une entrée, avec un lien direct vers cette partie (page.html#id).

Usage (depuis la racine du dépôt) : python3 outils/index-pages.py
Le workflow de publication (.github/workflows/static.yml) le relance avant chaque mise en ligne.
"""
import html, json, pathlib, re
from html.parser import HTMLParser

RACINE = pathlib.Path(__file__).resolve().parent.parent
SORTIE = RACINE / "recherche-pages.json"
IGNORES = {"script", "style", "svg", "noscript", "template", "math"}
VIDES = {"br", "hr", "img", "input", "meta", "link", "source", "wbr", "col", "area", "base", "embed", "param", "track"}
BLOCS = {"p", "li", "div", "td", "th", "dt", "dd", "h1", "h2", "h3", "h4", "h5", "h6", "section", "article",
         "header", "footer", "aside", "blockquote", "pre", "figcaption", "tr", "br", "summary", "details", "ol", "ul"}


class Lecteur(HTMLParser):
    """Découpe une page en parties (id + titre) et récupère le texte de chacune."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pile = []          # [balise, partie_ouverte]
        self.ignore = 0
        self.titre_page = ""
        self.dans_title = False
        self.parties = [{"id": "", "titre": "", "texte": []}]
        self.ouvertes = [0]     # indices des parties ouvertes (la 0 = la page entière)
        self.titre_en_cours = None
        self.liens = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if self.titre_en_cours is not None:
            self.titre_en_cours["titre"] += " "   # « 1 » et « Notion » restent séparés
        if tag == "a" and a.get("href"):
            self.liens.append(a["href"])
        if tag == "title":
            self.dans_title = True
        if tag in VIDES:
            if tag == "br":
                self._texte(" ")
            return
        if tag == "span" and a.get("class") and self.ignore == 0:
            self._texte(" ")   # étiquettes (« Énoncé résumé », « Seconde »…) séparées du texte
        nouvelle = False
        if self.ignore == 0 and a.get("id") and tag not in ("h1", "h2", "h3", "h4", "span", "a", "b", "strong", "em", "i", "dfn", "mark", "sup", "sub"):
            self.parties.append({"id": a["id"], "titre": "", "texte": [], "attente": True})
            self.ouvertes.append(len(self.parties) - 1)
            nouvelle = True
        self.pile.append((tag, nouvelle))
        if tag in IGNORES:
            self.ignore += 1
        if tag in ("h1", "h2", "h3") and self.ignore == 0:
            p = self.parties[self.ouvertes[-1]]
            if p.get("attente"):
                self.titre_en_cours = p
                p["attente"] = False
                p["titre"] = ""

    def handle_endtag(self, tag):
        if tag == "title":
            self.dans_title = False
        if tag in VIDES:
            return
        # referme jusqu'à la balise correspondante (HTML tolérant)
        for i in range(len(self.pile) - 1, -1, -1):
            if self.pile[i][0] == tag:
                for t, nouvelle in self.pile[i:][::-1]:
                    if t in IGNORES:
                        self.ignore -= 1
                    if self.titre_en_cours is not None:
                        self.titre_en_cours["titre"] += " "
                    if t in ("h1", "h2", "h3") and self.titre_en_cours is not None:
                        self.titre_en_cours = None
                    if nouvelle:
                        self.ouvertes.pop()
                    if t in BLOCS or t == "span":
                        self._texte(" ")
                del self.pile[i:]
                break

    def handle_data(self, data):
        if self.dans_title:
            self.titre_page += data
            return
        if self.ignore:
            return
        self._texte(data)
        if self.titre_en_cours is not None:
            self.titre_en_cours["titre"] += data

    def _texte(self, t):
        self.parties[self.ouvertes[-1]]["texte"].append(t)


def propre(t):
    return re.sub(r"\s+", " ", t).strip()


def pages_de_depart():
    noms = set()
    for f in [RACINE / "index.html"] + sorted(RACINE.glob("*.js")):
        for m in re.finditer(r"""(?:href=|location\.href\s*=\s*|['"`(])['"]?([\w./-]+\.html)""", f.read_text(encoding="utf-8", errors="ignore")):
            noms.add(m.group(1))
    return sorted(n for n in noms if (RACINE / n).is_file() and n != "index.html")


def main():
    a_lire = pages_de_depart()
    vues = set(a_lire)
    entrees = []
    while a_lire:
        rel = a_lire.pop(0)
        chemin = RACINE / rel
        lecteur = Lecteur()
        lecteur.feed(chemin.read_text(encoding="utf-8", errors="ignore"))
        titre_page = propre(html.unescape(lecteur.titre_page)) or rel
        for p in lecteur.parties[1:]:   # partie sans titre : son texte revient à la page
            if not propre(p["titre"]):
                lecteur.parties[0]["texte"].append(" " + "".join(p["texte"]))
                p["texte"] = []
        for p in lecteur.parties:
            texte = propre("".join(p["texte"]))
            titre = propre(p["titre"])
            if not texte or texte == titre:
                continue
            entrees.append({"u": rel + ("#" + p["id"] if p["id"] else ""), "t": titre or titre_page, "p": titre_page, "x": texte})
        # pages liées (même site, fichiers .html existants)
        base = pathlib.PurePosixPath(rel).parent
        for h in lecteur.liens:
            if re.match(r"^[a-z]+:|^//|^#", h):
                continue
            cible = h.split("#")[0].split("?")[0]
            if not cible.endswith(".html"):
                continue
            norm = pathlib.PurePosixPath(*[x for x in (base / cible).parts])
            parts = []
            for x in norm.parts:
                if x == "..":
                    if parts:
                        parts.pop()
                elif x != ".":
                    parts.append(x)
            n = "/".join(parts)
            if n and n != "index.html" and n not in vues and (RACINE / n).is_file():
                vues.add(n)
                a_lire.append(n)
    # doublons exacts (même lien, même texte) retirés
    vu, finales = set(), []
    for e in entrees:
        cle = (e["u"], e["x"])
        if cle not in vu:
            vu.add(cle)
            finales.append(e)
    SORTIE.write_text(json.dumps({"pages": sorted(vues), "entrees": finales}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{SORTIE.name} : {len(vues)} pages, {len(finales)} entrées, {SORTIE.stat().st_size // 1024} Ko")


if __name__ == "__main__":
    main()
