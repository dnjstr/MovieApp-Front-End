import React, { createContext, useContext, useState } from "react";

type PreferencesContextType = {
    bgColor: string;
    setBgColor: (color: string) => void;
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bgColor, setBgColor] = useState("bg-black"); // Default color

    return (
        <PreferencesContext.Provider value={{ bgColor, setBgColor }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export const usePreferences = () => {
    const context = useContext(PreferencesContext);
    if (!context) {
        throw new Error("usePreferences must be used within a PreferencesProvider");
    }
    return context;
};
