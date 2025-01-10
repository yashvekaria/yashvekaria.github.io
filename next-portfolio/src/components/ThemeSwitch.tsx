"use client";

import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      return;
    }

    // Then check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    // Finally check time (between 7pm and 7am)
    const hours = new Date().getHours();
    const isNight = hours >= 19 || hours <= 7;
    if (isNight) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center absolute top-[20px] right-[30px] z-50 sm:top-[10px] sm:right-[20px]">
      <div className="w-[17px] h-[17px] bg-[url('/img/switch/sun.svg')] dark:bg-[url('/img/switch/sun-white.svg')] bg-no-repeat bg-center bg-contain" />
      <div className="mx-[10px]">
        <input
          id="switch"
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="peer h-0 w-0 invisible absolute"
        />
        <label
          htmlFor="switch"
          className={`cursor-pointer indent-[-9999px] w-[45px] h-[25px] bg-[#888] block rounded-full relative transition-all duration-250 ease-custom
            after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-[19px] after:h-[19px] after:bg-white after:rounded-full after:transition-all after:duration-250 after:ease-custom
            peer-checked:bg-[#64ffda] peer-checked:after:left-[calc(100%-3px)] peer-checked:after:translate-x-[-100%]`}
        >
          Toggle
        </label>
      </div>
      <div className="w-[17px] h-[17px] bg-[url('/img/switch/moon.svg')] dark:bg-[url('/img/switch/moon-white.svg')] bg-no-repeat bg-center bg-contain" />
    </div>
  );
};

export default ThemeSwitch;
