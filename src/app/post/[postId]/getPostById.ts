export const getPostById = async (
  id: string
): Promise<{ title: string; body: string; timestamp: number }> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      tags: [`post-${id}}`],
    },
  });
  const post = await res.json();

  return { ...post, timestamp: Date.now() };
};
