import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context";

interface props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: props) => {
  const { user } = useAppContext();

  if (!user.id) {
    return <Navigate to="/Login" />;
  }
  return children;
};

export { PrivateRoute };
