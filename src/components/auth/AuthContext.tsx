import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  profilePic?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  role: "admin" | "user" | null;
  user: User | null;
  loading: boolean;
  login: (token: string, role: "admin" | "user", user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      const storedRole = localStorage.getItem("userRole") as "admin" | "user" | null;
      const storedUser = localStorage.getItem("user");
  
      if (storedToken && storedUser !== null && storedRole) {
        setIsAuthenticated(true);
        setToken(storedToken);
        setRole(storedRole);
        
        if (storedToken && storedUser !== "undefined") {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }

      }      
    } catch (error) {
      console.error("Error loading authentication data:", error);
    } finally {
      setLoading(false); 
    }
  }, []);  

  const login = (token: string, role: "admin" | "user", user: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", role);
    localStorage.setItem("user", JSON.stringify(user));

    setIsAuthenticated(true);
    setToken(token);
    setRole(role);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");

    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, role, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};