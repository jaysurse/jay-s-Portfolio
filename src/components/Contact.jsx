import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      // Send message to YOU
      await emailjs.sendForm(
        "service_77px9nq",
        "template_g6lykci",
        form.current,
        "ZWCbX9-oH2IR18HRb"
      );

      // Auto reply to sender
      await emailjs.sendForm(
        "service_77px9nq",
        "template_n1d23ph", // NEW auto reply template
        form.current,
        "ZWCbX9-oH2IR18HRb"
      );

      setIsSent(true);
      form.current.reset();

      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-white to-gray-100 
                 overflow-hidden transition-colors duration-500"
    >
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-64 right-10 w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse" />

      {/* Floating Particles */}
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

      {/* HEADER */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          📬{" "}
          <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I’d love to hear
          from you!
        </p>
      </div>

      {/* FORM + SOCIAL */}
      <div className="grid lg:grid-cols-2 gap-8 items-start w-full max-w-4xl z-10">
        {/* FORM */}
        <motion.div
          className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border p-8 hover:shadow-2xl transition-all duration-500"
          whileHover={{ y: -5 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase">
                <FaUser className="mr-2 text-blue-600" /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 shadow-inner 
                           hover:border-gray-300 focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase">
                <FaAt className="mr-2 text-blue-600" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 shadow-inner 
                           hover:border-gray-300 focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3 text-sm uppercase">
                <FaPaperPlane className="mr-2 text-blue-600" /> Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 shadow-inner 
                           hover:border-gray-300 focus:ring-2 focus:ring-blue-300 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
              font-medium py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 
              shadow-lg transition-all ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* SOCIAL MEDIA SECTION */}
        <motion.div
          className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border p-8 
                     hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Connect With Me
          </h3>
          <p className="text-gray-600 mb-8 text-center">
            I'm active on multiple platforms—feel free to reach out anywhere!
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.07, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/jaysurse"
              target="_blank"
              className="group relative flex flex-col items-center p-6 rounded-xl 
                         bg-gray-900 text-white shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <motion.div className="text-4xl mb-2" whileHover={{ y: -4 }}>
                <FaGithub />
              </motion.div>
              <span className="font-semibold text-lg tracking-wide">
                GitHub
              </span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.07, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/jay-surse/"
              target="_blank"
              className="group relative flex flex-col items-center p-6 rounded-xl 
                         bg-blue-600 text-white shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <motion.div className="text-4xl mb-2" whileHover={{ scale: 1.2 }}>
                <FaLinkedin />
              </motion.div>
              <span className="font-semibold text-lg tracking-wide">
                LinkedIn
              </span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.07, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/jayy.__.007/"
              target="_blank"
              className="group relative flex flex-col items-center p-6 rounded-xl 
                bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 text-white shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <motion.div
                className="text-4xl mb-2"
                whileHover={{ rotate: 360, scale: 1.25 }}
                transition={{ duration: 0.7 }}
              >
                <FaInstagram />
              </motion.div>
              <span className="font-semibold text-lg tracking-wide">
                Instagram
              </span>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.07, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jaysurse07@gmail.com"
              className="group relative flex flex-col items-center p-6 rounded-xl 
                         bg-red-600 text-white shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <motion.div className="text-4xl mb-2" whileHover={{ y: -4 }}>
                <FaEnvelope />
              </motion.div>
              <span className="font-semibold text-lg tracking-wide">
                Email Me
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thanks for reaching out. I’ll get back to you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
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
