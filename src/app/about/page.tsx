import { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about-page-content";

export const metadata: Metadata = {
  title: "Building the Future | About Us",
  description: "Learn about the mission, values, and elite team behind Nexora's digital innovation engine.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
