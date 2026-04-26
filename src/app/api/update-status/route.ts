import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_AUTH_COOKIE, isValidAdminToken } from "@/lib/admin-auth";

const ALLOWED_STATUSES = new Set(["New", "Contacted", "Completed"]);

export async function POST(req: Request) {
    const token = (await cookies()).get(ADMIN_AUTH_COOKIE)?.value;

    if (!isValidAdminToken(token)) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { id, status } = body;

        if (!id || !status || !ALLOWED_STATUSES.has(status)) {
            return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        const existingInquiry = await prisma.inquiry.findUnique({ where: { id } });

        await prisma.inquiry.update({
            where: { id },
            data: { status },
        });

        await prisma.auditLog.create({
            data: {
                action: "STATUS_CHANGE",
                inquiryId: id,
                details: JSON.stringify({
                    oldStatus: existingInquiry?.status,
                    newStatus: status,
                }),
            },
        });

        return Response.json({ success: true });
    } catch {
        return Response.json({ error: "Invalid request" }, { status: 400 });
    }
}
