import ProtectedRoute from '#libs/auth'

const Login = () => {
  return (
    <div>
      <a>Login Page</a>
    </div>
  );
};
export default ProtectedRoute(Login);