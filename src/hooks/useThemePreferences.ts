import { useState, useEffect } from "react";
import { usePreferences } from "../context/PreferencesContext";

export const useThemePreferences = (isOpen: boolean) => {
    const { bgColor, setBgColor, textColor, setTextColor } = usePreferences();
    const [tempBgColor, setTempBgColor] = useState(bgColor);
    const [tempTextColor, setTempTextColor] = useState(textColor);

    useEffect(() => {
        if (isOpen) {
            setTempBgColor(bgColor);
            setTempTextColor(textColor);
        }
    }, [isOpen, bgColor, textColor]);

    const handleThemeChange = (value: string) => {
        setTempBgColor(value);
        setTempTextColor(value === "bg-gray-300" ? "text-black" : "text-white");
    };

    const handleSaveChanges = (onRequestClose: () => void) => {
        setBgColor(tempBgColor);
        setTextColor(tempTextColor);
        onRequestClose();
    };

    return { tempBgColor, tempTextColor, handleThemeChange, handleSaveChanges };
};
