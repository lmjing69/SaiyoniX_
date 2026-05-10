import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
    ADMIN_AUTH_COOKIE,
    getAdminJwtSecret,
} from "@/lib/admin-auth";

const TEST_HASH = "$2b$10$G9DTGzCTH6HgiBy0tHuMw.dLZmo6BY0l0cYEWdnJNpp7B5SfYiQGK";

export async function POST(req: Request) {
    try {
        const { password } = await req.json();
        const normalizedPassword = typeof password === "string" ? password.trim() : "";
        
        const jwtSecret = getAdminJwtSecret();

        if (!normalizedPassword)
            return Response.json({ error: "Password required" }, { status: 400 });

        if (!jwtSecret) {
            return Response.json({ error: "Server misconfigured - JWT_SECRET" }, { status: 500 });
        }

        const valid = await bcrypt.compare(normalizedPassword, TEST_HASH);
        
        if (!valid) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const token = jwt.sign(
            { admin: true },
            jwtSecret,
            { algorithm: "HS256", expiresIn: "1d" }
        );

        (await cookies()).set(ADMIN_AUTH_COOKIE, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        return Response.json({ success: true });

    } catch (err) {
        console.error("Login error:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}