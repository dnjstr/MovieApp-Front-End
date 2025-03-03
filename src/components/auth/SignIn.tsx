import React from "react";
import SignInForm from "./sign-in/SignInForm";
import SignInHeader from "./sign-in/SignInHeader";

const SignIn: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 mx-auto">
            <div className="signin-page-container absolute top-0 right-0 w-full h-full z-0"></div>
            <div className="flex z-10">
                <div className="bg-black bg-opacity-25 p-8 rounded-lg shadow-lg relative w-[350px] px-4 border border-gray-700">
                    <SignInHeader />
                    <SignInForm />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
