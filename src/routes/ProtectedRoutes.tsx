import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const storedAuthState = localStorage.getItem("isAuthenticated") as string;
  const isAuthenticated= JSON.parse(storedAuthState) 
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
