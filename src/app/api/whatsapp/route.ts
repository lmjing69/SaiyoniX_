export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `
New Inquiry – SaiyoniX Website

Service: ${data.service}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
    `;

    await fetch(
      "https://graph.facebook.com/v19.0/976775765519325/messages",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "917085731916",
          type: "text",
          text: { body: message },
        }),
      }
    );

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: true });
  }
}
