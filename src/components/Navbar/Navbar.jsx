"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Navbar.css";

const portfolioItems = [
  { label: "Modular Kitchen", href: "/portfolio/modular-kitchen" },
  { label: "Master Bedroom", href: "/portfolio/master-bedroom" },
  { label: "Living Room", href: "/portfolio/living-room" },
  { label: "Kid's Bedroom", href: "/portfolio/kids-bedroom" },
  { label: "Safety Door", href: "/portfolio/safety-door" },
  { label: "Floor Area", href: "/portfolio/floor-area" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleCloseMenu = () => {
    setIsOpen(false);
    setPortfolioOpen(false);
  };

  const handleBookConsultant = (e) => {
    e.preventDefault();
    handleCloseMenu();

    if (pathname === "/") {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo & Side-by-Side Aligned Text */}
        <Link href="/" className="navbar-logo" onClick={handleCloseMenu}>
          <img
            src="/nlogo.png"
            alt="Amar Interior Logo"
            className="navbar-brand-logo"
          />
          <span className="navbar-brand-text">
            <span className="text-amar">AMAR</span>
            <span className="text-interior">INTERIORS</span>
          </span>
        </Link>

        {/* Mobile Backdrop */}
        <div
          className={`mobile-backdrop ${isOpen ? "active" : ""}`}
          onClick={handleCloseMenu}
        />

        {/* Navigation Menu */}
        <nav>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link href="/" className="nav-link" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>

            <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
              <Link href="/about" className="nav-link" onClick={handleCloseMenu}>
                About Us
              </Link>
            </li>

            <li className={`nav-item ${pathname === "/services" ? "active" : ""}`}>
              <Link href="/services" className="nav-link" onClick={handleCloseMenu}>
                Services
              </Link>
            </li>

            <li className={`nav-item has-dropdown ${pathname.startsWith("/portfolio") ? "active" : ""}`}>
              <div className="portfolio-header-mobile">
                <Link href="/portfolio" className="nav-link" onClick={handleCloseMenu}>
                  Portfolio
                </Link>
                <button
                  className="dropdown-toggle-btn"
                  onClick={() => setPortfolioOpen(!portfolioOpen)}
                  aria-label="Toggle Portfolio Submenu"
                  type="button"
                >
                  {portfolioOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              <ul className={`dropdown-menu ${portfolioOpen ? "mobile-expanded" : ""}`}>
                {portfolioItems.map((subItem) => (
                  <li key={subItem.label} className="dropdown-item">
                    <Link
                      href={subItem.href}
                      className={`dropdown-link ${pathname === subItem.href ? "sub-active" : ""}`}
                      onClick={handleCloseMenu}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>
              <Link href="/contact" className="nav-link" onClick={handleCloseMenu}>
                Contact
              </Link>
            </li>

            <li className="nav-action">
              <button
                className="consultation-btn"
                onClick={handleBookConsultant}
                type="button"
              >
                Book Consultation
              </button>
            </li>
          </ul>
        </nav>

        {/* Hamburger Toggle Button */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          type="button"
        >
          <div className={`hamburger-custom ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
}





















































































// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Portfolio", href: "/portfolio" },
//   { label: "Contact", href: "/contact" }
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Brand Logo */}
//         <Link href="/" className="navbar-logo">
//           AMAR <span></span> INTERIOR
//         </Link>

//         {/* Navigation Menu */}
//         <nav>
//           <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//             {/* Mobile Close Button */}
//             <button 
//               className="mobile-close-btn" 
//               onClick={() => setIsOpen(false)}
//               aria-label="Close Navigation"
//             >
//               <X size={28} />
//             </button>

//             {/* Navlinks with Angled Ribbon Effect */}
//             {/* {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <li key={item.label} className={`nav-item ${isActive ? "active" : ""}`}>
//                   <Link 
//                     href={item.href} 
//                     className="nav-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })} */}



//             {navItems.map((item) => {
//   // Home ("/") hamesha active rahega, baaki pathname se check honge


//   const isActive = item.href === "/";



// //   const isActive = item.href === "/" || pathname === item.href;





  
//   return (
//     <li key={item.label} className={`nav-item ${isActive ? "active" : ""}`}>
//       <Link 
//         href={item.href} 
//         className="nav-link"
//         onClick={() => setIsOpen(false)}
//       >
//         {item.label}
//       </Link>
//     </li>
//   );
// })}





//             {/* Mobile Action Button */}
//             <li className="nav-action">
//               <button className="consultation-btn">Book Consultation</button>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button 
//           className="hamburger-btn" 
//           onClick={() => setIsOpen(true)}
//           aria-label="Open Navigation"
//         >
//           <Menu size={30} />
//         </button>
//       </div>
//     </header>
//   );
// }
