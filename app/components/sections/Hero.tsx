// components/Sections/Hero.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Cloud,
  Shield,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      title: 'Full-Stack Development',
      description: 'Building modern, scalable web applications with cutting-edge technologies',
      icon: <Code className="w-16 h-16 mb-4" />,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'AWS Cloud Solutions',
      description: 'Cloud architecture, deployment, and optimization on Amazon Web Services',
      icon: <Cloud className="w-16 h-16 mb-4" />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with comprehensive security solutions',
      icon: <Shield className="w-16 h-16 mb-4" />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'SEO & Digital Optimization',
      description: 'Boosting your online presence and search engine performance',
      icon: <Search className="w-16 h-16 mb-4" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle touch/swipe events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden min-h-screen pt-16 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ===== Background Slides ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={slidesRef}
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative z-20 w-full max-w-6xl px-6 text-center">
        <div className="mb-12 min-h-[200px] flex flex-col items-center justify-center">
          <div className="text-white">
            <div className="flex justify-center mb-6">
              {slides[currentSlide].icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mb-10">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              G-Tech<span className="text-[#d96c4f]">Solutions</span>
            </h2>
            <p className="text-white/80 mt-2 text-sm md:text-base">By Virginia Gichira</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-10">
          {[
            { icon: Github, href: 'https://github.com/virginia-gichira', title: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/virginia-gichira', title: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hello@gtechsolutions.dev', title: 'Email' },
          ].map(({ icon: Icon, href, title }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-4 bg-[#d96c4f] text-white rounded-full hover:bg-[#c7553a] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-white/30"
        >
          View My Work
          <ChevronDown className="ml-2 w-4 h-4" />
        </a>
      </div>

      {/* ===== Arrows ===== */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 bg-black/40 rounded-full hover:bg-black/60 transition-all border border-white/30"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 bg-black/40 rounded-full hover:bg-black/60 transition-all border border-white/30"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* ===== Indicators ===== */}
      <div className="absolute z-30 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#d96c4f] scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
