# Cider Hill Construction — Website

Marketing website for **Cider Hill Construction and Handyman Services LLC**, an owner-operated construction and handyman business based in Bluffton, SC.

## Business Info

| Field | Value |
|-------|-------|
| Business name | Cider Hill Construction and Handyman Services LLC |
| Location | Bluffton, SC 29910 |
| Phone | (207) 337-3008 |
| Email | ciderhillconstruction@gmail.com |
| Facebook | https://www.facebook.com/profile.php?id=61582238305331 |
| Booking link | https://www.simplywise.com/booking-link/ciderhillconstruction.simplywise.com/ |
| GitHub repo | https://github.com/Cqrsxn/cider-hill-construction |

## Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 (CSS `@theme` tokens in `src/index.css`)
- **Routing:** react-router-dom v7
- **Fonts:** Fraunces (display) + Inter (sans) via Google Fonts

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5174
```

## Build

```bash
npm run build
# Output in dist/
```

## Deploy

Connect the GitHub repo to Netlify or Vercel:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

## Folder Structure

```
website/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/              ← videos and logo (served at /images/*)
│       ├── ciderhillLOGO.jpg
│       ├── herovideoupdated.mp4   ← current hero video
│       ├── fence.mp4
│       ├── bathroomwallpaper.mp4
│       ├── housewallpaper.mp4
│       ├── commercialwork.mp4
│       └── facebookvid.mp4
├── src/
│   ├── components/          ← all React components
│   ├── data/
│   │   ├── site.ts          ← single source of truth for business info + content
│   │   └── service-pages.ts ← data for 11 SEO service pages
│   ├── pages/
│   │   └── ServicePage.tsx  ← dynamic service page template
│   ├── App.tsx              ← routing (/ and /services/:slug)
│   ├── main.tsx
│   └── index.css            ← Tailwind @theme design tokens
├── docs/
│   ├── NEXT_STEPS.md
│   └── session-recaps/
│       └── 2026-06-24-cider-hill-construction.md
└── index.html               ← SEO meta, JSON-LD schema
```

## Important Notes

- **Content source of truth:** `src/data/site.ts` — edit business info, services, and copy here
- **Logo:** `public/images/ciderhillLOGO.jpg` — circular badge logo, used in header, footer, hero, social section
- **No fake content:** No invented reviews, no fake licenses, no fabricated credentials
- **Service pages:** 11 SEO pages at `/services/:slug` — data in `src/data/service-pages.ts`
- **Primary CTA everywhere:** SimplyWise booking link (not the contact form)

## Adding Photos

Drop web-ready photos in `public/images/` and wire them into `src/data/site.ts` gallery items:

```ts
{ label: "Deck Repair", category: "Outdoor Projects", image: "/images/deck-01.jpg" }
```

## Adding Reviews

Add real customer reviews to the `reviews` array in `src/data/site.ts`:

```ts
export const reviews: Review[] = [
  { name: "Jane D.", text: "Great work on our bathroom!" },
];
```
