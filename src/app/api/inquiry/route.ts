import { prisma } from "@/lib/prisma";
import { validateInquiryInput } from "@/lib/inquiry";
import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { sendNewInquiryNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const clientIP = getClientIP();
    const rateLimitCheck = await checkRateLimit(`inquiry:${clientIP}`, 10);

    if (!rateLimitCheck.allowed) {
      return Response.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const payload: unknown = await req.json();
    const validation = validateInquiryInput(payload);

    if (!validation.success) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        service: validation.data.service,
        name: validation.data.name,
        email: validation.data.email,
        phone: validation.data.phone,
        message: validation.data.message,
      },
    });

    sendNewInquiryNotification({
      service: validation.data.service,
      name: validation.data.name,
      email: validation.data.email,
      phone: validation.data.phone,
      message: validation.data.message,
    });

    return Response.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Unable to submit inquiry right now" },
      { status: 500 }
    );
  }
}
