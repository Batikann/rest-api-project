/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'v-dark-blue': 'hsl(207, 26%, 17%)',
        'v-dark-blue-text': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'v-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
