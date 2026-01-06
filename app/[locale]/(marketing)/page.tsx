import ContactSection from "@/components/landingPages/contactSection";
import FooterSection from "@/components/landingPages/footerSection";
import HeroSection from "@/components/landingPages/heroSection";
import FeaturesSection from "@/components/landingPages/featuresSection";
import ComparisonSection from "@/components/landingPages/comparisonSection";
import { SphereMask } from "@/components/ui/sphere-mask";


export default async function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <ContactSection />
      <SphereMask />
      <FooterSection />
    </>
  )
}