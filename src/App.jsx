import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      // Show welcome popup only once per session
      if (!sessionStorage.getItem("popupShown")) {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Loader */}
      {loading && <Loader />}

      {!loading && showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-6 text-center max-w-sm w-full text-white">
            <h2 className="text-2xl font-bold mb-2">Hey there 👋</h2>
            <p className="mb-4 text-sm text-white/90">
              Welcome to my portfolio, I'm Jay Surse — a CS student.
              <br />
              Feel free to connect with me professionally!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/jay-surse/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
              >
                Connect on LinkedIn
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="border border-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
