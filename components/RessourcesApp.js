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
const ARTICLE_TITLE = "le théâtre, déjà un outil de transformation professionnelle";

// Cartes "à venir" retirées tant qu'aucun autre article n'est prêt — tableau
// gardé (plutôt que le JSX supprimé) pour pouvoir en ajouter dès que possible.
const PLACEHOLDERS = [];

// Recherche et filtres masqués tant que le nombre d'articles reste faible.
// Remettre à true dès que le contenu le justifie — la logique de filtrage
// ci-dessous reste fonctionnelle, elle est juste inutilisée pendant que
// showArticle vaut toujours true (aucun input ne peut la faire varier).
const SHOW_FILTERS = false;

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
        {SHOW_FILTERS && (
          <>
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
          </>
        )}
      </section>

      <section style={{ padding: "8px clamp(20px,6vw,64px) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,360px))", justifyContent: "start", gap: 24 }}>
          {showArticle && (
            <a
              href="https://www.wefiit.com/blog/we-act"
              target="_blank"
              rel="noopener noreferrer"
              className="link-fade-85"
              style={{ display: "block" }}
            >
              <div
                style={{
                  height: 170,
                  borderRadius: 16,
                  background: "linear-gradient(150deg, var(--accent), oklch(0.72 0.08 45))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontWeight: 500,
                    fontSize: "clamp(28px,4vw,40px)",
                    lineHeight: 1,
                    color: "oklch(0.99 0.005 60)",
                  }}
                >
                  We.Act
                </span>
                <span style={{ fontSize: 12, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--primary)" }}>
                  Atelier théâtre
                </span>
              </div>
              <p style={{ fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: "var(--accent-tag)", margin: "0 0 8px" }}>
                Avant SHIFT
              </p>
              <h3 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 19, margin: "0 0 8px", lineHeight: 1.35, color: "var(--text)" }}>
                Le théâtre, déjà un outil de transformation professionnelle
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)", margin: "0 0 10px" }}>
                Avant de devenir coach, j&apos;ai lancé un atelier théâtre mensuel dans l&apos;entreprise où
                j&apos;étais Product Manager. Un premier terrain d&apos;expérimentation de ce que SHIFT est
                devenu.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--primary)" }}>
                Lire l&apos;article →
              </span>
              <p style={{ fontSize: 12.5, lineHeight: 1.4, color: "var(--muted-2)", margin: "10px 0 0" }}>
                Article publié sur le blog WeFiiT
              </p>
            </a>
          )}

          {PLACEHOLDERS.map((p) => (
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
