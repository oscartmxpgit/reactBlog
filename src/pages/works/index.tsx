import Layout from '#components/Layout';
import WorkCard from '#components/WorkCard';
import { getMdxContents } from '#libs/mdx';
import { ProjectI } from '#types/index';
import type { NextPage } from 'next';
import Search from '#components/Search';
import styles from '#scss/modules/Works.module.scss';
import { useState } from 'react';

const meta = {
  title: 'Oscar Trujillo | Proyectos',
  description:
    'Next.js is a minimalistic framework for server-rendered React applications.',
};

const Works: NextPage<Props> = ({ works }) => {
  const [search, setSearch] = useState(works);
  return (
    <Layout meta={meta}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.searchBox}>
        <Search
          array={works}
          onKeyUp={setSearch}
          advanced={false}
          placeholder="Buscar proyecto"
        />
      </div>
      <div className={styles.works}>
        {search.map((work: ProjectI) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>
    </Layout>
  );
};

interface Props {
  works: ProjectI[];
}

export const getStaticProps = async () => {
  const works = getMdxContents('works');
  return {
    props: {
      works,
    },
  };
};

export default Works;
