# Cider Hill Construction — Next Steps

Last updated: September 18, 2026 (full redesign)

## Done in the redesign

- Removed the AI-filler copy: the Bluffton/Lowcountry city-list blurbs, the
  20-phrase `<meta name="keywords">` dump, the dead `serviceAreaCopy`, and the
  "Related interior services:" keyword strip. "Lowcountry" went from 42
  mentions to 7.
- Hero video recompressed 9.3 MB -> 1.5 MB, audio track stripped, and it now
  paints a 56 KB WebP poster first so the LCP is an image, not a video.
- Total video payload 56 MB -> 11 MB. `public/` 68 MB -> 13 MB.
- Videos no longer autoplay on load. Sources attach only near the viewport and
  playback pauses when offscreen, so a page decodes one video instead of eight.
- New section language modelled on orwell.au, plus a 3D coverflow carousel for
  services.
- Every route prerenders to real HTML with its own title, description and
  canonical.
- Fixed: no navigation existed between 768px and 1024px.
- Contact form moved from a `mailto:` handoff to Netlify Forms.
- Added `/services`, `/work`, `/work/:slug`, `/about`, `/contact` and a real 404.

## Needs Carson

- [ ] **Proof tile numbers.** The three tiles on the homepage are non-numeric
      (Licensed & Insured / Owner-Operated / Free Estimates) because there are
      no verified figures anywhere in the project and inventing them was not an
      option. Real numbers (years in trade, jobs completed) would strengthen
      that section. They go in `proofPoints` in `src/data/site.ts`.
- [ ] **Reviews.** `reviews` in `src/data/site.ts` is still an empty array. The
      About page shows an honest "leave a review" ask while it is empty. Do not
      fabricate any.
- [ ] **Enable Netlify form detection** for the site, or the contact form will
      accept submissions and drop them.
- [ ] **Confirm the domain.** Canonical URLs are written as
      `https://ciderhillconstruction.com`. If that domain is not being pointed
      here, change the base in `src/hooks/usePageMeta.ts`.
- [ ] **Confirm Netlify builds from `Cqrsxn/cider-hill-construction`.**
      `netlify.toml` is now committed with the build command and publish dir.

## Optional later

- [ ] Real photography. The site is built entirely from frames of the existing
      phone videos. They hold up better than expected, but a half-day shoot
      would lift the full-bleed bands more than any code change.
- [ ] Swap in Epic Pro. `--font-display` in `src/index.css` already lists
      "Epic Pro" first, so adding one `@font-face` block makes it take over
      with no other edit.
