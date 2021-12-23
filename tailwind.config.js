module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {
     spacing: {
      128: '32rem',
     },
    colors:{
     primary:'#3CAC70',
     secondary:'#FBBB07',
     }
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
