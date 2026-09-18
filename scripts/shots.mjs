/**
 * QA screenshots at exact viewports, plus a horizontal-overflow check.
 *
 * Usage: node scripts/shots.mjs [baseUrl] [outDir]
 * Defaults to the dev server on 5173.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const base = process.argv[2] ?? "http://localhost:5173";
const outDir = process.argv[3] ?? "shots";
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
];

const routes = ["/", "/services", "/services/flooring", "/work", "/work/stair-construction", "/about", "/contact"];

const browser = await chromium.launch();
const problems = [];

for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });

  // The site sets `scroll-behavior: smooth`, so a plain scrollTo animates and
  // a scripted sweep never actually reaches the lower sections. Every scroll
  // below is explicitly instant.
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#root > *", { timeout: 15_000 }).catch(() => {});
    await page.waitForTimeout(1200);

    // Drive every reveal so nothing is captured mid-transition.
    // Stepped from Node rather than inside one long page.evaluate: an in-page
    // loop starves requestAnimationFrame, so the reveal registry never runs
    // and sections get captured still hidden.
    // Re-read the height each step: it grows as lazy media resolves, and a
    // single up-front reading stops the sweep short of the last sections.
    for (let y = 0, guard = 0; guard < 200; guard++) {
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      if (y > height) break;
      await page.evaluate((v) => window.scrollTo({ top: v, behavior: "instant" }), y);
      await page.waitForTimeout(50);
      y += 200;
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(700);

    const stuck = await page.evaluate(
      () => document.querySelectorAll(".reveal:not(.is-visible), .reveal-block:not(.is-visible)").length,
    );
    if (stuck > 0) problems.push(`${vp.name} ${route}: ${stuck} element(s) never revealed`);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 0) {
      problems.push(`${vp.name} ${route}: ${overflow}px horizontal overflow`);
    }

    const slug = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
    await page.screenshot({
      path: join(outDir, `${vp.name}--${slug}.png`),
      fullPage: route === "/",
    });
  }
  await page.close();
  console.log(`  ${vp.name} done`);
}

await browser.close();

if (problems.length) {
  console.log("\nHORIZONTAL OVERFLOW:");
  for (const p of problems) console.log("  " + p);
} else {
  console.log("\nNo horizontal overflow at any viewport.");
}
