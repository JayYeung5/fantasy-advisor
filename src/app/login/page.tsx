'use client';

import { useEffect } from 'react';
import { loginWithGoogle, onUserChange } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onUserChange(user => {
      if (user) {
        router.push('/home'); // ✅ Go to home after login
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Fantasy Advisor Login</h1>
      <button
        onClick={loginWithGoogle}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}