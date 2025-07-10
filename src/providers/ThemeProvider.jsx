// Theme Context - Like Controlling Building Lights
import { createContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider - The lighting control system
function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    // Load theme preference from localStorage on startup
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
        setIsDark(savedTheme === 'dark');
        }
    }, []);

    // Save theme preference whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // Apply theme to body class for global styling
        document.body.className = isDark ? 'dark' : 'light';
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    const value = {
        isDark,
        theme: isDark ? 'dark' : 'light',
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeProvider, ThemeContext}