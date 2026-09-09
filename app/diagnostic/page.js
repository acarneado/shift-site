import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagnosticApp from "@/components/DiagnosticApp";
import { pageOpenGraph, pageTwitter } from "@/lib/site";

export const metadata = {
  title: "Diagnostic — SHIFT",
  description:
    "Un point sur votre situation, en une minute. Quelques questions simples, anonymes et sans engagement, pour voir plus clair.",
  openGraph: pageOpenGraph({ routePath: "/diagnostic", image: "/images/og/diagnostic.jpg" }),
  twitter: pageTwitter({ image: "/images/og/diagnostic.jpg" }),
};

export default function Diagnostic() {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <DiagnosticApp />
      <Footer />
    </div>
  );
}
