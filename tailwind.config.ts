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
        'rich-black': '#071013',
        'pacific-cyan': '#23b5d3',
        'moonstone': '#75abbc',
        'cadet-gray': '#a2aebb',
        'platinum': '#dfe0e2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(to bottom, #071013, #23b5d3, #75abbc, #a2aebb, #dfe0e2)",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
