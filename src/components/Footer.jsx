export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-md border-t border-white/20 py-8 px-4 mt-20 shadow-inner">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-gray-700 font-medium">
          Thanks for visiting! Feel free to scroll up and say hello 👋
        </p>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">Jay Surse</span>. All
          rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Built with 💻 using{" "}
          <span className="text-blue-600 font-semibold">React</span> &{" "}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
