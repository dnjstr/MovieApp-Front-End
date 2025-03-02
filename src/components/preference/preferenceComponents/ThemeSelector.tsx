import React from "react";

interface ThemeSelectorProps {
    tempBgColor: string;
    tempTextColor: string;
    onChange: (value: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ tempBgColor, tempTextColor, onChange }) => (
    <div className="flex items-center justify-between">
        <span className={`text-sm ${tempTextColor}`}>Theme</span>
        <select
            className={`${tempBgColor} text-sm ${tempTextColor} border border-orange-600/30 px-3 py-2 rounded-md focus:outline-none focus:border-orange-600`}
            value={tempBgColor}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="bg-black">Dark</option>
            <option value="bg-gray-300">Light</option>
        </select>
    </div>
);

export default ThemeSelector;
