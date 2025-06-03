
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mouse-following gradient */}
      <div 
        className="absolute w-[800px] h-[800px] bg-gradient-to-br from-lavender-100/20 via-mint-100/20 to-lavender-200/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Static floating elements */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-lavender-100/15 to-mint-100/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-mint-100/15 to-lavender-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-br from-lavender-200/20 to-mint-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-mint-200/10 to-lavender-100/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-lavender-300/40 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-mint-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-lavender-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-mint-300/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;
