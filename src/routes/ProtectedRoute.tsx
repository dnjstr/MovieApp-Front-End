import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // Prevent redirection before loading is complete

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
