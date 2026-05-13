import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_AUTH_COOKIE, isValidAdminToken } from "@/lib/admin-auth";

export async function POST(req: Request) {
    const token = (await cookies()).get(ADMIN_AUTH_COOKIE)?.value;

    if (!isValidAdminToken(token)) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { id } = body;

        if (!id) {
            return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        await prisma.inquiry.update({
            where: { id },
            data: { deletedAt: null },
        });

        await prisma.auditLog.create({
            data: {
                action: "RESTORE",
                inquiryId: id,
                details: "Inquiry restored from trash",
            },
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Restore inquiry error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
