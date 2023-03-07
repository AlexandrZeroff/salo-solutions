/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'th-primary':'#0D1B43',
        'th-secondary': '#3d4969',
        'th-gray':'#989898',
        'th-blue': '#0D1B43',
        'th-pale': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        'heading': 'Akshar, sans-serif',
        'body': 'Roboto, sans-serif',
      },
      backgroundImage: {
        'header-sm': "url('/src/assets/header-bg-sm.png')",
      },
      boxShadow: {
        'default': '0px 6px 40px rgba(143, 167, 209, 0.4)',
      }
    },
  },
  plugins: [],
}
