import Seo from '#components/Seo';
import Navbar from '#components/Navbar';
import Head from 'next/head';

const Layout = ({ meta, children }: Props) => {
  return (
    <>
      <Seo {...meta} />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <section className="mdContainer">{children}</section>
    </>
  );
};
interface Props {
  meta: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
}

export default Layout;
