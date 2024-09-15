import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClick = () => {
    navigate('/css');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-300 text-gray-900'} transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative">
        {/* Full-Screen Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              DevForces | A Competitive Development Platform 
            </h1>
            <p className={`text-xl md:text-2xl mb-10 animate-fade-in-up animation-delay-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your own platform to compete, learn, and master{' '}
            <span className={`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>
              CSS, Cloud
            </span>{' '}
            and <span className={`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>Development.</span> Showcase your skills
            and climb the <span className={`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>ranks.</span>
          </p>

            <div className="animate-fade-in-up animation-delay-600">
              <button 
                onClick={handleClick} 
                className={`px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
                aria-label="Get Started with DevForces"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Subtle Background Element */}
        <div className="absolute inset-x-0 bottom-0 h-40 lg:h-64 overflow-hidden pointer-events-none">
          {isDarkMode ? (
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="rgba(75,85,99,0.1)" 
                fillOpacity="1" 
                d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          ) : (
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="url(#gradient)" 
                fillOpacity="0.2" 
                d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(168,85,247,0.4)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(168,85,247,0.1)' }} />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
