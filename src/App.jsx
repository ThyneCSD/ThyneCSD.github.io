import { useEffect, useState } from "react";

export default function App() {
  const [gifs, setGifs] = useState([]);
  
  // Local GIF from public/ directory
  const SUBARU_GIF = "/subaru.gif";

  useEffect(() => {
    // Generate an ABSOLUTE TON of floating gifs (increased from 40 to 150)
    // Removed rotation and intense glitching for a pure "army of climbing Subarus" effect
    const newGifs = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 120) - 10}%`, // Allows them to spawn slightly off-screen
      top: `${(Math.random() * 120) - 10}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 150 + 80}px`,
      zIndex: Math.floor(Math.random() * 50),
      duration: `${Math.random() * 15 + 10}s` // Slower, steady climbing animations
    }));
    setGifs(newGifs);
  }, []);

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
          className="absolute mix-blend-screen pointer-events-none subaru-climb"
          style={{
            left: g.left,
            top: g.top,
            width: g.size,
            height: g.size,
            animationDelay: g.delay,
            zIndex: g.zIndex,
            animationDuration: g.duration,
          }}
        />
      ))}

      {/* 3. Main Title (Toned down glitch, solid text) */}
      <div className="z-50 mt-10 pointer-events-none flex flex-col items-center drop-shadow-[0_0_10px_black]">
        <h1 className="text-8xl font-black text-red-600 tracking-widest" style={{ fontFamily: '"Roboto", sans-serif' }}>
          SUBARU IS EVERYWHERE
        </h1>
        <span className="text-4xl text-gray-400 mt-2 font-bold tracking-widest">
          THE STAIRS NEVER END
        </span>
      </div>

      {/* 4. The 3D Staircase Background (Steady) */}
      <div className="staircase-container mt-40 z-10">
        <div className="stairs-wrap">
          {/* Tile the GIF on the actual stairs */}
          <div className="w-full h-full opacity-50 pointer-events-none" 
               style={{ backgroundImage: `url(${SUBARU_GIF})`, backgroundSize: '150px' }}>
          </div>
        </div>
      </div>

      {/* 5. The Main Giant Subaru Subject (Toned down aura, no glitch) */}
      <div className="subaru-container z-[999] mb-10 pointer-events-none">
        <div className="aura-steady"></div>
        <img 
          src={SUBARU_GIF} 
          alt="Main Subaru" 
          className="w-[400px] h-[400px] object-cover rounded-md border-8 border-[#330000] shadow-[0_0_50px_rgba(255,0,0,0.5)] bg-black"
        />
      </div>
      
    </div>
  );
}