import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface LoginFormData {
    identifier: string;
    password: string;
}

interface LocationState {
    identifier?: string;
}

const useSignIn = () => {
    const location = useLocation();
    const { identifier } = (location.state as LocationState) || {};

    const [formData, setFormData] = useState<LoginFormData>({
        identifier: identifier || "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (identifier) {
            window.history.replaceState({}, document.title);
        }
    }, [identifier]);

    useEffect(() => {
        setError(""); // Clear error when user updates input
    }, [formData.identifier, formData.password]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Invalid credentials");
            }

            setSuccess(data.role === "admin" ? "Redirecting to admin panel..." : "Redirecting to homepage...");
            login(data.token, data.role, { name: "", email: formData.identifier });
            setFormData({ identifier: "", password: "" });

            setTimeout(() => {
                data.role === "admin" ? (window.location.href = "http://127.0.0.1:8000/admin/") : navigate("/");
            }, 1500);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Failed to connect to server");
            }
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

export default useSignIn;
