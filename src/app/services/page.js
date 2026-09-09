import DesignJourneySection from '@/components/DesignJourneySection/DesignJourneySection';
import GetInTouchSection from '@/components/GetInTouchSection/GetInTouchSection';
import OurExpertise from '@/components/OurExpertise/OurExpertise';

// import OurProcess from '@/components/OurProcess/OurProcess';
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import React from 'react';

export default function ServicesPage() {
  return (
    <main>
        <ServicesHero />
       
         <OurExpertise />
         <DesignJourneySection />
       
          {/* <OurProcess /> */}
        <ServiceGrid />
      
        <GetInTouchSection />
       
      {/* Services page content will go here */}
    </main>
  );
}


