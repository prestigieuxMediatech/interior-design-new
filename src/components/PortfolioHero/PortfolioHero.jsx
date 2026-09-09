'use client';

import './PortfolioHero.css';

export default function PortfolioHero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('portfolio-projects');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="portfolio-hero">
      <div className="hero-content">
        <span className="badge-anim">Crafting Dream Spaces</span>
        <h1 className="hero-title">Inspirational Interior Designs</h1>
        <p className="hero-subtitle">
          Explore our curated portfolio of modern homes, modular kitchens, luxury bedrooms, and smart architectural spaces.
        </p>
        
        {/* Smooth scroll trigger button */}
        <button onClick={handleScroll} className="hero-btn">
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}