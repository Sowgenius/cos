// Re-encode screenshots through libvips (via sharp). Usage: node scripts/vips-shrink.cjs <indir> <outdir> [width]
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const [, , inDir = "/tmp/cos-polish", outDir = "/tmp/cos-vips", widthArg = "1000"] = process.argv;
const width = parseInt(widthArg, 10);
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(inDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
(async () => {
  for (const f of files) {
    const out = path.join(outDir, f.replace(/\.\w+$/, ".webp"));
    await sharp(path.join(inDir, f))
      .resize({ width, height: 4000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    const kb = (fs.statSync(out).size / 1024).toFixed(0);
    console.log(`${f} -> ${path.basename(out)}  ${kb}KB`);
  }
  console.log(`Done: ${files.length} files via libvips ${sharp.versions.vips}`);
})().catch((e) => { console.error(e.message); process.exit(1); });
