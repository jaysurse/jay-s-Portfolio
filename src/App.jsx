import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VoiceAssistant from "./components/VoiceAssistant";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      if (!sessionStorage.getItem("popupShown")) {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      } else {
        setVoiceEnabled(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setVoiceEnabled(true);
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {loading && <Loader />}

      {!loading && showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-6 text-center max-w-sm w-full text-white">
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
                onClick={closePopup}
                className="border border-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Assistant */}
      <VoiceAssistant enabled={voiceEnabled} />
    </div>
  );
}

export default App;
