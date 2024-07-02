/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      poppins : 'poppins',
      cooperLtBt  : 'cooper lt bt ',
    },
    extend: {
      colors: {
      BorderColor: '#000000',
      BorderColorI: '#bcbcbc',
      BorderColorII: '#cfcfcf',
      BorderColorIII: '#8e8e8e',
      BannerBg: '#FBFBFB',
      BannerBgI: '#f6f6f6',
      BannerBgII: '#fDfDfD',
      Green: '#028643',
      Orange: '#FC8A06',
      lightBrown: '#f4b99f',
      signIn: '#c96439',
      HeaderBg: '#FAFAFA',
      lightGradient1: '#EEEEEE',
      lightGradient2: '#E0E1DC',
      FooterColor: '#D9D9D9',
      FooterMainColor: '#E8E8E8',
      FooterBottomColor: '#03081F',
      PopCatBg: '#f5f5f5',
      BannerResBg: '#f4f4f4',
      OfferBg: '#f3f3f3',
    },   
  },
  },
  plugins: [],
}

