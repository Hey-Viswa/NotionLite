import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`${className} bg-blue-500 hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 text-white font-medium py-2 px-4 rounded transition-all cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
