import { Lora, IBM_Plex_Sans } from "next/font/google";
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

export const metadata = {
  title: "SHIFT — Alexandre Carneado, coach professionnel",
  description:
    "Reprendre le pouvoir d'agir sur sa vie professionnelle et devenir acteur de son évolution. Coaching individuel, formations et ateliers théâtre en entreprise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lora.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
