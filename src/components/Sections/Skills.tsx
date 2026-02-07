import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string }[];
}

interface SkillsProps {
  data: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
    fastLearner?: string;
  };
  isVisible: { [key: string]: boolean };
  language: 'es' | 'en';
}

const Skills: React.FC<SkillsProps> = ({ data, isVisible }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          data-animate
          id="skills-header"
          className={`text-center mb-16 transition-all duration-700 ${isVisible['skills-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-animate
              id={`skill-category-${categoryIndex}`}
              className={`bg-white dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl dark:hover:shadow-blue-500/10 group ${isVisible[`skill-category-${categoryIndex}`]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 cursor-default font-medium text-sm border border-transparent hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {data.fastLearner && (
          <div
            data-animate
            id="skills-footer"
            className={`mt-16 text-center transition-all duration-700 delay-300 ${isVisible['skills-footer'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 italic">
              "{data.fastLearner}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
