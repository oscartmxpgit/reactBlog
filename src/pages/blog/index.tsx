import Aside from '#components/Aside';
import Layout from '#components/Layout';
import PostsList from '#components/PostsList';
import { getMdxContents } from '#libs/mdx';
import styles from '#scss/modules/Blog.module.scss';
import { MatterProps } from '#types/index';
import type { NextPage } from 'next';

const meta = {
  title: 'Oscar Trujillo | Blog',
  description:
    'Next.js is a minimalistic framework for server-rendered React applications.',
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Layout meta={meta}>
      <div className={styles.blog}>
        <div className={styles.postsContainer}>
          <h1 className={styles.title}>Publicaciones</h1>
          <PostsList posts={posts} />
        </div>
        <Aside />
      </div>
    </Layout>
  );
};

interface Props {
  posts: MatterProps[];
}

export const getStaticProps = async () => {
  const posts = getMdxContents('posts');
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
