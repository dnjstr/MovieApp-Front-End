import React from "react";
import SignUpForm from "../sign-up/SignUpForm";
import SignUpHeader from "../sign-up/SignUpHeader";

const SignUp: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen relative">
            <div className="signin-page-container absolute top-0 left-0 w-full h-full z-0"></div>
            <div className="flex z-10">
                <div className="bg-black bg-opacity-25 p-8 rounded-lg shadow-lg relative w-[380px] px-4 border border-gray-700">
                    <SignUpHeader />
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
