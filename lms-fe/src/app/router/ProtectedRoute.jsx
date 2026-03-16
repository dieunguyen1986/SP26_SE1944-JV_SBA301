import { useContext } from "react";
import { AuthStateContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

// roles: ["ROLE_ADMIN", "ROLE_INSTRUCTOR", "ROLE_STUDENT"]
const ProtectedRoute = ({roles}) => {

  const {user} = useContext(AuthStateContext);

  // If user is not authenticated, redirect to login page
  if (!user) {
    // Navigate is a component from react-router-dom that allows us to redirect
    return <Navigate to="/login" replace />;
  }

  // Check if user has required roles
  if (roles && !roles.some(role => user.roles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <Outlet />;
}

export default ProtectedRoute;