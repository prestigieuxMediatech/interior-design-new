'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);

  // Bottom margin -140px se jab tak user scroll karke wahan nahi aata, tab tak load nahi hoga
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -140px 0px"
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}