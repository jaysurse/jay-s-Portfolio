import { useEffect, useState } from "react";
import profilePic from "../assets/Nav-Pic.webp";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);

    // Sticky effect on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-50">
      {/* 🔮 Animated Blobs for Soft Glow */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob top-[-100px] left-[-50px] z-0" />
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000 top-[50px] right-[-80px] z-0" />

      {/* 🌫️ Navbar Container */}
      <nav
        className={`relative z-10 px-6 py-4 mx-4 mt-4 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl transition-all duration-500 ${
          scrolled ? "bg-white/50" : "bg-white/30"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex justify-between items-center transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
          }`}
        >
          {/* 👤 Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={profilePic}
              alt="Jay"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              Jay
            </h1>
          </div>

          {/* ☰ Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* 🌍 Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group-hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* 📱 Mobile Nav */}
        {menuOpen && (
          <ul className="lg:hidden mt-4 space-y-2 text-gray-800 font-semibold px-4 pb-4 transition-all duration-300">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 border-b border-gray-200 pb-2"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
