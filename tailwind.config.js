/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F7F7F7',
          200: '#EFEFEF',
        },
      },
      rotate: {
        270: '270deg',
      },
      spacing: {
        120: '28rem',
      },
      fontSize: {
        xxs: '0.75rem',
      }
    },
  },
  plugins: [],
}