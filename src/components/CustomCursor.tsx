
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.style.cursor === 'pointer') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-lavender-500/80 to-mint-500/80 rounded-full backdrop-blur-sm border border-white/30 shadow-lg shadow-lavender-200/50"></div>
      </div>

      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-12 h-12 border-2 border-lavender-400/50 rounded-full ${isHovering ? 'scale-150' : 'scale-100'} transition-all duration-300`}></div>
      </div>

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-br from-lavender-300/10 to-mint-300/10 rounded-full blur-xl"></div>
      </div>
    </>
  );
};

export default CustomCursor;
