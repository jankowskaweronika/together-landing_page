import ContactSection from "@/components/landingPages/contactSection";
import FooterSection from "@/components/landingPages/footerSection";
import HeroSection from "@/components/landingPages/heroSection";
import { SphereMask } from "@/components/ui/sphere-mask";


export default async function Page() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <SphereMask />
      <FooterSection />
    </>
  )
}
