'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ServicesOverview.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const services = [
  "Interior design",
  "Interior consultation",
  "Home staging",
  "3D visualisation",
  "Civil space planning and execution",
  "Residential interior",
  "Commercial interior",
  "Modular kitchen & custom furniture",
  "Hi-tech home automation"
];

const stats = [
  { id: 1, end: 1548, label: "Clients Around The World", prefix: "", suffix: "+" },
  { id: 2, end: 1380, label: "Projects Completed", prefix: "", suffix: "+" },
  { id: 3, end: 1544, label: "Square Feet Designed", prefix: "", suffix: "K+" }
];

const AnimatedCounter = ({ from = 0, to, duration = 3, suffix = "", prefix = "", delay = 0 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const timeoutId = setTimeout(() => {
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          
          setCount(Math.floor(easeOutCubic * (to - from) + from));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };

        animationFrame = requestAnimationFrame(step);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref} className="counter-span">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default function ServicesOverview() {
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const servicesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.3
      }
    }
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 65, filter: "blur(6px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <ScrollReveal>
    <section className="services-overview-section">
      <div className="bg-glow"></div>

      <div className="services-overview-container">
        
        {/* Header Badge */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">EXPERT SERVICES & IMPACT</span>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          variants={servicesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-item"
              variants={serviceItemVariants}
              onClick={scrollToHero}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="plus-box">
                <span className="plus-icon">+</span>
              </div>
              <span className="service-text">{service}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="stats-wrapper"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.id} 
                className={`stat-card stat-card-step-${idx + 1}`}
                variants={statCardVariants}
              >
                {/* Static Light Gray 01, 02, 03 Number */}
                <div className="floating-index-number">
                  0{stat.id}
                </div>

                {/* Main Counter without Black Outline */}
                <div className="stat-number">
                  <AnimatedCounter 
                    to={stat.end} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix} 
                    delay={idx * 0.35 + 0.2}
                  />
                </div>
                
                {/* Glowing Progress Line */}
                <motion.div 
                  className="stat-line-progress"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.35 + 0.3, ease: "easeInOut" }}
                />
                
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
    </ScrollReveal>
  );
}