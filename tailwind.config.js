const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [require("@tailwindcss/aspect-ratio")],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
}
