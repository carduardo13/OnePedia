import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      luffyColor: "#ff4400b2",
      namiColor: "#ffa600ad",
      zoroColor: "#00ff0079",
      white: "#ffff",
      black: "#000",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
