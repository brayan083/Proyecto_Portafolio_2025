import { LucideIcon } from 'lucide-react';

export interface NavConfig {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
}

export interface MetaConfig {
    title: string;
    description: string;
}

export interface HeroConfig {
    name: string;
    title: string;
    subtitle: string;
    viewProjects: string;
    downloadCV: string;
    learnMore: string;
    cvPath: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    image?: string;  // Optional: for single image (backward compatible)
    images?: string[];  // Optional: for multiple images (carousel)
    tech: string[];
    github?: string;
    demo: string;
}

export interface ProjectsConfig {
    title: string;
    subtitle: string;
    items: ProjectItem[];
    loadMore: string;
}

export interface SkillItem {
    name: string;
}

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: SkillItem[];
}

export interface SkillsConfig {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
    fastLearner?: string;
}

export interface EducationItem {
    title: string;
    period: string;
}

export interface AboutConfig {
    title: string;
    description: string;
    experience: string;
    projects: string;
    currentRole: string;
    education: EducationItem[];
    certifications: string[];
    skills: string[];
}

export interface ContactFormConfig {
    name: string;
    email: string;
    message: string;
    send: string;
}

export interface ContactConfig {
    title: string;
    subtitle: string;
    form: ContactFormConfig;
    emailAddress: string;
    linkedin: string;
    github: string;
    instagram: string;
    phone: string;
}

export interface FooterConfig {
    rights: string;
}

export interface ContentConfig {
    nav: NavConfig;
    meta: MetaConfig;
    hero: HeroConfig;
    projects: ProjectsConfig;
    skills: SkillsConfig;
    about: AboutConfig;
    contact: ContactConfig;
    footer: FooterConfig;
}
