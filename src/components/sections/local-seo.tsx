"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MapPin, Store, GraduationCap, Stethoscope, Cpu } from "lucide-react";

const localCategories = [
  {
    title: "Retail & Commerce",
    icon: Store,
    desc: "Digital storefronts designed to scale your reach beyond physical boundaries.",
  },
  {
    title: "Educational Hubs",
    icon: GraduationCap,
    desc: "Advanced portals for student management and course delivery.",
  },
  {
    title: "Healthcare Systems",
    icon: Stethoscope,
    desc: "Smart booking and management tools for modern clinics and hospitals.",
  },
  {
    title: "Tech Ventures",
    icon: Cpu,
    desc: "Custom software architecture to automate and optimize business workflows.",
  },
];

export const LocalSEO = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Empowering <span className="text-orange-600">Local Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We help businesses across the region, from the heart of Haridwar to the tech hubs of Roorkee, establish a world-class digital footprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {localCategories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] nexora-gradient text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-500/20"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold">Local Presence Matters</p>
              <p className="text-white/80">Visit us in Haridwar or Roorkee for a face-to-face meeting.</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
          >
            Book Local Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
