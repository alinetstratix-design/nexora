import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/ui/floating-actions";
import { siteConfig } from "@/config/site";


export const metadata: Metadata = {
  metadataBase: new URL("https://nexora.example.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "website developer Haridwar", 
    "app developer Roorkee", 
    "web design Haridwar", 
    "software company Roorkee", 
    "NexoraTech", 
    "local business growth", 
    "digital marketing Haridwar"
  ],
  authors: [{ name: "NexoraTech Team" }],
  creator: "NexoraTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora.example.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
