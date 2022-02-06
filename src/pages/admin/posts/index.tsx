import Layout from '#components/Admin/Layout';
import AdminPosts from '#components/Admin/Posts';
import ProtectedRoute from '#libs/auth';
import { NextPage } from 'next';

const Admin: NextPage = () => {
  return (
    <Layout>
      <AdminPosts />
    </Layout>
  );
};

export default ProtectedRoute(Admin);
