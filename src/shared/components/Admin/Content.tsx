import Breadcrumbs from '../Breadcrumbs';
import styles from './scss/Content.module.scss';

const Content = ({ children }: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <Breadcrumbs />
      </div>
      {children}
    </div>
  );
};
interface Props {
  children: any;
}

export default Content;
