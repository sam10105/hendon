const aspectRatio = require('@tailwindcss/aspect-ratio');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heebo: ['Heebo', ...defaultTheme.fontFamily.sans],
      sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  plugins: [aspectRatio],
};
