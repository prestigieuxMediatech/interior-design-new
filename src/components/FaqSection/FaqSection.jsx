'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './FaqSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const FAQ_DATA = [
  {
    id: '01',
    question: 'How long does a full home interior project typically take?',
    answer: 'The timeline varies based on space square footage and customization. On average, design finalization takes 3–4 weeks, followed by off-site manufacturing and on-site execution taking 8–12 weeks for complete handover.'
  },
  {
    id: '02',
    question: 'How do I start designing my luxury home with your team?',
    answer: 'Starting is seamless. You can schedule an initial vision meeting with our lead architects. We evaluate your spatial needs, budget parameters, and aesthetic aspirations to create a preliminary design concept.'
  },
  {
    id: '03',
    question: 'Do you offer end-to-end turnkey interior solutions?',
    answer: 'Yes, we provide complete turnkey services—managing everything from architectural layout, bespoke furniture manufacturing, lighting design, material procurement, to final site civil execution.'
  },
  {
    id: '04',
    question: 'Can I customize loose furniture and bespoke lighting fixtures?',
    answer: 'Absolutely. We specialize in custom-crafted furniture, bespoke millwork, and custom architectural lighting designed explicitly for your residence in collaboration with master artisans.'
  },
  {
    id: '05',
    question: 'How are project budgets managed and transparently tracked?',
    answer: 'We provide itemized Cost Estimates (BOQs) prior to execution. Every material specification, brand choice, and labor metric is transparently documented to avoid unexpected cost overruns.'
  },
  {
    id: '06',
    question: 'What post-completion warranties and support do you provide?',
    answer: 'We offer a comprehensive 10-year structural warranty on custom modular fittings along with dedicated post-handover support for routine maintenance and vendor coordination.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const sectionRef = useRef(null);

  // Triggers animation only when 30% of section enters viewport
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.3,
    margin: "0px 0px -50px 0px"
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Magnetic Title Animation
  const titleText = "FAQ'S";
  
  const containerVariants = {
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
        stiffness: 70 
      } 
    },
  };

  // FAQ Accordions Stagger Animation
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <ScrollReveal>

    <section ref={sectionRef} className="faq-section">
      <div className="faq-container">
        
        {/* MAGNETIC FAQ'S TITLE */}
        <div className="faq-header">
          <motion.div 
            className="magnetic-faq-title"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {titleText.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="faq-magnet-char"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <div className="faq-header-line" />
        </div>

        {/* FAQ ACCORDION LIST */}
        <motion.div 
          className="faq-list"
          variants={listContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={item.id}
                variants={faqItemVariants}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    <span className="faq-item-num">{item.id}.</span> {item.question}
                  </span>
                  
                  {/* EXPAND / COLLAPSE ICON */}
                  <span className="faq-icon-wrapper">
                    <motion.span 
                      className="icon-line horizontal"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="icon-line vertical"
                      animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq-answer-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>


    </ScrollReveal>
   
  );
}