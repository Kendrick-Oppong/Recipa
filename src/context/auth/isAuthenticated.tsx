import { createContext, useContext, useMemo, useState, useEffect } from "react";

type AuthProps = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const initialState: AuthProps = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const AuthProviderContext = createContext<AuthProps>(initialState);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    return storedAuthState
      ? JSON.parse(storedAuthState)
      : initialState.isAuthenticated;
  });

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Update local storage whenever isAuthenticated changes
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const value = useMemo(() => {
    return {
      isAuthenticated,
      login,
      logout,
    };
  }, [isAuthenticated]);

  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthProviderContext);

  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
