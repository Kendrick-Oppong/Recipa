import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/auth/isAuthenticated";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
