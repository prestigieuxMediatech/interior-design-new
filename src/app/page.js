import Hero from "@/components/Hero/Hero";
import IntroSection from "@/components/IntroSection/IntroSection";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import ParallaxBanner from "@/components/ParallaxBanner/ParallaxBanner";
import ContactSection from "@/components/ContactSection/ContactSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import GetInTouchSection from "@/components/GetInTouchSection/GetInTouchSection";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <Hero />
       <AboutSection />
      <IntroSection />
     
      
      <ParallaxBanner />
    
      <ServicesOverview />
     
      
      <ProcessSection />
         <ContactSection />
      <FaqSection />
      <GetInTouchSection />
      
         {/* <Hero /> */}
      {/* Hero Section */}
      {/* <div 
        style={{ 
          height: "100vh", 
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "#fff",
          flexDirection: "column"
        }}
      >
        <h1 style={{ fontSize: "3rem", textAlign: "center", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          Hero Section
        </h1>
        <p style={{ marginTop: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          Niche scroll karke dekho sticky white behavior aur ribbon effect
        </p>
      </div>

 
      <div style={{ padding: "100px 20px", textAlign: "center", background: "#faf9f6" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a" }}>White Body Content</h2>
        <p style={{ marginTop: "10px", color: "#64748b" }}>
          Scrolled state par navbar white ho chuka hai aur hover karne par yellow ribbon design perfectly visible hoga.
        </p>
      </div> */}
    </main>
  );
}


