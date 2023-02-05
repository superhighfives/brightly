/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
