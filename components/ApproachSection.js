// Section "Mon approche" (accroche + tuiles), partagée entre les pages
// Coaching individuel et Formations : structure identique, seuls le
// contenu, les paddings et le gap de grille (gridClassName, voir
// globals.css) diffèrent selon la page.
export default function ApproachSection({ sectionPadding, cardPadding, gridClassName, hook, hookMarginBottom = 24, tiles }) {
  return (
    <section style={{ padding: sectionPadding }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: cardPadding }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
          Mon approche
        </p>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 1.4,
            margin: `0 0 ${hookMarginBottom}px`,
            color: "var(--primary)",
            maxWidth: 520,
          }}
        >
          {hook}
        </p>
        <div className={gridClassName}>
          {tiles.map((tile) => (
            <div key={tile.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: tile.bg,
                  color: tile.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {tile.icon}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 15.5, margin: "0 0 4px", color: "var(--text)" }}>
                  {tile.title}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: "var(--muted)" }}>{tile.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
