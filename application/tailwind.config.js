/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{tsx,html,scss}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        'nocash': {  DEFAULT: '#AD13AF', 20: '#FEF6FE', 50: '#FAD1FA',  100: '#F7BFF8',  200: '#F39AF4',  300: '#EE75F0',  400: '#EA50EC',  500: '#E62CE8',  600: '#D117D4',  700: '#AD13AF',  800: '#7B0E7C',  900: '#49084A',  950: '#300530'},
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

