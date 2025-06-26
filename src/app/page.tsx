"use client";

import Button from "@/components/Button";
import ClickCount from "@/components/ClickCount";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Welcome to Next.js with Drizzle</h1>
      <p className="text-gray-600">Your workspace is ready to use!</p>

      <div className="flex gap-4">
        <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
        <ClickCount count={count} />
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Current Database Schema</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto max-w-full"></pre>
      </div>
    </div>
  );
}
