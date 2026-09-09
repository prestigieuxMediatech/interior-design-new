'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero">
      {/* Background Image with Zoom-in Animation */}
      <motion.div 
        className="contact-hero-bg"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Sofa Interior Design"
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="contact-hero-overlay"></div>
      </motion.div>

      {/* Hero Content with Smooth Staggered Fade-Up */}
      <div className="contact-hero-content">
        <motion.span 
          className="contact-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.span>

        <motion.h1 
          className="contact-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Let's Craft Your Dream Space
        </motion.h1>

        <motion.p 
          className="contact-hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Have a project in mind or want to redesign your interior? Reach out to our design experts today.
        </motion.p>
      </div>
    </section>
  );
}