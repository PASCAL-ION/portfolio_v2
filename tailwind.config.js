/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      cursor: {
        proImage: "url(./src/assets/pro-cursor.jpg) -30 120, auto",
        persoImage: "url(./src/assets/perso-cursor.jpg) -30 120, auto",
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
      },
      animation: {
        'scroll-up': 'infinite-scroll-up 7s linear infinite',
        'scroll-down': 'infinite-scroll-down 7s linear infinite',
      },
    },
  },
  plugins: [],
}
