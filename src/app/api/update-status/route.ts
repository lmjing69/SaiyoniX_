import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const formData = await req.formData();
    const status = formData.get("status") as string;

    await prisma.inquiry.update({
        where: { id: id! },
        data: { status },
    });

    return Response.redirect(new URL("/admin", req.url));
}
