import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/Nav-Pic.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-white to-gray-100 
                 px-6 pt-20 pb-20 overflow-hidden transition-colors duration-500"
    >
      {/* Blurred Blobs */}
      <div className="absolute -top-24 left-0 w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-2xl animate-blob animation-delay-3000" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
      >
        {/* Left: Text */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-blue-600">Jay</span>
          </h2>

          <p className="text-lg text-gray-700 min-h-[28px]">
            <Typewriter
              words={[
                "Web Developer",
                "React Enthusiast",
                "CS Diploma Student",
                "Open Source Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            View My Work
          </a>
        </div>

        {/* Right: Profile Pic */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-64 h-64"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse" />
          <img
            src={profilePic}
            alt="Jay"
            className="relative w-64 h-64 rounded-full border-4 border-white shadow-lg z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
