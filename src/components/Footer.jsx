export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 mb-8 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <p>Available for freelance opportunities</p>
      </div>

      <p>&copy; {currentYear} Thyne. All rights reserved.</p>

      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
