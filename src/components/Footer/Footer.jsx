import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="amar-footer" aria-label="Site Footer">
      <div className="amar-footer__container">
        
        {/* MAIN 4-COLUMN GRID LAYOUT */}
        <div className="amar-footer__grid">
          
          {/* Column 1: Brand, Description & CTA Button */}
          <div className="amar-footer__col amar-footer__col--brand">
            <Link href="/" className="amar-footer__logo" aria-label="AMAR INTERIOR Home">
              AMAR <span className="amar-footer__logo-accent">INTERIORS</span>
            </Link>
            <p className="amar-footer__statement">
              Thoughtfully designed spaces,<br />
              shaped around the way you live.
            </p>
            <div className="amar-footer__cta-wrap">
              <Link href="/contact" className="amar-footer__cta-btn">
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <nav className="amar-footer__col" aria-label="Footer Main Navigation">
            <h3 className="amar-footer__heading">EXPLORE</h3>
            <ul className="amar-footer__list">
              <li><Link href="/" className="amar-footer__link">Home</Link></li>
              <li><Link href="/about" className="amar-footer__link">About Us</Link></li>
              <li><Link href="/services" className="amar-footer__link">Services</Link></li>
              <li><Link href="/portfolio" className="amar-footer__link">Portfolio</Link></li>
              <li><Link href="/contact" className="amar-footer__link">Contact</Link></li>
            </ul>
          </nav>

          {/* Column 3: Contact Information */}
          <div className="amar-footer__col">
            <h3 className="amar-footer__heading">CONTACT</h3>
            <address className="amar-footer__address">
              <p className="amar-footer__address-line">Shop no 8 plot no 180 Parvati enclave taloja phase 1, Mumbai- Maharashtra</p>
              <p className="amar-footer__address-line">
                <a href="tel:+919876543210" className="amar-footer__link">
                  +91 7400373699
                </a>
              </p>
              <p className="amar-footer__address-line">
                <a href="mailto:hello@amarinterior.com" className="amar-footer__link amar-footer__link--email">
                  amarinterior.in@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Social Links with Icons */}
          <nav className="amar-footer__col" aria-label="Footer Social Links">
            <h3 className="amar-footer__heading">FOLLOW US</h3>
            <ul className="amar-footer__social-list">
              <li>
                <a 
                  href="https://www.instagram.com/amar_interiors_khargar?stkn=MTFmcGQ0N2FwbXZ2Yw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amar-footer__social-link"
                  aria-label="Instagram"
                >
                  <svg className="amar-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/19FkKMcjLz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amar-footer__social-link"
                  aria-label="Facebook"
                >
                  <svg className="amar-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917400373699" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amar-footer__social-link"
                  aria-label="WhatsApp"
                >
                  <svg className="amar-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                {/* <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amar-footer__social-link"
                  aria-label="LinkedIn"
                >
                  <svg className="amar-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a> */}
              </li>
            </ul>
          </nav>

        </div>

        {/* LARGE EDITORIAL BRAND STATEMENT */}
        <div className="amar-footer__editorial">
          <span className="amar-footer__editorial-text">
            DESIGNED <span className="amar-footer__editorial-accent">FOR LIVING.</span>
          </span>
        </div>

        <div className="amar-footer__divider" />

        {/* BOTTOM LEGAL BAR */}
        <div className="amar-footer__bottom">
          <p className="amar-footer__copyright">
            &copy; 2026 AMAR INTERIORS. All Rights Reserved.
          </p>
          <div className="amar-footer__legal-links">
            <Link href="/privacy-policy" className="amar-footer__legal-link">Privacy Policy</Link>
            <span className="amar-footer__legal-dot" aria-hidden="true">•</span>
            <Link href="/terms" className="amar-footer__legal-link">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}