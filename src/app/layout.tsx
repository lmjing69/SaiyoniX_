import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://saiyonix.com"),
  title: {
    default: "SaiyoniX | Engineering Transformative Evolution",
    template: "%s | SaiyoniX",
  },
  description:
    "SaiyoniX is a technology-driven collective focused on building secure, intelligent, and scalable digital systems. Driving digital transformation through practical innovation.",
  keywords: ["Software Development", "AI Systems", "Cybersecurity", "Web Development", "Digital Transformation", "SaiyoniX"],
  authors: [{ name: "SaiyoniX Team" }],
  creator: "SaiyoniX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saiyonix.com",
    title: "SaiyoniX | Engineering Transformative Evolution",
    description: "Driving digital transformation through intelligent systems, secure infrastructure, and scalable technology solutions.",
    siteName: "SaiyoniX",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is added later
        width: 1200,
        height: 630,
        alt: "SaiyoniX - Engineering Transformative Evolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaiyoniX | Engineering Transformative Evolution",
    description: "Driving digital transformation through intelligent systems and scalable solutions.",
    images: ["/og-image.jpg"],
    creator: "@saiyonix", // Placeholder
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
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SaiyoniX",
    url: "https://saiyonix.com",
    logo: "https://saiyonix.com/logo.png", // Placeholder
    sameAs: [
      "https://twitter.com/saiyonix",
      "https://linkedin.com/company/saiyonix",
      "https://github.com/saiyonix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "", // Add if available
      contactType: "customer service",
      email: "info@saiyonix.com",
    },
  };



  return (
    <html lang="en">
      <body className="text-white relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
