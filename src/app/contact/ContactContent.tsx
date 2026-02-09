"use client";

import MotionFade from "@/components/MotionFade";
import SuccessModal from "@/components/SuccessModal";
import { useState } from "react";


export default function ContactContent() {
    const [form, setForm] = useState({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const [countryCode, setCountryCode] = useState("+91");

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers and max 10 digits
        if (/^\d*$/.test(value) && value.length <= 10) {
            setForm({ ...form, phone: value });
        }
    };

    /* UPDATED SUBMIT HANDLER */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);

        try {
            const payload = { ...form, phone: `${countryCode} ${form.phone}` };

            // Start of submission
            if (form.phone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                setLoading(false);
                return;
            }

            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error("Submission failed");
            }

            setSent(true);
            setForm({
                service: "",
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            {/* TITLE */}
            <MotionFade>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Contact SaiyoniX
                </h1>

                <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed mb-8 sm:mb-12 md:mb-16">
                    Tell us about your project or requirements. Submit the form
                    below and our team will review your request directly.
                </p>
            </MotionFade>

            {/* CONTACT FORM */}
            <form
                onSubmit={handleSubmit}
                className="border border-navy-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 max-w-4xl space-y-5 sm:space-y-6"
            >
                {/* SERVICE */}
                <div>
                    <label className="text-white text-sm sm:text-base font-medium block mb-2">
                        Service Required
                    </label>
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-colors [&>option]:bg-navy-900 [&>option]:text-white"
                    >
                        <option value="">Select Service</option>
                        <option>Website Development</option>
                        <option>Software Platform</option>
                        <option>Automation / AI System</option>
                        <option>Cybersecurity Service</option>
                        <option>Custom Project</option>
                    </select>
                </div>

                {/* NAME */}
                <div>
                    <label className="text-white text-sm sm:text-base font-medium block mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-300 placeholder:text-gray-600 focus:border-accent-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                    />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                        <label className="text-white text-sm sm:text-base font-medium block mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full bg-navy-900 border border-navy-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-300 placeholder:text-gray-600 focus:border-accent-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm sm:text-base font-medium block mb-2">
                            Phone Number
                        </label>
                        <div className="flex gap-2 w-full">
                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="bg-navy-900 border border-navy-700 rounded-lg px-2 sm:px-3 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-300 focus:border-accent-400 focus:ring-1 focus:ring-cyan-400 outline-none shrink-0 transition-colors"
                            >
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+971">🇦🇪 +971</option>
                                <option value="+61">🇦🇺 +61</option>
                                <option value="+81">🇯🇵 +81</option>
                                <option value="+49">🇩🇪 +49</option>
                                <option value="+33">🇫🇷 +33</option>
                                <option value="+86">🇨🇳 +86</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handlePhoneChange}
                                required
                                placeholder="XXXXXXXXXX"
                                className="flex-1 min-w-0 bg-navy-900 border border-navy-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-300 placeholder:text-gray-600 focus:border-accent-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                            />
                        </div>
                        <p className="text-slate-500 text-xs mt-1.5 text-right">
                            {form.phone.length}/10 digits
                        </p>
                    </div>
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="text-white text-sm sm:text-base font-medium block mb-2">
                        Project Details
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what you want to build..."
                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-300 placeholder:text-gray-600 focus:border-accent-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors resize-none"
                    />
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-cyan-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-400 active:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Sending..." : "Submit Inquiry"}
                </button>

                {sent && (
                    <SuccessModal isOpen={sent} onClose={() => setSent(false)} />
                )}
            </form>

            {/* CONTACT INFO */}
            <div className="mt-8 sm:mt-12 md:mt-16 max-w-4xl space-y-2">
                <p className="text-sm sm:text-base text-slate-400">
                    📧 info@saiyonix.com
                </p>

                <p className="text-sm sm:text-base text-slate-400">
                    Monday – Friday | 10:00 AM – 6:00 PM (IST)
                </p>
            </div>
        </section>
    );
}
