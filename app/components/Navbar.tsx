export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-white/10">
      
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold tracking-tight">
          Muhammad Midhat
        </h1>

        <div className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#experience" className="hover:text-black dark:hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition">
            Contact
          </a>
        </div>

      </nav>

    </header>
  );
}