"use client";

import React, { useState } from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Client's WhatsApp number & Pre-filled Message
  const phoneNumber = "917400373699"; 
  const message = encodeURIComponent(
    "Hello Decor & Design Studio! I am interested in discussing a luxury interior project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="luxury-whatsapp-wrapper">
      {/* EXPANDABLE TOOLTIP CARD */}
      <div className={`whatsapp-tooltip ${isHovered ? "is-visible" : ""}`}>
        <div className="tooltip-header">
          <span className="online-indicator"></span>
          <span className="tooltip-title">Interior Design Concierge</span>
        </div>
        <p className="tooltip-text">Have a project in mind? Chat with us.</p>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="luxury-whatsapp-btn"
        aria-label="Chat on WhatsApp with Decor & Design"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* GOLD LUXURY RING & PULSE EFFECT */}
        <span className="gold-ring-pulse"></span>
        <span className="gold-accent-border"></span>

        {/* OFFICIAL WHATSAPP SVG ICON */}
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-svg"
          fill="currentColor"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.138-2.135c2.37 1.324 5.063 2.135 7.862 2.135 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.432 0-4.805-0.655-6.883-1.895l-0.493-0.295-5.115 1.34 1.365-5.077-0.323-0.513c-1.353-2.15-2.068-4.633-2.068-7.227 0-7.36 5.973-13.333 13.333-13.333s13.333 5.973 13.333 13.333-5.973 13.333-13.333 13.333zM22.583 19.352c-0.362-0.182-2.138-1.055-2.468-1.175s-0.572-0.182-0.813 0.182c-0.242 0.362-0.935 1.175-1.147 1.417s-0.423 0.272-0.785 0.091c-0.362-0.182-1.528-0.563-2.91-1.797-1.077-0.96-1.803-2.147-2.015-2.51s-0.022-0.558 0.158-0.738c0.163-0.162 0.362-0.423 0.543-0.635s0.242-0.362 0.362-0.605c0.122-0.242 0.061-0.453-0.030-0.635s-0.813-1.96-1.113-2.683c-0.292-0.703-0.59-0.608-0.813-0.62-0.212-0.010-0.453-0.012-0.695-0.012s-0.635 0.091-0.967 0.453c-0.332 0.362-1.268 1.24-1.268 3.023s1.298 3.503 1.48 3.745c0.182 0.242 2.553 3.902 6.185 5.47 0.863 0.373 1.537 0.597 2.063 0.763 0.868 0.277 1.658 0.238 2.282 0.145 0.697-0.103 2.138-0.873 2.438-1.717 0.302-0.843 0.302-1.565 0.212-1.717-0.091-0.152-0.332-0.242-0.695-0.423z"></path>
        </svg>

        {/* NOTIFICATION BADGE */}
        <span className="badge-dot"></span>
      </a>
    </div>
  );
}