import React from 'react';
import { Github, Languages, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NavConfig } from '../../data/types';

interface NavbarProps {
  navData: NavConfig;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'es' | 'en';
  toggleLanguage: () => void;
  githubLink: string;
}

const Navbar: React.FC<NavbarProps> = ({
  navData,
  activeSection,
  scrollToSection,
  language,
  toggleLanguage,
  githubLink,
}) => {
  const { theme, toggleTheme } = useTheme();
  const navItems = Object.keys(navData) as Array<keyof NavConfig>;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            BZ
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === (key === 'home' ? 'hero' : key)
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                {navData[key]}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
