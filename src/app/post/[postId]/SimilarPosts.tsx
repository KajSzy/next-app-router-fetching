import Link from "next/link";

const getSimilarPosts = async (postId: number) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as Array<{
    title: string;
    body: string;
    id: number;
  }>;

  // wait 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Fetched similar posts");

  return posts.filter((post) => post.id !== postId).slice(0, 5);
};

export const SimilarPosts = async ({ postId }: { postId: string }) => {
  const posts = await getSimilarPosts(Number(postId));
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link prefetch={false} href={`/post/${post.id}`} key={post.id}>
          <a className="text-blue-500 hover:underline">{post.title}</a>
        </Link>
      ))}
    </div>
  );
};
