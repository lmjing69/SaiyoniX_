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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Inquiries</h1>
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 text-sm"
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
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 transition-all shadow-sm"
                    />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-gray-700/50">
                                <tr>
                                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Service</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Phone</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-right">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {filteredInquiries.map((inquiry) => (
                                    <tr
                                        key={inquiry.id}
                                        onClick={() => setSelectedInquiry(inquiry)}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer"
                                    >
                                        <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{inquiry.service}</td>
                                        <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{inquiry.phone}</td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${inquiry.status === "New"
                                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                                        : inquiry.status === "Contacted"
                                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                                    }`}
                                            >
                                                {inquiry.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-500 dark:text-gray-400 text-right">
                                            {new Date(inquiry.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredInquiries.length === 0 && (
                            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                No inquiries found.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {selectedInquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedInquiry.service}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Received on {new Date(selectedInquiry.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedInquiry(null)}
                                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 p-1"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                                    <p className="mt-1 text-gray-900 dark:text-white font-medium">{selectedInquiry.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone</label>
                                    <p className="mt-1 text-gray-900 dark:text-white font-medium">{selectedInquiry.phone}</p>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                                <a href={`mailto:${selectedInquiry.email}`} className="mt-1 block text-indigo-600 dark:text-indigo-400 hover:underline">
                                    {selectedInquiry.email}
                                </a>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
                                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                                    {selectedInquiry.message}
                                </p>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Update Status</label>
                                <form action={`/api/update-status?id=${selectedInquiry.id}`} method="POST">
                                    <select
                                        name="status"
                                        defaultValue={selectedInquiry.status}
                                        onChange={(e) => {
                                            // Optimistic update could go here, but for now we rely on form submission
                                            e.target.form?.requestSubmit();
                                        }}
                                        className="w-full text-sm border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-2.5"
                                    >
                                        <option value="New">New</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 flex justify-end">
                            <button
                                onClick={() => setSelectedInquiry(null)}
                                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
