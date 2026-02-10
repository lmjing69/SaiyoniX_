import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { password } = await req.json();

        if (!password)
            return Response.json({ error: "Password required" }, { status: 400 });

        // TEMPORARY HARDCODE - bypassing env variable parsing issue
        const HASH = "$2b$10$MnzNbYfo.6ri6URV7ep4hO49R6DNfb/65o2Wc.JD6Xcs1AvVb9JwC";

        const valid = bcrypt.compareSync(password, HASH);

        console.log("Password validation result:", valid);

        if (!valid)
            return Response.json({ error: "Unauthorized" }, { status: 401 });

        const token = jwt.sign(
            { admin: true },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        );

        (await cookies()).set("admin-auth", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        return Response.json({ success: true });

    } catch {
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
