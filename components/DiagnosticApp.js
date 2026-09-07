"use client";

import { useState } from "react";

const THEME_CARDS = [
  { id: "role", label: "Un nouveau rôle à apprivoiser" },
  { id: "direction", label: "Sens et clarté à retrouver" },
  { id: "confiance", label: "Une question de confiance" },
  { id: "relations", label: "Des relations qui pèsent" },
  { id: "autre", label: "Autre chose, en quelques mots" },
];

const VECU = {
  role: [
    { id: "role1", text: "Je ne sais pas encore par où commencer" },
    { id: "role2", text: "J'ai du mal à affirmer ma posture face aux autres" },
    { id: "role3", text: "Je doute d'être à la hauteur" },
    { id: "role4", text: "Je découvre les règles du jeu au fur et à mesure" },
  ],
  direction: [
    { id: "direction1", text: "Je fais ce qu'il faut, sans savoir si c'est vraiment ce que je veux" },
    { id: "direction2", text: "Je repousse une décision depuis trop longtemps" },
    { id: "direction3", text: "Je ne sais plus ce qui compte vraiment pour moi" },
    { id: "direction4", text: "J'avance sans vraiment savoir vers quoi" },
  ],
  confiance: [
    { id: "confiance1", text: "Je me tais alors que je pourrais parler" },
    { id: "confiance2", text: "Je doute de mes décisions, même les bonnes" },
    { id: "confiance3", text: "Je me compare et j'en sors perdant" },
    { id: "confiance4", text: "Je minimise ce que je fais bien" },
  ],
  relations: [
    { id: "relations1", text: "Je laisse traîner une tension sans jamais la nommer" },
    { id: "relations2", text: "Je m'adapte trop aux autres, à mon détriment" },
    { id: "relations3", text: "Je ne sais plus comment aborder quelqu'un" },
    { id: "relations4", text: "Je ne sais plus comment me positionner dans une situation qui touche plusieurs personnes" },
  ],
};

const VECU_REF = {
  role1: "le fait de ne pas encore savoir par où commencer",
  role2: "la difficulté à affirmer votre posture face aux autres",
  role3: "le doute d'être à la hauteur",
  role4: "le fait de devoir découvrir les règles du jeu au fur et à mesure",
  direction1: "le fait d'avancer sans être sûr que ce soit vraiment ce que vous voulez",
  direction2: "le fait de repousser une décision depuis trop longtemps",
  direction3: "le sentiment de ne plus savoir ce qui compte vraiment pour vous",
  direction4: "le fait d'avancer sans vraiment savoir vers quoi",
  confiance1: "le fait de vous taire alors que vous pourriez parler",
  confiance2: "le doute qui s'installe face à vos propres décisions, même les bonnes",
  confiance3: "cette tendance à vous comparer aux autres, et à en sortir perdant",
  confiance4: "cette difficulté à reconnaître ce que vous faites bien",
  relations1: "cette tension qui traîne sans jamais être vraiment nommée",
  relations2: "cette tendance à trop vous adapter aux autres, à votre détriment",
  relations3: "cette difficulté à savoir comment aborder quelqu'un",
  relations4: "cette difficulté à vous positionner dans une situation qui touche plusieurs personnes",
};

const OPENINGS = {
  role: "Se poser des questions sur la façon d'occuper un rôle qu'on est encore en train d'apprivoiser, ce n'est pas anodin, c'est déjà un signe d'attention à soi.",
  direction: "Prendre le temps de clarifier ce qui compte vraiment pour soi, ce n'est jamais du temps perdu.",
  confiance: "Interroger la confiance qu'on s'accorde demande une vraie lucidité sur soi-même.",
  relations: "Prêter attention à la façon dont on se positionne dans ses relations, c'est déjà une forme de soin, envers soi comme envers les autres.",
  autre: "Merci d'avoir pris le temps de partager votre situation.",
};

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

const BODIES = {
  A: () =>
    "Sur l'ensemble, rien ne semble peser de façon pressante pour vous aujourd'hui, et l'envie d'y toucher activement n'est pas là non plus. C'est une position confortable, et il n'y a aucune raison de la bousculer.",
  B: (ref) =>
    ref
      ? `${capitalize(ref)}, cela semble peser, même si l'envie d'agir maintenant n'est pas encore là, et ce n'est pas grave d'avancer à votre rythme.`
      : "Cela semble peser, même si l'envie d'agir maintenant n'est pas encore là, et ce n'est pas grave d'avancer à votre rythme.",
  C: (ref) =>
    ref
      ? `${capitalize(ref)}, cela ne semble pas si lourd à porter aujourd'hui, mais quelque chose en vous cherche déjà à bouger les lignes, ce qui est une bonne raison d'en parler.`
      : "Cela ne semble pas si lourd à porter aujourd'hui, mais quelque chose en vous cherche déjà à bouger les lignes, ce qui est une bonne raison d'en parler.",
  D: (ref) =>
    ref
      ? `${capitalize(ref)}, ça pèse clairement, avec une vraie détermination à ce que ça change. Vous semblez avoir les moyens d'avancer par vous-même, mais un échange peut aider à aller plus vite, ou plus loin.`
      : "Ça pèse clairement, avec une vraie détermination à ce que ça change. Vous semblez avoir les moyens d'avancer par vous-même, mais un échange peut aider à aller plus vite, ou plus loin.",
  E: (ref) =>
    ref
      ? `${capitalize(ref)}, cela prend clairement beaucoup de place en ce moment, avec une réelle motivation à faire évoluer les choses. C'est exactement ce que peut apporter un accompagnement : les moyens qui vous manquent aujourd'hui pour reprendre la main.`
      : "Cela prend clairement beaucoup de place en ce moment, avec une réelle motivation à faire évoluer les choses. C'est exactement ce que peut apporter un accompagnement : les moyens qui vous manquent aujourd'hui pour reprendre la main.",
};

const RESULT_CTA = {
  A: "Échanger, sans engagement",
  B: "Échanger, sans engagement",
  C: "Parlons-en quand même",
  D: "Échanger, pour voir ce que ça peut débloquer",
  E: "Prendre rendez-vous",
};

const STEP_ORDER = { theme: 1, themeFree: 2, vecu: 2, vecuFree: 3, severity: 3, motivation: 4, capacity: 5 };

const BTN_STYLE = {
  background: "var(--card)",
  color: "var(--text)",
  padding: "13px 24px",
  borderRadius: 999,
  fontSize: 15,
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
};
const SELECTED_BTN_STYLE = {
  ...BTN_STYLE,
  background: "var(--accent)",
  color: "var(--bg)",
};

const initialState = {
  screen: "intro",
  theme: null,
  vecuSelected: [],
  freeText: "",
  vecuFreeText: "",
  usingVecuFree: false,
  severity: 5,
  motivation: 5,
  capacity: null,
  history: [],
};

export default function DiagnosticApp() {
  const [state, setState] = useState(initialState);
  const s = state.screen;

  const goTo = (screen) => {
    setState((prev) => ({ ...prev, screen, history: [...prev.history, prev.screen] }));
  };
  const goBack = () => {
    setState((prev) => {
      const history = [...prev.history];
      const prevScreen = history.pop();
      if (!prevScreen) return prev;
      return { ...prev, screen: prevScreen, history };
    });
  };
  const selectTheme = (id) => {
    setState((prev) => ({ ...prev, theme: id, vecuSelected: [] }));
    goTo(id === "autre" ? "themeFree" : "vecu");
  };
  const toggleVecu = (id) => {
    setState((prev) => ({
      ...prev,
      vecuSelected: prev.vecuSelected.includes(id)
        ? prev.vecuSelected.filter((v) => v !== id)
        : [...prev.vecuSelected, id],
    }));
  };

  const buildRef = () => {
    if (state.theme === "autre" || state.usingVecuFree) return null;
    const labels = state.vecuSelected.map((id) => VECU_REF[id]).filter(Boolean);
    if (labels.length === 2) return `${labels[0]} et ${labels[1]}`;
    if (labels.length > 2) return `${labels.slice(0, -1).join(", ")} et ${labels[labels.length - 1]}`;
    return labels[0] || null;
  };

  const themeCards = THEME_CARDS.map((c) => {
    const selected = state.theme === c.id;
    return {
      ...c,
      select: () => selectTheme(c.id),
      bg: selected ? "oklch(0.93 0.025 40)" : "var(--card)",
      border: selected ? "var(--accent)" : "transparent",
    };
  });

  const vecuItems = (VECU[state.theme] || []).map((it) => {
    const checked = state.vecuSelected.includes(it.id);
    return {
      ...it,
      toggle: () => toggleVecu(it.id),
      bg: checked ? "oklch(0.93 0.025 40)" : "var(--card)",
      border: checked ? "var(--accent)" : "transparent",
      checkBorder: checked ? "var(--accent)" : "oklch(0.7 0.015 50)",
      checkBg: checked ? "var(--accent)" : "transparent",
      checkMark: checked ? "✓" : "",
    };
  });

  const sevHigh = state.severity >= 6;
  const motHigh = state.motivation >= 6;
  const capYes = state.capacity === "yes";
  let outcome;
  if (!sevHigh && !motHigh) outcome = "A";
  else if (sevHigh && !motHigh) outcome = "B";
  else if (!sevHigh && motHigh) outcome = "C";
  else outcome = capYes ? "D" : "E";

  const ref = buildRef();
  const opening = OPENINGS[state.theme] || OPENINGS.autre;
  const resultBody = `${opening} ${BODIES[outcome](ref)}`;
  const resultCtaLabel = RESULT_CTA[outcome];
  const params = new URLSearchParams({ situation: ref || "" });
  const resultCtaHref = `/rendez-vous?${params.toString()}`;

  const showProgress = !["intro", "result"].includes(s);
  const progress = Math.min(100, ((STEP_ORDER[s] || 0) / 5) * 100);

  const freeText = state.theme === "autre" ? state.freeText || "" : state.vecuFreeText || "";
  const onFreeTextChange = (e) => {
    if (state.theme === "autre" && state.screen === "themeFree") {
      setState((prev) => ({ ...prev, freeText: e.target.value }));
    } else {
      setState((prev) => ({ ...prev, vecuFreeText: e.target.value }));
    }
  };
  const freeContinueOpacity =
    (state.screen === "themeFree" ? state.freeText : state.vecuFreeText || "").trim().length > 0 ? 1 : 0.5;
  const continueFree = () => {
    const val = (state.screen === "themeFree" ? state.freeText : state.vecuFreeText) || "";
    if (val.trim().length > 0) goTo("severity");
  };

  const vecuContinueOpacity = state.vecuSelected.length > 0 ? 1 : 0.5;
  const continueVecu = () => {
    if (state.vecuSelected.length > 0) {
      setState((prev) => ({ ...prev, usingVecuFree: false }));
      goTo("severity");
    }
  };
  const selectVecuFree = () => {
    setState((prev) => ({ ...prev, usingVecuFree: true, vecuSelected: [] }));
    goTo("vecuFree");
  };

  const restart = () => setState(initialState);

  return (
    <>
      {showProgress && (
        <div style={{ height: 3, background: "oklch(0.9 0.008 55)" }}>
          <div
            style={{
              height: "100%",
              background: "var(--accent)",
              width: `${progress}%`,
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      )}

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px clamp(20px,6vw,64px) 64px" }}>
        <div style={{ maxWidth: 600, width: "100%" }}>
          {state.history.length > 0 && (
            <button
              onClick={goBack}
              className="muted-link"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: "0 0 20px",
                cursor: "pointer",
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: 13.5,
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← Retour
            </button>
          )}

          {s === "intro" && (
            <div className="dq-step">
              <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--primary)", margin: "0 0 20px" }}>
                Votre situation
              </p>
              <h1 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.25, margin: "0 0 20px" }}>
                Un point sur votre situation, en une minute.
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 32px" }}>
                Quelques questions simples, anonymes et sans engagement, pour voir plus clair.
              </p>
              <button
                onClick={() => goTo("theme")}
                className="btn-pill-primary"
                style={{ padding: "14px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}
              >
                Commencer
              </button>
            </div>
          )}

          {s === "theme" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 28px" }}>
                Dans quelle situation vous trouvez-vous ?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {themeCards.map((c) => (
                  <button
                    key={c.id}
                    onClick={c.select}
                    className="card-hover"
                    style={{
                      textAlign: "left",
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: 14,
                      padding: "16px 18px",
                      cursor: "pointer",
                      fontFamily: "var(--font-lora), serif",
                      fontWeight: 400,
                      fontSize: 15,
                      lineHeight: 1.45,
                      color: "var(--text)",
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {s === "themeFree" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 20px" }}>
                En quelques mots, qu&apos;est-ce qui vous occupe ?
              </h2>
              <textarea
                value={freeText}
                onChange={onFreeTextChange}
                placeholder="Ex : Je me sens à côté de mon poste, sans trop savoir pourquoi."
                rows={4}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  background: "var(--card-2)",
                  fontSize: 15,
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  color: "var(--text)",
                  resize: "vertical",
                  marginBottom: 20,
                }}
              ></textarea>
              <button
                onClick={continueFree}
                className="btn-pill-primary"
                style={{ padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif", opacity: freeContinueOpacity }}
              >
                Continuer
              </button>
            </div>
          )}

          {s === "vecu" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 24px" }}>
                Parmi ces phrases, lesquelles vous parlent ?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {vecuItems.map((it) => (
                  <button
                    key={it.id}
                    onClick={it.toggle}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      textAlign: "left",
                      background: it.bg,
                      border: `1px solid ${it.border}`,
                      borderRadius: 14,
                      padding: "16px 18px",
                      cursor: "pointer",
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: 15,
                      lineHeight: 1.45,
                      color: "var(--text)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        border: `1.5px solid ${it.checkBorder}`,
                        background: it.checkBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--bg)",
                        fontSize: 12,
                      }}
                    >
                      {it.checkMark}
                    </span>
                    <span>{it.text}</span>
                  </button>
                ))}
                <button
                  onClick={selectVecuFree}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "6px 4px",
                    cursor: "pointer",
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: 13.5,
                    color: "var(--muted)",
                    textDecoration: "underline",
                  }}
                >
                  Aucune de ces phrases ne me parle vraiment
                </button>
              </div>
              <button
                onClick={continueVecu}
                className="btn-pill-primary"
                style={{ padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif", opacity: vecuContinueOpacity }}
              >
                Continuer
              </button>
            </div>
          )}

          {s === "vecuFree" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 20px" }}>
                En quelques mots, qu&apos;est-ce qui vous parle davantage ?
              </h2>
              <textarea
                value={freeText}
                onChange={onFreeTextChange}
                placeholder="Décrivez-le à votre façon."
                rows={4}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  background: "var(--card-2)",
                  fontSize: 15,
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  color: "var(--text)",
                  resize: "vertical",
                  marginBottom: 20,
                }}
              ></textarea>
              <button
                onClick={continueFree}
                className="btn-pill-primary"
                style={{ padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif", opacity: freeContinueOpacity }}
              >
                Continuer
              </button>
            </div>
          )}

          {s === "severity" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 40px" }}>
                À quel point est-ce que ce que vous venez de décrire pèse sur vous, aujourd&apos;hui ?
              </h2>
              <input
                className="dq-range"
                type="range"
                min="0"
                max="10"
                value={state.severity}
                onChange={(e) => setState((prev) => ({ ...prev, severity: parseInt(e.target.value, 10) }))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", margin: "10px 0 32px" }}>
                <span>Pas vraiment</span>
                <span>Énormément</span>
              </div>
              <button
                onClick={() => goTo("motivation")}
                className="btn-pill-primary"
                style={{ padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}
              >
                Continuer
              </button>
            </div>
          )}

          {s === "motivation" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 40px" }}>
                Avez-vous envie que ça change ?
              </h2>
              <input
                className="dq-range"
                type="range"
                min="0"
                max="10"
                value={state.motivation}
                onChange={(e) => setState((prev) => ({ ...prev, motivation: parseInt(e.target.value, 10) }))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", margin: "10px 0 32px" }}>
                <span>Pas vraiment</span>
                <span>Oui, clairement</span>
              </div>
              <button
                onClick={() => goTo("capacity")}
                className="btn-pill-primary"
                style={{ padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}
              >
                Continuer
              </button>
            </div>
          )}

          {s === "capacity" && (
            <div className="dq-step">
              <h2 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(23px,3vw,28px)", lineHeight: 1.35, margin: "0 0 32px" }}>
                Avez-vous le sentiment d&apos;avoir, aujourd&apos;hui, toutes les ressources ou capacités pour
                faire évoluer cela par vous-même ?
              </h2>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    setState((prev) => ({ ...prev, capacity: "yes" }));
                    goTo("result");
                  }}
                  style={state.capacity === "yes" ? SELECTED_BTN_STYLE : BTN_STYLE}
                >
                  Oui
                </button>
                <button
                  onClick={() => {
                    setState((prev) => ({ ...prev, capacity: "no" }));
                    goTo("result");
                  }}
                  style={state.capacity === "no" ? SELECTED_BTN_STYLE : BTN_STYLE}
                >
                  Non
                </button>
              </div>
            </div>
          )}

          {s === "result" && (
            <div className="dq-step">
              <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
                Synthèse du diagnostic
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, fontFamily: "var(--font-lora), serif", margin: "0 0 32px" }}>
                {resultBody}
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href={resultCtaHref}
                  className="btn-pill-primary"
                  style={{ padding: "14px 26px", borderRadius: 999, fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  {resultCtaLabel}
                </a>
                <button
                  onClick={restart}
                  style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 14, textDecoration: "underline", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}
                >
                  Recommencer
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
