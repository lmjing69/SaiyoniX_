import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ADMIN_AUTH_COOKIE, isValidAdminToken } from "@/lib/admin-auth";

function sanitizeCSVField(field: string): string {
  const sanitized = field.replace(/"/g, '""');
  if (/^[=+\-@\t\r\n]/.test(sanitized) || sanitized.includes(",") || sanitized.includes('"')) {
    return `"${sanitized}"`;
  }
  return sanitized;
}

export async function GET() {
  const token = (await cookies()).get(ADMIN_AUTH_COOKIE)?.value;

  if (!isValidAdminToken(token)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await prisma.inquiry.findMany({
    where: { deletedAt: null },
  });

  const csv = [
    "Name,Email,Phone,Service,Status,Message",
    ...data.map(
      (i) =>
        `${sanitizeCSVField(i.name)},${sanitizeCSVField(i.email)},${sanitizeCSVField(i.phone)},${sanitizeCSVField(i.service)},${sanitizeCSVField(i.status)},${sanitizeCSVField(i.message)}`
    ),
  ].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=inquiries.csv",
      "Cache-Control": "no-store",
    },
  });
}
