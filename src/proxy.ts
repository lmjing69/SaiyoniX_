import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin-auth")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
