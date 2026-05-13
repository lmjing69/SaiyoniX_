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
  X,
  Trash2,
  RotateCcw,
  Trash,
  Inbox
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Logo from "@/components/ui/Logo";

type Inquiry = {
    id: string;
    service: string;
    name: string;
    email: string;
    phone: string;
    organization: string | null;
    message: string;
    status: string;
    createdAt: string;
    deletedAt: string | null;
};

export default function AdminDashboardComponent({ inquiries }: { inquiries: Inquiry[] }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [updatingId, setUpdatingId] = useState<string | null>(null);
    const [view, setView] = useState<"active" | "trash">("active");

    const activeInquiries = inquiries.filter(i => !i.deletedAt);
    const trashInquiries = inquiries.filter(i => !!i.deletedAt);

    const displayInquiries = (view === "active" ? activeInquiries : trashInquiries).filter((inquiry) =>
        inquiry.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.organization?.toLowerCase().includes(searchTerm.toLowerCase())
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

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!confirm("Move this inquiry to trash?")) return;
        
        setUpdatingId(id);
        try {
            const res = await fetch("/api/delete-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) router.refresh();
        } finally {
            setUpdatingId(null);
        }
    };

    const handleRestore = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setUpdatingId(id);
        try {
            const res = await fetch("/api/restore-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) router.refresh();
        } finally {
            setUpdatingId(null);
        }
    };

    const handlePermanentDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!confirm("PERMANENTLY delete this inquiry? This cannot be undone.")) return;
        
        setUpdatingId(id);
        try {
            const res = await fetch("/api/permanent-delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) router.refresh();
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
                        <div className="flex items-center gap-4 mb-4">
                            <Logo size={42} />
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

                {/* Stats & View Toggler */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                        {[
                            { label: "Active Inquiries", val: activeInquiries.length, icon: MessageSquare, color: "text-blue-400" },
                            { label: "New Leads", val: activeInquiries.filter(i => i.status === "New").length, icon: Clock, color: "text-amber-400" },
                            { label: "Trash Bin", val: trashInquiries.length, icon: Trash2, color: "text-red-400" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                    <span className="font-mono text-[10px] tracking-widest text-text-3 uppercase">Operational</span>
                                </div>
                                <div className="text-3xl font-display font-bold mb-1">{stat.val.toString().padStart(2, '0')}</div>
                                <div className="text-text-3 text-xs uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setView("active")}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${view === "active" ? "bg-white/10 text-white shadow-lg" : "text-text-3 hover:text-white"}`}
                        >
                            <Inbox className="w-4 h-4" /> Inbox
                        </button>
                        <button
                            onClick={() => setView("trash")}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${view === "trash" ? "bg-red-500/20 text-red-400 shadow-lg" : "text-text-3 hover:text-red-400"}`}
                        >
                            <Trash2 className="w-4 h-4" /> Trash
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-3 group-focus-within:text-accent transition-colors" />
                    <input
                        type="text"
                        placeholder={`Search within ${view === 'active' ? 'active' : 'deleted'} records...`}
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
                                <tr className="bg-white/4 border-b border-white/10">
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Status</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Service / Architecture</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono">Client Name</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono text-right">{view === 'active' ? 'Deployment Date' : 'Deletion Status'}</th>
                                    <th className="p-5 text-[10px] font-bold text-text-2 uppercase tracking-[0.2em] font-mono text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {displayInquiries.map((inquiry) => {
                                    const daysLeft = inquiry.deletedAt 
                                        ? 30 - Math.floor((new Date().getTime() - new Date(inquiry.deletedAt).getTime()) / (1000 * 60 * 60 * 24))
                                        : null;

                                    return (
                                        <tr
                                            key={inquiry.id}
                                            onClick={() => setSelectedInquiry(inquiry)}
                                            className={`hover:bg-white/5 transition-all cursor-pointer group/row ${updatingId === inquiry.id ? 'opacity-50 pointer-events-none' : ''}`}
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
                                                {view === 'active' ? (
                                                    <>
                                                        <div className="text-xs text-text-2 font-mono">
                                                            {new Date(inquiry.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                                        </div>
                                                        <div className="text-[10px] text-accent/60 font-mono mt-1 opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center justify-end gap-1">
                                                            DETAILS <ChevronRight className="w-2.5 h-2.5" />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="flex flex-col items-end gap-1">
                                                        <span className={`text-[10px] font-mono uppercase tracking-widest ${daysLeft! <= 5 ? 'text-red-400' : 'text-amber-400'}`}>
                                                            {daysLeft} Days to Purge
                                                        </span>
                                                        <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full ${daysLeft! <= 5 ? 'bg-red-500' : 'bg-amber-500'}`} 
                                                                style={{ width: `${(daysLeft! / 30) * 100}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-5" onClick={(e) => e.stopPropagation()}>
                                                <div className="flex items-center justify-center gap-2">
                                                    {view === 'active' ? (
                                                        <button
                                                            onClick={(e) => handleDelete(inquiry.id, e)}
                                                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-3 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all"
                                                            title="Move to Trash"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    ) : (
                                                        <>
                                                            <button
                                                                onClick={(e) => handleRestore(inquiry.id, e)}
                                                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-3 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                                                                title="Restore Inquiry"
                                                            >
                                                                <RotateCcw className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={(e) => handlePermanentDelete(inquiry.id, e)}
                                                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-3 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all"
                                                                title="Permanently Delete"
                                                            >
                                                                <Trash className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {displayInquiries.length === 0 && (
                            <div className="p-24 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-6 border border-white/10">
                                    {view === 'active' ? <Search className="w-6 h-6 text-text-3" /> : <Trash2 className="w-6 h-6 text-text-3" />}
                                </div>
                                <h3 className="text-lg font-bold mb-2">No Records Detected</h3>
                                <p className="text-text-3 text-sm max-w-xs mx-auto">
                                    {view === 'active' 
                                        ? "No active inquiries match the current filter criteria within the systems core."
                                        : "The trash bin is currently empty. No records scheduled for purging."}
                                </p>
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
                            className="absolute inset-0 bg-bg/90 backdrop-blur-xl" 
                            onClick={() => setSelectedInquiry(null)} 
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#0d121f] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden z-60"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-white/5 flex justify-between items-start bg-white/1">
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
                                        <div className="space-y-3 text-white">
                                            <div className="flex items-center gap-3">
                                                <User className="w-4 h-4 text-text-3" />
                                                <span className="text-lg font-semibold">{selectedInquiry.name}</span>
                                            </div>
                                            {selectedInquiry.organization && (
                                                <div className="flex items-center gap-3 text-text-1">
                                                    <ShieldCheck className="w-4 h-4 text-accent/50" />
                                                    <span className="text-sm font-medium">{selectedInquiry.organization}</span>
                                                </div>
                                            )}
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
                                                className="w-full text-sm bg-[#1a1f2e] border border-white/20 rounded-xl px-4 py-3.5 text-white outline-none cursor-pointer focus:ring-2 focus:ring-accent/40 hover:border-white/40 transition-all appearance-none font-medium"
                                            >
                                                <option value="New" className="bg-[#0d121f] text-white">Status: New Request</option>
                                                <option value="Contacted" className="bg-[#0d121f] text-white">Status: Active Lead</option>
                                                <option value="Completed" className="bg-[#0d121f] text-white">Status: Sync Resolved</option>
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
                                    <div className="flex-1 bg-bg/50 border border-white/5 rounded-2xl p-5 overflow-auto max-h-[280px] custom-scrollbar">
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
                            <div className="bg-white/2 p-6 flex justify-end border-t border-white/5">
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
