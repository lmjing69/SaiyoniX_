import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our services including software development, AI systems, cybersecurity, and custom digital platforms.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
