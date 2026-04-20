export const unstable_instant = { prefetch: "static" };
import { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/services-page-content";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata: Metadata = {
  title: "Elite Digital Services",
  description: "Explore our range of mission-critical digital services, from high-performance development to elite UI/UX design.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <ProcessSteps />
      <CallToAction />
    </>
  );
}
