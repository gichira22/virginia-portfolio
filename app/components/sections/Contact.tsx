// components/Sections/Contact.tsx
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#f8f5f2]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d3748] text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#4a5568] text-center mb-12 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d3748] mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:hello@gtechsolutions.dev"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e8dcd1] hover:border-[#c9b09a] group"
                >
                  <div className="w-12 h-12 bg-[#d96c4f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#718096]">Email</div>
                    <div className="text-[#2d3748] font-medium">hello@gtechsolutions.dev</div>
                  </div>
                </a>

                <a 
                  href="tel:+254712345678"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e8dcd1] hover:border-[#c9b09a] group"
                >
                  <div className="w-12 h-12 bg-[#668d6e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#718096]">Phone</div>
                    <div className="text-[#2d3748] font-medium">+254 712 345 678</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-[#e8dcd1]">
                  <div className="w-12 h-12 bg-[#c9b09a] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#718096]">Location</div>
                    <div className="text-[#2d3748] font-medium">Nairobi, Kenya</div>
                  </div>
                </div>

                <a 
                  href="https://calendly.com/gtech-solutions/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#d96c4f] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-orange-100">Schedule a Call</div>
                    <div className="font-medium">Book a Free Consultation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4a5568] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-[#e8dcd1] rounded-lg focus:ring-2 focus:ring-[#d96c4f] focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4a5568] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-[#e8dcd1] rounded-lg focus:ring-2 focus:ring-[#d96c4f] focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4a5568] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-[#e8dcd1] rounded-lg focus:ring-2 focus:ring-[#d96c4f] focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4a5568] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#e8dcd1] rounded-lg focus:ring-2 focus:ring-[#d96c4f] focus:border-transparent transition-all duration-300 bg-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d96c4f] text-white py-4 px-6 rounded-lg hover:bg-[#c7553a] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;