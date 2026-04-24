import { SiteConfig } from "@/types";

/**
 * Global Site Configuration
 * Centralized data store for all landing page content.
 */
export const siteConfig: SiteConfig = {
  name: "NexoraTech",
  description: "Bespoke Digital Solutions for Modern Enterprises. Specializing in high-performance web and mobile ecosystems.",
  contact: {
    email: "contact@nexoratech.in",
    address: "Global Headquarters (Haridwar & Roorkee)",
    phone: "+91 0000000000",
    whatsapp: "https://wa.me/910000000000?text=Hello%20NexoraTech%20team,%20I'm%20interested%20in%20a%20digital%20consultation.",
    twitter: "https://twitter.com/nexoratech",
    linkedin: "https://linkedin.com/company/nexoratech",
    github: "https://github.com/nexoratech",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Solutions", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Investment", href: "#pricing" },
    { title: "Connect", href: "#contact" },
  ],
  sections: {
    hero: {
      line1: "Engineering the Future of",
      highlight: "Digital Experiences",
      line2: "Innovation at Scale",
      description: "We architect scalable web and mobile solutions that bridge the gap between vision and reality. While our roots are local, our standards are global.",
      socialProof: "Trusted by 50+ Modern Enterprises",
    },
    services: {
      title: "Strategic Digital Solutions",
      subtitle: "Our Expertise",
      description: "Advanced engineering tailored to your business objectives.",
    },
    products: {
      title: "Proprietary Ecosystems",
      subtitle: "Innovation",
      description: "Ready-to-deploy platforms built for performance.",
    },
    testimonials: {
      title: "Client Perspectives",
      subtitle: "Success Stories",
      description: "Validated by industry leaders across the region.",
    },
    process: {
      title: "Our Engineering Workflow",
      subtitle: "The Methodology",
      description: "From discovery to deployment with surgical precision.",
    },
    portfolio: {
      title: "Selected Case Studies",
      subtitle: "Portfolio",
      description: "A showcase of high-impact digital transformations.",
    },
    contact: {
      title: "Initiate a Consultation",
      subtitle: "Contact",
      description: "Ready to scale? Let's discuss your technical roadmap.",
    },
    cta: {
      title: "Elevate Your Digital Strategy",
      description: "Scale your business with purpose-built digital solutions. Our architecture is designed for global reach and local reliability.",
      buttonText: "Consultation on WhatsApp",
      secondaryButtonText: "Explore Portfolio",
    },
    faq: {
      title: "Informed Decisions",
      subtitle: "FAQ",
      description: "Clarifying the technical and strategic aspects of our partnership.",
    },
    about: {
      title: "About NexoraTech",
      subtitle: "The Vision",
      description: "NexoraTech is an engineering-first agency dedicated to digital excellence.",
      mission: "To provide world-class technology solutions that drive tangible business growth.",
      vision: "To become the premier tech partner for scaling enterprises in Uttarakhand and beyond.",
      valuesTitle: "Core Values",
      valuesSubtitle: "Principles",
      valuesDescription: "Excellence, Integrity, and Innovation.",
    },
  },
  stats: [
    { label: "Engagements", value: "50+" },
    { label: "Deployment Speed", value: "Elite" },
    { label: "Client Retention", value: "100%" },
  ],
  faqs: [
    {
      q: "What is the typical investment for a custom solution?",
      a: "Every project is unique. We provide tailored quotes based on technical complexity and business objectives after our initial consultation.",
    },
    {
      q: "What is your standard delivery timeline?",
      a: "Timelines vary by scope, but MVP-level solutions are typically deployed within 5-10 business days.",
    },
    {
      q: "Are the solutions optimized for mobile performance?",
      a: "Exclusively. We prioritize a 'Mobile-First' architecture ensuring peak performance across all devices.",
    },
    {
      q: "Do you offer post-deployment optimization?",
      a: "Yes. Continuous monitoring and SEO strategy are core components of our partnership model.",
    },
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Architecture",
      description: "High-performance web ecosystems optimized for conversion and scalability.",
      icon: "Globe",
    },
    {
      id: "app-dev",
      title: "Mobile Ecosystems",
      description: "Native and cross-platform mobile applications that drive user engagement.",
      icon: "Smartphone",
    },
    {
      id: "software",
      title: "Custom Systems",
      description: "Scalable backend architecture and custom automation tools for business efficiency.",
      icon: "Layers",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Saanvi Singh",
      company: "Saan Interior Design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop",
      quote: "The team at NexoraTech delivered a solution that far exceeded our expectations. Truly professional.",
    },
    {
      id: "2",
      name: "Amit Negi",
      company: "City News Uttarakhand",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop",
      quote: "Reliable architecture that handles our high traffic with ease. The best tech partner in the region.",
    },
    {
      id: "3",
      name: "Vikram Rawat",
      company: "Gramin Bharat",
      avatar: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=150&h=150&fit=crop",
      quote: "Simple, powerful, and effective. They understood our needs from day one.",
    },
  ],
  process: [
    {
      title: "Discovery",
      description: "Deep dive into your business model and technical requirements.",
      icon: "Target",
    },
    {
      title: "Design",
      description: "User-centric UI/UX that aligns with your brand's digital strategy.",
      icon: "Figma",
    },
    {
      title: "Engineering",
      description: "Robust development phase using modern tech stacks for stability.",
      icon: "Code2",
    },
    {
      title: "Deployment",
      description: "Optimized launch and continuous post-production support.",
      icon: "Headphones",
    },
  ],
  portfolio: [
    {
      id: "1",
      title: "City News Portal",
      category: "Regional Media",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&h=800&fit=crop",
      description: "A high-performance news ecosystem for regional media houses.",
    },
    {
      id: "2",
      title: "Gramin Connect",
      category: "Social Platform",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&h=800&fit=crop",
      description: "Bridging the digital divide with regional connectivity tools.",
    },
    {
      id: "3",
      title: "Saan Interiors",
      category: "Luxury Retail",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&h=800&fit=crop",
      description: "A visually stunning digital showroom for premium interior design.",
    },
    {
      id: "4",
      title: "Enterprise ERP",
      category: "Software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
      description: "Custom ERP solution for modern institutional management.",
    },
  ],
  products: [
    {
      id: "news-portal",
      title: "Advanced News Engine",
      description: "Ultra-fast digital publishing platform for media agencies.",
      longDescription: "Our News Engine is built for scale, supporting high concurrent traffic, SEO optimization, and instant mobile loading (AMP-ready).",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&h=800&fit=crop",
      category: "Platform",
      features: ["Ad-Tech Ready", "Regional Language Support", "Social Integration"],
    },
    {
      id: "edu-erp",
      title: "Institutional ERP",
      description: "Comprehensive management system for modern schools and colleges.",
      longDescription: "A cloud-based ERP that automates admissions, fee management, academic records, and parent-teacher communication.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
      category: "Software",
      features: ["LMS Integration", "Fee Gateway", "Mobile App for Parents"],
    },
  ],
  values: [
    {
      title: "Innovation",
      description: "Pushing the boundaries of digital engineering with cutting-edge tech.",
      icon: "Lightbulb",
    },
    {
      title: "Integrity",
      description: "Transparent partnerships built on trust and strategic alignment.",
      icon: "ShieldCheck",
    },
    {
      title: "Excellence",
      description: "Surgical precision in every line of code and user experience.",
      icon: "Award",
    },
  ],
};
