# Website Images

Drop optimized, web-ready photos here. They are served from the site root,
so a file named `renovation-01.jpg` here is referenced in code as
`/images/renovation-01.jpg`.

## Suggested file names
- `hero.jpg` — best overall project shot (used in the Hero)
- `owner.jpg` — photo of Tristan (used in About)
- `project-01.jpg`, `project-02.jpg`, … — gallery shots
- `deck-repair-01.jpg`, `renovation-01.jpg`, `carpentry-01.jpg` — descriptive names welcome

## How to wire them up
1. Place the image file in this folder.
2. Open `src/data/site.ts` and set the `image` field on a gallery item,
   e.g. `{ label: "Kitchen Remodel", category: "Renovations", image: "/images/renovation-01.jpg" }`.
3. For the Hero/About photos, follow the comment at the top of
   `src/components/Hero.tsx` and `src/components/About.tsx`.

## Optimization targets
- Width ~1600px max for hero, ~1000px for gallery
- JPG quality ~80, or WebP
- Keep each file under ~300 KB when possible
