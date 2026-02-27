import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#111111", // Deep charcoal/near-black
          secondary: "#1A1A1A", // Dark warm gray
        },
        accent: {
          GOLD: "#C9A96E", // Warm brass/gold
        },
        text: {
          primary: "#F5F5F0", // Off-white
          secondary: "#9A9A8E", // Muted warm gray
        },
        surface: {
          DEFAULT: "#161616", // Subtle dark with slight warm undertone
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
