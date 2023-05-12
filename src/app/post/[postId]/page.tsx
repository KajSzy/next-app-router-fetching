import { cache } from "react";
import { RefreshData } from "./RefreshData";
import { PostPageProps } from "./params";

const getPostById = cache(
  async (
    id: string
  ): Promise<{ title: string; body: string; timestamp: string }> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: {
          tags: [`post-${id}}`],
        },
      }
    );
    const post = await res.json();

    console.log(`[${new Date().toISOString()}]`, "getPostById", id);

    return { ...post, timestamp: new Date().toISOString() };
  }
);

export const generateMetadata = async ({ params }: PostPageProps) => {
  const post = await getPostById(params.postId);
  return {
    title: post.title,
  };
};

export const generateStaticParams = async () => {
  return [];
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.postId);

  const postRenderTimeStamp = new Date(post.timestamp).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }
  );

  return (
    <div className="flex flex-col gap-4 rounded p-4 max-w-[800px] mx-auto">
      <h1 className="font-serif tracking-wider text-2xl">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <p>{postRenderTimeStamp}</p>
      <hr />
      <RefreshData />
    </div>
  );
}

export const runtime = "edge";
