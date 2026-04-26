import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "lamjingbakhoirom2018@gmail.com";

export interface InquiryEmailData {
    service: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (c) => map[c]);
}

export async function sendNewInquiryNotification(data: InquiryEmailData): Promise<boolean> {
    const mailOptions = {
        from: `"SaiyoniX Website" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `📬 New Inquiry: ${data.service}`,
        html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
                    📬 New Inquiry Received
                </h2>
                
                <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 16px 0;">
                    <p style="margin: 8px 0; color: #475569;">
                        <strong style="color: #1e293b;">Service:</strong> ${escapeHtml(data.service)}
                    </p>
                    <p style="margin: 8px 0; color: #475569;">
                        <strong style="color: #1e293b;">Name:</strong> ${escapeHtml(data.name)}
                    </p>
                    <p style="margin: 8px 0; color: #475569;">
                        <strong style="color: #1e293b;">Email:</strong> 
                        <a href="mailto:${escapeHtml(data.email)}" style="color: #3b82f6;">${escapeHtml(data.email)}</a>
                    </p>
                    <p style="margin: 8px 0; color: #475569;">
                        <strong style="color: #1e293b;">Phone:</strong> 
                        <a href="tel:${escapeHtml(data.phone)}" style="color: #3b82f6;">${escapeHtml(data.phone)}</a>
                    </p>
                </div>
                
                <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                    <p style="margin: 0 0 8px 0; font-weight: 600; color: #1e293b;">Message:</p>
                    <p style="margin: 0; color: #475569; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
                </div>
                
                <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
                    Submitted via SaiyoniX Contact Form • ${new Date().toLocaleString()}
                </p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error("Failed to send inquiry notification email:", error);
        return false;
    }
}