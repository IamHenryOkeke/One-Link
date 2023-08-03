/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        primaryFont : ['Montserrat', 'sans-serif'],
        secondaryFont :['Dancing Script', "cursive"],
        nameFont : ['Victor Mono', "monospace"]
      },
      keyframes : {
        wiggle:{
          '0%, 100%, 60%': { transform: 'rotate(0) scale(1)'},
          '75%': { transform: 'rotate(0) scale(1.12)' },
          '80%': { transform: 'rotate(0) scale(1.1)' },
          '84%': { transform: 'rotate(-10deg) scale(1.1)' },
          '88%': { transform: 'rotate(10deg) scale(1.1)' },
          '92%': { transform: 'rotate(-10deg) scale(1.1)' },
          '96%': { transform: 'rotate(10deg) scale(1.1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s infinite',
      }
    },
  },
  plugins: [],
}

