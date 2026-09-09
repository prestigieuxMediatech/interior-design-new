'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CompanyJourney.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const JOURNEY_MILESTONES = [
  {
    id: 1,
    year: '2015',
    title: 'THE FOUNDATION',
    subtitle: 'Conceiving Bespoke Excellence',
    description: 'Amar Interior was established with a singular vision: to blend architectural precision with soulful design, setting new standards in luxury residential crafting.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    tag: 'ORIGIN'
  },
  {
    id: 2,
    year: '2019',
    title: 'THE FIRST MILESTONE',
    subtitle: '50+ Ultra-Luxury Spaces Handcrafted',
    description: 'Milestone completion of premier penthouses and villa estates. Delivering seamless fusion between natural materials, gold brass accents, and minimalist spatial flow.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    tag: 'EXPANSION'
  },
  {
    id: 3,
    year: '2023',
    title: 'COMMERCIAL ELEVATION',
    subtitle: 'Bespoke Corporate & Boutique Retail',
    description: 'Expanded into signature hospitality & luxury corporate headquarters. Recognized across architectural summits for innovative spatial choreography.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    tag: 'RECOGNITION'
  },
  {
    id: 4,
    year: '2026',
    title: 'SUSTAINABLE LUXURY',
    subtitle: 'Next-Gen Smart Aesthetics',
    description: 'Pioneering eco-conscious craftsmanship with intelligent home automation, biophilic living walls, and timeless architectural luxury.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    tag: 'FUTURE'
  }
];

export default function CompanyJourney() {
  const [activeStep, setActiveStep] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <ScrollReveal>
    <section className="journey-section">
      <div className="journey-container">
        
        {/* SECTION HEADER */}
        <div className="journey-header">
          <motion.span 
            className="journey-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR EVOLUTION
          </motion.span>

          <motion.h2 
            className="journey-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Decade of Crafting <span>Timeless Heritage</span>
          </motion.h2>

          <motion.div 
            className="journey-header-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* TIMELINE CARDS GRID */}
        <motion.div 
          className="journey-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {JOURNEY_MILESTONES.map((item, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeStep === item.id;

            return (
              <motion.div 
                key={item.id} 
                className={`journey-card-wrapper ${isEven ? 'top-card' : 'bottom-card'} ${isActive ? 'active-step' : ''}`}
                variants={cardVariants}
                onClick={() => setActiveStep(item.id)}
              >
                {/* CARD CONTENT */}
                <div className="journey-card">
                  <div className="card-image-wrapper">
                    <img src={item.image} alt={item.title} className="card-img" />
                    <span className="card-tag">{item.tag}</span>
                  </div>

                  <div className="card-body">
                    <span className="card-year">{item.year}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="card-subtitle">{item.subtitle}</h4>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>

                {/* TIMELINE CONNECTOR DOT */}
                <div className="timeline-dot-wrapper">
                  <div className="timeline-line-connector" />
                  <button className="timeline-node" aria-label={`View ${item.year} milestone`}>
                    <span className="node-inner" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CENTRAL HORIZONTAL TIMELINE BAR */}
        <div className="timeline-track-bar">
          <motion.div 
            className="timeline-track-fill"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}