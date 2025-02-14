import React, { createContext, useContext, useState, ReactNode } from 'react';


interface User {
    id: string;
    name: string;
    email: string;
    profilePic?: string; 
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);


    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); 
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
