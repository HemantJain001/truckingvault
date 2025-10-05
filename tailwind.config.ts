import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A748",
          light: "#E8C57B",
          dark: "#B8903D",
        },
        gold: {
          DEFAULT: "#D4A748",
          light: "#E8C57B",
          dark: "#B8903D",
        },
        dark: {
          DEFAULT: "#0A0F1C",
          light: "#1A1F2E",
          lighter: "#2A2F3E",
        },
        glass: {
          DEFAULT: "rgba(26, 31, 46, 0.7)",
          light: "rgba(42, 47, 62, 0.5)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'glass': '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
        'subtle': '0 2px 8px 0 rgba(212, 167, 72, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
