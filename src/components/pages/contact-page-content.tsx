"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactPageContent() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <SectionWrapper>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or want to get started? We’d love to hear from you.
          </p>
        </SectionWrapper>
      </section>

      {/* CONTENT */}
      <SectionWrapper className="py-20">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Get in touch
            </h2>

            <p className="text-gray-600">
              Reach out to us anytime. Our team will respond quickly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>{siteConfig.contact.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="border rounded-xl p-6 bg-white">
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3 text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 text-sm"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-lg p-3 text-sm"
              />

              <Button className="w-full">
                Send Message
              </Button>

            </form>
          </div>

        </div>
      </SectionWrapper>

    </main>
  );
}