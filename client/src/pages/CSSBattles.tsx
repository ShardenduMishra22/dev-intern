import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../index.css';
import Card from '../components/Card';

const CSSBattles: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  // Handle card click navigation
  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-white text-gray-900'} transition-colors duration-300`}>
      {/* Include the Navbar and pass the dark mode props */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="pt-20"> {/* Adjust padding to avoid overlap with navbar */}
        <h1 className="text-5xl font-bold text-center">A Competitive Development Platform</h1>
        <div className="css-battles-page">
          <div className="flex sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 space-x-6 justify-center">
            <div className='w-1/4' onClick={() => handleCardClick('/battle1')}>
              <Card title="CSS Battle 1" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skills" />
            </div>
            <div className='w-1/4' onClick={() => handleCardClick('/battle2')}>
              <Card title="CSS Battle 2" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skills" />
            </div>
            <div className='w-1/4' onClick={() => handleCardClick('/battle3')}>
              <Card title="CSS Battle 3" text="CSS Battles is a competitive CSS sport in which competitors compete by replicating the target image using their CSS skills" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSBattles;
