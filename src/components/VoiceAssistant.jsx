import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const JAY = {
  name: "Jay Surse",
  role: "Computer Science Student and Web Developer",
  location: "Pune, India",
  education:
    "Third year Diploma in Computer Science at Government Polytechnic Pune, graduating in 2026",
  skills: "React, Tailwind CSS, JavaScript, Node.js, Python, C, C++, Java",
  projects: "EduDesk, PocketCode, CodeType, and Voting System",
  motto: "Learn by building, grow by failing, and improve every day",
  freelance: "Open to freelance and paid projects",
};

const SYSTEM_PROMPT = `
You are a voice-only AI assistant for Jay’s portfolio.
Keep replies very short and natural (max 2 sentences).
No emojis. No formatting.

Jay details:
${JAY.name}, ${JAY.role}, ${JAY.location}
Education: ${JAY.education}
Skills: ${JAY.skills}
Projects: ${JAY.projects}
Motto: ${JAY.motto}
${JAY.freelance}
`;

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [aiText, setAiText] = useState("");

  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const processingRef = useRef(false);
  const voicesRef = useRef([]);

  // Load voices safely
  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = synthRef.current.getVoices();
    };
    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;
  }, []);

  // ---------------- SPEAK ----------------
  const speak = (text, cb) => {
    if (!text) return;

    synthRef.current.cancel();
    setStatus("speaking");
    setAiText(text);

    const utter = new SpeechSynthesisUtterance(text);
    const voice =
      voicesRef.current.find((v) => v.lang === "en-US") || voicesRef.current[0];

    if (voice) utter.voice = voice;
    utter.rate = 0.95;

    utter.onend = () => {
      cb?.();
      setStatus("listening");
      startListening();
    };

    synthRef.current.speak(utter);
  };

  // ---------------- GEMINI ----------------
  const getAIResponse = async (msg) => {
    if (!GEMINI_KEY) return fallback(msg);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: SYSTEM_PROMPT + "\nUser: " + msg }] }],
          }),
        }
      );

      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || fallback(msg);
    } catch {
      return fallback(msg);
    }
  };

  // ---------------- FALLBACK ----------------
  const fallback = (t) => {
    t = t.toLowerCase();
    if (t.includes("skill")) return `Jay works with ${JAY.skills}.`;
    if (t.includes("project")) return `He built ${JAY.projects}.`;
    if (t.includes("about") || t.includes("who"))
      return `Jay is a ${JAY.role} from ${JAY.location}.`;
    if (t.includes("hire") || t.includes("freelance"))
      return "Jay is open to freelance and paid projects.";
    return "You can ask about Jay’s skills, projects, or experience.";
  };

  // ---------------- LISTEN ----------------
  const startListening = () => {
    if (processingRef.current) return;

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const recog = new SR();
    recog.lang = "en-US";
    recog.continuous = false;

    recog.onstart = () => setStatus("listening");

    recog.onresult = async (e) => {
      const text = e.results[0][0].transcript;
      processingRef.current = true;
      setStatus("thinking");

      const reply = await getAIResponse(text);
      processingRef.current = false;

      speak(reply);
    };

    recog.onerror = () => setStatus("idle");
    recognitionRef.current = recog;
    recog.start();
  };

  // ---------------- OPEN ----------------
  const openAssistant = () => {
    setOpen(true);
    speak(
      "Hi, I am Jay’s voice assistant. You can ask me about his skills or projects."
    );
  };

  const closeAssistant = () => {
    recognitionRef.current?.abort();
    synthRef.current.cancel();
    setOpen(false);
    setStatus("idle");
    setAiText("");
  };

  // ---------------- UI ----------------
  return (
    <>
      {!open && (
        <button
          onClick={openAssistant}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
          bg-white/20 backdrop-blur-xl border border-white/30
          flex items-center justify-center text-white"
        >
          🎤
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80
            bg-white/10 backdrop-blur-2xl border border-white/20
            rounded-3xl text-white shadow-xl"
          >
            <div className="p-4 flex justify-between items-center">
              <span className="text-sm opacity-80">{status.toUpperCase()}</span>
              <button onClick={closeAssistant}>✕</button>
            </div>

            <div className="p-6 text-center">
              <motion.div
                animate={status === "speaking" ? { scale: [1, 1.1, 1] } : {}}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="w-20 h-20 mx-auto rounded-full
                bg-white/20 flex items-center justify-center"
              >
                🎙️
              </motion.div>

              {aiText && <p className="mt-4 text-sm opacity-90">{aiText}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
