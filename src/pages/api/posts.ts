import {
  createMdxFile,
  getMdxContents,
  getMdxFileById,
  removeMdxFile,
} from '#libs/mdx';
import { PostInterface } from '#types/index';
import { IncomingForm } from 'formidable';
import mv from 'mv';

import type { NextApiRequest, NextApiResponse } from 'next';
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: any = await new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files: any) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
  const { fields } = data;
  const { id } = req.query;
  if (req.method === 'GET' && id) {
    const post = getMdxFileById('posts', id as string);
    return res.status(200).json(post);
  }
  if (req.method === 'GET') {
    const posts = getMdxContents<PostInterface>('posts');
    return res.status(200).json(posts);
  }
  if (req.method === 'POST') {
    const oldPath = data.files.image.filepath;
    const ext = data.files.image.originalFilename.split('.').pop();
    const newName = `${fields.id}.${ext}`;
    const newPath = `./public/static/images/${newName}`;
    mv(oldPath, newPath, (e: any) => {});
    fields.image = `/static/images/${newName}`;
    createMdxFile({
      folder: 'posts',
      id: fields.id as any,
      data: fields as any,
    });
    return res.status(200).json({ message: 'success' });
  }
  if (req.method === 'DELETE') {
    const { fields } = data;
    removeMdxFile('posts', fields.id as any);
    return res.status(200).json({ message: 'success' });
  }
  if (req.method === 'PUT') {
    if (data.files.image) {
      const oldPath = data.files.image.filepath;
      const ext = data.files.image.originalFilename.split('.').pop();
      const newName = `${fields.id}.${ext}`;
      const newPath = `./public/static/images/${newName}`;
      mv(oldPath, newPath, (e: any) => {});
      fields.image = `/static/images/${newName}`;
    }
    createMdxFile({
      folder: 'posts',
      id: fields.id as any,
      data: fields as any,
    });
    return res.status(200).json({ message: 'success' });
  }
}
