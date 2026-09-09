import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtelierTheatreScene from "@/components/AtelierTheatreScene";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";
import { TESTIMONIALS as T } from "@/lib/testimonials";

export const metadata = {
  title: "Atelier théâtre en entreprise — SHIFT",
  description:
    "Pour des équipes en entreprise, dans les locaux fournis par l'entreprise. Sortir des automatismes et expérimenter une autre posture, dans un cadre concret.",
  openGraph: pageOpenGraph({ routePath: "/accompagnements/atelier-theatre", image: "/images/og/atelier-theatre.jpg" }),
  twitter: pageTwitter({ image: "/images/og/atelier-theatre.jpg" }),
  alternates: pageCanonical("/accompagnements/atelier-theatre"),
};

const TESTIMONIALS = [T.tristan, T.mathiasV, T.rayanR, T.paulineP, T.pierreL, T.christopherW];

const CE_QUIL_FAUT_SAVOIR = [
  {
    title: "1h30 minimum",
    text: "Durée de l'atelier.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, display: "block", marginBottom: 10 }}>
        <circle cx="16" cy="16" r="11"></circle>
        <path d="M16 9 L16 16 L21 19"></path>
      </svg>
    ),
  },
  {
    title: "Bienveillant, ludique, énergique",
    text: "Un cadre accueillant, sans jugement, où la surprise fait partie du jeu.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, display: "block", marginBottom: 10 }}>
        <path d="M16 4 C16 10 18 14 24 16 C18 18 16 22 16 28 C16 22 14 18 8 16 C14 14 16 10 16 4 Z"></path>
      </svg>
    ),
  },
  {
    title: "Aucun prérequis",
    text: "Aucune notion de jeu d'acteur ou de performance n'est requise. L'objectif reste d'expérimenter, pas de jouer un rôle.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, display: "block", marginBottom: 10 }}>
        <circle cx="16" cy="16" r="11"></circle>
        <path d="M11 16.5 L14.5 20 L21.5 12"></path>
      </svg>
    ),
  },
  {
    title: "6 à 12 participants",
    text: "Format sur-mesure possible pour un événement spécial (team building).",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: 26, height: 26, stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, display: "block", marginBottom: 10 }}>
        <circle cx="11" cy="12" r="4"></circle>
        <path d="M4 26 C4 20 7 17 11 17 C15 17 18 20 18 26"></path>
        <circle cx="22" cy="13" r="3.4"></circle>
        <path d="M17 26 C17.3 21.5 19.5 19 22 19 C25.5 19 28 22 28 26"></path>
      </svg>
    ),
  },
];

export default function AtelierTheatre() {
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

      <AtelierTheatreScene>
        <section style={{ position: "relative", padding: "clamp(72px,10vw,120px) clamp(20px,20vw,220px) 16px", color: "oklch(0.92 0.01 60)", textAlign: "center" }}>
          <Link
            href="/accompagnements"
            style={{ display: "inline-block", fontSize: 13, color: "oklch(0.78 0.01 60)", borderBottom: "1px solid oklch(0.4 0.03 155)", margin: "0 0 20px" }}
          >
            ← Accompagnements
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              fontWeight: 500,
              fontSize: "clamp(30px,4.5vw,46px)",
              lineHeight: 1.2,
              margin: "0 auto 24px",
              maxWidth: 700,
            }}
          >
            Et si vous pouviez sortir du cadre, le temps d&apos;un atelier&nbsp;?
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "oklch(0.84 0.01 60)", margin: "0 auto", maxWidth: 620 }}>
            Pour des équipes en entreprise. Un temps à part, où l&apos;on joue, on essaie, on se trompe, on
            recommence, pour se retrouver autrement.
          </p>
        </section>

        <section id="zone1" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "41px clamp(20px,20vw,220px)", color: "oklch(0.92 0.01 60)", textAlign: "center" }}>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 560 }}>
            <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent-soft)", margin: "0 0 16px" }}>
              Coulisses
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "oklch(0.84 0.01 60)", margin: 0 }}>
              On commence là où ça résiste : la peur d&apos;être vu, le jugement qu&apos;on imagine déjà,
              l&apos;envie de bien faire qui empêche d&apos;oser. On bouge, on respire, on active la voix, on
              sort du corps assis et du ton feutré des salles de réunion, et on laisse tomber, une couche à
              la fois, ce qui retient de se montrer tel qu&apos;on est.
            </p>
          </div>
        </section>

        <section id="zone2" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "41px clamp(20px,20vw,220px)", color: "oklch(0.92 0.01 60)", textAlign: "center" }}>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 620 }}>
            <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent-soft)", margin: "0 0 16px" }}>
              Le seuil
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "oklch(0.84 0.01 60)", margin: 0 }}>
              Puis vient l&apos;élan : des mises en situation progressives, où chaque pas engage un peu plus
              sans jamais forcer. Écouter l&apos;autre avant de répondre, se synchroniser sans un mot, oser
              une première improvisation dans un cadre où l&apos;erreur ne coûte rien. On rit, on se trompe,
              on recommence, et sans s&apos;en rendre compte, on se voit déjà un peu autrement.
            </p>
          </div>
        </section>

        <section id="zone3" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "41px clamp(20px,20vw,220px) 8vh", color: "oklch(0.94 0.01 60)", textAlign: "center" }}>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 660 }}>
            <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent-soft)", margin: "0 0 16px" }}>
              Sur scène
            </p>
            <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(27px,2vw + 20px,40px)", lineHeight: 1.2, margin: "0 0 18px" }}>
              Et puis, sans qu&apos;on l&apos;ait vu venir, quelque chose se dénoue.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "oklch(0.86 0.01 60)", margin: 0 }}>
              Le groupe avance vers des improvisations en binôme, puis en groupe entier, selon la confiance
              qui s&apos;installe. On n&apos;a plus le temps de trop réfléchir : il faut écouter, réagir,
              faire confiance à ce que l&apos;autre propose et à ce qu&apos;on a soi-même à offrir. Un temps
              est aussi consacré au texte, pour apprendre à porter une intention. L&apos;atelier se termine
              souvent par une grande improvisation collective, où chacun peut entrer en jeu, et en ressortir
              avec cette légèreté particulière qu&apos;on a quand on a osé, que ça a marché, et qu&apos;on
              n&apos;y croyait qu&apos;à moitié en arrivant.
            </p>
          </div>
        </section>
      </AtelierTheatreScene>

      <section id="zone4" data-zone4-start="true" style={{ position: "relative", zIndex: 3, background: "var(--bg)", padding: "clamp(48px,7vw,80px) clamp(20px,6vw,64px) 64px" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(32px,5vw,48px)" }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent)", margin: 0 }}>
            Ce qu&apos;il faut savoir
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(24px,4vw,44px) clamp(20px,4vw,40px)", marginTop: "1.5rem" }}>
            {CE_QUIL_FAUT_SAVOIR.map((item) => (
              <div key={item.title}>
                {item.icon}
                <p style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "1.2rem", color: "var(--text)", margin: "0 0 6px" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 3, background: "var(--bg)", padding: "0 clamp(20px,6vw,64px) 88px" }}>
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

      <section style={{ position: "relative", zIndex: 3, background: "var(--bg)", padding: "0 clamp(20px,6vw,64px) 72px", overflow: "hidden" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
          Témoignages
        </p>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      <Footer />
    </div>
  );
}
