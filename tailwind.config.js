/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
        primary: "0 0 5rem #137C8B",
        blue: "0 0 1.5rem #137C8B",
      },
    },
    colors: {
      primary: {
        50: "#e0f5f7",
        100: "#b3e5ea",
        200: "#80d2da",
        300: "#4dbfc9",
        400: "#137C8B",
        500: "#116f7d",
        600: "#0e626f",
        700: "#0b545f",
        800: "#09474f",
        900: "#073b41",
        950: "#042328",
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#515152",
        800: "#464646",
        900: "#292929",
        950: "#16161b",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
