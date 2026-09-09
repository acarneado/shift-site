export const metadata = {
  title: "Site en maintenance — SHIFT",
  description: "Le site SHIFT est temporairement indisponible.",
  robots: { index: false, follow: false },
};

export default function Maintenance() {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-lora), serif",
          fontWeight: 600,
          fontSize: 28,
          letterSpacing: "0.5px",
          color: "var(--primary)",
          marginBottom: 20,
        }}
      >
        SHIFT
      </span>
      <h1
        style={{
          fontFamily: "var(--font-lora), serif",
          fontWeight: 500,
          fontSize: "clamp(24px,4vw,36px)",
          lineHeight: 1.25,
          margin: "0 0 16px",
          maxWidth: 520,
        }}
      >
        Site en cours de mise à jour
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", maxWidth: 460, margin: "0 0 8px" }}>
        Nous préparons une nouvelle version du site. Merci de repasser un peu plus tard.
      </p>
      <p style={{ fontSize: 15, color: "var(--muted)", margin: 0 }}>
        Pour toute question :{" "}
        <a
          href="mailto:acarneado.shift@gmail.com"
          style={{ color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}
        >
          acarneado.shift@gmail.com
        </a>
      </p>
    </div>
  );
}
