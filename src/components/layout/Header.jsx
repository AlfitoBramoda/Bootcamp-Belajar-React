import React from 'react';
import { Link, useLocation } from 'react-router';
import useTheme from '../../contexts/ThemeContext';
import useAuth from '../../contexts/AuthContext';

const Header = () => {
    const location = useLocation()
    const {isDark, toggleTheme} = useTheme()
    const {user, isAuthenticated, Logout} = useAuth()

    const isActive = (path) => {
        if(path === '/') {
            return location.pathname === '/'
        }
        return location.pathname.startsWith(path)
    }
    
    return (
        <header 
            className={`fixed top-0 left-0 w-full shadow-md z-10 ${
                isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-xl font-bold text-gray-800">
                {user ? `Hai ${user.name}` : `Hello, Login Dulu ya`}</Link>
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
                    {isAuthenticated ? (
                        <>
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
                            <button
                                onClick={Logout}
                                className={`font-medium ${
                                    isDark 
                                        ? 'text-gray-300 hover:text-red-400' 
                                        : 'text-gray-600 hover:text-red-500'
                                } transition`}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
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
                    )}
                    {/* <Link 
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
                    </Link> */}
                </div>
                <button
                    className={`cursor-pointer`}
                    onClick={toggleTheme}>
                        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>
        </header>
    );
};

export default Header;