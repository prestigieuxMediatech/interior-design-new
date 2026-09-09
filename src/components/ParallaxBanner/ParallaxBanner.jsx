'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxBanner.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function ParallaxBanner() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  const tickerText = [
    "CRAFTING LUXURY SPACES",
    "THINKING OUTSIDE THE BOX",
    "INNOVATIVE INTERIOR ARCHITECTURE",
    "MODERN LIVING CONCEPTS",
    "ELEGANCE & COMFORT REDEFINED"
  ];

  return (
    <ScrollReveal>
    <section ref={containerRef} className="parallax-banner-section">
      {/* Background Image */}
      <div className="parallax-bg-wrapper">
        <motion.div 
          className="parallax-bg-image"
          style={{ 
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')` 
          }}
        />
      </div>

      {/* Floating High-Contrast Badge */}
      {/* <div className="banner-center-badge">
        <span className="badge-dot"></span>
        <span>EXCLUSIVE DESIGN PHILOSOPHY</span>
      </div> */}

      {/* Ticker Container with Frosted Glass Contrast Strip */}
      <div className="ticker-wrapper">
        <div className="ticker-backdrop-blur"></div>
        <motion.div 
          className="ticker-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60,
            ease: 'linear'
          }}
        >
          {tickerText.map((text, idx) => (
            <div key={`set1-${idx}`} className="ticker-item">
              <span className="high-vis-text">{text}</span>
              <span className="ticker-divider">•</span>
            </div>
          ))}

          {tickerText.map((text, idx) => (
            <div key={`set2-${idx}`} className="ticker-item">
              <span className="high-vis-text">{text}</span>
              <span className="ticker-divider">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </ScrollReveal>
  );
}