---
applyTo: "**"
---
Si l'utilisateur écrit « lance synch_agent » (ou « synch_agent », « synchronise », « intègre l'inbox »), quel que soit l'agent actif :
exécute immédiatement dans le terminal `bash scripts/synch_agent.sh` sans demander de confirmation, puis suis le compte rendu décrit dans `.github/agents/synch_agent.agent.md` (ligne `RÉSULTAT:` : OK / RIEN / ERREUR).
« synch_agent plan » → `bash scripts/synch_agent.sh plan` ; « synch_agent annule » → `bash scripts/synch_agent.sh annuler`.
