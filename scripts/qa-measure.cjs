// Measure the rendered DOM to verify layout defects without screenshots.
const { chromium } = require("playwright-core");
const fs = require("fs");
function findChrome() {
  const base = `${process.env.HOME}/Library/Caches/ms-playwright`;
  for (const build of fs.readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse())
    for (const sub of ["chrome-mac-x64", "chrome-mac"])
      for (const app of ["Google Chrome for Testing", "Chromium"]) {
        const p = `${base}/${build}/${sub}/${app}.app/Contents/MacOS/${app}`;
        if (fs.existsSync(p)) return p;
      }
  throw new Error("no chromium");
}
(async () => {
  const browser = await chromium.launch({ executablePath: findChrome() });
  for (const [tag, vp, mobile] of [["desktop", { width: 1440, height: 900 }, false], ["mobile", { width: 390, height: 844 }, true]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: mobile });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const r = await page.evaluate(() => {
      const out = {};
      const nav = document.getElementById("topnav");
      const navRect = nav?.getBoundingClientRect();
      out.navBottom = navRect ? Math.round(navRect.bottom) : null;
      const name = document.querySelector(".hero-name");
      const nameRect = name?.getBoundingClientRect();
      out.heroNameTop = nameRect ? Math.round(nameRect.top) : null;
      out.heroNameOverlapsNav = navRect && nameRect ? nameRect.top < navRect.bottom : null;
      // hero media frame vs image fill
      const frame = document.querySelector(".hero-media .frame");
      const img = document.querySelector(".hero-media .frame img");
      if (frame && img) {
        const fr = frame.getBoundingClientRect(), ir = img.getBoundingClientRect();
        out.heroFrame = { w: Math.round(fr.width), h: Math.round(fr.height) };
        out.heroImg = { w: Math.round(ir.width), h: Math.round(ir.height) };
        out.heroImgFillsFrame = Math.abs(ir.height - fr.height) < 4;
        out.heroImgNaturalRatio = img.naturalWidth + "x" + img.naturalHeight;
      }
      // counters
      out.counters = Array.from(document.querySelectorAll(".metric .n")).map((n) => n.textContent);
      // horizontal overflow
      out.overflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth
        ? document.documentElement.scrollWidth - document.documentElement.clientWidth : 0;
      // mobile menu button visible?
      const mt = document.getElementById("menu-open");
      out.menuToggleVisible = mt ? getComputedStyle(mt).display !== "none" : null;
      const navlinks = document.querySelector(".nav-links");
      out.navLinksVisible = navlinks ? getComputedStyle(navlinks).display !== "none" : null;
      return out;
    });
    console.log(`\n== ${tag} (${vp.width}x${vp.height}) ==`);
    console.log(JSON.stringify(r, null, 2));
    await ctx.close();
  }
  await browser.close();
})().catch((e) => { console.error(e.message); process.exit(1); });
