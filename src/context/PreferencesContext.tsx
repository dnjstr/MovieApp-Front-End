import React, { createContext, useContext, useState, useEffect } from "react";
import { PreferencesContextType } from "../types/types";

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bgColor, setBgColor] = useState<string>("bg-black");
    const [textColor, setTextColor] = useState<string>("text-white");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedBgColor = localStorage.getItem("bgColor");
        const storedTextColor = localStorage.getItem("textColor");

        if (storedBgColor) setBgColor(storedBgColor);
        if (storedTextColor) setTextColor(storedTextColor);

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("bgColor", bgColor);
            localStorage.setItem("textColor", textColor);
        }
    }, [bgColor, textColor, isLoaded]);

    return (
        <PreferencesContext.Provider value={{ bgColor, setBgColor, textColor, setTextColor, isLoaded }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export const usePreferences = (): PreferencesContextType => {
    const context = useContext(PreferencesContext);
    if (!context) {
        throw new Error("usePreferences must be used within a PreferencesProvider");
    }
    return context;
};
