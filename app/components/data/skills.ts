import { Skill } from "../lib/types";

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript/TypeScript", category: "frontend", proficiency: 90, icon: "javascript" },
  { name: "React/Next.js", category: "frontend", proficiency: 88, icon: "react" },
  { name: "HTML/CSS", category: "frontend", proficiency: 95, icon: "html" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85, icon: "css" },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: 85, icon: "nodejs" },
  { name: "Python", category: "backend", proficiency: 80, icon: "python" },
  { name: "Java", category: "backend", proficiency: 75, icon: "java" },
  { name: "REST APIs", category: "backend", proficiency: 88, icon: "api" },
  
  // Cloud
  { name: "AWS Services", category: "cloud", proficiency: 82, icon: "aws" },
  { name: "Serverless Architecture", category: "cloud", proficiency: 78, icon: "serverless" },
  { name: "Cloud Security", category: "cloud", proficiency: 80, icon: "cloud-security" },
  
  // DevOps
  { name: "Docker", category: "devops", proficiency: 75, icon: "docker" },
  { name: "CI/CD", category: "devops", proficiency: 72, icon: "cicd" },
  { name: "Git/GitHub", category: "devops", proficiency: 90, icon: "git" },
  
  // Security
  { name: "Network Security", category: "security", proficiency: 78, icon: "network-security" },
  { name: "Vulnerability Assessment", category: "security", proficiency: 75, icon: "vulnerability" },
  { name: "Security Protocols", category: "security", proficiency: 80, icon: "security" },
  
  // SEO
  { name: "Technical SEO", category: "seo", proficiency: 85, icon: "seo" },
  { name: "Performance Optimization", category: "seo", proficiency: 82, icon: "performance" },
  { name: "Google Analytics", category: "seo", proficiency: 80, icon: "analytics" },
  
  // Support
  { name: "Technical Support", category: "support", proficiency: 90, icon: "support" },
  { name: "System Administration", category: "support", proficiency: 85, icon: "admin" },
  { name: "Troubleshooting", category: "support", proficiency: 88, icon: "troubleshooting" }
];