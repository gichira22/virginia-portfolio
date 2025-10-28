// components/Sections/Certifications.tsx
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      badge: "aws",
      link: "#"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Cybersecurity Institute",
      date: "2023",
      badge: "security",
      link: "#"
    },
    {
      name: "Full Stack Development",
      issuer: "Tech Academy",
      date: "2023",
      badge: "development",
      link: "#"
    },
    {
      name: "SEO Professional Certification",
      issuer: "Digital Marketing Institute",
      date: "2023",
      badge: "seo",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-secondary text-center mb-4">
          Certifications
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Validated expertise through industry-recognized certifications and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-primary" />
                <a href={cert.link} className="text-gray-400 hover:text-primary">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {cert.name}
              </h3>
              
              <div className="text-gray-600 mb-2">
                {cert.issuer}
              </div>
              
              <div className="text-sm text-primary font-medium">
                Issued {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;