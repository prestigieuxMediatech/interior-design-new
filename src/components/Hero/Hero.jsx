"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

gsap.registerPlugin(useGSAP);

const HERO_VIDEO = "/hero-bg.mp4";

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".hero-eyebrow",
            ".hero-headline",
            ".hero-actions",
            ".hero-sound",
            ".hero-scroll",
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Starts instantly with zero delay
      tl.fromTo(
        ".hero-eyebrow",
        { y: -35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        0
      )
        .fromTo(
          ".hero-headline",
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3 },
          0.05
        )
        .fromTo(
          ".hero-actions",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          0.1
        )
        .fromTo(
          ".hero-sound",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.15
        )
        .fromTo(
          ".hero-scroll",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.15
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="hero">
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="hero-frame">
        {/* Topbar wrapper kept clean for layout structure */}
        <div className="hero-topbar"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">LUXURY INTERIORS</p>
          <h1 className="hero-headline">
            Spaces designed to be felt, not just seen.
          </h1>
          <div className="hero-actions">
            <Link href="/portfolio" className="hero-cta">
              <span>Explore Work</span>
              <ArrowRight size={20} className="hero-cta-icon" />
            </Link>
          </div>
        </div>

        <div className="hero-bottombar">
          <button
            className="hero-sound"
            onClick={toggleSound}
            aria-label="Toggle video sound"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line">
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}