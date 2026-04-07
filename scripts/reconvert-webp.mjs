/**
 * reconvert-webp.mjs  — resize + convert PNGs to WebP
 *
 * Max widths:
 *   - p1–p14 (project cards, 3-col grid on desktop) → 2400px wide (retina 2×)
 *   - internship slides (full-width lightbox)        → 3200px wide
 *   - small UI screenshots (mobile section, 2062px)  → 1600px wide
 *   - profile / design-approach                      → 1400px wide (original size)
 */

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, basename, dirname, relative } from "path";

const QUALITY = 90; // เพิ่มจาก 85

// Map: filename pattern → max width
const MAX_WIDTH_MAP = [
  { match: /^p\d+\.png$/i,            maxW: 2400 }, // project thumbnails
  { match: /^profile\.png$/i,         maxW: 1400 }, // profile photo
  { match: /^design-approach\.png$/i, maxW: 1400 },
  { match: /^\d+\.png$/i,             maxW: 2400 }, // slideshow images (ใช้ใน lightbox)
];

function getMaxWidth(filename) {
  for (const rule of MAX_WIDTH_MAP) {
    if (rule.match.test(filename)) return rule.maxW;
  }
  return 2400; // safe fallback
}

const publicDir = join(process.cwd(), "public");

async function convertDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) { await convertDir(fullPath); continue; }

    const ext = extname(entry.name).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const outPath = fullPath.replace(/\.(png|jpe?g)$/i, ".webp");
    const maxW = getMaxWidth(entry.name);

    try {
      const meta = await sharp(fullPath).metadata();
      const resizeOpts = meta.width > maxW ? { width: maxW } : {};

      await sharp(fullPath)
        .resize(resizeOpts)
        .webp({ quality: QUALITY })
        .toFile(outPath);

      const newMeta = await sharp(outPath).metadata();
      const origKB = Math.round(statSync(fullPath).size / 1024);
      const newKB  = Math.round(statSync(outPath).size / 1024);
      const rel    = relative(publicDir, outPath);

      console.log(
        `✓ ${rel.padEnd(45)} ${meta.width}×${meta.height} → ${newMeta.width}×${newMeta.height}  |  ${origKB}KB → ${newKB}KB`
      );
    } catch (err) {
      console.error(`✗ ${entry.name}: ${err.message}`);
    }
  }
}

console.log(`\nConverting at quality=${QUALITY} with smart resize...\n`);
await convertDir(publicDir);
console.log("\nDone!");
