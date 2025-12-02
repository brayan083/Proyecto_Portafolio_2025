import {
    Code,
    Database,
    Server,
    Globe,
} from 'lucide-react';

export const content = {
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
            items: [
                {
                    title: "Analizador de PDFs con IA",
                    description: "Herramienta que utiliza IA para analizar documentos PDF, extraer información clave y generar preguntas de forma automática sobre su contenido.",
                    image: "../public/AnalizadorPdf.webp",
                    tech: ["API de OpenAI", "NextJs"],
                    github: "https://github.com/brayan-zorro/analizador-pdf-ia",
                    demo: "https://example.com/analizador-pdf-ia"
                },
                {
                    title: "E-commerce de Comida Colombiana",
                    description: "Plataforma de e-commerce para un restaurante de comida colombiana en Buenos Aires, con menú interactivo, carrito de compras y sistema de pedidos.",
                    image: "../public/E-commerceColombiano.jpeg",
                    tech: ["Next.js", "TailwindCSS", "Firebase", "Mercado Pago API"],
                    github: "https://github.com/brayan-zorro/ecommerce-comida-colombiana",
                    demo: "https://example.com/tienda-comida-colombiana"
                },
                {
                    title: "Dashboard de Analytics",
                    description: "Dashboard interactivo con visualización de datos en tiempo real, métricas personalizables y reportes automatizados.",
                    image: "../public/sigmaSumate.png",
                    tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
                    demo: "https://sigma.sumate.eu/"
                },
                {
                    title: "Formulario Inteligente de Ciberseguridad",
                    description: "Formulario interactivo que evalúa el nivel de riesgo de ciberseguridad de un usuario y ofrece recomendaciones personalizadas.",
                    image: "../public/quizCiberSeguridad.png",
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
                    image: "../public/sigmaSumate.png",
                    tech: ["NextJs", "Firebase", "Api de Gemini", "Chart.js"],
                    demo: "https://sigma.sumate.eu/"
                },
                {
                    title: "Cybersecurity Smart Form",
                    description: "Interactive form that assesses a user's cybersecurity risk level and provides personalized recommendations.",
                    image: "../public/quizCiberSeguridad.png",
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
            phone: '+54-11-31777860'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};
