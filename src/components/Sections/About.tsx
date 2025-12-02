import React from 'react';
import { User, Code } from 'lucide-react';

interface AboutProps {
  data: {
    title: string;
    description: string;
    currentRole: string;
    education: string;
    certifications: string[];
    experience: string;
    projects: string;
    skills: string[];
  };
  isVisible: boolean;
  language: 'es' | 'en';
}

const About: React.FC<AboutProps> = ({ data, isVisible, language }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          data-animate
          id="about-content"
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {data.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {language === 'es' ? 'Experiencia Actual' : 'Current Experience'}
                </h3>
                <p className="text-gray-300 mb-2">{data.currentRole}</p>
                <p className="text-sm text-gray-400">
                  {language === 'es' ? 'Febrero 2024 - Actualidad' : 'February 2024 - Present'}
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {language === 'es' ? 'Educación' : 'Education'}
                </h3>
                <p className="text-gray-300 mb-2">{data.education}</p>
                <p className="text-sm text-gray-400">
                  {language === 'es' ? 'Febrero 2024 - en curso' : 'February 2024 - ongoing'}
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {language === 'es' ? 'Certificaciones' : 'Certifications'}
                </h3>
                <ul className="space-y-2">
                  {data.certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 list-disc list-inside">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <User size={18} />
                  <span>{data.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Code size={18} />
                  <span>{data.projects}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="/profile-photo.JPEG"
                        alt="Brayan Zorro"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 pt-4 text-center lg:text-left">
                  {language === 'es' ? 'Aptitudes' : 'Soft Skills'}:
                </h4>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
