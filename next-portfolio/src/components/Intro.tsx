"use client";

const Intro = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">
        Namaste!
        <span className="emoji wave-hand" aria-label="namaste hand" />
      </h1>

      <h2 className="intro__tagline">
        I&apos;m{" "}
        <span className="emoji technologist" aria-label="technologist" />{" "}
        <span className="name">Yash Vekaria</span>, a design-minded front-end
        software engineer focused on building beautiful interfaces &amp;
        experiences
      </h2>

      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="emoji pointer" aria-label="pointing right" />{" "}
        <span>
          <a
            href="mailto:yashvekaria@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            yashvekaria@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Intro;
