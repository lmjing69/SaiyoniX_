import { Inquiry } from "@prisma/client";
import { prisma } from "@/lib/prisma";
// Force rebuild
import AdminDashboard from "./AdminDashboardComponent";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    try {
        const inquiries = await prisma.inquiry.findMany({
            orderBy: { createdAt: "desc" },
        });

        const serializedInquiries = inquiries.map((inquiry: Inquiry) => ({
            ...inquiry,
            createdAt: inquiry.createdAt.toISOString(),
        }));

        return <AdminDashboard inquiries={serializedInquiries} />;
    } catch (error) {
        console.error("Admin page error:", error);
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900 p-8 flex flex-col items-center justify-center">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                    <h1 className="text-2xl font-bold mb-4 text-red-600">Database Connection Error</h1>
                    <pre className="bg-slate-100 p-4 rounded-xl overflow-auto text-xs text-slate-700 border border-slate-200">
                        {error instanceof Error ? error.message : String(error)}
                    </pre>
                    <p className="mt-4 text-slate-500 text-sm">
                        Please check that your DATABASE_URL is correctly set.
                    </p>
                </div>
            </div>
        );
    }
}
