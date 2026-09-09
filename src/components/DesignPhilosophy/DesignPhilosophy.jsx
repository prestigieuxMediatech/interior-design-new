"use client";

import React, { useState, useRef } from 'react';
import './DesignPhilosophy.css';

export default function DesignPhilosophy() {
  // Slider 1 State
  const [sliderPos1, setSliderPos1] = useState(50);
  const [isDragging1, setIsDragging1] = useState(false);
  const sliderRef1 = useRef(null);

  // Slider 3 State
  const [sliderPos3, setSliderPos3] = useState(50);
  const [isDragging3, setIsDragging3] = useState(false);
  const sliderRef3 = useRef(null);

  // Helper for Slider 1
  const handleMove1 = (clientX) => {
    if (!sliderRef1.current) return;
    const rect = sliderRef1.current.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos1(percentage);
  };

  // Helper for Slider 3
  const handleMove3 = (clientX) => {
    if (!sliderRef3.current) return;
    const rect = sliderRef3.current.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos3(percentage);
  };

  return (
    <section className="interior-ethos-section">
      <div className="blueprint-grid-overlay" />

      <div className="ethos-container">
        
        {/* ROW 1: 1st Image (Left se aayegi + Curtain Slider) */}
        <div className="spatial-block row-1">
          <div className="spatial-visual-wrapper slide-from-left">
            <div 
              className="before-after-container" 
              ref={sliderRef1}
              onMouseDown={() => setIsDragging1(true)}
              onMouseUp={() => setIsDragging1(false)}
              onMouseLeave={() => setIsDragging1(false)}
              onMouseMove={(e) => isDragging1 && handleMove1(e.clientX)}
              onTouchStart={() => setIsDragging1(true)}
              onTouchEnd={() => setIsDragging1(false)}
              onTouchMove={(e) => isDragging1 && e.touches[0] && handleMove1(e.touches[0].clientX)}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Execution 1" 
                className="ba-img base-img"
                loading="lazy"
                decoding="async"
              />
              <div 
                className="overlay-img-wrapper"
                style={{ clipPath: `polygon(0 0, ${sliderPos1}% 0, ${sliderPos1}% 100%, 0 100%)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                  alt="3D Render 1" 
                  className="ba-img top-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="slider-divider-line" style={{ left: `${sliderPos1}%` }}>
                <div className="slider-handle-button">&lt;&gt;</div>
              </div>
              <span className="ba-label">3D CONCEPT RENDER</span>
            </div>
            <span className="interactive-hint">Drag handle to reveal Execution vs Render</span>
          </div>

          <div className="spatial-info-card">
            <span className="spatial-index">[ 01 / CULINARY ARCHITECTURE ]</span>
            <h3 className="spatial-title">Precision Spatial Engineering</h3>
            <p className="spatial-desc">
              We don&apos;t just decorate rooms—we re-engineer light corridors, optimize traffic ergonomics, and hand-pick acoustic materials to sculpt living environments that breathe effortlessly.
            </p>
            <div className="material-palette-box">
              <span className="palette-title">CRAFTED WITH:</span>
              <div className="material-chips-grid">
                <span className="mat-chip"><i className="mat-dot" /> Calacatta Viola Marble</span>
                <span className="mat-chip"><i className="mat-dot" /> Brushed Gold Brass</span>
                <span className="mat-chip"><i className="mat-dot" /> Smoked Walnut Timber</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 2nd Image (Right se aayegi + Normal Image) */}
        <div className="spatial-block row-2">
          <div className="spatial-info-card">
            <span className="spatial-index">[ 02 / RESIDENTIAL SANCTUARIES ]</span>
            <h3 className="spatial-title">Biophilic Master Suites & Lounges</h3>
            <p className="spatial-desc">
              Your master suite is your personal retreat. Our bespoke bedroom suites feature concealed acoustic wall padding, ambient circadian lighting systems, and custom Italian-upholstered joinery.
            </p>
          </div>

          <div className="spatial-visual-wrapper slide-from-right">
            <div className="architectural-img-box">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
                alt="Master Interior Suite" 
                className="arch-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ROW 3: 3rd Image (Left se aayegi + Curtain Slider) */}
        <div className="spatial-block row-3">
          <div className="spatial-visual-wrapper slide-from-left">
            <div 
              className="before-after-container" 
              ref={sliderRef3}
              onMouseDown={() => setIsDragging3(true)}
              onMouseUp={() => setIsDragging3(false)}
              onMouseLeave={() => setIsDragging3(false)}
              onMouseMove={(e) => isDragging3 && handleMove3(e.clientX)}
              onTouchStart={() => setIsDragging3(true)}
              onTouchEnd={() => setIsDragging3(false)}
              onTouchMove={(e) => isDragging3 && e.touches[0] && handleMove3(e.touches[0].clientX)}
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                alt="Execution 3" 
                className="ba-img base-img"
                loading="lazy"
                decoding="async"
              />
              <div 
                className="overlay-img-wrapper"
                style={{ clipPath: `polygon(0 0, ${sliderPos3}% 0, ${sliderPos3}% 100%, 0 100%)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                  alt="3D Render 3" 
                  className="ba-img top-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="slider-divider-line" style={{ left: `${sliderPos3}%` }}>
                <div className="slider-handle-button">&lt;&gt;</div>
              </div>
              <span className="ba-label">3D CONCEPT RENDER</span>
            </div>
            <span className="interactive-hint">Drag handle to reveal Execution vs Render</span>
          </div>

          <div className="spatial-info-card">
            <span className="spatial-index">[ 03 / LIVING CONCEPTS ]</span>
            <h3 className="spatial-title">Acoustic Living Spaces</h3>
            <p className="spatial-desc">
              Combining acoustic soundproofing with warm ambient light zones to create unified living rooms tailored for high-end modern residences.
            </p>
          </div>
        </div>

        {/* ROW 4: 4th Image (Right se aayegi + Normal Image) */}
        <div className="spatial-block row-4">
          <div className="spatial-info-card">
            <span className="spatial-index">[ 04 / BESPOKE DETAILS ]</span>
            <h3 className="spatial-title">Custom Furniture & Accent Walls</h3>
            <p className="spatial-desc">
              Every detail is meticulously crafted—from custom gold inlay woodwork to integrated smart lighting niches.
            </p>
          </div>

          <div className="spatial-visual-wrapper slide-from-right">
            <div className="architectural-img-box">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop" 
                alt="Detail Furniture Interior" 
                className="arch-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
