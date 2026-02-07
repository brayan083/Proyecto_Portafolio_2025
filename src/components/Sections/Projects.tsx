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
    loadMore: string;
  };
  isVisible: { [key: string]: boolean };
  language: 'es' | 'en';
}

const Projects: React.FC<ProjectsProps> = ({ data, isVisible, language }) => {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const [visibleItems, setVisibleItems] = React.useState<{ [key: number]: boolean }>({});
  const projectsRef = React.useRef<(HTMLDivElement | null)[]>([]);

  // Safeguard against missing data
  if (!data) {
    console.error("Projects data is missing");
    return null;
  }

  const items = data.items || [];
  const loadMoreText = data.loadMore || (language === 'es' ? 'Cargar más' : 'Load More');

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const visibleProjects = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleCount]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          data-animate
          id="projects-header"
          className={`text-center mb-16 transition-all duration-700 ${isVisible['projects-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              data-index={index}
              className={`bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 shadow-lg dark:shadow-none transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
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
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-600/30"
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
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>{language === 'es' ? 'Código' : 'Code'}</span>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-2 text-gray-400 dark:text-gray-500 cursor-not-allowed"
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
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
