import React from 'react';
import { User, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    subtitle: string;
    viewProjects: string;
    downloadCV: string;
    learnMore: string;
    cvPath: string;
  };
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ data, scrollToSection }) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = data.cvPath;
    link.setAttribute('download', data.cvPath.split('/').pop() || 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent dark:from-blue-600/20 dark:via-purple-600/10"></div>
      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {data.subtitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <User size={18} />
            {data.learnMore}
          </button>
          <button
            onClick={handleDownloadCV}
            className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={18} />
            {data.downloadCV}
          </button>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
