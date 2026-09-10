// Symbole de marque SHIFT : point d'origine (corail) + trajectoire (verte)
// qui sort franchement du cadre. Composant unique partagé par le header,
// le footer, et tout usage futur (avatar, etc.) — ne pas dupliquer le SVG
// ailleurs. Géométrie de référence : design_handoff_logo_2a/README.md
// (projet Claude.ai). Lockup retenu : 3b — le wordmark "SHIFT" passe en
// IBM Plex Sans interlettré pour partager l'écriture monolinéaire du
// trait (Lora, à empattements, ne s'accordait pas avec le tracé).
const SYMBOL_PATH = "M24 74 C46 74 54 56 64 40 C72 27 84 21 100 19";

const VARIANTS = {
  // Fonds clairs (défaut).
  default: { stroke: "var(--primary)", dot: "var(--accent)" },
  // Fond vert profond (footer).
  reversed: { stroke: "var(--bg)", dot: "oklch(0.72 0.11 40)" },
  // Hérite de la couleur du texte parent.
  mono: { stroke: "currentColor", dot: "currentColor" },
};

export default function ShiftLogo({
  variant = "default",
  size = 34,
  className,
  withWordmark = false,
  wordmarkColor,
  wordmarkFontSize = 19,
  wordmarkLetterSpacing = 4,
}) {
  const { stroke, dot } = VARIANTS[variant] || VARIANTS.default;

  const symbol = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ flexShrink: 0 }}
      {...(withWordmark ? { "aria-hidden": "true" } : { role: "img", "aria-label": "SHIFT" })}
    >
      <path d={SYMBOL_PATH} fill="none" stroke={stroke} strokeWidth="9" strokeLinecap="butt" />
      <circle cx="24" cy="74" r="8.5" fill={dot} />
    </svg>
  );

  if (!withWordmark) return symbol;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      {symbol}
      <span
        style={{
          fontFamily: "var(--font-ibm-plex-sans), sans-serif",
          fontWeight: 600,
          fontSize: wordmarkFontSize,
          letterSpacing: `${wordmarkLetterSpacing}px`,
          color: wordmarkColor || stroke,
          lineHeight: 1,
        }}
      >
        SHIFT
      </span>
    </span>
  );
}
