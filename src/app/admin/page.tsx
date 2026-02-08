import { prisma } from "@/lib/prisma";
// Force rebuild
import AdminDashboard from "./AdminDashboardComponent";

export default async function AdminPage() {
    const inquiries = await prisma.inquiry.findMany({
        orderBy: { createdAt: "desc" },
    });

    const serializedInquiries = inquiries.map((inquiry) => ({
        ...inquiry,
        createdAt: inquiry.createdAt.toISOString(),
    }));

    return <AdminDashboard inquiries={serializedInquiries} />;
}
