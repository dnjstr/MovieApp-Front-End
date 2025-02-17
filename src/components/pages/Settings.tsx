import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings: React.FC = () => {
    const navigate = useNavigate();
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [autoplayPreviews, setAutoplayPreviews] = useState(true);
    const [language, setLanguage] = useState("English");

    return (
        <div className="w-full h-screen bg-black text-white flex flex-col items-center overflow-auto py-10">
            {/* Back Button */}
            <button 
                className="absolute top-6 left-6 px-4 py-2 bg-orange-700 rounded hover:bg-red-700"
                onClick={() => navigate(-1)}
            >
                ←
            </button>

            <h1 className="text-3xl font-bold mb-6">Settings</h1>

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

export default Settings;
