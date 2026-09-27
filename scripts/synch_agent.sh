#!/usr/bin/env bash
# synch_agent : intègre automatiquement le contenu de _inbox/ dans le dépôt,
# commit et pousse sur GitHub.
# Usage : bash scripts/synch_agent.sh [run|plan|annuler]
set -uo pipefail
ROOT="$(git rev-parse --show-toplevel)"; cd "$ROOT"
INBOX="$ROOT/_inbox"; STAGE="$ROOT/.inbox-stage"; EXCL="$ROOT/.integrer-exclure"
MODE="${1:-run}"; TS="$(date +%Y%m%d-%H%M%S)"
fin() { echo; echo "RÉSULTAT: $1"; exit "${2:-0}"; }
SELF=(scripts/synch_agent.sh .github/agents/synch_agent.agent.md .github/prompts/synch_agent.prompt.md .github/instructions/synch_agent.instructions.md)
stage_setup() {  # fichiers de l'outil lui-même + ménage
  git add -- .gitignore .integrer-exclure _inbox/.gitkeep 2>/dev/null
  for f in "${SELF[@]}"; do [ -e "$f" ] && git add -- "$f"; done
  [ ${#LEGACY[@]} -gt 0 ] && git add -A -- "${LEGACY[@]}" 2>/dev/null
  return 0
}

# ---------- Mise en place automatique (idempotente) ----------
mkdir -p "$INBOX"; [ -f "$INBOX/.gitkeep" ] || touch "$INBOX/.gitkeep"
touch .gitignore
for l in '_inbox/*' '!_inbox/.gitkeep' '.inbox-stage/'; do
  grep -qxF "$l" .gitignore || echo "$l" >> .gitignore
done
if [ ! -f "$EXCL" ]; then
  printf '%s\n' '# Chemins jamais intégrés depuis _inbox (données réelles)' \
    'evaluations/' 'notes/' 'eleves/' 'evaluations-data.js' > "$EXCL"
  echo "🛡️  Liste d'exclusion créée : .integrer-exclure"
fi
# Nettoyage de l'ancien outil « integrateur »
LEGACY=()
for f in scripts/integrer.sh .github/agents/integrateur.agent.md \
         .github/prompts/integrer.prompt.md INSTALL-INTEGRATEUR.md; do
  [ -e "$f" ] && { git rm -q -f "$f" 2>/dev/null || rm -f "$f"; LEGACY+=("$f"); }
done
[ ${#LEGACY[@]} -gt 0 ] && echo "🧹 Ancien intégrateur retiré : ${LEGACY[*]}"

# ---------- Annulation de la dernière synchro ----------
if [ "$MODE" = annuler ]; then
  last="$(git log -1 --pretty=%s)"
  [[ "$last" == synch_agent:* ]] || fin "ERREUR — le dernier commit n'est pas une synchro ($last)" 1
  git pull --rebase --autostash -q || fin "ERREUR — git pull a échoué" 1
  git revert --no-edit HEAD && git push -q || fin "ERREUR — annulation impossible" 1
  fin "OK — synchro annulée ($last)"
fi

# ---------- Extraction ----------
extract_zip() {  # $1 zip  $2 destination
  local tmp; tmp="$(mktemp -d)"
  unzip -q -o "$1" -d "$tmp" || { echo "❌ Zip illisible : $(basename "$1")"; rm -rf "$tmp"; return 1; }
  rm -rf "$tmp/__MACOSX"; find "$tmp" -name .DS_Store -delete
  while IFS= read -r z; do extract_zip "$z" "$(dirname "$z")"; rm -f "$z"; done \
    < <(find "$tmp" -type f -name '*.zip')
  for p in mnt/user-data/outputs mnt/user-data/uploads home/claude; do
    [ -d "$tmp/$p" ] && cp -a "$tmp/$p/." "$tmp/"
  done
  rm -rf "$tmp/mnt" "$tmp/home"
  local e; e=( "$tmp"/* )
  if [ ${#e[@]} -eq 1 ] && [ -d "${e[0]}" ] && [ ! -e "$ROOT/$(basename "${e[0]}")" ]; then
    cp -a "${e[0]}/." "$tmp/"; rm -rf "${e[0]}"
  fi
  mkdir -p "$2"; cp -a "$tmp/." "$2/"; rm -rf "$tmp"
}

rm -rf "$STAGE"; mkdir -p "$STAGE"
shopt -s nullglob dotglob
SOURCES=()
for it in "$INBOX"/*; do
  case "$(basename "$it")" in .traites|.sauvegardes|.gitkeep) continue;; esac
  SOURCES+=("$(basename "$it")")
  if [[ -f "$it" && "$it" == *.zip ]]; then extract_zip "$it" "$STAGE" || fin "ERREUR — zip illisible" 1
  elif [ -d "$it" ]; then cp -a "$it/." "$STAGE/"
  else cp -a "$it" "$STAGE/"; fi
done
shopt -u dotglob
if [ ${#SOURCES[@]} -eq 0 ]; then
  rm -rf "$STAGE"
  if [ "$MODE" = run ]; then
    stage_setup
    if ! git diff --cached --quiet; then
      git commit -q -m "synch_agent: installation / maintenance" && { git push -q 2>/dev/null || { git pull --rebase --autostash -q && git push -q; }; } \
        && fin "OK — synch_agent installé et poussé ($(git log -1 --pretty=%h)). _inbox/ est vide : dépose un zip puis relance."
      fin "ERREUR — push de l'installation refusé. Lance 'git status'." 1
    fi
  fi
  fin "RIEN — _inbox/ est vide. Dépose un zip dans _inbox puis relance."
fi
echo "📦 Sources : ${SOURCES[*]}"

# ---------- Exclusions ----------
while IFS= read -r x; do
  x="${x%%$'\r'}"; [ -z "$x" ] || [ "${x:0:1}" = "#" ] && continue
  x="${x%/}"
  while IFS= read -r hit; do rm -rf "$hit"; echo "🚫 Exclu : ${hit#$STAGE/}"; done \
    < <(find "$STAGE" -path "$STAGE/$x" -o -path "$STAGE/*/$x" 2>/dev/null | sort -r)
done < "$EXCL"
# fichiers internes au dépôt jamais écrasés
rm -rf "$STAGE/.git" "$STAGE/_inbox" "$STAGE/.inbox-stage"

# ---------- Bilan ----------
NEW=(); MOD=(); SAME=()
while IFS= read -r f; do
  rel="${f#$STAGE/}"
  if [ ! -e "$ROOT/$rel" ]; then NEW+=("$rel")
  elif cmp -s "$f" "$ROOT/$rel"; then SAME+=("$rel")
  else MOD+=("$rel"); fi
done < <(find "$STAGE" -type f | sort)
echo "🆕 Nouveaux (${#NEW[@]})";  for x in "${NEW[@]}"; do echo "   + $x"; done
echo "✏️  Modifiés (${#MOD[@]})"; for x in "${MOD[@]}"; do echo "   ~ $x ($(diff "$ROOT/$x" "$STAGE/$x" | grep -c '^[<>]') lignes)"; done
echo "＝ Identiques (${#SAME[@]})"

if [ "$MODE" = plan ]; then rm -rf "$STAGE"; fin "PLAN — rien n'a été modifié."; fi

# ---------- Mise à jour depuis GitHub avant d'écrire ----------
git pull --rebase --autostash -q || fin "ERREUR — git pull --rebase a échoué (conflit ?). Lance 'git status'." 1

# ---------- Application ----------
for m in "${MOD[@]}"; do
  mkdir -p "$INBOX/.sauvegardes/$TS/$(dirname "$m")"; cp -a "$ROOT/$m" "$INBOX/.sauvegardes/$TS/$m"
done
cp -a "$STAGE/." "$ROOT/"; rm -rf "$STAGE"
mkdir -p "$INBOX/.traites/$TS"
find "$INBOX" -mindepth 1 -maxdepth 1 ! -name .traites ! -name .sauvegardes ! -name .gitkeep \
  -exec mv {} "$INBOX/.traites/$TS/" \;

# ---------- Commit & push ----------
stage_setup; git add -- "${NEW[@]}" "${MOD[@]}" 2>/dev/null
if git diff --cached --quiet; then fin "OK — aucun changement : tout était déjà à jour."; fi
git commit -q -m "synch_agent: ${SOURCES[*]} (${#NEW[@]} nouveaux, ${#MOD[@]} modifiés)" \
  || fin "ERREUR — commit impossible" 1
if ! git push -q 2>/dev/null; then
  git pull --rebase --autostash -q && git push -q || fin "ERREUR — push refusé. Lance 'git status' et montre le résultat." 1
fi
fin "OK — $(git log -1 --pretty='%h %s') poussé sur $(git branch --show-current). Anciennes versions : _inbox/.sauvegardes/$TS"
