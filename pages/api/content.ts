// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "node:fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "node:path";

export type ContentData = {
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentData>,
) {
  const name = req.query.name;
  if (typeof name === "string") {
    try {
      const filepath = path.resolve(process.cwd(), `content/${name}.md`);
      console.log(filepath);
      const content = await fs.readFile(filepath, { encoding: "utf-8" });
      return res.status(200).json({ content });
    } catch {}
  }
  res.status(404).end();
}
