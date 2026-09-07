"use client";

import { useState } from "react";

const TAG_LABELS = [
  "Légitimité et confiance",
  "Prise de parole",
  "Stress et charge mentale liée à la posture professionnelle",
  "Changement de rôle ou de posture",
  "Communication et influence",
  "Manager-coach",
  "Collaborer et créer des relations",
];

const ARTICLE_TAG = "Manager-coach";
const ARTICLE_TITLE = "le théâtre en entreprise, un outil au service de la posture managériale";

export default function RessourcesApp() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const tags = TAG_LABELS.map((label) => {
    const isActive = activeTags.includes(label);
    return {
      label,
      isActive,
      bg: isActive ? "var(--primary)" : "transparent",
      color: isActive ? "var(--bg)" : "var(--text)",
      borderColor: isActive ? "var(--primary)" : "var(--border)",
      toggle: () =>
        setActiveTags((prev) =>
          prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
        ),
    };
  });

  const searchLower = search.trim().toLowerCase();
  const matchesSearch = searchLower === "" || ARTICLE_TITLE.includes(searchLower);
  const matchesTags = activeTags.length === 0 || activeTags.includes(ARTICLE_TAG);
  const showArticle = matchesSearch && matchesTags;

  return (
    <>
      <section style={{ padding: "clamp(56px,10vw,110px) clamp(20px,6vw,64px) 32px" }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 20px" }}>
          Ressources
        </p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(30px,4.5vw,46px)", lineHeight: 1.2, margin: "0 0 32px", maxWidth: 700 }}>
          Articles
        </h1>
        <input
          type="text"
          placeholder="Rechercher un article"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "12px 18px",
            borderRadius: 999,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            fontSize: 15,
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            color: "var(--text)",
            marginBottom: 20,
            display: "block",
          }}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {tags.map((t) => (
            <button
              key={t.label}
              onClick={t.toggle}
              style={{
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 13,
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                cursor: "pointer",
                border: `1px solid ${t.borderColor}`,
                background: t.bg,
                color: t.color,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: "8px clamp(20px,6vw,64px) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {showArticle && (
            <a href="/ressources" className="link-fade-85" style={{ display: "block" }}>
              <div
                style={{
                  height: 170,
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                  background:
                    "repeating-linear-gradient(135deg, oklch(0.9 0.01 55) 0px, oklch(0.9 0.01 55) 10px, oklch(0.94 0.01 55) 10px, oklch(0.94 0.01 55) 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--muted)" }}>visuel article</span>
              </div>
              <p style={{ fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: "var(--accent-tag)", margin: "0 0 8px" }}>
                Manager-coach · [à compléter] min · [date à compléter]
              </p>
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 19, margin: "0 0 8px", lineHeight: 1.35, color: "var(--text)" }}>
                Le théâtre en entreprise, un outil au service de la posture managériale
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)", margin: 0 }}>
                Comment sortir de ses automatismes managériaux passe aussi par le corps et la posture, pas
                seulement par la méthode.
              </p>
            </a>
          )}

          {[1, 2, 3].map((p) => (
            <div key={p} style={{ display: "block", opacity: 0.6 }}>
              <div
                style={{
                  height: 170,
                  borderRadius: 16,
                  background:
                    "repeating-linear-gradient(135deg, oklch(0.92 0.008 55) 0px, oklch(0.92 0.008 55) 10px, oklch(0.955 0.008 55) 10px, oklch(0.955 0.008 55) 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--muted-2)" }}>article à venir</span>
              </div>
              <p style={{ fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: "var(--muted-2)", margin: "0 0 8px" }}>
                À venir
              </p>
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 19, margin: 0, lineHeight: 1.35, color: "var(--muted-2)" }}>
                Prochain article à venir
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
