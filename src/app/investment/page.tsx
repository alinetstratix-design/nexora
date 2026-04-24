import { Metadata } from "next";
import { InvestmentPageContent } from "@/components/pages/investment-page-content";
import { FAQ } from "@/components/sections/faq-section";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata: Metadata = {
  title: "Investment Plans | NexoraTech",
  description: "Transparent pricing and scalable digital solutions for modern enterprises.",
};

export default function InvestmentPage() {
  return (
    <>
      <InvestmentPageContent />
      <FAQ />
      <CallToAction />
    </>
  );
}
