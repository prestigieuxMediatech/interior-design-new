"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./DesignJourneySection.css";

/* ---------------------------------------------------------------------- */
/*  Fonts — swap for your own next/font setup if you already load fonts   */
/*  globally. Fraunces gives the editorial display feel, Inter carries    */
/*  the body copy and small labels.                                       */
/* ---------------------------------------------------------------------- */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--journey-font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--journey-font-body",
  display: "swap",
});

/* ---------------------------------------------------------------------- */
/*  Content — edit freely. Swap `image` for real photography              */
/*  (recommended source aspect ratio: 4:5 portrait).                      */
/* ---------------------------------------------------------------------- */
const STAGES = [
  {
    number: "01",
    label: "Discover",
    title: "We listen before we design anything at all.",
    description:
      "A walkthrough of your space and an unhurried conversation about how you live — routines, collections, the people who'll pass through each room. We leave with a brief only you could have given us.",
    meta: ["Site visit & measure", "Lifestyle & brief workshop", "Budget framework"],
    image:"services/our-service-7.jpeg",
    // image:
    //   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Interior designer reviewing floor plans with a client",
  },
  {
    number: "02",
    label: "Concept",
    title: "A visual language emerges from the brief.",
    description:
      "Moodboards, spatial studies and material stories come together into a single point of view — the palette, the light, the feeling of walking through the finished rooms — for you to react to before a single line is drawn.",
    meta: ["Moodboards & material palette", "Spatial planning", "Concept presentation"],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Moodboard with fabric swatches and material samples",
  },
  {
    number: "03",
    label: "Design",
    title: "Every surface, joint and fitting is resolved.",
    description:
      "The concept is developed into working drawings, joinery details, lighting plans and full specifications — the technical backbone that lets craftspeople build exactly what you approved, without surprises.",
    meta: ["Detailed drawings & 3D views", "Joinery & lighting design", "Full specification set"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Detailed architectural drawings and material specifications",
  },
  {
    number: "04",
    label: "Execute",
    title: "On site, the drawings become a room.",
    description:
      "We manage trades, vendors and timelines so the build stays faithful to the design intent — visiting site regularly, solving problems quietly, and keeping you informed rather than involved in the logistics.",
    meta: ["Contractor coordination", "Weekly site reviews", "Quality snagging"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Craftsperson working on-site during interior fit-out",
  },
  {
    number: "05",
    label: "Handover",
    title: "The final layer — styling, light and detail.",
    description:
      "Furniture is placed, art is hung, textiles are steamed and every fitting is checked twice. You walk into a finished home, not a construction site, and we hand over a care guide built around it.",
    meta: ["Furniture & styling install", "Final quality walkthrough", "Handover & care guide"],
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Finished, styled living room ready for handover",
  },
];

/* ---------------------------------------------------------------------- */
/*  useInView — lightweight IntersectionObserver hook.                    */
/*  Triggers once, so re-scrolling past the section doesn't replay it.    */
/* ---------------------------------------------------------------------- */
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who've asked for reduced motion: reveal immediately.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* ---------------------------------------------------------------------- */
/*  Single stage row                                                      */
/* ---------------------------------------------------------------------- */
function ProcessStage({ stage, index }) {
  const [ref, inView] = useInView();
  const reversed = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={
        "journey__stage" +
        (reversed ? " journey__stage--reverse" : "") +
        (inView ? " is-visible" : "")
      }
    >
      <div className="journey__stage-marker">
        <span className="journey__stage-dot" aria-hidden="true" />
        <span className="journey__stage-number" aria-hidden="true">
          {stage.number}
        </span>
      </div>

      <div className="journey__stage-visual">
        <div className="journey__stage-frame">
          <img
            className="journey__stage-image"
            src={stage.image}
            alt={stage.imageAlt}
            loading="lazy"
          />
          <span className="journey__stage-veil" aria-hidden="true" />
          <span className="journey__stage-corner journey__stage-corner--tl" aria-hidden="true" />
          <span className="journey__stage-corner journey__stage-corner--br" aria-hidden="true" />
        </div>
      </div>

      <div className="journey__stage-content">
        <span className="journey__stage-label">{stage.label}</span>
        <h3 className="journey__stage-title">{stage.title}</h3>
        <p className="journey__stage-desc">{stage.description}</p>
        <ul className="journey__stage-meta">
          {stage.meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------------- */
/*  Section                                                                */
/* ---------------------------------------------------------------------- */
export default function DesignJourneySection() {
  const [headerRef, headerInView] = useInView();
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ticking = false;

    const updateProgress = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Fraction of the timeline that has scrolled past the vertical
      // center of the viewport — clamped to [0, 1].
      const total = rect.height + viewportH * 0.5;
      const covered = viewportH * 0.5 - rect.top;
      const value = Math.min(1, Math.max(0, covered / total));

      setProgress(value);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    if (prefersReduced) {
      setProgress(1);
      return;
    }

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      className={`journey ${fraunces.variable} ${inter.variable}`}
      aria-labelledby="journey-heading"
    >
      <div className="journey__container">
        <header
          ref={headerRef}
          className={"journey__header" + (headerInView ? " is-visible" : "")}
        >
          <p className="journey__kicker">The journey, in five stages</p>
          <h2 id="journey-heading" className="journey__title">
            A considered path from first conversation to final reveal
          </h2>
          <p className="journey__intro">
            Every project follows the same disciplined sequence — refined
            over a decade of private residences — so nothing about your home
            is left to chance.
          </p>
        </header>

        <div className="journey__timeline" ref={timelineRef}>
          <div className="journey__spine" aria-hidden="true">
            <span
              className="journey__spine-fill"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          {STAGES.map((stage, index) => (
            <ProcessStage key={stage.number} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
