import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiMysql,
  SiC,
  SiCplusplus,
  SiPython,
  SiOpenaccess,
  SiGithubactions,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const categories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
    ],
  },
  {
    title: "Database",
    skills: [{ icon: <SiMysql className="text-blue-700" />, name: "MySQL" }],
  },
  {
    title: "Languages",
    skills: [
      { icon: <SiC className="text-blue-600" />, name: "C" },
      { icon: <SiCplusplus className="text-indigo-600" />, name: "C++" },
      { icon: <SiPython className="text-yellow-600" />, name: "Python" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { icon: <FaGithub className="text-black" />, name: "Git & GitHub" },
      { icon: <FaCode className="text-blue-500" />, name: "VS Code" },
      {
        icon: <MdDevices className="text-green-500" />,
        name: "Responsive Design",
      },
      {
        icon: <SiOpenaccess className="text-purple-500" />,
        name: "Open Source Learning",
      },
      {
        icon: <SiGithubactions className="text-black" />,
        name: "GitHub Projects",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* 🔵 Background Blur Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-64 right-10 w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-20 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full z-10 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          💼 My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="space-y-16">
          {categories.map((category, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold text-left text-gray-700 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-md hover:shadow-2xl 
                             border border-gray-200 cursor-pointer transform-gpu transition-all duration-300 ease-in-out"
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <div className="text-lg font-medium text-gray-700">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
