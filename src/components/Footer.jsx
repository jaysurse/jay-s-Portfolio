import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch("https://jay-s-portfolio.onrender.com/api/visit")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch visitor count");
        return res.json();
      })
      .then((data) => {
        console.log("Visitor API data:", data);
        setVisitorCount(data.count);
      })
      .catch((err) => {
        console.error("Visitor count error:", err);
        setVisitorCount("Error");
      });
  }, []);

  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-gray-300 py-8 px-4 mt-20 shadow-inner">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-gray-700 font-medium">
          Thanks for visiting! Feel free to scroll up and say hello 👋
        </p>

        <p className="text-sm text-gray-600">
          👁️ Visitor Count:{" "}
          <span className="font-semibold text-black">
            {visitorCount === "Error"
              ? "Error"
              : visitorCount === null
              ? "Loading..."
              : visitorCount}
          </span>
        </p>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">Jay Surse</span>. All
          rights reserved.
        </p>

        <p className="text-sm text-gray-600">
          Built with 💻 using{" "}
          <span className="text-blue-600 font-semibold">React</span> &{" "}
          <span className="text-purple-500 font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
