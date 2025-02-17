import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  role: 'admin' | 'user' | null;
  login: (token: string, role: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  role: null,
  login: () => {},
  logout: () => {},
});


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<'admin' | 'user' | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedRole = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      setToken(token);
      setRole(savedRole as 'admin' | 'user');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
  };

  const login = (token: string, role: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    setIsAuthenticated(true);
    setToken(token);
    setRole(role as 'admin' | 'user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
