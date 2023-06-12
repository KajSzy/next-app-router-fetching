export const getPostById = async (
  id: string
): Promise<{ title: string; body: string; timestamp: number }> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      tags: [`post-${id}}`],
    },
  });
  const post = await res.json();

  // wait 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Fetched post", id);

  return { ...post, timestamp: Date.now() };
};
