import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Redirect to sign-in if no user is logged in
    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    // Mock data for multiple profiles (you can replace this with actual data)
    const profiles = [
        {
            id: 1,
            name: "Den Jester",
            profilePic: "https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Png/noFilter",
        },
        {
            id: 2,
            name: "Glenn Anino",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgx14h0t8-iOZNYArHhQyUaHQF2ylS61T1ag&s",
        },
        {
            id: 3,
            name: "John Cyril",
            profilePic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d733c1e1-d7d1-4f92-9abb-628b1aa5af6a/dfzlns7-c3089e5b-f230-4a67-b56a-706f105c6bed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MzNjMWUxLWQ3ZDEtNGY5Mi05YWJiLTYyOGIxYWE1YWY2YVwvZGZ6bG5zNy1jMzA4OWU1Yi1mMjMwLTRhNjctYjU2YS03MDZmMTA1YzZiZWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GER60TdONmCscZ3QvsDf0bVQRk9bsnhdB7FB9RviXK0",
        },
        {
            id: 4,
            name: "Sophia Marie",
            profilePic: "https://i.pinimg.com/1200x/82/58/1e/82581e5782fa446db795971c0884e500.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            {/* Back Button */}
            <button 
                className="absolute top-6 left-6 px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => navigate(-1)} 
            >
                ←
            </button>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">Who's Watching?</h1>

            {/* Profile Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform relative"
                        onClick={() => {
                            if (profile.name === "Add Profile") {
                                console.log("Add Profile clicked");
                            } else {
                                navigate("/");
                            }
                        }}
                    >
                        <img
                            src={profile.profilePic}
                            alt={profile.name}
                            className={`w-32 h-32 rounded-lg border-2 ${
                                user?.name === profile.name
                                    ? "border-orange-600"
                                    : "border-transparent hover:border-white"
                            }`}
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Png/noFilter";
                            }}
                        />
                        <p className="mt-2 text-lg text-gray-400">{profile.name}</p>

                        {user?.name === profile.name && (
                            <div className="absolute top-0 right-0 bg-orange-600 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Logout Button */}
            <button
                className="mt-12 px-6 py-2 bg-transparent border-2 border-orange-500 text-gray-500 rounded-lg hover:bg-red-700 hover:text-white transition"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
};

export default ProfilePage;
