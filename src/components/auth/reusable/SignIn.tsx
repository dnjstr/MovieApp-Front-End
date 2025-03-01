import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../sign-in/SignInForm";
import SignInHeader from "../sign-in/SignInHeader";

const SignIn: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 mx-auto">
            <div className="signin-page-container absolute top-0 right-0 w-full h-full z-0"></div>
            <div className="flex z-10">
                <div className="bg-black bg-opacity-25 p-8 rounded-lg shadow-lg relative w-[350px] px-4 border border-gray-700">
                    <Link
                        to="/"
                        className="absolute top-2 left-0 text-orange-500 font-bold px-4 py-2 rounded-lg hover:text-orange-600 transition duration-200"
                    >
                        ⬅ Back
                    </Link>

                    <SignInHeader />
                    <SignInForm />

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
