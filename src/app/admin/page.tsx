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
            <div className="min-h-screen bg-black text-white p-8">
                <h1 className="text-2xl font-bold mb-4">Database Connection Error</h1>
                <pre className="bg-gray-900 p-4 rounded overflow-auto">
                    {error instanceof Error ? error.message : String(error)}
                </pre>
                <p className="mt-4 text-gray-400">
                    Check that DATABASE_URL is set in Vercel environment variables.
                </p>
            </div>
        );
    }
}
