// Single source of truth for the site's public URL, used by sitemap.js,
// robots.js and the Open Graph/Twitter metadata below. Domain: alexandrecarneado.com
// (acheté le 09/09/2026 — voir Mentions légales §4). NEXT_PUBLIC_SITE_URL reste
// disponible pour surcharger cette valeur (ex. prévisualisations Vercel) sans
// toucher au code.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://alexandrecarneado.com";

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

// Next.js ne fusionne pas l'objet `openGraph` en profondeur entre le layout
// racine et une page : dès qu'une page définit son propre `openGraph`, il
// remplace entièrement celui du layout (url/siteName/locale/type inclus),
// pas seulement les champs précisés. D'où ce helper : toute page qui a besoin
// d'un visuel de partage différent du défaut doit passer par lui plutôt que
// par un objet `openGraph` écrit à la main, pour ne pas perdre ces champs.
export function pageOpenGraph({ routePath = "/", image, imageAlt } = {}) {
  return {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: `${SITE_URL}${routePath === "/" ? "" : routePath}`,
    siteName: "SHIFT",
    locale: "fr_FR",
    type: "website",
    images: ogImage(image, imageAlt),
  };
}

export function pageTwitter({ image } = {}) {
  return {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [image],
  };
}

// Balise canonical de chaque page. Un chemin relatif suffit : Next.js le
// résout contre metadataBase (voir layout.js).
export function pageCanonical(routePath = "/") {
  return { canonical: routePath };
}

// Données structurées (JSON-LD) minimales, sans adresse postale : ce que
// Google affiche déjà publiquement (nom, métier, site, LinkedIn), rien de
// plus exposé qu'aujourd'hui. Rendu une seule fois dans app/layout.js.
export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Carneado",
  jobTitle: "Coach professionnel certifié RNCP 6",
  url: SITE_URL,
  email: "mailto:acarneado.shift@gmail.com",
  sameAs: ["https://www.linkedin.com/in/alexandre-carneado/"],
};
