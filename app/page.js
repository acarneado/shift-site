import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroTrace from "@/components/HeroTrace";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// Aperçu "Ressources" masqué tant qu'il n'y a qu'un seul article réel —
// code conservé pour le réactiver dès que le contenu le justifie.
const SHOW_RESOURCES_TEASER = false;

const OFFERINGS = [
  {
    title: "Coaching individuel",
    desc: "Un espace confidentiel pour avancer à votre rythme, vers ce qui compte pour vous.",
    href: "/accompagnements/coaching-individuel",
  },
  {
    title: "Formations",
    desc: "Donner à vos équipes des repères communs pour avancer et évoluer ensemble.",
    href: "/accompagnements/formations",
  },
  {
    title: "Ateliers théâtre",
    desc: "Une parenthèse pour lâcher prise en équipe, gagner en confiance et resserrer les liens, autrement.",
    href: "/accompagnements/atelier-theatre",
  },
];

const TESTIMONIALS = [
  { text: "Trois séances ont suffi pour que je me sente aujourd'hui mieux équipé sur ce sujet.", name: "Hugo" },
  { text: "J'ai cassé des barrières mentales que je m'étais créées. Ça m'a permis de prendre confiance en moi.", name: "Pauline P." },
  { text: "On apprend à accepter les regards, à s'en libérer pour avoir plus d'espace dédié à la création, à l'improvisation, au développement de sa pensée en direct.", name: "Mathias V." },
  { text: "Un chouette moment, fun et libre, pour prendre la parole devant les autres. J'en suis ressorti plus serein dans ma façon de m'exprimer.", name: "Tristan" },
  { text: "J'ai amélioré ma capacité à prendre la parole en public, à me détacher de la peur du jugement.", name: "Pierre Lablache Combier" },
  { text: "J'arrive à plus me lâcher dans des contextes d'improvisation, et j'ai le goût d'y revenir !", name: "Rayan R." },
  { text: "Par le biais des exercices de théâtre animés par Alexandre, j'arrivais à me recentrer avec moi-même, évacuer le stress, canaliser mes émotions et mieux les communiquer.", name: "Une personne accompagnée en atelier expérientiel / théâtre" },
  { text: "Ça m'a permis d'oser davantage, d'avoir moins peur du ridicule, de travailler mon imagination et mon improvisation.", name: "Christopher W." },
];
const ARTICLES = [
  { title: "Changer de poste sans perdre pied", tag: "Transition", time: "6 min" },
  { title: "Pourquoi le syndrome de l'imposteur revient à chaque nouveau rôle", tag: "Légitimité", time: "5 min" },
];

export default function Home() {
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

      <HeroTrace>
        <section
          style={{
            padding: "clamp(56px,10vw,120px) clamp(20px,6vw,64px) clamp(72px,8vw,96px)",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 760, position: "relative", zIndex: 1 }}>
            <h1
              style={{
                fontFamily: "var(--font-lora), serif",
                fontWeight: 500,
                fontSize: "clamp(32px,5vw,54px)",
                lineHeight: 1.16,
                margin: "0 0 28px",
                maxWidth: 960,
              }}
            >
              Vous pouvez occuper votre rôle.
              <br />
              Et l&apos;incarner pleinement.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontStyle: "italic",
                fontSize: "clamp(18px,2vw,22px)",
                lineHeight: 1.5,
                color: "var(--primary)",
                margin: "0 0 40px",
                maxWidth: 600,
              }}
            >
              Reprendre le pouvoir d&apos;agir sur sa vie professionnelle et devenir acteur de son évolution.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/rendez-vous"
                className="btn-pill-primary"
                style={{
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/diagnostic"
                className="btn-pill-accent-outline"
                style={{ padding: "14px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600 }}
              >
                Faire mon diagnostic
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 clamp(20px,6vw,64px) 24px", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: 13,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 20px",
            }}
          >
            Accompagnements
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 24,
            }}
          >
            {OFFERINGS.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="card-hover"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  padding: "28px 24px",
                  display: "block",
                  borderRadius: 18,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontWeight: 500,
                    fontSize: 20,
                    margin: "0 0 12px",
                    color: "var(--primary)",
                  }}
                >
                  {o.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)", margin: 0 }}>
                  {o.desc}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/accompagnements"
            style={{
              display: "inline-block",
              marginTop: 20,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--primary)",
              borderBottom: "1px solid var(--primary)",
            }}
          >
            Voir tous les accompagnements →
          </Link>
        </section>

        <section style={{ padding: "40px clamp(20px,6vw,64px)", position: "relative", zIndex: 1 }}>
          <div
            style={{
              background: "var(--primary)",
              color: "var(--bg)",
              padding: "clamp(24px,4vw,40px)",
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 16,
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <h2
                className="nowrap-desktop"
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontWeight: 500,
                  fontSize: "clamp(20px,2.4vw,26px)",
                  margin: "0 0 14px",
                  textWrap: "balance",
                }}
              >
                Faites le point sur votre situation en 1 minute
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                Un diagnostic rapide et confidentiel pour clarifier votre situation et identifier l&apos;accompagnement le plus pertinent.
              </p>
            </div>
            <Link
              href="/diagnostic"
              className="btn-on-dark"
              style={{
                padding: "14px 28px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Commencer le diagnostic
            </Link>
          </div>
        </section>

        <section
          style={{
            padding: "64px clamp(20px,6vw,64px) 72px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 0 24px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/alexandre-carneado.jpg"
                alt="Alexandre Carneado, fondateur de SHIFT"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "var(--primary)",
                margin: "0 0 6px",
              }}
            >
              Alexandre Carneado
            </p>
            <span style={{ width: 32, height: 2, background: "var(--accent)", margin: "0 0 32px" }}></span>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontStyle: "italic",
                fontSize: "clamp(19px,2.3vw,24px)",
                lineHeight: 1.5,
                color: "var(--text)",
                margin: "0 0 32px",
                textWrap: "balance",
              }}
            >
              « Mon travail n&apos;est pas de vous donner des réponses. C&apos;est d&apos;être présent à vos côtés, avec justesse, pour que les vôtres émergent. »
            </p>
            <Link
              href="/le-declic"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--primary)",
                borderBottom: "1px solid var(--primary)",
              }}
            >
              Lire Le Déclic →
            </Link>
          </div>
        </section>

        <section
          style={{
            padding: "32px clamp(20px,6vw,64px) 8px",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 20px",
            }}
          >
            Témoignages
          </p>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </section>

        {SHOW_RESOURCES_TEASER && (
          <section style={{ padding: "64px clamp(20px,6vw,64px) 24px", position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontSize: 13,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--muted)",
                margin: "0 0 20px",
              }}
            >
              Ressources
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 24,
              }}
            >
              {ARTICLES.map((a) => (
                <Link
                  key={a.title}
                  href="/ressources"
                  className="link-fade"
                  style={{ display: "block" }}
                >
                  <div
                    style={{
                      height: 160,
                      background:
                        "repeating-linear-gradient(135deg, oklch(0.9 0.01 55) 0px, oklch(0.9 0.01 55) 10px, oklch(0.94 0.01 55) 10px, oklch(0.94 0.01 55) 20px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      borderRadius: 16,
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--muted)" }}>
                      visuel article
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--accent-tag)",
                      margin: "0 0 8px",
                    }}
                  >
                    {a.tag} · {a.time}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontWeight: 500,
                      fontSize: 19,
                      margin: 0,
                      lineHeight: 1.35,
                      color: "var(--text)",
                    }}
                  >
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
            <Link
              href="/ressources"
              style={{
                display: "inline-block",
                marginTop: 24,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--primary)",
                borderBottom: "1px solid var(--primary)",
              }}
            >
              Voir toutes les ressources →
            </Link>
          </section>
        )}

        <section
          style={{
            padding: "32px clamp(20px,6vw,64px) 56px",
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 18, margin: 0, color: "var(--text)" }}>
            Prêt à en discuter ?
          </p>
          <Link
            href="/rendez-vous"
            className="btn-pill-outline"
            style={{ padding: "11px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Échanger sur ma situation
          </Link>
        </section>
      </HeroTrace>

      <Footer />
    </div>
  );
}
