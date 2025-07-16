/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ingeris-orange': 'rgb(222,148,58)',
        'ingeris-orange-dark': 'rgb(200,133,52)',
        'ingeris-dark': '#1f2937',
        'ingeris-gray': '#6b7280',
        'ingeris-footer': '#302e2f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 