import About from '#components/About';
import Bio from '#components/Bio';
import Hero from '#components/Hero';
import Layout from '#components/Layout';
import Skills from '#components/Skills';
import WorksList from '#components/WorksList';
import { getMdxContents } from '#libs/mdx';
import { ProjectI } from '#types/index';
import type { GetStaticProps, NextPage } from 'next';

const meta = {
  title: 'Oscar Trujillo | Home',
  description:
    'My personal portfolio and Personal blog and web portfolio developed in ReactJS y NextJS.',
};
//Next.js is a minimalistic framework for server-rendered React applications

const Home: NextPage<Props> = ({ works }) => {
  return (
    <Layout meta={meta}>
      <Hero />
      <About />
      <Bio />
      <Skills />

    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const works = getMdxContents('works');
  return {
    props: {
      works,
    },
  };
};

interface Props {
  works: ProjectI[];
}
