'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './AboutSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

// const SLIDER_IMAGES = [
//   'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
// ];


const SLIDER_IMAGES = [
  '/about/home-about-1.jpeg',
  '/about/home-about-2.jpeg',
  '/about/home-about-3.jpeg',
];




export default function AboutSection() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const rightInfoRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10% 0px -10% 0px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-15% 0px -10% 0px" });
  const isRightInfoInView = useInView(rightInfoRef, { once: true, margin: "-15% 0px -10% 0px" });

  const [activeTab, setActiveTab] = useState('philosophy');
  const [images, setImages] = useState(SLIDER_IMAGES);

  // Auto loop slider (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  const handleNextSlide = () => {
    setImages((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const handlePrevSlide = () => {
    setImages((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  // 4 Words Title: Line 1 (3 Words), Line 2 (1 Word)
  const line1Words = ["ABOUT", "OUR", "DESIGN"];
  const line2Words = ["JOURNEY"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Slower staggered delay between letters
        delayChildren: 0.1,
      },
    },
  };

  // Magnet Letter Animation (Right Side Entry + Smooth Spring Magnet Snap)
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      x: 140, 
      filter: 'blur(8px)',
      scale: 1.15
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      scale: 1,
      transition: { 
        type: 'spring', 
        damping: 22, 
        stiffness: 70 // Lower stiffness for smooth & slow snap
      } 
    },
  };

  return (
    <ScrollReveal>
    <section className="about-section">
      <div className="about-container">
        
        {/* 1. HEADER AREA */}
        <div ref={headerRef} className="about-header-row">
          <motion.div 
            className="magnetic-about-title"
            variants={containerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            {/* LINE 1: 3 WORDS */}
            <div className="title-line">
              {line1Words.map((word, wIdx) => (
                <span key={`l1-w-${wIdx}`} className="word-block">
                  {word.split('').map((char, cIdx) => (
                    <motion.span 
                      key={`l1-c-${cIdx}`} 
                      variants={letterVariants}
                      className="magnet-char"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>

            {/* LINE 2: 1 WORD (ETHOS - Aligned right below OUR) */}
            <div className="title-line">
              {line2Words.map((word, wIdx) => (
                <span key={`l2-w-${wIdx}`} className="word-block">
                  {word.split('').map((char, cIdx) => (
                    <motion.span 
                      key={`l2-c-${cIdx}`} 
                      variants={letterVariants}
                      className="magnet-char"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="subtitle-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="subtitle-text">Your Vision, Our Design Expertise</p>
       
<Link href="/about" className="about-us-link">
  <span>About Us</span>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17"/>
  </svg>
</Link>
        
          </motion.div>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="about-content-grid">
          
          {/* SLOW CARDS ENTRY FROM LEFT */}
          <motion.div 
            ref={cardsRef}
            className="stacked-slider-wrapper"
            initial={{ opacity: 0, x: -120 }}
            animate={isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }} // Slow, elegant ease
          >
            <div className="card-stack">
              <AnimatePresence initial={false}>
                {images.map((imgUrl, index) => {
                  const rotateDeg = index === 0 ? 0 : index === 1 ? -7 : -14;
                  const xShift = index === 0 ? 0 : index === 1 ? -28 : -54;
                  const yShift = index === 0 ? 0 : index === 1 ? -10 : -20;

                  return (
                    <motion.div
                      key={imgUrl}
                      className="stacked-card"
                      initial={{ scale: 0.85, opacity: 0, x: 60 }}
                      animate={{ 
                        scale: index === 0 ? 1 : 0.95,
                        rotate: rotateDeg,
                        x: xShift,
                        y: yShift,
                        zIndex: 3 - index,
                        opacity: 1
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: 80, rotate: 12 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img src={imgUrl} alt="Architectural Project" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* CONTROLS */}
            <div className="slider-controls">
              <button onClick={handlePrevSlide} aria-label="Previous Slide" className="ctrl-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button onClick={handleNextSlide} aria-label="Next Slide" className="ctrl-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* SLOW RIGHT SECTION ENTRY FROM RIGHT */}
          <motion.div 
            ref={rightInfoRef}
            className="about-right-info"
            initial={{ opacity: 0, x: 120 }}
            animate={isRightInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }} // Slow, elegant ease
          >
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                Philosophy
              </button>
              <button 
                className={`tab-btn ${activeTab === 'aim' ? 'active' : ''}`}
                onClick={() => setActiveTab('aim')}
              >
                Aim
              </button>
            </div>

            <div className="tab-description-container">
              {activeTab === 'philosophy' ? (
                <p className="tab-text">
                  Our design philosophy centers on a client-first approach. Every project begins and ends with your vision, ensuring spaces are crafted to reflect comfort, luxury, and individual style.
                </p>
              ) : (
                <p className="tab-text">
                  Our goal is to elevate living environments through refined spatial planning, timeless materials, and precise architectural execution tailored for modern lifestyles.
                </p>
              )}
            </div>

            <div className="architectural-metrics">
              <div className="metric-item">
                <div className="metric-header">
                  <span className="metric-title">Space Planning and Layout</span>
                  <span className="metric-val">95%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: "0%" }}
                    animate={isRightInfoInView ? { width: "95%" } : { width: "0%" }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <span className="metric-title">Project Challenges and Solutions</span>
                  <span className="metric-val">85%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: "0%" }}
                    animate={isRightInfoInView ? { width: "85%" } : { width: "0%" }}
                    transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <span className="metric-title">Sustainability & Eco-Friendly Features</span>
                  <span className="metric-val">75%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: "0%" }}
                    animate={isRightInfoInView ? { width: "75%" } : { width: "0%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}