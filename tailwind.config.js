/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cherry: 'Poppins',
      oranienbaum: 'Oranienbaum',
      inter: 'Inter',
      arial: 'Arial',
      body: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#C1DCDC',
        lightprimary: '#ffb6ad',
        secondary: '#ACDEE7',
        bg: '#FBF4EB',
        dark: '#4B4B4B',
      },
    },
  },
  plugins: [],
}
