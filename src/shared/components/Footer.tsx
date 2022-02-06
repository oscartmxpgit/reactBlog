import { contact } from '#constants/data';
import styles from '#scss/modules/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.name}>
        Oscar&nbsp;<mark>Trujillo</mark>
      </h1>
      <div className={styles.disclaimer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>Inicio</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">
              <a className={styles.link}>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/works">
              <a className={styles.link}>Proyectos</a>
            </Link>
          </li>
        </ul>
        <h3 className={styles.copy}>
          © {new Date().getFullYear()} - No rights reserved.
        </h3>
      </div>
      <ul className={styles.social}>
        {contact.map((i, index) => (
          <li className={styles.item} key={index}>
            <a
              href={i.url}
              title={i.name}
              className={styles.icon}
              rel="noopener noreferrer"
              target="_blank"
            >
              {<i.icon></i.icon>}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
