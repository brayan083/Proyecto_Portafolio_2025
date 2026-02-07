import React from 'react';

interface FooterProps {
  data: {
    rights: string;
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brayan Zorro. {data.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
