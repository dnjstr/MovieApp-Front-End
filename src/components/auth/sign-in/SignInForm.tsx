import React from "react";
import useSignIn from "../../../hooks/useSignIn";

const SignInForm: React.FC = () => {
    const { formData, error, success, isLoading, handleChange, handleSubmit } = useSignIn();

    return (
        <>
            {error && <div className="text-red-700 text-center text-xs font-bold">{error}</div>}
            {success && <div className="text-green-500 text-center text-xs">{success}</div>}

            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="Email or Phone Number"
                    className="sign-in-up-input"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="sign-in-up-input"
                    required
                />
                <button type="submit" disabled={isLoading} className={`sign-in-btn ${isLoading && "opacity-70"}`}>
                    {isLoading ? "Signing in..." : "Sign In"}
                </button>
            </form>
        </>
    );
};

export default SignInForm;
