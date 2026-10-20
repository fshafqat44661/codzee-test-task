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
        brand: {
          DEFAULT: "#FF5800",
          dark: "#E04E00",
          light: "#FF7A33",
          soft: "#FFF0E8",
        },
        ink: {
          DEFAULT: "#121212",
          muted: "#4A4A4A",
          faint: "#7A7A7A",
        },
        surface: {
          DEFAULT: "#FAFAF8",
          warm: "#F7F3EF",
          dark: "#1A1A1A",
          charcoal: "#242424",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        proxima: [
          "var(--font-proxima)",
          "proxima-n-w01-reg",
          "Montserrat",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
