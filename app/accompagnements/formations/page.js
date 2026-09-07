import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Formations — SHIFT",
  description:
    "Des formats courts pour outiller managers et équipes sur la posture managériale, la légitimité et la prise de poste, adaptés au contexte de l'entreprise.",
};

const CE_QUON_TRAITE = [
  "Prise de parole en public",
  "Gestion et régulation du stress",
  "Collaboration et relationnel",
  "Gestion des conflits",
  "Posture de manager-coach",
  "Synchronisation et écoute",
];

const BENEFICES = [
  "Des repères concrets et partagés au sein d'une équipe",
  "Une prise de parole plus assurée, y compris face à un groupe",
  "Des tensions mieux identifiées, avant qu'elles ne s'installent",
  "Une posture managériale mieux outillée, entre proximité et autorité",
  "Une meilleure écoute et une coopération plus fluide au quotidien",
  "Un langage commun, qui reste après la formation",
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
          Des formats courts pour outiller managers et équipes sur la posture managériale, la légitimité et
          la prise de poste, adaptés au contexte de l&apos;entreprise. Certains s&apos;appuient sur des mises
          en situation inspirées du théâtre.
        </p>
      </section>

      <section style={{ padding: "16px clamp(20px,6vw,64px) 48px", display: "flex", flexWrap: "wrap", gap: 40 }}>
        <div style={{ flex: "1 1 320px", borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
            Ce qu&apos;on y traite
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.6, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {CE_QUON_TRAITE.map((item) => (
              <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ width: 7, height: 7, minWidth: 7, borderRadius: "50%", background: "var(--accent)", marginTop: 8 }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", borderLeft: "2px solid var(--primary)", paddingLeft: 20 }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
            Les bénéfices
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.6, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {BENEFICES.map((item) => (
              <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ width: 7, height: 7, minWidth: 7, borderRadius: "50%", background: "var(--primary)", marginTop: 8 }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      <section style={{ padding: "8px clamp(20px,6vw,64px) 64px" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(32px,5vw,48px)" }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
            Comment ça se déroule
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: "0 0 16px", maxWidth: 600 }}>
            Le besoin est cadré directement avec l&apos;entreprise pour définir la thématique et les
            participants concernés.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            La formation se déroule sur un format adapté au besoin : de 1h30 à 2h pour un format court,
            jusqu&apos;à une demi-journée ou une journée complète, dans les locaux de l&apos;entreprise ou à
            distance selon les besoins.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 88px" }}>
        <div
          style={{
            background: "var(--primary)",
            color: "var(--bg)",
            borderRadius: 24,
            padding: "clamp(36px,6vw,56px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(22px,2.8vw,28px)", margin: 0, maxWidth: 460 }}>
            Envie de parler de votre besoin ?
          </h2>
          <Link
            href="/rendez-vous"
            className="btn-on-dark"
            style={{ padding: "14px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Parlons de votre besoin
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
