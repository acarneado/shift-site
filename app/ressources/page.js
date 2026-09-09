import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RessourcesApp from "@/components/RessourcesApp";
import { SHARE_TITLE, SHARE_DESCRIPTION, ogImage } from "@/lib/site";

export const metadata = {
  title: "Ressources — SHIFT",
  description: "Articles sur la posture professionnelle, la légitimité, la prise de parole et le management.",
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ogImage("/images/og/ressources.jpg"),
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/images/og/ressources.jpg"],
  },
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
