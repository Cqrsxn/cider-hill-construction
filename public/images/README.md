# Website Images & Videos

All files here are served from the site root.
A file named `renovation-01.jpg` is referenced in code as `/images/renovation-01.jpg`.

## Current Assets

| File | Used In |
|------|---------|
| `ciderhillLOGO.jpg` | Header, hero, footer, social section |
| `herovideoupdated.mp4` | Hero background video (current) |
| `fence.mp4` | Work We've Done section |
| `bathroomwallpaper.mp4` | Interior Work section, card 1 |
| `housewallpaper.mp4` | Interior Work section, card 2 |
| `commercialwork.mp4` | Commercial section |
| `facebookvid.mp4` | Social / Follow section |

## Adding Project Photos

Drop web-optimized photos here. Suggested names:
- `project-01.jpg`, `project-02.jpg` — gallery shots
- `renovation-01.jpg`, `deck-repair-01.jpg`, `trim-work-01.jpg` — descriptive names

Wire them into the gallery in `src/data/site.ts`:
```ts
{ label: "Kitchen Remodel", category: "Renovations", image: "/images/renovation-01.jpg" }
```

## Optimization Targets

- Width ~1600px max for hero/feature images, ~1000px for gallery
- JPG quality ~80, or WebP preferred
- Keep each image under ~300 KB when possible
- Videos: compress to under 8MB each if possible; WebM format reduces size further
