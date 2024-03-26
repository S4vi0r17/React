/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e6626f',
        secondary: {
          100: '#f5e19c',
          200: '#efae78'
        },
        tertiary: {
          100: '#a2ca8e',
          200: '#66af91'
        }
      }
    },
  },
  plugins: [],
}

