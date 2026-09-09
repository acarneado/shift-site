"use client";

import { useEffect, useState } from "react";

const PROFILE_OPTIONS = ["Vous êtes salarié", "Vous représentez une entreprise"];
const INTEREST_OPTIONS = ["Coaching individuel", "Formations", "Atelier théâtre"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Merci d'indiquer votre nom.";
  if (!EMAIL_RE.test(email.trim())) errors.email = "Adresse email invalide.";
  if (message.trim().length < 10) errors.message = "Quelques mots de plus nous aideraient (10 caractères minimum).";
  return errors;
}

export default function RendezVousApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);
  const [interest, setInterest] = useState(null);
  const [website, setWebsite] = useState(""); // honeypot — left empty by real visitors
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
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

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: `1px solid ${hasError ? "oklch(0.55 0.18 30)" : "var(--border)"}`,
    background: "var(--bg)",
    fontSize: 15,
    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
    color: "var(--text)",
  });

  const errorTextStyle = { fontSize: 13, color: "oklch(0.55 0.18 30)", margin: "6px 0 0" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validate({ name, email, message });
    setErrors(fieldErrors);
    setSubmitError("");
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, profile, interest, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setSubmitError(data.error || "L'envoi a échoué. Réessayez plus tard.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("L'envoi a échoué. Vérifiez votre connexion et réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ padding: "16px clamp(20px,6vw,64px) 96px" }}>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: 20 }} noValidate>
          {/* Honeypot: hidden from sighted users and screen readers; bots fill every field. */}
          <div style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
            <label htmlFor="website">Ne pas remplir</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rdv-name" style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
              Nom
            </label>
            <input
              id="rdv-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              style={inputStyle(!!errors.name)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "rdv-name-error" : undefined}
            />
            {errors.name && (
              <p id="rdv-name-error" style={errorTextStyle}>
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="rdv-email" style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
              Email
            </label>
            <input
              id="rdv-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              style={inputStyle(!!errors.email)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "rdv-email-error" : undefined}
            />
            {errors.email && (
              <p id="rdv-email-error" style={errorTextStyle}>
                {errors.email}
              </p>
            )}
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
            <label htmlFor="rdv-message" style={{ display: "block", fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
              Message
            </label>
            <textarea
              id="rdv-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Quelques mots sur votre situation"
              rows={4}
              style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "rdv-message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id="rdv-message-error" style={errorTextStyle}>
                {errors.message}
              </p>
            )}
          </div>

          {submitError && (
            <p style={{ fontSize: 14, color: "oklch(0.55 0.18 30)", margin: 0 }}>{submitError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-pill-primary"
            style={{
              alignSelf: "flex-start",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              border: "none",
              cursor: submitting ? "default" : "pointer",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Envoi..." : "Envoyer"}
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
