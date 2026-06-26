/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feng-shui': {
          red: '#8B0000',
          'red-light': '#A52A2A',
          gold: '#D4AF37',
          'gold-light': '#FFD700',
          green: '#2E5C3F',
          'green-dark': '#1A3D2E',
        },
      },
    },
  },
  plugins: [],
}
