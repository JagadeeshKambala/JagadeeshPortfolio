import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        muted: "#8a8a8a",
        subtle: "#1a1a1a",
        accent: "#1e90ff",
      },
      fontSize: {
        hero: "clamp(3rem, 6vw, 6.5rem)",
        section: "clamp(2.2rem, 4vw, 4rem)",
        body: "1rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
        wideplus: "0.15em",
      },
      lineHeight: {
        hero: "1.05",
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;
