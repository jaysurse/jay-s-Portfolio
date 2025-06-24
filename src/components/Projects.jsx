import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const completedProjects = [
  {
    title: "EduDesk – Notes Sharing Platform",
    description:
      "A responsive platform for students to upload and access academic notes department-wise.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/jaysurse/edu-desk",
    live: "http://edu-desk-ui.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio showcasing my skills, projects, and background.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/jaysurse/jay-s-Portfolio",
    live: "https://jays-portfolio-site.vercel.app/",
  },
  {
    title: "Voting Management System (C Project)",
    description:
      "A simple terminal-based voting system built using C language. Allows secure voting and result calculation.",
    tech: ["C", "Console UI"],
    github: "https://github.com/jaysurse/Voting-Management-System-C",
    live: "",
  },
];

const upcomingProjects = [
  {
    title: "Skill Swap – Peer Learning Platform",
    description:
      "A React-based platform where students can exchange knowledge by offering and requesting skills. Designed with a smooth UI and real-time updates.",
    tech: ["React", "Tailwind", "Firebase (planned)"],
    github: "https://github.com/jaysurse/skill-swap",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 px-6 py-20 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob top-10 left-10" />
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-5000 bottom-16 right-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full z-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          🚀 My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {completedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 space-y-4 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4 text-xl">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          🛠️ Upcoming <span className="text-purple-600">Projects</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 space-y-4 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white text-xl"
                >
                  <FaGithub />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
