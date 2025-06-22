import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/Nav-Pic.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-100 to-white px-6 pb-0 overflow-hidden"
    >
      {/* 🎨 Blurred Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-32 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />

      {/* 👤 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
      >
        {/* 👈 Left: Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Jay</span>
          </h2>

          <p className="text-lg text-gray-700 mb-6 min-h-[28px]">
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

        {/* 👉 Right: Profile Pic */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-40 h-40"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse" />
          <img
            src={profilePic}
            alt="Jay"
            className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
