import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiquidDock } from "@/components/navigation/LiquidDock";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollAnimations />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      {/* <CreateTogetherSection /> */}
      <ContactSection />
      <LiquidDock />
    </>
  );
}
