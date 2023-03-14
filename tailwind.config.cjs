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
        pictureCoverColor: "#f9d9bb"
      },
      backgroundColor: {
        primary: "#fbf7f4",
        focus: "#eee6e1",
      },
      backgroundImage: {
        "pexel1": "url('/src/assets/pexel1.jpg')",
        "pexel2": "url('/src/assets/pexel2.jpg')",
        "pexel3": "url('/src/assets/pexel3.jpg')",
        "person1": "url('/src/assets/person1.jpg')",
        "person2": "url('/src/assets/person2.jpg')",
        "person3": "url('/src/assets/person3.jpg')",
      }
    },
  },
  plugins: [],
}