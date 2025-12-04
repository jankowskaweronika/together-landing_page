import BenefitsSection from "@/components/landing/benefits-section";
import HeroSection from "@/components/landing/hero-section";
import { SphereMask } from "@/components/magicui/sphere-mask";
import ComparisonSection from "@/components/landing/comparison-section";
import FeaturesSection from '@/components/landing/features-section';
import HowItWorksSection from '@/components/landing/howitworks-section';

export default async function Page() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <SphereMask />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
}
