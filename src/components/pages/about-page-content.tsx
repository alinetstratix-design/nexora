"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { ShieldCheck, Zap, Users } from "lucide-react";

export function AboutPageContent() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <SectionWrapper>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About {siteConfig.name}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            We are building smart solutions to simplify school management and empower teachers.
          </p>
        </SectionWrapper>
      </section>

      {/* CONTENT */}
      <SectionWrapper className="py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="team"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              At {siteConfig.name}, we aim to simplify how schools manage teachers,
              students, and daily operations.
            </p>

            <p className="text-gray-600">
              Our platform helps schools become more efficient, connected,
              and data-driven.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-gray-500">Schools</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">10k+</h3>
                <p className="text-sm text-gray-500">Users</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <SectionWrapper>

          <SectionHeader
            title="Our Values"
            subtitle="What drives us"
            description="Core principles behind Nexora"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white p-6 rounded-xl border">
              <Zap className="mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                We build modern solutions for real problems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <ShieldCheck className="mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-sm text-gray-600">
                Your data is safe and protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <Users className="mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                Built for schools, teachers and parents.
              </p>
            </div>

          </div>
        </SectionWrapper>
      </section>

    </main>
  );
}