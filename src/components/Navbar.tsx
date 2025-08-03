'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const hideOnRoutes = ["/", "/login"];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const isActive = (path: string) => pathname === path;

  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-colors";
  const activeStyle = "bg-yellow-400 text-black";
  const inactiveStyle = "text-white hover:bg-gray-700";

  if (hideOnRoutes.includes(pathname)) return null;

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 flex gap-4 font-semibold shadow-md sticky top-0 z-50 items-center justify-between">
      <div className="flex gap-4">
        <Link href="/home" className={`${baseStyle} ${isActive("/home") ? activeStyle : inactiveStyle}`}>
          Home
        </Link>
        <Link href="/dashboard" className={`${baseStyle} ${isActive("/dashboard") ? activeStyle : inactiveStyle}`}>
          Dashboard
        </Link>
        <Link href="/team" className={`${baseStyle} ${isActive("/team") ? activeStyle : inactiveStyle}`}>
          Team
        </Link>
        <Link href="/trade" className={`${baseStyle} ${isActive("/trade") ? activeStyle : inactiveStyle}`}>
          Trade
        </Link>
        <Link href="/news" className={`${baseStyle} ${isActive("/news") ? activeStyle : inactiveStyle}`}>
          News
        </Link>
      </div>
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Sign Out
        </button>
      )}
    </nav>
  );
}