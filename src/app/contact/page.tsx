"use client";

import MotionFade from "@/components/MotionFade";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSent(true);
      setForm({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong. Try again.");
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
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91XXXXXXXXXX"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-cyan-400 outline-none"
            />
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
          <p className="text-green-400 mt-4">
            ✅ Inquiry sent successfully. Our team will contact you soon.
          </p>
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
