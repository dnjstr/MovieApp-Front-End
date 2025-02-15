import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


interface User {
    name: string;
    email: string;
    profilePic?: string;
}

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/sign-in'); 
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            {user ? (
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center">
                    <img 
                        src={user.profilePic || '/default-avatar.png'} 
                        alt="Profile" 
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-orange-500"
                    />
                    <h2 className="text-xl font-semibold">{user?.name}</h2>
                    <p className="text-gray-400">{user?.email}</p>
                    <button 
                        onClick={handleLogout} 
                        className="mt-4 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading..</p>
            )}
        </div>
    );
};

export default ProfilePage;
