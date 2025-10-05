
import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<{ isDarkMode: boolean; setIsDarkMode: (isDark: boolean) => void; }> = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
    )
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isDarkMode, setIsDarkMode }) => {
  return (
    <header className="sticky top-0 z-30 w-full p-4 bg-white/50 dark:bg-dark-primary/50 backdrop-blur-xl border-b border-white/20 dark:border-dark-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
            <button onClick={toggleSidebar} className="sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-secondary border-transparent focus:border-electric-blue-500 focus:ring-electric-blue-500 dark:focus:border-electric-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <button className="p-2 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-dark-border">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
          <img src="https://picsum.photos/100" alt="profile" className="w-9 h-9 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
