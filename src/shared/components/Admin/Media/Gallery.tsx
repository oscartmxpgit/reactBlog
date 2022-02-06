import Image from 'next/image';
import styles from '../scss/Gallery.module.scss';

const Gallery = ({ images }: Props) => {
  return (
    <section>
      <h2>Gallery</h2>
      <div className={styles.galleryContent}>
        {images.map((image: any) => (
          <div className="galleryItem" key={image.id}>
            <Image
              src={image.url}
              alt={image.name}
              width={200}
              height={150}
              layout="responsive"
              objectFit="cover"
            />
            <div className={styles.galleryItemInfo}>
              <h3>{image.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

interface Props {
  images: any;
}

export default Gallery;
