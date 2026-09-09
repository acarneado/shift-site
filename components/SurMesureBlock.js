// Bloc "Sur mesure" (carte teintée corail), partagé entre les pages
// Coaching individuel et Formations : traitement visuel strictement
// identique sur les deux, seul le contenu change.
export default function SurMesureBlock({ heading, body }) {
  return (
    <section style={{ padding: "8px clamp(20px,6vw,64px) 48px" }}>
      <div
        style={{
          background: "oklch(0.62 0.10 40 / 0.08)",
          border: "1px solid oklch(0.62 0.10 40 / 0.3)",
          borderRadius: 20,
          padding: "clamp(28px,4vw,40px)",
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          maxWidth: 760,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            background: "oklch(0.62 0.10 40 / 0.16)",
            color: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3v18M3 12h18" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>
            Sur mesure
          </p>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontWeight: 600,
              fontSize: 18,
              lineHeight: 1.4,
              margin: "0 0 10px",
              color: "var(--text)",
            }}
          >
            {heading}
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: "oklch(0.4 0.02 50)" }}>{body}</p>
        </div>
      </div>
    </section>
  );
}
