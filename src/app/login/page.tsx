'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home'); // Already logged in → redirect
    }
  }, [status]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        className="bg-purple-600 text-white px-6 py-3 rounded"
        onClick={() => signIn('yahoo', { callbackUrl: '/home' })}
      >
        Sign in with Yahoo
      </button>
    </main>
  );
}