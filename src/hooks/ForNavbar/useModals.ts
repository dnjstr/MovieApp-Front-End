import { useState } from 'react';

export const useModals = () => {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openPreferences = () => setIsPreferencesOpen(true);
  const closePreferences = () => setIsPreferencesOpen(false);
  
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  return {
    isPreferencesOpen,
    isProfileModalOpen,
    openPreferences,
    closePreferences,
    openProfileModal,
    closeProfileModal
  };
};