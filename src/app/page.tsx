export default function IntroPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
        Welcome to <span className="text-yellow-300">Fantasy Advisor</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-200">
        Your ultimate fantasy basketball companion—powered by smart analysis, trade insights, and real-time player updates.
      </p>
      <a
        href="/login"
        className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        Get Started
      </a>
    </main>
  );
}