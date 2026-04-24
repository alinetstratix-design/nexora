import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { ServicesOverview } from "@/components/sections/services-overview";
import { LocalSEO } from "@/components/sections/local-seo";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing-services";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/call-to-action";
import { FAQ } from "@/components/sections/faq-section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesOverview />
      <LocalSEO />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <WhatsAppButton />
    </>
  );
}
