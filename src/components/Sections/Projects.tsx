import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo: string;
}

interface ProjectsProps {
  data: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  isVisible: { [key: string]: boolean };
  language: 'es' | 'en';
}

const Projects: React.FC<ProjectsProps> = ({ data, isVisible, language }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          data-animate
          id="projects-header"
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible['projects-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((project, index) => (
            <div
              key={index}
              data-animate
              id={`project-${index}`}
              className={`bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>{language === 'es' ? 'Código' : 'Code'}</span>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-2 text-gray-500 cursor-not-allowed"
                      title={language === 'es' ? 'Código privado' : 'Private code'}
                    >
                      <Github size={18} />
                      <span>{language === 'es' ? 'Privado' : 'Private'}</span>
                    </div>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
