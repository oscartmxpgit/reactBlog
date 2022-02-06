import { releases } from '#constants/data';
import styles from '#scss/modules/ReleasesList.module.scss';
import ReleaseCard from './ReleaseCard';

const ReleasesList = () => {
  return (
    <div className={styles.content}>
      <div className={styles.releases}>
        <h2 className={styles.title}>Releases</h2>
        <ul className={styles.list}>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.title} {...release} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReleasesList;
