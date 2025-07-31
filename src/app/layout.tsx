'use client';

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full w-full bg-gray-900 text-white overflow-x-hidden">
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}