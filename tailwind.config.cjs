/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        custom: {

          coolGray:'hsl(231, 11%, 63%)',
          LightGray: 'hsl(229, 24%, 87%)',
          Magnolia: 'hsl(217, 100%, 97%)',
          Alabaster: 'hsl(231, 100%, 99%)'
        }
      },
    },
  },
  plugins: [],
}
