import { create } from 'zustand';

interface Movie {
    id: number;
    title: string;
    poster_image: string;
    release_date: string;
}

interface NavbarState {
    isDropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;

    searchQuery: string;
    setSearchQuery: (query: string) => void;

    searchResults: Movie[];
    setSearchResults: (results: Movie[]) => void;

    showResults: boolean;
    setShowResults: (show: boolean) => void;

    isPreferencesOpen: boolean;
    setIsPreferencesOpen: (open: boolean) => void;

    isProfileModalOpen: boolean;
    setIsProfileModalOpen: (open: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
    isDropdownOpen: false,
    setDropdownOpen: (open) => set({ isDropdownOpen: open }),

    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),

    searchResults: [],
    setSearchResults: (results) => set({ searchResults: results }),

    showResults: false,
    setShowResults: (show) => set({ showResults: show }),

    isPreferencesOpen: false,
    setIsPreferencesOpen: (open) => set({ isPreferencesOpen: open }),

    isProfileModalOpen: false,
    setIsProfileModalOpen: (open) => set({ isProfileModalOpen: open }),
}));