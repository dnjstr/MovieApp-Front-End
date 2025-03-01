import React from "react";

interface SignUpInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
}

const SignUpInput: React.FC<SignUpInputProps> = ({ type, name, value, onChange, placeholder, required = false }) => (
    <div className="mb-4">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="sign-in-up-input bg-black bg-opacity-30 text-white w-full p-3 px-3 border-l-2 border-orange-700 rounded-md 
                focus:outline-none focus:border-r-2 focus:border-orange-700 text-sm"
        />
    </div>
);

export default SignUpInput;
