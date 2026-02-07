import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import SEO from './components/SEO/SEO';
import { content } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [language, setLanguage] = useState<'es' | 'en'>('en');

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
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

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
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

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
      <Toaster position="top-center" richColors />
      <SEO
        title={t.meta.title}
        description={t.meta.description}
        lang={language}
      />
      <Navbar
        navData={t.nav}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        toggleLanguage={toggleLanguage}
        githubLink={t.contact.github}
      />

      <Hero
        data={t.hero}
        scrollToSection={scrollToSection}
      />

      <About
        data={t.about}
        isVisible={isVisible['about-content']}
        language={language}
      />

      <Skills
        data={t.skills}
        isVisible={isVisible}
        language={language}
      />

      <Projects
        data={t.projects}
        isVisible={isVisible}
        language={language}
      />

      <Contact
        data={t.contact}
        isVisible={isVisible}
        language={language}
      />

      <Footer
        data={t.footer}
      />
    </div>
  );
}

export default App;