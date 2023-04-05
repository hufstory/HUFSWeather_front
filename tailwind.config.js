/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        default: "0px 6px 15px 1px rgba(0, 0, 0, 0.09)",
      },
    },
    fontFamily: {
      NotoSansKRBlack: ["NotoSansKR-Black", "sans-serif"],
      NotoSansKRBold: ["NotoSansKR-Bold", "sans-serif"],
      NotoSansKRLight: ["NotoSansKR-Light", "sans-serif"],
      NotoSansKRMedium: ["NotoSansKR-Medium", "sans-serif"],
      NotoSansKRRegular: ["NotoSansKR-Regular", "sans-serif"],
      NotoSansKRThin: ["NotoSansKR-Thin", "sans-serif"],
    },
    borderRadius: {
      today: "0px 30px 30px 30px"
    },
  },

  variants: {
    extends: {},
  },
  plugins: [],
}
