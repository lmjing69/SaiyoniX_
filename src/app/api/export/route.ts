import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.inquiry.findMany();

  const csv = [
    "Name,Email,Phone,Service,Status,Message",
    ...data.map(
      (i) =>
        `"${i.name}","${i.email}","${i.phone}","${i.service}","${i.status}","${i.message}"`
    ),
  ].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=inquiries.csv",
    },
  });
}
