import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

interface User {
    name: string;
    email: string;
    profilePic?: string;
}

const ProfilePage = () => {
    // const { user, logout } = useAuth(); // Use user and logout from useAuth
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/sign-in'); 
    };

    return (
        <div></div>
        // <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        //     {/* Title */}
        //     <h1 className="text-4xl font-bold mb-8">Who's Watching?</h1>

        //     {/* Profile Grid */}
        //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        //         {ProfilePage.map((profile) => (
        //             <div
        //                 key={profile.id}
        //                 className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform relative"
        //                 onClick={() => {
        //                     if (profile.name === "Add Profile") {
        //                         // Handle adding a new profile
        //                         console.log("Add Profile clicked");
        //                     } else {
        //                         // Navigate to the selected profile
        //                         navigate("/");
        //                     }
        //                 }}
        //             >
        //                 {/* Profile Image */}
        //                 <img
        //                     src={profile.profilePic}
        //                     alt={profile.name}
        //                     className={`w-32 h-32 rounded-lg border-2 ${
        //                         user?.name === profile.name
        //                             ? "border-orange-600" // Highlight the current user
        //                             : "border-transparent hover:border-white"
        //                     }`}
        //                     onError={(e) => {
        //                         e.currentTarget.src =
        //                             "https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Png/noFilter";
        //                     }}
        //                 />
        //                 {/* Profile Name */}
        //                 <p className="mt-2 text-lg text-gray-400">{profile.name}</p>

        //                 {/* Current User Indicator */}
        //                 {user?.name === profile.name && (
        //                     <div className="absolute top-0 right-0 bg-orange-600 rounded-full p-1">
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             className="h-5 w-5 text-white"
        //                             viewBox="0 0 20 20"
        //                             fill="currentColor"
        //                         >
        //                             <path
        //                                 fillRule="evenodd"
        //                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        //                                 clipRule="evenodd"
        //                             />
        //                         </svg>
        //                     </div>
        //                 )}
        //             </div>
        //         ))}
        //     </div>

        //     {/* Logout Button */}
        //     <button
        //         className="mt-12 px-6 py-2 bg-transparent border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition"
        //         onClick={handleLogout}
        //     >
        //         Logout
        //     </button>
        // </div>
    );
};

export default ProfilePage;