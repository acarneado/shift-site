import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coaching individuel — SHIFT",
  description:
    "Prise de poste, changement de rôle, sentiment de manque de légitimité, quête de sens : un accompagnement individuel pour avancer sur sa propre situation, à son rythme.",
};

const CE_QUON_TRAITE = [
  "Vous prenez un nouveau poste ou de nouvelles responsabilités",
  "Vous cherchez une posture, une manière de manager qui vous ressemble",
  "Vous voulez renforcer votre confiance et votre légitimité",
  "Vous cherchez à prendre votre place dans une équipe ou une organisation",
  "Vous traversez une période de changement",
  "Vous cherchez à clarifier ce que vous voulez vraiment",
  "Vous voulez retrouver du sens dans votre activité professionnelle",
  "Vous voulez mieux comprendre vos besoins et poser vos limites",
  "Vous voulez sortir de certains schémas ou croyances qui vous freinent",
  "Vous voulez passer de la réflexion à l'action",
];

const BENEFICES = [
  "Prendre du recul sur sa situation",
  "Adopter une posture plus alignée",
  "Prendre des décisions mieux étayées",
  "Clarifier ses besoins et ses limites",
  "Renforcer sa capacité à agir",
  "Évoluer dans un espace confidentiel, à son rythme",
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
          Coaching individuel
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)", margin: 0, maxWidth: 620 }}>
          Prise de poste, changement de rôle, sentiment de manque de légitimité, quête de sens : un
          accompagnement individuel pour avancer sur sa propre situation, à son rythme.
        </p>
      </section>

      <section style={{ padding: "16px clamp(20px,6vw,64px) 48px", display: "flex", flexWrap: "wrap", gap: 40 }}>
        <div style={{ flex: "1 1 320px", borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
            Ce qu&apos;on y traite
          </p>
          <ul style={{ fontSize: 15, lineHeight: 1.6, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {CE_QUON_TRAITE.map((item) => (
              <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ width: 7, height: 7, minWidth: 7, borderRadius: "50%", background: "var(--accent)", marginTop: 7 }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", borderLeft: "2px solid var(--primary)", paddingLeft: 20 }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
            Les bénéfices
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.65, margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {BENEFICES.map((item) => (
              <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ width: 7, height: 7, minWidth: 7, borderRadius: "50%", background: "var(--primary)", marginTop: 8 }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: "8px clamp(20px,6vw,64px) 64px" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(32px,5vw,48px)" }}>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
            Comment ça se déroule
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: "0 0 16px", maxWidth: 600 }}>
            Un premier échange permet de cadrer la demande. Selon le besoin, l&apos;accompagnement peut
            prendre la forme d&apos;une séance unique de 1h à 1h30, ou s&apos;inscrire dans un processus plus
            long, jusqu&apos;à 12 séances, à un rythme adapté à la situation de chacun.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            Selon la sensibilité de la personne, certains outils peuvent s&apos;appuyer sur des techniques
            théâtrales, pour explorer une posture avant de la choisir.
          </p>
        </div>
      </section>

      <section style={{ padding: "8px clamp(20px,6vw,64px) 72px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 20px" }}>
          Témoignage
        </p>
        <div style={{ maxWidth: 660 }}>
          <span style={{ fontFamily: "var(--font-lora), serif", fontSize: 44, lineHeight: 0.8, color: "var(--accent)", display: "block", margin: "0 0 8px" }}>
            &quot;
          </span>
          <p style={{ fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: 19, lineHeight: 1.65, color: "var(--text)", margin: "0 0 22px" }}>
            Alexandre m&apos;a d&apos;abord aidé à comprendre pourquoi cet objectif était important pour moi,
            quelles étaient mes motivations profondes pour ce rôle de manager. Ensuite, nous sommes partis de
            cas concrets pour lister des idées et faire évoluer mon style de management dans la bonne
            direction. Trois séances ont suffi pour que je me sente aujourd&apos;hui mieux équipé sur ce
            sujet.
          </p>
          <div style={{ width: 44, height: 1, background: "oklch(0.62 0.10 40 / 0.5)", margin: "0 0 12px" }}></div>
          <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>Hugo</p>
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
            Envie d&apos;échanger sur votre situation ?
          </h2>
          <Link
            href="/rendez-vous"
            className="btn-on-dark"
            style={{ padding: "14px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Échanger sur ma situation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
