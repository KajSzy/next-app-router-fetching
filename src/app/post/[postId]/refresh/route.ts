import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;
  revalidatePath(`/post/${postId}`);
  return new Response(`Post ${postId} refreshed!`);
}
