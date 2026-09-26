# Étape 2 : mise en service du Worker, de Turnstile et des e-mails

Compter environ 30 minutes. Tout est gratuit. Dans ce guide, `PSEUDO/DEPOT` désigne votre dépôt
GitHub et `https://PSEUDO.github.io` l'adresse de votre site.

## 1. Brevo (envoi des e-mails)

1. Créer un compte gratuit sur brevo.com.
2. Dans les paramètres des expéditeurs, ajouter votre adresse e-mail et la valider via le lien reçu.
3. Dans la section des clés API, générer une clé et la noter : c'est `BREVO_API_KEY`.

## 2. Cloudflare Turnstile (anti-robot)

1. Créer un compte gratuit sur cloudflare.com.
2. Dans le tableau de bord, section Turnstile, ajouter un widget :
   nom `MathSite`, nom d'hôte `PSEUDO.github.io`, mode « Géré ».
3. Noter la **clé de site** (publique) et la **clé secrète** (`TURNSTILE_SECRET`).

## 3. GitHub

**Étiquettes.** Dans l'onglet Issues du dépôt, puis Labels, créer : `reponse-eval`,
`amelioration`, `5e`, `seconde`.

**Jeton à portée fine.** Settings du compte, Developer settings, Personal access tokens,
Fine-grained tokens, Generate new token :
- Repository access : *Only select repositories*, votre dépôt uniquement ;
- Permissions : **Issues : Read and write**, **Contents : Read-only** ;
- Expiration : un an maximum, avec un rappel dans votre agenda pour le renouveler.

Noter le jeton : c'est `GITHUB_TOKEN`.

## 4. Déployer le Worker

Avec Node.js installé, depuis le dossier `worker/` du dépôt :

```
npm install
npm test                          # tests hors ligne, doivent tous passer
```

Dans `worker/wrangler.toml`, remplacer `PSEUDO/NOM-DU-DEPOT` et `https://PSEUDO.github.io`. Puis :

```
npx wrangler login                # ouvre le navigateur pour autoriser Wrangler
npx wrangler deploy               # affiche l'adresse du Worker : https://mathsite-formulaires.<compte>.workers.dev
npx wrangler secret put GITHUB_TOKEN
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put BREVO_API_KEY
npx wrangler secret put EMAIL_DESTINATAIRE      # votre adresse, qui reçoit les messages
npx wrangler secret put EMAIL_EXPEDITEUR        # l'adresse validée dans Brevo (souvent la même)
```

Chaque commande `secret put` demande la valeur ; elle n'apparaît jamais dans le dépôt.

## 5. Brancher le site

Dans `evaluations.js`, bloc `EVAL_CONFIG` :

```js
workerUrl: "https://mathsite-formulaires.<compte>.workers.dev",
turnstileSiteKey: "<clé de site Turnstile>",
```

Commit et push. `index.html` charge déjà le script Turnstile.

## 6. Vérifier

1. Ouvrir le site en ligne, onglet Évaluations, évaluation ouverte de 5e, code `DEMO-0002`.
2. Envoyer : une issue « Réponse 5e : … » apparaît dans le dépôt et un e-mail arrive.
3. Essayer `DEMO-0101` (Seconde) sur la même évaluation : refus attendu.
4. Envoyer une demande d'amélioration : issue étiquetée `amelioration` et e-mail.

En cas de problème, `npx wrangler tail` affiche en direct les journaux du Worker.

## Tester en local (facultatif)

Créer `worker/.dev.vars` (exclu de Git) avec les mêmes secrets et les clés de test Turnstile
(`TURNSTILE_SECRET=1x0000000000000000000000000000000AA`), ajouter `http://localhost:8000` à
`ALLOWED_ORIGINS`, lancer `npx wrangler dev`, et servir le site avec `python -m http.server 8000`
en mettant la clé de site de test `1x00000000000000000000AA` dans `evaluations.js`.
Remettre les vraies valeurs avant le push.

## Ce que fait le Worker, en bref

Pour une réponse, il vérifie dans l'ordre : l'origine (votre site uniquement), le jeton Turnstile,
l'existence de l'évaluation, sa date limite (heure de Paris) et l'appartenance du code à la classe
de l'évaluation. Il crée ensuite une issue publique **sans prénom ni code** (seulement l'empreinte),
puis vous envoie l'e-mail avec le prénom et le code. Si Brevo est en panne, l'envoi réussit quand
même : l'issue, qui est la donnée utile, existe déjà.
