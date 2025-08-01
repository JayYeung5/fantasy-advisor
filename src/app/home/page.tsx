'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);

  if (status === 'loading') return <p>Loading...</p>;
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <h1 className="text-5xl font-bold mb-4 text-yellow-400 drop-shadow-lg text-center">
        Fantasy Trade Advisor
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        The ultimate LLM-powered NBA fantasy tool for evaluating trades, analyzing your team, and tracking impactful player news.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/team"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition"
        >
          Analyze My Team
        </Link>
        <Link
          href="/trade"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition"
        >
          Evaluate a Trade
        </Link>
        <Link
          href="/dashboard"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/news"
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl text-black font-semibold shadow-md transition"
        >
          Player News
        </Link>
      </div>
    </main>
  );
}