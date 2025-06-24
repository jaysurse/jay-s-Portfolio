import { useEffect, useState } from "react";
import profilePic from "../assets/Nav-Pic.webp";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-50">
      <nav
        className={`relative z-10 px-6 py-4 mx-4 mt-4 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl transition-all duration-500 ${
          scrolled ? "bg-white/70" : "bg-white/30"
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
            <h1 className="text-xl font-bold tracking-wide ">
              Jay
            </h1>
          </div>

          {/* ☰ Mobile Toggle */}
          <div className="lg:hidden flex gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl p-2 rounded transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* 🌍 Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 font-medium">
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
          <ul className="lg:hidden mt-4 space-y-2 font-semibold px-4 pb-4 transition-all duration-300">
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
