import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Recursively find all PNG/JPG files
async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function formatBytes(filePath) {
  const { size } = await stat(filePath);
  return `${(size / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  const images = await findImages(publicDir);
  console.log(`\nFound ${images.length} images to convert\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const src of images) {
    const ext = extname(src);
    const webpPath = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const { size: before } = await stat(src);
    totalBefore += before;

    try {
      await sharp(src)
        .webp({ quality: 82, effort: 4 })
        .toFile(webpPath);

      const { size: after } = await stat(webpPath);
      totalAfter += after;

      const reduction = (((before - after) / before) * 100).toFixed(1);
      const bMB = (before / 1024 / 1024).toFixed(2);
      const aMB = (after / 1024 / 1024).toFixed(2);
      console.log(`✓ ${basename(src).padEnd(25)} ${bMB} MB → ${aMB} MB  (-${reduction}%)`);
    } catch (err) {
      console.error(`✗ ${basename(src)}: ${err.message}`);
    }
  }

  const pct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log(`\n${"─".repeat(55)}`);
  console.log(`Total: ${(totalBefore/1024/1024).toFixed(1)} MB → ${(totalAfter/1024/1024).toFixed(1)} MB  (-${pct}%)`);
  console.log(`\nNext step: update all image src="" in your code`);
  console.log(`  .png → .webp\n`);
}

main().catch(console.error);
