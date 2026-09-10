import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RendezVousApp from "@/components/RendezVousApp";
import { pageOpenGraph, pageTwitter, pageCanonical } from "@/lib/site";

export const metadata = {
  title: "Prendre rendez-vous | SHIFT",
  description:
    "Ce n'est pas un engagement, juste un premier échange. Contactez Alexandre Carneado pour clarifier votre situation.",
  openGraph: pageOpenGraph({ routePath: "/rendez-vous", image: "/images/og/rendez-vous.jpg" }),
  twitter: pageTwitter({ image: "/images/og/rendez-vous.jpg" }),
  alternates: pageCanonical("/rendez-vous"),
};

export default function RendezVous() {
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

      <section style={{ padding: "clamp(56px,10vw,110px) clamp(20px,6vw,64px) 24px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 20px" }}>
          Prendre rendez-vous
        </p>
        <span style={{ display: "block", width: 32, height: 2, background: "var(--accent)", margin: "0 0 20px" }}></span>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(30px,4.5vw,46px)", lineHeight: 1.2, margin: "0 0 20px", maxWidth: 640 }}>
          Ce n&apos;est pas un engagement, juste un premier échange.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 8px", maxWidth: 560 }}>
          Le premier échange se fait en visio ou téléphone et dure environ{" "}
          <strong style={{ fontWeight: 600, color: "var(--primary)" }}>30 minutes</strong>. Il permet de
          clarifier votre situation et de voir, ensemble, si un accompagnement a du sens. Comme
          l&apos;ensemble de nos échanges, il reste{" "}
          <strong style={{ fontWeight: 600, color: "var(--primary)" }}>strictement confidentiel</strong>,
          que vous décidiez, par la suite, de vous engager dans un accompagnement ou non.
        </p>
      </section>

      <RendezVousApp />

      <Footer />
    </div>
  );
}
