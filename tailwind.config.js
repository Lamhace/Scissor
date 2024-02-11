/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141414',
        secondary: '#005AE2',
        tertiary: '#FFFFFF',
        lightblue: '',
        deepblue: '#1d2951'
      },
      fontFamily: {
        family: ['Roboto', 'sans-serif'],
      },
      screens: {
        'ls': '450px',
        'xs': '350px'
      }
    },
  },
  plugins: [],
}

