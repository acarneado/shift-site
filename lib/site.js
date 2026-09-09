// Single source of truth for the site's public URL, used by sitemap.js and
// robots.js. Update NEXT_PUBLIC_SITE_URL (or this fallback) once the final
// domain is live — see Mentions légales §4.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shift-site-kappa.vercel.app";

// Titre/description de partage (Open Graph / Twitter Card), volontairement
// identiques sur toutes les pages — voir SHIFT_Decision_OpenGraph.md (projet
// Claude.ai). Seule l'image varie par page (voir ogImage ci-dessous et
// scripts/generate-og-images.js).
export const SHARE_TITLE = "SHIFT — Alexandre Carneado, coach professionnel";
export const SHARE_DESCRIPTION =
  "Reprendre le pouvoir d'agir sur sa vie professionnelle et devenir acteur de son évolution. Coaching individuel, formations et ateliers théâtre en entreprise.";

// Construit le tableau `images` attendu par openGraph/twitter à partir d'un
// chemin relatif (résolu contre metadataBase). `alt` par défaut = titre de
// partage générique ; à préciser page par page si besoin.
export function ogImage(path, alt = SHARE_TITLE) {
  return [{ url: path, width: 1200, height: 630, alt }];
}
