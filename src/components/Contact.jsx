import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaAt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_zrg8j1a",
        "template_iztqbw5",
        form.current,
        "ZWCbX9-oH2IR18HRb"
      );
      setIsSent(true);
      form.current.reset();
      setTimeout(() => setIsSent(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error.text);
    } finally {
      setIsSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-white to-gray-100 
                 overflow-hidden transition-colors duration-500"
    >
      {/* Enhanced Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-64 right-10 w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-4xl z-10"
      >
        {/* Animated Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            📬{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500"
            whileHover={{ y: -5 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <FaUser className="mr-2 text-blue-600" />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-300 hover:border-gray-300"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-400 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "name" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <FaAt className="mr-2 text-blue-600" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="your@email.com"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-300 hover:border-gray-300"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-400 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "email" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <FaPaperPlane className="mr-2 text-blue-600" />
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Your message..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-300 hover:border-gray-300 resize-none"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-400 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "message" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                  isSending ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isSent ? 1 : 0,
                  y: isSent ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                {isSent && (
                  <motion.p
                    className="text-green-600 text-center font-medium bg-green-50 p-3 rounded-lg border border-green-200"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
              </motion.div>
            </form>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Info Card */}
            <motion.div
              className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let's Connect!
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to collaborate on new projects or discuss
                innovative ideas. Choose your preferred way to reach out!
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <motion.div
                  className="flex items-center space-x-3 text-gray-600"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-red-500" />
                  <span>jaysurse07@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
                Follow Me On Social Media
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/jaysurse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-[#333] text-white font-semibold hover:bg-[#111] transition-all duration-300 overflow-hidden"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaGithub className="w-8 h-8 mb-2" />
                  </motion.div>
                  <span className="text-sm relative z-10">GitHub</span>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-gray-400 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Particle effect */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, x: 0, y: 0 }}
                      whileHover={{
                        scale: 1,
                        x: (Math.random() - 0.5) * 60,
                        y: (Math.random() - 0.5) * 60,
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/jay-surse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-[#062e58] transition-all duration-300 overflow-hidden"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaLinkedin className="w-8 h-8 mb-2" />
                  </motion.div>
                  <span className="text-sm relative z-10">LinkedIn</span>

                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-300 rounded-xl opacity-0"
                    whileHover={{
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.1, 1.2],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-300 rounded-xl opacity-0"
                    whileHover={{
                      opacity: [0, 0.4, 0],
                      scale: [1, 1.2, 1.4],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/jayy.__.007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold transition-all duration-300 overflow-hidden"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: [
                        "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B)",
                        "linear-gradient(90deg, #EC4899, #F59E0B, #8B5CF6)",
                        "linear-gradient(135deg, #F59E0B, #8B5CF6, #EC4899)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      rotate: 360,
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaInstagram className="w-8 h-8 mb-2" />
                  </motion.div>
                  <span className="text-sm relative z-10">Instagram</span>

                  {/* Rainbow border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
                      padding: "2px",
                    }}
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl"></div>
                  </motion.div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:jaysurse07@gmail.com"
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-700 transition-all duration-300 overflow-hidden"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      y: [0, -5, 0, -3, 0],
                      rotate: [0, -10, 10, -5, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaEnvelope className="w-8 h-8 mb-2" />
                  </motion.div>
                  <span className="text-sm relative z-10">Email</span>

                  {/* Flying envelope effect */}
                  <motion.div
                    className="absolute top-2 right-2 text-white/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, 20, 40],
                      y: [0, -10, -20],
                      rotate: [0, 15, 30],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </motion.div>

                  {/* Bounce dots */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-4 left-1/2 w-1 h-1 bg-white/60 rounded-full"
                      style={{ marginLeft: `${(i - 1) * 8}px` }}
                      whileHover={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
