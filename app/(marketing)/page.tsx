import BenefitsSection from "@/components/landing/benefits-section";
import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import ComparisonSection from "@/components/landing/comparisonSection";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <SphereMask />
      <ComparisonSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
