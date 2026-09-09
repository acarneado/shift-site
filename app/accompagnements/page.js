import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";

export const metadata = {
  title: "Accompagnements — SHIFT",
  description:
    "Coaching individuel, formations et ateliers théâtre en entreprise : trois formats, pour des besoins différents.",
  openGraph: pageOpenGraph({ routePath: "/accompagnements", image: "/images/og/accompagnements.jpg" }),
  twitter: pageTwitter({ image: "/images/og/accompagnements.jpg" }),
  alternates: pageCanonical("/accompagnements"),
};

function Tag({ children, accent, bg }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: accent ? "oklch(0.62 0.10 40 / 0.1)" : bg || "var(--bg)",
        border: accent ? "1px solid oklch(0.62 0.10 40 / 0.4)" : "none",
        borderRadius: 999,
        padding: "8px 16px",
      }}
    >
      {children}
    </div>
  );
}

export default function Accompagnements() {
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

      <section style={{ padding: "clamp(56px,10vw,110px) clamp(20px,6vw,64px) 48px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 14px" }}>
          Accompagnements
        </p>
        <span style={{ display: "block", width: 32, height: 2, background: "var(--accent)", margin: "0 0 20px" }}></span>
        <h1
          style={{
            fontFamily: "var(--font-lora), serif",
            fontWeight: 500,
            fontSize: "clamp(30px,4.5vw,46px)",
            lineHeight: 1.2,
            margin: "0 0 24px",
            maxWidth: 960,
          }}
        >
          Trois formats, pour des besoins différents.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted)", margin: 0, maxWidth: 620 }}>
          Pour une personne ou pour une équipe, en individuel ou à l&apos;échelle de l&apos;entreprise.
        </p>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 96px", display: "flex", flexDirection: "column", gap: 2 }}>
        <div
          className="card-hover-lg"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "clamp(32px,5vw,48px)",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 18px" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 999,
                background: "var(--primary-wash)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="9" cy="9" r="5.5"></circle>
              </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 26, margin: 0, color: "var(--primary)" }}>
              <span style={{ color: "var(--accent-tag)" }}>01</span> · Coaching individuel
            </h2>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, margin: 0, maxWidth: 640, color: "oklch(0.37 0.02 50)" }}>
            Un espace confidentiel pour avancer à votre rythme sur ce qui vous occupe aujourd&apos;hui, quelle
            que soit votre situation professionnelle. Le temps et le cadre pour comprendre où vous en êtes,
            et construire votre propre manière d&apos;avancer.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
            <Tag>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <circle cx="9" cy="9" r="6.2"></circle><line x1="9" y1="5.5" x2="9" y2="9"></line><line x1="9" y1="9" x2="11.6" y2="10.6"></line>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>Séance unique ou jusqu&apos;à 12 séances</span>
            </Tag>
            <Tag>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <path d="M8.5 3H4a1 1 0 0 0-1 1v4.5a1 1 0 0 0 .3.7l7 7a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-.7-.3Z"></path>
                <circle cx="6.3" cy="6.3" r="0.9" fill="var(--primary)" stroke="none"></circle>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>Tarif défini selon l&apos;accompagnement</span>
            </Tag>
            <Tag accent>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="currentColor" stroke="none" style={{ flexShrink: 0, color: "var(--accent)" }}>
                <path d="M9 2c0 3.9 1.1 5 5 5-3.9 0-5 1.1-5 5 0-3.9-1.1-5-5-5 3.9 0 5-1.1 5-5Z"></path>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3, color: "var(--accent-text)" }}>Approche théâtrale en option</span>
            </Tag>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", marginTop: 24, paddingTop: 18, display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="/accompagnements/coaching-individuel"
              className="btn-pill-outline btn-pill-outline--card"
              aria-label="Voir le détail — Coaching individuel"
              style={{ display: "inline-block", padding: "10px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}
            >
              Voir le détail →
            </Link>
          </div>
        </div>

        <div
          className="card-hover-lg"
          style={{
            background: "var(--card-alt)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "clamp(32px,5vw,48px)",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 18px" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 999,
                background: "var(--primary-wash)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="7" cy="9" r="4.5"></circle><circle cx="11.5" cy="9" r="4.5"></circle>
              </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 26, margin: 0, color: "var(--primary)" }}>
              <span style={{ color: "var(--accent-tag)" }}>02</span> · Formations
            </h2>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, margin: 0, maxWidth: 640, color: "oklch(0.37 0.02 50)" }}>
            Des formats courts et concrets, pensés pour donner à vos équipes des repères communs face aux
            situations professionnelles du quotidien. Un temps collectif, adapté à votre contexte
            d&apos;entreprise, pour avancer et évoluer ensemble.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
            <Tag bg="var(--card)">
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <circle cx="9" cy="9" r="6.2"></circle><line x1="9" y1="5.5" x2="9" y2="9"></line><line x1="9" y1="9" x2="11.6" y2="10.6"></line>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>De 1h30 à une journée</span>
            </Tag>
            <Tag bg="var(--card)">
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <path d="M8.5 3H4a1 1 0 0 0-1 1v4.5a1 1 0 0 0 .3.7l7 7a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-.7-.3Z"></path>
                <circle cx="6.3" cy="6.3" r="0.9" fill="var(--primary)" stroke="none"></circle>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>Tarif défini selon le format</span>
            </Tag>
            <Tag accent>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="currentColor" stroke="none" style={{ flexShrink: 0, color: "var(--accent)" }}>
                <path d="M9 2c0 3.9 1.1 5 5 5-3.9 0-5 1.1-5 5 0-3.9-1.1-5-5-5 3.9 0 5-1.1 5-5Z"></path>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3, color: "var(--accent-text)" }}>Approche théâtrale en option</span>
            </Tag>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", marginTop: 24, paddingTop: 18, display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="/accompagnements/formations"
              className="btn-pill-outline btn-pill-outline--card"
              aria-label="Voir le détail — Formations"
              style={{ display: "inline-block", padding: "10px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}
            >
              Voir le détail →
            </Link>
          </div>
        </div>

        <div
          className="card-hover-lg"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "clamp(32px,5vw,48px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 18px" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 999,
                background: "oklch(0.62 0.10 40 / 0.14)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="5" y="5" width="8" height="8" transform="rotate(45 9 9)"></rect>
              </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 26, margin: 0, color: "var(--primary)" }}>
              <span style={{ color: "var(--accent-tag)" }}>03</span> · Atelier théâtre
            </h2>
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, margin: 0, maxWidth: 640, color: "oklch(0.37 0.02 50)" }}>
            Un format collectif et expérientiel pour vos équipes : on y explore, par le jeu plutôt que par
            la théorie, une autre manière d&apos;être, de dire, d&apos;occuper sa place, pour sortir des
            automatismes dans un cadre sécurisant.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--muted-2)", fontStyle: "italic", margin: "14px 0 0", maxWidth: 640 }}>
            Aucune expérience du théâtre n&apos;est nécessaire : l&apos;enjeu n&apos;est pas de bien jouer,
            mais d&apos;oser essayer.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
            <Tag>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <circle cx="9" cy="9" r="6.2"></circle><line x1="9" y1="5.5" x2="9" y2="9"></line><line x1="9" y1="9" x2="11.6" y2="10.6"></line>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>1h30 minimum</span>
            </Tag>
            <Tag>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--primary)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
                <path d="M8.5 3H4a1 1 0 0 0-1 1v4.5a1 1 0 0 0 .3.7l7 7a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-.7-.3Z"></path>
                <circle cx="6.3" cy="6.3" r="0.9" fill="var(--primary)" stroke="none"></circle>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.3 }}>Tarif défini selon le format</span>
            </Tag>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", marginTop: 24, paddingTop: 18, display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="/accompagnements/atelier-theatre"
              className="btn-pill-outline"
              aria-label="Voir le détail — Atelier théâtre"
              style={{ display: "inline-block", padding: "10px 20px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}
            >
              Voir le détail →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
