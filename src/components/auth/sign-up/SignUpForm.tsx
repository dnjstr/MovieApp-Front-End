import React from "react";
import { Link } from "react-router-dom";
import SignUpInput from "./SignUpInput";
import useSignUp from "../../../hooks/ForSignIn-SignUp/useSignUp";

const SignUpForm: React.FC = () => {
    const { formData, error, success, isLoading, handleChange, handleSubmit } = useSignUp();

    return (
        <>
            <div className="h-[4px] w-full text-center text-xs">
                {error && <div className="text-red-700 font-bold">{error}</div>}
                {success && <div className="text-green-500">{success}</div>}
            </div>

            <form onSubmit={handleSubmit}>
                <SignUpInput type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                <SignUpInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                <SignUpInput type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <SignUpInput type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-black bg-opacity-30 border border-orange-700 text-white py-3 rounded-md font-bold 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600 hover:bg-opacity-40'} 
                        transition duration-300`}
                >
                    {isLoading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            <p className="text-center text-gray-400 mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-orange-500 font-semibold hover:underline text-[16px]">
                    Sign In
                </Link>
            </p>
        </>
    );
};

export default SignUpForm;
