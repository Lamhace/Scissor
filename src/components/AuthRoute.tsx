import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthRoute;
