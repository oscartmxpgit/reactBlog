import Post from '#components/Post';
import { prismPlugins } from '#components/Post/Components';
import { getMdxFileById, getMdxIds } from '#libs/mdx';
import { PostInterface } from '#types/index';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkPrism from 'remark-prism';

const PostPage = (post: Props) => {
  return <Post post={post} mdx={MDXRemote} />;
};

interface Props extends PostInterface {
  mdxSource: MDXRemoteSerializeResult;
}

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getMdxIds('posts');
  return {
    paths,
    fallback: 'blocking',
  };
};


function decodeHTMLEntities(text:string) {
  var entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
  ];

  for (var i = 0, max = entities.length; i < max; ++i)
      text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

  return text;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = getMdxFileById('posts', params.id);
  let mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [[remarkPrism, { ...prismPlugins }]],
    },
  });

  return {
    props: {
      ...post,
       mdxSource,
    },
    revalidate: 1,
  };
};
