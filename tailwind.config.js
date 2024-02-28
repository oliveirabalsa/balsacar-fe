/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '90s': '90vh',
        '70s': '70vh'
      },
      colors: {
        primary: '#D21920',
        lightgray: '#E8E8E8'
        // shadow: '#0F0F0F33'
      }
    }
  },
  plugins: []
}
