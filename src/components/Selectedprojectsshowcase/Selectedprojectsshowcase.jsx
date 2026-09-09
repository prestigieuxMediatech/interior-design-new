"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Fraunces, Inter, Montserrat } from "next/font/google";
import "./Selectedprojectsshowcase.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--showcase-font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--showcase-font-body",
  display: "swap",
});

// Image 2 style heavy sans-serif font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--showcase-font-heading-bold",
  display: "swap",
});

const PROJECTS = [
  {
    number: "01",
    area: "feature",
    name: "Residence at Worli",
    location: "Worli, Mumbai",
    category: "Luxury Residential Interior",
    description:
      "A sea-facing family home reworked around light and material honesty — fluted stone, warm oak and brass detailing throughout three interconnected living levels.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Sea-facing luxury residential living room in Worli, Mumbai",
    overlayText: true,
    href: "#",
  },
  {
    number: "02",
    area: "second",
    name: "The Alibaug House",
    location: "Alibaug, Maharashtra",
    category: "Weekend Villa",
    description:
      "A courtyard villa built for slow weekends — lime-washed walls, teak louvres and a garden that steps directly into the living room.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Courtyard weekend villa interior in Alibaug",
    overlayText: false,
    href: "#",
  },
  {
    number: "03",
    area: "wide",
    name: "Marine Parade Penthouse",
    location: "Marine Lines, Mumbai",
    category: "Penthouse Interior",
    description:
      "A single uninterrupted volume along the promenade, where a low travertine kitchen island and a 9-metre wall of glass frame the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Panoramic penthouse interior overlooking Marine Lines, Mumbai",
    overlayText: false,
    href: "#",
  },
  {
    number: "04",
    area: "duoA",
    name: "Aranya Villa",
    location: "Lonavala, Maharashtra",
    category: "Private Retreat",
    description:
      "Set into a hillside, the villa is organised around a double-height living room clad entirely in local basalt and reclaimed timber.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Hillside private retreat villa in Lonavala",
    overlayText: false,
    href: "#",
  },
  {
    number: "05",
    area: "duoB",
    name: "Studio Nine Office",
    location: "Indiranagar, Bengaluru",
    category: "Commercial Interior",
    description:
      "A design studio's own workplace — exposed services, a working material library, and joinery built by the same craftspeople the studio hires for clients.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Commercial studio office interior in Bengaluru",
    overlayText: false,
    href: "#",
  },
  {
    number: "06",
    area: "close",
    name: "The Courtyard House",
    location: "Koregaon Park, Pune",
    category: "Luxury Residential Interior",
    description:
      "A joint family home planned around a central courtyard, letting every room borrow the same shaft of daylight at a different hour.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Courtyard residential home interior in Pune",
    overlayText: true,
    href: "#",
  },
];

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function useTilt(maxDeg = 4.5) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || prefersReduced) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.transition = "transform 60ms linear";
      node.style.transform = `perspective(1400px) rotateX(${(-py * maxDeg).toFixed(
        2
      )}deg) rotateY(${(px * maxDeg).toFixed(2)}deg)`;
    };

    const handleLeave = () => {
      node.style.transition = "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)";
      node.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxDeg]);

  return ref;
}

function ProjectCard({ project, index, registerParallaxNode }) {
  const [inViewRef, inView] = useInView();
  const frameRef = useTilt(4.5);
  const parallaxRef = useRef(null);

  useEffect(() => {
    registerParallaxNode(index, parallaxRef.current);
    return () => registerParallaxNode(index, null);
  }, [index, registerParallaxNode]);

  const setRefs = useCallback(
    (node) => {
      inViewRef.current = node;
      frameRef.current = node;
    },
    [inViewRef, frameRef]
  );

  return (
    <article
      className={
        `showcase__project showcase__project--${project.area}` +
        (inView ? " is-visible" : "")
      }
    >
      <a
        href={project.href}
        className="showcase__link"
        aria-label={`View ${project.name} project`}
      >
        <div ref={setRefs} className="showcase__frame">
          <div ref={parallaxRef} className="showcase__parallax">
            <img
              className="showcase__image"
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
            />
          </div>
          <span className="showcase__veil" aria-hidden="true" />
          {project.overlayText && (
            <span className="showcase__scrim" aria-hidden="true" />
          )}
          <span className="showcase__corner showcase__corner--tl" aria-hidden="true" />
          <span className="showcase__corner showcase__corner--br" aria-hidden="true" />

          {project.overlayText && (
            <div className="showcase__overlay-info">
              <span className="showcase__number" aria-hidden="true">
                {project.number}
              </span>
              <h3 className="showcase__title">{project.name}</h3>
              <p className="showcase__meta">
                {project.location} — {project.category}
              </p>
            </div>
          )}
        </div>

        {!project.overlayText && (
          <div className="showcase__info">
            <span className="showcase__number" aria-hidden="true">
              {project.number}
            </span>
            <div className="showcase__info-text">
              <h3 className="showcase__title">{project.name}</h3>
              <p className="showcase__meta">
                {project.location} — {project.category}
              </p>
              <p className="showcase__desc">{project.description}</p>
            </div>
          </div>
        )}
      </a>
    </article>
  );
}

export default function SelectedProjectsShowcase() {
  const [headerRef, headerInView] = useInView();
  const parallaxNodes = useRef([]);
  const titleText = "OUR PROJECTS";

  const registerParallaxNode = useCallback((index, node) => {
    parallaxNodes.current[index] = node;
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      if (window.innerWidth < 768) return;

      const viewportCenter = window.innerHeight / 2;
      parallaxNodes.current.forEach((node) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const delta = Math.max(
          -26,
          Math.min(26, (viewportCenter - elCenter) * 0.05)
        );
        node.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      className={`showcase ${fraunces.variable} ${inter.variable} ${montserrat.variable}`}
      aria-labelledby="showcase-heading"
    >
      <div className="showcase__container">
        <header
          ref={headerRef}
          className={"showcase__header" + (headerInView ? " is-visible" : "")}
        >
          {/* Header Title with letter-by-letter magnetic right slide */}
          <div className="showcase__header-top">
            <h2 className="showcase__main-heading" aria-label={titleText}>
              {titleText.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="showcase__word">
                  {word.split("").map((letter, lIdx) => {
                    const globalIndex = wIdx === 0 ? lIdx : 3 + lIdx;
                    return (
                      <span
                        key={lIdx}
                        className="showcase__letter"
                        style={{ animationDelay: `${globalIndex * 60 + 100}ms` }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </span>
              ))}
            </h2>
          </div>

          <div className="showcase__header-body">
            <h3 id="showcase-heading" className="showcase__title-main">
              Spaces shaped around the way you live
            </h3>
            <p className="showcase__intro">
              A curated collection of residences, retreats and workplaces —
              each one a record of a client's brief taken all the way to
              finished detail.
            </p>
          </div>
        </header>

        <div className="showcase__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              registerParallaxNode={registerParallaxNode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}