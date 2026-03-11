import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="glass-panel w-full rounded-2xl px-8 py-5 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="nav-logo flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center text-black font-bold text-xl transform group-hover:rotate-12 transition-transform duration-300">
            T.
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            THYNE<span className="text-emerald-400">.</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wide">
            Let's Talk
          </Link>
        </div>
        
      </nav>
    </header>
  );
}
