import { useEffect, useState } from "react";

export default function FloatingBadge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed top-4 left-4 z-50 transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm animate-pulse hover:scale-105 transition-transform duration-300 cursor-default">
        🌟 Available for Freelance
      </div>
    </div>
  );
}
