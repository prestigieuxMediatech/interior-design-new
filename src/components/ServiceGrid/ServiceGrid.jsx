"use client";

import React, { useState, useEffect, useRef } from "react";
import "./ServiceGrid.css";

const servicesData = [
  {
    id: "01",
    title: "RESIDENTIAL INTERIORS",
    category: "Homes • Villas • Apartments",
    description:
      "Tailored residential spaces designed around your unique lifestyle, combining architectural geometry with refined comfort.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "COMMERCIAL SPACES",
    category: "Offices • Studios • Showrooms",
    description:
      "High-impact commercial and retail environments crafted to embody brand identity and elevate user experience.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "HOSPITALITY DESIGN",
    category: "Restaurants • Cafés • Luxury Hotels",
    description:
      "Atmospheric culinary and stay venues engineered for visual storytelling and immersive guest interactions.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "TURNKEY SOLUTIONS",
    category: "Concept • Procurement • Handover",
    description:
      "End-to-end design execution, custom joinery, site management, and precision white-glove delivery.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServiceGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [stageVisible, setStageVisible] = useState(false);

  const headerRef = useRef(null);
  const listRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const createObserver = (setFunc) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setFunc(true);
        },
        { threshold: 0.1 }
      );
    };

    const headerObs = createObserver(setHeaderVisible);
    const listObs = createObserver(setListVisible);
    const stageObs = createObserver(setStageVisible);

    if (headerRef.current) headerObs.observe(headerRef.current);
    if (listRef.current) listObs.observe(listRef.current);
    if (stageRef.current) stageObs.observe(stageRef.current);

    return () => {
      headerObs.disconnect();
      listObs.disconnect();
      stageObs.disconnect();
    };
  }, []);

  const handleInteraction = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="luxury-services-section">
      <div className="luxury-services-container">
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`luxury-header reveal-element ${
            headerVisible ? "is-in-view" : ""
          }`}
        >
          <div className="rose-gold-tag">
            <span className="rose-gold-dot" />
            <span className="tag-text">
              01 — BESPOKE ARCHITECTURAL SERVICES
            </span>
          </div>

          <h2 className="luxury-title">
            THOUGHTFULLY DESIGNED SPACES <br className="desktop-only-br" />
            <span className="rose-gold-accent">
              FOR LUXURY LIVING & WORKING
            </span>
          </h2>

          <p className="luxury-subtitle">
            Crafting harmonious environments through spatial precision, custom
            joinery, and sculptural elegance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="services-showcase-grid">
          {/* ACCORDION LIST */}
          <div
            ref={listRef}
            className={`services-list reveal-element delay-list ${
              listVisible ? "is-in-view" : ""
            }`}
          >
            {servicesData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className={`service-item ${isActive ? "active" : ""}`}
                  onMouseEnter={() => handleInteraction(index)}
                  onClick={() => handleInteraction(index)}
                >
                  <div className="service-item-header">
                    <span className="service-num">{item.id}</span>
                    <h3 className="service-name">{item.title}</h3>
                    <div className="service-arrow-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  <div className="service-expandable-content">
                    <div className="inner-content-wrapper">
                      <p className="service-cat">{item.category}</p>
                      <p className="service-desc">{item.description}</p>

                      {/* MOBILE INLINE IMAGE */}
                      <div className="mobile-inline-image-wrapper">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mobile-inline-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP VISUAL STAGE */}
          <div
            ref={stageRef}
            className={`services-visual-stage reveal-element delay-stage ${
              stageVisible ? "is-in-view" : ""
            }`}
          >
            {servicesData.map((item, index) => (
              <div
                key={item.id}
                className={`visual-card ${
                  activeIndex === index ? "visible" : ""
                }`}
              >
                <div className="visual-image-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="visual-img"
                    loading="lazy"
                  />
                  <div className="visual-glass-badge">
                    <span>{item.id} / 04</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}