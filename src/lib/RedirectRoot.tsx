import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RedirectRoot = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (user && user.role) {
    const dashboardPath = `/${user.role.toLowerCase()}-dashboard`;
    return <Navigate to={dashboardPath} replace />;
  }
  return <Navigate to="/login" replace />;
};
