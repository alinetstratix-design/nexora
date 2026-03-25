import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { Portfolio } from "@/components/sections/portfolio";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Portfolio />
      <ServicesOverview />
      <ProductsShowcase />
      <ProcessSteps />
      <CallToAction />
    </>
  );
}
