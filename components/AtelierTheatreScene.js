"use client";

import { useEffect } from "react";

export default function AtelierTheatreScene({ children }) {
  useEffect(() => {
    const g = (id) => document.getElementById(id);
    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    const tick = () => {
      const curtainL = g("curtainL");
      const curtainR = g("curtainR");
      const stage = g("stage");
      const rig = g("stage-rig");
      const beamL = g("beamL");
      const beamR = g("beamR");
      const z2 = g("zone2");
      const z3 = g("zone3");
      const z4 = g("zone4");
      if (!curtainL || !curtainR || !z2 || !z3) return;

      const y = window.scrollY || (document.scrollingElement ? document.scrollingElement.scrollTop : 0);
      const vh = window.innerHeight;

      const wrap = document.getElementById("curtain-wrap");
      const hdr = document.querySelector("header");
      if (wrap && hdr) wrap.style.top = hdr.offsetHeight + "px";
      const rigEl = document.getElementById("stage-rig");
      if (rigEl && hdr) rigEl.style.top = hdr.offsetHeight + "px";

      const pageTop = (el) => el.getBoundingClientRect().top + y;
      const riseStart = 0;
      const riseEnd = pageTop(z2) + z2.offsetHeight * 0.55;
      const riseP = clamp01((y - riseStart) / Math.max(1, riseEnd - riseStart));
      curtainL.style.transform = "translateX(" + -riseP * 260 + "px)";
      curtainR.style.transform = "translateX(" + riseP * 260 + "px)";

      const st = pageTop(z3);
      const local = clamp01(((y - st) / Math.max(1, vh)) * 1.5);
      const zone4Top = z4 ? pageTop(z4) : st + z3.offsetHeight;
      const inStage = y >= st - vh * 0.3 && y < zone4Top;

      if (stage) stage.style.opacity = inStage ? "1" : "0";
      if (rig) rig.style.opacity = inStage ? "1" : "0";
      const leftP = clamp01(local * 1.3);
      const rightP = clamp01((local - 0.12) * 1.3);
      if (beamL) beamL.style.opacity = inStage ? String(0.15 + leftP * 0.65) : "0";
      if (beamR) beamR.style.opacity = inStage ? String(0.15 + rightP * 0.65) : "0";
    };

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        tick();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let lastY = -1;
    let lastH = -1;
    let loopId = requestAnimationFrame(function loop() {
      const y = window.scrollY || (document.scrollingElement ? document.scrollingElement.scrollTop : 0);
      const h = window.innerHeight;
      if (y !== lastY || h !== lastH) {
        lastY = y;
        lastH = h;
        tick();
      }
      loopId = requestAnimationFrame(loop);
    });
    const t = setTimeout(tick, 60);
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (loopId) cancelAnimationFrame(loopId);
      clearTimeout(t);
    };
  }, []);

  return (
    <div id="parcours" style={{ position: "relative", background: "var(--primary-dark)" }}>
      <div
        id="curtain-wrap"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
          color: "oklch(0.52 0.09 150)",
        }}
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="pelmet" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.6">
            <path d="M0 35 C130 85 230 10 400 55 C570 10 670 85 800 35"></path>
          </g>
          <g id="curtainL" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.75">
            <path d="M15 15 C-25 130 45 240 10 345 C-20 430 50 520 5 640 L148 640 C110 520 170 430 100 345 C128 240 175 130 128 15 Z"></path>
          </g>
          <g id="curtainR" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.75">
            <path d="M785 15 C825 130 755 240 790 345 C820 430 750 520 795 640 L652 640 C690 520 630 430 700 345 C672 240 625 130 672 15 Z"></path>
          </g>
        </svg>
      </div>

      <div
        id="stage"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
          color: "var(--bg)",
          opacity: 0,
          transition: "opacity .5s ease",
        }}
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="stageFloor" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.4">
            <path d="M0 380 L800 380"></path>
            <path d="M400 340 L40 600"></path>
            <path d="M400 340 L130 600"></path>
            <path d="M400 340 L220 600"></path>
            <path d="M400 340 L310 600"></path>
            <path d="M400 340 L400 600"></path>
            <path d="M400 340 L490 600"></path>
            <path d="M400 340 L580 600"></path>
            <path d="M400 340 L670 600"></path>
            <path d="M400 340 L760 600"></path>
            <path d="M327 420 L333 420"></path>
            <path d="M383 420 L389 420"></path>
            <path d="M439 420 L445 420"></path>
            <path d="M495 420 L501 420"></path>
            <path d="M226 480 L235 480"></path>
            <path d="M323 480 L332 480"></path>
            <path d="M420 480 L429 480"></path>
            <path d="M517 480 L526 481"></path>
            <path d="M203 560 L215 560"></path>
            <path d="M355 560 L367 560"></path>
            <path d="M508 560 L520 561"></path>
            <path d="M660 560 L672 561"></path>
          </g>
        </svg>
      </div>

      <div
        id="stage-rig"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          overflow: "hidden",
          color: "var(--bg)",
          opacity: 0,
          transition: "opacity .5s ease",
        }}
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMin slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="beamGradL" x1="65" y1="82" x2="240" y2="510" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="oklch(0.92 0.06 80)" stopOpacity="0.55"></stop>
              <stop offset="100%" stopColor="oklch(0.92 0.06 80)" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="beamGradR" x1="735" y1="82" x2="560" y2="510" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="oklch(0.92 0.06 80)" stopOpacity="0.55"></stop>
              <stop offset="100%" stopColor="oklch(0.92 0.06 80)" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g id="beamL" opacity="0">
            <path d="M84 86 L360 460 L120 560 L46 78 Z" fill="url(#beamGradL)"></path>
          </g>
          <g id="beamR" opacity="0">
            <path d="M716 86 L440 460 L680 560 L754 78 Z" fill="url(#beamGradR)"></path>
          </g>
          <g id="projL" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.5">
            <path d="M15 22 L155 22"></path>
            <path d="M68 22 L68 40"></path>
            <path d="M52 40 L90 48 L84 86 L46 78 Z"></path>
            <path d="M84 86 L98 96"></path>
            <path d="M46 78 L42 94"></path>
          </g>
          <g id="projR" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.5">
            <path d="M785 22 L645 22"></path>
            <path d="M732 22 L732 40"></path>
            <path d="M748 40 L710 48 L716 86 L754 78 Z"></path>
            <path d="M716 86 L702 96"></path>
            <path d="M754 78 L758 94"></path>
          </g>
        </svg>
      </div>

      {children}
    </div>
  );
}
