"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ShiftLogo from "./ShiftLogo";

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Le Déclic", href: "/le-declic" },
  { label: "Accompagnements", href: "/accompagnements" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Ressources", href: "/ressources" },
];

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 860;
      setIsMobile(mobile);
      setMenuOpen((open) => (mobile ? open : false));
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const menuAndMobile = isMobile && menuOpen;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "oklch(0.97 0.008 60 / 0.96)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid var(--border)",
        padding: "16px clamp(20px,5vw,64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        className="link-fade"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
        }}
      >
        <ShiftLogo size={34} className="shift-logo-symbol" />
        <span style={{ display: "flex", flexDirection: "column", gap: 1, lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontWeight: 600,
              fontSize: 19,
              letterSpacing: "4px",
              color: "var(--primary)",
            }}
          >
            SHIFT
          </span>
          <span
            className="header-signature"
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.3px",
              color: "var(--muted)",
            }}
          >
            Alexandre Carneado — Coach professionnel
          </span>
        </span>
      </Link>

      {!isMobile && (
        <nav
          style={{
            display: "flex",
            gap: "clamp(16px,2vw,32px)",
            fontSize: 15,
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link
          href="/rendez-vous"
          className="btn-pill-primary"
          style={{
            padding: "10px 22px",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Prendre rendez-vous
        </Link>
        {isMobile && (
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 6,
              width: 40,
              height: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              cursor: "pointer",
            }}
          >
            <span
              style={{ width: 18, height: 2, background: "var(--text)" }}
            ></span>
            <span
              style={{ width: 18, height: 2, background: "var(--text)" }}
            ></span>
          </button>
        )}
      </div>

      {menuAndMobile && (
        <nav
          id="mobile-nav"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            padding: "20px clamp(20px,5vw,64px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            fontSize: 16,
            zIndex: 10,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
