import type { Metadata } from "next";
import HeroCinematic from "@/components/home/HeroCinematic";

export const metadata: Metadata = {
  title: "Home",
  description: "Driving digital transformation through intelligent systems, secure infrastructure, and scalable technology solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroCinematic />
      {/* existing sections below */}
    </main>
  );
}