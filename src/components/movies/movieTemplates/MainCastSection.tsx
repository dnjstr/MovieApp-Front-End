import React from 'react';

interface MainCastSectionProps {
    main_cast: string;
}

const MainCastSection: React.FC<MainCastSectionProps> = ({ main_cast }) => (
    <>
        <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Main Cast</h2>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
            {main_cast.split(',').map((actor, index) => (
                <span key={index} className="main-cast-bg px-3 py-1 text-white rounded-md shadow-md">
                    {actor.trim()}
                </span>
            ))}
        </div>
    </>
);

export default MainCastSection;
