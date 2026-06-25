"use client";

import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    // Wave the namaste hand once on load.
    const timers: ReturnType<typeof setTimeout>[] = [];
    const hand = document.querySelector(".wave-hand");
    if (hand) {
      timers.push(
        setTimeout(() => {
          hand.classList.add("wave");
          timers.push(
            setTimeout(() => hand.classList.remove("wave"), 2000),
          );
        }, 1000),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleWaveHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.classList.add("wave");
  };

  const handleWaveLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.classList.remove("wave");
  };

  return (
    <header className="px-6 py-section-mobile min-h-screen flex flex-col justify-around max-w-container mx-auto sm:px-[50px] md:px-[70px] md:py-section lg:px-[100px]">
      <h1 className="text-base font-light leading-tight text-text-light dark:text-text-dark sm:text-lg md:text-xl">
        Namaste!
        <span
          className="wave-hand inline-block align-middle ml-2.5 cursor-pointer text-[28px] sm:text-[34px] md:text-[40px]"
          aria-label="namaste hands"
          onMouseEnter={handleWaveHover}
          onMouseLeave={handleWaveLeave}
        >
          🙏
        </span>
      </h1>

      <h2 className="text-base font-light leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-content sm:text-lg md:text-xl">
        I&apos;m{" "}
        <span
          className="inline-block align-middle mr-1.5 text-[28px] sm:text-[34px] md:text-[40px]"
          aria-label="technologist"
        >
          👨‍💻
        </span>{" "}
        <span className="font-bold text-text-light dark:text-text-dark">
          Yash Vekaria
        </span>
        , a design-minded front-end software engineer focused on building
        beautiful interfaces &amp; experiences
      </h2>

      <h3 className="flex flex-wrap items-center gap-y-1 text-contact font-normal sm:text-sm md:text-base">
        <span>Get in touch </span>
        <span
          className="inline-block align-middle mx-2.5 ml-1.5 text-[28px] sm:text-[34px] md:text-[40px]"
          aria-label="pointing right"
        >
          👉
        </span>{" "}
        <span className="break-all">
          <a
            href="mailto:yashvekaria@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-0.5 px-[3px] font-normal no-underline transition-all duration-250 ease-custom box-decoration-clone hover:text-white bg-[length:100%_3px] hover:bg-[length:100%_100%] bg-gradient-to-t from-link-light dark:from-link-dark to-transparent bg-no-repeat bg-bottom"
          >
            yashvekaria@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Intro;
