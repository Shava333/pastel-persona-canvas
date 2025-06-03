
import { ChevronDown, Sparkles, Code, Palette } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Creative Developer",
    "Mobile & Web Apps",
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-lavender-200/30 to-mint-200/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 20}%`,
            top: `${mousePosition.y - 20}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Floating elements with staggered animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lavender-200/40 to-lavender-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-mint-200/40 to-mint-300/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-lavender-100/30 to-mint-100/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-mint-200/30 to-lavender-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="text-lavender-300/60" size={20} />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Code className="text-mint-300/60" size={24} />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <Palette className="text-lavender-400/60" size={18} />
        </div>
      </div>

      <div className="section-padding w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Interactive Avatar */}
          <div className="mb-8 flex justify-center">
            <div 
              className="w-24 h-24 bg-gradient-to-br from-lavender-400 to-mint-400 rounded-2xl rotate-12 shadow-xl shadow-lavender-200/50 flex items-center justify-center cursor-pointer transition-all duration-500 hover:rotate-0 hover:scale-110 hover:shadow-2xl hover:shadow-lavender-300/60"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm transition-all duration-500 ${isHovered ? 'rotate-12 scale-90' : '-rotate-6'}`}></div>
            </div>
          </div>

          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="gradient-text animate-pulse-glow">Creative</span>
            <br />
            <span className="text-slate-700">Developer</span>
          </h1>

          {/* Animated role text */}
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="font-inter text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              <span className="inline-block animate-fade-in-up" key={textIndex}>
                {roles[textIndex]}
              </span>
              <span className="ml-2 animate-pulse">|</span>
              <span className="ml-2">Crafting digital experiences with passion</span>
            </p>
          </div>

          {/* Interactive buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToNext}
              className="group glass-card px-8 py-4 rounded-full font-inter font-medium text-slate-700 hover:text-lavender-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lavender-200/30 relative overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-100/50 to-mint-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-lavender-500 to-mint-500 text-white px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lavender-300/40 relative overflow-hidden"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-600 to-mint-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="group text-slate-400 hover:text-lavender-500 transition-all duration-300 flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-inter opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <div className="animate-bounce group-hover:animate-pulse">
            <ChevronDown size={32} />
          </div>
        </button>
      </div>

      {/* Floating interaction hint */}
      <div className="absolute top-8 right-8 text-slate-400/60 text-sm font-inter animate-pulse">
        Move your mouse around ✨
      </div>
    </section>
  );
};

export default Hero;
