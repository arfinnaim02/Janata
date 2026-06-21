import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#071A35",
        navy: "#03111F",
        marine: "#2E8B57",
        accent: "#4CA53A",
        light: "#F8FAFC",
        textgray: "#64748B",
      },

      fontFamily: {
        sans: [
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },

      boxShadow: {
        marine:
          "0 20px 50px rgba(3, 17, 31, 0.18)",
      },
    },
  },

  plugins: [],
};

export default config;