'use client';
import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';
import { Skill } from '../lib/types';
import { calculateProficiencyLevel } from '../lib/utils';

const Skills = () => {
  const categories = ['frontend', 'backend', 'cloud', 'devops', 'security', 'seo', 'support'] as const;
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getSkillsByCategory = (category: Skill['category']) =>
    skills.filter((skill) => skill.category === category);

  const getCategoryTitle = (category: string) => {
    const titles: Record<string, string> = {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      cloud: 'Cloud Computing',
      devops: 'DevOps & Tools',
      security: 'Cybersecurity',
      seo: 'SEO & Analytics',
      support: 'Tech Support',
    };
    return titles[category] || category;
  };

  // Trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-[#f8f5f3] via-[#f5efec] to-[#f1ebe9] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-[#d96c4f] text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Expertise across key technology domains with proven professional experience
        </p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, i) => {
            const categorySkills = getSkillsByCategory(category);
            if (!categorySkills.length) return null;

            return (
              <div
                key={category}
                className={`cursor-pointer bg-white/90 backdrop-blur-sm border border-[#e5dcd8] p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#d96c4f]/50 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-[#3a2f2b] mb-6 pb-2 border-b border-[#e8ddd9]">
                  {getCategoryTitle(category)}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-sm text-[#d96c4f] font-semibold">
                          {calculateProficiencyLevel(skill.proficiency)}
                        </span>
                      </div>

                      {/* Progress bar (no % number) */}
                      <div className="w-full bg-[#f1e8e4] rounded-full h-2 overflow-hidden mt-1">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-[#d96c4f] to-[#e29b7a] transition-all duration-700 ease-out ${
                            visible ? 'w-[var(--bar-width)]' : 'w-0'
                          }`}
                          style={{ ['--bar-width' as any]: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div
          className={`mt-16 bg-white/90 backdrop-blur-sm border border-[#e5dcd8] p-8 rounded-2xl shadow-md max-w-4xl mx-auto text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-[#3a2f2b] mb-8">
            Overall Technical Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {['Frontend', 'Backend', 'Cloud', 'Support'].map((label, i) => (
              <div
                key={i}
                className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-xl font-semibold text-[#d96c4f] mb-1 group-hover:text-[#c14b2f] transition-colors">
                  {label}
                </div>
                <div className="text-gray-700 text-sm">Advanced</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft background accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fffaf8]/50 via-transparent to-[#f3e7e2]/30 pointer-events-none" />
    </section>
  );
};

export default Skills;
