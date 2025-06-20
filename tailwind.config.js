/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff9301",
        lightOrange: "#fdba74",
        kulrang: "#f7f7ff",
        kulrang_text: "#7b7b7b",
        black: "#0b0b13",
      },
      fontFamily: {
        mario: ["New Super Mario Font U", "sans-serif"],
        gagalin: ["Gagalin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
