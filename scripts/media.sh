#!/usr/bin/env bash
# Re-encode Cider Hill source videos to web-sane bitrates and extract stills.
# Source stays untouched in public/images/. Output lands in public/media/.
set -u

SRC="public/images"
VID="public/media/video"
STILL="public/media/still"
mkdir -p "$VID" "$STILL"

# name|source file|poster timestamp
JOBS=(
  "hero|herovideoupdated.mp4|00:00:02.0"
  "fence|fence.mp4|00:00:02.0"
  "stairs|stairsbuild-optimized.mp4|00:00:03.0"
  "kitchen|kitchenremodel-optimized.mp4|00:00:03.5"
  "exterior|houseexterior-optimized.mp4|00:00:02.0"
  "bathroom|bathroomwallpaper.mp4|00:00:04.0"
  "wallpaper|housewallpaper.mp4|00:00:08.0"
  "commercial|commercialwork.mp4|00:00:12.0"
)

for job in "${JOBS[@]}"; do
  IFS='|' read -r name src ts <<< "$job"
  in="$SRC/$src"
  [ -f "$in" ] || { echo "MISSING $in"; continue; }
  echo ">>> $name  ($src)"

  # H.264 baseline: drop audio, sane CRF, faststart so it streams progressively
  ffmpeg -y -v error -i "$in" -an -c:v libx264 -crf 27 -preset slow \
    -pix_fmt yuv420p -movflags +faststart "$VID/$name.mp4"

  # VP9 alternate
  ffmpeg -y -v error -i "$in" -an -c:v libvpx-vp9 -crf 34 -b:v 0 \
    -row-mt 1 -deadline good -cpu-used 3 "$VID/$name.webm"

  # Poster at the chosen beat
  ffmpeg -y -v error -ss "$ts" -i "$in" -frames:v 1 -q:v 3 "$STILL/$name-poster.jpg"

  # WebP alongside the poster: the hero one is the page's LCP image
  ffmpeg -y -v error -i "$STILL/$name-poster.jpg" -c:v libwebp -quality 80     "$STILL/$name-poster.webp"

  # Three candidates at 20/50/80% so a better frame can be picked by eye.
  # Delete these once the poster is chosen; they are not referenced.
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")
  for pct in 20 50 80; do
    t=$(awk -v d="$dur" -v p="$pct" 'BEGIN{printf "%.2f", d*p/100}')
    ffmpeg -y -v error -ss "$t" -i "$in" -frames:v 1 -q:v 3 "$STILL/$name-c$pct.jpg"
  done
done

# The Facebook reel is 90s / 10.6MB and never gets watched. Still only.
ffmpeg -y -v error -ss 00:00:03 -i "$SRC/facebookvid.mp4" -frames:v 1 -q:v 3 \
  "$STILL/facebook-poster.jpg"

echo "=== DONE ==="
du -sh "$VID" "$STILL"
