# Étape 3 : mise en service de l'agent Claude hebdomadaire

L'agent tourne dans GitHub Actions chaque dimanche à 5 h (heure de Paris, été comme hiver), ou à la
demande depuis l'espace enseignant du site ou l'onglet Actions.
Il utilise votre abonnement Claude Pro : aucune clé API payante.

## Ce que fait l'agent à chaque passage

1. Un script lit les issues « reponse-eval » créées par le Worker (il ignore celles de tout autre
   compte) et retient, pour chaque élève et chaque évaluation, le dernier envoi pas encore corrigé.
2. Claude corrige ces copies : note et commentaire, sans donner les réponses tant que l'évaluation
   est ouverte. Les notes déjà publiées ne sont jamais modifiées.
3. Le dimanche (ou sur demande), Claude crée le lot de la semaine : 4 évaluations par classe, sur le
   thème prévu dans `programme-evaluations.json` ou sur les notions suivantes de la progression.
4. Si vous avez demandé une clôture, Claude publie le corrigé de l'évaluation, qui n'accepte plus
   de réponses.
5. Un second script vérifie tout avant publication, ajoute les dates de réponse et de correction,
   puis publie sur `main`, ferme les issues traitées et lance la mise à jour du site. Une copie ou
   une évaluation oubliée par Claude n'empêche pas la publication du reste : elle est reprise au
   passage suivant.

## 1. Générer le jeton de votre abonnement Claude

Dans le Terminal Linux du Chromebook :

```
npm install -g @anthropic-ai/claude-code
claude setup-token
```

La seconde commande ouvre le navigateur : connectez-vous avec votre compte Claude Pro et autorisez.
Le Terminal affiche ensuite un long jeton. Copiez-le en entier (sélection à la souris puis
Ctrl + Maj + C). Il donne accès à votre abonnement : ne le collez nulle part ailleurs qu'à
l'étape 2.

## 2. Le déclarer dans GitHub

Sur github.com/MikHub-dev/MathSite : **Settings**, puis **Secrets and variables**, puis **Actions**,
puis **New repository secret**.
- Name : `CLAUDE_CODE_OAUTH_TOKEN`
- Secret : le jeton copié

Dans **Settings**, **Actions**, **General**, section « Workflow permissions », choisissez
**Read and write permissions** puis **Save**.

## 3. Ajouter les fichiers au dépôt

`MathSite.zip` contient directement l'arborescence du dépôt, sans dossier englobant. Placez-le
dans Fichiers Linux, puis, depuis votre copie locale du dépôt (par exemple `cd ~/MathSite`) :

```
git pull
unzip -o ~/MathSite.zip -x index.html
git add -A
git commit -m "Étape 3 : agent quotidien des évaluations"
git push
```

`-o` remplace les fichiers existants par les versions consolidées ; `-x index.html` garde votre
`index.html` actuel, qui contient déjà les lignes de la page Évaluations. Le dossier `.github`
commence par un point : il est masqué dans l'application Fichiers, mais bien présent.

## 4. Premier essai : corriger votre copie de test

Sur GitHub, onglet **Actions**, workflow **Agent évaluations**, bouton **Run workflow** :
- Branch : `main`
- Clôturer maintenant l'évaluation : `2026-09-25-priorites-operatoires`
- les deux autres champs vides

Cliquez sur **Run workflow**, puis sur l'exécution qui apparaît pour suivre les étapes
(3 à 6 minutes). À la fin :
- les issues de vos envois de test sont fermées avec un commentaire ;
- après une ou deux minutes, la page Évaluations affiche « Corrigée » pour cette évaluation, avec
  le corrigé ; avec le code `DEMO-0002`, votre note et le commentaire de l'agent.

## Utilisation au fil des semaines

- **Rien à faire** : l'agent passe chaque dimanche à 5 h. GitHub peut décaler un passage planifié
  de quelques dizaines de minutes.
- **Thèmes** : dans `programme-evaluations.json`, ajoutez une entrée `themes` par classe et par
  semaine (date du dimanche) pour imposer un chapitre ; sinon l'agent suit la progression.
- **Espace enseignant** du site : corriger tout de suite les copies reçues, créer le lot de la
  semaine sans attendre dimanche, créer une évaluation supplémentaire, ou clôturer une évaluation
  pour publier son corrigé.
- **Avant de travailler en local** : faites toujours `git pull`, puisque l'agent pousse lui-même
  sur `main`.

## Bon à savoir

- **Quota** : l'agent consomme votre quota Claude Pro, partagé avec vos conversations. Si le quota
  est atteint, le passage échoue sans rien publier et les copies sont reprises le lendemain.
- **Relecture** : une note publiée peut être corrigée à la main dans `notes/…`, suivie de
  `node outils/compiler-evaluations.mjs`, d'un commit et d'un push.
- **Planification suspendue** : GitHub désactive les tâches planifiées d'un dépôt public après
  60 jours sans activité. Pendant l'année scolaire, les commits hebdomadaires de l'agent l'empêchent ;
  après les vacances, réactivez-la dans l'onglet Actions si nécessaire.
- **Durée d'un passage** : avec le lot de la semaine (8 évaluations) et les corrections, un passage
  peut prendre 15 à 40 minutes et consomme une part plus importante de votre quota Claude Pro.
