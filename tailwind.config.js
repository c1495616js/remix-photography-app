const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        RadioCanada: ['RadioCanada', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'RadioCanada',
          fontWheight: '500',
          src: 'url(/app/public/fonts/RadioCanada-Regular.ttf)',
        },
      });
    }),
  ],
};
