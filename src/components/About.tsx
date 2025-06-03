
import { useEffect, useRef, useState } from "react";

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
    <section id="about" ref={sectionRef} className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
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
