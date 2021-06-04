const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [require("@tailwindcss/aspect-ratio")],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.teal[400],
          bright: colors.teal[500],
          dim: colors.teal[200],
        },
        layer: {
          0: colors.blueGray[900],
          1: colors.blueGray[800],
          2: colors.blueGray[700],
          3: colors.blueGray[600],
        },
      },
      pointerEvents: ["hover"],
    },
  },
  variants: {
    extend: {},
  },
}
