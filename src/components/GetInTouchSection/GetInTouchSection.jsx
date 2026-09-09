'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './GetInTouchSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function GetInTouchSection() {
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);
  const pathname = usePathname();

  // Animation triggers when 35% of section enters viewport
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.35,
    margin: "0px 0px -40px 0px"
  });

  // Parallax Effect Logic
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const titleWords = ["GET", "IN", "TOUCH"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      x: 130, 
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
        damping: 20, 
        stiffness: 70 
      } 
    },
  };

  // Check if current route is homepage
  const targetHref = pathname === '/' ? '#contact' : '/#contact';

  return (
    <ScrollReveal>
    <section ref={sectionRef} className="get-in-touch-section">
      
      {/* HEADER WITH PADDING */}
      <div className="get-in-touch-header-container">
        <div className="touch-header-row">
          <motion.div 
            className="magnetic-touch-title"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {titleWords.map((word, wIdx) => (
              <span key={`word-${wIdx}`} className="touch-word-block">
                {word.split('').map((char, cIdx) => (
                  <motion.span 
                    key={`char-${cIdx}`} 
                    variants={letterVariants}
                    className="touch-magnet-char"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FULL-WIDTH EDGE-TO-EDGE PARALLAX BANNER */}
      <div ref={parallaxRef} className="parallax-banner-wrapper">
        <motion.div 
          className="parallax-image-box"
          style={{ y: imageY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
            alt="Interior Project Banner" 
          />
        </motion.div>

        {/* OVERLAY & CONTENT */}
        <div className="banner-overlay-content">
          <motion.h3 
            className="banner-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind?
          </motion.h3>

          <motion.span 
            className="banner-subheading"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            GET QUOTE
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href={targetHref} className="lets-talk-btn">
              <span>Let's Talk</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
    </ScrollReveal>
  );
}