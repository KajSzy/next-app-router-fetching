import { Suspense } from "react";
import { RefreshData } from "./RefreshData";
import { getPostById } from "./getPostById";
import { PostPageProps } from "./params";
import { SimilarPosts } from "./SimilarPosts";

export const revalidate = 3600;

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.postId);

  return (
    <>
      <h1 className="font-serif tracking-wider text-2xl">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <p>{new Date(post.timestamp).toLocaleTimeString()}</p>
      <hr />
      <RefreshData />
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Similar Posts</h2>
        <SimilarPosts postId={params.postId} />
      </Suspense>
    </>
  );
}
