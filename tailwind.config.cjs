/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        souvenir: ["Souvenir", "sans-serif"],
      },
      colors: {
        blue: {
          1: "#4C8EFA",
          2: "#41EFE7",
        },
        green: {
          1: "#65DA70",
        },
        yellow: {
          1: "#FBCC41",
        },
        black: {
          1: "rgb(18,18,18)",
          2: "#242424",
        },
        red: {
          1: "#F34356",
        },
        pink: {
          1: "#DA36CD",
        },
      },
    },
  },
  plugins: [],
};
