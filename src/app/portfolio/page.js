import GetInTouchSection from "@/components/GetInTouchSection/GetInTouchSection";
import PortfolioHero from "@/components/PortfolioHero/PortfolioHero";
import SelectedProjectsShowcase from "@/components/Selectedprojectsshowcase/Selectedprojectsshowcase";

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />

      {/* Hero ka button direct is div par scroll hoga */}
      <div id="portfolio-projects">
        <SelectedProjectsShowcase />
      </div>

      <GetInTouchSection />
    </main>
  );
}