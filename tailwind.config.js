/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        arcuta: "Arcuata",
        vegan: "vegan",
        confortaa: "confortaa",
      },
      screens:{
        'phone':'1px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      spacing: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
      fontSize: {
        '10xl':'10.052rem'
      }
    },
  },
  plugins: [],
}