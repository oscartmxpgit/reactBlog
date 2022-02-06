import ProtectedRoute from '#libs/auth';
import Layout from '#components/Admin/Layout';

import { NextPage } from 'next';
import AdminMedia from '#components/Admin/Media';

const Media: NextPage = () => {
  return (
    <Layout>
      <AdminMedia />
    </Layout>
  );
};

export default ProtectedRoute(Media);
