
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section id="about" ref={sectionRef} className="py-24 section-padding relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-lavender-100/30 to-mint-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-mint-200/20 to-lavender-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-lavender-200/25 to-mint-300/25 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-white/50 shadow-xl shadow-lavender-200/30">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="Profile photo"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-lavender-400 to-mint-400 text-white text-2xl font-poppins font-semibold">
                      CD
                    </AvatarFallback>
                  </Avatar>
                  {/* Animated ring around avatar */}
                  <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-lavender-300/50 animate-pulse-glow"></div>
                </div>
              </div>

              {/* About text */}
              <div className="prose prose-lg max-w-none flex-1">
                <p className="font-inter text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
                  I'm a passionate creative developer who lives at the intersection of beautiful design and powerful technology. 
                  My journey began with a curiosity about how digital experiences could be both functional and emotionally engaging.
                </p>

                <p className="font-inter text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
                  What drives me is the challenge of transforming complex ideas into intuitive, elegant solutions. Whether I'm 
                  crafting a mobile app with Kotlin and Jetpack Compose or building responsive web experiences with React, 
                  I believe that great technology should feel effortless to use.
                </p>

                <p className="font-inter text-slate-600 text-lg md:text-xl leading-relaxed">
                  When I'm not coding, you'll find me exploring new design patterns, contributing to open source projects, 
                  or experimenting with the latest technologies. I care deeply about creating digital experiences that not 
                  only solve problems but also bring joy to the people who use them.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-lavender-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-mint-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
