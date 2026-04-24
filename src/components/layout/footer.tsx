"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Globe, MessageSquare, Users, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-800">

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* BRAND & LOGO */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-bold text-xl">
              N
            </div>
            <span className="text-2xl font-bold tracking-tight">{siteConfig.name}</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {siteConfig.description}
          </p>
          <div className="flex gap-4">
            {[MessageSquare, Users, Globe].map((Icon, i) => (
              <Link key={i} href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-orange-600 hover:border-orange-500 transition-all">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8">Solutions</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            {siteConfig.services.slice(0, 4).map((s) => (
              <li key={s.id}><Link href="/#services" className="hover:text-orange-500 transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8">Company</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-orange-500 transition-colors">Our Mission</Link></li>
            <li><Link href="/#portfolio" className="hover:text-orange-500 transition-colors">Local Work</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Get In Touch</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8">Get In Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-sm text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500">
                <Mail className="w-4 h-4" />
              </div>
              {siteConfig.contact.email}
            </li>
            <li className="flex items-center gap-4 text-sm text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#25D366]">
                <Phone className="w-4 h-4" />
              </div>
              {siteConfig.contact.phone}
            </li>
            <li className="flex items-center gap-4 text-sm text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500">
                <MapPin className="w-4 h-4" />
              </div>
              {siteConfig.contact.address}
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © {year || "2026"} {siteConfig.name}. Building Digital Solutions for Your Growth.
        </p>
        <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          <Link href="#" className="hover:text-white transition-colors">Security</Link>
        </div>
      </div>

    </footer>
  );
};