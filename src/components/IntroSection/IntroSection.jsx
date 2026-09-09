"use client";
import Link from 'next/link';

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import "./IntroSection.css";
import ScrollReveal from '../ScrollReveal/ScrollReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IntroSection() {
  const sectionRef = useRef(null);
  const revealContentRef = useRef(null);

  const word1 = "CRAFTING";
  const word2 = "LUXURY";
  const word3 = "SPACES";

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

      // CRAFTING LUXURY SPACES ke individual letters ki balanced speed
      tl.fromTo(
        ".char-item",
        {
          x: 90,
          opacity: 0,
          filter: "blur(4px)"
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5, // Thoda fast speed (was 0.85s)
          stagger: 0.04, // Snappy sequence per letter (was 0.08s)
          ease: "power2.out"
        }
      )
      // Bottom Content reveal
      .fromTo(
        revealContentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.2"
      );
    },
    { scope: sectionRef }
  );

  return (
    <ScrollReveal>
    <section ref={sectionRef} className="intro-section">
      <div className="intro-container">
        
        {/* Responsive Heading with Right-to-Left Snappy Letter Animation */}
        <div className="intro-heading-box">
          <h2 className="intro-main-title">
            <div className="title-line">
              <span className="word-wrapper">
                {word1.split("").map((char, index) => (
                  <span key={`w1-${index}`} className="char-item">
                    {char}
                  </span>
                ))}
              </span>

              <span className="word-wrapper">
                {word2.split("").map((char, index) => (
                  <span key={`w2-${index}`} className="char-item">
                    {char}
                  </span>
                ))}
              </span>
            </div>

            <div className="title-line">
              <span className="word-wrapper">
                {word3.split("").map((char, index) => (
                  <span key={`w3-${index}`} className="char-item">
                    {char}
                  </span>
                ))}
              </span>
            </div>
          </h2>
        </div>

        <hr className="intro-divider" />

        {/* Bottom Content Grid */}
        <div ref={revealContentRef} className="intro-bottom-grid">
          <div className="intro-text-col">
            <h3 className="intro-subtitle">
              Best interior designers in Mumbai
            </h3>
            <p className="intro-description">
              For both residential and commercial environments, we are{" "}
              <strong>Top interior designers in Mumbai</strong> who specialize in fusing
              extraordinary creativity with practicality. With the help of the{" "}
              <strong>Best interior designers in Mumbai</strong>, who are known for their creative
              designs, specialized solutions, and unmatched skill in creating sophisticated,
              contemporary living spaces, you may realize your ideal interiors.
            </p>
          </div>

          <div className="intro-action-col">
            {/* <a href="#services" className="all-services-link">
              <span>All Services</span>
              <ArrowUpRight size={22} className="arrow-icon" />
            </a> */}


            <Link href="/services" className="all-services-link">
  <span> Services</span>
  <ArrowUpRight size={22} className="arrow-icon" />
</Link>




          </div>
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}






























































// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";
// import "./IntroSection.css";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function IntroSection() {
//   const sectionRef = useRef(null);
//   const revealContentRef = useRef(null);

//   const word1 = "CRAFTING";
//   const word2 = "LUXURY";
//   const word3 = "SPACES";

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 60%",
//           toggleActions: "play none none reverse"
//         }
//       });

//       // CRAFTING LUXURY SPACES ke individual letters ki balanced speed
//       tl.fromTo(
//         ".char-item",
//         {
//           x: 90,
//           opacity: 0,
//           filter: "blur(4px)"
//         },
//         {
//           x: 0,
//           opacity: 1,
//           filter: "blur(0px)",
//           duration: 0.5, // Thoda fast speed (was 0.85s)
//           stagger: 0.04, // Snappy sequence per letter (was 0.08s)
//           ease: "power2.out"
//         }
//       )
//       // Bottom Content reveal
//       .fromTo(
//         revealContentRef.current,
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
//         "-=0.2"
//       );
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} className="intro-section">
//       <div className="intro-container">
        
//         {/* Responsive Heading with Right-to-Left Snappy Letter Animation */}
//         <div className="intro-heading-box">
//           <h2 className="intro-main-title">
//             <div className="title-line">
//               <span className="word-wrapper">
//                 {word1.split("").map((char, index) => (
//                   <span key={`w1-${index}`} className="char-item">
//                     {char}
//                   </span>
//                 ))}
//               </span>

//               <span className="word-wrapper">
//                 {word2.split("").map((char, index) => (
//                   <span key={`w2-${index}`} className="char-item">
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             </div>

//             <div className="title-line">
//               <span className="word-wrapper">
//                 {word3.split("").map((char, index) => (
//                   <span key={`w3-${index}`} className="char-item">
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             </div>
//           </h2>
//         </div>

//         <hr className="intro-divider" />

//         {/* Bottom Content Grid */}
//         <div ref={revealContentRef} className="intro-bottom-grid">
//           <div className="intro-text-col">
//             <h3 className="intro-subtitle">
//               Best interior designers in Mumbai
//             </h3>
//             <p className="intro-description">
//               For both residential and commercial environments, we are{" "}
//               <strong>Top interior designers in Mumbai</strong> who specialize in fusing
//               extraordinary creativity with practicality. With the help of the{" "}
//               <strong>Best interior designers in Mumbai</strong>, who are known for their creative
//               designs, specialized solutions, and unmatched skill in creating sophisticated,
//               contemporary living spaces, you may realize your ideal interiors.
//             </p>
//           </div>

//           <div className="intro-action-col">
//             <a href="#services" className="all-services-link">
//               <span>All Services</span>
//               <ArrowUpRight size={22} className="arrow-icon" />
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }