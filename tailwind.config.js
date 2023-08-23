/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./portfolio.html"],
  theme: {
    minWidth: {
      250: "250px",
      512: "512px",
      auto: "auto",
    },
    minHeight: {
      0: "0",
      250: "250px",
    },
    extend: {
      spacing: {
        105: "105%",
      },
      inset: {
        80: "80%",
        50: "50%",
        36: "36%",
        unset: "unset",
      },
      colors: {
        my: {
          100: "#fffffb", //vitt ish
          200: "#eceaed", //5ljustext5
          300: "#fec158", //4orange4
          400: "#4D4C7D", //1ljusare bakgrund1
          500: "#404457", //3mörkgrå 3
          700: "#a468e3", //7ljuslila 7
          800: "#5e6072", //6grå 6
          900: "#363062", //2mörk bakgrund2
        },
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    textShadow: {
      23: "-13px 11px 10px rgba(0,0,0,23%)",
      33: "-13px 11px 10px rgba(0,0,0,33%)",
    },
  },
  plugins: [],
};
