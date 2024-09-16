/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        OnlyUsedTeslaRed: "#E80013",
        OnlyUsedTeslaRedHover: "#6c7884"
      }
    },
  },
  plugins: [],
}

