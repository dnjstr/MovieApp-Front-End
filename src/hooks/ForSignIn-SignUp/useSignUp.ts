import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

interface SignUpFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

const useSignUp = () => {
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
            await axiosInstance.post("/register/", formData); // No need to store response

            setSuccess("Account created successfully! Redirecting...");
            setFormData({ fullName: "", email: "", phoneNumber: "", password: "" });

            setTimeout(() => navigate("/sign-in", { state: { identifier: formData.email || formData.phoneNumber } }), 2000);
        } catch (error: any) {
            setError(error.response?.data?.error || "Failed to connect to server");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        error,
        success,
        isLoading,
        handleChange,
        handleSubmit,
    };
};

export default useSignUp;
