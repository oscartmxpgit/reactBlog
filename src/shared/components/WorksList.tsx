import styles from '#scss/modules/WorksList.module.scss';
import { ProjectI } from '#types/index';
import { advanceFilter } from '#utils/filters';
import { useState } from 'react';
import Search from './Search';
import WorkCard from './WorkCard';

const propsOmited = ['image', 'id', 'tool', 'stack', 'repo'];
const WorksList = ({ works: w }: Props) => {
  const worksWithString = advanceFilter(w, propsOmited);
  const [works, setWorks] = useState(worksWithString);
  const handleSearch = (array: any) => {
    setWorks(array);
  };
  const buttons = ['All', 'Web', 'Design', 'Tool', 'App'];
  const filter = (type: string) => {
    const filtered = w.filter((work: ProjectI) => {
      if (type.toLowerCase() == 'all') {
        return work;
      } else {
        return work.type === type.toLowerCase();
      }
    });
    setWorks(advanceFilter(filtered, propsOmited));
  };
  return (
    <section className="works">
      <h1 className="title">Proyectos</h1>
      <div className={styles.filtersContainer}>
        <Search
          placeholder="Buscar proyecto"
          array={worksWithString}
          advanced={true}
          onKeyUp={handleSearch}
        />
        <div className={styles.filters}>
          {buttons.map((text) => (
            <button
              key={text}
              onClick={() => filter(text)}
              className={styles.filter}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.worksContainer}>
        {works.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>
    </section>
  );
};

interface Props {
  works: ProjectI[];
}

export default WorksList;
