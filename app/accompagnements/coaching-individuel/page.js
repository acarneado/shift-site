import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { pageOpenGraph, pageTwitter } from "@/lib/site";

export const metadata = {
  title: "Coaching individuel — SHIFT",
  description:
    "Prise de poste, changement de rôle, sentiment de manque de légitimité, quête de sens : un accompagnement individuel pour avancer sur sa propre situation, à son rythme.",
  openGraph: pageOpenGraph({ routePath: "/accompagnements/coaching-individuel", image: "/images/og/coaching-individuel.jpg" }),
  twitter: pageTwitter({ image: "/images/og/coaching-individuel.jpg" }),
};

const CLUSTERS = [
  {
    title: "Gestion du stress",
    items: ["Gérer les pics de charge et la pression", "Poser des limites saines", "Retrouver de l'énergie durablement"],
  },
  {
    title: "Gestion des conflits",
    items: [
      "Désamorcer une tension avant qu'elle ne s'installe",
      "Exprimer un désaccord sans le subir",
      "Sortir d'une relation professionnelle difficile",
    ],
  },
  {
    title: "Prise de parole & posture",
    items: ["S'exprimer avec aisance face à un groupe", "Trouver sa posture dans un nouveau rôle", "Défendre une idée sans se justifier"],
  },
  {
    title: "Légitimité et confiance",
    items: ["Dépasser le syndrome de l'imposteur", "Affirmer sa place dans une équipe", "Assumer ses décisions"],
  },
  {
    title: "Sens & alignement",
    items: ["Clarifier ce qui compte vraiment", "Réconcilier ses valeurs et sa réalité professionnelle", "Redonner du sens à son quotidien"],
  },
  {
    title: "Changement & transition",
    items: ["Prendre un nouveau poste ou de nouvelles responsabilités", "Traverser une réorganisation", "Anticiper une décision de carrière"],
  },
];

const APPROACH_TILES = [
  {
    title: "Premier échange",
    text: "Cadrer ensemble votre demande, sans engagement",
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
    title: "Format des séances",
    text: "1h à 1h30, séance unique ou jusqu'à 12, à votre rythme",
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
    text: "Selon la situation et votre disposition à vous y prêter, certains outils s'appuient sur des techniques théâtrales",
    bg: "oklch(0.62 0.10 40 / 0.14)",
    color: "var(--accent)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" stroke="none">
        <path d="M9 2c0 3.9 1.1 5 5 5-3.9 0-5 1.1-5 5 0-3.9-1.1-5-5-5 3.9 0 5-1.1 5-5Z" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    text: "Alexandre m'a d'abord aidé à comprendre pourquoi cet objectif était important pour moi, quelles étaient mes motivations profondes pour ce rôle de manager. Ensuite, nous sommes partis de cas concrets pour lister des idées et faire évoluer mon style de management dans la bonne direction. Trois séances ont suffi pour que je me sente aujourd'hui mieux équipé sur ce sujet.",
    name: "Hugo",
  },
  {
    text: "J'ai vraiment compris la force des petites actions et des « petits pas » pour m'amener vers un objectif. Encore aujourd'hui, dès que le doute s'installe, je me pousse à agir et je calibre ces actions de la bonne façon.",
    name: "Camille P.",
  },
];

export default function CoachingIndividuel() {
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

      <section style={{ padding: "clamp(28px,4vw,48px) clamp(20px,6vw,64px) 28px" }}>
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
          Coaching individuel
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0, maxWidth: 620 }}>
          Un espace confidentiel pour avancer à votre rythme sur ce qui vous occupe aujourd&apos;hui, quelle
          que soit votre situation professionnelle. Le temps et le cadre pour comprendre où vous en êtes, et
          construire votre propre manière d&apos;avancer.
        </p>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 40px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
          Ce qu&apos;on y traite
        </p>
        <div className="ci-cluster-grid">
          {CLUSTERS.map((cluster) => (
            <div
              key={cluster.title}
              className="card-hover-lg"
              style={{ border: "1px solid var(--border)", borderRadius: 16, padding: "24px 26px", transition: "all 0.2s ease" }}
            >
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 19, margin: "0 0 14px", color: "var(--primary)" }}>
                {cluster.title}
              </h3>
              <ul
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  color: "oklch(0.4 0.02 50)",
                }}
              >
                {cluster.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 7 }}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 40px" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(28px,4vw,40px)" }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
            Mon approche
          </p>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: 1.4,
              margin: "0 0 24px",
              color: "var(--primary)",
              maxWidth: 520,
            }}
          >
            Créer le cadre pour que vous trouviez vos propres réponses.
          </p>
          <div className="ci-approach-grid">
            {APPROACH_TILES.map((tile) => (
              <div key={tile.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    background: tile.bg,
                    color: tile.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {tile.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 15.5, margin: "0 0 4px", color: "var(--text)" }}>
                    {tile.title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: "var(--muted)" }}>{tile.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 40px" }}>
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

      <section style={{ padding: "0 clamp(20px,6vw,64px) 56px", overflow: "hidden" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
          Témoignages
        </p>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      <Footer />
    </div>
  );
}
