# Installation (une seule fois)
1. Dézippe ce paquet à la racine du dépôt (scripts/, .github/, _inbox/).
2. Terminal : `chmod +x scripts/integrer.sh`
3. Ajoute à `.gitignore` :
       _inbox/*
       !_inbox/.gitkeep
       .inbox-stage/
4. `git add -A && git commit -m "Ajout agent Intégrateur" && git push`
