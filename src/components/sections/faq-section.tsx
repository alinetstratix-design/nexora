"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FAQ = () => {
    return (
        <SectionWrapper id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">

            <SectionHeader
                title={siteConfig.sections.faq.title}
                subtitle={siteConfig.sections.faq.subtitle}
                description={siteConfig.sections.faq.description}
            />

            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteConfig.faqs.map((faq, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
                    >
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-50 leading-tight">{faq.q}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </SectionWrapper>
    );
};