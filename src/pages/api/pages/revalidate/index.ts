import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.query.path as string;

  if (!path) {
    return res.status(400).send("Missing path");
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error revalidating");
  }
}
