
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
      
      {/* Moving floating elements with different speeds */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-lavender-100/15 to-mint-100/15 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-mint-100/15 to-lavender-200/15 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-br from-lavender-200/20 to-mint-200/20 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-mint-200/10 to-lavender-100/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Moving gradient waves */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-lavender-300/30 to-transparent animate-wave-horizontal"></div>
        <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-transparent via-mint-300/30 to-transparent animate-wave-vertical"></div>
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-transparent via-lavender-400/30 to-transparent animate-wave-horizontal-reverse"></div>
        <div className="absolute bottom-0 right-0 h-full w-2 bg-gradient-to-t from-transparent via-mint-400/30 to-transparent animate-wave-vertical-reverse"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-lavender-300/40 rounded-full animate-orbit"></div>
      <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-mint-400/50 rotate-45 animate-orbit-reverse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/5 w-2 h-6 bg-lavender-400/40 rounded-full animate-float-vertical" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-5 h-2 bg-mint-300/60 rounded-full animate-float-horizontal" style={{ animationDelay: '3s' }}></div>
      
      {/* Enhanced grid pattern with animation */}
      <div className="absolute inset-0 opacity-[0.03] animate-grid-shift">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Pulsing particles with varying sizes */}
      <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-lavender-300/40 rounded-full animate-pulse-particle"></div>
      <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-mint-400/50 rounded-full animate-pulse-particle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-lavender-400/40 rounded-full animate-pulse-particle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-mint-300/60 rounded-full animate-pulse-particle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-lavender-500/30 rounded-full animate-pulse-particle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/5 left-3/4 w-2.5 h-2.5 bg-mint-500/40 rounded-full animate-pulse-particle" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;
