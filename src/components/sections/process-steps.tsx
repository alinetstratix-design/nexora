"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";

export const ProcessSteps = () => {
  return (
    <SectionWrapper id="process" className="py-20 md:py-28 bg-white">

      <SectionHeader
        title={siteConfig.sections.process.title}
        subtitle={siteConfig.sections.process.subtitle}
        description={siteConfig.sections.process.description}
      />

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {(siteConfig.process as any[]).map((step: any, index: number) => {
          const iconName =
            index === 0 ? "Lightbulb" :
              index === 1 ? "Component" :
                index === 2 ? "Code2" : "Rocket";

          const Icon = (Icons as any)[iconName];

          return (
            <div
              key={step.title}
              className="text-center p-6 rounded-2xl border hover:shadow-md transition group"
            >
              {/* ICON */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-blue-50">
                {Icon && <Icon className="w-8 h-8 text-blue-600" />}
              </div>

              {/* STEP NUMBER */}
              <p className="text-xs text-gray-400 mb-2">
                Step {index + 1}
              </p>

              {/* TITLE */}
              <h3 className="text-lg font-bold mb-2">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          );
        })}

      </div>
    </SectionWrapper>
  );
};