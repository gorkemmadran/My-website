/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'xs': {'min': '320px', 'max': '639px'}, // Çok küçük ekranlar (telefonlar)
        'sm': {'min': '640px', 'max': '767px'}, // Küçük ekranlar (büyük telefonlar)
        'md': {'min': '768px', 'max': '1023px'}, // Orta ekranlar (tabletler)
        'lg': {'min': '1024px', 'max': '1279px'}, // Büyük ekranlar (küçük dizüstü bilgisayarlar)
        'xl': {'min': '1280px', 'max': '1535px'}, // Çok büyük ekranlar (büyük dizüstü bilgisayarlar)
        '2xl': {'min': '1536px'}, // Ekstra büyük ekranlar (masaüstü ve yukarısı)
      },
    },
  },
  plugins: [],
}
