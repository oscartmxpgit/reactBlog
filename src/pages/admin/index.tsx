import ProtectedRoute from '#libs/auth';
import Layout from '#components/Admin/Layout';

import { NextPage } from 'next';

const Admin: NextPage = () => {
  return (
    <Layout>
      <h1>Hello, i&apos;m content</h1>
    </Layout>
  );
};

export default ProtectedRoute(Admin);
