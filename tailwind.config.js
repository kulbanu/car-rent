/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cherry: 'Cherry Bomb One',
      inter: 'Inter',
      arial: 'Arial',
    },
    extend: {
      colors: {
        primary: '#FF9689',
        secondary: '#ACDEE7',
        bg: '#FBF4EB',
        dark: '#4B4B4B',
      },
    },
  },
  plugins: [],
}
