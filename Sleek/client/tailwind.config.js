/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wh1: '#F2F2F2',
        wh2: '#F0ECEC',
        p: '#8F00FF',
        purp: '#8F00FF',
        b1: '#181818',
      },
     gradients: {
        'gd1': 'linear-gradient(to right, #6EE7B7, #48BB78)',
      },
    },
   
  },
  plugins: [],
}

