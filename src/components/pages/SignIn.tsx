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

    // Clear the location state after using it
    useEffect(() => {
        if (identifier) {
            // Clear the navigation state
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
            login(data.token, data.role);
            
            // Clear form
            setFormData({ identifier: "", password: "" });
            
            // Delay navigation to show success message
            setTimeout(() => {
                // Redirect based on user role
                if (data.role === 'admin') {
                    window.location.href = 'http://127.0.0.1:8000/admin/';
                } else {
                    navigate("/");
                }
            }, 1500);

            // Add this to handle back navigation from admin
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
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex">
                <div className="movie-card-photo text-white p-8 rounded-l-lg flex flex-col justify-center items-center w-1/2 relative">
                    <Link
                        to="/"
                        className="absolute top-4 left-4 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        ←
                    </Link>

                    <div>
                        <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                        <p className="text-x text-center max-w-md">
                            Sign in to your account to continue watching your favorite movies.
                        </p>
                    </div>

                    <div className="mt-8 animate-spin">
                        <svg
                            className="w-16 h-16 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M343.656 451.109C410 411.438 454.422 338.906 454.422 256c0-125.484-101.719-227.219-227.203-227.219C101.719 28.781 0 130.516 0 256s101.719 227.219 227.219 227.219H512v-32.109H343.656zM318.484 145.875c23.547-13.594 53.641-5.531 67.234 18.016s5.531 53.656-18.016 67.25c-23.547 13.578-53.641 5.516-67.234-18.016-13.609-23.562-5.531-53.656 18.016-67.25zM300.453 297.688c13.609-23.547 43.703-31.609 67.25-18.016 23.547 13.609 31.609 43.703 18.016 67.25s-43.688 31.609-67.25 18.016c-23.547-13.609-31.625-43.719-18.016-67.25zM227.219 72.375c27.188 0 49.219 22.031 49.219 49.219s-22.031 49.25-49.219 49.25-49.25-22.063-49.25-49.25 22.063-49.219 49.25-49.219zM249.938 256c0 12.563-10.172 22.719-22.719 22.719-12.563 0-22.719-10.156-22.719-22.719s10.156-22.719 22.719-22.719c12.547 0 22.719 10.156 22.719 22.719zM68.703 163.891c13.594-23.547 43.703-31.609 67.25-18.016s31.609 43.688 18.016 67.25c-13.594 23.531-43.703 31.609-67.25 18.016-23.547-13.609-31.625-43.719-18.016-67.25zM135.969 364.938c-23.563 13.594-53.656 5.531-67.266-18.016-13.578-23.547-5.516-53.656 18.016-67.266 23.547-13.594 53.656-5.516 67.25 18.031s5.531 53.641-18.016 67.25zM177.969 389.203c0-27.188 22.063-49.234 49.25-49.234s49.219 22.047 49.219 49.234-22.031 49.234-49.219 49.234-49.25-22.047-49.25-49.234z" />
                        </svg>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-r-lg shadow-lg w-2/3">
                    <h2 className="text-2xl text-black font-bold text-center mb-4">Sign In</h2>
                    <p className="text-center text-black mb-6">Welcome back! Please sign in to continue.</p>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="identifier"
                                value={formData.identifier}
                                onChange={handleChange}
                                placeholder="Email or Phone Number"
                                className="text-black w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                                className="text-black w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-orange-500 text-white py-3 rounded-md font-bold 
                                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'} 
                                transition duration-300`}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-orange-500 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;