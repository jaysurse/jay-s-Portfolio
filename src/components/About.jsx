import { motion } from "framer-motion";
import profilePic from "../assets/Nav-Pic.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-white to-gray-100 
                 px-6 pt-20 pb-20 overflow-hidden transition-colors duration-500"
    >
      {/* Blurred Gradient Blobs */}
      <div className="absolute -top-24 left-0 w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-2xl animate-blob animation-delay-3000" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
      >
        {/* Left: Text */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            👨‍💻 About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Hey! I'm <strong>Jay</strong>, a Computer Science student currently
            in my <strong>3rd year (2025)</strong> at{" "}
            <strong>Government Polytechnic Pune</strong>. I'm pursuing a diploma
            in Computer Science and will be completing it in{" "}
            <strong>2026</strong>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I'm passionate about web development and love creating clean,
            interactive user experiences. I primarily work with{" "}
            <strong>React</strong> and <strong>Tailwind CSS</strong>, and enjoy
            crafting both design and logic in everything I build.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of coding, you'll find me watching dev content, exploring
            open-source, or planning out new mini project ideas. I’m on a
            journey to keep improving and eventually launch something that truly
            helps people.
          </p>

          <a
            href="#skills"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Check Out My Skills
          </a>
        </div>

        {/* Right: Profile Pic */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-64 h-64"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
