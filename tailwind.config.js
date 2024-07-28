/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-purple":
          "linear-gradient(to right, #1f2937 0%, rgba(42, 20, 84, 1) 100%)",
      },
      colors: {
        primary: {
          themeSecondary: "#2a1454",
          themePrimary: "#8750f7",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
