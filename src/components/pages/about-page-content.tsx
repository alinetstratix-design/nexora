"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import * as Icons from "lucide-react";

export function AboutPageContent() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <SectionWrapper>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {siteConfig.sections.about.title} {siteConfig.name}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            {siteConfig.sections.about.description}
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
              {siteConfig.sections.about.mission}
            </p>

            <p className="text-gray-600">
              {siteConfig.sections.about.vision}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              {siteConfig.stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <SectionWrapper>

          <SectionHeader
            title={siteConfig.sections.about.valuesTitle}
            subtitle={siteConfig.sections.about.valuesSubtitle}
            description={siteConfig.sections.about.valuesDescription}
          />

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {siteConfig.values.map((value) => {
              const Icon = (Icons as any)[value.icon];
              return (
                <div key={value.title} className="bg-white p-6 rounded-xl border">
                  {Icon && <Icon className="mb-3 text-blue-600" />}
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}

          </div>
        </SectionWrapper>
      </section>

    </main>
  );
}