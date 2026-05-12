import { prisma } from "@/lib/prisma";
import { validateInquiryInput } from "@/lib/inquiry";
import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { sendNewInquiryNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const clientIP = getClientIP(req);
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
        organization: validation.data.organization,
        message: validation.data.message,
      },
    });

    // Fire and forget email notification to improve response speed
    sendNewInquiryNotification({
      service: validation.data.service,
      name: validation.data.name,
      email: validation.data.email,
      phone: validation.data.phone,
      organization: validation.data.organization,
      message: validation.data.message,
    }).catch((emailError) => {
      console.error("Background email notification failed:", emailError);
    });

    return Response.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (error: unknown) {
    console.error("API Inquiry Error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to submit inquiry right now" },
      { status: 500 }
    );
  }
}
