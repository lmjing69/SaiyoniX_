import React from "react";
import MotionFade from "@/components/MotionFade";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read our Privacy Policy to understand how SaiyoniX collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <section className="bg-black text-gray-300 min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <MotionFade>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </MotionFade>

                <div className="prose prose-invert max-w-none space-y-6">
                    <p className="leading-relaxed">
                        At SaiyoniX, we prioritize your privacy and are committed to protecting
                        the personal information you share with us. This Privacy Policy outlines
                        how we collect, use, and safeguard your data when you visit our website
                        or use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        1. Information We Collect
                    </h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us
                        when you express an interest in obtaining information about us or our
                        products and services, when you participate in activities on the website,
                        or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Personal Data:</strong> Name, email address, phone number, and
                            other contact details.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information automatically collected regarding
                            your device, browser, IP address, and how you interact with our website.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        2. How We Use Your Information
                    </h2>
                    <p>
                        We use the information we collect or receive:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To facilitate account creation and logon processes.</li>
                        <li>To send you marketing and promotional communications.</li>
                        <li>To respond to user inquiries/offer support to users.</li>
                        <li>To protect our Services.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        3. Sharing Your Information
                    </h2>
                    <p>
                        We only share information with your consent, to comply with laws, to
                        provide you with services, to protect your rights, or to fulfill
                        business obligations. We do not sell your personal data to third parties.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        4. Data Security
                    </h2>
                    <p>
                        We implement appropriate technical and organizational security measures
                        designed to protect the security of any personal information we process.
                        However, please also remember that we cannot guarantee that the internet
                        itself is 100% secure.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        5. Contact Us
                    </h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at{" "}
                        <a
                            href="mailto:info@saiyonix.com"
                            className="text-cyan-400 hover:underline"
                        >
                            info@saiyonix.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
