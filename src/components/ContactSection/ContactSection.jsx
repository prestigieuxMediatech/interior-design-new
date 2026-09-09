'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import './ContactSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef(null);
  
  // Section jab scroll hokar screen par aayega tabhi trigger hoga
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );

    alert('Thank you! Your inquiry has been sent successfully.');
    formRef.current.reset();

  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Something went wrong. Please try again.');
  }
};




  const titleText = "LET'S CONNECT";
  const letters = titleText.split('');

  // 1. MAGNETIC TITLE ANIMATION (Letters come from right)
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      x: 140, // Magnetic distance from right
      filter: 'blur(6px)',
      scale: 0.85
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      scale: 1,
      transition: { 
        type: 'spring', 
        damping: 18, 
        stiffness: 80 
      } 
    },
  };

  // 2. RIGHT FORM SLIDES IN FROM RIGHT (x: 80 -> x: 0)
  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 90, // Form coming strictly from Right Side
      filter: 'blur(4px)' 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.1, 
        ease: [0.16, 1, 0.3, 1], // Smooth luxury cubic-bezier
        delay: 0.95 // Comes after title finishes forming
      } 
    }
  };

  return (
    <ScrollReveal>
    <section ref={ref} id='contact' className="contact-section">
      <div className="contact-container">
        
        {/* LEFT SIDE: Heading & Quick Info */}
        <div className="contact-left-content">
          
          {/* MAGNETIC TITLE */}
          <motion.h2 
            className="magnetic-title"
            variants={titleContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {letters.map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className={char === ' ' ? 'space-char' : 'letter-char'}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* DESCRIPTION TEXT */}
          <motion.p 
            className="contact-description"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            Planning an exclusive luxury residence or commercial space? Partner with Mumbai's premier interior architects to craft bespoke living spaces.
          </motion.p>

          {/* QUICK INFO */}
          <motion.div 
            className="contact-quick-info"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          >
            <div className="info-item">
              <span className="info-label">STUDIO LOCATION</span>
              <span className="info-value">Worli, Mumbai, Maharashtra</span>
            </div>
            <div className="info-item">
              <span className="info-label">INQUIRIES</span>
              <span className="info-value">amarinterior.in@gmail.com</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE FORM (Slides from Right) */}
        <motion.div 
          className="contact-right-form"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="open-luxury-form">
            <div className="form-header">
              <h3 className="form-heading">Send Us A Message</h3>
              <p className="form-subheading">Fill out the details below and our lead designer will connect with you.</p>
            </div>
            
            {/* FULL NAME */}
            <div className="form-group">
              <label htmlFor="fullName" className="field-label">Full Name <span className="req">*</span></label>
              <div className="input-line-wrapper">
                <input 
                  type="text" 
                  id="fullName" 
                  name="full_name"
                  required 
                  placeholder="e.g. Vikramaditya Sharma" 
                  className="form-input-line" 
                />
                <span className="focus-border"></span>
              </div>
            </div>

            {/* EMAIL & PHONE ROW */}
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="email" className="field-label">Email Address <span className="req">*</span></label>
                <div className="input-line-wrapper">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    placeholder="name@gmail.com" 
                    className="form-input-line" 
                  />
                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="field-label">Phone No. <span className="req">*</span></label>
                <div className="input-line-wrapper">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    placeholder="+91 98765 43210" 
                    className="form-input-line" 
                  />
                  <span className="focus-border"></span>
                </div>
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div className="form-group">
              <label htmlFor="projectType" className="field-label">Project Type</label>
              <div className="input-line-wrapper">
                <input 
                  type="text" 
                  id="projectType" 
                  name="project_type"
                  placeholder="e.g. Luxury Villa, Penthouse, Office" 
                  className="form-input-line" 
                />
                <span className="focus-border"></span>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message" className="field-label">Project Details / Message</label>
              <div className="input-line-wrapper">
                <textarea 
                  id="message" 
                  name="message"
                  maxLength={200} 
                  placeholder="Share your requirements, carpet area, or scope of work..." 
                  className="form-input-line form-textarea-line"
                ></textarea>
                <span className="focus-border"></span>
              </div>
            </div>

            {/* FOOTER & BUTTON */}
            <div className="form-footer">
              <span className="char-count">Max 200 characters</span>
              <button type="submit" className="submit-btn">
                <span>Submit Inquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
    </ScrollReveal>
  );
}