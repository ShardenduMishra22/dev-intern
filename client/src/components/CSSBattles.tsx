import React, { useState } from 'react';
import { Moon, Sun, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Card from './Card';


const CSSBattles: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-white text-gray-900'} transition-colors duration-300`}>
      {/* Unique wrapper class */}
      <header className="relative top-0 left-0 right-0 z-10 ">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src='/devforces.jpeg' alt='DevForces Platform Logo' className="h-10 mr-3" />
            <div className="text-2xl font-bold">DevForces</div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-800 transition-colors duration-300" aria-label="Visit DevForces GitHub">
              <Github size={24} />
            </a>
          </div>
        </nav>
      </header>


     <div className='pt-15'>
     <h1 className="text-5xl font-bold text-center">A Competitive Development Platform</h1>
      <div className="css-battles-page "> 
        <div className="flex sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 space-x-6 justify-center">
          <div className='w-1/4 ' onClick={() => handleCardClick('/battle1')}>
            <Card title="CSS Battle 1" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skils " />
          </div>
          <div className='w-1/4' onClick={() => handleCardClick('/battle2')}>
            <Card title="CSS Battle 2" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skils " />
          </div>
        
          <div className='w-1/4' onClick={() => handleCardClick('/battle3')}>
            <Card title="CSS Battle 3" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skils " />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default CSSBattles;
