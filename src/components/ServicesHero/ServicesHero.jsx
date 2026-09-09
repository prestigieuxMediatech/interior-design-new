"use client";

import React, { useState, useEffect } from "react";
import "./ServicesHero.css";


const slidesData = [
  {
    id: 1,
    image:"services/service-hero-1.jpeg",
    // image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    subheading: "LUXURY ARCHITECTURAL DESIGN",
    title: "EXQUISITE CRAFTSMANSHIP FOR MODERN LIVING",
  },
  {
    id: 2,
    image:"services/service-hero-2.png",
    // image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    subheading: "SPATIAL ELEGANCE",
    title: "CUSTOM INTERIORS TAILORED TO YOUR LIFESTYLE",
  },
  {
    id: 3,
    image:"services/service-hero-3.jpeg",
    // image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    subheading: "MINIMAL & FUNCTIONAL",
    title: "TRANSFORMING SPACES INTO ARTISTIC SANCTUARIES",
  },
];

export default function ServicesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState([0]);

  // Page mount / navigate hotey hi page load animation active karne ke liye
  useEffect(() => {
    const preloadSlide = (index) => {
      const image = new Image();
      image.src = slidesData[index].image;
      setLoadedSlides((slides) =>
        slides.includes(index) ? slides : [...slides, index]
      );
    };

    const preloadTimer = window.setTimeout(() => preloadSlide(1), 1200);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slidesData.length;
        preloadSlide(nextIndex);
        return nextIndex;
      });
    }, 2200);

    return () => {
      clearTimeout(preloadTimer);
      clearInterval(timer);
    };
  }, []);

  const handleDotClick = (index) => {
    if (!loadedSlides.includes(index)) {
      setLoadedSlides((slides) => [...slides, index]);
    }
    setCurrentIndex(index);
  };

  return (
 
    <section className="services-hero-container">
      {slidesData.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`services-hero-slide ${isActive ? "active" : ""}`}
          >
            <div
              className="services-hero-bg"
              style={loadedSlides.includes(index) ? { backgroundImage: `url(${slide.image})` } : undefined}
            ></div>

            <div className="services-hero-content">
              <span className="services-hero-subheading">{slide.subheading}</span>
              <h1 className="services-hero-title">{slide.title}</h1>
            </div>
          </div>
        );
      })}

      {/* Navigation Indicators */}
      <div className="services-hero-dots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  
  );
}
