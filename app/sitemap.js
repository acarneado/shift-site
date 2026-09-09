import { SITE_URL } from "@/lib/site";

const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/le-declic", changeFrequency: "monthly", priority: 0.8 },
  { path: "/accompagnements", changeFrequency: "monthly", priority: 0.8 },
  { path: "/accompagnements/coaching-individuel", changeFrequency: "monthly", priority: 0.7 },
  { path: "/accompagnements/formations", changeFrequency: "monthly", priority: 0.7 },
  { path: "/accompagnements/atelier-theatre", changeFrequency: "monthly", priority: 0.7 },
  { path: "/diagnostic", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ressources", changeFrequency: "monthly", priority: 0.8 },
  { path: "/rendez-vous", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
