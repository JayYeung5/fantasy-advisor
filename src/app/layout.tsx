'use client';

import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full w-full bg-gray-900 text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}