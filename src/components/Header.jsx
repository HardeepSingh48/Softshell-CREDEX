import React, { useState, useEffect } from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (rotate) {
      const timer = setTimeout(() => setRotate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [rotate]);

  const handleToggle = () => {
    setRotate(true);
    toggleDarkMode();
  };

  return (
    <header className="p-4 flex justify-between items-center shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50 transition-colors duration-500">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-text">
        SoftSell
      </h1>
      <button
        onClick={handleToggle}
        className={`bg-gray-200 dark:bg-gray-700 p-3 rounded-full transition-transform duration-500 ${
          rotate ? 'rotate-180' : ''
        } shadow-md hover:scale-110`}
        aria-label="Toggle dark mode"
      >
        <span className="text-xl">{darkMode ? '🌞' : '🌙'}</span>
      </button>
    </header>
  );
};

export default Header;
