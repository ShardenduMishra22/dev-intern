import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../store/theme-provider'; 

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme(); 

  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="../../df_logo_256.png" alt="DevForces Logo" className="h-10 mr-2" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
            <img src="/google.png" alt="Google Logo" className="h-6 mr-2" />
            <span className="text-base font-medium text-gray-700">Sign in</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
