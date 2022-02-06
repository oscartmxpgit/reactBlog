import { useEffect, useState } from 'react';
import Gallery from './Gallery';

const AdminMedia = () => {
  const [images, setImages] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('/api/media', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="mediaContainer">
      <Gallery images={images} />
    </section>
  );
};

export default AdminMedia;
