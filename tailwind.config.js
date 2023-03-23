/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      GangwonBold: ["GangwonEduPowerExtraBoldA", "sans-serif"],
      GmarketMedium: ["GmarketSansMedium", "sans-serif"],
      GmarketLight: ["GmarketSansLight", "sans-serif"],
      Jalnan: ["Jalnan", "sans-serif"],
    },
  },

  variants: {
    extends: {},
  },
  plugins: [],
}
