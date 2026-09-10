import Link from "next/link";
import ShiftLogo from "./ShiftLogo";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 3,
        background: "var(--primary-dark)",
        color: "var(--bg)",
        padding: "22px clamp(20px,6vw,64px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <ShiftLogo variant="reversed" size={28} withWordmark wordmarkColor="var(--bg)" wordmarkFontSize={15} wordmarkLetterSpacing={3} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            fontSize: 13,
            opacity: 0.75,
          }}
        >
          <span>Coaching certifié RNCP niveau 6</span>
          <a
            href="mailto:acarneado.shift@gmail.com"
            className="footer-link"
          >
            acarneado.shift@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-carneado/"
            target="_blank"
            rel="noopener"
            aria-label="Profil LinkedIn d'Alexandre Carneado"
            className="footer-link"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 9.5h5V21h-5V9.5zM9.5 9.5h4.8v1.6h.07c.67-1.2 2.3-1.9 3.9-1.9 3.3 0 4.2 2 4.2 5.1V21h-5v-5.5c0-1.3-.5-2.3-1.8-2.3-1.2 0-1.9.8-1.9 2.2V21h-5V9.5z"></path>
            </svg>
          </a>
          <Link href="/mentions-legales" className="footer-link">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
