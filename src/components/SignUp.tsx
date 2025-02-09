import React from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-black font-bold text-center mb-4">Sign Up</h2>
                <p className="text-center text-black mb-6">Create a new account to continue.</p>

                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/sign-in" className="text-orange-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
