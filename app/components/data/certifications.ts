import { Certification } from '../lib/types';

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://www.credly.com/users/virginia-gichira",
    badgeUrl: "/certifications/aws-cloud-practitioner.png",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Security", "Billing", "Support"]
  },
  {
    id: "cybersecurity-fundamentals",
    name: "Cybersecurity Fundamentals",
    issuer: "Cybersecurity Institute",
    date: "2023",
    credentialUrl: "#",
    badgeUrl: "/certifications/cybersecurity-fundamentals.png",
    skills: ["Network Security", "Risk Management", "Security Protocols", "Incident Response", "Vulnerability Assessment"]
  },
  {
    id: "fullstack-development",
    name: "Full Stack Development Certification",
    issuer: "Tech Academy",
    date: "2023",
    credentialUrl: "#",
    badgeUrl: "/certifications/fullstack-development.png",
    skills: ["JavaScript", "React", "Node.js", "Database Design", "API Development", "DevOps"]
  },
  {
    id: "seo-professional",
    name: "SEO Professional Certification",
    issuer: "Digital Marketing Institute",
    date: "2023",
    credentialUrl: "#",
    badgeUrl: "/certifications/seo-professional.png",
    skills: ["Technical SEO", "Analytics", "Content Strategy", "Keyword Research", "Performance Optimization"]
  }
];