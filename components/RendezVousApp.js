"use client";

import { useEffect, useState } from "react";

const PROFILE_OPTIONS = ["Vous êtes salarié", "Vous représentez une entreprise"];
const INTEREST_OPTIONS = ["Coaching individuel", "Formations", "Atelier théâtre"];

export default function RendezVousApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);
  const [interest, setInterest] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const situation = params.get("situation");
    const tension = params.get("tension");
    if (situation) {
      const lines = [
        "Bonjour,",
        "",
        "J'ai fait le point sur ma situation via le site SHIFT.",
        "",
        `Ma situation : ${situation}`,
      ];
      if (tension) lines.push(`Ce qui me préoccupe : ${tension}`);
      lines.push("", "J'aimerais échanger sur ma situation.");
      // Prefill depends on window.location, unavailable during the static prerender;
      // setting it post-mount (rather than a lazy useState initializer) avoids an
      // SSR/CSR hydration mismatch on the textarea's value.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessage(lines.join("\n"));
    }
  }, []);

  const profiles = PROFILE_OPTIONS.map((label) => {
    const isActive = profile === label;
    return {
      label,
      isActive,
      bg: isActive ? "var(--primary)" : "transparent",
      color: isActive ? "var(--bg)" : "var(--text)",
      borderColor: isActive ? "var(--primary)" : "var(--border)",
      select: () => setProfile((prev) => (prev === label ? null : label)),
    };
  });

  const interests = INTEREST_OPTIONS.map((label) => {
    const isActive = interest === label;
    return {
      label,
      isActive,
      bg: isActive ? "var(--primary)" : "transparent",
      color: isActive ? "var(--bg)" : "var(--text)",
      borderColor: isActive ? "var(--primary)" : "var(--border)",
      select: () => setInterest((prev) => (prev === label ? null : label)),
    };
  });

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--bg)",
    fontSize: 15,
    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
    color: "var(--text)",
  };

  return (
    <section style={{ padding: "16px clamp(20px,6vw,64px) 96px" }}>
      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>Nom</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
              Vous êtes <span style={{ opacity: 0.6 }}>(facultatif)</span>
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {profiles.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={p.select}
                  className="pill-select"
                  style={{
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontSize: 14,
                    cursor: "pointer",
                    border: `1px solid ${p.borderColor}`,
                    background: p.bg,
                    color: p.color,
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
              Votre demande concerne <span style={{ opacity: 0.6 }}>(facultatif)</span>
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {interests.map((i) => (
                <button
                  key={i.label}
                  type="button"
                  onClick={i.select}
                  className="pill-select"
                  style={{
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontSize: 14,
                    cursor: "pointer",
                    border: `1px solid ${i.borderColor}`,
                    background: i.bg,
                    color: i.color,
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  }}
                >
                  {i.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Quelques mots sur votre situation"
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-pill-primary"
            style={{
              alignSelf: "flex-start",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            }}
          >
            Envoyer
          </button>
        </form>
      ) : (
        <div style={{ maxWidth: 560, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 36 }}>
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 20, margin: "0 0 12px", color: "var(--primary)" }}>
            Message envoyé.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>
            Vous recevrez une réponse pour organiser le premier échange.
          </p>
        </div>
      )}
    </section>
  );
}
