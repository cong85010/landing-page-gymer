import HeroSection from "@/components/HeroSection";
import ProblemDesireSection from "@/components/ProblemDesireSection";
import BenefitsSection from "@/components/BenefitsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ProgramsSection from "@/components/ProgramsSection";
import RegistrationSection from "@/components/RegistrationSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemDesireSection />
      <BenefitsSection />
      <SuccessStoriesSection />
      <ProgramsSection />
      <RegistrationSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
