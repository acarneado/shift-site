import { Lora, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, SHARE_TITLE, SHARE_DESCRIPTION, ogImage } from "@/lib/site";
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
// (Accueil, et toute page qui ne définit pas son propre openGraph.images,
// ex. Mentions légales). Chaque page.js peut surcharger `openGraph.images`
// avec son propre visuel — voir scripts/generate-og-images.js.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    siteName: "SHIFT",
    locale: "fr_FR",
    type: "website",
    images: ogImage("/images/og/accueil.jpg"),
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/images/og/accueil.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lora.variable} ${ibmPlexSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
