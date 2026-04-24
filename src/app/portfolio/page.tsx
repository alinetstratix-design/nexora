import { Metadata } from "next";
import { PortfolioPageContent } from "@/components/pages/portfolio-page-content";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata: Metadata = {
  title: "Elite Portfolio | NexoraTech",
  description: "Explore our showcase of high-impact digital transformations and proprietary ecosystems.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioPageContent />
      <CallToAction />
    </>
  );
}
