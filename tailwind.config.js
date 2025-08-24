/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        background: "#0F172A",
      },
      fontFamily: {
        'header': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

