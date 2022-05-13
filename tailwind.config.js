const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/images/hero.png')",
      }),
      colors: {
        dark: '#000',
        black: '#000',
      },
      fontFamily: {
        lato: 'Lato, sans-serif',
        roboto: 'Roboto, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // add a `first-of-type` variant
    plugin(function ({ addVariant, e }) {
      addVariant('first-of-type', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-of-type${separator}${className}`)}:first-of-type`;
        });
      });
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
};
