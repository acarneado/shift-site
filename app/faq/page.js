import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageCanonical, faqJsonLd } from "@/lib/site";

export const metadata = {
  title: "FAQ | SHIFT",
  description:
    "Financement, durée des séances, prérequis, tarifs, confidentialité : les réponses aux questions les plus fréquentes sur les accompagnements SHIFT.",
  alternates: pageCanonical("/faq"),
};

// Questions/réponses courtes et factuelles : format que les moteurs
// génératifs privilégient pour citer une réponse, contrairement à la
// prose des pages d'offre. Compléter au besoin.
const FAQ_ITEMS = [
  {
    question: "Le coaching est-il finançable par le CPF ou un OPCO ?",
    answer:
      "Non. Alexandre Carneado n'est pas certifié Qualiopi, ces accompagnements ne sont donc pas finançables par le CPF ou un OPCO.",
  },
  {
    question: "Combien de temps dure une séance de coaching individuel ?",
    answer: "De 1h à 1h30, en séance unique ou jusqu'à 12 séances selon le besoin.",
  },
  {
    question: "Faut-il avoir déjà fait du théâtre pour participer à l'atelier ?",
    answer: "Non, aucun prérequis n'est nécessaire : l'objectif est d'expérimenter, pas de bien jouer.",
  },
  {
    question: "Où se déroulent les formations et les ateliers théâtre ?",
    answer: "Dans les locaux fournis par l'entreprise.",
  },
  {
    question: "Quelle est la certification d'Alexandre Carneado ?",
    answer: "Coach professionnel certifié RNCP niveau 6.",
  },
  {
    question: "Quelle est la différence entre coaching individuel, formations et ateliers théâtre ?",
    answer:
      "Le coaching individuel est un accompagnement confidentiel en tête-à-tête ; les formations s'adressent à des équipes sur des thématiques précises ; les ateliers théâtre sont un format collectif et expérientiel par le jeu.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer: "Le tarif est défini selon l'accompagnement et discuté lors du premier échange.",
  },
  {
    question: "Comment se passe le premier échange ? Comment prendre rendez-vous ?",
    answer:
      "Via le formulaire de prise de rendez-vous du site, pour cadrer ensemble votre besoin, sans engagement.",
  },
  {
    question: "Le diagnostic en ligne est-il gratuit ? Mes réponses sont-elles conservées ?",
    answer: "Oui, il est gratuit et totalement anonyme : aucune donnée personnelle n'est collectée ni conservée.",
  },
  {
    question: "Si mon besoin ne correspond à aucune thématique listée, un accompagnement sur mesure est-il possible ?",
    answer: "Oui, un accompagnement ou une formation peut être conçu spécifiquement à partir de votre contexte et de vos objectifs.",
  },
  {
    question: "Le coaching individuel est-il confidentiel ?",
    answer: "Oui, c'est un espace confidentiel, à votre rythme.",
  },
];

const FAQ_JSON_LD = faqJsonLd(FAQ_ITEMS);

export default function Faq() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <Header />

      <section style={{ padding: "clamp(56px,10vw,110px) clamp(20px,6vw,64px) 48px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 14px" }}>
          FAQ
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
          Questions fréquentes
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted)", margin: 0, maxWidth: 620 }}>
          Financement, durée des séances, tarifs, confidentialité : les réponses aux questions les plus
          courantes.
        </p>
      </section>

      <section style={{ padding: "0 clamp(20px,6vw,64px) 96px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
          {FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 18, color: "var(--text)", margin: "0 0 6px" }}>
                {item.question}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
