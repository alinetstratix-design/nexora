"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-gray-400">
            Smart platform for schools, teachers and management systems.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">
            {siteConfig.contact.email}
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>

    </footer>
  );
};