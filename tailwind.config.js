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
     lightenPrimary: '#3cac705c',
     secondary:'#FBBB07',
     } 
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
