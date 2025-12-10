import ContactSection from "@/components/landing/contactSection";
import FooterSection from "@/components/landing/footerSection";
import HeroSection from "@/components/landing/heroSection";
import { SphereMask } from "@/components/magicui/sphere-mask";


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
