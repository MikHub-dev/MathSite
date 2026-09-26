# Étape 3 : mise en service de l'agent Claude quotidien

L'agent tourne dans GitHub Actions, chaque matin vers 6 h (heure de Paris), ou à la demande.
Il utilise votre abonnement Claude Pro : aucune clé API payante.

## Ce que fait l'agent à chaque passage

1. Un script lit les issues « reponse-eval » créées par le Worker. Il ignore toute issue ouverte
   par un autre compte que le vôtre.
2. Pour chaque évaluation dont la date limite est passée et qui a reçu des copies, Claude rédige le
   corrigé, note chaque copie selon le barème et écrit un commentaire. Si un élève a envoyé
   plusieurs fois, seul le dernier envoi compte.
3. Claude crée les évaluations prévues dans `programme-evaluations.json` dont le jour est arrivé,
   ou celle demandée à la main.
4. Un second script vérifie tout avant publication : compilation, aucun fichier modifié hors de
   `evaluations/` et `notes/`, une note pour chaque copie reçue et aucune autre, un corrigé pour
   chaque question, aucun corrigé dans une évaluation encore ouverte. Au moindre écart, rien n'est
   publié et les réponses sont reprises le lendemain.
5. Commit et push sur `main`, fermeture des issues traitées, puis lancement du workflow de
   publication existant `static.yml` (« Deploy static content to Pages ») pour mettre le site à jour.

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

## Utilisation au quotidien

- **Rien à faire** : l'agent passe chaque matin. S'il n'y a ni copie à corriger ni évaluation à
  créer, il s'arrête en quelques secondes sans utiliser votre abonnement.
- **Planifier les évaluations** : modifiez `programme-evaluations.json` (classe, date de
  publication, chapitre, notions, durée pour répondre). Les dates passées déjà publiées sont
  ignorées.
- **À la demande** (le « bouton ») : **Run workflow**, avec
  - « Clôturer maintenant » pour corriger une évaluation sans attendre sa date limite ;
  - « Créer une nouvelle évaluation » avec la classe et, si vous voulez, le sujet.
  C'est aussi disponible dans l'application mobile GitHub.
- **Avant de travailler en local** : faites toujours `git pull`, puisque l'agent pousse lui-même
  sur `main`.

## Bon à savoir

- **Quota** : l'agent consomme votre quota Claude Pro, partagé avec vos conversations. Si le quota
  est atteint, le passage échoue sans rien publier et les copies sont reprises le lendemain.
- **Relecture** : une note publiée peut être corrigée à la main dans `notes/…`, suivie de
  `node outils/compiler-evaluations.mjs`, d'un commit et d'un push.
- **Planification suspendue** : GitHub désactive les tâches planifiées d'un dépôt public après
  60 jours sans activité. Pendant l'année scolaire, les commits de l'agent l'empêchent ; après
  les vacances, réactivez-la dans l'onglet Actions si nécessaire.
- **Heure de passage** : elle n'est pas garantie à la minute, GitHub peut décaler un passage
  planifié de quelques dizaines de minutes.
