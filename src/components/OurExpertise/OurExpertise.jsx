"use client";

import React, { useState, useEffect, useRef } from 'react';
import './OurExpertise.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const servicesPills = [
  {
    letter: "S",
    id: "01",
    title: "SPATIAL ARCHITECTURE",
    tagline: "Volumetric Engineering",
    description: "Architectural floor layout, sightline optimization, and spatial geometry tailored for luxury residences.",
    tags: ["Floor Layouts", "3D Geometry", "Spatial Flow"],
    image:"services/our-service-1.jpeg",
    // image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "E",
    id: "02",
    title: "EXQUISITE JOINERY",
    tagline: "Bespoke Millwork",
    description: "Handcrafted cabinetry, custom marble work, and bespoke furniture tailored to architectural dimensions.",
    tags: ["Custom Millwork", "Italian Marble", "Veneer Craft"],
    image:"services/our-service-2.jpeg",

    // image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "R",
    id: "03",
    title: "RESIDENTIAL LUXURY",
    tagline: "Private Living Spaces",
    description: "Curated living rooms, penthouses, and private villas designed with tailored comfort and timeless elegance.",
    tags: ["Penthouses", "Villas", "Bespoke Decor"],
    image:"services/our-service-3.jpeg",

    // image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "V",
    id: "04",
    title: "LIGHTING VISION",
    tagline: "Atmospheric Illumination",
    description: "Layered architectural lighting schemes combined with smart home automation for mood and spatial warmth.",
    tags: ["Lutron Controls", "Ambient Layering", "Smart Scenes"],
    image:"services/our-service-4.jpeg",
    // image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "I",
    id: "05",
    title: "INTERIOR CURATION",
    tagline: "Global Material Sourcing",
    description: "Global procurement of rare stone slabs, sustainable woods, and museum-grade tactile interior textiles.",
    tags: ["Global Textiles", "Natural Stone", "Sustainable Wood"],
    image:"services/our-service-5.jpeg",
    // image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "C",
    id: "06",
    title: "COMMERCIAL STUDIOS",
    tagline: "High-Impact Venues",
    description: "Atmospheric retail spaces, boutique offices, and hospitality venues engineered for immersive brand identity.",
    tags: ["Retail Venues", "Boutique Offices", "Brand Identity"],
    image:"services/our-service-6.jpeg",
    // image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    letter: "E",
    id: "07",
    title: "EXECUTION & HANDOVER",
    tagline: "Turnkey Management",
    description: "End-to-end design execution, structural site supervision, and white-glove turnkey delivery.",
    tags: ["Turnkey Delivery", "Site Management", "White Glove"],
    image:"services/our-service-8.jpeg",
    // image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function OurExpertise() {
  const [activePill, setActivePill] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers strictly when section enters user's view upon scroll
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => setContentVisible(true), 250); // Staggered bottom-to-top reveal
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePillClick = (index) => {
    setActivePill(activePill === index ? null : index);
  };

  return (
    <ScrollReveal>
    <section ref={sectionRef} className="pill-expertise-section">
      <div className="pill-expertise-container">
        
        {/* LIGHT THEME HEADER WITH SMOOTH BOTTOM-TO-TOP REVEAL */}
        <div className={`pill-header ${headerVisible ? 'is-in-view' : ''}`}>
          <div className="luxury-gold-tag">
            <span className="gold-dot" />
            <span>OUR EXPERTISE SHOWCASE</span>
          </div>

          <h2 className="luxury-heading">
            CRAFTING ARCHITECTURAL <span className="gold-italic">DISTINCTION</span>
          </h2>

          <p className="luxury-subheading">
            Tap any strip to expand. Tap again to close.
          </p>
        </div>

        {/* EXPANDABLE VERTICAL SERVICE PILLS */}
        <div className={`services-pill-accordion ${contentVisible ? 'is-in-view' : ''}`}>
          {servicesPills.map((item, index) => {
            const isActive = activePill === index;
            return (
              <div
                key={index}
                className={`pill-item ${isActive ? 'is-expanded' : ''} ${activePill !== null && !isActive ? 'is-dimmed' : ''}`}
                onClick={() => handlePillClick(index)}
              >
                {/* Image Background */}
                <div className="pill-bg-frame">
                  <img src={item.image} alt={item.title} className="pill-bg-image" />
                  <div className="pill-subtle-gradient" />
                </div>

                {/* Vertical Letter Overlay */}
                <div className="pill-letter-overlay">
                  <span className="pill-letter">{item.letter}</span>
                </div>

                {/* Collapsed Vertical Title */}
                <div className="pill-collapsed-info">
                  <span className="pill-index-num">{item.id}</span>
                  <span className="pill-vertical-title">{item.title}</span>
                </div>

                {/* Expanded Details Panel */}
                <div className="pill-expanded-content">
                  <div className="expanded-top-bar">
                    <span className="expanded-id">{item.id} / 07</span>
                    <span className="expanded-tagline">{item.tagline}</span>
                    <button className="pill-close-btn" aria-label="Close details">✕</button>
                  </div>

                  <div className="expanded-body">
                    <h3 className="expanded-title">{item.title}</h3>
                    <p className="expanded-desc">{item.description}</p>

                    <div className="expanded-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="tag-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}