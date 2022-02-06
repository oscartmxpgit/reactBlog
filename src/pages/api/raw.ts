import { readFileSync, existsSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const path = join('public', id as string);
  const isExist = existsSync(path);
  if (!isExist) {
    return res.status(200).end(`The file ${path} does not exist`);
  }
  const data = readFileSync(path, 'utf8');
  res.status(200).end(data);
}
