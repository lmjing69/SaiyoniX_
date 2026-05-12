import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Saiyonix terms of service outlining the agreement between you and Saiyonix.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      body: "By accessing or using the Saiyonix website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.",
    },
    {
      title: "Services Description",
      body: "Saiyonix provides systems engineering, technology consulting, and software development services including but not limited to intelligent infrastructure design, ecosystem integration, AI-assisted workflow automation, and enterprise architecture consulting. Specific deliverables and scope are defined in individual project agreements.",
    },
    {
      title: "Client Responsibilities",
      body: "Clients are responsible for providing accurate project requirements, timely feedback during development cycles, and necessary access to existing systems and data required for integration work. Delays resulting from insufficient client-side availability may impact project timelines.",
    },
    {
      title: "Intellectual Property",
      body: "Unless otherwise specified in a project agreement, all intellectual property created during an engagement is transferred to the client upon full payment. Saiyonix retains the right to use general methodologies, frameworks, and non-client-specific tools developed during engagements. Saiyonix proprietary tools and platforms remain our intellectual property.",
    },
    {
      title: "Payment Terms",
      body: "Payment terms are defined in individual project agreements. Standard terms include a project initiation deposit, milestone-based payments, and a final payment upon delivery. Late payments may incur interest at 1.5% per month on outstanding balances.",
    },
    {
      title: "Limitation of Liability",
      body: "To the maximum extent permitted by law, Saiyonix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services. Our total liability shall not exceed the total fees paid by the client for the specific engagement in question.",
    },
    {
      title: "Governing Law",
      body: "These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation, and if necessary, binding arbitration.",
    },
    {
      title: "Contact",
      body: "For questions about these terms, contact us at legal@saiyonix.com.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-[760px] px-6 pt-40 md:pt-48 pb-24 md:pb-32">
        <div className="inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.16em] uppercase text-[#f0a830] font-mono mb-5">
          <span className="w-[22px] h-px bg-[#f0a830]" />
          Legal
        </div>
        <h1 className="text-[clamp(34px,4.5vw,56px)] font-extrabold tracking-[-0.03em] leading-[1.06] mb-4">
          Terms of Service
        </h1>
        <p className="text-[14px] text-white/26 mb-16">
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
