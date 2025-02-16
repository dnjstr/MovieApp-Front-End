import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    profilePic?: string;
}

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    isAuthenticated: boolean; // ✅ Added isAuthenticated
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user from localStorage on initial render
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (user: User) => {
        setUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user in localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
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

export default AuthContext;
