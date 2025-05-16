/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056b3',
          dark: '#004494',
          light: '#3378c5',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#333333',
          lighter: '#444444',
        }
      }
    },
  },
  plugins: [],
};