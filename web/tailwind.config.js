/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage:{
        app: 'url(/app-bg.png)'
      },
      colors: {
        gray:{
          100: '#E1E1E6',
          300: '#8d8d99',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },
        yellow:{
          500: "#F7DD43",
          700: "#E5cd3d",
        },
        ignite: {
          500: '#129e57'
        }
      }
    },
  },
  plugins: [],
}
