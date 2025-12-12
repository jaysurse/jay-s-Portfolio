import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// -------------------- PROJECT DATA --------------------
const projectsByCategory = {
  C: [
    {
      title: "Voting Management System",
      description:
        "A terminal-based voting system developed in C with secure voting and result calculation.",
      tech: ["C", "Console UI"],
      github: "https://github.com/jaysurse/Voting-Management-System-C",
    },
  ],

  Java: [
    {
      title: "🖥️ CodeType – Java Typing Practice App",
      description:
        "Boost your coding speed and accuracy by typing Java code snippets and tracking your performance in real-time. Inspired by MonkeyType, this app is designed to help developers improve their typing skills.",
      tech: ["Java", "OOP", "File Handling"],
      github: "https://github.com/jaysurse/CodeType",
    },
  ],

  React: [
    {
      title: "EduDesk – Notes Sharing Platform",
      description:
        "A responsive platform for uploading and accessing department-wise academic notes.",
      tech: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/jaysurse/edu-desk",
      live: "http://edu-desk-ui.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio showing skills, projects, and certifications.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/jaysurse/jay-s-Portfolio",
      live: "https://jays-portfolio-site.vercel.app/",
    },
  ],

  "Mobile App Development": [
    {
      title: "PocketCode",
      description:
        "PocketCode is an Android app that lets users write, run, and test code in C, C++, Java, and Python on their devices. It supports runtime input, displays console-like output, and allows saving and opening code files from any location. The app uses the JDoodle API for online code execution.",
      tech: ["Android Studio", "Java", "JDoodle API"],
      github: "https://github.com/jaysurse/PocketCode",
    },
  ],
};

// Combine all projects into one list for ALL tab
const allProjects = Object.values(projectsByCategory).flat();

// -------------------- MAIN COMPONENT --------------------
export default function Projects() {
  const categories = ["All", ...Object.keys(projectsByCategory)];
  const [activeTab, setActiveTab] = useState("All");

  // Determine what to show
  const getProjects = () =>
    activeTab === "All" ? allProjects : projectsByCategory[activeTab];

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b
      from-gray-100 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* BG Blobs */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Header */}
      <h2 className="text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
        🚀 My <span className="text-blue-600">Projects</span>
      </h2>

      {/* -------------------- TABS -------------------- */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 text-lg font-semibold rounded-full border transition-all duration-300 
              ${
                activeTab === category
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-200 border-white/30 hover:bg-white/30"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* -------------------- PROJECTS DISPLAY -------------------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          {getProjects().map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white/20 dark:bg-white/10 backdrop-blur-xl
                rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Hover Glow Border */}
              <div
                className="absolute inset-0 rounded-2xl border-2 
                border-transparent group-hover:border-blue-400/40 
                transition-all duration-300"
              ></div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full
                    bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6 text-2xl">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
