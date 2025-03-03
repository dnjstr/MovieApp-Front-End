import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { usePreferences } from "../context/PreferencesContext";
import { useCurrentUser } from "./useCurrentUser";

const useProfileModal = (onRequestClose: () => void) => {
  const { logout } = useAuth();
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const { bgColor, textColor } = usePreferences();
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayName = () => {
    if (currentUser?.user?.fullName) return currentUser.user.fullName;
    if (currentUser?.name) return currentUser.name;
    if (currentUser?.email) {
      const username = currentUser.email.split('@')[0];
      return username
        ? username
            .replace(/[._]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase())
        : 'User';
    }
    return 'User';
  };

  const handleLogout = () => {
    logout();
    onRequestClose();
  };

  return { currentTime, bgColor, textColor, currentUser, getDisplayName, handleLogout };
};

export default useProfileModal;
