/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      playfair: ["Playfair Dsiplay", "serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        accent: {
          dark: "#A4515C",
          DEFAULT: "#FCC7BB",
          hover: "#7E9181",
          light: "#DEC612",
          blue: "#0A2463",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
