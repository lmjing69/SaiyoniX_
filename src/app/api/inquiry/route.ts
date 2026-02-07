import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await prisma.inquiry.create({
      data: {
        service: data.service,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: true });
  }
}
