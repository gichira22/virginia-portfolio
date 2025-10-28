export type IconType = 
  | 'code' | 'cloud' | 'shield' | 'support' | 'search' 
  | 'home' | 'user' | 'services' | 'projects' | 'certificate' | 'contact'
  | 'javascript' | 'react' | 'nodejs' | 'python' | 'java' | 'html' | 'css'
  | 'aws' | 'docker' | 'serverless' | 'cloud-security'
  | 'security' | 'network-security' | 'vulnerability'
  | 'seo' | 'performance' | 'analytics'
  | 'api' | 'git' | 'cicd'
  | 'admin' | 'troubleshooting';

export type ProjectCategory = 'web' | 'mobile' | 'cloud' | 'security' | 'seo';
export type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'security' | 'devops' | 'seo' | 'support';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeUrl?: string;
  skills: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  icon: IconType;
}

export interface NavItem {
  name: string;
  href: string;
  icon: IconType;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}