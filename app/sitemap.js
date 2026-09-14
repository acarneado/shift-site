import { SITE_URL } from "@/lib/site";

// lastModified : date réelle de la dernière modification de contenu de
// chaque page (pas une date recalculée à chaque build/requête, qui ne dit
// rien d'utile à un crawler). À mettre à jour à la main quand le contenu
// d'une page change de façon significative.
// Le header et le footer (logo, signature, nav, liens) sont rendus sur
// chaque page : toute modification qui les touche met donc à jour la
// date de TOUTES les routes, pas seulement celle qui a motivé le
// changement.
const ROUTES = [
  { path: "/", lastModified: "2026-09-14", changeFrequency: "weekly", priority: 1.0 },
  { path: "/le-declic", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/accompagnements", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/accompagnements/coaching-individuel", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.7 },
  { path: "/accompagnements/formations", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.7 },
  { path: "/accompagnements/atelier-theatre", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.7 },
  { path: "/diagnostic", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ressources", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/rendez-vous", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", lastModified: "2026-09-14", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mentions-legales", lastModified: "2026-09-14", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return ROUTES.map(({ path: routePath, lastModified, changeFrequency, priority }) => ({
    url: `${SITE_URL}${routePath}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
