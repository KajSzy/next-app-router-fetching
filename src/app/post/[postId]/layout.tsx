import { getPostById } from "./getPostById";
import { PostPageProps } from "./params";

export const generateMetadata = async ({ params }: PostPageProps) => {
  const post = await getPostById(params.postId);

  const postFirstWord = post.title.split(" ").at(0);

  const postRenderTimeStamp = new Date(post.timestamp).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }
  );

  return {
    title: {
      default: `${postFirstWord} | ${postRenderTimeStamp}`,
      template: `%s | ${postFirstWord} | ${postRenderTimeStamp}`,
    },
  };
};

export default async function PostPageLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4 rounded p-4 max-w-[800px] mx-auto">
      {children}
    </div>
  );
}
