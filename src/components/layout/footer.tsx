import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Rocket, Mail, Phone, MapPin, ArrowRight, Send, Globe, ShieldCheck, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Magnetic } from "@/components/ui/magnetic";
import { Button } from "@/components/ui/button";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative bg-white text-brand-dark overflow-hidden border-t border-brand-border">
      <div className="absolute inset-0 mesh-gradient opacity-[0.03]" />
      <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      
      <SectionWrapper className="relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 group-hover:rotate-12 transition-transform duration-500">
                <Image 
                  src="/logo.png" 
                  alt={siteConfig.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-black text-4xl tracking-tighter uppercase italic text-brand-dark">{siteConfig.name}</span>
            </Link>
            
            <p className="text-brand-gray text-xl font-medium leading-relaxed max-w-md tracking-tight">
              {siteConfig.description}
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: TwitterIcon, href: siteConfig.contact.twitter, label: "Twitter" },
                { icon: LinkedinIcon, href: siteConfig.contact.linkedin, label: "LinkedIn" },
                { icon: GithubIcon, href: siteConfig.contact.github, label: "GitHub" },
              ].map((social) => (
                <Magnetic key={social.label} strength={0.3}>
                  <Link 
                    href={social.href} 
                    className="w-14 h-14 rounded-2xl bg-brand-light border border-brand-border flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-sm group"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Nav Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">Intelligence</h4>
              <ul className="space-y-4">
                {siteConfig.nav.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-lg font-bold tracking-tight text-brand-gray hover:text-brand-blue hover:translate-x-1 transition-all inline-block italic uppercase">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-purple">Tactical Units</h4>
              <ul className="space-y-4">
                {siteConfig.services.slice(0, 4).map((service) => (
                  <li key={service.id}>
                    <Link href="/services" className="text-base font-bold tracking-tight text-brand-gray hover:text-brand-purple transition-all inline-block italic uppercase">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink">Transmission</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-brand-gray group">
                  <Mail className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold tracking-tight break-all uppercase italic">{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-start gap-4 text-brand-gray group">
                  <Globe className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold tracking-tight uppercase italic">Global Studio HQ</span>
                </div>
                
                <div className="pt-4">
                  <div className="relative group/input">
                    <input 
                      type="text" 
                      placeholder="MISSION UPDATES" 
                      className="w-full bg-brand-light border border-brand-border rounded-2xl h-14 px-6 pr-14 font-black tracking-[0.1em] text-xs focus:bg-white focus:border-brand-blue/50 outline-none transition-all placeholder:text-brand-gray/40 uppercase"
                    />
                    <button className="absolute right-2 top-2 w-10 h-10 nexora-gradient rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-brand-blue/20">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-32 pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-gray/60">
            <span>© {new Date().getFullYear()} {siteConfig.name} INTERNAL SYSTEMS</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-brand-blue transition-colors italic">Privacy Protocol</Link>
              <Link href="#" className="hover:text-brand-blue transition-colors italic">Terms of Engagement</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-brand-gray/30">
            <ShieldCheck className="w-6 h-6" />
            <Zap className="w-6 h-6" />
            <div className="h-4 w-px bg-brand-border" />
            <span className="text-[10px] font-black tracking-[0.5em] italic">ENCRYPTED</span>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Background Decal */}
      <div className="absolute -bottom-20 -left-20 text-[25rem] font-black italic text-brand-dark/[0.02] select-none pointer-events-none uppercase leading-none">
        Elite
      </div>
    </footer>
  );
};
