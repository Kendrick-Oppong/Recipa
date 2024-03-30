import { useFetch } from "@/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getIsAuthenticated,
  signOut,
  storeAuthValue,
} from "@/redux/userAuthenticatedSlice";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(getIsAuthenticated);
  const { data, error } = useFetch<{ isAuthenticated: boolean }>(
    "http://localhost:5000/user/isAuthenticated",
    "isAuthenticated",
    true
  );
  useEffect(() => {
    if (data?.isAuthenticated === true) {
      dispatch(storeAuthValue(true));
    } else if (error?.message) {
      dispatch(signOut());
    }
  }, [data, error, dispatch]);
  // if (isLoading) return <p>Loading</p>;

  console.log(isAuthenticated);
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
