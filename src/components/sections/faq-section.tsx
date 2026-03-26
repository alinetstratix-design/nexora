"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

export const FAQ = () => {
    return (
        <SectionWrapper id="faq" className="py-20 md:py-28 bg-gray-50">

            <SectionHeader
                title={siteConfig.sections.faq.title}
                subtitle={siteConfig.sections.faq.subtitle}
                description={siteConfig.sections.faq.description}
            />

            <div className="max-w-3xl mx-auto mt-10 space-y-4">
                {siteConfig.faqs.map((faq, i) => (
                    <div key={i} className="border rounded-xl p-5 bg-white">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>

        </SectionWrapper>
    );
};