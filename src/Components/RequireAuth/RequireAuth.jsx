import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const RequireAuth = () => {
  const { showUser } = useUserAuth();
  const location = useLocation();
  const user = showUser();

  return user.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/inicio" state={{ from: location }} replace />
  );
};

export default RequireAuth;
