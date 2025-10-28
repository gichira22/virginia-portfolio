// components/UI/Card.tsx
import { ReactNode } from 'react';
import Button from './Button';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md' 
}: CardProps) => {
  const baseStyles = 'bg-white rounded-xl border border-gray-200';
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverStyle = hover ? 'hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer' : '';

  const cardClasses = `${baseStyles} ${paddings[padding]} ${hoverStyle} ${className}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

// Project Card Variant
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image,
  liveUrl,
  githubUrl,
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card hover className={featured ? 'ring-2 ring-primary' : ''}>
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-primary to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
          {title} Preview
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3">
        {liveUrl && (
          <Button variant="primary" size="sm" href={liveUrl}>
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" href={githubUrl}>
            GitHub
          </Button>
        )}
      </div>
    </Card>
  );
};

// Service Card Variant
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features 
}: ServiceCardProps) => {
  return (
    <Card hover className="text-center h-full">
      <div className="text-primary mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Card;