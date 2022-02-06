import styles from './scss/SideBar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import {
  HomeIcon,
  ImageIcon,
  MdIcon,
  Menu,
  OtherIcon,
  PagesIcon,
  PostsIcon,
  ProjectsIcon,
} from '#constants/icons';

const SideBar = () => {
  const { pathname: _path } = useRouter();
  const is = (path: string) => {
    const isActive = _path === `/admin${path}`;
    return isActive ? `${styles.item} ${styles.on}` : styles.item;
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      <div className={styles.brand}>
        <h2 className="name">Admin Dashboard</h2>
        <button onClick={handleClick} className={styles.toggle}>
          <Menu />
        </button>
      </div>
      <h3 className={styles.menuHead}>Fields</h3>
      <ul className={styles.list}>
        <li className={is('')}>
          <Link href="/admin">
            <a className={styles.text}>
              <HomeIcon /> Home
            </a>
          </Link>
        </li>
        <li className={is('/posts')}>
          <Link href="/admin/posts">
            <a className={styles.text}>
              <PostsIcon />
              Posts
            </a>
          </Link>
        </li>
        <li className={is('/projects')}>
          <Link href="/admin/projects">
            <a className={styles.text}>
              <ProjectsIcon /> Projects
            </a>
          </Link>
        </li>
        <li className={is('/pages')}>
          <Link href="/admin/pages">
            <a className={styles.text}>
              <PagesIcon /> Pages
            </a>
          </Link>
        </li>
        <li className={styles.itemList}>
          <h3 className={styles.menuHead}>Media</h3>
          <ul className={styles.list}>
            <li className={is('/posts/images')}>
              <Link href="/admin/media/images">
                <a className={styles.text}>
                  <ImageIcon /> Images
                </a>
              </Link>
            </li>
            <li className={is('/posts/mdx')}>
              <Link href="/admin/media/mdx">
                <a className={styles.text}>
                  <MdIcon /> Mdx
                </a>
              </Link>
            </li>
            <li className={is('/posts/other')}>
              <Link href="/admin/media/other">
                <a className={styles.text}>
                  <OtherIcon /> others
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
