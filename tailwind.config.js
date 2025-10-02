/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      display: ['portrait', 'landscape'],
      colors: {
        primary: "#3B82F6",
        background: "#0F172A",
        foundation: "#F8FAFC",
      },
      fontFamily: {
        'header': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

