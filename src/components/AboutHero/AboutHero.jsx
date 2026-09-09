'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './AboutHero.css';


export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
   
    <section className="about-hero-section">
      {/* NEW LUXURY INTERIOR BANNER IMAGE */}
      <motion.div
        className="about-hero-bg-wrapper"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Architecture Interior"
          className="about-hero-img"
        />
        <div className="about-hero-overlay" />
      </motion.div>

      {/* CONTENT CONTAINER */}
      <div className="about-hero-content-container">
        <motion.div
          className="about-hero-text-block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="about-hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Crafting Timeless Spaces</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="about-hero-title">
            DESIGNING HOMES THAT <br />
            <span className="title-highlight">TELL YOUR STORY</span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p variants={itemVariants} className="about-hero-description">
          </motion.p>
        </motion.div>
      </div>
    </section>
 
  );
}