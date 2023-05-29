export const getPostById = async (
  id: string
): Promise<{ title: string; body: string; timestamp: string }> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      tags: [`post-${id}}`],
    },
  });
  const post = await res.json();

  console.log(`[${new Date().toISOString()}]`, "getPostById", id);

  return { ...post, timestamp: new Date().toISOString() };
};
