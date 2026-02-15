"use client";

import MotionFade from "@/components/MotionFade";
import SuccessModal from "@/components/SuccessModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [errors, setErrors] = useState<{ phone?: string }>({});

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors.phone && e.target.name === "phone") {
            setErrors({ ...errors, phone: undefined });
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 15) {
            setForm({ ...form, phone: value });
            if (errors.phone) {
                setErrors({ ...errors, phone: undefined });
            }
        }
    };

    /* UPDATED SUBMIT HANDLER */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);
        setErrors({});

        try {
            const payload = { ...form };

            // Validation
            if (form.phone.length < 10) {
                setErrors({ phone: "Please enter a valid phone number (at least 10 digits)." });
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
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Contact SaiyoniX
                    </h1>

                    <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        Tell us about your project or requirements. Submit the form
                        below and our team will review your request directly.
                    </p>
                </div>
            </MotionFade>

            {/* CONTACT FORM */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-8 md:p-10 space-y-6"
                >
                    {/* SERVICE */}
                    <div>
                        <label className="text-slate-900 text-sm sm:text-base font-bold block mb-2">
                            Service Required
                        </label>
                        <div className="relative">
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none text-sm sm:text-base cursor-pointer"
                            >
                                <option value="" className="text-slate-400">Select Service</option>
                                <option>Website Development</option>
                                <option>Software Platform</option>
                                <option>Automation / AI System</option>
                                <option>Cybersecurity Service</option>
                                <option>Custom Project</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    {/* NAME */}
                    <div>
                        <label className="text-slate-900 text-sm sm:text-base font-bold block mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm sm:text-base"
                        />
                    </div>

                    {/* EMAIL + PHONE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-slate-900 text-sm sm:text-base font-bold block mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label className="text-slate-900 text-sm sm:text-base font-bold block mb-2">
                                Phone Number
                            </label>
                            <div className="relative w-full">
                                <motion.div
                                    animate={errors.phone ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                                    transition={{ duration: 0.4 }}
                                >
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handlePhoneChange}
                                        required
                                        placeholder="Phone Number (e.g. 9876543210)"
                                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white outline-none transition-all text-sm sm:text-base ${errors.phone
                                            ? "border-red-500 ring-2 ring-red-100 focus:border-red-500 focus:ring-red-100"
                                            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                            }`}
                                        maxLength={15}
                                    />
                                </motion.div>
                                <AnimatePresence>
                                    {errors.phone && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute right-3 top-3.5 text-red-500"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1 animate-pulse">
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="text-slate-900 text-sm sm:text-base font-bold block mb-2">
                            Project Details
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us what you want to build..."
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none text-sm sm:text-base"
                        />
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-xl text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            "Submit Inquiry"
                        )}
                    </button>

                    {sent && (
                        <SuccessModal isOpen={sent} onClose={() => setSent(false)} />
                    )}
                </form>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-12 text-center space-y-3">
                <p className="text-slate-600 font-medium">
                    Questions? Email us directly at <a href="mailto:info@saiyonix.com" className="text-blue-600 hover:text-blue-800 font-bold underline decoration-blue-200 hover:decoration-blue-800 transition-all">info@saiyonix.com</a>
                </p>

                <p className="text-sm text-slate-500">
                    Monday – Friday | 10:00 AM – 6:00 PM (IST)
                </p>
            </div>
        </section>
    );
}
