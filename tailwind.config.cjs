/** @type {import('tailwindcss').Config} */
const utils = require('./tailwind/utils');
module.exports = {
  prefix: 'tw-',
  content: ['./**/*.liquid', './frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        worksans: '"Work Sans", sans-serif',
        'league-spartan': '"League Spartan", sans-serif',
      },
      maxWidth: {
        default: '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          xs: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6.5rem',
        },
        screens: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '800px', // Custom width for large screens
          xl: '1000px', // Custom width for extra-large screens
          xlg: '1200px', // Custom width for 2xl screens
          x2lg: '1440px', // Custom width for 2xl screens
        },
      },
    },
    screens: {
      xs: '320px',
      sm: '520px',
      md: '750px',
      lg: '990px',
      xl: '1200px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
  },

  plugins: [utils],
};
