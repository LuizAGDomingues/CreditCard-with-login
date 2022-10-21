/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      'gray-100': '#e1e1e6',
      'gray-200': '#c4c4cc',
      'gray-400': '#7c7c8a',
      'gray-800': '#202024',
      'gray-900': '#121214',
      'cyan-300'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
