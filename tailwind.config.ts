import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s infinite",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      },
      keyframes: {
      },
    },
  },
  plugins: [],
};

export default config;