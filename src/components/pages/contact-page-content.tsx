"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as any,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ContactPageContent() {
  return (
    <main className="pt-20">
      {/* Cinematic Contact Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden nexora-gradient text-white">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />
        
        <SectionWrapper className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Establish Connection
          </motion.div>
          
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-[-0.04em] leading-[0.85] uppercase italic text-white mb-8">
            <TextReveal text="Let's Forge" />
            <br />
            <span className="text-white italic">Success Together</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-medium tracking-tight leading-relaxed">
            Have a mission-critical project in mind? Our team of elite engineers and designers is ready to take your vision to the next level.
          </p>
        </SectionWrapper>
      </section>

      <SectionWrapper className="py-24 md:py-32 bg-white text-brand-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Details Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter text-brand-dark">Studio HQ</h3>
              <p className="text-brand-gray text-lg font-medium leading-relaxed max-w-sm">
                Get in touch via our specialized channels. Our tactical response team is available 24/7.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Email Strategy", val: siteConfig.contact.email, icon: Mail },
                { label: "Direct Line", val: siteConfig.contact.phone, icon: Phone },
                { label: "Our Studio", val: siteConfig.contact.address, icon: MapPin },
              ].map((item, i) => (
                <motion.div key={item.label} variants={itemVariants} className="group flex items-start gap-6 p-6 rounded-3xl bg-brand-light border border-brand-border hover:border-brand-blue/30 transition-all duration-500 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:nexora-gradient group-hover:text-white transition-all duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black italic uppercase tracking-tighter text-sm mb-1 opacity-60 text-brand-gray">{item.label}</h4>
                    <p className="text-lg font-bold tracking-tight text-brand-dark">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-6">
              <Magnetic strength={0.2}>
                <Link 
                  href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  className="inline-flex h-16 px-10 items-center justify-center rounded-2xl gap-3 font-black uppercase tracking-widest bg-brand-blue text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" /> Message on WhatsApp
                </Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-brand-gray hover:text-brand-blue transition-colors">
                  Join Discord Community <ExternalLink className="w-4 h-4" />
                </button>
              </Magnetic>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <div className="relative">
            <TiltCard className="rounded-[3rem] group">
              <div className="p-8 md:p-12 relative z-10 bg-white">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 text-brand-gray">Full Name</label>
                      <input type="text" placeholder="ALEX RIVERS" className="w-full bg-brand-light border-2 border-transparent rounded-2xl h-16 px-6 font-bold tracking-tight focus:bg-white focus:border-brand-blue/30 outline-none transition-all placeholder:text-brand-gray/20 text-brand-dark" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 text-brand-gray">Email Address</label>
                      <input type="email" placeholder="ALEX@PROJECT.IO" className="w-full bg-brand-light border-2 border-transparent rounded-2xl h-16 px-6 font-bold tracking-tight focus:bg-white focus:border-brand-blue/30 outline-none transition-all placeholder:text-brand-gray/20 text-brand-dark" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 text-brand-gray">Subject</label>
                    <select className="w-full bg-brand-light border-2 border-transparent rounded-2xl h-16 px-6 font-bold tracking-tight focus:bg-white focus:border-brand-blue/30 outline-none transition-all appearance-none cursor-pointer text-brand-dark">
                      <option>Project Inquiry</option>
                      <option>System Architecture</option>
                      <option>Elite Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 text-brand-gray">Message</label>
                    <textarea placeholder="TELL US ABOUT YOUR VISION..." rows={5} className="w-full bg-brand-light border-2 border-transparent rounded-2xl p-6 font-bold tracking-tight focus:bg-white focus:border-brand-blue/30 outline-none transition-all resize-none placeholder:text-brand-gray/20 text-brand-dark"></textarea>
                  </div>
                  
                  <Magnetic strength={0.3}>
                    <Button size="lg" className="w-full h-20 rounded-2xl font-black text-xl uppercase italic tracking-tighter gap-3 shadow-xl group/btn nexora-gradient text-white border-0 hover:scale-[1.02] transition-all duration-500">
                      Blast Message <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </Magnetic>
                  
                  <p className="text-[10px] text-center text-brand-gray pt-4 font-bold uppercase tracking-widest opacity-40">
                    Encrypted Connection | Global Delivery
                  </p>
                </form>
              </div>
            </TiltCard>
            
            {/* Decal Background numbers */}
            <div className="absolute -top-12 -right-12 text-[12rem] font-black italic text-brand-blue/5 select-none pointer-events-none -z-10 group-hover:text-brand-blue/10 transition-colors duration-700">
              C_
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
