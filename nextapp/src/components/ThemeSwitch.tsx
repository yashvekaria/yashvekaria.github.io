"use client";

import { useSyncExternalStore } from "react";

const THEME_EVENT = "themechange";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

// Read the current theme straight from the DOM. The pre-hydration script in
// <head> applies `.dark` before paint; this just reflects it.
function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

const ThemeSwitch = () => {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <div className="flex justify-center items-center absolute top-[30px] right-[30px] z-50 sm:top-[20px] sm:right-[20px]">
      <div className="w-[17px] h-[17px] bg-[url('/img/switch/sun.svg')] dark:bg-[url('/img/switch/sun-white.svg')] bg-no-repeat bg-center bg-contain" />
      <div className="mx-[10px]">
        <input
          id="switch"
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
          className="peer h-0 w-0 invisible absolute"
        />
        <label
          htmlFor="switch"
          className={`cursor-pointer indent-[-9999px] w-[45px] h-[25px] bg-[#888] block rounded-full relative transition-all duration-250 ease-custom
            after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-[19px] after:h-[19px] after:bg-white after:rounded-full after:transition-all after:duration-250 after:ease-custom
            peer-checked:bg-[#bae67e] peer-checked:after:left-[calc(100%-3px)] peer-checked:after:translate-x-[-100%]`}
        >
          Toggle
        </label>
      </div>
      <div className="w-[17px] h-[17px] bg-[url('/img/switch/moon.svg')] dark:bg-[url('/img/switch/moon-white.svg')] bg-no-repeat bg-center bg-contain" />
    </div>
  );
};

export default ThemeSwitch;
