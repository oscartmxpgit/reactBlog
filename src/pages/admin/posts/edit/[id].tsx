import Layout from '#components/Admin/Layout';
import EditPosts from '#components/Admin/Posts/Edit';
import ProtectedRoute from '#libs/auth';
import { NextPage } from 'next';

const EditPost: NextPage = () => {
  return (
    <Layout>
      <EditPosts />
    </Layout>
  );
};

export default ProtectedRoute(EditPost);
