'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-colors";
  const activeStyle = "bg-yellow-400 text-black";
  const inactiveStyle = "text-white hover:bg-gray-700";

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 flex gap-4 font-semibold shadow-md sticky top-0 z-50">
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
    </nav>
  );
}