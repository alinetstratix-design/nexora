"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Pricing = () => {
    return (
        <SectionWrapper id="pricing" className="py-24 md:py-32 bg-white dark:bg-slate-950">

            <SectionHeader
                title="Affordable Solutions for Every Business"
                subtitle="Pricing"
                description="We offer the most competitive rates in Haridwar and Roorkee. Get the best offer tailored to your specific needs."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">

                {/* STARTER PACKAGE */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-6 bg-orange-600 text-white font-bold text-xs uppercase tracking-widest rounded-bl-3xl">
                        Best Seller
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Website & SEO</h3>
                    <p className="text-slate-500 mb-6">Perfect for shops, coaching centers, and clinics.</p>
                    
                    <div className="mb-8">
                        <span className="text-4xl font-bold text-orange-600">Best Offer</span>
                        <p className="text-sm text-slate-500 mt-2">Guaranteed lowest price in the region.</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {["Mobile Responsive Design", "Local SEO Optimization", "WhatsApp Integration", "Google Maps Listing", "3 Days Delivery"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                                    <Check className="w-4 h-4 text-orange-600" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button 
                        size="lg"
                        onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
                        className="w-full h-14 rounded-2xl nexora-gradient text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 border-none transition-transform hover:scale-[1.02]"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        Get Quote on WhatsApp
                    </Button>
                </motion.div>

                {/* CUSTOM SOFTWARE / APP */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 relative overflow-hidden"
                >
                    <h3 className="text-2xl font-bold mb-2">Custom App & Software</h3>
                    <p className="text-slate-400 mb-6">Scalable solutions for growing startups and agencies.</p>
                    
                    <div className="mb-8">
                        <span className="text-4xl font-bold text-white">Custom Pricing</span>
                        <p className="text-sm text-slate-400 mt-2">Discuss your requirements in a meeting.</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {["Custom Android & iOS Apps", "Billing & Inventory Systems", "User Management Portal", "Dedicated Technical Support", "Secure Cloud Infrastructure"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-slate-300">
                                <div className="p-1 bg-white/10 rounded-full">
                                    <Check className="w-4 h-4 text-orange-500" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button 
                        size="lg"
                        onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
                        className="w-full h-14 rounded-2xl nexora-gradient text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 border-none transition-transform hover:scale-[1.02]"
                    >
                        Book a Meeting
                    </Button>
                </motion.div>

            </div>
            
            <div className="text-center mt-12">
                <p className="text-slate-500 dark:text-slate-400">
                    *We discuss exact pricing during the meeting based on your specific requirements.
                </p>
            </div>
        </SectionWrapper>
    );
};