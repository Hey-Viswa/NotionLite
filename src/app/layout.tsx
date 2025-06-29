import React from "react";
import { Inter } from "next/font/google";
import "./global.css";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import db from "../lib/supabase/db";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";

const inter = DM_Sans({ subsets: ["latin"] });

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
      <body className={twMerge(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
