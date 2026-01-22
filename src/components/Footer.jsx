export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-neutral-400">
        <p>&copy; {currentYear} Mijn Portfolio. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
