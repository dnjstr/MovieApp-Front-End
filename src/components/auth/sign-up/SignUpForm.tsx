import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpInput from "./SignUpInput";

interface SignUpFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsLoading(true);

        if (!formData.email && !formData.phoneNumber) {
            setError("Either email or phone number is required");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Registration failed");

            setSuccess("Account created successfully! Redirecting...");
            setFormData({ fullName: "", email: "", phoneNumber: "", password: "" });

            setTimeout(() => navigate("/sign-in", { state: { identifier: formData.email || formData.phoneNumber } }), 2000);

        } catch (err) {
            setError("Failed to connect to server");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="h-[5px] w-full mb-5 text-center text-xs">
                {error && <div className="text-red-700 font-bold">{error}</div>}
                {success && <div className="text-green-500">{success}</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <SignUpInput type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                <SignUpInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                <SignUpInput type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <SignUpInput type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-black bg-opacity-30 border border-orange-700 text-white py-3 rounded-md font-bold 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600 hover:bg-opacity-40'} 
                        transition duration-300`}
                >
                    {isLoading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            <p className="text-center text-gray-400 mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-orange-500 font-semibold hover:underline text-[16px]">
                    Sign In
                </Link>
            </p>
        </>
    );
};

export default SignUpForm;
