#!/usr/bin/env bash
# Optimize real project renders + portrait into web assets.
# Pipeline: sips (resize/normalize, strip to sRGB JPEG) -> cwebp (final WebP).
# Keeps a JPEG fallback for the hero/lead images. macOS-native tools; no fragile deps.
set -euo pipefail

SRC="Docs"
OUT="public"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# make WebP at a target long-edge; args: <src> <out-basename-no-ext> <maxdim> <quality>
webp() {
  local src="$1" name="$2" dim="$3" q="${4:-80}"
  sips -s format jpeg -Z "$dim" -s formatOptions 90 "$src" --out "$TMP/x.jpg" >/dev/null 2>&1
  cwebp -quiet -q "$q" "$TMP/x.jpg" -o "$OUT/$name.webp"
  printf "  %-38s %s\n" "$name.webp" "$(du -h "$OUT/$name.webp" | cut -f1)"
}
# also emit a jpeg fallback
jpg() {
  local src="$1" name="$2" dim="$3" q="${4:-80}"
  sips -s format jpeg -Z "$dim" -s formatOptions "$q" "$src" --out "$OUT/$name.jpg" >/dev/null 2>&1
  printf "  %-38s %s\n" "$name.jpg" "$(du -h "$OUT/$name.jpg" | cut -f1)"
}

mkdir -p "$OUT/projects" "$OUT/img"

echo "Portrait:"
# landscape 1080x694 source -> wide crop for the about rail
webp "$SRC/PHOTO-2026-09-05-02-09-01.jpg" "img/portrait" 1200 82
jpg  "$SRC/PHOTO-2026-09-05-02-09-01.jpg" "img/portrait" 1200 80

echo "NAFI DIOM (nafi-1..7):"
i=1
for n in 1 2 3 4 5 6 7; do
  webp "$SRC/MAISON NAFI DIOM/$n.jpg" "projects/nafi-$i" 1600 80
  i=$((i+1))
done
# hero + lead jpeg fallbacks
jpg "$SRC/MAISON NAFI DIOM/1.jpg" "projects/nafi-1" 1600 80

echo "DEMS (dems-1..8):"
i=1
for f in "bonn_1" "bonn_2" "bonn_3" "bonn_4" "bonn_5" "bonn_6" "bonn_8" "bnnn_1"; do
  webp "$SRC/PROJET DEMS 1/PRESENTATION PROJET DEMS/IMAGES/bon/$f - Photo.jpg" "projects/dems-$i" 1600 80
  i=$((i+1))
done

echo "Done. Total public/ image weight:"
du -sh "$OUT/projects" "$OUT/img"
