/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', '"Open Sans"', '"Nunito Sans"'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-motion')
  ],
}

