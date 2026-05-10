"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Phone
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Custom Dropdown State
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsOpen] = useState(false);

  const services = [
    "Intelligent Infrastructure",
    "Connected Ecosystems",
    "AI-Assisted Workflows",
    "Enterprise Architecture",
    "Not sure — need guidance"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedService) {
      setError("Please select an engagement domain");
      return;
    }
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("organization"), 
      email: formData.get("email"),
      service: selectedService, // Use state instead of raw formData for custom dropdown
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit inquiry";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      <div className="pt-[160px] pb-[120px] max-w-[1360px] mx-auto px-6 md:px-[80px]">
        <header className="mb-[80px]">
          <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[11px] tracking-[.25em] uppercase text-(--amber) mb-[24px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber)">
            Technical Consultation
          </ScrollReveal>
          
          <ScrollReveal delayClass="d1" className="font-display text-[clamp(48px,6vw,84px)] font-bold leading-[1.02] tracking-tight mt-[8px]">
            Engineer your<br />
            <span className="text-text-1">tomorrow, </span>
            <span className="text-(--amber)">today.</span>
          </ScrollReveal>
        </header>
        
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-[100px] items-start">
          {/* Form Section */}
          <ScrollReveal>
            {success ? (
              <div className="bg-white/[0.03] border border-emerald-500/20 rounded-[32px] p-[60px] text-center backdrop-blur-xl">
                <div className="w-[64px] h-[64px] bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-[32px]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-[28px] font-bold tracking-tight mb-[16px] text-white">System Sync Initiated</h3>
                <p className="text-[16px] text-text-1 leading-relaxed max-w-[400px] mx-auto opacity-80">
                  Your inquiry has been successfully ingested. A systems engineer will analyze your requirements and reach out within 24 hours.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-(--amber) font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                {/* Decorative background glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-(--amber)/5 rounded-full blur-[100px] pointer-events-none group-focus-within:bg-(--amber)/10 transition-colors" />
                
                <h3 className="font-display text-2xl font-bold mb-10 flex items-center gap-4 text-white">
                  <div className="w-8 h-8 rounded-lg bg-(--amber-bg) border border-(--amber-rim) flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-(--amber)" />
                  </div>
                  System Inquiry Form
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text-2">Legal Identity</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white outline-none transition-all focus:border-(--amber)/50 focus:bg-white/[0.05] placeholder:text-text-3 font-medium" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text-2">Entity / Organization</label>
                    <input 
                      name="organization" 
                      required 
                      type="text" 
                      placeholder="Company Name" 
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white outline-none transition-all focus:border-(--amber)/50 focus:bg-white/[0.05] placeholder:text-text-3 font-medium" 
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text-2">Communication Link</label>
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      placeholder="Corporate Email Address" 
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white outline-none transition-all focus:border-(--amber)/50 focus:bg-white/[0.05] placeholder:text-text-3 font-medium" 
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text-2">Engagement Domain</label>
                    <div className="relative">
                      {/* Custom Selector Trigger */}
                      <div 
                        onClick={() => setIsOpen(!isDropdownOpen)}
                        className={`w-full bg-white/[0.03] border ${isDropdownOpen ? 'border-(--amber)/50 shadow-[0_0_20px_rgba(240,168,48,0.1)]' : 'border-white/10'} rounded-xl px-5 py-4 text-[15px] text-white cursor-pointer transition-all duration-300 flex items-center justify-between group`}
                      >
                        <span className={`${!selectedService ? 'text-text-3 font-normal' : 'text-white font-medium'}`}>
                          {selectedService || "Select System Focus"}
                        </span>
                        <div className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-(--amber)' : 'text-text-3 group-hover:text-text-2'}`}>
                           <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>

                      {/* Custom Dropdown List */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-[#0d121f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2"
                          >
                            <div className="max-h-[280px] overflow-auto custom-scrollbar flex flex-col gap-1">
                              {services.map((s, i) => (
                                <motion.div
                                  key={s}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.04 }}
                                  onClick={() => {
                                    setSelectedService(s);
                                    setIsOpen(false);
                                  }}
                                  className={`px-4 py-3.5 rounded-xl text-[14px] transition-all duration-200 flex items-center justify-between group/item cursor-pointer
                                    ${selectedService === s ? 'bg-(--amber-bg) text-(--amber)' : 'text-text-2 hover:bg-white/5 hover:text-white'}
                                  `}
                                >
                                  {s}
                                  {selectedService === s && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-(--amber) shadow-[0_0_10px_rgba(240,168,48,0.5)]" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text-2">Technical Brief / Constraints</label>
                    <textarea 
                      name="message" 
                      required 
                      minLength={10} 
                      placeholder="Describe the architectural challenge, operational chaos, or future system you wish to engineer…" 
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-5 text-[15px] text-white outline-none transition-all focus:border-(--amber)/50 focus:bg-white/[0.05] placeholder:text-text-3 min-h-[160px] resize-none font-medium leading-relaxed" 
                    />
                  </div>
                  
                  {error && (
                    <div className="md:col-span-2 flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm font-medium animate-shake">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}
                  
                  <div className="md:col-span-2 pt-4">
                    <MagneticButton 
                      disabled={isSubmitting} 
                      className="w-full md:w-auto bg-(--amber) text-[#060608] rounded-xl py-5 px-12 font-bold text-base flex items-center justify-center gap-3 transition-all hover:bg-(--amber-light) disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-(--amber)/10"
                    >
                      {isSubmitting ? "Processing..." : "Submit to Engineering →"}
                    </MagneticButton>
                  </div>
                </form>
              </div>
            )}
          </ScrollReveal>

          {/* Info Side */}
          <aside className="space-y-16">
            <ScrollReveal delayClass="d1" className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl">
              <h2 className="font-display text-2xl font-bold tracking-tight mb-8 text-white">Direct Communication</h2>
              
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[.15em] uppercase text-text-3 mb-2">Electronic Mail</div>
                      <a href="mailto:contact@saiyonix.in" className="text-lg md:text-xl font-bold text-white hover:text-(--amber) transition-colors flex items-center gap-2">
                        contact@saiyonix.in
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[.15em] uppercase text-text-3 mb-2">Instant Messenger</div>
                      <a 
                        href="https://wa.me/919089669444?text=Hello%20Saiyonix%2C%20I%27m%20interested%20in%20a%20technical%20consultation%20to%20engineer%20high-performance%20solutions%20for%20my%20business%20needs."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                      >
                        Reach us on WhatsApp
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[.15em] uppercase text-text-3 mb-2">Direct Voice Line</div>
                      <a href="tel:+919089669444" className="text-lg md:text-xl font-bold text-white hover:text-(--amber) transition-colors flex items-center gap-2">
                        +91 90896 69444
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-4 text-sm text-text-2">
                  <Clock className="w-4 h-4 text-(--amber)" />
                  <span>SLA Response: <strong>Within 24 Hours</strong></span>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-2">
                  <Globe className="w-4 h-4 text-(--amber)" />
                  <span>Operations: <strong>Remote-First · Global</strong></span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="d2" className="p-8">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-(--amber) mb-6">Engagement Protocols</div>
              <p className="text-text-1 text-sm leading-relaxed mb-6 opacity-80">
                We accept engagements for end-to-end systems architecture, specialized AI pipelines, and high-security infrastructure audits.
              </p>
              <ul className="space-y-3">
                {["Retainer-based Advisory", "Fixed-scope Deployments", "Venture Partnerships"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] font-medium text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--amber)" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
