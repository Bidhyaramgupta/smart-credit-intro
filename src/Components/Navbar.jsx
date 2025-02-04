import React, { useState, useEffect } from 'react';


import { Menu, X, Monitor, Zap, Settings, FileText } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">CompanyName</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2">Services</a>
                <a href="#investor" className="text-gray-700 hover:text-blue-600 px-3 py-2">Investor Connect</a>
                <a href="#tips" className="text-gray-700 hover:text-blue-600 px-3 py-2">Tips & Tricks</a>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                <a href="#investor" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Investor Connect</a>
                <a href="#tips" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tips & Tricks</a>
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
  