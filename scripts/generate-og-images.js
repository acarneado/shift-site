// Génère les images Open Graph (1200×630) de chaque page à partir du
// template scripts/og-image.html, en remplaçant __LABEL__ par l'étiquette
// de section. Sortie : public/images/og/<slug>.jpg.
//
// Usage : node scripts/generate-og-images.js
// (nécessite playwright — déjà en devDependency le temps de générer les
// visuels ; peut être retiré une fois les images stables si besoin.)

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const TEMPLATE_PATH = path.resolve(__dirname, "og-image.html");
const OUT_DIR = path.resolve(__dirname, "../public/images/og");
const TMP_DIR = path.resolve(__dirname, ".tmp-og");

// slug = nom de fichier de sortie ; label = étiquette affichée (vide = masquée, cas Accueil).
const PAGES = [
  { slug: "accueil", label: "" },
  { slug: "accompagnements", label: "Accompagnements" },
  { slug: "coaching-individuel", label: "Coaching individuel" },
  { slug: "formations", label: "Formations" },
  { slug: "atelier-theatre", label: "Atelier théâtre" },
  { slug: "diagnostic", label: "Diagnostic" },
  { slug: "le-declic", label: "Le Déclic" },
  { slug: "ressources", label: "Ressources" },
  { slug: "rendez-vous", label: "Prendre rendez-vous" },
];

async function main() {
  const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });

  // executablePath n'est utile que dans certains environnements sandboxés où
  // Chromium est préinstallé à un chemin fixe (PLAYWRIGHT_BROWSERS_PATH) ; en
  // local, `npx playwright install chromium` suffit et ce chemin est ignoré.
  const sandboxChromium = "/opt/pw-browsers/chromium";
  const launchOptions = fs.existsSync(sandboxChromium) ? { executablePath: sandboxChromium } : {};
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  for (const { slug, label } of PAGES) {
    const html = template.replace("__LABEL__", label);
    const tmpFile = path.join(TMP_DIR, `${slug}.html`);
    fs.writeFileSync(tmpFile, html, "utf8");

    await page.goto("file://" + tmpFile);
    await page.waitForTimeout(500); // laisse le temps aux web fonts de s'appliquer
    const outFile = path.join(OUT_DIR, `${slug}.jpg`);
    await page.screenshot({ path: outFile, type: "jpeg", quality: 92 });
    console.log("✓", path.relative(process.cwd(), outFile));
  }

  await browser.close();
  fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
