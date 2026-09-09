import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeclicTimeline from "@/components/DeclicTimeline";
import { SHARE_TITLE, SHARE_DESCRIPTION, ogImage } from "@/lib/site";

export const metadata = {
  title: "Le Déclic — SHIFT",
  description:
    "Le parcours d'Alexandre Carneado : dix ans en Product Management, une certification de coach RNCP niveau 6, et le déclic qui a mené à SHIFT.",
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ogImage("/images/og/le-declic.jpg"),
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/images/og/le-declic.jpg"],
  },
};

const CHEMINEMENT = [
  { word: "Se reconnecter", text: "Revenir à ce qui compte, avant de chercher à tout changer." },
  { word: "Comprendre", text: "Nommer ce qui se joue, sans se juger." },
  { word: "Choisir", text: "Décider d'une direction, plutôt que de la subir." },
  { word: "Expérimenter", text: "Essayer, même sans être prêt." },
  { word: "Ajuster", text: "Garder ce qui marche. Corriger le reste." },
  { word: "Agir", text: "Continuer, seul, une fois l'accompagnement terminé." },
];

export default function LeDeclic() {
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

      <section
        style={{
          padding: "clamp(56px,10vw,110px) clamp(20px,6vw,64px) clamp(8px,2vw,16px)",
        }}
      >
        <p
          style={{
            fontSize: 13,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--primary)",
            margin: "0 0 20px",
          }}
        >
          Le Déclic
        </p>
        <h1
          style={{
            fontFamily: "var(--font-lora), serif",
            fontWeight: 500,
            fontSize: "clamp(30px,4.5vw,46px)",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: 1100,
          }}
        >
          Un cheminement qui s&apos;est opéré progressivement.
        </h1>
      </section>

      <section style={{ padding: "clamp(24px,4vw,32px) clamp(20px,6vw,64px) clamp(48px,7vw,72px)" }}>
        <div
          style={{
            background: "var(--card-2)",
            borderLeft: "3px solid var(--primary)",
            borderRadius: 20,
            padding: "clamp(28px,4vw,40px) clamp(28px,4vw,36px) clamp(32px,4.5vw,40px)",
          }}
        >
          <Image
            src="/images/alexandre-carneado.jpg"
            alt="Alexandre Carneado"
            width={280}
            height={339}
            style={{
              objectFit: "cover",
              borderRadius: 20,
              float: "left",
              margin: "0 clamp(28px,4vw,40px) 20px 0",
            }}
          />
          <p
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "var(--primary)",
              margin: "0 0 20px",
            }}
          >
            Qui suis-je
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: "0 0 18px", color: "var(--text-soft)" }}>
            Avant d&apos;être coach, j&apos;ai passé{" "}
            <strong style={{ color: "var(--primary)", fontWeight: 600 }}>dix ans</strong> comme consultant
            Product Manager au sein d&apos;organisations françaises et internationales, dans des{" "}
            <strong style={{ color: "var(--primary)", fontWeight: 600 }}>
              environnements à forts enjeux business
            </strong>
            .
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: "0 0 18px", color: "var(--text-soft)" }}>
            J&apos;ai accompagné des organisations dans des secteurs variés, notamment l&apos;aéronautique, les
            télécoms, l&apos;audiovisuel et le luxe, sur des enjeux e-commerce et des problématiques de
            transformation.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: "0 0 18px", color: "var(--text-soft)" }}>
            J&apos;ai évolué au cœur de contextes complexes, avec des équipes aux métiers, expertises et
            cultures multiples, où il fallait comprendre les enjeux, faire émerger les besoins, prioriser,
            aligner les parties prenantes et faire avancer collectivement des projets en mouvement permanent.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: "0 0 18px", color: "var(--text-soft)" }}>
            Ces expériences m&apos;ont confronté à certaines réalités que vivent aujourd&apos;hui les
            professionnels et managers que j&apos;accompagne : la pression, les responsabilités, les
            arbitrages, l&apos;incertitude, la nécessité de prendre sa place et de trouver sa manière de
            contribuer.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: "0 0 20px", color: "var(--text-soft)" }}>
            Mais au fil de ces expériences, j&apos;ai aussi découvert ce qui, au-delà des projets eux-mêmes,
            me mettait en mouvement :{" "}
            <strong style={{ color: "var(--accent-soft)", fontWeight: 600 }}>
              les personnes, leurs interactions, leurs idées
            </strong>
            , leur capacité à créer ensemble et à dépasser ce qui semblait bloqué.
          </p>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontStyle: "italic",
              fontSize: "clamp(17px,1.9vw,20px)",
              lineHeight: 1.4,
              color: "var(--primary)",
              margin: 0,
              textWrap: "balance",
              clear: "left",
            }}
          >
            C&apos;est là que s&apos;enracine le déclic.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) clamp(16px,2.5vw,24px)" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: 0, maxWidth: 880 }}>
          Un parcours fait de projets, de rencontres et de prises de conscience.
        </p>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) clamp(40px,6vw,64px)" }}>
        <DeclicTimeline />
      </section>

      <div>
        <section
          style={{
            background: "var(--primary-dark)",
            color: "var(--bg)",
            padding: "clamp(48px,7vw,72px) clamp(20px,6vw,64px)",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 12.5,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--accent-soft)",
                margin: "0 0 20px",
              }}
            >
              Aujourd&apos;hui
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontWeight: 500,
                fontSize: "clamp(20px,2.6vw,26px)",
                lineHeight: 1.4,
                margin: "0 0 22px",
                textWrap: "balance",
              }}
            >
              Je suis coach professionnel certifié RNCP&nbsp;niveau&nbsp;6.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, opacity: 0.9, margin: "0 0 16px" }}>
              Je m&apos;appuie sur dix années passées au cœur des organisations pour accompagner celles et
              ceux qui y évoluent : professionnels et managers, confrontés à des situations complexes, à des
              changements, à des décisions, à des doutes ou à l&apos;envie de faire évoluer leur manière
              d&apos;agir.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, opacity: 0.9, margin: "0 0 16px" }}>
              Mon parcours m&apos;a appris à regarder les situations professionnelles à travers ce qui se
              joue derrière les enjeux :{" "}
              <strong style={{ color: "var(--accent-soft)", fontWeight: 600 }}>
                les personnes, leurs ressources, leurs représentations, leurs relations et leur capacité à
                avancer.
              </strong>
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, opacity: 0.9, margin: 0 }}>
              C&apos;est ce regard que je mets aujourd&apos;hui au service de mes accompagnements.
            </p>
          </div>
        </section>

        <section style={{ background: "var(--card-2)", padding: "clamp(36px,5vw,48px) clamp(20px,6vw,64px) clamp(56px,7vw,72px)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px 22px" }}>
              {CHEMINEMENT.map((c, i) => (
                <div
                  key={c.word}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    flex: "1 1 150px",
                    maxWidth: 180,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "1.5px solid var(--primary)",
                      background: "var(--primary-wash-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--primary)",
                      marginBottom: 12,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontFamily: "var(--font-lora), serif", fontWeight: 600, fontSize: 16.5, color: "var(--primary)", margin: "0 0 6px" }}>
                    {c.word}
                  </p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.45, color: "var(--muted)", margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
