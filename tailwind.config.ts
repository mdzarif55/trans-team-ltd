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
        navy: {
          50: "#F0F5FA",
          100: "#E1EBF5",
          200: "#C3D7EC",
          300: "#96BCDE",
          400: "#5E9AC9",
          500: "#367CB3",
          600: "#265F93",
          700: "#1E4B75",
          800: "#163857",
          900: "#10243A", // Deep Navy
          950: "#091827", // Dark Navy
        },
        brand: {
          orange: "#F28C28", // Corporate Orange
          "orange-hover": "#D9771B",
          "orange-light": "#FFF3E6",
        },
        slate: {
          light: "#F5F7FA",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(16, 36, 58, 0.04), 0 1px 3px rgba(16, 36, 58, 0.02)",
        card: "0 4px 20px -2px rgba(16, 36, 58, 0.08), 0 2px 6px -1px rgba(16, 36, 58, 0.04)",
        cardHover: "0 12px 32px -4px rgba(16, 36, 58, 0.14), 0 4px 12px -2px rgba(16, 36, 58, 0.06)",
        navyGlow: "0 8px 30px rgba(16, 36, 58, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
