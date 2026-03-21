import { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Footer from './components/Layout/Footer';
import SEO from './components/SEO/SEO';
import { content } from './data/content';

const Projects = lazy(() => import('./components/Sections/Projects'));
const Contact = lazy(() => import('./components/Sections/Contact'));

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

      <Suspense fallback={<div className="py-20 text-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" /></div>}>
        <Projects
          data={t.projects}
          isVisible={isVisible}
          language={language}
        />
      </Suspense>

      <Suspense fallback={<div className="py-20 text-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" /></div>}>
        <Contact
          data={t.contact}
          isVisible={isVisible}
          language={language}
        />
      </Suspense>

      <Footer
        data={t.footer}
      />
    </div>
  );
}

export default App;