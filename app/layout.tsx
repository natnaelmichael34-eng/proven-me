import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proven Me | AI Study Companion",
  description: "Study smarter with AI-powered explanations, podcasts, quizzes, and saved progress.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
