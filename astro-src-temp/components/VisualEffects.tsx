
import React, { useEffect, useRef } from 'react';

interface VisualEffectsProps {
  isDarkMode: boolean;
}

const VisualEffects: React.FC<VisualEffectsProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number, y: number, vx: number, vy: number, size: number }> = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-700">
      {/* Dynamic Gradients */}
      <div 
        className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] blur-[140px] rounded-full animate-float transition-all duration-1000 ${
          isDarkMode ? 'bg-blue-600/10' : 'bg-blue-400/10'
        }`}
        style={{ animationDelay: '0s' }}
      />
      <div 
        className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] blur-[140px] rounded-full animate-float transition-all duration-1000 ${
          isDarkMode ? 'bg-purple-600/10' : 'bg-indigo-400/10'
        }`}
        style={{ animationDelay: '3s' }}
      />
      
      {/* Grid Pattern */}
      <div className={`absolute inset-0 grid-bg transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.15] text-white' : 'opacity-[0.05] text-black'}`} />
      
      {/* Shimmer Overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-[0.05] dark:opacity-[0.1] bg-gradient-to-r from-transparent via-white dark:via-blue-400 to-transparent bg-[length:200%_100%]" />
      
      {/* Beams */}
      <div className={`absolute top-[25%] left-0 gradient-beam transition-all duration-1000 ${isDarkMode ? 'opacity-30 text-blue-400' : 'opacity-10 text-blue-600'}`} />
      <div className={`absolute top-[75%] left-0 gradient-beam transition-all duration-1000 ${isDarkMode ? 'opacity-20 text-purple-400' : 'opacity-10 text-indigo-600'}`} />
      
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default VisualEffects;
