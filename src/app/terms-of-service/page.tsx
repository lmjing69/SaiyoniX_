import React from "react";
import MotionFade from "@/components/MotionFade";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Review the Terms of Service for using SaiyoniX's website and services.",
};

export default function TermsOfService() {
    return (
        <section className="bg-black text-gray-300 min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <MotionFade>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-sm text-gray-500">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </MotionFade>

                <div className="prose prose-invert max-w-none space-y-6">
                    <p className="leading-relaxed">
                        Welcome to SaiyoniX! By accessing or using our website and services,
                        you agree to be bound by these Terms of Service. If you do not agree
                        to these terms, please do not use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        1. Use of Services
                    </h2>
                    <p>
                        You agree to use our website and services only for lawful purposes and
                        in a way that does not infringe the rights of, restrict, or inhibit
                        anyone else's use and enjoyment of the website. Prohibited behavior
                        includes harassing or causing distress or inconvenience to any other
                        user, transmitting obscene or offensive content, or disrupting the
                        normal flow of dialogue within our website.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        2. Intellectual Property
                    </h2>
                    <p>
                        The content, layout, design, data, databases, and graphics on this
                        website are protected by intellectual property laws and are owned by
                        SaiyoniX, unless otherwise stated. You utilize standard permissions
                        granted to view this site for your personal, non-commercial use.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        3. Limitation of Liability
                    </h2>
                    <p>
                        SaiyoniX will not be liable for any direct, indirect, incidental,
                        consequential, or punitive damages arising out of your access to, or
                        use of, the website or services. This includes damages to, or viruses
                        that may infect, your computer equipment or other property.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        4. Changes to Terms
                    </h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will do so
                        by posting the new terms on the website. Your continued use of the
                        website after any such changes constitutes your acceptance of the new
                        Terms of Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-text-primary mt-8">
                        5. Contact Us
                    </h2>
                    <p>
                        If you have any questions about these Terms, please contact us at{" "}
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
