import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  if (request.headers.get("secret") !== process.env.SECRET_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  const path = request.nextUrl.searchParams.get("path");
  if (!path) {
    return new Response("Missing path", { status: 400 });
  }
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
