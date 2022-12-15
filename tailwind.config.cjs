/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        slideIn: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      },
      clip: {},
      backgroundImage: {
        first: "url('/background.png')",
      },
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
          2: "#12d382",
        },
        yellow: {
          1: "#FBCC41",
          2: "#F9C74F",
        },
        black: {
          1: "rgb(18,18,18)",
          2: "#242424",
          3: "rgba(255, 255, 255, 0.2)",
        },
        red: {
          1: "#F34356",
          2: "#b3193d",
        },
        pink: {
          1: "#DA36CD",
          2: "#974081",
        },
      },
    },
  },
  plugins: [],
};
