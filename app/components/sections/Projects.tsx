'use client';
import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../ui/Card';
import { Project, ProjectCategory } from '../lib/types';
import { Filter, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  const categories: { id: ProjectCategory | 'all'; name: string }[] = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Security' },
    { id: 'seo', name: 'SEO & Analytics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-secondary text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and business value
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>
        </div>

        {/* All Projects with Filter */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-secondary">All Projects</h2>
              <p className="text-gray-600 mt-2">
                Explore complete portfolio across different technologies and domains
              </p>
            </div>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeFilter === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">
                No projects found in this category.
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold"
            >
              Start a Project
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;