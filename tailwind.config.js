/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Logo : 'Lexend Giga' ,
        Contact : 'Noto Serif Display',
        sign : 'Monsieur La Doulaise'
      },
      backgroundImage: {
        'home-pattern': "url('./src/Components/Home/Images/img-photo-1.jpg')",
        'Bridal-pattern': "url('./src/Components/Bridal/Images/img-photo-1.jpg')",
        'Services-pattern': "url('./src/Components/Services/Images/img-photo-1.jpg')",
        'About-pattern': "url('./src/Components/About/Images/img-photo-1.jpg')",
      },
    },
  },
  plugins: [],
}

