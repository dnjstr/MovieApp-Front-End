import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../assets/Avatar";

interface User {
    name?: string;
    email?: string;
    user?: {
        fullName?: string;
    };
    profileImage?: string;
}

const ProfilePage = () => {
    const { user, logout, loading } = useAuth();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate("/sign-in");
        } else {
            setCurrentUser(user as User);
        }
    }, [user, loading, navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/sign-in");
    };

    // Get display name safely
    const getDisplayName = () => {
        if (currentUser?.user?.fullName) return currentUser.user.fullName;
        if (currentUser?.name) return currentUser.name;
        return 'User';
    };

    if (loading) {
        return <div className="text-white min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
            <div className="absolute top-4 left-4 text-lg font-semibold text-gray-300">
                {currentTime}
            </div>

            {currentUser ? (
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-96">
                    <div className="flex justify-center mb-6">
                        <Avatar 
                            name={getDisplayName()}
                            imageUrl={currentUser.profileImage}
                            size="lg"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold">
                        {getDisplayName()}
                    </h2>
                    <p className="text-gray-400 mt-2">
                        {currentUser.email || 'No email provided'}
                    </p>
                </div>
            ) : (
                <p className="text-gray-400">No user information available.</p>
            )}

            <div className="mt-6 flex space-x-4">
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>

                <button
                    className="px-6 py-2 bg-transparent border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;