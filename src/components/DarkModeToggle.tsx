"use client";

import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useDarkMode } from "@/context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "light" ||
      (!theme && !window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center w-10 h-5 p-1 bg-gray-200 rounded-full dark:bg-gray-600 focus:outline-none cursor-pointer"
      >
        <span
          className={`transform transition-transform ${
            darkMode ? "translate-x-3" : "-translate-x-3"
          } w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center`}
        >
          {darkMode ? (
            <MoonIcon className="text-gray-700" />
          ) : (
            <SunIcon className="text-white" />
          )}
        </span>
      </button>
    </div>
  );
}
