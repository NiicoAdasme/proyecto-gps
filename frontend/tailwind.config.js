/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        paletaAzul1 : '#5F84A2',
        paletaAzul2 : '#91AEC4',
        headerTabla : '#E5C6C6',
        paletaAzul3 : '#194569',
        paletaAzul3Hover : '#5c7fbb',
        paginationSelect : '#1e2c40',
        paginationSelected : '#85a7c9'
      }
    },
  },
  plugins: [],
}

