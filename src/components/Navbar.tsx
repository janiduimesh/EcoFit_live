

import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'FEATURES', path: '#features' },
        { name: 'ABOUT', path: '#about' },
        { name: 'DOCUMENTS', path: '#documents' },
        { name: 'MILESTONES', path: '#timeline' },
        { name: 'DOMAIN', path: '#domain' },
        { name: 'TEAM', path: '#team' },
        { name: 'CONTACT', path: '#contact' },
    ];

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <button onClick={() => scrollToSection('#')} className="flex items-center space-x-2">
                            <Rocket className="h-8 w-8 text-indigo-600" />
                            <span className="font-bold text-xl text-gray-900">EcoFit Research</span>
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className="px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:text-emerald-600 transition-colors duration-200 uppercase"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;
