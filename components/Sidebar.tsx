
import React from 'react';
import { Page } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setPage, isOpen }) => {
  const navItems = Object.values(Page);

  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-white/30 dark:bg-dark-secondary/50 backdrop-blur-xl border-r border-white/20 dark:border-dark-border`}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="flex items-center pl-2.5 mb-5">
            <span className="text-2xl mr-2">🤖</span>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">AI Warehouse</span>
        </div>
        <ul className="space-y-2 font-medium">
          {navItems.map((page) => (
            <li key={page}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page);
                }}
                className={`flex items-center p-2 rounded-lg group transition-colors ${
                  currentPage === page
                    ? 'bg-electric-blue-500 text-white'
                    : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-border'
                }`}
              >
                {ICONS[page]}
                <span className="ml-3">{page}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
