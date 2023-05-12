/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": {
          0: '#20211D',
        },
        "light-green": {
          0: "#38382F"
        },
        "light-tan": {
          0: "#B5BAA4"
        }
      },
    },
  },
  plugins: [],
}

