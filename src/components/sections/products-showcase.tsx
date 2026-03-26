"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ProductsShowcase = () => {
  return (
    <SectionWrapper id="products" className="py-20 md:py-28 bg-gray-50">

      <SectionHeader
        title={siteConfig.sections.products.title}
        subtitle={siteConfig.sections.products.subtitle}
        description={siteConfig.sections.products.description}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {siteConfig.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition group"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col">

              {/* CATEGORY */}
              <span className="text-xs text-blue-600 font-medium mb-1">
                {product.category}
              </span>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {product.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* ACTION */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold">
                  {product.price}
                </span>

                <Link
                  href={`/products/${product.id}`}
                  className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                >
                  View <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* VIEW ALL */}
      <div className="mt-12 text-center">
        <Link
          href="/products"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          View All Products →
        </Link>
      </div>

    </SectionWrapper>
  );
};