import AboutHero from "@/components/AboutHero/AboutHero";
import AboutOverview from "@/components/AboutOverview/AboutOverview";
import CompanyJourney from "@/components/CompanyJourney/CompanyJourney";
import DesignPhilosophy from "@/components/DesignPhilosophy/DesignPhilosophy";
import GetInTouchSection from "@/components/GetInTouchSection/GetInTouchSection";





export default function AboutPage() {
  return (
    <main>

        <AboutHero />
        <AboutOverview />
         <DesignPhilosophy />
        <CompanyJourney />
        <GetInTouchSection />
       
      {/* Aapko jo bhi components yahan daalne hain, yahan import karke add kar lena */}
    </main>
  );
}



