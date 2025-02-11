import React from "react";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-black font-bold text-center mb-4">Sign In</h2>
                <p className="text-black text-center mb-6">
                    Sign in to your account to continue.
                </p>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Email or Mobile Number</label>
                        <input
                            type="text"
                            className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Email address or mobile number"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Sign In
                    </button>

                    <div className="text-center mt-4">
                        <Link to="/forgot-password" className="text-gray-600  hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="text-gray-600 text-center mt-4">
                            Don't have an account?{" "}
                        <Link to="/sign-up" className="text-orange-500 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignIn;
