/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/food.jpeg'), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
      },
      colors: {
        primary: "#f9f9f9",
        secondary1: "#ecf2f6",
        secondary2: "#fd815d"
      },
      fontFamily: {
        'title': ['"Madimi One", sans-serif']
      }
    },
  },
  plugins: [],
}

