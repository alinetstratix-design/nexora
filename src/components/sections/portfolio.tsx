"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio" className="py-20 md:py-28 bg-white">

      <SectionHeader
        title={siteConfig.sections.portfolio.title}
        subtitle={siteConfig.sections.portfolio.subtitle}
        description={siteConfig.sections.portfolio.description}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.portfolio.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden border hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <span className="text-xs uppercase text-gray-500">
                {project.category}
              </span>

              <h3 className="text-lg font-bold mt-1 mb-3">
                {project.title}
              </h3>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                View Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="mt-12 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
        >
          View All Projects <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </SectionWrapper>
  );
};