"use client";

import { useEffect, useRef, useState } from "react";

function buildPathD(H) {
  return `M 770 ${0.02 * H} C 700 ${0.07 * H}, 760 ${0.13 * H}, 655 ${0.2 * H} C 590 ${0.26 * H}, 660 ${0.32 * H}, 605 ${0.39 * H} C 560 ${0.45 * H}, 600 ${0.5 * H}, 520 ${0.55 * H} C 460 ${0.59 * H}, 600 ${0.63 * H}, 545 ${0.69 * H} C 500 ${0.74 * H}, 620 ${0.8 * H}, 565 ${0.86 * H} C 520 ${0.9 * H}, 580 ${0.95 * H}, 545 ${0.99 * H}`;
}

function buildHeroDotPathD(H) {
  return `M 770 ${0.02 * H} C 700 ${0.07 * H}, 760 ${0.13 * H}, 655 ${0.2 * H}`;
}

export default function HeroTrace({ children }) {
  const mainRef = useRef(null);
  const pathRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(480);
  const [pathLength, setPathLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const measurePath = () => {
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        if (len) setPathLength((prev) => (len !== prev ? len : prev));
      }
    };
    const updateHeight = () => {
      if (mainRef.current) {
        const h = Math.max(mainRef.current.scrollHeight, 480);
        setSvgHeight((prev) => {
          if (h !== prev) {
            requestAnimationFrame(measurePath);
            return h;
          }
          return prev;
        });
      }
    };
    const updateScrollProgress = () => {
      if (!mainRef.current) return;
      const rect = mainRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (rect.height + vh))
      );
      setScrollProgress(progress);
    };

    const onResize = () => {
      updateHeight();
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => {
      updateHeight();
      updateScrollProgress();
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pathD = buildPathD(svgHeight);
  const heroDotPathD = buildHeroDotPathD(svgHeight);
  const dashOffset = (pathLength || 1) * (1 - scrollProgress);

  return (
    <div ref={mainRef} style={{ position: "relative" }}>
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 800 ${svgHeight}`}
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <path
          ref={pathRef}
          id="hero-trace"
          d={pathD}
          fill="none"
          stroke="oklch(0.28 0.06 155 / 0.08)"
          strokeWidth="1.3"
          strokeDasharray={pathLength}
          strokeDashoffset={dashOffset}
        ></path>
        <path id="hero-dot-trace" d={heroDotPathD} opacity="0" fill="none"></path>
        <circle r="3.5" fill="oklch(0.62 0.10 40 / 0.35)">
          <animateMotion dur="19s" repeatCount="indefinite" rotate="0">
            <mpath href="#hero-dot-trace"></mpath>
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.85;1"
            dur="19s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
          ></animate>
        </circle>
        <circle r="3" fill="oklch(0.62 0.10 40 / 0.35)">
          <animateMotion dur="24s" begin="-7s" repeatCount="indefinite" rotate="0">
            <mpath href="#hero-dot-trace"></mpath>
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.85;1"
            dur="24s"
            begin="-7s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
          ></animate>
        </circle>
        <circle r="4" fill="oklch(0.62 0.10 40 / 0.35)">
          <animateMotion dur="21s" begin="-13s" repeatCount="indefinite" rotate="0">
            <mpath href="#hero-dot-trace"></mpath>
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.85;1"
            dur="21s"
            begin="-13s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
          ></animate>
        </circle>
      </svg>
      {children}
    </div>
  );
}
