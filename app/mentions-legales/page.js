import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mentions légales — SHIFT",
  description: "Informations légales du site SHIFT.",
};

export default function MentionsLegales() {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "oklch(0.97 0.008 60 / 0.96)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid var(--border)",
          padding: "16px clamp(20px,5vw,64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 1, lineHeight: 1.1 }}>
          <span style={{ fontFamily: "var(--font-lora), serif", fontWeight: 600, fontSize: 22, letterSpacing: "0.5px", color: "var(--primary)" }}>
            SHIFT
          </span>
          <span style={{ fontFamily: "var(--font-ibm-plex-sans), sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "0.3px", color: "var(--muted)" }}>
            Alexandre Carneado — Coach professionnel certifié RNCP 6
          </span>
        </Link>
        <Link
          href="/rendez-vous"
          className="btn-pill-primary"
          style={{ padding: "10px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}
        >
          Prendre rendez-vous
        </Link>
      </header>

      <main style={{ flex: 1, padding: "clamp(56px,10vw,120px) clamp(20px,6vw,64px)", maxWidth: 720 }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
          Mentions légales
        </p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(28px,4vw,44px)", margin: "0 0 20px", lineHeight: 1.2 }}>
          Informations légales
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 32px" }}>
          Éditeur, hébergeur, données personnelles : contenu à venir.
        </p>
        <Link href="/" style={{ fontSize: 14, fontWeight: 600, color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
          ← Retour à l&apos;accueil
        </Link>
      </main>

      <Footer />
    </div>
  );
}
