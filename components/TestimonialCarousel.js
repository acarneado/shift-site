"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY = 3000;
const SPEED = 0.55; // px per frame at 60fps

export default function TestimonialCarousel({ testimonials }) {
  const trackRef = useRef(null);
  const items = testimonials.concat(testimonials);

  useEffect(() => {
    const track = trackRef.current;
    const scroller = track?.parentElement;
    if (!track || !scroller || !track.children.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    scroller.classList.add("carousel-scroller");
    scroller.style.overflowX = "auto";
    scroller.style.overflowY = "hidden";
    scroller.style.scrollbarWidth = "none";
    scroller.style.cursor = "grab";
    scroller.style.touchAction = "pan-x";
    scroller.style.webkitOverflowScrolling = "touch";

    let paused = prefersReducedMotion;
    let resumeTimer = null;
    let acc = 0;
    let programmatic = false;

    function period() {
      const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
      return (track.scrollWidth + gap) / 2;
    }
    function pause() {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    }
    function scheduleResume() {
      // Respect the visitor's reduced-motion preference: once paused, stay paused.
      if (prefersReducedMotion) return;
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, RESUME_DELAY);
    }
    function interact() {
      pause();
      scheduleResume();
    }

    const onScroll = () => {
      if (programmatic) {
        programmatic = false;
        return;
      }
      interact();
    };

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
      pause();
      if (e.pointerType === "mouse") e.preventDefault();
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.abs(dx);
      if (e.pointerType === "mouse") {
        programmatic = true;
        scroller.scrollLeft = startScroll - dx;
      }
    };
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      scroller.style.cursor = "grab";
      scheduleResume();
    };
    const onTrackClick = (e) => {
      if (moved > 5) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    scroller.addEventListener("wheel", interact, { passive: true });
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("touchend", scheduleResume, { passive: true });
    scroller.addEventListener("touchcancel", scheduleResume, { passive: true });
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", scheduleResume);
    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("pointerleave", endDrag);
    track.addEventListener("click", onTrackClick, true);

    let rafId;
    function frame() {
      if (!track.isConnected) return;
      if (!paused) {
        const p = period();
        if (p > 0) {
          acc += SPEED;
          const step = Math.floor(acc);
          if (step >= 1) {
            acc -= step;
            programmatic = true;
            scroller.scrollLeft += step;
          }
        }
      }
      const per = period();
      if (per > 0 && scroller.scrollLeft >= per) {
        programmatic = true;
        scroller.scrollLeft -= per;
      } else if (scroller.scrollLeft < 0) {
        programmatic = true;
        scroller.scrollLeft += per;
      }
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) clearTimeout(resumeTimer);
      scroller.removeEventListener("wheel", interact);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("touchend", scheduleResume);
      scroller.removeEventListener("touchcancel", scheduleResume);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", scheduleResume);
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", endDrag);
      scroller.removeEventListener("pointercancel", endDrag);
      scroller.removeEventListener("pointerleave", endDrag);
      track.removeEventListener("click", onTrackClick, true);
    };
  }, [testimonials]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div ref={trackRef} className="carousel-track" style={{ display: "flex", gap: 20, width: "max-content" }}>
        {items.map((t, i) => (
          <div
            key={i}
            style={{
              background: "var(--card)",
              border: "1px solid oklch(0.62 0.10 40 / 0.3)",
              borderRadius: 18,
              padding: 24,
              width: 300,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 28,
                lineHeight: 1,
                color: "var(--accent)",
                display: "block",
                margin: "0 0 8px",
              }}
            >
              &quot;
            </span>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontStyle: "italic",
                fontSize: 15,
                lineHeight: 1.6,
                color: "oklch(0.32 0.015 50)",
                margin: "0 0 20px",
              }}
            >
              {t.text}
            </p>
            <p style={{ fontSize: 13, color: "var(--muted-2)", margin: 0 }}>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
