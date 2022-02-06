import { GitHubIcon } from '#constants/icons';
import Link from 'next/link';
import styles from '#scss/modules/ReleaseCard.module.scss';

const ReleaseCard = ({ text, title, url, build }: Props) => {
  return (
    <li>
      <Link href={url} passHref>
        <a className={styles.item}>
          <div className={styles.icon}>
            <GitHubIcon />
          </div>
          <div className="data">
            <span className={styles.title}>
              {title} <mark>{build}</mark>{' '}
            </span>
            <p className={styles.text}>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
interface Props {
  url: string;
  title: string;
  text: string;
  build: string;
}

export default ReleaseCard;
