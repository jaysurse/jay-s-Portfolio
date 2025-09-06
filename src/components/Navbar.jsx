import { useEffect, useState } from "react";
import profilePic from "../assets/Nav-Pic.webp";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";
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

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Jay Surse Resume.pdf";
    link.download = "Jay_Surse_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`relative z-10 px-6 py-4 mx-4 mt-4 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl transition-all duration-500 ${
          scrolled ? "bg-white/95 shadow-2xl border-white/50" : "bg-white/30"
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
              className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold tracking-wide hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Jay Surse
            </h1>
          </div>

          {/* ☰ Mobile Toggle */}
          <div className="lg:hidden flex gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl hover:text-blue-600 transition-colors duration-300"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* 🌍 Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6 font-medium">
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

            {/* Download Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 relative overflow-hidden"
            >
              <HiDownload className="w-4 h-4 group-hover:animate-bounce transition-all duration-300" />
              <span>Resume</span>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        {/* 📱 Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-2 font-semibold px-4 pb-4 transition-all duration-300 animate-fadeIn">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 border-b border-gray-200 pb-2 hover:border-blue-200 transition-all duration-300"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Download Resume Button */}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <button
                onClick={() => {
                  handleResumeDownload();
                  setMenuOpen(false);
                }}
                className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 w-full justify-center relative overflow-hidden"
              >
                <HiDownload className="w-4 h-4 group-hover:animate-bounce transition-all duration-300" />
                <span>Download Resume</span>

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
