import styles from '#scss/modules/WorkCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { icons } from '#constants/icons';

const WorkCard = (props: any) => {
  const { title, desc, image, id, repo } = props;
  return (
    <Link href={`${repo}`}>
      <a target="_blank">
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={image || '/images/bg.webp'}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              priority={true}
              loading="eager"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{desc}</p>
            <div className={styles.stack}>
              {props.stack.map((s: string) => (
                <span className={styles.stackItem} key={s}>
                  {icons(s)}
                </span>
              ))}
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default WorkCard;
