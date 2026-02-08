import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with SaiyoniX for your technology needs. Submit an inquiry for software development, AI, or consulting.",
};

export default function ContactPage() {
    return <ContactContent />;
}
