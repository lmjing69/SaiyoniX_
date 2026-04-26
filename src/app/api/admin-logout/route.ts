import { cookies } from "next/headers";
import { ADMIN_AUTH_COOKIE } from "@/lib/admin-auth";

export async function POST() {
  (await cookies()).delete(ADMIN_AUTH_COOKIE);
  return Response.json({ success: true });
}
