import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🔴 REQUIRED
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222831",
        foreground: "#FFFFFF",
        card: "#0F0F0F",
        border: "#1F1F1F",
        accent: "#3B82F6", 
      },
    },
  },
  plugins: [],
};
export default config;