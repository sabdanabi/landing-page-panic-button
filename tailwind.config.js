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
        vividOrangeRed: '#F5122D',
        darkGray: '#3b3b3b',
        blacc: '#101828',
        test: '#475467',
        paradisePink: '#E74C82',
        tuftsBlu: '#3089DC',
        mediumSlateBlue: '#747BE9',
        mediumAquamarine: '#4CE797',
        burntSienna: '#E78F4C',
        mediumOrchid: '#974CE7'
      },
      backgroundImage: {
        'hero-baner-background': "url('/public/assets_Image/bg-fuature-apps.png')"
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    // screens: {
    //   '3xl' : '2560px'
    // }
  },
  plugins: [],
}
