/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        light: '#F8F9FD',
        dark: '#131E3F',
        primary: '#2579D1',
        secondary: '#F6FAFD',
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

