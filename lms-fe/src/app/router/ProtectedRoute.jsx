import { useContext } from "react";
import { AuthStateContext } from "../providers/AuthProvider";

const ProtectedRoute = ({roles}) => {
  const {user} = useContext(AuthStateContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <Outlet />;
}

export default ProtectedRoute;