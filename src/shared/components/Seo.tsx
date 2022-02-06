import Head from 'next/head';
import { useRouter } from 'next/router';

const Seo = ({ title, description: desc, image }: Props) => {
  const ogImage = image || '/images/hero.webp';
  const router = useRouter();
  const isDev = process.env.NODE_ENV === 'development';
  const domain = `${
    isDev ? 'http://localhost:3000' : 'https://oscartm.com'
  }`;
  const url = domain + router.pathname;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {/* <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" /> */}
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <meta name="url" content={url} />
      <meta name="owner" content="Oscar Trujillo" />
      <meta name="keywords" content="Oscar Trujillo, Blog, Portfolio, Website" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={ogImage} />
      <meta
        name="google-site-verification"
        content="k4qIfqDAolJezdFoIpEsLu4IBSXbitpdkrK0ZvLUthc"
      />
    </Head>
  );
};
interface Props {
  title: string;
  description: string;
  image?: string;
}

export default Seo;
