
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Page } from '../types';
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';
import DemandPage from './pages/DemandPage';
import BotsPage from './pages/BotsPage';
import ReportsPage from './pages/ReportsPage';

interface DashboardLayoutProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const renderPage = (page: Page) => {
  switch (page) {
    case Page.Home:
      return <HomePage />;
    case Page.Stock:
      return <StockPage />;
    case Page.Demand:
        return <DemandPage />;
    case Page.Bots:
        return <BotsPage />;
    case Page.Reports:
        return <ReportsPage />;
    case Page.Settings:
        return <div className="text-white">Settings Page</div>;
    default:
      return <HomePage />;
  }
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage={currentPage} setPage={setCurrentPage} isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col sm:ml-64">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex-grow p-6">
          {renderPage(currentPage)}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
