/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryColor: "#99DF04",
      secondary: "#395107",
      smallcardColor: "#EAEAEA",
      darkSmallCardColor: "#4D5342",

      lightgreenbg: "#E1E9E5",
      textHeaderDark: "#1E1E1E",
      black: "#000000",
      greylight: "#D6D6D6",

      greenDark: "#2A6F39",
      urlColor: "#323232",

      inputbg: "#9BAA9E",
      lightGreen: "#9FB8A5",
      lineColor: "#778C7B",
      offwhite: "#FDFFFD",
      white: "#ffffff",
      textPlaceholder: "#858585",
      hoverColor: "#857B23",
      invalid: "#F64747",
      darkbg: "#05100B",
      textDark: "#989898",
      darkInputBg: "#0C1511",
      darkStroke: "#162019",
    },
    animation: {
      ease: "ease 0.5s ease-in-out",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  // screens: {
  //   sm: "640px",
  //   // => @media (min-width: 640px) { ... }

  //   md: "768px",
  //   // => @media (min-width: 768px) { ... }

  //   lg: "1024px",
  //   // => @media (min-width: 1024px) { ... }

  //   xl: "1280px",
  //   // => @media (min-width: 1280px) { ... }

  //   "2xl": "1536px",
  //   // => @media (min-width: 1536px) { ... }
  // },
};
