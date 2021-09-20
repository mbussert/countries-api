module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      "darkBlue": "var(--color-darkblue)",
      "veryDarkBlueBg": "var(--color-verydarkblue-bg)",
      "veryDarkBlueText": "var(--color-verydarkblue-text)",
      "darkGrayInput": "var(--color-darkgray-input)",
      "veryLightGrayBg": "var(--color-verylightgray-bg)",
      "white": "var(--color-white)",
    },
    fontFamily: {
      'sans': ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
