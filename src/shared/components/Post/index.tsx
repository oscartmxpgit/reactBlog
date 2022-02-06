import { PostInterface } from '#types/index';
import Content from './Content';
import Layout from './Layout';
import PostHead from './Head';

const Post = ({ post, mdx }: Props) => {
  const meta = {
    description: post.desc,
    ...post,
  };
  return (
    <Layout meta={meta}>
      <PostHead {...post} />
      <Content Render={mdx} data={post.mdxSource} />
    </Layout>
  );
};

interface Props {
  post: MdxProps;
  mdx: any;
}
interface MdxProps extends PostInterface {
  mdxSource: any;
}

export default Post;
