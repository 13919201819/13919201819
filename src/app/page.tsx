import HeroSection from "@/components/sections/HeroSection";
// import VisionSection from "@/components/sections/VisionSection";
import IdeaSubmissionSection from "@/components/sections/IdeaSubmission";
import CustomizationSection from "@/components/sections/CustomizationSection";
import InvestorsSection from "@/components/sections/InvestorsSection";
import PartnerSection from "@/components/sections/PartnerSection";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      {/* <VisionSection /> */}
       <CustomizationSection />
      <IdeaSubmissionSection />
      <InvestorsSection />
      <PartnerSection />

      <Footer />
    </main>
  );
}
