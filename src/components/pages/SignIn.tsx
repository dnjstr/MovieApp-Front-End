import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface LoginFormData {
    identifier: string;
    password: string;
}

interface LocationState {
    identifier?: string;
}

interface LoginResponse {
    message: string;
    token: string;
    role: 'admin' | 'user';
    error?: string;
}

const SignIn: React.FC = () => {
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data: LoginResponse = await response.json();

            if (!response.ok) {
                setError(data.error || "Invalid credentials");
                setIsLoading(false);
                return;
            }

            setSuccess(
                data.role === 'admin' 
                    ? "Login successful! Redirecting to admin panel..." 
                    : "Login successful! Redirecting to homepage..."
            );
            login(data.token, data.role, { name: "", email: formData.identifier });
            
            setFormData({ identifier: "", password: "" });
            
            setTimeout(() => {
                if (data.role === 'admin') {
                    window.location.href = 'http://127.0.0.1:8000/admin/';
                } else {
                    navigate("/");
                }
            }, 1500);

            window.onpageshow = function(event) {
                if (event.persisted) {
                    window.location.reload();
                }
            };

        } catch (error) {
            setError("Failed to connect to server");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 mx-auto">
            <div className="signin-page-container absolute top-0 right-0 w-full h-full z-0"></div>
            <div className="flex z-10">
                <div className="bg-black bg-opacity-25 p-8 rounded-lg shadow-lg relative w-[350px] px-4 border border-gray-700">
                    <Link
                        to="/"
                        className="absolute top-2 left-0 text-orange-500 font-bold px-4 py-2 rounded-lg hover:text-orange-600 transition duration-200 animate-spin"
                    >
                        <svg
                            className="w-5 text-white hover:text-orange-600 transition duration-200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M343.656 451.109C410 411.438 454.422 338.906 454.422 256c0-125.484-101.719-227.219-227.203-227.219C101.719 28.781 0 130.516 0 256s101.719 227.219 227.219 227.219H512v-32.109H343.656zM318.484 145.875c23.547-13.594 53.641-5.531 67.234 18.016s5.531 53.656-18.016 67.25c-23.547 13.578-53.641 5.516-67.234-18.016-13.609-23.562-5.531-53.656 18.016-67.25zM300.453 297.688c13.609-23.547 43.703-31.609 67.25-18.016 23.547 13.609 31.609 43.703 18.016 67.25s-43.688 31.609-67.25 18.016c-23.547-13.609-31.625-43.719-18.016-67.25zM227.219 72.375c27.188 0 49.219 22.031 49.219 49.219s-22.031 49.25-49.219 49.25-49.25-22.063-49.25-49.25 22.063-49.219 49.25-49.219zM249.938 256c0 12.563-10.172 22.719-22.719 22.719-12.563 0-22.719-10.156-22.719-22.719s10.156-22.719 22.719-22.719c12.547 0 22.719 10.156 22.719 22.719zM68.703 163.891c13.594-23.547 43.703-31.609 67.25-18.016s31.609 43.688 18.016 67.25c-13.594 23.531-43.703 31.609-67.25 18.016-23.547-13.609-31.625-43.719-18.016-67.25zM135.969 364.938c-23.563 13.594-53.656 5.531-67.266-18.016-13.578-23.547-5.516-53.656 18.016-67.266 23.547-13.594 53.656-5.516 67.25 18.031s5.531 53.641-18.016 67.25zM177.969 389.203c0-27.188 22.063-49.234 49.25-49.234s49.219 22.047 49.219 49.234-22.031 49.234-49.219 49.234-49.25-22.047-49.25-49.234z" />
                        </svg>
                    </Link>
    
                    <h2 className="text-2xl text-white font-bold text-center mb-2">Sign In</h2>
                    <p className="text-center text-[15px] text-gray-200 mb-2">Welcome back! 
                        <span className="text-gray-200 ms-1 text-[13px]">Please sign in to continue.</span>
                    </p>
    
                    <div className="h-[5px] w-full mb-5">
                        {error && (
                            <div className="text-red-700 rounded text-center text-xs font-bold">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="text-green-500 rounded text-center text-xs">
                                {success}
                            </div>
                        )}
                    </div>
    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="identifier"
                                value={formData.identifier}
                                onChange={handleChange}
                                placeholder="Email or Phone Number"
                                className="sign-in-up-input bg-black bg-opacity-30 text-white w-full p-3 px-3 border-l-2 border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="sign-in-up-input bg-black bg-opacity-30 text-white w-full p-3 px-3 border-l-2 border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-black bg-opacity-30 border border-orange-700 text-white py-3 rounded-md font-bold 
                                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600 hover:bg-opacity-40'} 
                                transition duration-300`}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
    
                    <p className="text-center text-gray-300 mt-4 text-sm">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-orange-500 text-[16px] font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );    
};

export default SignIn;
