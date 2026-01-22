import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
              Over
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
