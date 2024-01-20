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
        210: "210px",
      },
      margin: {
        15: "15px",
        30: "30px",
        60: "60px",
        120: "120px",
        210: "210px",
      },
      gap: {
        15: "15px",
        30: "30px",
        60: "60px",
        120: "120px",
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
          DEFAULT: "#373737",
        },
        red: {
          DEFAULT: "#CB352C",
        },
        yellow: {
          DEFAULT: "#EEC32D",
        },
        teal: {
          DEFAULT: "#B7D8CC",
        },
      },
    },
  },
  plugins: [],
};
