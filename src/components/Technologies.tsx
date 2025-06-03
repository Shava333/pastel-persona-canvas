
import { useEffect, useRef, useState } from "react";

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technologies = [
    {
      name: 'Kotlin',
      description: 'Modern Android Development',
      color: 'from-purple-500 to-pink-500',
      icon: '🎯'
    },
    {
      name: 'Jetpack Compose',
      description: 'Declarative UI Framework',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀'
    },
    {
      name: 'Room Database',
      description: 'Local Data Persistence',
      color: 'from-green-500 to-emerald-500',
      icon: '🗃️'
    },
    {
      name: 'Java',
      description: 'Enterprise Development',
      color: 'from-orange-500 to-red-500',
      icon: '☕'
    },
    {
      name: 'Python',
      description: 'Data Science & Automation',
      color: 'from-yellow-500 to-orange-500',
      icon: '🐍'
    },
    {
      name: 'React',
      description: 'Modern Web Applications',
      color: 'from-cyan-500 to-blue-500',
      icon: '⚛️'
    }
  ];

  return (
    <section id="technologies" ref={sectionRef} className="py-24 section-padding bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">
            <span className="gradient-text">Technologies</span> & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-200/30 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-poppins font-semibold text-lg text-slate-700">
                      {tech.name}
                    </h3>
                  </div>
                </div>
                <p className="font-inter text-slate-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
