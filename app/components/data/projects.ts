// lib/data/projects.ts
import { Project } from '../lib/types';

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with secure payments and admin dashboard",
    longDescription: "A comprehensive e-commerce platform built with modern technologies featuring user authentication, product management, inventory tracking, shopping cart, and secure payment processing with Stripe integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    liveUrl: "https://demo-store.gtechsolutions.dev",
    githubUrl: "https://github.com/virginia-gichira/ecommerce-platform",
    featured: true,
    category: "web"
  },
  {
    id: "project-2",
    title: "Cloud Migration Project",
    description: "Legacy system migration to AWS cloud infrastructure",
    longDescription: "Successfully migrated a legacy on-premise application to AWS cloud infrastructure, implementing auto-scaling, load balancing, and cost optimization strategies.",
    technologies: ["AWS EC2", "S3", "RDS", "Lambda", "CloudFront", "Terraform", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    liveUrl: "https://case-studies.gtechsolutions.dev/cloud-migration",
    githubUrl: "https://github.com/virginia-gichira/cloud-migration-case-study",
    featured: true,
    category: "cloud"
  },
  {
    id: "project-3",
    title: "Security Audit Tool",
    description: "Automated security vulnerability assessment platform",
    longDescription: "Developed a comprehensive security auditing tool that automatically scans web applications and network infrastructure for vulnerabilities.",
    technologies: ["Python", "React", "PostgreSQL", "Docker", "Security APIs", "OWASP"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/virginia-gichira/security-audit-tool",
    featured: false,
    category: "security"
  },
  {
    id: "project-4",
    title: "SEO Analytics Dashboard",
    description: "Real-time SEO performance monitoring dashboard",
    longDescription: "A comprehensive dashboard that aggregates data from multiple SEO tools and provides actionable insights for improving search rankings.",
    technologies: ["Next.js", "Chart.js", "SEO APIs", "MongoDB", "AWS Lambda", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    liveUrl: "https://seo-dashboard.gtechsolutions.dev",
    githubUrl: "https://github.com/virginia-gichira/seo-analytics-dashboard",
    featured: false,
    category: "seo"
  },
  {
    id: "project-5",
    title: "Tech Support Portal",
    description: "Internal support ticket system for IT departments",
    longDescription: "A full-featured support ticket system with user management, ticket tracking, knowledge base, and automated notifications.",
    technologies: ["React", "Node.js", "MySQL", "Socket.io", "JWT", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/virginia-gichira/support-portal",
    featured: false,
    category: "web"
  },
  {
    id: "project-6",
    title: "AWS Cost Optimization Tool",
    description: "Cloud resource monitoring and cost optimization platform",
    longDescription: "A tool that monitors AWS resource usage and provides recommendations for cost optimization.",
    technologies: ["AWS Lambda", "Python", "React", "DynamoDB", "CloudWatch", "Cost Explorer API"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    liveUrl: "https://cost-optimizer.gtechsolutions.dev",
    githubUrl: "https://github.com/virginia-gichira/aws-cost-optimizer",
    featured: true,
    category: "cloud"
  }
];