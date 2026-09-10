import { Lora, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL, SHARE_TITLE, SHARE_DESCRIPTION, pageOpenGraph, pageTwitter, pageCanonical, PERSON_JSON_LD } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

// Titre/description de partage : voir lib/site.js (SHARE_TITLE/SHARE_DESCRIPTION),
// volontairement identiques sur toutes les pages. Ici : le rendu par défaut
// (Accueil, et toute page qui ne définit pas son propre openGraph, ex.
// Mentions légales). Chaque page.js qui a besoin d'un visuel différent doit
// passer par pageOpenGraph/pageTwitter (voir lib/site.js) plutôt que
// d'écrire son propre objet `openGraph` à la main : Next.js remplace cet
// objet entièrement au lieu de le fusionner avec celui du layout, donc un
// objet écrit à la main y perdrait url/siteName/locale/type.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
  openGraph: pageOpenGraph({ routePath: "/", image: "/images/og/accueil.jpg" }),
  twitter: pageTwitter({ image: "/images/og/accueil.jpg" }),
  alternates: pageCanonical("/"),
  verification: { google: "229T0URrc2wZGbE8X89Z9-UsYbbk2mCpwpSSA5AQYYU" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lora.variable} ${ibmPlexSans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
