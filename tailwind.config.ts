import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a18",
        ivory: "#f7f4ee",
        sandstone: "#d8cdb8",
        clay: "#a9906f",
        green: {
          moroccan: "#2f4a3c",
        },
        burgundy: "#5c1f2b",
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "editorial": ["1.375rem", { lineHeight: "1.6" }],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      maxWidth: {
        prose2: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
