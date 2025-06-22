export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/40 backdrop-blur-md">
      <div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        style={{ animation: "glow-spin 1s infinite linear" }}
      ></div>
    </div>
  );
}
