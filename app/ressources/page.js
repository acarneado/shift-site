import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RessourcesApp from "@/components/RessourcesApp";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";

export const metadata = {
  title: "Ressources — SHIFT",
  description: "Articles sur la posture professionnelle, la légitimité, la prise de parole et le management.",
  openGraph: pageOpenGraph({ routePath: "/ressources", image: "/images/og/ressources.jpg" }),
  twitter: pageTwitter({ image: "/images/og/ressources.jpg" }),
  alternates: pageCanonical("/ressources"),
};

export default function Ressources() {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <RessourcesApp />
      <Footer />
    </div>
  );
}
