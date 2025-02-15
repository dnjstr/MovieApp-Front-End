import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    name: string;
    email: string;
    profilePic?: string;
}

const defaultProfiles: User[] = [
    { name: "Den", email: "den@example.com", profilePic: "https://scontent-mnl1-2.xx.fbcdn.net/v/t1.15752-9/476455136_1175518644304930_5180096033181865921_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHsLosptyw7PPqgpBEj4GHrLm5b6gZPcBgublvqBk9wGD6Ef-7OgleICKVI8OzaI6bRuyvU4b7HcExpCY3F0tAQ&_nc_ohc=Yrf_BTaJXjQQ7kNvgHwIB_3&_nc_oc=AdjTrUhzMNvnZSvQqVeCug2pjR2jt6W1V3GfCc3kufGUHPH9uiaD4puCkTR9XZENlSs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&oh=03_Q7cD1gFalhKjk7jXqac6SNi5KFee33lWxyoDnwy23GyNnma9ZA&oe=67D7F922" },
    { name: "Cyril", email: "cyril@example.com", profilePic: "https://scontent-mnl1-2.xx.fbcdn.net/v/t1.15752-9/477616326_1421604242151738_3571589344579574307_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHOqr9SimBzBVaJYX8sU7oXqc-j9K2V8bmpz6P0rZXxuRZj1yoBkXhGzkVsdE3W9-SFCkTsPtr3L6YEO3smWXE6&_nc_ohc=YSeLaZS1_YoQ7kNvgERPc92&_nc_oc=AdinVVlyz_fEaMvIZ0RBVpCR0Yz-Xu_NOGD2fkNOYl2uAD5IMHh22WOZ8IxJAWVgG3Y&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&oh=03_Q7cD1gGlL4OtftMUfKm1cF6VBAywp85wh0xQBScZSTG_vXQCgw&oe=67D7F33A" },
    { name: "Glenn", email: "glenn@example.com", profilePic: "https://scontent-mnl3-2.xx.fbcdn.net/v/t1.15752-9/477049435_935339988809524_8169399567076835332_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHtnIfI9-MJXqIoR0MPaL9IiAg6PT3GaICICDo9PcZogNsbW7Tf7HFU8ReozVNsU64cIP4wcT9aks9a8WGPqvCc&_nc_ohc=ZoJhN-5myAkQ7kNvgHwtVeD&_nc_oc=Adj8yZaLgEXqXxmoduZ7KKTWJb_cLS6GcmrN41qPgBseJr1XRnktsrwajF3DhebRdKU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&oh=03_Q7cD1gHzclr5gW4UA2cuh2LSaxecbtCaIohQNCV67sdXRJmHlA&oe=67D81D21" },
    { name: "Sophia", email: "sophia@example.com", profilePic: "https://scontent-mnl3-2.xx.fbcdn.net/v/t1.15752-9/477624625_1173158931051240_3700815463563879020_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFYjTOreup2WTyNFaCXWa0MoLblHLYl4ROgtuUctiXhE-bc4TY2jdBVm2i5XHJVNfSZ8vuNGVsEgQb9J4CAAMpk&_nc_ohc=m99V9f5ffdUQ7kNvgEb3wvs&_nc_oc=Adhh4tDShKtnSosFsJIuykWaf_5u8kj6B_dYBjmCE6zznxfz2uWehB_prUXjpj6QHB4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&oh=03_Q7cD1gETy7zDuuw0D4pG5AcGFjDT5hnhF17DYYPppdhjZEqtDw&oe=67D80FB6" }
];

const ProfilePage = () => {
    const [profiles, setProfiles] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedProfiles = localStorage.getItem("profiles");
        if (storedProfiles) {
            setProfiles(JSON.parse(storedProfiles));
        } else {
            setProfiles(defaultProfiles);
            localStorage.setItem("profiles", JSON.stringify(defaultProfiles));
        }
    }, []);

    const handleSelectProfile = (profile: User) => {
        console.log("Selected Profile:", profile);
        localStorage.setItem("selectedProfile", JSON.stringify(profile));
        navigate(`/home?user=${encodeURIComponent(profile.email)}`);
    };

    const handleAddProfile = () => {
        const newProfileName = prompt("Enter new profile name:");
        if (!newProfileName) return;

        const newProfile: User = {
            name: newProfileName,
            email: `${newProfileName.toLowerCase().replace(/\s+/g, "")}@example.com`,
            profilePic: "https://via.placeholder.com/100/777777/FFFFFF?text=?"
        };

        const updatedProfiles = [...profiles, newProfile];
        setProfiles(updatedProfiles);
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    };

    const handleDeleteProfile = (email: string) => {
        const updatedProfiles = profiles.filter(profile => profile.email !== email);
        setProfiles(updatedProfiles);
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-black p-8 rounded-lg text-center shadow-lg">
                <h1 className="text-2xl font-semibold mb-6">Who's watching?</h1>
                <div className="flex justify-center space-x-6 mb-6">
                    {profiles.map((profile) => (
                        <div key={profile.email} className="text-center cursor-pointer">
                            <img 
                                src={profile.profilePic} 
                                alt={profile.name} 
                                className="w-20 h-20 rounded-md border-2 border-gray-500 transition-transform hover:scale-105"
                                onClick={() => handleSelectProfile(profile)}
                            />
                            <p className="mt-2 text-sm">{profile.name}</p>
                            <button 
                                className="mt-2 text-xs text-red-500 hover:underline"
                                onClick={() => {
                                    if (window.confirm(`Delete ${profile.name}?`)) {
                                        handleDeleteProfile(profile.email);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <div className="text-center cursor-pointer" onClick={handleAddProfile}>
                        <div className="w-20 h-20 rounded-md border-2 border-gray-500 flex items-center justify-center bg-gray-700 text-3xl text-white">+</div>
                        <p className="mt-2 text-sm">Add Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
