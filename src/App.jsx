import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield"; // IMPORT STARFIELD

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden text-zinc-100">
      
      {/* 1. SPACE BACKGROUND CANVAS */}
      <Starfield />

      {/* 2. Very subtle ambient background lighting (Nebula effect) */}
      <div className="glow-orb-1 absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/10 blur-[100px] -z-10 pointer-events-none mix-blend-screen"></div>
      <div className="glow-orb-2 absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-emerald-900/10 to-transparent blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

      {/* Main Layout Grid */}
      <div className="flex-1 flex flex-col container mx-auto px-6 max-w-6xl relative z-10 pt-6">
        
        {/* Floating Header */}
        <Header />

        {/* Dynamic Outlet Content wrapped in a clean, modern layout */}
        <main className="flex-1 w-full mt-12 mb-20 animate-fade-in-up">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}