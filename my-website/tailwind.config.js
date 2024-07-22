
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],  // Roboto için tanım
        'opensans': ['Open Sans', 'sans-serif'],  // Open Sans için tanım
      },
      screens: {
        'xs': '400px',  // 400px ekran genişliği için
        'sm': '640px',  // 640px ekran genişliği için
        'md': '768px',  // 768px ekran genişliği için
        'lg': '1024px', // 1024px ekran genişliği için
        'xl': '1280px', // 1280px ekran genişliği için
        '2xl': '1536px', // 1536px ekran genişliği için
      },
    },
  },
  plugins: [],
}