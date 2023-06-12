import { RefreshData } from "./RefreshData";
import { getPostById } from "./getPostById";
import { PostPageProps } from "./params";

export const generateStaticParams = async () => {
  return [];
};

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
    </>
  );
}
