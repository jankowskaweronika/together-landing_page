import ContactSection from "@/app/landing/contactSection";
import FooterSection from "@/app/landing/footerSection";
import HeroSection from "@/app/landing/heroSection";
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
