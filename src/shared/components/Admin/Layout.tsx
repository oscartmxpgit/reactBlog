import SideBar from './SideBar';
import styles from '#scss/modules/Admin.module.scss';
import Content from '#components/Admin/Content';

const Layout = ({ children }: Props) => {
  return (
    <section className={`adminContainer ${styles.admin}`}>
      <SideBar />
      <Content>{children}</Content>
    </section>
  );
};
interface Props {
  children: any;
}

export default Layout;
