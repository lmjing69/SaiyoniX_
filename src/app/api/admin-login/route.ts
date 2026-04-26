import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
    ADMIN_AUTH_COOKIE,
    getAdminPassword,
    getAdminJwtSecret,
    getAdminPasswordHash,
} from "@/lib/admin-auth";
import { checkRateLimit, recordFailedAttempt, clearFailedAttempts, getClientIP } from "@/lib/rate-limit";

export async function POST(req: Request) {
    try {
        const clientIP = getClientIP();
        const rateLimitCheck = await checkRateLimit(`login:${clientIP}`, 5);

        if (!rateLimitCheck.allowed) {
            const mins = Math.ceil(rateLimitCheck.lockoutMs / 60000);
            return Response.json(
                { error: `Too many failed attempts. Try again in ${mins} minute${mins > 1 ? "s" : ""}.` },
                { status: 429 }
            );
        }

        const { password } = await req.json();
        const normalizedPassword =
            typeof password === "string" ? password.trim() : "";
        const passwordHash = getAdminPasswordHash();
        const plainPassword = getAdminPassword();
        const jwtSecret = getAdminJwtSecret();

        if (!normalizedPassword)
            return Response.json({ error: "Password required" }, { status: 400 });

        if ((!passwordHash && !plainPassword) || !jwtSecret) {
            return Response.json({ error: "Server misconfigured" }, { status: 500 });
        }

        const valid =
            (passwordHash ? bcrypt.compareSync(normalizedPassword, passwordHash) : false) ||
            (plainPassword ? normalizedPassword === plainPassword : false);

        if (!valid) {
            recordFailedAttempt(`login:${clientIP}`);
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        clearFailedAttempts(`login:${clientIP}`);

        const token = jwt.sign(
            { admin: true },
            jwtSecret,
            { expiresIn: "1d" }
        );

        (await cookies()).set(ADMIN_AUTH_COOKIE, token, {
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
