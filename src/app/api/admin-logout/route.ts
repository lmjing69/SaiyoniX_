import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete("admin-auth");
  return Response.json({ success: true });
}
