"use client";

import { useEffect, useState } from "react";
import "./Loader.css";

/**
 * AMAR INTERIOR — Luxury Intro Loader (Equal Timing for Outer & Internal Routes)
 */
export default function Loader({ onFinish }) {
  const [phase, setPhase] = useState("loading");

  // Lock scroll while loader is active
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Phase 1: Fixed hold for both First Load & Route Switch (400ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("expanding");
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // Phase 2: Gold Circle Expansion (1100ms)
  useEffect(() => {
    if (phase !== "expanding") return undefined;

    const timer = setTimeout(() => {
      setPhase("fading");
    }, 1100);

    return () => clearTimeout(timer);
  }, [phase]);

  // Phase 3: Fade out and finish callback
  useEffect(() => {
    if (phase !== "fading") return undefined;

    const timer = setTimeout(() => {
      setPhase("done");
      document.body.classList.add("page-loaded");

      if (onFinish) onFinish();
    }, 300);

    return () => clearTimeout(timer);
  }, [phase, onFinish]);

  if (phase === "done") return null;

  return (
    <div
      className={`amar-loader amar-loader--${phase}`}
      role="status"
      aria-live="polite"
      aria-label="AMAR INTERIOR is loading"
    >
      <span className="amar-loader__expand-circle" aria-hidden="true" />

      <div className="amar-loader__content">
        <div className="amar-loader__ring" aria-hidden="true">
          <svg className="amar-loader__ring-svg" viewBox="0 0 100 100">
            <circle className="amar-loader__ring-track" cx="50" cy="50" r="44" />
            <circle className="amar-loader__ring-progress" cx="50" cy="50" r="44" />
          </svg>
          <span className="amar-loader__dot" />
        </div>

        <p className="amar-loader__brand">
          AMAR<span className="amar-loader__brand-accent">INTERIOR</span>
        </p>
      </div>
    </div>
  );
}