'use client';
import { useState, useEffect } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export function ThemeToggle() {
  const [current, setCurrent] = useState<"light" | "dark" | undefined>(
    undefined
  );

  useEffect(() => {
    // Simple theme detection without nextra-theme-docs
    if (typeof window !== 'undefined') {
      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setCurrent(theme as "light" | "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = current === "dark" ? "light" : "dark";
    setCurrent(newTheme);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <button
      aria-label="toggle dark mode"
      className="text-xl"
      onClick={toggleTheme}
    >
      {current === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
