import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    /* ---------- VALIDATION ---------- */

    if (!data.name || !data.email || !data.phone || !data.service) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      !process.env.WA_TOKEN ||
      !process.env.WA_PHONE_ID ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      return Response.json(
        { error: "Environment variables missing" },
        { status: 500 }
      );
    }

    /* ---------- MESSAGE FORMAT ---------- */

    const message = `
🚀 New SaiyoniX Inquiry

🛠 Service: ${data.service}
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}

📝 Message:
${data.message || "No extra message"}
    `;

    /* ---------- SEND WHATSAPP ---------- */

    const waResponse = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.WA_PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",

          // Personal number receiving inquiry
          to: "917085731916",

          type: "text",
          text: { body: message },
        }),
      }
    );

    const waData = await waResponse.json();

    if (!waResponse.ok) {
      console.error("WhatsApp API Error:", waData);
    }

    /* ---------- EMAIL BACKUP ---------- */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SaiyoniX Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Website Inquiry – SaiyoniX",
      text: message,
    });

    return Response.json({
      success: true,
      whatsappResponse: waData,
    });

  } catch (err) {
    console.error("Server Error:", err);

    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
