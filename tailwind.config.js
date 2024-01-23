/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      padding: {
        15: "15px",
        30: "30px",
        60: "60px",
        120: "120px",
        150: "150px",
        210: "210px",
      },
      margin: {
        15: "15px",
        30: "30px",
        60: "60px",
        120: "120px",
        150: "150px",
        210: "210px",
      },
      gap: {
        15: "15px",
        30: "30px",
        60: "60px",
        120: "120px",
        150: "150px",
        210: "210px",
      },
      screens: {
        desktop: "1440px",
        laptop: "1024px",
        tablet: "768px",
        phone: "400px",
      },
      colors: {
        white: {
          DEFAULT: "#E5DBC6",
        },
        black: {
          DEFAULT: "#272727",
        },
        red: {
          DEFAULT: "#DE2216",
        },
        yellow: {
          DEFAULT: "#EEC32D",
        },
        teal: {
          DEFAULT: "#B7D8CC",
        },
      },
      fontFamily: {
        brix: "brix-slab, serif",
        "nitti-underlined": "nitti-typewriter-underlined, sans-serif",
        "nitti-cameo": "nitti-typewriter-cameo, sans-serif",
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
      fontSize: {
        18: "18px",
        22: "22px",
        28: "28px",
        36: "36px",
        40: "40px",
        64: "64px",
      },
      lineHeight: {
        33: "33px",
      },
    },
  },
  plugins: [],
};
