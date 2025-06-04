/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      
      },
      colors: {
        'Color1': '#111111',
        'Color2': '#1A1A1A',
        'Color3': '#393939',
        'Color4': '#9396A4',
        'Color5': '#ffc86b',
        'Color6': '#fad28d'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideUp: 'slideUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
};
