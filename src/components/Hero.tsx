
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lavender-200/40 to-lavender-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-mint-200/40 to-mint-300/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-lavender-100/30 to-mint-100/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-mint-200/30 to-lavender-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="section-padding w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Abstract Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-lavender-400 to-mint-400 rounded-2xl rotate-12 animate-pulse-glow shadow-xl shadow-lavender-200/50 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl -rotate-6 backdrop-blur-sm"></div>
            </div>
          </div>

          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="gradient-text">Creative</span>
            <br />
            <span className="text-slate-700">Developer</span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mobile & Web Apps | Crafting digital experiences with passion and precision
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToNext}
              className="glass-card px-8 py-4 rounded-full font-inter font-medium text-slate-700 hover:text-lavender-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lavender-200/30"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-lavender-500 to-mint-500 text-white px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lavender-300/40"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="text-slate-400 hover:text-lavender-500 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
