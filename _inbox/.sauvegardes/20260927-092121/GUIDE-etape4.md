# Étape 4 : l'espace enseignant (lancer l'agent depuis le site)

Tout se fait depuis les sites web, sans Terminal. Comptez 15 minutes.

Sur la page Évaluations, un lien discret « Espace enseignant » (sous les encadrés de droite) ouvre
une page protégée par un mot de passe. Elle permet de lancer l'agent tout de suite, avec deux
options facultatives (clôturer et corriger une évaluation ouverte, créer une nouvelle évaluation),
et affiche les cinq derniers passages : en attente, en cours, réussi ou échec, avec un lien vers
le détail dans GitHub.

Le mot de passe n'est stocké que dans le Worker, comme secret. Chaque lancement exige aussi la
vérification Turnstile.

## 1. Donner au jeton GitHub du Worker la permission de lancer l'agent

1. Sur github.com, cliquez sur votre avatar en haut à droite, puis **Settings**,
   **Developer settings**, **Personal access tokens** et **Fine-grained tokens**.
2. Cliquez sur le jeton utilisé par le Worker, puis sur **Edit**.
3. Dans **Repository permissions**, passez **Actions** à **Read and write**.
4. Cliquez sur **Update** en bas de page.

La valeur du jeton ne change pas : rien à modifier dans Cloudflare pour ce point.

## 2. Déclarer le mot de passe dans Cloudflare

1. Sur dash.cloudflare.com, ouvrez **Workers & Pages** puis **mathsite-formulaires**.
2. Onglet **Settings**, rubrique **Variables and Secrets**, bouton **Add**.
3. Type : **Secret** ; nom : `ADMIN_PASSWORD` ; valeur : votre mot de passe.
4. Enregistrez avec **Deploy** (ou **Save**).

Choisissez un mot de passe long (au moins 12 caractères), que vous n'utilisez nulle part ailleurs.

## 3. Mettre à jour le code du Worker

1. Toujours dans **mathsite-formulaires**, cliquez sur **Edit code** (icône `</>`, en haut à droite).
2. Dans l'éditeur, cliquez dans le fichier ouvert (`index.js` ou `worker.js`), faites **Ctrl + A** puis
   **Suppr**.
3. Ouvrez le fichier `worker/src/index.js` fourni (version 1.1), copiez tout son contenu et collez-le.
4. Cliquez sur **Deploy**.

Si un jour vous redéployez avec `npx wrangler deploy`, utilisez bien cette version 1.1 de
`worker/src/index.js` : sinon l'ancienne version, sans l'espace enseignant, reviendrait.

## 4. Mettre à jour le site sur GitHub

Sur github.com/MikHub-dev/MathSite, branche **main** :

1. **Add file**, puis **Upload files** : glissez `evaluations.js` (version 1.6) et `evaluations.css`
   (version 1.1), puis **Commit changes**. Ils remplacent les anciens.
2. Ouvrez le dossier `worker/src`, puis **Add file**, **Upload files** : glissez `index.js`
   (version 1.1) et faites un commit, pour que le dépôt garde la même version que Cloudflare.

Le workflow « Deploy static content to Pages » met le site à jour tout seul en une ou deux minutes.

## 5. Essayer

1. Rechargez le site avec **Ctrl + Maj + R**, ouvrez **Évaluations** puis **Espace enseignant**.
2. Saisissez le mot de passe. La liste des derniers passages de l'agent doit s'afficher.
3. Cliquez sur **Lancer l'agent** sans option. Un passage « Lancement manuel » apparaît en quelques
   secondes, « En cours » puis « Réussi ». La page se met à jour toute seule toutes les 15 secondes.

Messages possibles :
- « Mot de passe incorrect » : vérifiez `ADMIN_PASSWORD` (point 2).
- « GitHub a refusé le lancement… permission Actions » : le point 1 n'a pas été enregistré.
- Rien ne se passe au clic : attendez la coche de la vérification Cloudflare au-dessus du bouton.

Le mot de passe reste mémorisé jusqu'à la fermeture de l'onglet ; « Se déconnecter » l'efface
tout de suite.
