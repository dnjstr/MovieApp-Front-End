import { ReactNode } from 'react';

const ContentContainer = ({ children }: { children: ReactNode }) => (
    <div className="relative z-10 mt-3">
        {children}
    </div>
);

export default ContentContainer;