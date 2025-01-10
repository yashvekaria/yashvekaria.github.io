import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#ffffff",
          dark: "#0a192f",
        },
        text: {
          light: "#1d1d1f",
          dark: "#e6f1ff",
          secondary: {
            light: "#36363a",
            dark: "#8892b0",
          },
        },
        link: {
          light: "#007bff",
          dark: "#64ffda",
          hover: {
            light: "#0056b3",
            dark: "#64ffda",
          },
        },
        switch: {
          light: "#83D8FF",
          dark: "#64ffda",
        },
      },
      maxWidth: {
        container: "1440px",
        content: "700px",
      },
      fontSize: {
        xxs: "1.4rem",
        xs: "1.5rem",
        sm: "1.75rem",
        base: "2rem",
        lg: "2.25rem",
        xl: "2.5rem",
        contact: "1.25rem",
      },
      spacing: {
        section: "120px",
        "section-mobile": "70px",
      },
      keyframes: {
        wave: {
          from: { transform: "none" },
          "15%": {
            transform: "translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg)",
          },
          "30%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg)",
          },
          "45%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg)",
          },
          "60%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg)",
          },
          "75%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg)",
          },
          to: { transform: "none" },
        },
      },
      animation: {
        wave: "wave 1s both",
      },
      fontFamily: {
        sans: ["Apercu", "-apple-system", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
