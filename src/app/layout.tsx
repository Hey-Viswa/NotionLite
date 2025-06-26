import React from "react";
import { Inter } from "next/font/google";
import "./global.css";
import db from '../lib/supabase/db'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Workspace App",
  description: "A Next.js application with Drizzle ORM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col items-center p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
