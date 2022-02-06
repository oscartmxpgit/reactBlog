import { MatterProps } from '#types/index';
import styles from '#scss/modules/PostCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Time from './Time';

const PostCard = ({ post }: Props) => {
  return (
    <li key={post.id} className={styles.post + ' card'}>
      <Link href={`/blog/${post.id}`} passHref>
        <a title="{post.title}" className={styles.postLink}>
          <article className={styles.postCard} title={post.title}>
            <div className={styles.imageContainer}>
              <Image
                src={post.image || '/images/bg.webp'}
                objectFit="cover"
                className={styles.image}
                priority={true}
                layout="fill"
                title={post.title}
                alt={post.title}
              />
            </div>
            <div className={styles.postData}>
              <Time date={post.date} />
              <h1 className={styles.postTitle}>{post.title}</h1>
              <p className={styles.postDesc}>{post.desc}</p>
            </div>
          </article>
        </a>
      </Link>
    </li>
  );
};

interface Props {
  post: MatterProps;
}
export default PostCard;
