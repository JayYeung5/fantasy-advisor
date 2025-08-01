export default function IntroPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fantasy Advisor</h1>
      <a href="/login" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
        Continue
      </a>
    </main>
  );
}