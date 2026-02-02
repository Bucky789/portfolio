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