// Génère l'image Open Graph (1200×630, symbole SHIFT seul — voir
// scripts/og-image.html) et la duplique pour chaque page : le visuel est
// volontairement identique partout, seul le titre/description de partage
// varie par page (voir lib/site.js). Sortie : public/images/og/<slug>.jpg.
//
// Usage : node scripts/generate-og-images.js
// (nécessite playwright — déjà en devDependency le temps de générer les
// visuels ; peut être retiré une fois les images stables si besoin.)

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const TEMPLATE_PATH = path.resolve(__dirname, "og-image.html");
const OUT_DIR = path.resolve(__dirname, "../public/images/og");

const SLUGS = [
  "accueil",
  "accompagnements",
  "coaching-individuel",
  "formations",
  "atelier-theatre",
  "diagnostic",
  "le-declic",
  "ressources",
  "rendez-vous",
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // executablePath n'est utile que dans certains environnements sandboxés où
  // Chromium est préinstallé à un chemin fixe (PLAYWRIGHT_BROWSERS_PATH) ; en
  // local, `npx playwright install chromium` suffit et ce chemin est ignoré.
  const sandboxChromium = "/opt/pw-browsers/chromium";
  const launchOptions = fs.existsSync(sandboxChromium) ? { executablePath: sandboxChromium } : {};
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto("file://" + TEMPLATE_PATH);

  const renderedFile = path.join(OUT_DIR, "accueil.jpg");
  await page.screenshot({ path: renderedFile, type: "jpeg", quality: 92 });

  for (const slug of SLUGS) {
    const outFile = path.join(OUT_DIR, `${slug}.jpg`);
    if (outFile !== renderedFile) fs.copyFileSync(renderedFile, outFile);
    console.log("✓", path.relative(process.cwd(), outFile));
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
