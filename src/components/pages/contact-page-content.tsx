"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ContactPageContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20 bg-slate-50 dark:bg-slate-950 min-h-screen">

      {/* HERO SECTION */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[grid-linear-gradient(to_right,#80808012_1px,transparent_1px),grid-linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        
        <SectionWrapper className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-100 dark:border-blue-800">
              {siteConfig.sections.contact.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              {siteConfig.sections.contact.title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {siteConfig.sections.contact.description}
            </p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* CONTACT FORM & INFO */}
      <SectionWrapper className="py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT - CONTACT INFO */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Command Center
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Establish a direct connection with our technical team for project briefing and strategic consultation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: siteConfig.contact.email, color: "text-blue-600" },
                { icon: Phone, label: "Phone", value: siteConfig.contact.phone, color: "text-green-600" },
                { icon: MapPin, label: "Address", value: siteConfig.contact.address, color: "text-red-600" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 text-sm transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="name@company.com"
                          className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Service Type</label>
                      <select className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 text-sm transition-all outline-none appearance-none">
                        <option>Website Development</option>
                        <option>Mobile App Development</option>
                        <option>AI Integration</option>
                        <option>SaaS Development</option>
                        <option>E-commerce Solution</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message Brief</label>
                      <textarea
                        required
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 text-sm transition-all outline-none resize-none"
                      />
                    </div>

                    <Button 
                      disabled={isSubmitting}
                      className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Intelligence Briefing
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Transmission Received</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                      Your project brief has been successfully encrypted and sent to our team. We will establish contact within 24 hours.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-full px-8"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </SectionWrapper>

    </main>
  );
}