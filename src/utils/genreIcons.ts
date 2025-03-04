export const genreIcons: { [key: string]: { icon: string } } = {
    Action: { icon: '🚀' },
    Drama: { icon: '🎭' },
    Comedy: { icon: '😄' },
    Horror: { icon: '💀' },
    Romance: { icon: '❤️' },
    Adult: { icon: '🍆' },
    Musical: { icon: '🎵' },
    Mystery: { icon: '🦇' },
    Fantasy: { icon: '🧙‍♂️' },
    Adventure: { icon: '🗺️' },
    Family: { icon: '👨‍👩‍👧‍👦' },
    'Fairy Tale': { icon: '🧚‍♀️' },
    'Space Opera': { icon: '👽' },
    'Science Fiction': { icon: '🤖' },
    Thriller: { icon: '🔪' },
    Suspense: { icon: '🕵️' },
};

export const getGenreIcon = (genre: string) =>
    genreIcons[genre] || { icon: '🎬' };

// export const genreIcons: { [key: string]: { icon: string; color: string } } = {
//     Action: { icon: '🚀', color: 'bg-orange-500' },
//     Drama: { icon: '🎭', color: 'bg-gray-500' },
//     Comedy: { icon: '😄', color: 'bg-orange-500' },
//     Horror: { icon: '💀', color: 'bg-gray-500' },
//     Romance: { icon: '❤️', color: 'bg-orange-500' },
//     Adult: { icon: '🍆', color: 'bg-gray-500' },
//     Musical: { icon: '🎵', color: 'bg-orange-500' },
//     Mystery: { icon: '🦇', color: 'bg-gray-500' },
//     Fantasy: { icon: '🧙‍♂️', color: 'bg-orange-500' },
//     Adventure: { icon: '🗺️', color: 'bg-gray-500' },
//     Family: { icon: '👨‍👩‍👧‍👦', color: 'bg-orange-400' },
//     'Fairy Tale': { icon: '🧚‍♀️', color: 'bg-gray-500' },
//     'Space Opera': { icon: '👽', color: 'bg-orange-500' },
//     'Science Fiction': { icon: '🤖', color: 'bg-gray-500' },
//     Thriller: { icon: '🔪', color: 'bg-orange-500' },
//     Suspense: { icon: '🕵️', color: 'bg-gray-600' },
// };

// export const getGenreIcon = (genre: string) => 
//     genreIcons[genre] || { icon: '🎬', color: 'bg-gray-500' };
