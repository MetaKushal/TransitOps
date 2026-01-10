import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <ShieldCheck className="h-8 w-8 text-brand-blue" />
                            <span className="text-xl font-bold text-brand-dark tracking-tight">
                                Digital Consent Manager
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Features</a>
                        <a href="#compliance" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Compliance</a>
                        <a href="#impact" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Impact</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
                            Login
                        </Link>
                        <Link to="/signup" className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-sm">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
