
import React from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide relative inline-block">
                    {title}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform translate-y-2"></span>
                </h2>
            )}
            {children}
        </section>
    );
};

export default Section;
