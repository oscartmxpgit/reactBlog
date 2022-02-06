import { PostInterface, ProjectI } from '#types/index';
import { sort } from '#utils/filters';
import {
  existsSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';

export const absolutePath = (folder: string) =>
  join(process.cwd(), 'public', 'static', folder);

export async function parseMdxContent(content: string) {
  return await serialize(content);
}


export function getMdxContents<TypeOfMdx>(
  folder: string
): GenericWithId<TypeOfMdx>[] {
  const files = readdirSync(absolutePath(folder), 'utf8');
  const contents = files.map((file) => {
    const fileContent = readFileSync(join(absolutePath(folder), file), 'utf8');
    const { data } = matter(fileContent);
    return {
      ...data,
      id: file.replace(/\.mdx?$/, ''),
    };
  });
  return sort<any>(contents, 'date').reverse() as GenericWithId<TypeOfMdx>[];
}

type GenericWithId<T> = T & { id: string };

export function getMdxIds(folder: string) {
  const files = getMdxContents(folder);
  return files.map((file) => {
    return {
      params: {
        id: file.id.replace(/\.mdx$/, ''),
      },
    };
  });
}
export function getMdxFileById(folder: string, id: string) {
  const fileContent = readFileSync(
    join(absolutePath(folder), `${id}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContent);
  return {
    ...data,
    id,
    content,
  };
}
export function generateTemplate(data: any) {
  data.id ? delete data.id : null;
  let template: string = '---\n';
  for (const prop in data) {
    if (prop !== 'content') {
      if (prop === 'tags') template += `${prop}: ${data[prop]}\n`;
      else template += `${prop}: '${data[prop]}'\n`;
    }
  }
  template += `---\n${data.content}\n`;
  return template;
}
export function createMdxFile({ folder, id, data }: MdxData) {
  const mdxContent = generateTemplate(data);
  const filePath = join(absolutePath(folder), `${id}.mdx`);
  writeFileSync(filePath, mdxContent, 'utf-8');
}
export function removeMdxFile(folder: string, id: string) {
  const filePath = join(absolutePath(folder), `${id}.mdx`);
  const { data } = matter(readFileSync(filePath, 'utf8'));
  const imagePath = join(process.cwd(), 'public', data.image);
  const fileExist = existsSync(filePath);
  const imageExist = existsSync(imagePath);
  try {
    if (!fileExist) throw Error(`The file ${folder}/${id}.mdx not exist`);
    if (!imageExist) throw Error(`The image ${imagePath} not exist`);
    unlinkSync(filePath);
    unlinkSync(imagePath);
  } catch (error: any) {
    throw Error(error.message);
  }
}
interface MdxData {
  folder: string;
  id: string;
  data: MdxMeta;
}

type MdxMeta = PostInterface | ProjectI;
