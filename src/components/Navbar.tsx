import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-6 border-b shadow">
      <Link href="/trade">Trade</Link>
      <Link href="/team">Team</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/news">News</Link>
    </nav>
  );
}