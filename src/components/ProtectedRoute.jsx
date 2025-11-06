import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
