/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumGrey: '#666666',
        mediumRed: '#FF2C2C',
        lightGray: '#B8B8B8',
        vividRed: '#DA1002',
        vividOrangeRed: '#F5122D'
      },
      backgroundImage: {
        'hero-baner-background': "url('/public/assets_Image/bg-fuature-apps.png')"
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
  },
  plugins: [],
}