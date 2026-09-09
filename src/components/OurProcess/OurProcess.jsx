"use client";

import React, { useState, useEffect, useRef } from 'react';
import './OurProcess.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const processSteps = [
  {
    step: "01",
    phase: "PHASE I — INITIAL VISION",
    title: "SPATIAL BLUEPRINT & CONCEPT",
    subtitle: "Floor Planning & Structural Geometry",
    description: "Translating client requirements into technical 2D layout blueprints, site surveys, and architectural flow maps.",
    deliverables: [
      "Site Survey & Structural Analysis",
      "Architectural 2D Blueprint Drafting",
      "Spatial Sightline Geometry"
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    step: "02",
    phase: "PHASE II — TACTILE PALETTE",
    title: "MATERIAL & MOODBOARD CURATION",
    subtitle: "Luxury Swatch Sampling",
    description: "Handpicking premium Italian marble, acoustic velvet swatches, metal accents, and sustainable wood veneers.",
    deliverables: [
      "Calacatta & Onyx Marble Selection",
      "Custom Timber Stains & Veneers",
      "Textile, Leather & Velvet Swatches"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    step: "03",
    phase: "PHASE III — VIRTUAL PRECISION",
    title: "3D VISUALIZATION & JOINERY",
    subtitle: "Photorealistic Render Studio",
    description: "Creating ray-traced 3D visualizers, Lutron lighting simulation maps, and detailed cabinetry millwork drawings.",
    deliverables: [
      "High-Fidelity 3D Visual Renders",
      "Lutron Architectural Lighting Map",
      "Custom Cabinetry Shop Drawings"
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
  },
  {
    step: "04",
    phase: "PHASE IV — TURNKEY DELIVERY",
    title: "PRECISION SITE EXECUTION",
    subtitle: "Master Fit-Out & Handover",
    description: "On-site structural build management, master carpentry fit-outs, and white-glove final staging handover.",
    deliverables: [
      "Architectural On-Site Build Supervision",
      "Custom Joinery & Fit-out Installation",
      "Turnkey White-Glove Staging"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Smooth Entry Trigger on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal>
    <section className="process-accordion-section" ref={sectionRef}>
      <div className={`process-container ${isVisible ? 'is-visible' : ''}`}>
        
        {/* HEADER */}
        <div className="process-header">
          <div className="gold-tag">
            <span className="dot" />
            <span>STUDIO METHODOLOGY</span>
          </div>
          <h2 className="main-title">
            OUR DESIGN <span className="gold-text">PROCESS</span>
          </h2>
          <p className="sub-title">
            Hover or click on any process card to inspect our stage deliverables.
          </p>
        </div>

        {/* WORKFLOW MAIN CONTENT */}
        <div className="process-grid">
          
          {/* LEFT: EXPANDING ACCORDION STIP CARDS */}
          <div className="accordion-strip-wrapper">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`accordion-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* BACKGROUND IMAGE */}
                  <img src={step.image} alt={step.title} className="card-bg-img" />
                  
                  {/* OVERLAY */}
                  <div className="card-overlay" />

                  {/* CARD INNER CONTENT */}
                  <div className="card-content">
                    <span className="step-number">{step.step}</span>
                    <div className="step-label-group">
                      <span className="step-phase-small">{step.phase}</span>
                      <h4 className="step-card-title">{step.title}</h4>
                    </div>
                  </div>

                  {/* ACTIVE GOLD INDICATOR BAR */}
                  <div className="active-indicator-bar" />
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC DETAILS PANEL */}
          <div className="details-panel-wrapper">
            <div className="details-card" key={activeStep}>
              
              <div className="card-top-meta">
                <span className="phase-badge">{processSteps[activeStep].phase}</span>
                <span className="watermark-num">{processSteps[activeStep].step}</span>
              </div>

              <h3 className="card-main-heading">{processSteps[activeStep].title}</h3>
              <span className="card-sub-heading">{processSteps[activeStep].subtitle}</span>
              
              <p className="card-description">{processSteps[activeStep].description}</p>

              <div className="deliverables-box">
                <span className="del-title">KEY DELIVERABLES:</span>
                <ul>
                  {processSteps[activeStep].deliverables.map((item, i) => (
                    <li key={i}>
                      <span className="gold-tick">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOOTER CONTROLS */}
              <div className="card-footer-controls">
                <div className="step-dots">
                  {processSteps.map((_, i) => (
                    <button
                      key={i}
                      className={`dot-btn ${activeStep === i ? 'is-active' : ''}`}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Step ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="step-counter">
                  <b>0{activeStep + 1}</b> / 0{processSteps.length}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}