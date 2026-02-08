import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    const token = req.cookies.get("admin-auth")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/admin-login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
