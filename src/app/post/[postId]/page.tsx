const getPostById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
};

export const generateMetadata = async () => {
  const post = await getPostById("1");
  return {
    title: post.title,
  };
};

export const generateStaticParams = async () => {
  return [];
};

export default async function PostPage({
  params,
}: {
  params: Record<"postId", string>;
}) {
  const post = await getPostById(params.postId);

  const postRenderTimeStamp = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex flex-col gap-4 rounded text-amber-100 p-4">
      <h1 className="font-mono font-bold text-2xl">{post.title}</h1>
      <p className="text-xs">{post.body}</p>
      <p>{postRenderTimeStamp}</p>
      <hr />
      <button className="bg-amber-100 text-violet-950 uppercase py-2 px-4">
        Refresh data
      </button>
    </div>
  );
}

export const revalidate = 3600;
