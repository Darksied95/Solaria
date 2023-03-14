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
        svgColor: "#171934"
      },
      backgroundColor: {
        primary: "#fbf7f4",
        focus: "#eee6e1",
      },
      backgroundImage: {
        "pexel1": "url('/src/assets/pexel1.jpg')",
        "pexel2": "url('/src/assets/pexel2.jpg')",
        "pexel3": "url('/src/assets/pexel3.jpg')"
      }
    },
  },
  plugins: [],
}