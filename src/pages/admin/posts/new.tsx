import Layout from '#components/Admin/Layout';
import AdminPostNew from '#components/Admin/Posts/New';
import ProtectedRoute from '#libs/auth';
import { NextPage } from 'next';

const NewPost: NextPage = () => {
  return (
    <Layout>
      <AdminPostNew />
    </Layout>
  );
};

export default ProtectedRoute(NewPost);
