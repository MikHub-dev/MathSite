#!/usr/bin/env bash
# Intègre dans le dépôt les zips / fichiers / dossiers déposés dans _inbox/
# Usage : scripts/integrer.sh plan | apply | push ["message de commit"]
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"; cd "$ROOT"
INBOX="$ROOT/_inbox"; STAGE="$ROOT/.inbox-stage"
MODE="${1:-plan}"; MSG="${2:-Intégration des fichiers fournis par Claude}"
TS="$(date +%Y%m%d-%H%M%S)"
mkdir -p "$INBOX"

# --- Extraction d'un zip (zips imbriqués compris), avec nettoyage des chemins ---
extract_zip() {  # $1 = zip, $2 = destination
  local tmp; tmp="$(mktemp -d)"
  unzip -q -o "$1" -d "$tmp"
  rm -rf "$tmp/__MACOSX"; find "$tmp" -name .DS_Store -delete
  while IFS= read -r z; do extract_zip "$z" "$(dirname "$z")"; rm -f "$z"; done \
    < <(find "$tmp" -type f -name '*.zip')
  # Chemins internes de Claude : mnt/user-data/outputs/... -> racine
  for p in mnt/user-data/outputs mnt/user-data/uploads home/claude; do
    if [ -d "$tmp/$p" ]; then cp -a "$tmp/$p/." "$tmp/"; fi
  done
  rm -rf "$tmp/mnt" "$tmp/home"
  # Un seul dossier racine inconnu du dépôt (ex. MathSite/) -> on le retire
  local entries; entries=( "$tmp"/* )
  if [ ${#entries[@]} -eq 1 ] && [ -d "${entries[0]}" ] \
     && [ ! -e "$ROOT/$(basename "${entries[0]}")" ]; then
    local one="${entries[0]}"; cp -a "$one/." "$tmp/"; rm -rf "$one"
  fi
  mkdir -p "$2"; cp -a "$tmp/." "$2/"; rm -rf "$tmp"
}

build_stage() {
  rm -rf "$STAGE"; mkdir -p "$STAGE"
  shopt -s nullglob dotglob
  local items=( "$INBOX"/* ); local n=0
  for it in "${items[@]}"; do
    case "$(basename "$it")" in .traites|.sauvegardes|.gitkeep) continue;; esac
    n=$((n+1))
    if [[ -f "$it" && "$it" == *.zip ]]; then extract_zip "$it" "$STAGE"
    elif [ -d "$it" ]; then cp -a "$it/." "$STAGE/"
    else cp -a "$it" "$STAGE/"; fi
  done
  shopt -u dotglob
  [ "$n" -gt 0 ] || { echo "📭 _inbox/ est vide : rien à intégrer."; exit 0; }
}

report() {
  NEW=(); MOD=(); SAME=()
  while IFS= read -r f; do
    rel="${f#$STAGE/}"
    if [ ! -e "$ROOT/$rel" ]; then NEW+=("$rel")
    elif cmp -s "$f" "$ROOT/$rel"; then SAME+=("$rel")
    else MOD+=("$rel"); fi
  done < <(find "$STAGE" -type f | sort)
  echo "🆕 Nouveaux  (${#NEW[@]}) :";  printf '   %s\n' "${NEW[@]:-}"
  echo "✏️  Modifiés  (${#MOD[@]}) :"; for m in "${MOD[@]:-}"; do [ -n "$m" ] && echo "   $m  ($(diff "$ROOT/$m" "$STAGE/$m" | grep -c '^[<>]' || true) lignes changées)"; done
  echo "＝ Identiques (${#SAME[@]})"
}

case "$MODE" in
  plan)  build_stage; report; echo; echo "👉 Rien n'a été modifié. Lancer 'apply' pour appliquer." ;;
  apply|push)
    build_stage; report
    for m in "${MOD[@]:-}"; do [ -n "$m" ] || continue
      mkdir -p "$INBOX/.sauvegardes/$TS/$(dirname "$m")"; cp -a "$ROOT/$m" "$INBOX/.sauvegardes/$TS/$m"; done
    cp -a "$STAGE/." "$ROOT/"
    mkdir -p "$INBOX/.traites/$TS"
    find "$INBOX" -mindepth 1 -maxdepth 1 ! -name .traites ! -name .sauvegardes ! -name .gitkeep \
      -exec mv {} "$INBOX/.traites/$TS/" \;
    rm -rf "$STAGE"
    echo "✅ Appliqué. Sauvegardes : _inbox/.sauvegardes/$TS"
    if [ "$MODE" = push ]; then
      git add -A -- . ':!_inbox' ':!.inbox-stage'
      if git diff --cached --quiet; then echo "Aucun changement à committer."
      else git commit -m "$MSG" && git push && echo "🚀 Poussé sur $(git branch --show-current)"; fi
    fi ;;
  *) echo "Usage : $0 plan | apply | push [\"message\"]"; exit 1 ;;
esac
