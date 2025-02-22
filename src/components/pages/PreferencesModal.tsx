import React, { useState } from "react";
import Modal from "react-modal";
import { usePreferences } from "../../context/PreferencesContext";

const PreferencesModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen, onRequestClose }) => {
    const { bgColor, setBgColor } = usePreferences();
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [autoplayPreviews, setAutoplayPreviews] = useState(true);
    const [language, setLanguage] = useState("English");

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            className="modal-content bg-black rounded-lg outline-none border border-gray-700"
            overlayClassName="z-20 modal-overlay fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 flex justify-center items-center"
        >
            <div className="w-full max-w-md px-8 py-6">
                <h1 className="text-xl font-bold mb-8 text-orange-600">Preferences</h1>

                <div className="space-y-6">
                    {/* Background Theme */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Theme</span>
                        <select
                            onChange={(e) => setBgColor(e.target.value)}
                            className="bg-black text-sm text-white border border-orange-600/30 px-3 py-2 rounded-md focus:outline-none focus:border-orange-600"
                            value={bgColor}
                        >
                            <option value="bg-black">Dark</option>
                            <option value="bg-gray-300">Light</option>
                        </select>
                    </div>

                    {/* Language Selection */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Language</span>
                        <select
                            className="bg-black text-sm text-white border border-orange-600/30 px-3 py-2 rounded-md focus:outline-none focus:border-orange-600"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>

                    {/* Email Notifications Toggle */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Email Notifications</span>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                            className="w-4 h-4 accent-orange-600"
                        />
                    </div>

                    {/* Autoplay Previews Toggle */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Autoplay Previews</span>
                        <input
                            type="checkbox"
                            checked={autoplayPreviews}
                            onChange={() => setAutoplayPreviews(!autoplayPreviews)}
                            className="w-4 h-4 accent-orange-600"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-8">
                        <button 
                            onClick={onRequestClose}
                            className="flex-1 px-9 py-1 text-sm border border-orange-600/30 text-gray-400 rounded-md hover:bg-orange-600/10 transition-colors"
                        >
                            Close
                        </button>
                        <button 
                            className="flex-1 px-9 py-1 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PreferencesModal;