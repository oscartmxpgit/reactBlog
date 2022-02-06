import Search from '#components/Search';
import Time from '#components/Time';
import { MatterProps } from '#types/index';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../scss/modules/Posts.module.scss';
import Modal from '#components/Modal';
import Toast from '#components/Toast';

const AdminPosts = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isOpen, setOpenOrClose] = useState(false);
  const [_delete, setDelete] = useState(false);
  const [_id, setId] = useState('');
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const deletePost = (id: string) => {
    setId(id);
    setOpenOrClose(true);
  };
  const getOption = async (option: boolean) => {
    setDelete(option);
    if (option === true) {
      const formData = new FormData();
      formData.append('id', _id);
      const res = await fetch(`/api/posts`, {
        method: 'DELETE',
        body: formData,
      });
      const data = await res.json();
      if (data) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      }
    }
    setOpenOrClose(false);
  };
  const sortAscOrDesc = (e: any) => {
    setPosts([...posts.reverse()]);
  };
  const child = () => (
    <>
      <h1>Delete Post</h1>
      <p>Are you sure you want to delete this post?</p>
    </>
  );
  const DefaultLayout = () => (
    <section className="posts">
      {showToast && <Toast message="Post Deleted" color="success" />}
      {isOpen && (
        <Modal
          openOrClose={() => setOpenOrClose(false)}
          Content={child}
          title="Delete Post?"
          isTrue={getOption}
        />
      )}
      <div className={styles.head}>
        <h1 className={styles.postsTitle}>Admin Posts</h1>
        <Link href={'/admin/posts/new'}>
          <a className={styles.new}>📝 New Post</a>
        </Link>
      </div>
      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <Search
            array={data}
            placeholder="Search post in database"
            onKeyUp={setPosts}
            advanced={false}
          />
        </div>
        <div className={styles.select}>
          <select name="Order" onChange={sortAscOrDesc}>
            <option value="asc">⬆️ Asc</option>
            <option value="desc">⬇️ Desc</option>
          </select>
        </div>
      </div>
      <ul>
        <li>Loading....</li>
      </ul>
    </section>
  );
  if (isLoading) return <DefaultLayout />;
  return (
    <section className="posts">
      {showToast && <Toast message="Post Deleted" color="success" />}
      {isOpen && (
        <Modal
          openOrClose={() => setOpenOrClose(false)}
          Content={child}
          title="Delete Post?"
          isTrue={getOption}
        />
      )}
      <div className={styles.head}>
        <h1 className={styles.postsTitle}>Admin Posts</h1>
        <Link href={'/admin/posts/new'}>
          <a className={styles.new}>📝 New Post</a>
        </Link>
      </div>
      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <Search
            array={data}
            placeholder="Search post in database"
            onKeyUp={setPosts}
            advanced={false}
          />
        </div>
        <div className={styles.select}>
          <select name="Order" onChange={sortAscOrDesc}>
            <option value="asc">⬆️ Asc</option>
            <option value="desc">⬇️ Desc</option>
          </select>
        </div>
      </div>
      <ul>
        {posts.map((post: MatterProps) => (
          <li key={post.id} className={styles.item}>
            <div className={styles.info}>
              <h2 className={styles.title}>{post.title}</h2>
            </div>
            <div className={styles.date}>
              <Time date={post.date} />
            </div>
            <div className={styles.options}>
              <Link
                href="/admin/posts/edit/[id]"
                as={`/admin/posts/edit/${post.id}`}
              >
                <a> ✏️ Edit</a>
              </Link>
              <button onClick={() => deletePost(post.id)}>🗑️ Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPosts;
