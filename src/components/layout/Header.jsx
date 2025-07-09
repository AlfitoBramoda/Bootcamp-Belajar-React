import React from 'react';
import { Link, useLocation } from 'react-router';

const Header = () => {
    const location = useLocation()

    const isActive = (path) => {
        if(path === '/') {
            return location.pathname === '/'
        }
        return location.pathname.startsWith(path)
    }
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-xl font-bold text-gray-800">Kelompok 5</Link>
                <div className="flex space-x-6">
                    <Link 
                        to="/about" 
                        className={`font-medium ${
                            isActive('/about') 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-600 hover:text-blue-500'
                        }`}
                    >
                        About
                    </Link>
                    <Link 
                        to="/dashboard" 
                        className={`font-medium ${
                            isActive('/dashboard') 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-600 hover:text-blue-500'
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link 
                        to="/login" 
                        className={`font-medium ${
                            isActive('/login') 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-600 hover:text-blue-500'
                        }`}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;