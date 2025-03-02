import React from "react";

interface ActionButtonsProps {
    onClose: () => void;
    onSave: () => void;
    tempTextColor: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onClose, onSave, tempTextColor }) => (
    <div className="flex space-x-4 mt-8">
        <button
            onClick={onClose}
            className={`flex-1 px-9 py-1 text-sm border border-orange-600/30 ${tempTextColor} rounded-md hover:bg-orange-600/10 transition-colors`}
        >
            Close
        </button>
        <button
            onClick={onSave}
            className="flex-1 px-9 py-1 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
            Save Changes
        </button>
    </div>
);

export default ActionButtons;
