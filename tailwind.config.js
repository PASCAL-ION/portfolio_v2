/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundSize: {
        '50%': '50%'
      },
      backgroundImage: {
        imgPro: "url('/assets/imgPro.jpeg')",
        imgPerso: "url('/assets/imgPerso.jpg')",
        imgProjets: "url('/assets/imgProjets.jpg')",
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        bigShoulders: ['"Big Shoulders Stencil"', 'cursive'],
      },
      keyframes: {
        'infinite-scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'infinite-scroll-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'infinite-scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'infinite-scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'scroll-up': 'infinite-scroll-up 20s linear infinite',
        'scroll-down': 'infinite-scroll-down 20s linear infinite',
        'scroll-right': 'infinite-scroll-right 20s linear infinite',
        'scroll-left': 'infinite-scroll-left 20s linear infinite',
      },
    },
  },
  plugins: [],
}
