import React from "react";
import { Link } from "react-router-dom";

const SignUpHeader: React.FC = () => (
    <>
        <Link
            to="/sign-in"
            className="absolute top-2 left-0 text-orange-500 font-bold px-4 py-2 rounded-lg hover:text-orange-600 transition duration-200"
        >
            ← Back
        </Link>
        <h2 className="text-2xl text-white font-bold text-center mb-4">Sign Up</h2>
        <p className="text-center text-gray-200 mb-6 text-[15px]">
            Create a new account to continue.
        </p>
    </>
);

export default SignUpHeader;
