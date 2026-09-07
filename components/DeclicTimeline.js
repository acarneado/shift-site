"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Faire ses preuves",
    icon: "square",
    blocks: [
      { t: "p", text: "Être parfait. Ne pas faire d'erreur. Être irréprochable. Je voulais être à la hauteur de ce que l'on attendait de moi." },
      { t: "h", text: "J'ai longtemps cru qu'être à la hauteur signifiait ne pas laisser de place au doute." },
    ],
  },
  {
    title: "Découvrir le collectif",
    icon: "overlap",
    blocks: [
      { t: "p", text: "Les projets étaient riches et stimulants. Mais c'est ce qui se jouait entre les personnes qui me faisait vibrer." },
      { t: "h", text: "J'ai compris que ce qui me mettait en mouvement, c'était le collectif." },
    ],
  },
  {
    title: "Les autres comme révélateurs",
    icon: "dots",
    blocks: [
      { t: "p", text: "On me sollicitait pour mobiliser les équipes, faire émerger des idées, apporter un regard humain. Et parfois, on me disait : « Tu pourrais être coach. »" },
      { t: "h", text: "Des choses que les autres percevaient chez moi avant que je sois moi-même prêt à les reconnaître." },
    ],
  },
  {
    title: "Quand le contexte change",
    icon: "triangle",
    blocks: [
      { t: "p", text: "J'ai traversé des organisations, des secteurs et des cultures différentes — et j'ai vu à quel point le contexte pouvait influencer l'engagement et la confiance. Puis le Covid est arrivé. J'ai changé de cadre, et je me suis progressivement refermé : moins d'élan, moins d'envie de contribuer." },
      { t: "h", text: "Notre environnement ne détermine pas qui nous sommes, mais il peut profondément influencer la manière dont nous pouvons l'exprimer." },
    ],
  },
  {
    title: "Une première porte vers le coaching",
    icon: "diamond",
    blocks: [
      { t: "p", text: "Je me suis intéressé au coaching. Une porte s'ouvrait, sans que j'en franchisse le pas. Je me sentais encore trop peu légitime." },
      { t: "h", text: "Parfois, une intuition arrive bien avant que l'on soit prêt à lui faire confiance." },
    ],
  },
  {
    title: "Construire sans encore le savoir",
    icon: "blocks",
    blocks: [
      { t: "p", text: "J'ai managé, accompagné, transmis, formé à la prise de parole. J'ai aussi créé un atelier théâtre en entreprise." },
      { t: "h", text: "Certaines étapes ne nous conduisent pas directement quelque part. Elles nous construisent." },
    ],
  },
  {
    title: "Une conviction qui prend forme",
    icon: "arrow",
    blocks: [
      { t: "p", text: "Ce qui m'anime : être aux côtés des personnes lorsqu'elles cherchent, doutent, créent, évoluent. Voir le moment où quelque chose se débloque." },
      { t: "h", text: "C'est là que je me sens le plus utile." },
    ],
  },
  {
    title: "Choisir",
    icon: "target",
    blocks: [
      { t: "p", text: "En septembre 2025, j'ai entrepris ma formation de certification en coaching. Une conviction construite sur dix ans." },
      { t: "h", text: "Pas pour tourner le dos à mon parcours. Pour lui donner une nouvelle direction. C'est là que le déclic s'enracine." },
    ],
  },
];

const OFFSETS = [0, 9, -7, 11, -9, 7, -11, 0];

function StepIcon({ icon }) {
  const common = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: 1.4 };
  switch (icon) {
    case "square":
      return <svg {...common}><rect x="4.5" y="4.5" width="9" height="9"></rect></svg>;
    case "overlap":
      return <svg {...common}><circle cx="7" cy="9" r="4.5"></circle><circle cx="11.5" cy="9" r="4.5"></circle></svg>;
    case "dots":
      return <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="6" cy="9" r="1.6" fill="currentColor"></circle><circle cx="12" cy="9" r="1.6" fill="currentColor"></circle></svg>;
    case "triangle":
      return <svg {...common}><polygon points="9,4 15,13 3,13"></polygon></svg>;
    case "diamond":
      return <svg {...common}><rect x="5" y="5" width="8" height="8" transform="rotate(45 9 9)"></rect></svg>;
    case "blocks":
      return <svg {...common}><rect x="5" y="4" width="8" height="4"></rect><rect x="5" y="10" width="8" height="4"></rect></svg>;
    case "arrow":
      return <svg {...common}><line x1="3" y1="9" x2="13" y2="9"></line><polygon points="11,5.5 15,9 11,12.5" fill="currentColor"></polygon></svg>;
    case "target":
      return <svg {...common}><circle cx="9" cy="9" r="5.5"></circle><circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none"></circle></svg>;
    default:
      return null;
  }
}

export default function DeclicTimeline() {
  const timelineRef = useRef(null);
  const iconRefs = useRef([]);
  const [curve, setCurve] = useState({ d: "", w: 0, h: 0, points: [] });
  const [revealed, setRevealed] = useState(() => new Array(STEPS.length).fill(false));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 860);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const measureCurve = useCallback(() => {
    const container = timelineRef.current;
    const els = iconRefs.current.filter(Boolean);
    if (!container || !els.length) return;
    const cRect = container.getBoundingClientRect();
    const points = els.map((el) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - cRect.left, y: r.top + r.height / 2 - cRect.top };
    });
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) d += ` L ${points[i].x} ${points[i].y}`;
    setCurve({ d, w: container.clientWidth, h: container.scrollHeight, points });
  }, []);

  useEffect(() => {
    const scheduleMeasure = () =>
      requestAnimationFrame(() => requestAnimationFrame(() => measureCurve()));

    scheduleMeasure();
    window.addEventListener("resize", scheduleMeasure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleMeasure);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = iconRefs.current.indexOf(entry.target);
            if (idx !== -1) {
              setRevealed((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.35 }
    );
    iconRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener("resize", scheduleMeasure);
      observer.disconnect();
    };
  }, [measureCurve]);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => measureCurve()));
  }, [isMobile, measureCurve]);

  let revealHeight = 0;
  for (let i = 0; i < revealed.length; i++) {
    if (revealed[i] && curve.points[i]) {
      revealHeight = Math.max(revealHeight, curve.points[i].y + 30);
    }
  }

  return (
    <div ref={timelineRef} style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
      <svg width={curve.w} height={curve.h} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
        <defs>
          <mask id="frise-reveal-mask">
            <rect x="0" y="0" width={curve.w} height={revealHeight} fill="#fff" style={{ transition: "height 0.6s ease" }}></rect>
          </mask>
        </defs>
        <g mask="url(#frise-reveal-mask)">
          <path d={curve.d} fill="none" stroke="oklch(0.5 0.08 40 / 0.35)" strokeWidth="1.3"></path>
          <path d={curve.d} fill="none" stroke="oklch(0.5 0.08 40 / 0.7)" strokeWidth="1.3" strokeDasharray="1 7" strokeLinecap="round"></path>
        </g>
      </svg>

      {STEPS.map((s, i) => {
        const offset = OFFSETS[i] * (isMobile ? 0.35 : 1);
        const isRevealed = revealed[i];
        return (
          <div
            key={s.title}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "64px 1fr",
              columnGap: 16,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <div
                ref={(el) => (iconRefs.current[i] = el)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: "var(--bg)",
                  border: "1.5px dashed oklch(0.5 0.08 40 / 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  flexShrink: 0,
                  transform: `translateX(${offset}px)`,
                }}
              >
                <StepIcon icon={s.icon} />
              </div>
            </div>
            <div
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontWeight: 500,
                  fontSize: 17,
                  margin: "0 0 6px",
                  color: "var(--text)",
                }}
              >
                {s.title}
              </h3>
              {s.blocks.map((b, bi) =>
                b.t === "p" ? (
                  <p
                    key={bi}
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      color: "var(--muted)",
                      margin: "0 0 6px",
                      maxWidth: 560,
                    }}
                  >
                    {b.text}
                  </p>
                ) : (
                  <p
                    key={bi}
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontWeight: 600,
                      fontSize: 15.5,
                      lineHeight: 1.48,
                      color: "var(--primary)",
                      margin: "2px 0 6px",
                      maxWidth: 560,
                    }}
                  >
                    {b.text}
                  </p>
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
