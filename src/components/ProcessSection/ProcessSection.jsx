'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ProcessSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with an in-depth discussion to understand your lifestyle, functional needs, and design aspirations. This lays the groundwork for a tailored design approach.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'On-site Measurements',
    description: 'Precision mapping and spatial assessment are conducted on site. We evaluate structural dimensions to curate seamless furniture layouts and material selections.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Execution & Review',
    description: 'During active site execution, our team manages continuous quality reviews, providing regular progress reports and image updates to ensure accurate implementation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Post Handover Care',
    description: 'Our engagement extends beyond completion. We offer vendor coordination and routine maintenance guidance to ensure your space retains its immaculate standards.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  // amount: 0.3 ensures animation trigger ONLY when 30% of the element enters viewport
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  });

  // Stagger sequence for steps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Step 1 -> Step 2 -> Step 3 -> Step 4
        delayChildren: 0.2,
      },
    },
  };

  const stepCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <ScrollReveal>
    <section ref={sectionRef} className="process-section">
      <div className="process-container">
        
        {/* HEADER */}
        <div className="process-header">
          <motion.span 
            className="process-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            HOW WE WORK
          </motion.span>
          <motion.h2 
            className="process-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Seamless Design Process
          </motion.h2>
        </div>

        {/* STEP CARDS GRID WITH CONNECTING LINE */}
        <div className="process-grid-wrapper">
          
          {/* ANIMATED CONNECTING LINE */}
          <motion.div 
            className="connecting-line"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          <motion.div 
            className="process-steps-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div 
                key={step.number} 
                className="process-step-card"
                variants={stepCardVariants}
              >
                <div className="icon-badge-wrapper">
                  <div className="step-icon">
                    {step.icon}
                  </div>
                  <span className="step-number-badge">{step.number}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}