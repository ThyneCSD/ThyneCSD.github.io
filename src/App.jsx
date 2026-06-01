import { useEffect, useState, useCallback } from "react";

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [isReturning, setIsReturning] = useState(false);
  const [explosionCount, setExplosionCount] = useState(0);
  
  const SUBARU_GIF = "/subaru.gif";

  const generateGifs = useCallback(() => {
    const newGifs = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 120) - 10}%`,
      top: `${(Math.random() * 120) - 10}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 150 + 80}px`,
      zIndex: Math.floor(Math.random() * 50),
      duration: `${Math.random() * 15 + 10}s`,
      isExploded: false
    }));
    setGifs(newGifs);
  }, []);

  useEffect(() => {
    generateGifs();
  }, [generateGifs]);

  const handleSubaruClick = (id) => {
    setGifs(prev => prev.map(g => g.id === id ? { ...g, isExploded: true } : g));
    setExplosionCount(prev => {
      const next = prev + 1;
      if (next >= 5) {
        triggerReturnByDeath();
      }
      return next;
    });
  };

  const triggerReturnByDeath = () => {
    setIsReturning(true);
    setTimeout(() => {
      setIsReturning(false);
      setExplosionCount(0);
      generateGifs();
    }, 4000);
  };

  return (
    <div className="w-screen h-screen relative bg-[#110000] overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. Global Red fog (Toned down) */}
      <div className="fog opacity-40"></div>

      {/* 2. OVERWHELMING ARMY OF SUBARU GIFS */}
      {gifs.map((g) => (
        <img 
          key={g.id}
          src={SUBARU_GIF}
          alt="Subaru Stairs"
          onClick={() => !g.isExploded && handleSubaruClick(g.id)}
          className={`absolute mix-blend-screen subaru-climb ${g.isExploded ? 'exploded' : ''}`}
          style={{
            left: g.left,
            top: g.top,
            width: g.size,
            height: g.size,
            animationDelay: g.delay,
            zIndex: g.zIndex,
            animationDuration: g.duration,
            display: g.isExploded && !isReturning ? 'block' : (g.isExploded ? 'none' : 'block')
          }}
        />
      ))}

      {/* 3. Main Title (Toned down glitch, solid text) */}
      <div className={`z-50 mt-10 pointer-events-none flex flex-col items-center drop-shadow-[0_0_10px_black] ${isReturning ? 'opacity-0' : ''}`}>
        <h1 className="text-8xl font-black text-red-600 tracking-widest" style={{ fontFamily: '"Roboto", sans-serif' }}>
          SUBARU IS EVERYWHERE
        </h1>
        <span className="text-4xl text-gray-400 mt-2 font-bold tracking-widest">
          THE STAIRS NEVER END
        </span>
      </div>

      {/* 4. The 3D Staircase Background (Steady) */}
      <div className={`staircase-container mt-40 z-10 ${isReturning ? 'opacity-0' : ''}`}>
        <div className="stairs-wrap">
          <div className="w-full h-full opacity-50 pointer-events-none" 
               style={{ backgroundImage: `url(${SUBARU_GIF})`, backgroundSize: '150px' }}>
          </div>
        </div>
      </div>

      {/* 5. The Main Giant Subaru Subject (Toned down aura, no glitch) */}
      <div className={`subaru-container z-[999] mb-10 pointer-events-none ${isReturning ? 'opacity-0' : ''}`}>
        <div className="aura-steady"></div>
        <img 
          src={SUBARU_GIF} 
          alt="Main Subaru" 
          className="w-[400px] h-[400px] object-cover rounded-md border-8 border-[#330000] shadow-[0_0_50px_rgba(255,0,0,0.5)] bg-black"
        />
      </div>

      {/* 6. RETURN BY DEATH OVERLAY */}
      {isReturning && (
        <div className="rbd-overlay">
          <h2 className="rbd-text">RETURN BY DEATH</h2>
          <div className="mt-8 text-xl text-gray-500 tracking-[1em] animate-pulse">RESTARTING TIMELINE</div>
        </div>
      )}
      
    </div>
  );
}