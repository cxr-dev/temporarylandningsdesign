
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center rounded-lg group-hover:bg-blue-500 transition-colors">
              <span className="text-white dark:text-black font-bold text-xl">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-black dark:text-white">NovaArch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-black/60 dark:text-white/60">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Products</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Developers</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="hidden md:block text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:opacity-80 transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
