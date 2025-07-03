import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ChevronDown,
  Code,
  Database,
  Server,
  Globe,
  User,
  Send,
  Languages
} from 'lucide-react';

// Language content
const content = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre Mí',
      contact: 'Contacto'
    },
    hero: {
      name: 'Brayan Zorro',
      title: 'Desarrollador Full Stack',
      subtitle: 'Transformando ideas en soluciones de software elegantes y funcionales',
      viewProjects: 'Ver mis Proyectos',
      downloadCV: 'Descargar CV',
      cvPath: '/brayan-zorro-cv-es.pdf'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Una selección de mis trabajos más recientes y desafiantes',
      items: [
        {
          title: "Analizador de PDFs con IA",
          description: "Herramienta que utiliza IA para analizar documentos PDF, extraer información clave y generar preguntas de forma automática sobre su contenido.",
          image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["API de OpenAI", "NextJs"],
          github: "https://github.com/brayan-zorro/analizador-pdf-ia",
          demo: "https://example.com/analizador-pdf-ia"
        },
        {
          title: "E-commerce de Comida Colombiana",
          description: "Plataforma de e-commerce para un restaurante de comida colombiana en Buenos Aires, con menú interactivo, carrito de compras y sistema de pedidos.",
          image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["Next.js", "TailwindCSS", "Firebase", "Mercado Pago API"],
          github: "https://github.com/brayan-zorro/ecommerce-comida-colombiana",
          demo: "https://example.com/tienda-comida-colombiana"
        },
        {
          title: "Dashboard de Analytics",
          description: "Dashboard interactivo con visualización de datos en tiempo real, métricas personalizables y reportes automatizados.",
          image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
          demo: "https://example.com/analytics-dashboard-demo"
        },
        {
          title: "Formulario Inteligente de Ciberseguridad",
          description: "Formulario interactivo que evalúa el nivel de riesgo de ciberseguridad de un usuario y ofrece recomendaciones personalizadas.",
          image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["React", "TypeScript", "Flask", "TailwindCSS"],
          demo: "https://example.com/formulario-ciberseguridad"
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías y herramientas que domino para crear soluciones robustas',
      categories: [
        {
          title: 'Lenguajes de Programación',
          icon: Code,
          skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "Python" },
            { name: "HTML & CSS" },
            { name: "SQL" }
          ]
        },
        {
          title: 'Frameworks/Librerías',
          icon: Server,
          skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "Django" },
            { name: "Flask" },
            { name: "Express.js" }
          ]
        },
        {
          title: 'Bases de Datos',
          icon: Database,
          skills: [
            { name: "MySQL" },
            { name: "SQL Server" },
            { name: "Firebase" },
            { name: "MongoDB" }
          ]
        },
        {
          title: 'Cloud, IA y Herramientas',
          icon: Globe,
          skills: [
            { name: "Google Cloud" },
            { name: "API de ChatGPT (Agentes)" },
            { name: "APIs de Gemini y Claude" },
            { name: "n8n" },
            { name: "Protocolo mcp" },
            { name: "Git & GitHub" },
            { name: "Heroku" }
          ]
        }
      ]
    },
    about: {
      title: 'Sobre Mí',
      description: 'Desarrollador experimentado en crear aplicaciones innovadoras y funcionales. Me enfoco en entregar soluciones de alta calidad que mejoran la experiencia del usuario.',
      experience: '2+ años de experiencia',
      projects: '15+ proyectos completados',
      currentRole: 'Desarrollador en Empresa Súmate',
      education: 'Tecnicatura en Desarrollo de Software - UADE',
      certifications: [
        'Certificación en Python para Data Science',
        'Desarrollo Full-Stack con UADE',
        'Prompt Engineering para Desarrolladores'
      ],
      skills: [
        'Trabajo en equipo',
        'Resolución de problemas',
        'Pensamiento crítico',
        'Comunicación efectiva',
        'Capacidad de adaptación',
        'Gestión del tiempo',
        'Ganas de aprender'
      ]
    },
    contact: {
      title: '¿Interesado en colaborar?',
      subtitle: '¡Hablemos! Estoy disponible para nuevos proyectos y oportunidades',
      form: {
        name: 'Tu nombre',
        email: 'Tu email',
        message: 'Tu mensaje',
        send: 'Enviar Mensaje'
      },
      emailAddress: 'zorrobrayan0@gmail.com',
      linkedin: 'https://linkedin.com/in/brayan-zorro-b56ba427a',
      github: 'https://github.com/brayan083',
      phone: '+54-11-31777860'
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      name: 'Brayan Zorro',
      title: 'Full Stack Developer',
      subtitle: 'Transforming ideas into elegant and functional software solutions',
      viewProjects: 'View My Projects',
      downloadCV: 'Download CV',
      cvPath: '/brayan-zorro-cv-en.pdf'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my most recent and challenging work',
      items: [
        {
          title: "AI-Powered PDF Analyzer",
          description: "A tool that uses AI to analyze PDF documents, extract key information, and automatically generate questions about their content.",
          image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["API de OpenAI", "NextJs"],
          github: "https://github.com/brayan-zorro/analizador-pdf-ia",
          demo: "https://example.com/analizador-pdf-ia"
        },
        {
          title: "Colombian Food E-commerce",
          description: "E-commerce platform for a Colombian food restaurant in Buenos Aires, featuring an interactive menu, shopping cart, and ordering system.",
          image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["Next.js", "TailwindCSS", "Firebase", "Mercado Pago API"],
          github: "https://github.com/brayan-zorro/ecommerce-comida-colombiana",
          demo: "https://example.com/tienda-comida-colombiana"
        },
        {
          title: "Analytics Dashboard",
          description: "Interactive dashboard with real-time data visualization, customizable metrics and automated reports.",
          image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
          demo: "https://example.com/analytics-dashboard-demo"
        },
        {
          title: "Cybersecurity Smart Form",
          description: "Interactive form that assesses a user's cybersecurity risk level and provides personalized recommendations.",
          image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
          tech: ["React", "TypeScript", "Flask", "TailwindCSS"],
          demo: "https://example.com/formulario-ciberseguridad"
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master to create robust solutions',
      categories: [
        {
          title: 'Programming Languages',
          icon: Code,
          skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "Python" },
            { name: "HTML & CSS" },
            { name: "SQL" }
          ]
        },
        {
          title: 'Frameworks/Libraries',
          icon: Server,
          skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "Django" },
            { name: "Flask" },
            { name: "Express.js" }
          ]
        },
        {
          title: 'Databases',
          icon: Database,
          skills: [
            { name: "MySQL" },
            { name: "SQL Server" },
            { name: "Firebase" },
            { name: "MongoDB" }
          ]
        },
        {
          title: 'Cloud, AI & Tools',
          icon: Globe,
          skills: [
            { name: "Google Cloud" },
            { name: "ChatGPT API (Agents)" },
            { name: "Gemini & Claude APIs" },
            { name: "n8n" },
            { name: "Protocol mcp" },
            { name: "Git & GitHub" },
            { name: "Heroku" }
          ]
        }
      ]
    },
    about: {
      title: 'About Me',
      description: 'Experienced developer in creating innovative and functional applications. I focus on delivering high-quality solutions that improve user experience.',
      experience: '2+ years of experience',
      projects: '15+ completed projects',
      currentRole: 'Developer at Empresa Súmate',
      education: 'Software Development Degree - UADE',
      certifications: [
        'Python for Data Science Certification',
        'Full-Stack Development with UADE',
        'Prompt Engineering for Developers'
      ],
      skills: [
        'Teamwork',
        'Problem Solving',
        'Critical Thinking',
        'Effective Communication',
        'Adaptability',
        'Time Management',
        'Eagerness to learn'
      ]
    },
    contact: {
      title: 'Interested in collaborating?',
      subtitle: "Let's talk! I'm available for new projects and opportunities",
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send Message'
      },
      emailAddress: 'zorrobrayan0@gmail.com',
      linkedin: 'https://linkedin.com/in/brayan-zorro-b56ba427a',
      github: 'https://github.com/brayan083',
      phone: '+54-11-31777860'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [language, setLanguage] = useState<'es' | 'en'>('en');

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = t.hero.cvPath;
    link.setAttribute('download', t.hero.cvPath.split('/').pop() || 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Gracias por tu mensaje, ¡me pondré en contacto contigo pronto!");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              BZ
            </div>
            <div className="hidden md:flex space-x-8">
              {Object.keys(t.nav).map((key) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${activeSection === (key === 'home' ? 'hero' : key) ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {t.nav[key as keyof typeof t.nav]}
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
                href={t.contact.github}
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
              {t.hero.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t.hero.viewProjects}
            </button>
            <button
              onClick={handleDownloadCV}
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={18} />
              {t.hero.downloadCV}
            </button>
          </div>
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            id="projects-header"
            className={`text-center mb-16 transition-all duration-700 ${isVisible['projects-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div
                key={index}
                data-animate
                id={`project-${index}`}
                className={`bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            id="skills-header"
            className={`text-center mb-16 transition-all duration-700 ${isVisible['skills-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.skills.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                data-animate
                id={`skill-category-${categoryIndex}`}
                className={`bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 ${isVisible[`skill-category-${categoryIndex}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            id="about-content"
            className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t.about.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
              {/* Columna Izquierda */}
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{language === 'es' ? 'Experiencia Actual' : 'Current Experience'}</h3>
                  <p className="text-gray-300 mb-2">{t.about.currentRole}</p>
                  <p className="text-sm text-gray-400">{language === 'es' ? 'Febrero 2024 - Actualidad' : 'February 2024 - Present'}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{language === 'es' ? 'Educación' : 'Education'}</h3>
                  <p className="text-gray-300 mb-2">{t.about.education}</p>
                  <p className="text-sm text-gray-400">{language === 'es' ? 'Febrero 2024 - en curso' : 'February 2024 - ongoing'}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{language === 'es' ? 'Certificaciones' : 'Certifications'}</h3>
                  <ul className="space-y-2">
                    {t.about.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-300 list-disc list-inside">{cert}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <User size={18} />
                    <span>{t.about.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Code size={18} />
                    <span>{t.about.projects}</span>
                  </div>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="space-y-8">
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img src="/profile-photo.JPEG" alt="Brayan Zorro" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 pt-4 text-center lg:text-left">{language === 'es' ? 'Aptitudes' : 'Soft Skills'}:</h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {t.about.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            id="contact-header"
            className={`text-center mb-16 transition-all duration-700 ${isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              data-animate
              id="contact-info"
              className={`space-y-8 transition-all duration-700 ${isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              <div className="space-y-6">
                <a
                  href={`mailto:${t.contact.emailAddress}`}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">{t.contact.emailAddress}</p>
                  </div>
                </a>

                <a
                  href={t.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-400">{t.contact.linkedin.replace('https://', '')}</p>
                  </div>
                </a>

                <a
                  href={t.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-gray-400">{t.contact.github.replace('https://', '')}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{language === 'es' ? 'Teléfono' : 'Phone'}</h3>
                    <p className="text-gray-400">{t.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              data-animate
              id="contact-form"
              className={`transition-all duration-700 ${isVisible['contact-form'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.name}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t.contact.form.message}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Brayan Zorro. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;