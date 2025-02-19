import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPalette } from "react-icons/fa";
import { usePreferences } from "../../context/PreferencesContext"; // Import global preferences

const Preferences: React.FC = () => {
    const navigate = useNavigate();
    const { bgColor, setBgColor } = usePreferences(); // Get and set global background color
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [autoplayPreviews, setAutoplayPreviews] = useState(true);
    const [language, setLanguage] = useState("English");

    return (
        <div className={`w-full h-screen ${bgColor} text-white flex flex-col items-center overflow-auto py-10 transition duration-500`}>
            {/* Background Changer */}
            <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/50 p-2 rounded-lg">
                <FaPalette className="text-white text-xl" />
                <select
                    onChange={(e) => setBgColor(e.target.value)}
                    className="bg-black text-white border border-white p-1 rounded"
                    value={bgColor} // Ensure the selected value is displayed
                >
                    <option value="bg-black">Black</option>
                    <option value="bg-gray-800">Dark Gray</option>
                    <option value="bg-blue-900">Dark Blue</option>
                    <option value="bg-red-900">Dark Red</option>
                    <option value="bg-green-900">Dark Green</option>
                </select>
            </div>

            {/* Back Button */}
            <button 
                className="absolute top-6 left-6 px-4 py-2 bg-orange-700 rounded hover:bg-red-700"
                onClick={() => navigate(-1)}
            >
                ←
            </button>

            <h1 className="text-3xl font-bold mb-6">Preferences</h1>

            <div className="w-80 space-y-6">
                {/* Language Selection */}
                <div>
                    <label className="block text-lg mb-2">Language</label>
                    <select
                        className="w-full p-2 bg-gray-800 rounded"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>

                {/* Email Notifications Toggle */}
                <div className="flex justify-between items-center">
                    <span>Email Notifications</span>
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        className="w-5 h-5"
                    />
                </div>

                {/* Autoplay Previews Toggle */}
                <div className="flex justify-between items-center">
                    <span>Autoplay Previews</span>
                    <input
                        type="checkbox"
                        checked={autoplayPreviews}
                        onChange={() => setAutoplayPreviews(!autoplayPreviews)}
                        className="w-5 h-5"
                    />
                </div>

                {/* Save Button */}
                <button className="w-full bg-red-600 p-2 rounded mt-4 hover:bg-red-700">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Preferences;
