import styles from '#scss/modules/PostHead.module.scss';
import Image from 'next/image';
import Time from '#components/Time';

const PostHead = ({ image, title, date, tags }: Props) => {
  return (
    <section className={styles.head}>
      <h1 className={styles.title}>
        {title ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fugiat.'}
      </h1>
      <div className={styles.image}>
        <Image
          src={image || '/images/bg.webp'}
          width={100}
          height={60}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={styles.tags}>
        {tags.map((tag: string) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Image
            className={styles.img}
            src ="/images/Oscar.jpg"
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div className="data">
          <h3 className={styles.name}>Oscar Trujillo</h3>
          <span className={styles.date}>
            <Time date={date} />
          </span>
        </div>
      </div>
    </section>
  );
};

interface Props {
  image?: string;
  title: string;
  date: string;
  tags: string[];
}

export default PostHead;
