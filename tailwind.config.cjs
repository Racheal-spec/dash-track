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
      lightgreenbg: "#E1E9E5",
      textHeaderDark: "#1E1E1E",
      black: "#000000",
      greylight: "#D6D6D6",
      secondary: "#9C912C",
      inputbg: "#9BAA9E",
      white: "#ffffff",
      textPlaceholder: "#858585",
      hoverColor: "#857B23",
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
};
