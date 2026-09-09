import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ClusterGrid from "@/components/ClusterGrid";
import SurMesureBlock from "@/components/SurMesureBlock";
import ApproachSection from "@/components/ApproachSection";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";
import { TESTIMONIALS as T } from "@/lib/testimonials";

export const metadata = {
  title: "Coaching individuel — SHIFT",
  description:
    "Prise de poste, changement de rôle, sentiment de manque de légitimité, quête de sens : un accompagnement individuel pour avancer sur sa propre situation, à son rythme.",
  openGraph: pageOpenGraph({ routePath: "/accompagnements/coaching-individuel", image: "/images/og/coaching-individuel.jpg" }),
  twitter: pageTwitter({ image: "/images/og/coaching-individuel.jpg" }),
  alternates: pageCanonical("/accompagnements/coaching-individuel"),
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

const TESTIMONIALS = [T.hugo, T.camilleP];

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
        <ClusterGrid clusters={CLUSTERS} gridClassName="ci-cluster-grid" />
      </section>

      <SurMesureBlock
        heading="Un accompagnement spécifique qui vous correspond"
        body="Au-delà de ces thématiques, chaque accompagnement se construit autour de vos enjeux spécifiques."
      />

      <ApproachSection
        sectionPadding="0 clamp(20px,6vw,64px) 40px"
        cardPadding="clamp(28px,4vw,40px)"
        gridClassName="ci-approach-grid"
        hook="Créer le cadre pour que vous trouviez vos propres réponses."
        hookMarginBottom={24}
        tiles={APPROACH_TILES}
      />

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
