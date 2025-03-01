import React from "react";

const SignInHeader: React.FC = () => {
    return (
        <>
            <h2 className="text-2xl text-white font-bold text-center mb-2">Sign In</h2>
            <p className="text-center text-[15px] text-gray-200 mb-2">
                Welcome back! <span className="text-gray-200 ms-1 text-[13px]">Please sign in to continue.</span>
            </p>
        </>
    );
};

export default SignInHeader;
