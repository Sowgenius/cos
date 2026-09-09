// QA capture: scroll to fire reveals, wait for renders, screenshot projects +
// open the FLIP detail overlay. Uses playwright-core with the cached Chromium.
const { chromium } = require("playwright-core");
const fs = require("fs");

function findChrome() {
  const base = `${process.env.HOME}/Library/Caches/ms-playwright`;
  const dirs = fs.readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort();
  for (const build of dirs.reverse()) {
    for (const sub of ["chrome-mac-x64", "chrome-mac"]) {
      for (const app of ["Google Chrome for Testing", "Chromium"]) {
        const p = `${base}/${build}/${sub}/${app}.app/Contents/MacOS/${app}`;
        if (fs.existsSync(p)) return p;
      }
    }
  }
  throw new Error("no cached chromium found");
}

async function settle(page) {
  // scroll through to trigger IntersectionObserver reveals
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

(async () => {
  const browser = await chromium.launch({ executablePath: findChrome() });
  const out = "/tmp/cos-shots";

  // ---- Desktop ----
  const d = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const dp = await d.newPage();
  await dp.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await settle(dp);
  // projects section
  await dp.locator("#projets").scrollIntoViewIfNeeded();
  await dp.waitForTimeout(600);
  await dp.locator("#projets").screenshot({ path: `${out}/d-projects.png` });
  // about (portrait) section
  await dp.locator("#a-propos").scrollIntoViewIfNeeded();
  await dp.waitForTimeout(400);
  await dp.locator("#a-propos").screenshot({ path: `${out}/d-about.png` });
  // contact
  await dp.locator("#contact").scrollIntoViewIfNeeded();
  await dp.waitForTimeout(300);
  await dp.locator("#contact").screenshot({ path: `${out}/d-contact.png` });
  // open FLIP overlay on first project
  await dp.locator("#projets").scrollIntoViewIfNeeded();
  await dp.locator(".proj-title-btn").first().click();
  await dp.waitForTimeout(900);
  await dp.screenshot({ path: `${out}/d-overlay.png` });
  await d.close();

  // ---- Mobile ----
  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
  const mp = await m.newPage();
  await mp.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await settle(mp);
  await mp.locator("#projets").scrollIntoViewIfNeeded();
  await mp.waitForTimeout(600);
  await mp.locator("#projets").screenshot({ path: `${out}/m-projects.png` });
  await mp.locator(".proj-title-btn").first().click();
  await mp.waitForTimeout(900);
  await mp.screenshot({ path: `${out}/m-overlay.png` });
  await m.close();

  await browser.close();
  console.log("QA shots written to", out);
})().catch((e) => { console.error(e); process.exit(1); });
