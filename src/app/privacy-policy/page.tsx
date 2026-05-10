import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Saiyonix privacy policy detailing how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      body: "We collect information you provide directly to us — such as your name, email address, organization name, and project details — when you fill out our contact form, subscribe to communications, or engage with our services. We also collect limited technical information automatically, including IP addresses, browser type, and page views, to improve our platform experience.",
    },
    {
      title: "How We Use Your Information",
      body: "We use collected information to respond to your inquiries, deliver our engineering and consulting services, improve our website and tools, and communicate relevant updates. We never sell, rent, or share your personal data with third parties for their marketing purposes.",
    },
    {
      title: "Data Security",
      body: "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using TLS 1.3, and our internal systems follow zero-trust architecture principles.",
    },
    {
      title: "Cookies & Analytics",
      body: "We use minimal, privacy-respecting analytics to understand how visitors interact with our website. We do not use third-party advertising cookies. Any analytics cookies we deploy are first-party and can be opted out of through your browser settings.",
    },
    {
      title: "Your Rights",
      body: "You have the right to access, correct, or delete your personal data at any time. You may also request a copy of all data we hold about you. To exercise any of these rights, contact us at privacy@saiyonix.com.",
    },
    {
      title: "Contact",
      body: "For any privacy-related questions or concerns, contact our team at privacy@saiyonix.com. We aim to respond to all privacy inquiries within 48 hours.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-[760px] px-6 pt-40 md:pt-48 pb-24 md:pb-32">
        <div className="inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.16em] uppercase text-[#f0a830] font-mono mb-5">
          <span className="w-[22px] h-[1px] bg-[#f0a830]" />
          Legal
        </div>
        <h1 className="text-[clamp(34px,4.5vw,56px)] font-extrabold tracking-[-0.03em] leading-[1.06] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-white/[0.26] mb-16">
          Last updated: January 2024
        </p>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[18px] font-bold tracking-[-0.02em] mb-3">
                {section.title}
              </h2>
              <p className="text-[15px] text-white/50 leading-[1.78]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
