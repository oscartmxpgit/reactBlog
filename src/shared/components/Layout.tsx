import Footer from './Footer';
import Navbar from './Navbar';
import Seo from './Seo';

const Layout = ({ children, meta }: Props) => {
  return (
    <>
      <Seo {...meta} />
      <Navbar />
      <section className="mainContainer">{children}</section>
      <Footer />
    </>
  );
};

interface Props {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
  };
}

export default Layout;
