import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateProficiencyLevel(proficiency: number): string {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 75) return 'Advanced';
  if (proficiency >= 60) return 'Intermediate';
  return 'Beginner';
}

export function filterProjectsByCategory(projects: any[], category: string) {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(projects: any[]): any[] {
  return projects.filter(project => project.featured);
}

export function generateProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Group skills by category
export function groupSkillsByCategory(skills: any[]) {
  return skills.reduce((groups, skill) => {
    const category = skill.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});
}