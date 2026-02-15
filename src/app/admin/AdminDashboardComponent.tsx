"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

    const filteredInquiries = inquiries.filter((inquiry) =>
        inquiry.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = async () => {
        setLoading(true);
        await fetch("/api/admin-logout", { method: "POST" });
        router.push("/admin/login");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Inquiries Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 text-sm font-semibold shadow-sm"
                    >
                        Logout
                    </button>
                </div>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Filter by service or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-white text-slate-900 placeholder:text-slate-400 transition-all shadow-sm outline-none"
                    />
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredInquiries.map((inquiry) => (
                                    <tr
                                        key={inquiry.id}
                                        onClick={() => setSelectedInquiry(inquiry)}
                                        className="hover:bg-slate-50 transition-colors cursor-pointer group"
                                    >
                                        <td className="p-4 text-sm font-semibold text-slate-900">{inquiry.service}</td>
                                        <td className="p-4 text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{inquiry.name}</td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                                                ${inquiry.status === "New"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : inquiry.status === "Contacted"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {inquiry.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-slate-500 text-right font-medium">
                                            {new Date(inquiry.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredInquiries.length === 0 && (
                            <div className="p-12 text-center text-slate-500">
                                No inquiries found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {selectedInquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedInquiry(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">{selectedInquiry.service}</h2>
                                <p className="text-sm text-slate-500 mt-1 font-medium">
                                    Received on {new Date(selectedInquiry.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedInquiry(null)}
                                className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Name</label>
                                    <p className="text-slate-900 font-semibold">{selectedInquiry.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone</label>
                                    <p className="text-slate-900 font-semibold">{selectedInquiry.phone}</p>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email</label>
                                <a href={`mailto:${selectedInquiry.email}`} className="text-blue-600 font-semibold hover:underline decoration-blue-200 hover:decoration-blue-600 transition-all">
                                    {selectedInquiry.email}
                                </a>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Message</label>
                                <p className="text-slate-700 text-sm whitespace-pre-wrap leading-relaxed">
                                    {selectedInquiry.message}
                                </p>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Update Status</label>
                                <form action={`/api/update-status?id=${selectedInquiry.id}`} method="POST">
                                    <select
                                        name="status"
                                        defaultValue={selectedInquiry.status}
                                        onChange={(e) => {
                                            e.target.form?.requestSubmit();
                                        }}
                                        className="w-full text-sm border-slate-300 rounded-xl shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-slate-900 p-3 outline-none cursor-pointer"
                                    >
                                        <option value="New">New</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 flex justify-end border-t border-slate-100">
                            <button
                                onClick={() => setSelectedInquiry(null)}
                                className="px-5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
