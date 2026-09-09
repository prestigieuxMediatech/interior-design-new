'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './AboutOverview.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

// const SLIDER_IMAGES = [
//   'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
// ];



const SLIDER_IMAGES = [
  '/about/slider-1.jpeg',
  '/about/slider-2.png',
  '/about/slider-3.jpeg',
  '/about/slider-4.jpeg',
];

export default function AboutOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  // Auto Slider Timer - Starts only when user scrolls to section
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      handleNext();
    }, 1500);

    return () => clearInterval(timer);
  }, [currentIndex, isInView]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  // Indexes for smooth stack layers behind
  const prevIndex = (currentIndex - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
  const nextIndex1 = (currentIndex + 1) % SLIDER_IMAGES.length;
  const nextIndex2 = (currentIndex + 2) % SLIDER_IMAGES.length;

  const titleText = "ABOUT US";
  const letters = titleText.split('');

  // Magnetic Right-to-Left Pull Animation
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      x: 120, 
      scale: 1.3,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        type: "spring", 
        damping: 18, 
        stiffness: 120 
      } 
    },
  };

  // Bottom-to-Top Fade Animation for Paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <ScrollReveal>
    <section className="about-overview-section" ref={sectionRef}>
      <div className="about-overview-container">
        
        {/* TOP ROW: HEADING & AUTO-SLIDER */}
        <div className="overview-top-grid">
          
          {/* LEFT SIDE: HEADING & SUBTITLE */}
          <div className="overview-left-content">
            <motion.div 
              className="magnetic-title-wrapper"
              variants={letterContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="magnetic-title">
                {letters.map((char, idx) => (
                  <motion.span 
                    key={idx} 
                    variants={letterVariants}
                    className={char === ' ' ? 'space-char' : 'letter-char'}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            <div className="title-divider-line" />

            <motion.h3 
              className="overview-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Transforming Spaces Into Timeless Experience
            </motion.h3>
          </div>

          {/* RIGHT SIDE: STACKED CARDS WITH SMOOTH CROSS-FADE */}
          <motion.div 
            className="overview-right-slider"
            initial={{ opacity: 0, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stacked-card-wrapper">
              
              {/* Back Stack Card 2 (Furthest Layer) */}
              <div className="bg-stack-card stack-layer-2">
                <img 
                  src={SLIDER_IMAGES[nextIndex2]} 
                  alt="Interior Layer 2" 
                  className="stack-img" 
                />
              </div>

              {/* Back Stack Card 1 (Middle Layer) */}
              <div className="bg-stack-card stack-layer-1">
                <img 
                  src={SLIDER_IMAGES[nextIndex1]} 
                  alt="Interior Layer 1" 
                  className="stack-img" 
                />
              </div>

              {/* Front Active Image Card (Zero White Flash) */}
              <div className="main-image-card">
                {/* Underlay Image: Always displays previous image so transition is 100% seamless */}
                <img 
                  src={SLIDER_IMAGES[prevIndex]} 
                  alt="Previous Interior Layer" 
                  className="slider-img static-bg-img" 
                />

                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentIndex}
                    src={SLIDER_IMAGES[currentIndex]}
                    alt="Featured Interior Space"
                    className="slider-img absolute-top-img"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>

            </div>

            {/* SLIDER NAVIGATION BUTTONS */}
            <div className="slider-controls">
              <button className="control-btn" onClick={handlePrev} aria-label="Previous Slide">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="control-btn" onClick={handleNext} aria-label="Next Slide">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM ROW: PARAGRAPHS */}
        <div className="overview-bottom-content">
          <motion.p 
            className="overview-p"
            variants={paragraphVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            We curate luxury living and working environments tailored to your personal aesthetic. Every room tells a story, and our passion lies in crafting bespoke interiors where architectural precision meets refined elegance. From modern minimal concepts to classic luxury, we breathe life into everyday spaces.
          </motion.p>

          <motion.p 
            className="overview-p"
            variants={paragraphVariants}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Founded with a vision to redefine modern living, our design studio blends artistic vision with seamless function. We focus on premium materiality, tailored layouts, and sustainable crafting techniques to ensure your property remains sophisticated and functional for decades to come.
          </motion.p>

          <motion.div 
            className="mission-block"
            variants={paragraphVariants}
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="mission-title">Our Vision & Commitment</h4>
            <p className="overview-p mission-text">
              Our goal is to build spaces that elevate your everyday lifestyle. Through transparent collaboration and uncompromised detail, we ensure every project reflects luxury, warmth, and enduring quality.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}