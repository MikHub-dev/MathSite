// Version : 1.1
// =====================================================================
// QUIZ DES PATTERNS FFJM — logique commune aux pages ffjm-AAAA-quiz.html.
// Chaque page définit window.QUIZ = { annee, problemes:[{num, titre}] }
// puis charge ce fichier. Il :
//   1. affiche le rappel des 26 patterns (numérotés, avec explications) ;
//   2. remplit la liste de choix de chaque problème ;
//   3. au clic sur « Terminé », ouvre un e-mail (mailto:) contenant le
//      prénom et le pattern choisi pour chaque problème.
// Les réponses attendues ne sont PAS dans les pages (le quiz se corrige
// côté enseignant).
// =====================================================================

// Adresse qui reçoit les réponses (même adresse que exo-email.js).
const QUIZ_EMAIL = "az.autres@gmail.com";

// Numérotation = celle de « Méthodes de raisonnement — 26 patterns FFJM ».
const QUIZ_PATTERNS = [
  { n: 1, court: "Maximum ou minimum", titre: "Trouver un maximum ou un minimum : une borne, puis un exemple",
    texte: "Une réponse « au plus » ou « au moins » a toujours deux moitiés : un exemple qui atteint la valeur, et une raison pour laquelle on ne peut pas faire mieux. Pour « être certain », la raison est le pire cas." },
  { n: 2, court: "Dénombrer sans oubli ni doublon", titre: "Dénombrer sans oubli ni doublon",
    texte: "On choisit un critère de classement (taille, chiffre répété, orientation), on compte chaque classe, puis on additionne en vérifiant qu'aucun objet n'est compté deux fois." },
  { n: 3, court: "Compter pas à pas", titre: "Compter pas à pas (ce qu'ajoute chaque étape)",
    texte: "On regarde ce que change la dernière étape (le dernier bond, le dernier trait tracé) et on en tire une règle qui relie chaque cas aux cas précédents." },
  { n: 4, court: "Écrire et lire les nombres", titre: "Écrire et lire les nombres",
    texte: "On découpe l'écriture en tranches de même forme (nombres à 1, 2, 3 chiffres ; dizaines écrites en lettres ; segments d'un afficheur) et on compte tranche par tranche." },
  { n: 5, court: "Les chiffres d'un nombre", titre: "Les chiffres d'un nombre : positions, retourné, somme des chiffres",
    texte: "On écrit le nombre avec ses chiffres et leurs poids (abc = 100a + 10b + c). Deux faits reviennent sans cesse : un nombre et la somme de ses chiffres ont le même reste dans la division par 9, et chaque retenue fait perdre 9 à la somme des chiffres." },
  { n: 6, court: "Cryptarithmes", titre: "Cryptarithmes",
    texte: "On lit l'opération colonne par colonne, en commençant par celles qui en disent le plus (premier chiffre, unités), sans oublier les retenues." },
  { n: 7, court: "Divisibilité, premiers, PPCM", titre: "Divisibilité, facteurs premiers, PPCM",
    texte: "On décompose en facteurs premiers et on traduit les restes : « il reste 2 par 8 et par 11 » signifie que n − 2 est un multiple commun de 8 et 11." },
  { n: 8, court: "Cycles, restes, calendrier", titre: "Cycles, restes et calendrier",
    texte: "Tout ce qui se répète se ramène à un reste : on enlève les tours complets et on regarde où l'on tombe dans le cycle (7 jours, 26 lettres, 5 pétales, 24 heures)." },
  { n: 9, court: "Répéter ou remonter une transformation", titre: "Répéter ou remonter une transformation",
    texte: "On applique la règle jusqu'à voir revenir une valeur (un cycle), ou on la remonte depuis la fin en cherchant tous les nombres qui peuvent mener au résultat." },
  { n: 10, court: "Équations en nombres entiers", titre: "Équations en nombres entiers",
    texte: "Quand les inconnues sont des entiers, une seule équation suffit : on fixe une inconnue, on la borne, et on teste. Si l'équation mélange produit et somme, on ajoute une constante pour factoriser." },
  { n: 11, court: "Sommes remarquables", titre: "Sommes remarquables",
    texte: "Une somme de termes régulièrement espacés vaut nombre de termes × terme du milieu. La somme des carrés a sa formule, et deux nombres dont on connaît la somme et le produit sont les solutions d'une équation du second degré." },
  { n: 12, court: "Mettre en équation, systèmes", titre: "Mettre en équation, systèmes",
    texte: "Une inconnue par quantité inconnue, une équation par phrase. Souvent, additionner toutes les équations donne directement ce qu'on cherche, sans trouver chaque inconnue." },
  { n: 13, court: "Proportions, pourcentages", titre: "Proportions, pourcentages, fractions",
    texte: "Un pourcentage est un coefficient multiplicateur, et une proportion se traduit en parts égales. On suit la quantité qui ne bouge pas, ou un seul ingrédient." },
  { n: 14, court: "Ce qui ne change pas", titre: "Ce qui ne change pas",
    texte: "On repère la quantité qui reste fixe pendant la transformation (le total d'argent, l'écart d'âge, le poids du récipient) et on raisonne sur elle." },
  { n: 15, court: "Mouvements, vitesses, horloges", titre: "Mouvements, vitesses, horloges",
    texte: "On choisit le bon repère. Sur un support qui bouge (escalator, peloton), les vitesses s'ajoutent ou se retranchent ; pour des croisements ou des aiguilles, on suit l'écart, qui grandit à vitesse constante." },
  { n: 16, court: "Logique des énoncés", titre: "Logique des énoncés",
    texte: "On fait les hypothèses une à une (« cette phrase est vraie ») et on cherche la contradiction. Deux phrases contraires ne sont jamais vraies ensemble ; une phrase qui parle d'elle-même se vérifie en comptant une fois complétée." },
  { n: 17, court: "Grilles et placements", titre: "Grilles et placements sous contraintes",
    texte: "On commence par l'endroit le plus contraint : la case qui a le moins de possibilités, le nombre qui a le moins de voisins permis. Pour une figure magique, on additionne toutes les lignes en comptant combien de fois chaque case sert." },
  { n: 18, court: "Parcours et coloriages", titre: "Parcours et coloriages",
    texte: "On remplace le dessin par des points reliés et on compte, en chaque point, les traits qui y arrivent. La parité de ces nombres décide si un parcours existe ; l'alternance noir/blanc et les boucles impaires bornent les chemins et les couleurs." },
  { n: 19, court: "Positions, coups et jeux", titre: "Positions, coups et jeux",
    texte: "On décrit chaque situation comme un état. Soit on cherche ce qui ne change pas (une parité, une suite déjà rangée), soit on part de la fin (positions gagnantes, solitaire à rebours)." },
  { n: 20, court: "Partages et pavages", titre: "Partages et pavages",
    texte: "L'aire fixe la taille de chaque pièce. On commence par les cases les plus contraintes (coins, avancées, détails du bord) et par les grandes pièces ; bosses et creux se compensent dans le calcul des aires." },
  { n: 21, court: "Aires et périmètres", titre: "Aires et périmètres",
    texte: "On nomme les longueurs inconnues et on traduit chaque donnée. Un demi-périmètre vaut longueur + largeur ; des rectangles en grille ont des produits d'aires en croix égaux ; un agrandissement de rapport k multiplie les aires par k²." },
  { n: 22, court: "Cercles, tangentes, chemins", titre: "Cercles, tangentes, plus courts chemins",
    texte: "Un point de tangence aligne les centres ou crée un angle droit : on fait donc apparaître des triangles rectangles. Pour un plus court chemin, une symétrie transforme le trajet brisé en ligne droite." },
  { n: 23, court: "Figures inscrites", titre: "Figures inscrites",
    texte: "Une figure inscrite touche le cercle ou la sphère par ses sommets : sa plus grande diagonale est un diamètre. On ramène tout à un triangle rectangle ou à un angle au centre." },
  { n: 24, court: "Solides, dés et patrons", titre: "Solides, dés et patrons",
    texte: "On suit un petit nombre d'éléments (trois faces autour d'un coin, les faces opposées) et on compte faces, arêtes et sommets avec la relation d'Euler : sommets − arêtes + faces = 2." },
  { n: 25, court: "Géométrie du triangle", titre: "Géométrie du triangle : Pythagore, Thalès, trigonométrie, aires relatives", nouveau: true,
    texte: "On nomme les longueurs et on repère les triangles rectangles et semblables : Pythagore donne les longueurs, Thalès et les rapports d'aires donnent les proportions, la trigonométrie sert dès qu'un angle est connu. Une aire dans une figure se ramène à des aires de triangles de même base ou de même hauteur." },
  { n: 26, court: "Probabilités", titre: "Probabilités : cas favorables sur cas possibles", nouveau: true,
    texte: "Une probabilité est un nombre de cas favorables divisé par le nombre de cas possibles équiprobables : on dénombre avec soin (arbre, tableau), ou on suit l'évolution d'un état d'un tour au suivant. Un jeu équilibré se traduit par l'égalité de deux probabilités." }
];

(function () {
  "use strict";
  var Q = window.QUIZ;
  if (!Q) return;
  var CLE = "quiz-patterns-" + Q.annee;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- 1. Rappel des 26 patterns ----------
  var liste = $("patterns");
  QUIZ_PATTERNS.forEach(function (p) {
    var li = document.createElement("li");
    li.className = "pat";
    var n = document.createElement("span"); n.className = "pat-n"; n.textContent = p.n;
    var h = document.createElement("h3"); h.textContent = p.titre;
    if (p.nouveau) { var nv = document.createElement("span"); nv.className = "nv"; nv.textContent = "nouveau"; h.appendChild(document.createTextNode(" ")); h.appendChild(nv); }
    var t = document.createElement("p"); t.textContent = p.texte;
    li.appendChild(n); li.appendChild(h); li.appendChild(t);
    liste.appendChild(li);
  });

  // ---------- 2. Listes de choix ----------
  var selects = Array.prototype.slice.call(document.querySelectorAll("select[data-pb]"));
  selects.forEach(function (sel) {
    var o = document.createElement("option");
    o.value = ""; o.textContent = "— choisir un pattern —";
    sel.appendChild(o);
    QUIZ_PATTERNS.forEach(function (p) {
      var op = document.createElement("option");
      op.value = String(p.n);
      op.textContent = p.n + ". " + p.court;
      sel.appendChild(op);
    });
  });

  var nom = $("prenom"), erreur = $("erreur"), compteur = $("compteur");

  // ---------- Sauvegarde locale (facultative) ----------
  function sauver() {
    try {
      var rep = {};
      selects.forEach(function (s) { if (s.value) rep[s.dataset.pb] = s.value; });
      localStorage.setItem(CLE, JSON.stringify({ nom: nom.value, rep: rep }));
    } catch (e) { /* stockage indisponible : sans importance */ }
  }
  function restaurer() {
    try {
      var d = JSON.parse(localStorage.getItem(CLE) || "null");
      if (!d) return;
      if (d.nom) nom.value = d.nom;
      selects.forEach(function (s) { if (d.rep && d.rep[s.dataset.pb]) s.value = d.rep[s.dataset.pb]; });
    } catch (e) { /* ignoré */ }
  }

  function maj() {
    var n = 0;
    selects.forEach(function (s) {
      var fait = !!s.value;
      if (fait) n++;
      var carte = s.closest(".pb");
      if (carte) carte.classList.toggle("fait", fait);
    });
    compteur.textContent = n + " réponse" + (n > 1 ? "s" : "") + " sur " + selects.length;
    sauver();
  }
  restaurer(); maj();
  selects.forEach(function (s) { s.addEventListener("change", maj); });
  nom.addEventListener("input", function () {
    nom.removeAttribute("aria-invalid"); erreur.textContent = ""; sauver();
  });

  // ---------- 3. Bouton « Terminé » ----------
  function construireMessage(prenom, court) {
    var L = [];
    L.push("Bonjour,");
    L.push("");
    L.push("Voici mes réponses au quiz des patterns (quarts de finale FFJM " + Q.annee + ").");
    L.push("");
    L.push("Prénom : " + prenom);
    L.push("");
    selects.forEach(function (s) {
      var num = s.dataset.pb;
      if (s.value) {
        var p = QUIZ_PATTERNS[Number(s.value) - 1];
        L.push("Problème " + num + " : pattern " + p.n + (court ? " (" + p.court + ")" : ""));
      } else {
        L.push("Problème " + num + " : pas de réponse");
      }
    });
    L.push("");
    L.push("Message généré par la page du quiz.");
    return L.join("\r\n");
  }

  function terminer() {
    var prenom = nom.value.trim().slice(0, 60);
    if (!prenom) {
      nom.setAttribute("aria-invalid", "true");
      erreur.textContent = "Indiquez votre prénom avant de terminer.";
      nom.scrollIntoView({ block: "center" });
      nom.focus();
      return;
    }
    var vides = selects.filter(function (s) { return !s.value; }).length;
    if (vides > 0 && !window.confirm(vides + " problème" + (vides > 1 ? "s sont" : " est") + " sans réponse. Terminer quand même ?")) return;

    var sujet = "Quiz patterns FFJM " + Q.annee + " – " + prenom;
    var corps = construireMessage(prenom, true);
    // Certains logiciels de messagerie coupent les liens mailto trop longs : on retire alors les noms des patterns.
    if (encodeURIComponent(corps).length > 1800) corps = construireMessage(prenom, false);
    var lien = "mailto:" + QUIZ_EMAIL + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);

    $("apercu").textContent = "À : " + QUIZ_EMAIL + "\r\nObjet : " + sujet + "\r\n\r\n" + corps;
    $("rouvrir").setAttribute("href", lien);
    $("adresse").textContent = QUIZ_EMAIL;
    $("copie").onclick = function () {
      var texte = "Objet : " + sujet + "\r\n\r\n" + corps;
      var fin = function (ok) { $("copie").textContent = ok ? "Message copié ✓" : "Copie impossible : sélectionnez le texte"; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texte).then(function () { fin(true); }, function () { fin(false); });
      } else { fin(false); }
    };
    $("resultat").hidden = false;
    $("resultat").scrollIntoView({ block: "start" });

    // Ouvre la messagerie avec le message déjà rédigé.
    var a = document.createElement("a");
    a.href = lien;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  $("termine").addEventListener("click", terminer);
  $("quiz").addEventListener("submit", function (e) { e.preventDefault(); terminer(); });
})();
