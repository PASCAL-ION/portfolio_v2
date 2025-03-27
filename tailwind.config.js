/** @type {import('tailwindcss').Config} */
import { backgrounds } from './src/plugins/backgrounds.js';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        imgPro: "url('assets/imgPro.jpg')",
        imgPerso: "url('assets/imgPerso.jpg')",
        imgProjets: "url('assets/imgProjets.jpg')",
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
        },
      },
      animation: {
        'scroll-up': 'infinite-scroll-up 7s linear infinite',
        'scroll-down': 'infinite-scroll-down 7s linear infinite',
        'scroll-right': 'infinite-scroll-right 7s linear infinite',
        'scroll-left': 'infinite-scroll-left 7s linear infinite',
      },
    },
  },
  plugins: [],
}
