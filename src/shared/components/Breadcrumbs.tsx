import { useRouter } from 'next/router';
import styles from '#scss/modules/Breadcrumbs.module.scss';
import Link from 'next/link';

const Breadcrumbs = () => {
  const { asPath: path } = useRouter();
  const paths: string[] = path.split('/').slice(1);
  return (
    <ul className={styles.list}>
      {paths.map((i) => (
        <li key={i} className={styles.item}>
          <Link href={`/${paths.slice(0, paths.indexOf(i) + 1).join('/')}`}>
            <a className={styles.text}>{i}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
