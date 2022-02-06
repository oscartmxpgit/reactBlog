import { MatterProps } from '#types/index';
import { advanceFilter } from '#utils/filters';
import { useState } from 'react';
import PostCard from './PostCard';
import Search from './Search';
import styles from '#scss/modules/PostsList.module.scss';

const PostsList = ({ posts: p }: Props) => {
  const propsOmited = ['image', 'id'];
  const postsWithString = advanceFilter(p, propsOmited);
  const sorted = postsWithString.sort((a, b) => {
    return (new Date(b.date) as any) - (new Date(a.date) as any);
  });
  const [posts, setPosts] = useState(p);
  return (
    <>
      <div className={styles.searchBox}>
        <Search
          array={sorted}
          onKeyUp={setPosts}
          placeholder="Buscar publicacion"
          advanced={true}
        />
      </div>
      <ul className={styles.posts}>
        {posts.map((post: MatterProps) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

interface Props {
  posts: MatterProps[];
}

export default PostsList;
