"use client";

import { useEffect, useState } from "react";

const Intro = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Add wave animation on load
    const hand = document.querySelector(".wave-hand");
    if (hand) {
      setTimeout(() => {
        hand.classList.add("wave");
        setTimeout(() => {
          hand.classList.remove("wave");
        }, 2000);
      }, 1000);
    }
  }, []);

  const handleWaveHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    target.classList.add("wave");
  };

  const handleWaveLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    target.classList.remove("wave");
  };

  if (!isClient) {
    return null;
  }

  return (
    <header className="px-[100px] py-section h-screen flex flex-col justify-around max-w-container mx-auto md:px-[70px] sm:px-[50px] sm:py-section-mobile">
      <h1 className="text-xl font-light leading-none text-text-light dark:text-text-dark md:text-lg sm:text-base xs:text-xs xxs:text-xxs">
        Namaste!
        <span
          className="inline-block align-middle ml-2.5 w-10 h-10 bg-[url('/img/emojis/foldedhands.png')] bg-contain bg-no-repeat bg-center cursor-pointer md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-6 xs:h-6"
          aria-label="namaste hands"
          onMouseEnter={handleWaveHover}
          onMouseLeave={handleWaveLeave}
        />
      </h1>

      <h2 className="text-xl font-light leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-content md:text-lg sm:text-base xs:text-xs xxs:text-xxs">
        I&apos;m{" "}
        <span
          className="inline-block align-middle mr-1.5 w-10 h-10 bg-[url('/img/emojis/technologist.png')] bg-contain bg-no-repeat bg-center md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-6 xs:h-6"
          aria-label="technologist"
        />{" "}
        <span className="font-bold text-text-light dark:text-text-dark">
          Yash Vekaria
        </span>
        , a design-minded front-end software engineer focused on building
        beautiful interfaces &amp; experiences
      </h2>

      <h3 className="flex items-center text-contact font-normal sm:text-base">
        <span>Get in touch </span>
        <span
          className="inline-block align-middle mx-2.5 ml-1.5 w-10 h-10 bg-[url('/img/emojis/pointright.png')] bg-contain bg-no-repeat bg-center md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-6 xs:h-6"
          aria-label="pointing right"
        />{" "}
        <span>
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
