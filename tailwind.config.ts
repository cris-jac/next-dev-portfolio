import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--font-josefinsans)"],
        manjari: ["var(--font-manjari)"]
      },
      colors: {
        'light-color': '#F4F3F7',
        'dark-color': '#27252E',
        'middle':'#8E8C93',
        'primary-color': '#4A3F7D',
        'secondary-color': '#b0aac6',
        // 'secondary-color': '#938BB1',
        'accent-color': '#E3B03B'
      }
    },
  },
  plugins: [],
};
export default config;
