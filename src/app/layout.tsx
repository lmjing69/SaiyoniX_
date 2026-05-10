import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';

import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saiyonix.com"),
  title: {
    default: "SaiyoniX | Engineering the Systems of Tomorrow",
    template: "%s | SaiyoniX",
  },
  description:
    "SaiyoniX is a systems engineering collective building secure, intelligent, and scalable digital infrastructure. Driving transformation through precision engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} relative`}>
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
