import {
    Code,
    Database,
    Server,
    Globe,
} from 'lucide-react';
import { ContentConfig } from './types';

export const content: Record<'es' | 'en', ContentConfig> = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        meta: {
            title: 'Brayan Zorro | Desarrollador Full Stack',
            description: 'Portafolio profesional de Brayan Zorro, Desarrollador Full Stack. Explora mis proyectos de desarrollo web, habilidades técnicas y experiencia.'
        },
        hero: {
            name: 'Brayan Zorro',
            title: 'Desarrollador Full Stack',
            subtitle: 'Transformando ideas en soluciones de software elegantes y funcionales',
            viewProjects: 'Ver mis Proyectos',
            downloadCV: 'Descargar CV',
            learnMore: 'Saber Más',
            cvPath: '/brayan-zorro-cv-es.pdf'
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Una selección de mis trabajos más recientes y desafiantes',
            loadMore: 'Cargar más',
            items: [
                {
                    title: "Analizador de PDFs con IA",
                    description: "Herramienta que utiliza IA para analizar documentos PDF, extraer información clave y generar preguntas de forma automática sobre su contenido.",
                    image: "/AnalizadorPdf.webp",
                    tech: ["API de OpenAI", "NextJs"],
                    github: "https://github.com/brayan-zorro/analizador-pdf-ia",
                    demo: "https://example.com/analizador-pdf-ia"
                },
                {
                    title: "E-commerce de Comida Colombiana",
                    description: "Plataforma de e-commerce para un restaurante de comida colombiana en Buenos Aires, con menú interactivo, carrito de compras y sistema de pedidos.",
                    image: "/E-commerceColombiano.jpeg",
                    tech: ["Next.js", "TailwindCSS", "Firebase", "Mercado Pago API"],
                    github: "https://github.com/brayan-zorro/ecommerce-comida-colombiana",
                    demo: "https://example.com/tienda-comida-colombiana"
                },
                {
                    title: "Dashboard de Analytics",
                    description: "Dashboard interactivo con visualización de datos en tiempo real, métricas personalizables y reportes automatizados.",
                    image: "/sigmaSumate.png",
                    tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
                    demo: "https://sigma.sumate.eu/"
                },
                {
                    title: "Formulario Inteligente de Ciberseguridad",
                    description: "Formulario interactivo que evalúa el nivel de riesgo de ciberseguridad de un usuario y ofrece recomendaciones personalizadas.",
                    image: "/quizCiberSeguridad.png",
                    tech: ["React", "TypeScript", "Flask", "TailwindCSS"],
                    demo: "https://quiz-ciber-fraude.vercel.app/"
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
                        { name: "Java" },
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
                        { name: "TailwindCSS" },
                        { name: "Django" },
                        { name: "Flask" },
                        { name: "Express.js" }
                    ]
                },
                {
                    title: 'Bases de Datos',
                    icon: Database,
                    skills: [
                        { name: "PostgreSQL" },
                        { name: "MongoDB" },
                        { name: "MySQL" },
                        { name: "Firebase" },
                        { name: "Supabase" }
                    ]
                },
                {
                    title: 'Cloud, IA y Herramientas',
                    icon: Globe,
                    skills: [
                        { name: "AWS" },
                        { name: "Docker" },
                        { name: "Vercel" },
                        { name: "Git & GitHub" },
                        { name: "GitHub Actions" },
                        { name: "Linux" },
                        { name: "Agile/Scrum" },
                        { name: "APIs de IA" }
                    ]
                }
            ],
            fastLearner: "Y si me falta alguna... ¡dame un fin de semana y la aprendo! 🚀"
        },
        about: {
            title: 'Sobre Mí',
            description: 'Desarrollador experimentado en crear aplicaciones innovadoras y funcionales. Me enfoco en entregar soluciones de alta calidad que mejoran la experiencia del usuario.',
            experience: '2+ años de experiencia',
            projects: '15+ proyectos completados',
            currentRole: 'Desarrollador en Empresa Súmate',
            education: [
                {
                    title: 'Tecnicatura en Desarrollo de Software - UADE',
                    period: 'Febrero 2024 - Junio 2026'
                },
                {
                    title: 'Ingeniería Informática',
                    period: 'Junio 2026 - en curso'
                }
            ],
            certifications: [
                'Certificación en Python para Data Science',
                'Desarrollo Full-Stack con UADE',
                'Prompt Engineering para Desarrolladores',
                'CCNA I'
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
            instagram: 'https://www.instagram.com/brayanzorro083/',
            phone: '+54-11-31777860'
        },
        footer: {
            rights: 'Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        meta: {
            title: 'Brayan Zorro | Full Stack Developer',
            description: 'Professional portfolio of Brayan Zorro, Full Stack Developer. Explore my web development projects, technical skills, and experience.'
        },
        hero: {
            name: 'Brayan Zorro',
            title: 'Full Stack Developer',
            subtitle: 'Transforming ideas into elegant and functional software solutions',
            viewProjects: 'View My Projects',
            downloadCV: 'Download CV',
            learnMore: 'Learn More',
            cvPath: '/brayan-zorro-cv-en.pdf'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'A selection of my most recent and challenging work',
            loadMore: 'Load More',
            items: [
                {
                    title: "AI-Powered PDF Analyzer",
                    description: "A tool that uses AI to analyze PDF documents, extract key information, and automatically generate questions about their content.",
                    image: "/AnalizadorPdf.webp",
                    tech: ["API de OpenAI", "NextJs"],
                    github: "https://github.com/brayan-zorro/analizador-pdf-ia",
                    demo: "https://example.com/analizador-pdf-ia"
                },
                {
                    title: "Colombian Food E-commerce",
                    description: "E-commerce platform for a Colombian food restaurant in Buenos Aires, featuring an interactive menu, shopping cart, and ordering system.",
                    image: "/E-commerceColombiano.jpeg",
                    tech: ["Next.js", "TailwindCSS", "Firebase", "Mercado Pago API"],
                    github: "https://github.com/brayan-zorro/ecommerce-comida-colombiana",
                    demo: "https://example.com/tienda-comida-colombiana"
                },
                {
                    title: "Analytics Dashboard",
                    description: "Interactive dashboard with real-time data visualization, customizable metrics and automated reports.",
                    image: "/sigmaSumate.png",
                    tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
                    demo: "https://sigma.sumate.eu/"
                },
                {
                    title: "Cybersecurity Smart Form",
                    description: "Interactive form that assesses a user's cybersecurity risk level and provides personalized recommendations.",
                    image: "/quizCiberSeguridad.png",
                    tech: ["React", "TypeScript", "Flask", "TailwindCSS"],
                    demo: "https://quiz-ciber-fraude.vercel.app/"
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
                        { name: "Java" },
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
                        { name: "TailwindCSS" },
                        { name: "Django" },
                        { name: "Flask" },
                        { name: "Express.js" }
                    ]
                },
                {
                    title: 'Databases',
                    icon: Database,
                    skills: [
                        { name: "PostgreSQL" },
                        { name: "MongoDB" },
                        { name: "MySQL" },
                        { name: "Firebase" },
                        { name: "Supabase" }
                    ]
                },
                {
                    title: 'Cloud, AI & Tools',
                    icon: Globe,
                    skills: [
                        { name: "AWS" },
                        { name: "Docker" },
                        { name: "Vercel" },
                        { name: "Git & GitHub" },
                        { name: "GitHub Actions" },
                        { name: "Linux" },
                        { name: "Agile/Scrum" },
                        { name: "ChatGPT/Claude APIs" }
                    ]
                }
            ],
            fastLearner: "And if I'm missing one... give me a weekend and I'll learn it! 🚀"
        },
        about: {
            title: 'About Me',
            description: 'Experienced developer in creating innovative and functional applications. I focus on delivering high-quality solutions that improve user experience.',
            experience: '2+ years of experience',
            projects: '15+ completed projects',
            currentRole: 'Developer at Empresa Súmate',
            education: [
                {
                    title: 'Software Development Degree - UADE',
                    period: 'February 2024 - June 2026'
                },
                {
                    title: 'Computer Engineering',
                    period: 'June 2026 - ongoing'
                }
            ],
            certifications: [
                'Python for Data Science Certification',
                'Full-Stack Development with UADE',
                'Prompt Engineering for Developers',
                'CCNA I'
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
            instagram: 'https://www.instagram.com/brayanzorro083/',
            phone: '+54-11-31777860'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};
