"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

export const FAQ = () => {
    const faqs = [
        {
            q: "Is Nexora free to use?",
            a: "Yes, you can start with our free plan and upgrade anytime."
        },
        {
            q: "Who can use Nexora?",
            a: "Schools, teachers, and educational institutions."
        },
        {
            q: "How do I hire teachers?",
            a: "You can browse and connect with teachers directly inside the platform."
        },
        {
            q: "Is payment secure?",
            a: "Yes, all transactions are secured with trusted payment gateways."
        }
    ];

    return (
        <SectionWrapper id="faq" className="py-20 md:py-28 bg-gray-50">

            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Got questions?"
                description="We’ve answered the most common queries."
            />

            <div className="max-w-3xl mx-auto mt-10 space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border rounded-xl p-5 bg-white">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>

        </SectionWrapper>
    );
};