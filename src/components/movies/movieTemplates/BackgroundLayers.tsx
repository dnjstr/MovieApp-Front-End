import React from 'react';

interface BackgroundLayersProps {
    image: string;
}

const BackgroundLayers: React.FC<BackgroundLayersProps> = ({ image }) => (
    <>
        <div className="fixed inset-0 bg-cover bg-center opacity-50" 
            style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
    </>
);

export default BackgroundLayers;