import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#effef6",
          100: "#dafeea",
          200: "#b7fbd7",
          300: "#7ef7b8",
          400: "#3fe991",
          500: "#14bd66",
          600: "#0cad5a",
          700: "#0d8849",
          800: "#106b3e",
          900: "#0f5835",
          950: "#02311b",
        },
        blueee: {
          500: "#016cf0",
        },
        blaq: {
          1000: "#0a0a0a",
        },
        graay:{
          500: "dadce0",
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
