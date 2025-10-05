
import React, { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import DashboardLayout from './components/DashboardLayout';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Default to dark mode, or use user's preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-gray-100 dark:bg-dark-primary transition-colors duration-300">
      {isLoggedIn ? (
        <DashboardLayout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
