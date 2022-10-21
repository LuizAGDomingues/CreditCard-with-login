/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      'gray-100': '#e1e1e6',
      'gray-200': '#c4c4cc',
      'gray-400': '',
      'gray-800': '',
      'gray-900': '',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
