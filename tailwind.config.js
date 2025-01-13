/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        twitter: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontWeight: {
        'twitter-regular': '400',
        'twitter-medium': '500',
        'twitter-bold': '700',
      },
      boxShadow: {
        morebox:
          'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
        feedbox:
          'rgba(255, 255, 255, 0.1) 0px 0px 1px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px',
      },
      dropShadow: {
        morebox:
          'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
      },
    },
  },
  plugins: [],
};
