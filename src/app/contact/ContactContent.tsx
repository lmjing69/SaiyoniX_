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
        <section className="max-w-6xl mx-auto px-6 py-24">
            {/* TITLE */}
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Contact SaiyoniX
                </h1>

                <p className="text-gray-400 max-w-3xl leading-relaxed mb-16">
                    Tell us about your project or requirements. Submit the form
                    below and our team will review your request directly.
                </p>
            </MotionFade>

            {/* CONTACT FORM */}
            <form
                onSubmit={handleSubmit}
                className="border border-gray-800 rounded-xl p-8 max-w-4xl space-y-6"
            >
                {/* SERVICE */}
                <div>
                    <label className="text-white block mb-2">
                        Service Required
                    </label>
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
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
                    <label className="text-white block mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
                    />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-white block mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-white block mb-2">
                            Phone Number
                        </label>
                        <div className="flex gap-2 w-full">
                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="bg-black border border-gray-700 rounded-lg px-2 py-3 text-gray-300 focus:border-cyan-400 outline-none text-sm shrink-0"
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
                                placeholder="XXXXXXXXXX" // 10 X's
                                className="flex-1 min-w-0 bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
                            />
                        </div>
                        <p className="text-gray-500 text-xs mt-1 text-right">
                            {form.phone.length}/10 digits
                        </p>
                    </div>
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="text-white block mb-2">
                        Project Details
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what you want to build..."
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
                    />
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Submit Inquiry"}
                </button>

                {sent && (
                    <SuccessModal isOpen={sent} onClose={() => setSent(false)} />
                )}
            </form>

            {/* CONTACT INFO */}
            <div className="mt-16 max-w-4xl">
                <p className="text-gray-400">
                    📧 info@saiyonix.com
                </p>

                <p className="text-gray-400 mt-2">
                    Monday – Friday | 10:00 AM – 6:00 PM (IST)
                </p>
            </div>
        </section>
    );
}
