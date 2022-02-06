import { useRouter } from 'next/router';

const ProtectedRoute = (ProtectedComponent: any) => {
  return (props: any) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter();
      const userIsLoggedIn = true;
      if (userIsLoggedIn) {
        return <ProtectedComponent {...props} />;
      } else {
        Router.replace('/');
        return null;
      }
    }
    return null;
  };
};

export default ProtectedRoute;
