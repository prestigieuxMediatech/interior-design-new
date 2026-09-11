'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './WhatsAppChat.css';

// 1. Enter your real 10-digit phone number with country code (e.g. 91XXXXXXXXXX)
const WHATSAPP_NUMBER = '917400373699'; 

// Extended Knowledge Base (18+ Comprehensive Interior Design Topics)
const staticKnowledge = [
  {
    keywords: ['material', 'materials', 'plywood', 'marble', 'wood', 'finish'],
    answer: 'We use premium BWP (Boiling Water Proof) HDMR/Plywood, Italian Marbles, Acrylics, PU finishes, and Veneers for long-lasting luxury interiors.'
  },
  {
    keywords: ['color', 'colors', 'colour', 'paint', 'theme', 'palette'],
    answer: 'We craft customized color schemes tailored to your space! Popular luxury choices are Warm Neutrals with Gold accents, Soft Beiges, Muted Greys, and Royal Charcoal.'
  },
  {
    keywords: ['3d', 'render', 'visualization', 'design plan'],
    answer: 'Yes! We provide 3D photorealistic visual renderings before execution so you can see exactly how your home will look.'
  },
  {
    keywords: ['kitchen', 'modular', 'trolley', 'countertop'],
    answer: 'We specialize in Ergonomic Modular Kitchens with soft-close Blum hardware, Quartz/Granite tops, and anti-scratch finish panels.'
  },
  {
    keywords: ['wardrobe', 'closet', 'sliding', 'walk-in'],
    answer: 'We design custom sliding, walk-in, and hinged wardrobes with integrated LED lighting and smart storage compartmentalization.'
  },
  {
    keywords: ['lighting', 'light', 'chandelier', 'profile'],
    answer: 'Lighting makes the mood! We integrate magnetic tracks, indirect warm profile lights, cove lighting, and statement chandeliers.'
  },
  {
    keywords: ['vastu', 'vasthu', 'direction'],
    answer: 'Yes, our spatial layouts are designed balancing modern luxury aesthetic with Vastu guidelines upon request.'
  },
  {
    keywords: ['renovation', 'remodel', 'old home'],
    answer: 'We handle complete home renovation including civil works, electrical, plumbing, ceiling, and full interior furnishing.'
  },
  {
    keywords: ['price', 'cost', 'budget', 'rate', 'estimate'],
    answer: 'Our interior design projects start around ₹1,200/sq.ft. Final pricing depends on chosen materials, finishes, and customization.'
  },
  {
    keywords: ['service', 'services', 'work'],
    answer: 'We offer Complete Turnkey Interior Solutions: Space Planning, 3D Design, Custom Furniture, Ceiling & Lighting, and Project Management.'
  },
  {
    keywords: ['consultation', 'consult', 'meet', 'appointment'],
    answer: 'You can book a free design consultation session with our head interior architect right away!'
  },
  {
    keywords: ['timeline', 'time', 'duration', 'days', 'months'],
    answer: 'A standard 2BHK/3BHK project typically takes 45 to 60 days from 3D approval to complete handover.'
  },
  {
    keywords: ['false ceiling', 'ceiling', 'pop'],
    answer: 'We design modern false ceilings using gypsum boards with seamless cove lights, magnetic track slots, and wooden rafters.'
  },
  {
    keywords: ['bhk', 'flat', 'apartment', '2bhk', '3bhk', 'home'],
    answer: 'We specialize in full home interiors for 1BHK, 2BHK, 3BHK, luxury villas, and commercial spaces.'
  },
  {
    keywords: ['sofa', 'furniture', 'dining', 'table', 'chair'],
    answer: 'We manufacture factory-finish custom sofas, dining tables, accent chairs, and consoles matching your exact color theme.'
  },
  {
    keywords: ['bathroom', 'washroom', 'bath'],
    answer: 'We offer modern bathroom remodeling with anti-skid tiles, vanity units, glass shower partitions, and premium sanitary fittings.'
  },
  {
    keywords: ['wallpaper', 'texture', 'louvers', 'wall panel'],
    answer: 'We offer luxury wall treatments including WPC louvers, charcoal panels, metallic wallpaper, and textured Venetian plaster.'
  },
  {
    keywords: ['warranty', 'guarantee'],
    answer: 'We provide up to a 10-year warranty on flat-line cabinetry materials along with 1-year free maintenance service.'
  }
];

export default function WhatsAppChat({ isLoading = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      text: '✨ Welcome to Amar Interiors! How can we assist you with your space today?',
      time: 'Just now'
    }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  if (isLoading) return null;

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleUserQuestion = (text) => {
    if (!text.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const updatedHistory = [
      ...chatHistory,
      { sender: 'user', text, time: userTime }
    ];
    setChatHistory(updatedHistory);
    setInputMsg('');

    setTimeout(() => {
      const query = text.toLowerCase();
      let matchedAnswer = null;

      for (const item of staticKnowledge) {
        if (item.keywords.some((key) => query.includes(key))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (matchedAnswer) {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'bot', text: matchedAnswer, time: botTime }
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'I can connect you directly with our senior interior designer on WhatsApp for specific details.',
            time: botTime,
            showWhatsapp: true
          }
        ]);
      }
    }, 400);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleUserQuestion(inputMsg);
  };

  return (
    <div className="wa-widget-container">
      {/* Light Chat Window */}
      <div className={`wa-chat-box ${isOpen ? 'active' : ''}`}>
        
        {/* Header */}
        <div className="wa-chat-header">
          <div className="wa-avatar-status">
            <div className="wa-avatar-wrapper">
              <Image
                src="https://ui-avatars.com/api/?name=Amar+Interior&background=f59e0b&color=fff&bold=true"
                alt="Amar Interior"
                width={40}
                height={40}
                unoptimized
              />
              <span className="wa-online-badge"></span>
            </div>
            <div className="wa-user-info">
              <h4>AMAR INTERIORS</h4>
              <p>Design Assistant AI</p>
            </div>
          </div>
          <button className="wa-close-btn" onClick={toggleChat}>✕</button>
        </div>

        {/* Chat Body */}
        <div className="wa-chat-body">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`wa-msg ${msg.sender}`}>
              <p>{msg.text}</p>
              
              {/* WhatsApp Connection Button */}
              {msg.showWhatsapp && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Amar Interior, I have a custom inquiry regarding interior design.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-direct-link-btn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Connect on WhatsApp
                </a>
              )}
              <span className="wa-msg-time">{msg.time}</span>
            </div>
          ))}

          {/* Extended Quick Question Chips (18 Questions) */}
          <div className="wa-quick-questions">
            <button className="wa-chip" onClick={() => handleUserQuestion('What materials do you use?')}>🪵 Materials</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Can you suggest color schemes?')}>🎨 Colors</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Do you provide 3D designs?')}>🖥️ 3D Design</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Tell me about modular kitchens.')}>🍳 Modular Kitchen</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('What options for wardrobes?')}>🚪 Wardrobes</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Do you follow Vastu?')}>🧭 Vastu Compliant</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('What is the cost & budget?')}>💰 Pricing & Cost</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('How much time does it take?')}>⏱️ Project Timeline</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Tell me about false ceiling options.')}>✨ False Ceiling</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Do you handle full home renovation?')}>🔨 Renovation</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Do you customize furniture?')}>🛋️ Furniture</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('What lighting options do you offer?')}>💡 Lighting</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('Do you do bathroom design?')}>🚿 Bathrooms</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('What wall finishes do you offer?')}>🖼️ Wall Panels</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('What warranty do you provide?')}>🛡️ Warranty</button>
            <button className="wa-chip" onClick={() => handleUserQuestion('How do I book a consultation?')}>📅 Book Consult</button>
          </div>
          <div ref={chatEndRef} />
        </div>

        {/* Footer Input */}
        <div className="wa-chat-footer">
          <input
            type="text"
            className="wa-input-field"
            placeholder="Ask about materials, cost, timeline..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="wa-send-btn" onClick={() => handleUserQuestion(inputMsg)}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Trigger Button */}
      <button className="wa-trigger-btn" onClick={toggleChat}>
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}