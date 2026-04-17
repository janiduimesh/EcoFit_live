import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logoImage from '../assets/waste_logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#' },
        { name: 'About', path: '#about' },
        { name: 'Documents', path: '#documents' },
        { name: 'Presentations', path: '#presentations' },
        { name: 'Milestones', path: '#timeline' },
        { name: 'Domain', path: '#domain' },
        { name: 'Team', path: '#team' },
        { name: 'Contact', path: '#contact' },
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <button onClick={() => scrollToSection('#')} className="flex items-center space-x-2 cursor-pointer">
                            <img src={logoImage} alt="Logo" className="h-12 w-auto" />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                    scrolled
                                        ? 'text-gray-700 hover:text-emerald-600'
                                        : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        {/* Search bar */}
                        <div className={`flex items-center ml-4 border rounded-md px-2 py-1 transition-colors duration-200 ${
                            scrolled ? 'border-gray-300' : 'border-white/30'
                        }`}>
                            <input
                                type="text"
                                placeholder="Search"
                                className={`bg-transparent text-sm outline-none w-24 placeholder-current ${
                                    scrolled ? 'text-gray-600 placeholder-gray-400' : 'text-white/80 placeholder-white/50'
                                }`}
                            />
                            <Search className={`w-4 h-4 ${scrolled ? 'text-gray-400' : 'text-white/60'}`} />
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none cursor-pointer ${scrolled ? 'text-gray-600' : 'text-white'}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 cursor-pointer"
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
