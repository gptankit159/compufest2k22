const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        head: ['"Major Mono Display"', "monospace"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      teal: colors.teal,
      white: colors.white,
      black: colors.black,
      indigo: colors.indigo,
      // Custom colors
      accent: "#67fff4",
      bg_custom:"#c9c9c9"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
