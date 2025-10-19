import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "../src/assets");

const supportedFormats = [".png", ".jpg", ".jpeg"];

let totalOriginalSize = 0;
let totalOptimizedSize = 0;
let filesProcessed = 0;

async function getAllImageFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(await getAllImageFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedFormats.includes(ext)) {
        results.push(filePath);
      }
    }
  }

  return results;
}

async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(new RegExp(`${ext}$`), ".webp");

  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Skipping ${path.basename(imagePath)} (WebP already exists)`);
    return;
  }

  try {
    const originalStats = fs.statSync(imagePath);
    const originalSize = originalStats.size;

    await sharp(imagePath).webp({ quality: 80 }).toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;

    totalOriginalSize += originalSize;
    totalOptimizedSize += webpSize;
    filesProcessed++;

    const savings = ((originalSize - webpSize) / originalSize) * 100;
    const originalMB = (originalSize / 1024 / 1024).toFixed(2);
    const webpMB = (webpSize / 1024 / 1024).toFixed(2);

    console.log(
      `✅ ${path.basename(imagePath)}: ${originalMB}MB → ${webpMB}MB (${savings.toFixed(1)}% smaller)`
    );
  } catch (error) {
    console.error(`❌ Error processing ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log("🔍 Finding images in src/assets...\n");

  const imageFiles = await getAllImageFiles(assetsDir);

  console.log(`📸 Found ${imageFiles.length} images to process\n`);

  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 OPTIMIZATION SUMMARY");
  console.log("=".repeat(60));
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized total size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);

  if (filesProcessed > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100;
    const savedMB = ((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2);
    console.log(`Total savings: ${savedMB}MB (${totalSavings.toFixed(1)}% smaller)`);
    console.log("\n✨ Optimization complete!");
    console.log(
      "\n💡 Next steps:\n   1. Update image imports to use .webp extensions\n   2. Test the site\n   3. Delete old .png/.jpg files if everything works"
    );
  } else {
    console.log("\n✅ All images already optimized!");
  }
}

main();
