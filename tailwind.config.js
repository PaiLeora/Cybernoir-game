/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0a0a0f',
          dark: '#0f0f1a',
          neon: { blue: '#00d4ff', cyan: '#00ffcc' }
        }
      }
    }
  },
  plugins: [],
}
