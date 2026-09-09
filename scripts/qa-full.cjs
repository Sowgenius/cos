// Full-path capture for polish: every section at desktop + mobile, reveals
// fired and images loaded. Also nav-scrolled state.
const { chromium } = require("playwright-core");
const fs = require("fs");

function findChrome() {
  const base = `${process.env.HOME}/Library/Caches/ms-playwright`;
  const dirs = fs.readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse();
  for (const build of dirs)
    for (const sub of ["chrome-mac-x64", "chrome-mac"])
      for (const app of ["Google Chrome for Testing", "Chromium"]) {
        const p = `${base}/${build}/${sub}/${app}.app/Contents/MacOS/${app}`;
        if (fs.existsSync(p)) return p;
      }
  throw new Error("no chromium");
}
async function settle(page) {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
}
const sections = ["top", "a-propos", "experience", "recherche", "projets", "freelance", "competences", "formation", "contact"];

(async () => {
  const browser = await chromium.launch({ executablePath: findChrome() });
  const out = "/tmp/cos-polish";
  fs.mkdirSync(out, { recursive: true });

  for (const [tag, vp, mobile] of [
    ["d", { width: 1440, height: 900 }, false],
    ["m", { width: 390, height: 844 }, true],
  ]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await settle(page);
    for (const id of sections) {
      const loc = page.locator(`#${id}`);
      if (await loc.count()) {
        await loc.scrollIntoViewIfNeeded();
        await page.waitForTimeout(350);
        await loc.screenshot({ path: `${out}/${tag}-${id}.png` }).catch(() => {});
      }
    }
    await ctx.close();
  }
  await browser.close();
  console.log("polish shots ->", out);
})().catch((e) => { console.error(e.message); process.exit(1); });
