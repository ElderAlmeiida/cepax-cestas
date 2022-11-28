/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
      color:{
        black:'#000',
        white:'#fff',


        red:'FF0000',

        amarelo:'#FFF1A8',
        transparet:'transparent' 
        
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      

    extend: {

      fontFamily: {
         sans: ['Inconsolata', 'monospace']
      }

    },
  },
  plugins: [],
}
