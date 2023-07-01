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
      // primaryColor: "#99DF04",
      primaryColor: "#6fffe9",
      // secondary: "#395107",
      secondary: "#1c2541",
      smallcardColor: "#f3fbfb",
      darkSmallCardColor: "#0b0d13b6",

      lightgreenbg: "#E1E9E5",
      textHeaderDark: "#FDFDFD",
      black: "#000000",
      greylight: "#D6D6D6",

      primaryDark: "#5bc0be",
      urlColor: "#323232",
      redColor: "#D14B4B",
      inputbg: "#9BAA9E",
      lightGreen: "#9FB8A5",
      lineColor: "#418685ed ",
      offwhite: "#FDFFFD",
      white: "#ffffff",
      textPlaceholder: "#858585",
      hoverColor: "#857B23",
      invalid: "#F64747",
      // darkbg: "#05100B",
      darkbg: "#040404",
      textDark: "#ABABAB",
      darkInputBg: "#0b0d13ca",
      // darkInputBg: "#0C1511",
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
