import ReleasesList from './ReleasesList';
import styles from '#scss/modules/Aside.module.scss';

const Aside = () => {
  return (
    <div className={styles.aside}>
      <ReleasesList />
    </div>
  );
};

export default Aside;
