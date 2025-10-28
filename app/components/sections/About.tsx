// components/Sections/About.tsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d3748] text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Virginia Gichira - Software Developer"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d96c4f] text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#2d3748]">
                Hello! I'm Virginia Gichira
              </h3>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                A passionate software developer and AWS Cloud Practitioner with expertise in 
                building secure, scalable digital solutions. I specialize in full-stack development, 
                cloud infrastructure, cybersecurity, and technical optimization.
              </p>
              
              <p className="text-lg text-[#4a5568] leading-relaxed">
                My journey in technology started with a curiosity for how things work, which evolved 
                into a career dedicated to creating solutions that solve real-world problems. I'm 
                certified in AWS cloud technologies and have hands-on experience with modern 
                development frameworks and security practices.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-[#f8f5f2] rounded-lg border border-[#e8dcd1]">
                  <div className="text-2xl font-bold text-[#d96c4f]">50+</div>
                  <div className="text-[#4a5568]">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-[#f8f5f2] rounded-lg border border-[#e8dcd1]">
                  <div className="text-2xl font-bold text-[#d96c4f]">100%</div>
                  <div className="text-[#4a5568]">Client Satisfaction</div>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-[#d96c4f] text-white rounded-lg hover:bg-[#c7553a] transition-colors duration-300 font-medium"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border-2 border-[#d96c4f] text-[#d96c4f] rounded-lg hover:bg-[#d96c4f] hover:text-white transition-colors duration-300 font-medium"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;