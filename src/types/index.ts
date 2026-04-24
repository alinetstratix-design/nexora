export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    address: string;
    phone: string;
    whatsapp: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  nav: Array<{ title: string; href: string }>;
  sections: {
    hero: {
      line1: string;
      highlight: string;
      line2: string;
      description: string;
      socialProof: string;
    };
    services: {
      title: string;
      subtitle: string;
      description: string;
    };
    products: {
      title: string;
      subtitle: string;
      description: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      description: string;
    };
    process: {
      title: string;
      subtitle: string;
      description: string;
    };
    portfolio: {
      title: string;
      subtitle: string;
      description: string;
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      secondaryButtonText: string;
    };
    faq: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      mission: string;
      vision: string;
      valuesTitle: string;
      valuesSubtitle: string;
      valuesDescription: string;
    };
  };
  stats: Array<{ label: string; value: string }>;
  faqs: Array<{ q: string; a: string }>;
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    company: string;
    avatar: string;
    quote: string;
  }>;
  process: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  portfolio: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
  }>;
  products: Array<{
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
    features: string[];
  }>;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}
