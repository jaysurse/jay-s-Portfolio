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
  SiSqlite,
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
      {
        icon: <FaHtml5 className="text-orange-500" />,
        name: "HTML",
        level: 90,
      },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", level: 85 },
      {
        icon: <FaJs className="text-yellow-400" />,
        name: "JavaScript",
        level: 80,
      },
      {
        icon: <FaReact className="text-cyan-400" />,
        name: "React.js",
        level: 75,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMysql className="text-blue-700" />, name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { icon: <SiC className="text-blue-600" />, name: "C", level: 85 },
      {
        icon: <SiCplusplus className="text-indigo-600" />,
        name: "C++",
        level: 80,
      },
      {
        icon: <SiPython className="text-yellow-600" />,
        name: "Python",
        level: 75,
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        icon: <FaGithub className="text-black" />,
        name: "Git & GitHub",
        level: 85,
      },
      {
        icon: <FaCode className="text-blue-500" />,
        name: "VS Code",
        level: 90,
      },
      {
        icon: <MdDevices className="text-green-500" />,
        name: "Responsive Design",
        level: 80,
      },
      {
        icon: <SiOpenaccess className="text-purple-500" />,
        name: "Open Source Learning",
        level: 70,
      },
      {
        icon: <SiGithubactions className="text-black" />,
        name: "GitHub Projects",
        level: 75,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 py-20 overflow-hidden"
    >
      {/* Background animated blobs */}
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob top-10 left-10" />
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000 top-64 right-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl w-full z-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          💼 My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="space-y-12">
          {categories.map((category, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold text-left text-gray-700 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/40 backdrop-blur-md rounded-xl shadow p-5 flex flex-col gap-2 border border-white/20 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between text-gray-800 font-medium text-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{skill.icon}</div>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
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
  