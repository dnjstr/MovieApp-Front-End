import React from "react";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen relative">
            <div className="flex">
                <div className="movie-card-photo text-white p-8 rounded-l-lg flex flex-col justify-center items-center w-1/2 relative">
                    
                    {/* Back to Home Button eut*/}
                    <Link to="/" className="absolute top-4 left-4 bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200">
                        ← Back to Home
                    </Link>

                    <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                    <p className="text-x text-center max-w-md">
                        We're excited to have you back. Sign in to access your account and continue your journey with us.
                    </p>
                    <div className="animate-spin mt-9 ">
                        <svg
                        className="w-16 h-16 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor">
                        <path
                        d="M343.656 451.109C410 411.438 454.422 338.906 454.422 256c0-125.484-101.719
                        -227.219-227.203-227.219C101.719 28.781 0 130.516 0 256s101.719 227.219 227.219 227.219H512v-32.109H343.656zM318.484 145.875c23.547
                        -13.594 53.641-5.531 67.234 18.016s5.531 53.656-18.016 67.25c-23.547 13.578-53.641 5.516-67.234-18.016-13.609-23.562-5.531-53.656 
                        18.016-67.25zM300.453 297.688c13.609-23.547 43.703-31.609 67.25-18.016 23.547 13.609 31.609 43.703 18.016 67.25s-43.688 31.609-67.25 
                        18.016c-23.547-13.609-31.625-43.719-18.016-67.25zM227.219 72.375c27.188 0 49.219 22.031 49.219 49.219s-22.031 49.25-49.219 49.25-49.25
                        -22.063-49.25-49.25 22.063-49.219 49.25-49.219zM249.938 256c0 12.563-10.172 22.719-22.719 22.719-12.563 0-22.719-10.156-22.719-22.719s10.156
                        -22.719 22.719-22.719c12.547 0 22.719 10.156 22.719 22.719zM68.703 163.891c13.594-23.547 43.703-31.609 67.25-18.016s31.609 43.688 18.016 67.25c-13.594 
                        23.531-43.703 31.609-67.25 18.016-23.547-13.609-31.625-43.719-18.016-67.25zM135.969 364.938c-23.563 13.594-53.656 5.531-67.266-18.016-13.578-23.547
                        -5.516-53.656 18.016-67.266 23.547-13.594 53.656-5.516 67.25 18.031s5.531 53.641-18.016 67.25zM177.969 389.203c0-27.188 22.063-49.234 49.25-49.234s49.219 
                        22.047 49.219 49.234-22.031 49.234-49.219 49.234-49.25-22.047-49.25-49.234z"/>
                        </svg>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-white p-16 rounded-r-lg  w-2/3">
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
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your password"
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
                            <Link to="/forgot-password" className="text-gray-600 hover:underline">
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
        </div>
    );
};

export default SignIn;