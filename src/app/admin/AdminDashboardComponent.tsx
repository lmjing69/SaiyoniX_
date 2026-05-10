"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  LogOut, 
  Download, 
  Search, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  User, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  X
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

type Inquiry = {
    id: string;
    service: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: string;
    createdAt: string;
};

export default function AdminDashboardComponent({ inquiries }: { inquiries: Inquiry[] }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    const filteredInquiries = inquiries.filter((inquiry) =>
        inquiry.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = async () => {
        setLoading(true);
        await fetch("/api/admin-logout", { method: "POST" });
        router.push("/admin-login");
    };

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        setUpdatingId(id);
        try {
            const res = await fetch("/api/update-status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status: newStatus }),
            });
            
            if (res.ok) {
                // Optimistically update the UI before refresh if needed
                if (selectedInquiry?.id === id) {
                    setSelectedInquiry({ ...selectedInquiry, status: newStatus });
                }
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to update status:", error);
        } finally {
            setUpdatingId(null);
        }
    };

    const handleExport = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/export");
            if (res.ok) {
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `saiyonix_inquiries_${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            }
        } catch (error) {
            console.error("Failed to export:", error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusStyles = (status: string) => {
        switch (status) {
            case "New":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Contacted":
                return "bg-amber-500/10 text-amber-400 border-amber-500/20";
            case "Completed":
                return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            default:
                return "bg-gray-500/10 text-gray-400 border-gray-500/20";
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0F1A] text-white font-sans selection:bg-accent/30 selection:text-accent-light overflow-x-hidden">
            {/* Background Grid */}
            <div className="fixed inset-0 grid-overlay opacity-40 pointer-events-none" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 border border-accent/30 rounded-lg flex items-center justify-center font-extrabold text-[13px] text-accent">
                                S
                            </div>
                            <h1 className="font-display text-2xl font-bold tracking-tight">Intelligence Dashboard</h1>
                        </div>
                        <p className="text-text-3 text-sm font-mono tracking-widest uppercase opacity-60">System Inquiries Hub // Operational Control</p>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <MagneticButton
                            onClick={handleExport}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-semibold backdrop-blur-md"
                        >
                            <Download className="w-4 h-4" /> Export CSV
                        </MagneticButton>
                        <button
                            onClick={handleLogout}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all text-sm font-semibold backdrop-blur-md"
                        >
                            <LogOut className="w-4 h-4" /> Terminate Session
                        </button>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: "Total Inquiries", val: inquiries.length, icon: MessageSquare, color: "text-blue-400" },
                        { label: "New Leads", val: inquiries.filter(i => i.status === "New").length, icon: Clock, color: "text-amber-400" },
                        { label: "Completed", val: inquiries.filter(i => i.status === "Completed").length, icon: CheckCircle2, color: "text-emerald-400" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                            <div className="flex justify-between items-start mb-4">
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                <span className="font-mono text-[10px] tracking-widest text-text-3 uppercase">Active Stats</span>
                            </div>
                            <div className="text-3xl font-display font-bold mb-1">{stat.val.toString().padStart(2, '0')}</div>
                            <div className="text-text-3 text-xs uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative mb-8 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-3 group-focus-within:text-accent transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by client name, service, or phone number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-accent/30 focus:border-accent/40 text-white placeholder:text-text-3 transition-all outline-none backdrop-blur-md font-medium"
                    />
                </div>

                {/* Data Table */}
                <div className="bg-white/5 rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/[0.04] border-b border-white/10">
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Status</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Service / Architecture</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Client Name</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono text-right">Deployment Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {filteredInquiries.map((inquiry) => (
                                    <tr
                                        key={inquiry.id}
                                        onClick={() => setSelectedInquiry(inquiry)}
                                        className="hover:bg-white/[0.05] transition-all cursor-pointer group/row"
                                    >
                                        <td className="p-5">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getStatusStyles(inquiry.status)}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
                                                {inquiry.status}
                                            </span>
                                        </td>
                                        <td className="p-5">
                                            <div className="text-sm font-semibold text-white group-hover/row:text-accent transition-colors">{inquiry.service}</div>
                                            <div className="text-[10px] text-text-2 font-mono mt-1 uppercase tracking-tighter">ID: {inquiry.id.slice(-8)}</div>
                                        </td>
                                        <td className="p-5">
                                            <div className="text-sm text-text-1 font-medium">{inquiry.name}</div>
                                        </td>
                                        <td className="p-5 text-right">
                                            <div className="text-xs text-text-2 font-mono">
                                                {new Date(inquiry.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                            </div>
                                            <div className="text-[10px] text-accent/60 font-mono mt-1 opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center justify-end gap-1">
                                                DETAILS <ChevronRight className="w-2.5 h-2.5" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredInquiries.length === 0 && (
                            <div className="p-24 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-6 border border-white/10">
                                    <Search className="w-6 h-6 text-text-3" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">No Records Detected</h3>
                                <p className="text-text-3 text-sm max-w-xs mx-auto">No inquiries match the current filter criteria within the systems core.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Premium Details Modal */}
            <AnimatePresence>
                {selectedInquiry && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#040407]/90 backdrop-blur-xl" 
                            onClick={() => setSelectedInquiry(null)} 
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#0d121f] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden z-60"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-white/5 flex justify-between items-start bg-white/[0.01]">
                                <div>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest mb-4 ${getStatusStyles(selectedInquiry.status)}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
                                        {selectedInquiry.status}
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white">{selectedInquiry.service}</h2>
                                    <div className="flex items-center gap-2 mt-2 text-text-3 font-mono text-[10px] uppercase tracking-widest">
                                        <ShieldCheck className="w-3 h-3 text-accent" /> Secure Communication Line
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedInquiry(null)}
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-text-2 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-8 grid md:grid-cols-2 gap-10">
                                {/* Left Side: Client Data */}
                                <div className="space-y-8">
                                    <div className="group">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2 opacity-60 font-mono">Client Identity</label>
                                        <div className="flex items-center gap-3 text-white">
                                            <User className="w-4 h-4 text-text-3" />
                                            <span className="text-lg font-semibold">{selectedInquiry.name}</span>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2 opacity-60 font-mono">Communication Channels</label>
                                        <div className="space-y-3">
                                            <a href={`mailto:${selectedInquiry.email}`} className="flex items-center gap-3 text-text-2 hover:text-accent transition-colors">
                                                <Mail className="w-4 h-4" />
                                                <span className="text-sm font-medium">{selectedInquiry.email}</span>
                                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a href={`tel:${selectedInquiry.phone}`} className="flex items-center gap-3 text-text-2 hover:text-accent transition-colors">
                                                <Phone className="w-4 h-4" />
                                                <span className="text-sm font-medium">{selectedInquiry.phone}</span>
                                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block opacity-60 font-mono">Administrative Control</label>
                                        <div className="relative">
                                            <select
                                                value={selectedInquiry.status}
                                                onChange={(e) => handleStatusUpdate(selectedInquiry.id, e.target.value)}
                                                disabled={updatingId === selectedInquiry.id}
                                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none cursor-pointer focus:ring-1 focus:ring-accent/40 transition-all appearance-none"
                                            >
                                                <option value="New">Status: New Request</option>
                                                <option value="Contacted">Status: Active Lead</option>
                                                <option value="Completed">Status: Sync Resolved</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-3 rotate-90 pointer-events-none" />
                                        </div>
                                        {updatingId === selectedInquiry.id && (
                                            <div className="mt-2 text-[9px] font-mono text-accent animate-pulse">SYNCHRONIZING STATUS DATA...</div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Message Payload */}
                                <div className="flex flex-col h-full">
                                    <label className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block opacity-60 font-mono">Message Payload</label>
                                    <div className="flex-1 bg-[#040407]/50 border border-white/5 rounded-2xl p-5 overflow-auto max-h-[280px] custom-scrollbar">
                                        <p className="text-text-2 text-sm leading-relaxed font-sans whitespace-pre-wrap italic">
                                            &ldquo;{selectedInquiry.message}&rdquo;
                                        </p>
                                    </div>
                                    <div className="mt-4 text-[10px] text-text-3 font-mono uppercase text-right">
                                        Ingested: {new Date(selectedInquiry.createdAt).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-white/[0.02] p-6 flex justify-end border-t border-white/5">
                                <button
                                    onClick={() => setSelectedInquiry(null)}
                                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all"
                                >
                                    Close Interface
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
