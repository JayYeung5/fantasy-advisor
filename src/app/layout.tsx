import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Fantasy Trade Advisor",
  description: "LLM-powered NBA trade evaluator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}