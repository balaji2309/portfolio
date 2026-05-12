import { useState, useEffect } from "react";
import { NAV } from "../data/portfolioData";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Changes navbar appearance after scrolling 40px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollTo(section.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-16 transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,.5)] border-b border-cyan-400/20" : "border-b border-transparent"
        }`}
        style={{ background: "rgba(3,11,24,.9)", backdropFilter: "blur(18px)" }}
      >
        {/* Logo */}
        <button 
          onClick={() => scrollTo("hero")} 
          className="font-black text-xl text-white tracking-tight"
        >
          B<span className="text-cyan-400">.</span>K
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV.map((n) => (
            <li key={n}>
              <button 
                onClick={() => handleNavClick(n)}
                className="font-mono text-[.72rem] tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors relative group"
              >
                {n}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-250" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="mailto:balajicgm23@gmail.com" 
          className="hidden md:inline-flex font-mono text-[.72rem] tracking-widest uppercase text-cyan-400 border border-cyan-400 px-4 py-1.5 rounded-md hover:bg-cyan-400 hover:text-[#030b18] transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer z-50"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 flex flex-col gap-6 p-12 pt-24" 
          style={{ background: "rgba(3,11,24,.98)", backdropFilter: "blur(20px)" }}
        >
          {NAV.map((n) => (
            <button 
              key={n} 
              onClick={() => handleNavClick(n)}
              className="font-mono text-lg tracking-widest uppercase text-slate-400 hover:text-cyan-400 text-left border-b border-white/8 pb-4 transition-colors"
            >
              {n}
            </button>
          ))}
          <a 
            href="mailto:balajicgm23@gmail.com"
            className="mt-4 font-mono text-center tracking-widest uppercase text-cyan-400 border border-cyan-400 py-4 rounded-xl"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}