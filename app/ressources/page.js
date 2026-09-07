import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RessourcesApp from "@/components/RessourcesApp";

export const metadata = {
  title: "Ressources — SHIFT",
  description: "Articles sur la posture professionnelle, la légitimité, la prise de parole et le management.",
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
