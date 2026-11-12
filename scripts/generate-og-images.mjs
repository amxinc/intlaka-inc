// Generates the Open Graph images (public/og/{en,ar,fr}.png) from HTML templates.
// Run with: node scripts/generate-og-images.mjs   (requires a Playwright Chromium: npx playwright-core install chromium, or CHROMIUM_PATH=/path/to/chrome)
import { chromium } from "playwright-core";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const MARK = await readFile(new URL("../src/assets/intlaka-logo-pack/mark/intlaka-mark-white.svg", import.meta.url), "utf8");

const OG = {
  en: { dir: "ltr", title: "Every dream deserves a platform to take off", tag: "A group of companies between Morocco and Jordan" },
  fr: { dir: "ltr", title: "Chaque rêve mérite une plateforme pour s'envoler", tag: "Un groupe d'entreprises entre le Maroc et la Jordanie" },
  ar: { dir: "rtl", title: "كل حلم يستحق منصة ليحلّق", tag: "مجموعة شركات بين المغرب والأردن" },
};

// The orbits of the site, frozen: three rings, and a body with its trail on each.
const BODY = "#ffffff";
const ORBITS = `<svg class="orbits" viewBox="-300 -300 600 600" fill="none">
  <circle r="58" fill="#fff" fill-opacity=".04" stroke="#fff" stroke-opacity=".16"/>
  <circle r="14" fill="#fff"/>
  ${[[112, 250, 0.2], [190, 320, 0.36], [268, 200, 0.2]]
    .map(([r, deg, o], i) => {
      const x = (r * Math.cos((-64 * Math.PI) / 180)).toFixed(1);
      const y = (r * Math.sin((-64 * Math.PI) / 180)).toFixed(1);
      return `<g transform="rotate(${deg})">
        <linearGradient id="t${i}" gradientUnits="userSpaceOnUse" x1="${x}" y1="${y}" x2="${r}" y2="0"><stop offset="0" stop-color="${BODY}" stop-opacity="0"/><stop offset="1" stop-color="${BODY}"/></linearGradient>
        <circle r="${r}" stroke="#fff" stroke-opacity="${o}" stroke-width="1.5" ${i === 1 ? 'stroke-dasharray="1 9" stroke-linecap="round"' : ""}/>
        <path d="M${x} ${y}A${r} ${r} 0 0 1 ${r} 0" stroke="url(#t${i})" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="${r}" r="7" fill="${BODY}"/>
      </g>`;
    })
    .join("")}
</svg>`;

const FONTS =
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;500&family=IBM+Plex+Sans+Arabic:wght@300;500&family=Inter:wght@400&display=block";

const ogHtml = (locale, { dir, title, tag }) => `<!doctype html>
<html lang="${locale}" dir="${dir}"><head><meta charset="utf-8"><link rel="stylesheet" href="${FONTS}">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; color: #fff;
    font-family: ${locale === "ar" ? "'IBM Plex Sans Arabic'," : ""} Geist, sans-serif;
    background: #0a0a0a;
    display: flex; flex-direction: column; justify-content: space-between; padding: 72px 80px; position: relative; }
  .brand { display: flex; align-items: center; gap: 12px; direction: ltr; ${dir === "rtl" ? "align-self: flex-start;" : ""} }
  .brand svg { width: 60px; height: 60px; ${dir === "rtl" ? "transform: scaleX(-1);" : ""} }
  .brand span { font-family: ${locale === "ar" ? "'IBM Plex Sans Arabic'," : ""} Geist, sans-serif; font-weight: 500; font-size: 38px; letter-spacing: ${locale === "ar" ? 0 : -0.8}px; }
  h1 { font-weight: 300; font-size: ${locale === "ar" ? 84 : 76}px; line-height: ${locale === "ar" ? 1.3 : 1.08}; letter-spacing: ${locale === "ar" ? 0 : -2.4}px; max-width: 980px; }
  p { font-family: ${locale === "ar" ? "'IBM Plex Sans Arabic'," : ""} Inter, sans-serif; font-size: 28px; color: #d4d4d4; margin-top: 24px; }
  .orbits { position: absolute; top: 40px; ${dir === "rtl" ? "left" : "right"}: 64px; width: 300px; height: 300px; }
</style></head><body>
  <div class="brand">${MARK}<span>${locale === "ar" ? "انطلاقة" : "Intlaka"}</span></div>
  <div><h1>${title}</h1><p>${tag}</p></div>
  ${ORBITS}
</body></html>`;

// Set CHROMIUM_PATH to use a Chromium that is already installed.
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
const shot = async (html, width, height) => {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return page.screenshot({ type: "png" });
};

await mkdir(new URL("../public/og/", import.meta.url), { recursive: true });
for (const [locale, content] of Object.entries(OG)) {
  await writeFile(new URL(`../public/og/${locale}.png`, import.meta.url), await shot(ogHtml(locale, content), 1200, 630));
}

await browser.close();
console.log("Open Graph images written to public/og/");
