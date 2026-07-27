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
        // Scoped to the /landing lead-page experiments ONLY. Do not use these
        // outside src/components/landing — the main site keeps its single
        // accent-GOLD. Delete this group if the experiments are retired.
        landing: {
          cream: "#F5F1EA", // Option A page background
          paper: "#FFFDF9", // Raised cards on cream
          ink: "#17150F", // Option B page background / headings on cream
          body: "#4A4438", // Body copy on cream
          muted: "#6E6558", // Micro-labels, captions
          bronze: "#9A6B33", // Primary CTA fill
          brass: "#C79A5C", // Accent on dark
          sand: "#A9946F", // Eyebrow labels on dark
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        // /landing experiments only — see the `landing` color group above.
        display: ["var(--font-instrument-serif)", "serif"],
        grotesk: ["var(--font-manrope)", "sans-serif"],
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
