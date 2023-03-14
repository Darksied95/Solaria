/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c7b79",
        svgColor: "#171934",
        focus: "#eee6e1"
      },
      backgroundColor: {
        primary: "#fbf7f4"
      }
    },
  },
  plugins: [],
}