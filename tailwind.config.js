const colorTokens = require("./src/theme")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins'],
        'title': ['BenchNine'],
      }, 
      colors: colorTokens
    },
  },
  plugins: [],
}


