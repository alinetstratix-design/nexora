import { Metadata } from "next";
import { ProductsPageContent } from "@/components/pages/products-page-content";

export const metadata: Metadata = {
  title: "Elite Products Forge",
  description: "Hand-crafted, high-performance templates and UI kits built by seniors for the next generation of founders.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
