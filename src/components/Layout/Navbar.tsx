import React from 'react';
import { Github, Languages } from 'lucide-react';

interface NavbarProps {
  navData: { [key: string]: string };
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BZ
          </div>
          <div className="hidden md:flex space-x-8">
            {Object.keys(navData).map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === (key === 'home' ? 'hero' : key)
                    ? 'text-blue-400'
                    : 'text-gray-300'
                }`}
              >
                {navData[key]}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg border border-gray-600 hover:border-blue-400"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
