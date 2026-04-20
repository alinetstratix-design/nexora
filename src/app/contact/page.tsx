export const unstable_instant = { prefetch: "static" };
import { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact-page-content";

export const metadata: Metadata = {
  title: "Connect with Excellence",
  description: "Ready to launch your mission-critical project? Get in touch with our elite response team today.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
