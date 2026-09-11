import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClusterGrid from "@/components/ClusterGrid";
import SurMesureBlock from "@/components/SurMesureBlock";
import ApproachSection from "@/components/ApproachSection";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";

export const metadata = {
  title: "Formations | SHIFT",
  description:
    "Des formats courts pour outiller managers et équipes sur la posture managériale, la légitimité et la prise de poste, adaptés au contexte de l'entreprise.",
  openGraph: pageOpenGraph({ routePath: "/accompagnements/formations", image: "/images/og/formations.jpg" }),
  twitter: pageTwitter({ image: "/images/og/formations.jpg" }),
  alternates: pageCanonical("/accompagnements/formations"),
};

const CLUSTERS = [
  {
    title: "Prise de parole",
    items: ["Trouver une posture stable et ancrée à l'oral", "Maîtriser sa voix, ses gestes et son regard", "Gagner en impact et en force de conviction"],
  },
  {
    title: "Manager coach",
    items: ["Développer une écoute active avec son équipe", "Ajuster sa posture managériale au quotidien", "Fixer des objectifs clairs et suivis"],
  },
  {
    title: "Gestion du stress",
    items: ["Identifier ses propres sources de stress", "Mettre en place des solutions concrètes", "Ancrer de nouveaux réflexes dans la durée"],
  },
  {
    title: "Collaboration et communication",
    items: [
      "Répondre aux objections avec aisance",
      "Comprendre les dynamiques relationnelles à l'œuvre",
      "Sortir d'une dynamique de collaboration toxique",
      "Adopter une communication non violente",
    ],
  },
  {
    title: "Booster sa confiance",
    items: ["Se reconnecter à son expérience et à sa valeur", "Se projeter avec authenticité dans son rôle", "Affirmer sa légitimité et sa prise de place"],
  },
  {
    title: "Se reconnecter à soi",
    items: ["Clarifier ses valeurs professionnelles", "Identifier ses besoins et ses limites", "Interroger ses croyances limitantes"],
  },
];

const APPROACH_TILES = [
  {
    title: "Premier échange",
    text: "Cadrer ensemble le besoin, les participants et le lieu",
    bg: "var(--primary-wash)",
    color: "var(--primary)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="5" cy="9" r="2.3" />
        <circle cx="13" cy="9" r="2.3" />
        <line x1="7.3" y1="9" x2="10.7" y2="9" />
      </svg>
    ),
  },
  {
    title: "Format adapté",
    text: "De 1h30 à une journée complète",
    bg: "var(--primary-wash)",
    color: "var(--primary)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="9" cy="9" r="6.2" />
        <line x1="9" y1="5.5" x2="9" y2="9" />
        <line x1="9" y1="9" x2="11.6" y2="10.6" />
      </svg>
    ),
  },
  {
    title: "Une dimension incarnée",
    text: "Selon le groupe et le contexte, certaines mises en situation s'appuient sur des techniques théâtrales",
    bg: "oklch(0.62 0.10 40 / 0.14)",
    color: "var(--accent)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" stroke="none">
        <path d="M9 2c0 3.9 1.1 5 5 5-3.9 0-5 1.1-5 5 0-3.9-1.1-5-5-5 3.9 0 5-1.1 5-5Z" />
      </svg>
    ),
  },
];

const RYTHME = [
  {
    title: "Mises en situation",
    text: "Reproduire des situations réelles pour s'entraîner concrètement, pas seulement en théorie.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--primary)" strokeWidth="1.5">
        <circle cx="11" cy="10" r="4" />
        <path d="M4 26c0-5 3-8 7-8s7 3 7 8" />
        <circle cx="22" cy="13" r="3.2" />
        <path d="M17 26c0.3-4 3-6.5 6.3-6.5" />
      </svg>
    ),
  },
  {
    title: "Feedback",
    text: "Un retour direct et constructif, sur le vif, pour ajuster tout de suite.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--primary)" strokeWidth="1.5">
        <path d="M5 7h22a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H14l-6 5v-5H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Pratique",
    text: "Apprendre en faisant, plutôt qu'en écoutant seulement.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--primary)" strokeWidth="1.5">
        <path d="M25 10a10 10 0 1 1-3-7" />
        <path d="M25 4v6h-6" />
      </svg>
    ),
  },
  {
    title: "Jeux",
    text: "Des exercices ludiques pour ancrer les apprentissages autrement.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--primary)" strokeWidth="1.5">
        <rect x="6" y="6" width="20" height="20" rx="4" />
        <circle cx="12" cy="12" r="1.4" fill="var(--primary)" stroke="none" />
        <circle cx="20" cy="12" r="1.4" fill="var(--primary)" stroke="none" />
        <circle cx="16" cy="16" r="1.4" fill="var(--primary)" stroke="none" />
        <circle cx="12" cy="20" r="1.4" fill="var(--primary)" stroke="none" />
        <circle cx="20" cy="20" r="1.4" fill="var(--primary)" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Outils activables",
    text: "Des outils simples, à réutiliser dès le lendemain.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--primary)" strokeWidth="1.5">
        <path d="M21 6a5 5 0 0 0-6.9 6l-9 9 3 3 9-9A5 5 0 0 0 23 8l-3.5 3.5-2-2z" />
      </svg>
    ),
  },
];

export default function Formations() {
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

      <section style={{ padding: "clamp(28px,4vw,48px) clamp(20px,6vw,64px) 24px" }}>
        <Link
          href="/accompagnements"
          style={{ display: "inline-block", fontSize: 13, color: "var(--muted)", borderBottom: "1px solid var(--border)", margin: "0 0 20px" }}
        >
          ← Accompagnements
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-lora), serif",
            fontWeight: 500,
            fontSize: "clamp(30px,4.5vw,46px)",
            lineHeight: 1.2,
            margin: "0 0 24px",
            maxWidth: 700,
          }}
        >
          Formations
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0, maxWidth: 620 }}>
          Des formats concrets, pensés pour donner à vos équipes des repères communs face aux
          situations professionnelles du quotidien. Un temps collectif, adapté à votre contexte
          d&apos;entreprise, pour avancer et évoluer ensemble.
        </p>
      </section>

      <section style={{ padding: "16px clamp(20px,6vw,64px) 8px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 24px" }}>
          Ce qu&apos;on y traite
        </p>
        <ClusterGrid clusters={CLUSTERS} gridClassName="fo-cluster-grid" />
      </section>

      <SurMesureBlock
        heading="Ces thématiques ne sont pas une limite."
        body="Si le besoin de votre équipe ne correspond à aucun sujet ci-dessus, une formation peut être conçue spécifiquement, à partir de votre contexte et de vos objectifs."
      />

      <section style={{ padding: "8px clamp(20px,6vw,64px) 40px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 24px" }}>
          Ce qui rythme une formation
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 28 }}>
          {RYTHME.map((r) => (
            <div key={r.title}>
              {r.icon}
              <p style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 16, margin: "12px 0 6px", color: "var(--text)" }}>
                {r.title}
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)", margin: 0 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ApproachSection
        sectionPadding="8px clamp(20px,6vw,64px) 64px"
        cardPadding="clamp(32px,5vw,48px)"
        gridClassName="fo-approach-grid"
        hook="Des outils concrets, ancrés dans le quotidien de vos équipes."
        hookMarginBottom={28}
        tiles={APPROACH_TILES}
      />

      <section style={{ padding: "0 clamp(20px,6vw,64px) 88px" }}>
        <div
          style={{
            background: "var(--primary)",
            color: "var(--bg)",
            borderRadius: 16,
            padding: "clamp(20px,3vw,30px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(17px,1.6vw,20px)", margin: 0, maxWidth: 420 }}>
            Prêt à en discuter&nbsp;?
          </h2>
          <Link
            href="/rendez-vous"
            className="btn-on-dark"
            style={{ padding: "11px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
