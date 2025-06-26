import React from "react";

interface ClickCountProps {
  count: number;
}

export default function ClickCount({ count }: ClickCountProps) {
  return (
    <div className="bg-gray-100 p-3 rounded-md flex items-center">
      <span className="font-medium mr-2">Count:</span>
      <span className="text-lg font-bold">{count}</span>
    </div>
  );
}
