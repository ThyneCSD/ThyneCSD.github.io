import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-red-800 to-black border-b-[12px] border-dotted border-red-500 p-6 rounded-[30px] shadow-[0_15px_0_#4b0082] transform -skew-y-3 wiggle">
      <nav className="container mx-auto flex items-center justify-between flex-wrap gap-4">
        <Link to="/" className="text-6xl rainbow-text bounce-crazy block font-black">
          🩸 RE:ZERO PORTFOLIO 🦋
        </Link>
        <ul className="flex gap-8 bg-purple-950/80 p-6 rounded-full border-4 border-dashed border-red-500 shadow-[0_0_30px_#ff0000]">
          <li className="spin-fast">
            <Link to="/" className="text-4xl font-black text-red-400 hover:text-white drop-shadow-[3px_3px_0_black]">
              🍎 SAVE POINT
            </Link>
          </li>
          <li className="bounce-crazy" style={{ animationDelay: "0.2s" }}>
            <Link to="/about" className="text-4xl font-black text-purple-400 hover:text-white drop-shadow-[3px_3px_0_black]">
              ❄️ EMILIA-TAN
            </Link>
          </li>
          <li className="wiggle" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact" className="text-4xl font-black text-blue-400 hover:text-white drop-shadow-[3px_3px_0_black]">
              💙 WHO IS REM?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
