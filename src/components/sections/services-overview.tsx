"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";

export const ServicesOverview = () => {
  return (
    <SectionWrapper id="services" className="py-20 md:py-28 bg-gray-50">

      <SectionHeader
        title={siteConfig.sections.services.title}
        subtitle={siteConfig.sections.services.subtitle}
        description={siteConfig.sections.services.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {siteConfig.services.map((service) => {
          const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;

          return (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border hover:shadow-md transition group"
            >
              {/* ICON */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-50">
                {Icon && <Icon className="w-6 h-6 text-blue-600" />}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>

              {/* LINK */}
              <span className="text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">
                Learn More →
              </span>
            </div>
          );
        })}

      </div>
    </SectionWrapper>
  );
};