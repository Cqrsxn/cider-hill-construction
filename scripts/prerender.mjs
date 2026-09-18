/**
 * Post-build prerender.
 *
 * Loads every route in headless Chromium and writes the settled DOM to
 * dist/<route>/index.html, so the site ships real HTML with per-route titles
 * and meta instead of an empty <div id="root">.
 *
 * Why not vite-react-ssg: it imports `react-router-dom/server.js`, which
 * react-router 7 no longer exports, and its current release also requires
 * Vite 6+. This project is on react-router 7.18 and Vite 5.4. Playwright was
 * already a devDependency, so this costs no new packages and no downgrade.
 */
import { preview } from "vite";
import { chromium } from "playwright";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

/** Pull slugs straight out of the data files so routes cannot drift. */
function slugsFrom(file) {
  const src = readFileSync(join(root, "src/data", file), "utf8");
  return [...src.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

const routes = [
  "/",
  "/services",
  ...slugsFrom("services.ts").map((s) => `/services/${s}`),
  "/work",
  ...slugsFrom("projects.ts").map((s) => `/work/${s}`),
  "/about",
  "/contact",
  "/404",
];

const server = await preview({
  root,
  preview: { port: 4321, strictPort: true, open: false },
});
const base = `http://localhost:4321`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const rendered = new Map();
let failures = 0;

for (const route of routes) {
  // Neither networkidle nor load: a looping background video holds its
  // connection open and blocks both. Wait for React to mount instead.
  const response = await page.goto(base + route, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#root > *", { timeout: 15_000 }).catch(() => {});
  await page.waitForTimeout(500);

  const html = await page.evaluate(() => {
    // The inline bootstrap sets this to arm the pre-reveal state. Baking it
    // into static HTML would ship the page with its headlines invisible to
    // anyone without JS, crawlers included. The script re-adds it on load.
    document.documentElement.removeAttribute("data-reveal-ready");
    return "<!doctype html>\n" + document.documentElement.outerHTML;
  });

  if (!response?.ok() || !html.includes("<h1")) {
    console.warn(`  ! ${route} rendered without an <h1>`);
    failures++;
  }
  rendered.set(route, html);
  console.log(`  ${route}`);
}

// Write only after every route is captured, so a half-written dist/ is never
// served back into a later snapshot.
for (const [route, html] of rendered) {
  const out = join(root, "dist", route === "/" ? "index.html" : `${route}/index.html`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, "utf8");
}

await browser.close();
await server.close();

console.log(`\nPrerendered ${rendered.size} routes${failures ? `, ${failures} suspect` : ""}.`);
process.exit(failures ? 1 : 0);
