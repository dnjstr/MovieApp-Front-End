import React from "react";
import Modal from "react-modal";
import ThemeSelector from "./components/ThemeSelector";
import ActionButtons from "./components/ActionButtons";
import { useThemePreferences } from "../../hooks/useThemePreferences";

interface PreferencesModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({ isOpen, onRequestClose }) => {
    const { tempBgColor, tempTextColor, handleThemeChange, handleSaveChanges } = useThemePreferences(isOpen);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            className={`modal-content ${tempBgColor} rounded-lg border border-gray-700 ${tempTextColor} outline-none`}
            overlayClassName="z-20 modal-overlay fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex justify-center items-center"
        >
            <div className="w-full max-w-md px-8 py-6">
                <h1 className="text-xl font-bold mb-8 text-orange-600">Preferences</h1>
                <div className="space-y-6">
                    <ThemeSelector tempBgColor={tempBgColor} tempTextColor={tempTextColor} onChange={handleThemeChange} />
                    <ActionButtons onClose={onRequestClose} onSave={() => handleSaveChanges(onRequestClose)} tempTextColor={tempTextColor} />
                </div>
            </div>
        </Modal>
    );
};

export default PreferencesModal;
