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
  };
  isVisible: { [key: string]: boolean };
}

const Skills: React.FC<SkillsProps> = ({ data, isVisible }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div
          data-animate
          id="skills-header"
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible['skills-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-animate
              id={`skill-category-${categoryIndex}`}
              className={`bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 ${
                isVisible[`skill-category-${categoryIndex}`]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                <category.icon size={20} />
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
