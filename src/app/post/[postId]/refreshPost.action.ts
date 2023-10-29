"use server";

import { revalidatePath } from "next/cache";

export const refreshPost = async (postId: string) => {
  revalidatePath(`/post/${postId}`);
  return true;
};
