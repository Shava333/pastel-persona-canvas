
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: 'Mobile Finance App',
      description: 'A comprehensive finance tracking app built with Kotlin and Jetpack Compose, featuring real-time data sync and beautiful Material Design 3 UI.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room DB'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'React Dashboard',
      description: 'Modern analytics dashboard with real-time data visualization, built using React and TypeScript with a focus on performance and accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Python Data Pipeline',
      description: 'Automated data processing pipeline that handles large datasets, featuring machine learning integration and beautiful reporting dashboards.',
      technologies: ['Python', 'Pandas', 'FastAPI'],
      gradient: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      title: 'Cross-Platform App',
      description: 'Social networking app with advanced features like real-time messaging, media sharing, and location-based services.',
      technologies: ['Java', 'React Native', 'Firebase'],
      gradient: 'from-orange-500 to-red-500',
      featured: false
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-lavender-200/40 ${
                  project.featured ? 'lg:col-span-1' : 'lg:col-span-1'
                } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="mb-6">
                  <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                      <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                    </div>
                  </div>
                  
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-slate-700 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-inter font-medium bg-lavender-100 text-lavender-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-lavender-500 to-mint-500 text-white rounded-xl font-inter font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 glass-card text-slate-600 rounded-xl font-inter font-medium transition-all duration-300 hover:scale-105 hover:text-lavender-600">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
