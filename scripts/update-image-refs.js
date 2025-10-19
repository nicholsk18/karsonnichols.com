import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, "../src");

const fileExtensions = [".astro", ".mdx", ".tsx", ".ts", ".jsx", ".js"];
const imageExtensions = [".png", ".jpg", ".jpeg"];

let filesUpdated = 0;
let referencesUpdated = 0;

async function getAllSourceFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file === "node_modules" || file === ".git") continue;
      results = results.concat(await getAllSourceFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (fileExtensions.includes(ext)) {
        results.push(filePath);
      }
    }
  }

  return results;
}

function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let updated = false;
  let count = 0;

  for (const ext of imageExtensions) {
    const regex = new RegExp(`(["'\`])([^"'\`]*\\.${ext.slice(1)})(["'\`])`, "gi");
    const matches = content.match(regex);

    if (matches) {
      content = content.replace(regex, (match, quote1, imagePath, quote2) => {
        const newPath = imagePath.replace(new RegExp(`${ext}$`, "i"), ".webp");
        count++;
        return `${quote1}${newPath}${quote2}`;
      });
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content, "utf-8");
    filesUpdated++;
    referencesUpdated += count;
    console.log(`✅ ${path.relative(process.cwd(), filePath)}: ${count} reference(s) updated`);
  }
}

async function main() {
  console.log("🔍 Finding source files in src/...\n");

  const sourceFiles = await getAllSourceFiles(srcDir);

  console.log(`📄 Found ${sourceFiles.length} source files to scan\n`);

  for (const filePath of sourceFiles) {
    updateImageReferences(filePath);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 UPDATE SUMMARY");
  console.log("=".repeat(60));
  console.log(`Files updated: ${filesUpdated}`);
  console.log(`Total references updated: ${referencesUpdated}`);

  if (filesUpdated > 0) {
    console.log("\n✨ Image references updated!");
    console.log(
      "\n💡 Next steps:\n   1. Test the site (npm run dev)\n   2. Check all images load correctly\n   3. Delete old .png/.jpg files if everything works"
    );
  } else {
    console.log("\n✅ No image references found to update!");
  }
}

main();
