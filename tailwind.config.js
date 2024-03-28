const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/**.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"BrittiSans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "zima-yellow": "#FFAA00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('group-foo1', ':merge(.group).foo1 &')
    })
  ],
}
