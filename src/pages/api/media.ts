import type { NextApiRequest, NextApiResponse } from 'next';
import { readdirSync } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = readdirSync('public/static/images');
  const paths = files.map((file) => ({
    url: `/static/images/${file}`,
    name: file.split('.')[0],
    id: file.split('.').join('-'),
  }));
  res.status(200).json(paths);
}
