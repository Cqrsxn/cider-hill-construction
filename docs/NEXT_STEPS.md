# Cider Hill Construction Website — Next Steps

Last updated: June 24, 2026

## Priority 1 — Deploy (Do This First)

- [ ] Connect GitHub repo (`https://github.com/Cqrsxn/cider-hill-construction`) to Netlify or Vercel
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Once deployed, update canonical URL in `index.html` and `index.html` JSON-LD schema
- [ ] Point domain `ciderhillconstruction.com` to host

## Priority 2 — Content (Client Provides)

- [ ] Get real project photos from client → drop in `public/images/` → wire into `src/data/site.ts` gallery items
- [ ] Get real customer reviews → add to `reviews` array in `src/data/site.ts`
- [ ] Confirm SimplyWise booking link is active and correct

## Priority 3 — Performance

- [ ] Compress `fence.mp4` (currently 36MB) — target under 8MB via HandBrake or ffmpeg
- [ ] Compress `facebookvid.mp4` (10MB) — target under 4MB
- [ ] Add a poster image for the hero video (static screenshot shown before video loads)
- [ ] Consider converting all videos to WebM for smaller file sizes
- [ ] Run Lighthouse audit once deployed, fix any scores below 70

## Priority 4 — Form Backend

- [ ] Connect contact form to Netlify Forms or Formspree
  - Currently uses mailto: fallback — functional but not ideal
  - Netlify Forms: add `netlify` attribute to `<form>` tag, deploy on Netlify

## Priority 5 — Cleanup

- [ ] Remove or archive `public/images/herovideo.mp4` (old hero, no longer used)
- [ ] Update `public/images/README.md` to remove Tristan/owner-photo references
- [ ] Update parent project `README.md` to remove Tristan references

## Priority 6 — SEO / Analytics

- [ ] Add `sitemap.xml` once domain is confirmed
- [ ] Add Google Analytics or Plausible if client wants traffic tracking
- [ ] Submit to Google Search Console after deployment
- [ ] Consider adding a blog/news section for ongoing SEO content

## Priority 7 — Mobile Testing

- [ ] Test all 11 service pages on real mobile devices
- [ ] Test StickyMobileCTA on various iOS/Android devices
- [ ] Test hero video autoplay on mobile (some browsers require user gesture)
