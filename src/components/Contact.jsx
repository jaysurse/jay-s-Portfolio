import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_ib77l4f",
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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 py-20 bg-gradient-to-b from-white to-gray-100 
                 overflow-hidden transition-colors duration-500"
    >
      {/* 🎨 Blurred Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-64 right-10 w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-20 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/50 backdrop-blur-md 
                   rounded-xl shadow-lg border border-gray-200 p-10 z-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          📬 <span className="text-blue-600">Get in Touch</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {isSent && (
            <p className="text-green-600 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </motion.div>

      {/* Social Media Links */}
      <div className="mt-10 text-center z-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Or connect with me here:
        </h3>
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a
            href="https://github.com/jaysurse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-surse/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jayy.__.007/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:jaysurse07@gmail.com"
            className="hover:scale-110 transition-transform duration-300 hover:text-red-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
